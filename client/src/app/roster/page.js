"use client"
import Image from "next/image";
import "./roster.css";
import Navbar from "../components/Navbar";
import PlayerCard from "../components/PlayerCard";
import { PiTennisBallFill } from "react-icons/pi";
import { GiTennisRacket } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  

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
    updateDimensions();
    setClubPicHeight(height * 0.38);
    setClubPicWidth(width * 0.20);
    setHeaderTextSize(height * 0.05);
    setMainPTextSize(height * 0.025);
    setInstaSize(height * 0.66);
    
  }, [window, width, height]);


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
  const officiers = [
    {name : "Rory Smith", class : "Senior", title: "President"}, 
    {name : "Derek Chen", class : "Junior", title: "Vice President"},
    {name : "Charlie Buckman", class : "Sophomore", title: "Treasurer"},
    {name : "Molly St. Clair", class : "Sophomore", title: "Social Chair"},
    {name : "Diana Anos", class : "Sophomore", title: "Recruiter"}]
  const president = {name : "Rory Smith", class : "Senior", title: "President"}



  return (
    <div>
      <Navbar/>
      <div className="roster-div">
        <div className="officers-div">
          <h2 style={{fontSize : headerTextSize}}>Club Officers</h2>
          <div className="officers-image">
            {officiers.map((player, i) => (
              <PlayerCard image="/defaultpfp.jpg" name={player.name} year={player.class} key={i} title={player.title}/>
            ))}
          </div>
        </div>

      </div>
  

      
    </div>
  );
}
