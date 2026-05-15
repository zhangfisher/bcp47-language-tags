import { createTagUtils } from "./utils";

export const tags = {
  "da-DK": {
    tag: "da-DK",
    name: "Dansk",
    nativeName: "Dansk (Danmark)",
    primary: true,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
