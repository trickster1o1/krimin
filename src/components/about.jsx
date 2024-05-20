import fb from '../assets/icon/facebook.svg';
import ig from '../assets/icon/ig.svg';
export default function About() {
  return (
    <div className="about-cont">
      <div>
        <p className="header-para">
          <strong>Krimin Tuladhar</strong> IS A <br /> THEORETICAL PHYSICIST <br /> WHO DEVELOPED
          THE <br /> GENERAL THEORY OF <br /> RELATIVITY
        </p>
        <p>
          <h4>Experience</h4>
          Praesent commodo cursus magna, vel scelerisque nisl <br /> consectetur et.
          Aenean lacinia bibendum nulla sed <br /> consectetur. Lorem ipsum dolor sit
          amet, consectetur <br /> adipiscing elit aenean lacinia bibendum.
        </p>
        <p>
            <h4>HIT ME ON SOCIAL</h4>
            <ul>
                <li><a href="https://www.facebook.com/DukuCreation/#" target="_blank" rel="noopener noreferrer"><img src={fb} alt="FB" /></a></li>
                <li><a href="https://www.instagram.com/duku_creation/" target="_blank" rel="noopener noreferrer"><img src={ig} alt="IG" /></a></li>
            </ul>
        </p>
      </div>
      <section className="overlay"></section>

    </div>
  );
}
