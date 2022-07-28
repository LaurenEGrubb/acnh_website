import { Link } from 'react-router-dom'


const Nav = () => {
  
  return (
    <nav className="navbar">
          <div>
        <Link to="/"> Home </Link>
        <Link to="/villagers"> Villagers </Link>
        <Link to="villagers/review"> Villager-Review </Link>
        <Link to="villagers/rate"> Villager-Rating</Link>
      </div>
    </nav>
  )
}

export default Nav
