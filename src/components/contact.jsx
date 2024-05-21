import { useEffect } from "react";
import { gsap } from "gsap";
import fb from "../assets/icon/facebook.svg";
import ig from "../assets/icon/ig.svg";

export default function Contact() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-ani", {
        scrollTrigger: {
          trigger: ".contact-cont",
          start: "top 70%"
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
    <div className="contact-cont" id="contact">
      <section className="contact-ani">
      <h4>REQUEST A QUOTE OR SAY HI !</h4>
      <span>
        Need some additional information ? Feel free to Get in touch with me for{" "}
        <br />
        more special inquiries and events.
      </span>
      </section>
      <div className="contact-info contact-ani">
        <span>CONTACT INFO</span>
        <strong>E</strong> : <a href="mailto:nischaltuladhar15@gmail.com" target="_blank" rel="noopener noreferrer">contact@email.me</a> <br />
        <strong>P</strong> : <a href="tel:+9779808158535" target="_blank" rel="noopener noreferrer">+977 9808158535</a> <br />
        <strong>A</strong> : Tridevi Sadak, Thamel, Kathmandu
      </div>
      <div className="contact-media contact-ani">
        hit me on social media
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
      </div>
    </div>
  );
}
