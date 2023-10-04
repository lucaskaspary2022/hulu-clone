import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString} className='p-2 text-slate-400'>{format(date, 'LLLL d, yyyy')}</time>
}