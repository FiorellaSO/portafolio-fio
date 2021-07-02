export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-socials">
        <li className="footer-socials__item">
          <img
            src="assets/facebook.png"
            alt="fb logo"
            className="footer-socials__logo"
          />
          <p>Fiorella SO</p>
        </li>
        <li className="footer-socials__item">
          <img
            src="assets/gmail.png"
            alt="fb logo"
            className="footer-socials__logo footer-socials__logo-gmail"
          />
          <p>fiorellasantamaria2700</p>
        </li>
        <li className="footer-socials__item">
          <img
            src="assets/linkedin.png"
            alt="fb logo"
            className="footer-socials__logo"
          />
          <p>Evelyn Santamaria</p>
        </li>
      </ul>
      <p className="footer-copyright">
        Copyright @{new Date().getFullYear()} - Fiorella Santamaria
      </p>
    </div>
  );
};
