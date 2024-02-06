import React from "react";
import Tests from "./components/Tests";
import LargeCard from "./components/LargeCard";
import Contact from "./Contact.js";
import WhySkinLine from "./WhySkinLine.js";
import HowToUse from "./HowToUse.js";
import HowAiWorks from "./HowAiWorks.js";
import WhatYouGet from "./WhatYouGet.js";

function Main(props) {
  return (
    <>

      <LargeCard load={props.load}/>
      <Tests load={props.load}/>
      <WhatYouGet />
      <WhySkinLine/>
      <HowToUse />
      <HowAiWorks />
      <Contact/>
    </>
  );
}

export default Main;
