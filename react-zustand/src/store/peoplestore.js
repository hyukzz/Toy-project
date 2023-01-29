import create from "zustand";
import { devtools } from 'zustand/middleware';

const peopleStore = (set) => ({
  people: ["sid", "siddu"],
  addPeople: (name) =>
    set((state) => ({
      people: [...state.people, name]
    })),
});

export const usePeopleStore = create(devtools(peopleStore));


