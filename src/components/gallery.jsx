import { useState } from "react";
import { photos } from "../assets/data/data";

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  const [display, setDisplay] = useState(false);

  const displayImg = (image) => {
    setSelected(image);
    setDisplay(true);
  };
  return (
    <div className="gallery-cont">
      <div className="gallery-nav">
        <ul>
          <div className="corner-style top-left"></div>
          <div className="corner-style top-right"></div>
          <div className="corner-style bottom-left"></div>
          <div className="corner-style bottom-right"></div>
          <li
            className={active === "all" ? "active" : null}
            onClick={() => setActive("all")}
          >
            All
          </li>
          <li
            className={active === "people" ? "active" : null}
            onClick={() => setActive("people")}
          >
            People
          </li>
          <li
            className={active === "god" ? "active" : null}
            onClick={() => setActive("god")}
          >
            God
          </li>
          <li
            className={active === "festival" ? "active" : null}
            onClick={() => setActive("festival")}
          >
            Festival
          </li>
        </ul>
      </div>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div>
            <img src={photo.img} alt="-" className="i-fit" />
            <div
              className="gallery-desc"
              style={
                active !== photo.category && active !== "all"
                  ? { backgroundColor: "rgba(0,0,0,.5)" }
                  : null
              }
              onClick={() => displayImg(photo)}
            >
              <div>
                <span className="header-main">{photo.category}</span> <br />
                <span className="sub-header">{photo.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="overlay"></section>
      <div className={!display ? "display" : "display display-active"}>
        <span class="material-symbols-outlined" onClick={() => setDisplay(null)}>close</span>
        {selected ? <img src={selected.img} alt="-" /> : "loading..."}
      </div>
    </div>
  );
}
