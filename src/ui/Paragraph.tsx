interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={` ${className} text-sm font-vietnam text-text xs:text-base xs:text-left`}
    >
      {children}
    </p>
  );
}
