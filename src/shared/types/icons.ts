export type IconsId =
  | "arrow"
  | "facebook"
  | "in"
  | "instagram"
  | "phone"
  | "reservation"
  | "star"
  | "twitter";

export type IconsKey =
  | "Arrow"
  | "Facebook"
  | "In"
  | "Instagram"
  | "Phone"
  | "Reservation"
  | "Star"
  | "Twitter";

export enum Icons {
  Arrow = "arrow",
  Facebook = "facebook",
  In = "in",
  Instagram = "instagram",
  Phone = "phone",
  Reservation = "reservation",
  Star = "star",
  Twitter = "twitter",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Arrow]: "61697",
  [Icons.Facebook]: "61698",
  [Icons.In]: "61699",
  [Icons.Instagram]: "61700",
  [Icons.Phone]: "61701",
  [Icons.Reservation]: "61702",
  [Icons.Star]: "61703",
  [Icons.Twitter]: "61704",
};
