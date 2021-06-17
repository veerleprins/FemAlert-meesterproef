import {
  getReportTimeToday,
  removeNull,
  getUniqueValues,
  countDuplicateValues,
  createNullData,
  sortData,
} from '@/utils/cleaning/clean.js'

/**
 * This function calls all the individual functions
 * needed to clean up the bar chart data.
 * @param rawData The raw data set
 * @returns the cleaned data array
 */
export const getCleanedChartData = (rawData) => {
  // Get all report times of today
  let reportsToday = getReportTimeToday(rawData)

  // Filter all null values
  let filtered = removeNull(reportsToday)

  // Getting the unique values
  let uniqueArray = getUniqueValues(filtered)

  // Count duplicate values
  let cleaned = countDuplicateValues(filtered, uniqueArray)

  // Add empty reports
  cleaned = createNullData(cleaned, '05:00')
  cleaned = createNullData(cleaned, '06:00')
  cleaned = createNullData(cleaned, '21:00')

  // Sorts data
  cleaned = sortData(cleaned, 'type')

  return cleaned
}
