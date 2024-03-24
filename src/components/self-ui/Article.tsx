import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Article({
  title,
  slug,
  description,
  author,
  date,
}: {
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
}) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <ArticleBox>
      <a
        href={`/blog/${slug}`}
        className="absolute top-0 left-0 w-full h-full"
      ></a>
      <h2 className="font-semibold mb-1">{title}</h2>
      <p>{description}</p>
      <p className="text-xs text-muted-foreground mt-1">
        {day}.{month}.{year} - {author}
      </p>
    </ArticleBox>
  );
}

export function ArticleBox({
  skeleton = false,
  children,
}: {
  skeleton?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn("relative border border-white/10 p-4 rounded-md", {
        "bg-white/5 animate-pulse h-32": skeleton,
      })}
    >
      {children}
    </div>
  );
}
