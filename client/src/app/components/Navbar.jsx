
import "./Navbar.css";
import { GiTennisCourt } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  
  return (
    <div className="navbar">
      <Link href="/">
        <GiTennisCourt className="courtLogo"/>
      </Link>
     
      <div className="links">
        <div className="nav-link">
            <h2>Home</h2>
        </div>
        <div className="nav-link">
            <h2>Roster</h2>
        </div>
        <div className="nav-link">
            <h2><a href="#socials">Socials</a></h2>
        </div>
      </div>
        
      
    </div>
  );
}
