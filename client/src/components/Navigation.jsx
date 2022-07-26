import { Link } from 'react-router-dom'


const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/villagers">Villagers</Link>
        <Link to="villagers/review">Villager Review</Link>
      </div>
    </nav>
  )
}

export default Nav