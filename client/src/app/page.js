import Image from "next/image";
import styles from "./page.module.css";
import "./home.css";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="main-header-div">

        <div className="main-text-side">

          <div className="main-text">
            <h2>GW CLUB TENNIS</h2>
            <p>GW Club Tennis was founded in 2005. It is a coed team that 
              competes at tournaments in and around the DMV. The club centers 
              around players with a history of competitive play who want to continue 
              developing their game throughout college.</p>
          </div>

        </div>

        <div className="main-image-side">
          <div className="dot-grid"></div>
        </div>

      </div>
      <div className="content-area1">

      </div>
    </div>
  );
}
