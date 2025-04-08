import logo from "../assets/react.svg";

interface LogoProps {
  width?: string;
}

export function Logo({ width }: LogoProps) {
  return (
    <div className={`${width}`}>
      <img className="w-full" src={logo} alt="SG" />
    </div>
  );
}
