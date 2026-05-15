/**
 * Get the current browser's BCP-47 language tag
 * 获取浏览器当前语言的 BCP-47 标签
 *
 * @returns The browser's current BCP-47 language tag (normalized)
 *          浏览器当前语言的 BCP-47 标签（已规范化）
 *
 * @example
 * ```typescript
 * import { getCurrentLanguage } from 'bcp47-language-tags/utils';
 * const lang = getCurrentLanguage(); // e.g., "zh-CN", "en-US", "ja"
 * ```
 */
export function getLanguage(): string {
  // Check if running in browser environment
  // 检查是否在浏览器环境中
  if (typeof navigator === "undefined") {
    return "en-US"; // Default fallback for server-side / 服务端默认回退
  }

  // Get browser's primary language
  // 获取浏览器主要语言
  const primaryLanguage = navigator.language || "en-US";

  // Normalize language tag format (ensure format is xx-XX)
  // 规范化语言标签格式（确保格式为 xx-XX）
  const [lang, country] = primaryLanguage.split("-");
  if (country) {
    // Language part lowercase, country part uppercase
    // 将语言部分小写，国家部分大写
    return `${lang.toLowerCase()}-${country.toUpperCase()}`;
  }

  // Language code only, return lowercase
  // 仅有语言代码的情况，返回小写
  return lang.toLowerCase();
}

/**
 * Get all browser languages in BCP-47 format (only full language tags with country code)
 * 获取浏览器所有语言的 BCP-47 格式列表（仅返回包含国家代码的完整标签）
 *
 * @returns Array of complete BCP-47 language tags (format: xx-XX)
 *          完整的 BCP-47 语言标签数组（格式：xx-XX）
 *
 * @example
 * ```typescript
 * import { getBrowserLanguages } from 'bcp47-language-tags/utils';
 * const langs = getBrowserLanguages(); // e.g., ["zh-CN", "en-US", "ja-JP"]
 * // Note: Only returns tags with country code (e.g., "zh-CN"), not language-only codes (e.g., "zh")
 * // 注意：仅返回包含国家代码的标签（如 "zh-CN"），不返回仅语言代码（如 "zh"）
 * ```
 */
export function getLanguages(): string[] {
  if (typeof navigator === "undefined") {
    return ["en-US"];
  }

  const languages = navigator.languages || [navigator.language || "en-US"];

  return languages
    .map((lang) => {
      const [language, country] = lang.split("-");
      if (country) {
        return `${language.toLowerCase()}-${country.toUpperCase()}`;
      }
      return null; // Filter out language-only codes / 过滤掉仅语言代码
    })
    .filter((lang): lang is string => lang !== null);
}
