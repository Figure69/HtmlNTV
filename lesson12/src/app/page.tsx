"use client";

import { Content } from "next/font/google";
import Image from "next/image";
import { title } from "process";

const subjects = [
  {
    title: "Contact Infromation",
    info: [
      {
        title: "Email",
        Content: "shrek@swampmail.com",
        title2: "Phone",
        Content2: "+123 456 7890",
        title3: "Location",
        Content3: "Shrek's Swamp, Far Far Away",
      }
      
    ],
     title2: "WorkExperience",
      exp: [{
        title: "Swamp Owner",
        Content: "Far Far Away | 2001 - Present",
        Content2: "Resposnable for maintaining the swamp and keeping unwelcome guests away."
      }]
  }

]

const Home = () => {
  return (
    <div className="bg-green-500">
    <Image
   
    src="/shrek.png"
    alt="next.js logo"
    width={180}
    height={38}
    priority
    />
    

    
    <div>
      <p>{subjects[0].title}</p>
      <p>{subjects[0].info[0].title}</p>
      <p>{subjects[0].info[0].Content}</p>

      <p>{subjects[0].info[0].title2}</p>
      <p>{subjects[0].info[0].Content2}</p>

      <p>{subjects[0].info[0].title3}</p>
      <p>{subjects[0].info[0].Content3}</p>

    </div>

    <br></br>

    <div>
      <p>{subjects[0].title2}</p>
      <p>{subjects [0].exp[0].title}</p>
      <p>{subjects [0].exp[0].Content}</p>
      <p>{subjects [0].exp[0].Content2}</p>
    </div>
</div>

  );
};

export default Home;
