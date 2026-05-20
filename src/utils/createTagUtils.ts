import { BCP47LanguageTag, PrimaryLanguageTags } from "../types";

export function createTagUtils(tags: BCP47LanguageTag[]) {
  return {
    getTag(tag: string): BCP47LanguageTag | undefined {
      const normalizedTag = `${tag.split("-")[0].toLowerCase()}-${tag
        .split("-")
        .slice(1)
        .join("-")
        .toUpperCase()}`;
      return tags.find(
        (t) => t.tag.toLowerCase() === normalizedTag.toLowerCase()
      );
    },
    getTags(language?: string | string[]): BCP47LanguageTag[] {
      if (!language) return tags;
      const lngs = Array.isArray(language) ? language : [language];
      return tags.filter((t) => {
        const tagLang = t.tag.split("-")[0].toLowerCase();
        return lngs.some((lng) => tagLang === lng.toLowerCase());
      });
    },
    addTag: (tag: BCP47LanguageTag) => {
      if ("tag" in tag && "name" in tag && "nativeName" in tag) {
        if (!tags.some((t) => t.tag === tag.tag)) {
          tags.push(tag);
        }
      }
    },
    deleteTag: (language?: string | string[]) => {
      if (!language) return;
      const lngs = Array.isArray(language) ? language : [language];
      for (let i = tags.length - 1; i >= 0; i--) {
        const tagLang = tags[i].tag.split("-")[0].toLowerCase();
        if (lngs.some((lng) => lng.toLowerCase() === tagLang)) {
          tags.splice(i, 1);
        }
      }
    },
  };
}
