/**
 * 最新のメッセージを取り出す
 * @param {string} resText
 * @returns
 */
const cleanResText = (resText) => {
    const text = resText.split("<NL>")[resText.split("<NL>").length - 1].replace('システム:', '')
    return text
}