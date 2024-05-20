export default function Need() {
    const handelScroll = () => {
        let m = document.getElementById("contact");
        m.scrollIntoView({ behavior: "smooth" }, true);
    }
  return (
    <div className="session-cont">
      <div>
        <h4>need a photoshoot session ?</h4>
        Whether you’re looking to venture into the world of professional
        photography, or <br /> just getting some practice – being able to hold an
        effective photoshoot <br /> can be a handy skill to have. <br />

        <button className="custom-btn" onClick={handelScroll} id="gallery">
            book a session
        </button>
      </div>
      <section className="overlay"></section>
    </div>
  );
}
