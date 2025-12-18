import React, { useContext, useEffect, useState } from "react";

type ScreenType = "desktop" | "tablet" | "mobile";

const ScreenContext = React.createContext<ScreenType>("mobile");

export const useScreenSize = (): ScreenType => useContext(ScreenContext);

interface ScreenProps {
  children: React.ReactNode;
}

export const ScreenProvider: React.FC<ScreenProps> = ({ children }) => {
  const [screen, setScreen] = useState<ScreenType>(getSize());

  function getSize(): ScreenType {
    const width = window.innerWidth;

    if (width > 1024) {
      return "desktop";
    } else if (width > 700) {
      return "tablet";
    } else {
      return "mobile";
    }
  }

  useEffect(() => {
    const handleSize = () => {
      setScreen(getSize());
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={screen}>{children}</ScreenContext.Provider>
  );
};
