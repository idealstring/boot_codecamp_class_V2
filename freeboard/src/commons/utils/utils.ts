import { Maybe } from "graphql/jsutils/Maybe";

export const dateFormatter = (rawDate: Date) => {
  let date = new Date(rawDate);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const dateTimeFormatter = (rawDate: Date) => {
  let date = new Date(rawDate);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
};

export const PriceFormatter = (price: Maybe<number> | undefined) => {
  // return String(price).replace(/^([0-9]+)?([0-9]{3})([0-9]{3})$/, "₩$1,$2,$3");
  return `₩${price?.toLocaleString()}`;
};

export const PointFormatter = (price: Maybe<number> | undefined) => {
  return `${price?.toLocaleString()}`;
};
