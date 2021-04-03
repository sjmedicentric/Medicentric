import axios from "axios"
import Link from "@material-ui/core/Link"
import NextLink from "next/link"

export const MediDashboard = ({ posts }) => {
  const renderDashboard = () => {
    return posts.map(post => (
      <li key={post.id}>
        <NextLink href={`/medi-dashboard/${post.id}`}>
          <a>{post.title}</a>
        </NextLink>
      </li>
    ))
  }

  return (
    <>
      <h1>MediDashboard</h1>
      <ul>{renderDashboard()}</ul>
    </>
  )
}

MediDashboard.getInitialProps = async () => {
  let posts = []
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    posts = res.data
    //console.log("POSTS = ", posts)
  } catch (e) {
    console.error("Error on fetching posts = " + e)
  }

  return { posts: posts.slice(0, 10) }
}

export default MediDashboard
