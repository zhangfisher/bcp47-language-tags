import { BCP47LanguageTag, BCP47LanguageTags } from "./types";


export function createTagUtils(tags:BCP47LanguageTags){
    return {
        getTag(tag:string):BCP47LanguageTag | undefined {
            let [language,country] = tag.split("-")
            if(country){
                const fTag = `${language.toLowerCase()}-${country.toUpperCase()}` as keyof BCP47LanguageTags
                if(fTag in tags){
                    return tags[fTag]
                }else{
                    country = undefined as any
                }
            }
            // 没有提供country 
            const matchedTags:BCP47LanguageTag[] = []
            let primaryTag:BCP47LanguageTag | undefined 
            Object.entries(tags).filter(([name,tag])=>{
                if(name.startsWith(language+"-")){
                    matchedTags.push(tag)
                    if(tag.primary) primaryTag = tag
                }                
            })
            return primaryTag ? primaryTag : matchedTags.length>0 ? matchedTags[0] : undefined
        },
        getTags(language?:string):BCP47LanguageTag[] {
            if(!language) return Object.values(tags) 
            const matchedTags:BCP47LanguageTag[] = []           
            Object.entries(tags).filter(([name,tag])=>{
                if(name.startsWith(language+"-")){
                    matchedTags.push(tag)
                }
            })
            return matchedTags
        }
    }
}

