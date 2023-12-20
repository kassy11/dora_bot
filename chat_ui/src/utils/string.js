const cleanResText = (resText) => {
    const text = resText.split("<NL>")[resText.split("<NL>").length - 1].replace('システム:', '')
    return text
}