import "./Header.css";

import { FaSearch } from "react-icons/fa";
function Header(){
    return (
     <div className="header">
        <div className="tag">
        <span className="multi">MULTI</span>
        <span className="shop">SHOP</span>
        </div>
        <div className="search">
        <input type="text" placeholder="Search for products" />
        
        <FaSearch />
        
        </div>
        <div className="help">
        <h3>Customer Service</h3>
        <h2>+012 345 6789</h2>
        </div>
     </div>
    );
}
export default Header;