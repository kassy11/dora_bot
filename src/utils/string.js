/**
 * 最新のメッセージを取り出す
 * @param {string} resText 
 * @returns 
 */
const cleanResText = (resText) => {
    const text = resText.split("<NL>")[resText.split("<NL>").length - 1].replace('システム:', '')
    return text
}

/**
 * APIに送るプロンプトを作成する。形式は使用するモデルによって変わるので注意
 * @param {{text: string, type: "user" | "sys"}} log 
 * @param {string} sep
 * @param {number} max_memory 
 * @returns 
 */
const createPrompt = (log, sep="<NL>",max_memory=3) => {
    const length = log.length
    const start = Math.max(length - max_memory, 0)
    const useLog = log.slice(start, length)

    const fragments = []
    for(let i = 0; i < useLog.length; i++){
        if(useLog[i].type === "user"){
            fragments.push(`ユーザー:${useLog[i].text}`)
        }else if(useLog[i].type === "sys"){
            fragments.push(`システム:${useLog[i].text}`)
        }
    }

    fragments.push('システム:')

    return fragments.join(sep)
}
