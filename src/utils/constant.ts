export const quoteBlockData = {
  title: "Possit etimam",
  subTitle: "Morbi eget efficitur nunc.",
  description:
    "A stay cation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free water sports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained.",
};

export const BRAND_A = "Brand A";
export const BRAND_B = "Brand B";

export enum BRAND {
  BRAND_A = "Brand A",
  BRAND_B = "Brand B",
}

export enum BUTTON_THEME {
  PRIMARY_CREAM = "primary-cream",
  SECONDARY_CREAM = "secondary-cream",
  PRIMARY_BLUE = "primary-blue",
  SECONDARY_BLUE = "secondary-blue",
}

export const COLORS: Record<
  BUTTON_THEME,
  { backgroundColor: string; textColor: string; borderColor?: string }
> = {
  [BUTTON_THEME.PRIMARY_CREAM]: {
    backgroundColor: "#D2B99B",
    textColor: "#FFFFFF",
  },
  [BUTTON_THEME.SECONDARY_CREAM]: {
    backgroundColor: "#FFFFFF",
    textColor: "#D2B99B",
    borderColor: "#D2B99B",
  },
  [BUTTON_THEME.PRIMARY_BLUE]: {
    backgroundColor: "#0057B7",
    textColor: "#FFFFFF",
  },
  [BUTTON_THEME.SECONDARY_BLUE]: {
    backgroundColor: "#FFFFFF",
    textColor: "#0057B7",
    borderColor: "#0057B7",
  },
};

export const brandTheme: Record<
  BRAND,
  {
    titleTextColor: string;
    fontFamily: string;
    primaryBtn: BUTTON_THEME;
    secondaryBtn: BUTTON_THEME;
  }
> = {
  [BRAND.BRAND_A]: {
    titleTextColor: "#444E58",
    fontFamily: "Arial",
    primaryBtn: BUTTON_THEME.PRIMARY_CREAM,
    secondaryBtn: BUTTON_THEME.SECONDARY_CREAM,
  },
  [BRAND.BRAND_B]: {
    titleTextColor: "#75A6BE",
    fontFamily: "Times New Roman",
    primaryBtn: BUTTON_THEME.PRIMARY_BLUE,
    secondaryBtn: BUTTON_THEME.SECONDARY_BLUE,
  },
};
