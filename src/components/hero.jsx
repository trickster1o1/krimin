import { gsap } from "gsap";
import { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline();
      tm.to("body", {
        duration: 0,
        overflow: "hidden",
      })
        .to(".inner-lense", {
          duration: 0.5,
          transform: "scale(.8)",
        })
        .to(".inner-lense", {
          duration: 0.5,
          transform: "scale(1.5)",
        })
        .to(".flash", {
          duration: 0.5,
          width: "2em",
          height: "2em",
        })
        .to(".flash", {
          duration: 0.2,
          width: "200vw",
          height: "200vh",
        })
        .to(".splash", {
          opacity: "0",
        })
        .to("body", {
          duration: 0,
          overflow: "auto",
        })
        .to(".splash", {
          zIndex: "-1",
        });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="hero-cont" id="hero">
        <div>
          <span>Krimin Tuladhar</span> <br />
          <span>Photographer</span>
          <div className="corner-style top-left"></div>
          <div className="corner-style top-right"></div>
          <div className="corner-style bottom-left"></div>
          <div className="corner-style bottom-right"></div>
        </div>
        <section className="overlay"></section>
      </div>
      <div className="splash">
        <div className="lense">
          <div className="inner-lense"></div>
          <div className="flash"></div>
        </div>
      </div>
    </>
  );
}
