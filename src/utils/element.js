/**
 * 要素の一番下までスクロールする
 * @param {HTMLElement} elem 
 */
const scrollTop = (elem) => {
    elem.scrollTop = elem.scrollHeight;
}
