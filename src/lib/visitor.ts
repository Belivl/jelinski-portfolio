import FingerprintJS from '@fingerprintjs/fingerprintjs';

let visitorIdCache: string | null = null;

/**
 * Returns a persistent visitor ID for the current browser.
 * This is used for rate limiting and spam prevention without requiring login.
 */
export async function getVisitorId(): Promise<string> {
  if (visitorIdCache) return visitorIdCache;

  try {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    visitorIdCache = result.visitorId;
    return visitorIdCache;
  } catch (error) {
    console.error('Failed to get visitor ID:', error);
    // Fallback simple ID if fingerprint fails (random but persistent for session)
    return 'fallback-' + Math.random().toString(36).substring(2, 15);
  }
}
