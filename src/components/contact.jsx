import fb from "../assets/icon/facebook.svg";
import ig from "../assets/icon/ig.svg";

export default function Contact() {
  return (
    <div className="contact-cont">
      <h4>REQUEST A QUOTE OR SAY HI !</h4>
      <span>
        Need some additional information ? Feel free to Get in touch with me for{" "}
        <br />
        more special inquiries and events.
      </span>
      <div className="contact-info">
        <span>CONTACT INFO</span>
        <strong>E</strong> : contact@email.me <br />
        <strong>P</strong> : (513) 352-3209s <br />
        <strong>A</strong> : Edwards Cincinnati, OH 45209 USA
      </div>
      <div className="contact-media">
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
