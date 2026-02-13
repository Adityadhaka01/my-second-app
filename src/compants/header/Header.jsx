 import "./Header.css"
 import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <>
         
    <div className="navbar">
    
      <div className="nav-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify"
          className="logo"
        />
        <div className="aadi"> 
         <CiSearch  className="icon1"/>
        <input 
          type="text"
          placeholder="What do you want to play?" className="input"
          
        />
       </div>
      </div>

      
      <div className="nav-right">
        <a href="#">Premium</a>
        <a href="#">Support</a>
        <a href="#">Download</a>
        <span className="divider">|</span>
        <a href="#">Install App</a>
        <a href="#">Sign up</a>
        <button className="login-btn">Log in</button>
      </div>
    </div>
        </>
  );
}

export default Header;
