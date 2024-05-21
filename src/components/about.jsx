import fb from "../assets/icon/facebook.svg";
import ig from "../assets/icon/ig.svg";
import { gsap } from "gsap";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // if (window.innerWidth > 815) {
      //   gsap.to(".about-cont", {
      //     scrollTrigger: {
      //       trigger: ".about-cont",
      //       start: "top 0",
      //       end: "bottom 100%",
      //       toggleActions: "restart none reverse none",
      //     },
      //     duration: 0,
      //     backgroundAttachment: "fixed",
      //   });
      // }

      gsap.from(".about-ani", {
        scrollTrigger: {
          trigger: ".about-cont",
          start: "top 50%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.25,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="about-cont" id="about">
      <div>
        <p className="header-para about-ani">
          <strong>Krimin Tuladhar</strong> IS A <br />
          Passionate and creative freelance
          <br /> photographer with a keen eye for <br />
          capturing compelling moments <br /> and telling visual stories.
        </p>
        <p className="about-ani">
          <h4>Experience</h4>
          With 5 years of experience, I am dedicated to providing high-quality,
          <br /> professionally edited images that exceed client expectations.{" "}
          <br />
          Specializing in [portrait, landscape, event, or product photography]{" "}
          <br /> I bring a unique blend of artistic vision and technical
          expertise to <br />
          every project.Available for collaborations, event coverage, and <br />{" "}
          personalized photo shoots.
        </p>
        <p className="about-ani">
          <h4>HIT ME ON SOCIAL</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/DukuCreation/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="FB" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/duku_creation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ig} alt="IG" />
              </a>
            </li>
          </ul>
        </p>
      </div>
      <section className="overlay"></section>
    </div>
  );
}
