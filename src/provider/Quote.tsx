import React from "react";
import { BRAND } from "../utils/constant";

export type QuoteContextValueType = {
  hideUnderline: boolean;
  backgroundColor: string;
  textBoxBackgroundColor: string;
  textColor: string;
  story: BRAND;
};

export const QuoteContext = React.createContext({
  hideUnderline: false,
  backgroundColor: "#F6F6F6",
  textBoxBackgroundColor: "#FFFFFF",
  textColor: "#282828",
  story: BRAND.BRAND_B,
});

export const QuoteContextProvider = ({
  quoteContext,
  children,
}: {
  quoteContext: QuoteContextValueType;
  children: React.ReactNode;
}) => {
  return (
    <QuoteContext.Provider value={quoteContext}>
      {children}
    </QuoteContext.Provider>
  );
};
