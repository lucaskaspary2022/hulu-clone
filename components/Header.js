import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import Link from "next/link"

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <Link href='/'><a><HeaderItem title='HOME' Icon={HomeIcon}/></a></Link>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <Link href='/podcast'><a><HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/></a></Link>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image
                alt='hulu logo'
                className='object-contain'
                src='https://links.papareact.com/ua6'
                width={200}
                height={100}    
            />
        </header>
    )
}

export default Header
