import { FACEBOOK, GMAIL, LINKEDIN } from "../images/images";

export const Footer = () => {
  return (
    <div className="fs-footer">
      <ul className="fs-footer-socials">
        <li className="fs-footer-socials__item">
          <img
            src={FACEBOOK}
            alt="fb logo"
            className="fs-footer-socials__logo"
          />
          <p>Fiorella SO</p>
        </li>
        <li className="fs-footer-socials__item">
          <img
            src={GMAIL}
            alt="fb logo"
            className="fs-footer-socials__logo fs-footer-socials__logo-gmail"
          />
          <p>fiorellasantamaria2700</p>
        </li>
        <li className="fs-footer-socials__item">
          <img
            src={LINKEDIN}
            alt="fb logo"
            className="fs-footer-socials__logo"
          />
          <p>Evelyn Santamaria</p>
        </li>
      </ul>
      <p className="fs-footer-copyright">
        Copyright @{new Date().getFullYear()} - Fiorella Santamaria
      </p>
    </div>
  );
};
