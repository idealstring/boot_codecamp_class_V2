import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const WindowSizeContext = createContext({
  isNormalScreen: false,
  isTablet: false,
  isMobile: false,
});

export default function WhatViewPortSize(props: any) {
  const isNormalScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px) and (min-width: 769px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const value = { isNormalScreen, isTablet, isMobile };

  return (
    <WindowSizeContext.Provider value={value}>
      {props.children}
    </WindowSizeContext.Provider>
  );
}
