import { Logo } from "./Logo";

export function LoadingScreen() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Logo width="w-[100px] h-[101px]" />
    </div>
  );
}
