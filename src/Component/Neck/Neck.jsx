import "./Neck.css";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
function Neck(){
 return (
    <div className="neck">
        <div className="choose">
        <FaBars />
        <select>
       <option>Categories</option>
       <option>Dresses</option>
       <option>Shirts</option>
       <option>Jeans</option>
       <option>Swimwear</option>
       <option>Slipwear</option>
       <option>Sportswear</option>
       <option>Jumpsuits</option>
       <option>Blazers</option>
       <option>Jackets</option>
       <option>Shoes</option>
       </select>
      </div>
      <div className="tags">
      <a href="">Home</a>
      <a href="">Shop</a>
      <a href="">Shop Detail</a>
      
     <select>
        <option>Pages</option>
        <option>Shopping Cart</option>
        <option>CheckOut</option>
     </select>
      <a href="#">Contact</a>
      </div>
      <div className="symbols">
      <FaHeart />
      <FaBabyCarriage />
      </div>
    </div>
 )
}
export default Neck;