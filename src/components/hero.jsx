import { gsap } from "gsap";
import { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    var images = document.getElementsByTagName("img"),
      totalImages = images.length,
      imagesLoaded = 0,
      img;

    function checkForLoaded() {
      if (imagesLoaded === totalImages) {
        let ctx = gsap.context(() => {
          let tm = gsap.timeline();
          tm.to("body", {
            duration: 0,
            overflow: "hidden",
          })
            .to(".inner-lense", {
              duration: 1,
              transform: "scale(.8)",
              ease: "power2.inOut",
            })
            .to(".inner-lense", {
              duration: 1,
              transform: "scale(1.5)",
              ease: "power2.inOut",
            })
            .to(".flash", {
              duration: 1,
              width: "2em",
              height: "2em",
              ease: "power2.inOut",
            })
            .to(".flash", {
              duration: 0.2,
              width: "10em",
              height: "10em",
              ease: "power2.inOut",
            }).to('.splash', {
              backgroundColor: 'rgba(255,255,255,.9)',
              duration: .1,
              delay: -.1,
              ease: "power2.inOut"
            }).to(".splash", {
              duration: 0.5,
              opacity: "0",
              ease: "power2.inOut",
            })
            .from(".focus-style", {
              // delay: -2,
              duration: 0.5,
              transform: "scale(.7)",
              ease: "power2.inOut",
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
      }
    }

    for (var i = 0; i < totalImages; i++) {
      img = new Image();

      img.onload = function () {
        imagesLoaded+=1;
        checkForLoaded();
      };

      img.src = images[i].src;
    }
  }, []);
  return (
    <>
      <div className="hero-cont" id="hero">
        <div className="focus-style">
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
