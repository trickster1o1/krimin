import fb from "../assets/icon/facebook.svg";
import ig from "../assets/icon/ig.svg";
import { gsap } from "gsap";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".about-cont", {
        scrollTrigger: {
          trigger: ".about-cont",
          start: "top 0",
          end: "bottom 100%",
          toggleActions: "restart none reverse none",
        },
        duration: 0,
        backgroundAttachment: "fixed",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="about-cont" id="about">
      <div>
        <p className="header-para">
          <strong>Krimin Tuladhar</strong> IS A <br />
          {/* THEORETICAL PHYSICIST{" "}
          <br /> WHO DEVELOPED THE <br /> GENERAL THEORY OF <br /> RELATIVITY */}
          Passionate and creative freelance
          <br /> photographer with a keen eye for <br />
          capturing compelling moments <br /> and telling visual stories.
          {/* Passionate and creative freelance photographer with a keen eye for
          capturing compelling moments and telling visual stories. Specializing
          in [portrait, landscape, event, or
          product photography], I bring a unique blend of artistic vision and
          technical expertise to every project */}
        </p>
        <p>
          <h4>Experience</h4>
          With 5 years of experience, I am dedicated to providing high-quality,<br /> professionally edited images that exceed client expectations. <br />
          Specializing in [portrait, landscape, event, or product photography]{" "}
          <br /> I bring a unique blend of artistic vision and technical
          expertise to  <br />every project.Available for collaborations, event coverage, and <br /> personalized photo shoots. 
        </p>
        <p>
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
