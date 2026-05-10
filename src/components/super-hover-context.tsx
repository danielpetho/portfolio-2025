"use client";

import { createContext } from "react";

export type SuperHoverParentState = {
  active: boolean;
};

export const SuperHoverParentContext = createContext<SuperHoverParentState | null>(
  null,
);
