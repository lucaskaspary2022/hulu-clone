function PodcastPage() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 text-black'>
            <div className='relative w-96 overflow-hidden bg-fuchsia-50 p-6'>
                <div className='bg-fuchsia-200 -top-20 -left-20 h-56 w-56 rounded-full absolute'></div>
                <div className='bg-fuchsia-200 h-64 w-64 rounded-full -bottom-20 -right-8 absolute'></div>
                <div className='relative z-10'>
                    <h2 className='mb-6 text-xl font-semibold'>The big trip to my biggest dream: USA</h2>
                    <div className='z-10 mt-3 flex space-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        <div className='text-sm'>Lucas Kaspary</div>
                    </div>
                    <div className='mt-3 flex space-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className='text-sm'>August 11, 2022 AT 12AM</div>
                    </div>
                    <button className='mt-16 bg-black text-white px-4 py-2'>Join Now</button>
                    <div className='h-10 border border-x-0 border-t-0 border-b-black'></div>
                    <div className='mt-6 flex justify-between'>
                        <div className='flex -space-x-2 overflow-hidden'>
                            <img className='h-8 w-8 rounded-full inline-block ring-2 ring-white' src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt=''></img>
                            <img className='h-8 w-8 rounded-full inline-block ring-2 ring-white' src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt=''></img>
                            <img className='h-8 w-8 rounded-full inline-block ring-2 ring-white' src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' alt=''></img>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <div className='text-sm'>Play Episode</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default PodcastPage