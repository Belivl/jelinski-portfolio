
export function ExonPost() {
  return (
    <div className="flex flex-col gap-9 rounded-md w-full">
      <div>
        <h2>Animation</h2>
        <h3>Video</h3>
      </div>
      <iframe
        width="1920"
        height="778"
        className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
        src="https://www.youtube.com/embed/bGi3_TnjfeY"
        title="ExonNation Esport Team - Official Intro"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div>
        <h2>Variations</h2>
        <h3>Other</h3>
      </div>
      <iframe
        width="1920"
        height="778"
        className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
        src="https://www.youtube.com/embed/ETHVBRdolGA"
        title="ExonNation - NoFloorWindow R&D"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="1920"
        height="778"
        className="w-full rounded-xl overflow-clip hover:bg-primary/90 hover:border-grey-100 border border-grey-200"
        src="https://www.youtube.com/embed/gs2d1bUQGuM"
        title="ExonNation - Red R&D"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
