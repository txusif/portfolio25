interface PageTitleSecondaryProps {
  title: string;
  className?: string;
}

export function PageTitleSecondary({
  title,
  className,
}: PageTitleSecondaryProps) {
  return (
    <h2
      className={`${className} font-semibold text-center font-vietnam uppercase text-lg text-accent xs:text-left xs:text-xl`}
    >
      {title}
    </h2>
  );
}
