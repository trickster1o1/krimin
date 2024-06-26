import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  gsap.registerPlugin(ScrollTrigger);
  const [menu,setMenu] = useState(false);
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
        top: "-5em",
        backgroundColor: "#1b1b1b",
      }).to(".custom-nav", {
        duration: 0.5,
        position: "fixed",
        top: 0,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
  const handelScroll = (sTo) => {
    setMenu(false);
    let m = document.getElementById(sTo);
    m.scrollIntoView({ behavior: "smooth" }, true);
  };
  return (
    <>
      <nav className="custom-nav">
        <div onClick={() => handelScroll("hero")}>
          <img src={logo} alt="DUKU CREATION" />
        </div>
        <span className="material-symbols-outlined b-menu" onClick={()=>setMenu(true)}>menu</span>
        <ul>
          <li onClick={() => handelScroll("hero")}>home</li>
          <li onClick={() => handelScroll("about")}>about</li>
          <li onClick={() => handelScroll("gallery")}>gallery</li>
          <li onClick={() => handelScroll("contact")}>contact</li>
        </ul>
      </nav>
      <div className="mobile-nav" style={menu ? {zIndex: '100', backdropFilter: 'blur(8.3px)'} : null}>
        <span className="material-symbols-outlined" onClick={()=>setMenu(false)}>close</span>

        <ul className={menu ? 'active-mob-nav' : null}>
          <li onClick={() => handelScroll("hero")}>home</li>
          <li onClick={() => handelScroll("about")}>about</li>
          <li onClick={() => handelScroll("gallery")}>gallery</li>
          <li onClick={() => handelScroll("contact")}>contact</li>
        </ul>
      </div>
    </>
  );
}
