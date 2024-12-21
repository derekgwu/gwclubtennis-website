"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "./home.css";
import Navbar from "./components/Navbar";
import { PiTennisBallFill } from "react-icons/pi";
import { GiTennisRacket } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  useEffect(() => {
    console.log(window);
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  //insta script handler
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [clubPicwidth, setClubPicWidth] = useState(0);
  const [clubPicHeight, setClubPicHeight] = useState(0);
  const [headerTextSize, setHeaderTextSize] = useState(0);
  const [mainPTextSize, setMainPTextSize] = useState(0);
  const [instaSize, setInstaSize] = useState(0);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => {
    setClubPicHeight(height * 0.38);
    setClubPicWidth(width * 0.20);
    console.log(height);
    setHeaderTextSize(height * 0.05);
    setMainPTextSize(height * 0.025);
    setInstaSize(height * 0.66);
    
  }, [window, width, height]);


  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const pathing_1 = "M 0,5 C 5,0 10,10 15,5 C 20,0 25,10 30,5 C 35,0 40,10 45,5 C 50,0 55,10 60,5 C 65,0 70,10 75,5 C 80,0 85,10 90,5 C 95,0 100,10 100,5"

  const [isVisible, setIsVisible] = useState(false);
  const fadeRef = useRef(null);
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  //main header
  useEffect(() => {
    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);


  //main images 
  const imagesRef = useRef(null);
  useEffect(() => {
    if (imagesRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (imagesRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);





  return (
    <div>
      <Navbar/>
      <div className="main-header-div">
        <div className="main-text-side" ref={fadeRef} 
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",}}
        >
          <div className="main-text">
            <h2 className="main-text-h2" style={{fontSize: headerTextSize}}>GW Club Tennis</h2>
            <p className="main-text-p" style={{fontSize: mainPTextSize}}>GW Club Tennis was founded in 2005. It is a coed team that 
              competes at tournaments in and around the DMV. The club centers 
              around players with a history of competitive play who want to continue 
              developing their game throughout college.</p>
          </div>
        </div>
        <div className="main-image-side" ref={imagesRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}>
          <div className="dot-grid"></div>
          <Image className="clubpic1" src="/IMG_3647.jpg" width={clubPicwidth} height={clubPicHeight} alt="Picture of the author"/>
          <Image className="clubpic2" src="/IMG_3648.jpg" width={clubPicwidth} height={clubPicHeight} alt="Picture of the author"/>
          <PiTennisBallFill className="tennis-ball"/>
          <GiTennisRacket className="tennis-racquet"/>
        </div>

      </div>
      <div className="content-area1">
        <div className="upcoming-events-text">
          <h1>upcoming events</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
            <path 
              d={pathing_1}
              stroke="#AC9D6e"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="upcoming-events-list">
          <div className="event-list">
          <div className="event event-color-choice-3">
              <p>GWU Org Fair</p>
              <p>February 6th - 7th</p>
            </div>
            <div className="event event-color-choice-1">
              <p>Spring 2025 Tryouts</p>
              <p>March 9th - 10th</p>
            </div>
            <div className="event event-color-choice-2">
              <p>Tournament @ UVA</p>
              <p>March 14th - 15th</p>
            </div>
            <div className="event event-color-choice-4">
              <p>Tournament @ UMD</p>
              <p>March 20th - 21st</p>
            </div>


          </div>
        </div>
      </div>

      <div className="socials" id="socials">
        <div className="instagram-connect">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/gwclubtennis/"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            height: instaSize,
            padding: "0",
            width: "calc(100% - 2px)",
          }}
        >
          <a
            href="https://www.instagram.com/gwclubtennis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GW Club Tennis Instagram
          </a>
        </blockquote>
      </div>
      
      <div className="socials-text">
          <h1>need to contact us?</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="600" height="100" viewBox="0 0 600 200">
          <path
            d="M50 100 C 100 50, 300 150, 550 100"
            fill="none"
            stroke="var(--indigo-dye)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          </svg>
          <h2>Looking to try out for the team next semester? Follow us on our instagram! You can 
            also contact us at our email: <a href="mailto:gdubclubtennis@gmail.com">gdubclubtennis@gmail.com</a></h2>
        </div>
      </div>

      
    </div>
  );
}
