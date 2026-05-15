import { createTagUtils } from "./utils";

export const tags = {
  "sv-SE": {
    tag: "sv-SE",
    name: "Svenska",
    nativeName: "Svenska (Sverige)",
    primary: true,
  },
  "sv-FI": {
    tag: "sv-FI",
    name: "Svenska (Finland)",
    nativeName: "Svenska (Finland)",
    primary: false,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
