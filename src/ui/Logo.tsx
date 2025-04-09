import logo from "/logo.png";

interface LogoProps {
  width?: string;
}

export function Logo({ width }: LogoProps) {
  return (
    <div className={`${width}`}>
      <img
        className="h-full w-full scale-[2] object-contain"
        src={logo}
        alt="ta"
      />
    </div>
  );
}
