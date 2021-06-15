export function compareReports(allReports) {
  // DD/MM/YYYY format
  const dateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }

  // set variables for todays date and last weeks date
  const today = new Date()
  const lastWeek = new Date()
  lastWeek.setDate(today.getDate() - 7)

  // Format dates to DD/MM/YYYY
  const todayFormatted = today.toLocaleDateString('en-GB', dateOptions)
  const lastWeekFormatted = lastWeek.toLocaleDateString('en-GB', dateOptions)

  // Check for each date the amount of
  // reports made that day
  const reportsToday = allReports.filter((item) => item.date === todayFormatted).length
  const reportsLastWeek = allReports.filter((item) => item.date === lastWeekFormatted).length

  // Compare amount of reports, if the result is greater than 0, add a +
  // Set the value of content based on if the difference is greater or smaller than 0
  const difference = reportsLastWeek - reportsToday
  const content = difference > 0
    ? `+${difference}`
    : difference

  return {
    'content': content,
    'difference': difference
  }
}