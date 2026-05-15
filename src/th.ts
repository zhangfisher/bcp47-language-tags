import { createTagUtils } from "./utils";

export const tags = {
  "th-TH": {
    tag: "th-TH",
    name: "ไทย",
    nativeName: "ไทย (ประเทศไทย)",
    primary: true,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
