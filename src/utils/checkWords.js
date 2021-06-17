/**
 * This function checks the given string for the number
 * of words and removes the extra words when it is more
 * than the specified maximum.
 * Source: https://stackoverflow.com/questions/5454235/shorten-string-without-cutting-words-in-javascript
 * @param str The string to check
 * @param max The maximum amount of words
 */
export const shortenWords = (str, max) => {
  return str && str.length > max
    ? str.slice(0, max).split(' ').slice(0, -1).join(' ')
    : str
}

/**
 * This function removes unnecessary tabs and spaces,
 * splits on the single space and then counts the
 * number of words.
 * Source:
 * https://www.tutorialspoint.com/how-to-count-a-number-of-words-in-given-string-in-javascript
 * @param str
 */
export const countWords = (str) => {
  return str
    .replace(/(^\s*)|(\s*$)/gi, '')
    .replace(/[ ]{2,}/gi, ' ')
    .replace(/\n /, '\n')
    .split(' ').length
}
