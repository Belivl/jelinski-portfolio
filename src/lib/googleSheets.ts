/**
 * Utility to fetch data from a public Google Sheet using the Visualization API.
 */

export interface GoogleSheetResponse {
  table: {
    cols: { id: string; label: string; type: string }[];
    rows: { c: ({ v: any; f?: string } | null)[] }[];
  };
}

/**
 * Fetches data from a Google Sheet and returns it in a simplified array of objects.
 * @param sheetId The ID of the Google Sheet (from the URL).
 * @param sheetName Optional name of the specific sheet/tab.
 */
export async function fetchGoogleSheetData<T>(
  sheetIdOrUrl: string,
  sheetName?: string
): Promise<T[]> {
  try {
    // Extract ID and potentially GID if a full URL is provided
    let sheetId = sheetIdOrUrl;
    let gid = "";
    if (sheetIdOrUrl.includes("docs.google.com/spreadsheets/d/")) {
      const parts = sheetIdOrUrl.split("/d/");
      if (parts[1]) {
        sheetId = parts[1].split("/")[0];
        
        // Try to extract gid
        const gidMatch = sheetIdOrUrl.match(/[?&]gid=([0-9]+)/);
        if (gidMatch && gidMatch[1]) {
          gid = gidMatch[1];
        }
      }
    }

    // Use sheetName if provided, check if it's a numeric GID or a string name
    let sheetParam = "";
    if (sheetName) {
      if (/^\d+$/.test(sheetName)) {
        sheetParam = `&gid=${sheetName}`;
      } else {
        sheetParam = `&sheet=${encodeURIComponent(sheetName)}`;
      }
    } else if (gid) {
      sheetParam = `&gid=${gid}`;
    }

    // Add a cache-busting timestamp and request 1 header row for better labeling
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json${sheetParam}&headers=1&t=${Date.now()}`;
    //console.log(`[GoogleSheets] Fetching: ${url}`);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Google Sheet data: ${response.statusText}`);
    }

    const text = await response.text();
    
    // The Google Visualization API returns a JSONp-like string:
    const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
    if (!jsonMatch) {
      console.error("[GoogleSheets] Invalid response format. Text:", text.substring(0, 500));
      throw new Error("Invalid response format from Google Sheets");
    }

    const data: GoogleSheetResponse = JSON.parse(jsonMatch[1]);
    const { cols, rows } = data.table;

    // Map rows to objects using column labels (normalized to lowercase)
    const result = rows
      .map((row) => {
        const obj: any = {};
        let hasData = false;
        row.c.forEach((cell, index) => {
          const colLabel = (cols[index].label || `col${index}`).toLowerCase().trim();
          const value = cell ? cell.v : null;
          obj[colLabel] = value;
          if (value !== null && value !== "") hasData = true;
        });
        return hasData ? obj : null;
      })
      .filter((obj): obj is T => obj !== null);

    //console.log(`[GoogleSheets] Final processed data:`, result);
    return result;
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    throw error;
  }
}

/**
 * Hook-like function to fetch sheet data with a fallback.
 * Since we are in a Vite environment, we can use this in components.
 */
export async function getExternalDataWithFallback<T>(
  sheetId: string | undefined,
  sheetName: string | undefined,
  fallbackData: T[],
  useExternal: boolean = false
): Promise<T[]> {
  if (!useExternal || !sheetId) {
    return fallbackData;
  }

  try {
    const externalData = await fetchGoogleSheetData<T>(sheetId, sheetName);
    return externalData.length > 0 ? externalData : fallbackData;
  } catch (err) {
    console.warn("Falling back to local data due to fetch error:", err);
    return fallbackData;
  }
}
