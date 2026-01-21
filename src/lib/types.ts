export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "caption"
  | "label";

export interface LoginCredentials {
  email: string;
  password: string;
}

export type LoginFormErrors = Partial<Record<keyof LoginCredentials, string>>;

export type SortKey = "name" | "price";
export type SortOrder = "asc" | "desc";

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}
