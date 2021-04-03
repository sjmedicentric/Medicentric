import Navbar from "../Navbar"

// function BaseLayout(props) { OR
const BaseLayout = props => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  )
}

export default BaseLayout
