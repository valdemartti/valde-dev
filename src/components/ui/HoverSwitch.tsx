import { cn } from "@/lib/utils";

export function HoverSwitch({
  children,
  className,
  ...props
}: {
  children: React.ReactNode[];
} & React.HTMLAttributes<HTMLDivElement>) {
  if (!children) return null;
  return (
    <div
      className={cn(
        "group relative h-5 flex items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:top-5 transition-all">
        {children[0]}
      </div>
      <div className="absolute -top-5 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all">
        {children[1]}
      </div>
    </div>
  );
}
