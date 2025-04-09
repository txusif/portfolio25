import { Outlet, useNavigate, useNavigation } from "react-router";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { LoadingScreen } from "./LoadingScreen";
import { ParticlesBackground } from "../components/particles/ParticlesBackground";
import { NavigationButtons } from "./NavigationButtons";
import { Navbar } from "../components/navbar/Navbar";

export const resumeUrl = import.meta.env.VITE_RESUME_LINK as string;

export function AppLayout() {
  const { theme, navigation, setIsNavOpen } = useAppContext();
  const route = useNavigation();
  const isLoading = route.state === "loading";

  const navigate = useNavigate();

  useEffect(() => {
    switch (navigation) {
      case 1:
        navigate("/");
        break;

      case 2:
        navigate("/projects");
        break;

      case 3:
        navigate("/experience");
        break;

      case 4:
        navigate("/qualification");
        break;

      case 5:
        navigate("/about");
        break;

      case 6:
        navigate("/contact");
        break;

      default:
        break;
    }
    window.scrollTo(0, 0);
  }, [navigation, navigate]);

  function handleClick() {
    setIsNavOpen(false);
  }

  return (
    <div className={`theme-${theme}`} onClick={handleClick}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <NavigationButtons />
          <ParticlesBackground />
        </>
      )}
      <div className="absolute left-0 top-0 z-[-2] h-screen w-screen bg-background"></div>
    </div>
  );
}
