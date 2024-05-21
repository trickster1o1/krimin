import { useEffect } from "react";
import { gsap } from "gsap";

export default function Need() {
  const handelScroll = () => {
    let m = document.getElementById("contact");
    m.scrollIntoView({ behavior: "smooth" }, true);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".session-ani", {
        scrollTrigger: {
          trigger: ".session-cont",
          start: "top 50%"
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
    <div className="session-cont">
      <div>
        <section className="session-ani">
          <h4>need a photoshoot session ?</h4>
        </section>
        <section className="session-ani">
          Whether you’re looking to venture into the world of professional
          photography, or <br /> just getting some practice – being able to hold
          an effective photoshoot <br /> can be a handy skill to have. <br />
        </section>
        <section className="session-ani">
        <button
          className="custom-btn"
          onClick={handelScroll}
          id="gallery"
        >
          book a session
        </button>
        </section>
        
      </div>
      <section className="overlay"></section>
    </div>
  );
}
