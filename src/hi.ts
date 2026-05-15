import { createTagUtils } from "./utils";

export const tags = {
  "hi-IN": {
    tag: "hi-IN",
    name: "हिन्दी",
    nativeName: "हिन्दी (Hindi)",
    primary: true,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
