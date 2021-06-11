import dayjs from 'dayjs'

const FORMAT_DEFAULT = 'DD/MM HH:MM'

/**
 * @return number of date
 */
export const CURRENT_DATE = new Date().getTime()

export const CURRENT_MONTH = dayjs().format('M')

export const getDay = date => dayjs(date).get('date')
export const getMonth = date => dayjs(date).get('month')
export const getYear = date => dayjs(date).get('year')
export const getHour = date => dayjs(date).get('hour')
export const getMinute = date => dayjs(date).get('minute')

export const setDate = (oldDate, newDate) => dayjs(oldDate).set('date', newDate.day).set('month', newDate.month).set('year', newDate.year)
export const setTime = (oldDate, newDate) => dayjs(oldDate).set('hour', newDate.hour).set('minute', newDate.minute)
/**
 * @description formatting `date` with a format token
 * @param date `any` date which will be formatting
 * @param formatToken `String` a format token
 * @returns formatted date string if successfully, if not return empty character `''`
 */
export const formatDateTime = (date, formatToken = FORMAT_DEFAULT) => {
  if (date) {
    return dayjs(date).format(formatToken)
  }
  return ''
}
