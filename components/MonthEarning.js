function MonthEarning({month, earning}) {

    const styleTest = `h-${earning} w-3 rounded-full bg-blue-600`

    return (
        <div className='group relative flex flex-col items-center space-y-2'>
            <div className='absolute top-2 hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block'>{earning}</div>
            <div className='flex h-32 w-3 items-end bg-slate-200 rounded-full group-hover:cursor-pointer'>
                <div className={styleTest}></div>
                {/* <div className='h-16 w-3 rounded-full bg-blue-600'></div> */}
            </div>
        <div className='text-xs text-gray-500'>{month}</div>
    </div>
    )
}

export default MonthEarning