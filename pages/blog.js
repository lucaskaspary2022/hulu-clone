import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

function Blog({ allPostsData }) {
    return (
        <section className='flex justify-center items-center p-20 flex-col'>
            <h1 className='text-4xl mb-5'>Blog</h1>
            <ul className='text-white'>
                {allPostsData.map(({ id, date, title }) => (
                    <li className='transition duration-100 hover:scale-105 p-2 cursor-pointer' key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        <Date dateString={date}/>
                    </li>     
                ))}
            </ul>
        </section>
    )
}

export default Blog

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}
