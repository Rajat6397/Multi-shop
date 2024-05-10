import "./Navbar.css";

function Navbar(){
    return (
      <div className="navbar">
        <div className="anchors">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Help</a>
        <a href="#">FAQs</a>
        </div>
        <div className="options">
        <select id="opt">
            <option>My Account</option>
            <option>Sign in</option>
            <option>Sign up</option>
        </select>
        <select>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>CAD</option>
        </select>
        <select>
            <option>EN</option>
            <option>FR</option>
            <option>AR</option>
            <option>RU</option>
        </select>
        </div>
      </div>
    )
}
export default Navbar;