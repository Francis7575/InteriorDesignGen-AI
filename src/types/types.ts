import { ReactNode } from "react";

export type ProviderProps = {
	children: ReactNode
}

export type UserInfo = {
  id?: number;
  credits?: number;
  email?: string
  imageUrl?: string
  name?: string
}