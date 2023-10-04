import Head from "next/head"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Date from "../../components/date"

function Post({ postData }) {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className='flex justify-center items-center p-20 flex-col'>
                <h1 className='text-4xl text-white p-3 font-bold'>{postData.title}</h1>
                <Date dateString={postData.date}/>
                <div className='p-5 text-xl text-white' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
        </div>
    )
}

export default Post

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    console.log('params: ', params)

    return {
        props: {
            postData
        }
    }
}