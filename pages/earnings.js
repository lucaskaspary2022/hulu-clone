import MonthEarning from "../components/MonthEarning"

function Earnings() {

    const months = [
        {"Jan": 10},
        {"Feb": 12},
        {"Mar": 20},
        {"Apr": 16},
        {"May": 8},
        {"Jun": 12},
        {"Jul": 8},
        {"Aug": 16},
        {"Sep": 12},
        {"Oct": 8},
        {"Nov": 16},
        {"Dec": 12}
    ]

    return (
        <div className='relative flex min-h-screen flex-col items-center overflow-hidden justify-center py-6 sm:py-12'>
            <div className='w-96 bg-white p-8 rounded-xl'>
                <h6 className='text-xs text-gray-400'>Total Earnings</h6>
                <div className='mt-2 flex font-semibold'>
                    <span className='text-black'>$1,354,567</span>
                    <span className="ml-2 flex items-center text-xs text-green-500"
                    >31%
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg></span>
                </div>
                <div className='mt-8 flex space-x-2'>
                    {months.map((month, key) => (
                        <MonthEarning key={key} month={Object.keys(month)} earning={month[Object.keys(month)]}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Earnings
