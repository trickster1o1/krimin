import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Header() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-cont",
          start: "bottom 25%",
          toggleActions: "restart none reverse none",
        },
      });

      tm.to(".custom-nav", {
        duration: 0,
        top: '-5em',
        backgroundColor: '#1b1b1b',
      }).to(".custom-nav", {
        duration: .5,
        position: 'fixed',
        top:0,
        ease: 'power2.inOut'
      })
    });

    return () => ctx.revert();
  }, []);
  const handelScroll = (sTo) => {
    let m = document.getElementById(sTo);
    m.scrollIntoView({ behavior: "smooth" }, true);
  };
  return (
    <nav className="custom-nav">
      <div>LOGO</div>
      <ul>
        <li onClick={() => handelScroll("hero")}>home</li>
        <li onClick={() => handelScroll("about")}>about</li>
        <li>package</li>
        <li onClick={() => handelScroll("gallery")}>gallery</li>
        <li onClick={() => handelScroll("contact")}>contact</li>
      </ul>
    </nav>
  );
}
