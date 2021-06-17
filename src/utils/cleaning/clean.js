/**
 * This function pushes empty reports in the dataset
 * @param data The array into which the data is pushed
 * @param time The specific time
 * @returns Array with the new data
 */
export const createNullData = (data, time) => {
  data.push({
    type: time,
    count: 0,
  })
  return data
}

/**
 * This function sorts the data in alphabetical
 * order (including numbers) and returns
 * the sorted data.
 * Source:
 * https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript.html
 * @param data The data to be sorted
 * @param value The key in the object within the data to sort on
 * @returns sorted data
 */
export const sortData = (data, value) => {
  return data.sort((a, b) => {
    if (a[value] < b[value]) {
      return -1
    } else if (a[value] > b[value]) {
      return 1
    }
    return 0
  })
}

/**
 * This function checks which day it is today and picks
 * up the dates whose date matches today's date.
 * Source:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=nl
 * @param data The data that is searched for
 * @returns Array containing today's data & null values
 */
export const getReportTimeToday = (data) => {
  let today = new Date()
  let month = today.getMonth().toString()
  let day = today.getDate().toString()
  today = `${checkZero(day)}/${checkZero(month)}/${today.getFullYear()}`

  return data.map((report) =>
    report.date === '13/06/2021' ? report.time : null
  )
}

/**
 * This function checks if the length of num is less
 * than two. If so, a '0' is added.
 * @param num The number being checked
 * @returns Num with a 0 or without 0 added
 */
const checkZero = (num) => {
  if (num.length < 2) {
    return `0${num}`
  } else {
    return num
  }
}

/**
 * This function checks for null or undefined values in
 * the array and removes them if they exist.
 * Source:
 * https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
 * @returns Array with no null/undefined values
 */
export const removeNull = (array) => {
  return array.filter(Boolean)
}

/**
 * This function finds all unique values and removes extra
 * values that were previously in the array.
 * Source:
 * https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
 * @param array The array being searched for
 * @returns An array of unique values
 */
export const getUniqueValues = (array) => {
  return Array.from(new Set(array))
}

/**
 * This function creates a new list of objects. Then the types
 * of values are added up and saved in the new list.
 * @param array The total array of data
 * @param uniqueArray The array of unique values
 * @returns The new list containing the counted values
 */
export const countDuplicateValues = (array, uniqueArray) => {
  let list = uniqueArray.map((time) => ({ type: time, count: 0 }))
  list.forEach((item) => {
    array.forEach((time) => {
      if (item.type === time) {
        item.count++
      }
    })
  })
  return list
}
