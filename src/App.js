import React from "react";
import styles from './style'
// import 'tw-elements'
import {
  Navbar,
  Footer,
  Hero,
  SliderSection,
  SliderSectionTwo
} from "./components";
import { cards, stats, cards2, stats2, stats3, cards3 } from './constants'

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

}

window.addEventListener("scroll", reveal);

const App = () => {
  // xs: "480px",
  // ss: "620px",
  // sm: "768px",
  // md: "1060px",
  // lg: "1200px",
  //  xl: "1700px",

  return (
    // ! MAIN DIv of NAvBAr
    <div className="bg-dimWhite w-full overflow-hidden text-white">

      {/* NavBar */}

      <div className={`${styles.paddingX} ${styles.flexEnd}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Second THING */}
      <div className={`bg-primary ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        {/* <div className={`${styles.boxWidth}`}>
        </div> */}
        <Hero />
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <SliderSection stats={stats} cards={cards} id={Math.random()} />
          <SliderSection stats={stats2} cards={cards2} id={Math.random()} />

          <SliderSectionTwo stats={stats3} cards={cards3} id={Math.random()} />
        </div>


      </div>

      <Footer />
    </div >
  );
};

export default App;
