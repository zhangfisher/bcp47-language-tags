import * as fs from 'fs';
import * as path from 'path';

// Flag 缓存
const flagCache = new Map<string, string>();

// 缓存文件路径
const CACHE_FILE = path.join(__dirname, '_flags.json');

interface PluginOptions {
  flagsDir?: string;
  enabled?: boolean;
  preloadFlags?: boolean;
  debug?: boolean;
}

export function injectFlagsPlugin(options: PluginOptions = {}): any {
  const {
    flagsDir = 'src/flags/dataurl',
    enabled = true,
    preloadFlags = true,
    debug = false
  } = options;

  if (!enabled) {
    return {
      name: 'bcp47-flag-injector',
      transform: () => null
    };
  }

  // 预加载 flag 数据
  if (preloadFlags) {
    // 尝试从缓存文件加载
    const loadedFromCache = loadFromCache(debug);

    if (!loadedFromCache) {
      // 缓存不存在或加载失败，从 .data 文件预加载
      preloadFromDataFiles(flagsDir, debug);
      // 保存到缓存文件
      saveToCache(debug);
    }
  }

  return {
    name: 'bcp47-flag-injector',

    transform(code: string, id: string) {
      // 只处理 tags 目录下的 TypeScript 文件
      if (!id.includes('tags') || !id.endsWith('.ts')) {
        return null;
      }

      // 从源代码中提取语言代码
      const codeMatch = code.match(/"code"\s*:\s*"([^"]+)"/);
      if (!codeMatch) {
        return null;
      }

      const langCode = codeMatch[1];
      const flagContent = flagCache.get(langCode);

      if (!flagContent) {
        if (debug) {
          console.log(`[bcp47-flag-injector] No flag data for ${langCode} in ${id}`);
        }
        return null;
      }

      // 转换代码 - 替换 flag:"" 为 flag:"<base64_data>"
      const FLAG_PATTERN = /flag:""/;
      const flagMatch = code.match(FLAG_PATTERN);

      if (flagMatch) {
        // 转义特殊字符
        const escapedContent = flagContent
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"');

        const result = code.replace(FLAG_PATTERN, `flag:"${escapedContent}"`);

        if (debug) {
          console.log(`[bcp47-flag-injector] Transformed ${path.basename(id)} (${langCode})`);
        }

        return { code: result };
      }

      return null;
    }
  };
}

export default injectFlagsPlugin;

// 从缓存文件加载 flag 数据
function loadFromCache(debug: boolean): boolean {
  try {
    if (!fs.existsSync(CACHE_FILE)) {
      if (debug) {
        console.log('[bcp47-flag-injector] Cache file not found, loading from data files');
      }
      return false;
    }

    const cacheData = fs.readFileSync(CACHE_FILE, 'utf-8');
    const flags = JSON.parse(cacheData);

    let loadedCount = 0;
    for (const [langCode, content] of Object.entries(flags)) {
      flagCache.set(langCode, content as string);
      loadedCount++;
    }

    if (debug) {
      console.log(`[bcp47-flag-injector] Loaded ${loadedCount} flags from cache (${CACHE_FILE})`);
    }

    return loadedCount > 0;
  } catch (error) {
    console.warn(`[bcp47-flag-injector] Failed to load cache: ${(error as Error).message}`);
    return false;
  }
}

// 从 .data 文件预加载 flag 数据
function preloadFromDataFiles(flagsDir: string, debug: boolean): void {
  try {
    const resolvedDir = path.resolve(flagsDir);
    const files = fs.readdirSync(resolvedDir);
    const dataFiles = files.filter((f) => f.endsWith('.data'));

    for (const file of dataFiles) {
      const langCode = file.replace('.data', '');
      const flagPath = path.join(resolvedDir, file);

      try {
        const content = fs.readFileSync(flagPath, 'utf-8').trim();
        flagCache.set(langCode, content);
      } catch (error) {
        console.warn(`[bcp47-flag-injector] Failed to preload ${file}`);
      }
    }

    if (debug) {
      console.log(`[bcp47-flag-injector] Preloaded ${flagCache.size} flags from ${flagsDir}`);
    }
  } catch (error) {
    console.warn(`[bcp47-flag-injector] Failed to preload flags: ${(error as Error).message}`);
  }
}

// 保存 flag 数据到缓存文件
function saveToCache(debug: boolean): void {
  try {
    const flags: Record<string, string> = {};
    for (const [langCode, content] of flagCache.entries()) {
      flags[langCode] = content;
    }

    const cacheData = JSON.stringify(flags, null, 2);
    fs.writeFileSync(CACHE_FILE, cacheData, 'utf-8');

    if (debug) {
      console.log(`[bcp47-flag-injector] Saved ${flagCache.size} flags to cache (${CACHE_FILE})`);
    }
  } catch (error) {
    console.warn(`[bcp47-flag-injector] Failed to save cache: ${(error as Error).message}`);
  }
}
