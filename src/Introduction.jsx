import pictureofme from "./assets/pictureofme.jpg";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
export default function Introduction(){


useEffect(() => {
    // Set document title as a fallback
    document.title = "Josiah Blanding's Jagged Bat | ITIS 3135 | Introduction";
  }, []); // empty dependency → runs once on mount

    return(
        <>

        <Helmet>
            <title>Josiah Blanding's Jagged Bat | ITIS3135 | Introduction</title> 
            </Helmet>
        
        <main>
            <h2>Introduction</h2>
            <figure>
            <img src={pictureofme} alt="Picture of me in front of a CyberTruck"/>
            <figcaption>August, 2024</figcaption>
            </figure>
            <p>I’m a freshly re-enrolled cybersecurity major who got tired of shooting crazy music videos. I’m hopelessly addicted to REMATCH so if anybody plays hit me up. I also haven’t coded in 5 years so thanks in advance for the help.</p>
            <ul>
                <li><span className="bold">Personal Background: — </span>Family’s from the north. 
                I’ve lived here most of my life. I come from a basketball family, some military ties. </li>
                <li><span className="bold">Professional Background: — </span>I’ve been a journeyman. A few years at McDonalds, a few restaurants, 
                and some warehouses.</li>
                <li><span className="bold">Academic Background: — </span>Computer Science (Cybersecurity), 2027
                <ul>
                    <li><span className="bold">ESCI 1101 - Earth Science: </span>Had a few issues with this class a few years back. 
                        Not sure why but here we go again.</li>
                    <li><span className="bold">ITIS 3135 - Front-End Web Application Development: </span> 
                        I need to learn HTML and CSS and pretty much everything because I’m a noob.</li>
                    <li><span className="bold">CTCM 2530 - Interdisciplinary Critical Thinking and Communication:
                         </span>I have to take this class to help the University prove they produce well rounded students.</li>
                    <li><span className="bold">STAT 2122 - Intro to Prob & Stat: </span>Not really sure why this is 
                        required but I’m sure I’ll figure out someday.</li>
                    <li><span className="bold">ITSC 2175 - Logic and Algorithms: </span>I assume it may relate to coding language logic somehow? 
                        Or that I’ll be applying what I learn in algorithms, we’ll see.</li>
                </ul>
                </li>
                <li><span className="bold">Primary Computer Platform I Work On: </span>Dell, Windows 11, Laptop, J Murray Atkins</li>
                <li><span className="bold">Funny/Interesting Item about Yourself: </span>When I was younger I multiplied 
                    random numbers in my head to relieve anxiety. </li>
            </ul>
            <blockquote>“What do you mean by do? And what do you mean by you? And what do you mean by believe??”
                <cite>-  A Genius</cite>
            </blockquote>
            
        </main>
        </>
    )
}