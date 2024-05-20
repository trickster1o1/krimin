import { photos } from "../assets/data/data";

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
        {photos.map((photo) => (
          <div>
            <img src={photo.img} alt="-" className="i-fit" />
            <div className="gallery-desc">
              <div>
                <span className="header-main">{photo.category}</span> <br />
                <span className="sub-header">{photo.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="overlay"></section>
    </div>
  );
}
