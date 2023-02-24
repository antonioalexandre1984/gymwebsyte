import './Header.css'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}
