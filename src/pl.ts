import { createTagUtils } from "./utils";

export const tags = {
  "pl-PL": {
    tag: "pl-PL",
    name: "Polski",
    nativeName: "Polski (Polska)",
    primary: true,
  },
};

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags);
export { getTag, getTags, getPrimaryTags };
export * from "./types";
