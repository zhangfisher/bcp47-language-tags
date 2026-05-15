import { createTagUtils } from "./utils";

export const tags = {
  "el-GR": {
    tag: "el-GR",
    name: "Ελληνικά",
    nativeName: "Ελληνικά (Ελλάδα)",
    primary: true,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
