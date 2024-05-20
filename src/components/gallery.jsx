import imga from "../assets/works/1 (1).jpg";
import imgb from "../assets/works/6.jpg";
import imgc from "../assets/works/8.jpg";

export default function Gallery() {
  return (
    <div className="gallery-cont" id="gallery">
      <div className="gallery-nav">
        <ul>
          <div className="corner-style top-left"></div>
          <div className="corner-style top-right"></div>
          <div className="corner-style bottom-left"></div>
          <div className="corner-style bottom-right"></div>
          <li className="active">All</li>
          <li>People</li>
          <li>Nature</li>
          <li>God</li>
          <li>Festival</li>
        </ul>
      </div>
      <div className="gallery-grid">
        <div>
          <img src={imga} alt="-" className="i-fit" />
          <div className="gallery-desc">
            <div>
              <span className="header-main">People</span> <br />
              <span className="sub-header">girl stairing</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imgb} alt="-" className="i-fit" />
          <div className="gallery-desc">
            <div>
              <span className="header-main">People</span> <br />
              <span className="sub-header">girl stairing</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imgc} alt="-" className="i-fit" />
          <div className="gallery-desc">
            <div>
              <span className="header-main">People</span> <br />
              <span className="sub-header">girl stairing</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imga} alt="-" className="i-fit" />
          <div className="gallery-desc">
            <div>
              <span className="header-main">People</span> <br />
              <span className="sub-header">girl stairing</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imgb} alt="-" className="i-fit" />
          <div className="gallery-desc">
            <div>
              <span className="header-main">People</span> <br />
              <span className="sub-header">girl stairing</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imgc} alt="-" className="i-fit" />
          <div className="gallery-desc">
            <div>
              <span className="header-main">People</span> <br />
              <span className="sub-header">girl stairing</span>
            </div>
          </div>
        </div>
      </div>
      <section className="overlay"></section>
    </div>
  );
}
