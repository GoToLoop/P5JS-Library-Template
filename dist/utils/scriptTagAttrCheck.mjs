// https://developer.Mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
// https://developer.Mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
export default function checkScriptsForAttr(attr) {
    return [...document.scripts].some(({ dataset }) => attr in dataset);
}
