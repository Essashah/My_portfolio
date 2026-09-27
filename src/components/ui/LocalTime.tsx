import { useEffect, useState } from 'react'
import { profile } from '../../data/content'

const format = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: profile.timezone,
    timeZoneName: 'short',
  }).format(new Date())

/** Live clock in the owner's timezone, e.g. "14:32 BST". */
const LocalTime = ({ className = '' }: { className?: string }) => {
  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(id)
  }, [])

  return <span className={`tabular-nums ${className}`}>{time}</span>
}

export default LocalTime
