import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}>
      <div className="flex shrink-0 gap-[var(--gap)]">
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 gap-[var(--gap)]", {
                "animate-marquee": !vertical && !reverse,
                "animate-marquee-reverse": !vertical && reverse,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
              })}>
              {children}
            </div>
          ))}
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={`repeat-${i}`}
              className={cn("flex shrink-0 gap-[var(--gap)]", {
                "animate-marquee": !vertical && !reverse,
                "animate-marquee-reverse": !vertical && reverse,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
              })}>
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}
