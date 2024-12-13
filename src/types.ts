import { scientistTitles, fieldsOfExpertise } from "./datastorage";

export type Title = (typeof scientistTitles)[number];

export type Expertise = (typeof fieldsOfExpertise)[number];

export type Scientist = {
  title: Title;
  name: string;
  age: number;
  fieldOfExpertise: Expertise;
  numberOfHenchmen: number;
  description: string;
};

export type State = {
  collection: Scientist[];
};

export type ElementAttributes<K extends keyof HTMLElementTagNameMap> = Partial<
  HTMLElementTagNameMap[K]
> &
  Record<string, string>;
