export function Author({ name, date }: { name: string; date: string }) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <p className="text-xs text-muted-foreground mt-4">
      Written by {name} on {day}.{month}.{year}
    </p>
  );
}
