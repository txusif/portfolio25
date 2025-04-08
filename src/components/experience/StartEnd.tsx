interface StartEndProps {
  start: string;
  end: string;
}

export function StartEnd({ start, end }: StartEndProps) {
  return (
    <span className="flex gap-1 text-xs xs:text-sm">
      <span className="text-text-secondary capitalize">{start}</span>
      <span className="text-text-secondary ">-</span>
      <span className="text-text-secondary capitalize">{end}</span>
    </span>
  );
}
