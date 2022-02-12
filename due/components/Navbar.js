import navStyles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = ({children}) => {
    return (
    <nav className={navStyles.navbar}>
    <ul>
        <li>
          <Link href='/'>Due</Link>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar