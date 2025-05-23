import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";
import { Button } from "./Button";

export function NavigationButtons() {
  const { navigation, setNavigation } = useAppContext();

  return (
    <div className="pointer-events-none fixed bottom-0 z-[5] flex w-full justify-center gap-4 p-4 xs:p-8 2xl:gap-6">
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          type={"circle"}
          position={"left"}
          disable={navigation === 1}
          onClick={() => {
            if (navigation === 1) return;
            setNavigation(navigation - 1);
          }}
        />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          type={"circle"}
          position={"right"}
          onClick={() => {
            if (navigation === 6) {
              localStorage.setItem("currentPage", "1");
              setNavigation(1);
            } else {
              setNavigation(navigation + 1);
            }
          }}
        />
      </motion.span>
    </div>
  );
}
