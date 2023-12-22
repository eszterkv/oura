import dayjs from 'dayjs'

export const human = (date: string | Date) => {
  const diff = dayjs(date).diff(dayjs(), 'day')

  if (diff === 0)
    return 'today'
  if (diff === -1)
    return 'yesterday'

  return dayjs(date).format('D MMM')
}
