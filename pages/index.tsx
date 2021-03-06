import Head from 'next/head'
import Header from '../components/Header'
import { urlFor } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  posts: Post[]
}

const postQuery = `
*[_type == "post"] {
  _id,
  title,
  slug,
    author -> {
    name,
    image
  },
  description,
  mainImage
  }
`

export default function Home({ posts }: Props) {
  return (
    <div className="m-auto max-w-7xl">
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-20">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Mudium
            </span>{' '}
            is place to write, read and connect
          </h1>
          <h2>
            It&apos;s easy and free to post your thinking on any topic and
            connect with millions of readers
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} passHref href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p>
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={urlFor(post.author.image).url()}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  // const query = groq`
  //   *[_type == "post"] {
  //     _id,
  //     title,
  //     slug,
  //     author -> {
  //       name,
  //       image
  //     },
  //     description,
  //     mainImage
  //   }
  // `
  const posts = await getClient(false).fetch(postQuery)

  // console.log(posts, '----fjifjif')

  return {
    props: {
      posts,
    },
  }
}
