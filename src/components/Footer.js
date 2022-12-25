import { Link, useLocation } from "react-router-dom"

const Footer = () => {
  const location = useLocation()
  return (
    <footer>
      <small translate="no">&copy; 2022 etrs27</small>
      <br />
      {!(location.pathname === "/about") && <Link to="/about">About</Link>}
    </footer>
  )
}

export default Footer
