import { create } from "zustand";
import { turnsType } from "../lib/types";

export interface MyTurnsStoreType {
  myTurns: turnsType[];
  getMyTurns: (localTurns: turnsType[]) => void;
}

export const useMyTurnsStore = create<MyTurnsStoreType>((set) => ({
  myTurns: [],
  getMyTurns: (localTurns: turnsType[]) =>
    set((state) => ({ ...state, myTurns: localTurns })),
}));
