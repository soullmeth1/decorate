import { ArrowForward, ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import pl from "../images/pl.jpg";
import pl1 from "../images/pl1.jpg";
import pl2 from "../images/pl2.jpg";
import pl3 from "../images/pl3.jpg";
import Cards from "./Cards";
// import ph from "../images/ph.jpg";

function Home() {
  const [x, setX] = useState(0);
  const caption = useRef();

  useEffect(() => {
    let setTem = setInterval(() => {
      setX((x) => (x > 200 ? 0 : x + 100));
    }, 5000);

    return () => {
      clearInterval(setTem);
    };
  }, []);

  useEffect(() => {
    caption.current.style = `transform: translateX(-${x}%)`;
  }, [x]);

  return (
    <div className="home">
      <section className="home__scroll">
        <div className="home__content">
          <div className="home__caption">
            <div className="caption" ref={caption}>
              <div>
                <h1>Design</h1>
                <p>Decorative indoor plants for all your environments.</p>
                <button>
                  <ArrowForward />
                  See more
                </button>
                <img src={pl} alt="" />
              </div>
              <div>
                <h1>Nature</h1>
                <p>Will makes your home feel comfort.</p>
                <button>
                  <ArrowForward />
                  See more
                </button>
                <img src={pl1} alt="" />
              </div>
              <div>
                <h1>Fresh</h1>
                <p>
                  Home sweet home. Every person want to get fresh in their home.
                </p>
                <button>
                  <ArrowForward />
                  See more
                </button>
                <img src={pl2} alt="" />
              </div>
              <div>
                <h1>Let's Join</h1>
                <p>You have to achieve what you want to.</p>
                <button>
                  <ArrowForward />
                  See more
                </button>
                <img src={pl3} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="home__img"><img src={ph} alt="" /></div> */}
        </div>
        <div className="home__nav">
          <ArrowLeft
            onClick={() => setX(x ? x - 100 : 0)}
            style={{ color: !x && "gray" }}
          />
          <ArrowRight onClick={() => setX(x > 200 ? 0 : x + 100)} />
        </div>
      </section>

      <section className="home__scroll">
        <h1>Our Services</h1>
        <Cards />
      </section>
    </div>
  );
}

export default Home;
