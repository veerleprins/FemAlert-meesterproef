export const getCleanedChartData = (data) => {
  // // Get all report times from today
  let reportsToday = getReportTimeToday(data)

  // Filter all null values
  let filtered = removeNull(reportsToday)

  // Getting the unique values
  let uniqueArray = getUniqueValues(filtered)

  // Count duplicate values
  let cleaned = countDuplicateValues(filtered, uniqueArray)
  return cleaned
}

// Get all report times from today
export const getReportTimeToday = (data) => {
  let today = new Date()
  let month = today.getMonth().toString()
  let day = today.getDate().toString()
  today = `${checkZero(day)}/${checkZero(month)}/${today.getFullYear()}`

  return data.map((report) =>
    report.date === '13/06/2021' ? report.time : null
  )
}

// Add zero's to single number
const checkZero = (num) => {
  if (num.length < 2) {
    return `0${num}`
  } else {
    return num
  }
}

// Removed null values
export const removeNull = (array) => {
  return array.filter(Boolean)
}

// Filters all unique values
export const getUniqueValues = (array) => {
  return Array.from(new Set(array))
}

// Count duplicate values
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
