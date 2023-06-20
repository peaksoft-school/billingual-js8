export const formatDate = (dateObj) => {
   if (!dateObj) return null
   const isDateObject = dateObj instanceof Date
   if (!isDateObject) {
      throw new Error('dateObj must be Date object')
   }
   const DD_MM_YYYY = dateObj.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
   })

   const HH_MM = dateObj.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
   })

   return [DD_MM_YYYY, HH_MM]
}
