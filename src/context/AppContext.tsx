import { createContext, useContext, useEffect, useState } from "react";

interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: number;
  setNavigation: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<ContextValue>({
  isLoading: false,
  setIsLoading: () => {},
  theme: null,
  setTheme: () => {},
  isNavOpen: false,
  setIsNavOpen: () => {},
  navigation: 1,
  setNavigation: () => {},
});

interface AppContextProps {
  children: React.ReactNode;
}

export default function AppContext({ children }: AppContextProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<string | null>(() => {
    if (localStorage.getItem("theme")) {
      setIsLoading(true);
      return localStorage.getItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
      setIsLoading(true);
      return localStorage.getItem("theme");
    }
  });
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<number>(() => {
    if (localStorage.getItem("currentPage")) {
      return Number(localStorage.getItem("currentPage"));
    }
    localStorage.setItem("currentPage", "1");
    return Number(localStorage.getItem("currentPage"));
  });

  useEffect(() => {
    localStorage.setItem("theme", theme || "light");
    localStorage.setItem("currentPage", navigation.toString());
    setIsLoading(false);
  }, [theme, navigation]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        theme,
        setTheme,
        isNavOpen,
        setIsNavOpen,
        navigation,
        setNavigation,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useAppContext = (): ContextValue => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContext");
  }
  return context;
};
