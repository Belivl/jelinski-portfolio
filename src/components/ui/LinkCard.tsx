export function LinkCard({
  href,
  portal,
  handle,
  children,
}: {
  href: string;
  portal: string;
  handle: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-8 rounded-2xl bg-foreground/5 border border-t-neutral-700 border-b-neutral-900 border-l-neutral-700/70 border-r-neutral-800 hover:bg-foreground/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-4"
    >
      {children}

      <div className="text-center">
        <h3 className="text-xl font-bold mb-1">{portal}</h3>
        <p className="text-sm text-gray-400">{handle}</p>
      </div>
    </a>
  );
}
