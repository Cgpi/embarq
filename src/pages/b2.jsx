import heroImg from "../assets/blogimg/backg.webp";
import img1 from "../assets/blogimg/img1.webp";
import img2 from "../assets/blogimg/img2.webp";
import img3 from "../assets/blogimg/img3.webp";
import img4 from "../assets/blogimg/img4.webp";
import img5 from "../assets/blogimg/img5.webp";
import img6 from "../assets/blogimg/img6.webp";
import img7 from "../assets/blogimg/img7.webp";
import img8 from "../assets/blogimg/img8.webp";
import img9 from "../assets/blogimg/img9.webp";
import img10 from "../assets/blogimg/img10.webp";
import img11 from "../assets/blogimg/img11.webp";
import img12 from "../assets/blogimg/img12.webp";
import img13 from "../assets/blogimg/img13.webp";
import img14 from "../assets/blogimg/img14.webp";
import img15 from "../assets/blogimg/img15.webp";
import img16 from "../assets/blogimg/img16.webp";
import img17 from "../assets/blogimg//img17.webp";
import img18 from "../assets/blogimg/img18.webp";
import img19 from "../assets/blogimg/img19.webp";

import "./b2.css";
function Bpage() {
    return (
      <div className="blog2-page">
      <header className="blog2-header">
      <img 
          src={heroImg}
          alt="Hero Background" 
          className="hero-img"
        />
        
        {/* Overlay for text readability */}
        <div className="hero-overlay"></div>
        <div className="header-content">
          <h1>A Journey Through the Roof</h1>
          <h2>of the World</h2>
        </div>
      </header>

  
        <main>
          <section>
            <h3>Adventure Meets Action (Remote)</h3>
            <p>
              Our journey began with a simple idea: to explore the most breathtaking landscapes on Earth while embracing the freedom of remote work.
              From snow-capped peaks to vast deserts, every destination offered new perspectives and unforgettable experiences. The road became our office,
              and nature our inspiration.
            </p>
            <p>
              Equipped with nothing but our determination and a reliable vehicle, we set out to discover what lies beyond the ordinary.
              Each day brought new challenges, stunning vistas, and moments that reminded us why we chose this path.
            </p>
  
            <div className="grid-2">
              <img
                src={img1}
                alt="Off-road vehicle"
                className="medium-img"
              />
              <img
                src={img2}
                alt="Travelers on adventure"
                className="medium-img"
              />
            </div>
          </section>
  
          <section>
            <h3>Road Records - Chile's Finest</h3>
            <p>
              Chile's diverse landscape offered some of the most spectacular drives of our journey. From the arid Atacama Desert to the glacial
              fjords of Patagonia, every kilometer revealed something extraordinary. The Carretera Austral became our ribbon through paradise,
              winding through ancient forests and alongside crystal-clear lakes.
            </p>
  
            <div className="grid-3">
              <img
                src={img3}
                alt="Camping setup"
                className="small-img"
              />
              <img
                src={img4}
                alt="Night sky"
                className="small-img"
              />
              <img
                src={img5}
                alt="Mountain vista"
                className="small-img"
              />
            </div>
          </section>
  
          <section>
            <h3>Adventures Under the Open Skies (La Artic)</h3>
            <p>
              As we ventured further north, the landscape transformed into something otherworldly. The Arctic regions challenged us in ways we never
              imagined, but rewarded us with sights that few ever witness. Under the midnight sun, we discovered a world where time seemed to stand still,
              and the boundary between day and night dissolved into endless golden light.
            </p>
  
            <img
              src={img6}
              alt="Mountain landscape"
              className="large-img grid-single"
            />
          </section>
  
          <section>
            <h3>Arctic Thrived Adventures</h3>
            <p>
              The Arctic tested our limits and expanded our horizons. In temperatures that would make most retreat indoors, we found ourselves
              more alive than ever. The stark beauty of ice and snow, the resilience of Arctic wildlife, and the warmth of local communities
              created memories that will last a lifetime.
            </p>
  
            <div className="grid-2">
              <img
                src={img7}
                alt="Arctic explorer"
                className="medium-img"
              />
              <img
                src={img8}
                alt="Mountain expedition"
                className="medium-img"
              />
            </div>
          </section>
  
          <section>
            <h3>The Long Road to All</h3>
            <p>
              Every journey must eventually lead home, but the road back is never the same as the road out. We returned changed, enriched by
              experiences that no photograph could fully capture. The roof of the world had revealed its secrets to us, and in doing so,
              helped us discover parts of ourselves we never knew existed. This journey was more than an adventure—it was a transformation.
            </p>
          </section>
  
          <section>
            <img
              src={img9}
              alt="Mountain and lake landscape"
              className="large-img grid-single"
            />
            <h3>Exploring the High Valleys of Ladakh</h3>
            <p>
              The high altitude valleys of Ladakh presented us with some of the most pristine and untouched landscapes we encountered. At elevations
              that would test most travelers, we found ourselves in a realm of thin air and boundless horizons. The Buddhist monasteries perched on
              cliffsides offered glimpses into a spiritual world that has remained largely unchanged for centuries.
            </p>
            <p>
              The Indus River carved through dramatic canyons, creating natural pathways through terrain that seemed almost otherworldly. We witnessed
              sunrise over snow-capped peaks and stood beneath skies so clear, the stars felt within reach.
            </p>
  
            <div className="grid-2">
              <img
                src={img10}
                alt="Mountain valley view"
                className="medium-img"
              />
              <img
                src={img11}
                alt="Desert landscape"
                className="medium-img"
              />
            </div>
          </section>
  
          <section>
            <h3>Encounters with Local Traditions</h3>
            <p>
              Beyond the landscapes, it was the people who truly enriched our journey. In every village, every remote settlement, we found warmth
              and generosity that transcended language barriers. Local guides shared stories of their homelands, traditions passed down through
              generations, and wisdom gained from living in harmony with some of Earth's most challenging environments.
            </p>
  
            <div className="grid-3">
              <img
                src={img12}
                alt="Local culture"
                className="small-img"
              />
              <img
                src={img13}
                alt="Traditional architecture"
                className="small-img"
              />
              <img
                src={img14}
                alt="Cultural monument"
                className="small-img"
              />
            </div>
          </section>
  
          <section>
            <h3>Seasons of the Roof of the World</h3>
            <p>
              The weather in these high altitude regions is as dramatic and unpredictable as the terrain itself. We experienced all four seasons
              in a single week—from summer heat to sudden snowstorms, each transition bringing its own challenges and rewards. The changing light
              at different times of day transformed the landscape into a living, breathing entity.
            </p>
  
            <div className="grid-2">
              <img
                src={img15}
                alt="Golden hour mountain"
                className="medium-img"
              />
              <img
                src={img16}
                alt="Ocean and coastline"
                className="medium-img"
              />
            </div>
          </section>
  
          <section>
            <img
              src={img17}
              alt="Dramatic sky and mountains"
              className="large-img grid-single"
            />
            <h3>Reflections on the Summit</h3>
            <p>
              As we reflect on this extraordinary journey through the roof of the world, we realize that the real summit we reached wasn't measured
              in feet or meters. It was the personal transformation that came from pushing beyond our comfort zones, from connecting with nature in
              its most raw and powerful form, and from understanding our place in a world so much larger than ourselves.
            </p>
            <p>
              This journey will forever remain etched in our hearts and minds. The mountains have called to us, and we answered. Though we have
              descended from the highest peaks, the spirit of the roof of the world continues to guide us wherever we go.
            </p>
          </section>
  
          <section>
            <div className="grid-2">
              <img
                src={img18}
                alt="Coastal cliffs"
                className="medium-img"
              />
              <img
                src={img19}
                alt="Aerial perspective"
                className="medium-img"
              />
            </div>
          </section>
        </main>
  
      </div>
    );
  }
  
  export default Bpage;
  