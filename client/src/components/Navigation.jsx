import { Link } from 'react-router-dom'


const Nav = () => {
  
  return (
    <nav className="navbar">
            <div>
        <Link to="/"> Home </Link>
        <Link to="/villagers"> Villagers </Link>
        <Link to="villagers/details"> Villager-Review </Link>
      </div>
    </nav>
  )
}

export default Nav
