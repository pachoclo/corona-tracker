import { utcToZonedTime, format } from 'date-fns-tz'

export default (date: Date) => {
  const timeZone = 'America/New_York'
  const formatStr = 'yyyy-MM-dd, HH:mm:ss zzz'
  
  return format(utcToZonedTime(new Date(), timeZone), formatStr, { timeZone })
}
