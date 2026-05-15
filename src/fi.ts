import { createTagUtils } from "./utils";

export const tags = {
  "fi-FI": {
    tag: "fi-FI",
    name: "Suomi",
    nativeName: "Suomi (Suomi)",
    primary: true,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
