import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter (1).png"
import youtube from "../../images/youtube.png";
import { FormattedMessage } from "react-intl";

const OpenMail = ({ mail }) => {
  const onClick = () => {
    window.location.href = `mailto:${mail}?subject=&body=Message%20goes%20here`;
  };
  return (
    <>
      <p className="grey font-smaller underline-mail pointer" onClick={onClick}>
        {mail}
      </p>
    </>
  );
};

const Footer = () => {
  const [language, setLanguage] = useState(() => localStorage.locale);
  const [code] = useState(() => localStorage.code);

  useEffect(() => {
    setLanguage(localStorage.locale);
  }, []);
  return (
    <div className="footer">
      <div className="join-us">
        <p className="bold">
          <FormattedMessage id="app.about-head" defaultMessage="Join Us" />
        </p>
        <p className="grey font-smaller">
          <FormattedMessage
            id="footer.text_desc"
            defaultMessage="The company is building the Global Logistics Operating System to drive efficiency and affordability in supply chain."
          />
        </p>
      </div>
      <div className="quick-links">
        <p className="bold">
          <FormattedMessage id="footer.quick" defaultMessage="Quick Links" />
        </p>
        <ul className="grey font-smaller no-bullets">
          <div>
            {" "}
            <NavLink className="list pointer" to={`/${code || 'NG'}/${language}/`}>
              <FormattedMessage id="app.home" defaultMessage="Home" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code || 'NG'}/${language}/about-kobo360`}
            >
              <FormattedMessage id="app.about" defaultMessage="About Us" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code || 'NG'}/${language}/services`}
            >
              <FormattedMessage id="app.services" defaultMessage="Services" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code || 'NG'}/${language}/careers`}
            >
              <FormattedMessage id="app.career" defaultMessage="Career" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code || 'NG'}/${language}/terms-and-conditions`}
            >
              <FormattedMessage
                id="app.terms-of-use"
                defaultMessage="Terms and Conditions"
              />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code || 'NG'}/${language}/privacy-policy`}
            >
              <FormattedMessage
                id="app.privacy-policy"
                defaultMessage="Privacy Policy"
              />
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="footer-social__media">
        <p className="bold">Our Social Media</p>
        <p className="grey font-smaller">
          <FormattedMessage
            id="footer.connect-text"
            defaultMessage="Stay connected with us"
          />
        </p>
        <div className="footer-social__media--logos margin-1">
          <a
            href="https://www.instagram.com/kobo_360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" loading="lazy" />
          </a>
          <a
            href="https://www.facebook.com/kobo360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" loading="lazy" />
          </a>
          <a
            href="https://twitter.com/kobo_360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com/company/kobo360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" loading="lazy" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCSMxgq7f51sS9gh3fwbRAWw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" loading="lazy" />
          </a>
        </div>
      </div>
      <div className="branches">
        <span>
          <p className="bold">Nigeria</p>
          <p className="grey font-smaller">+234 818 678 0000</p>
          <OpenMail mail="info@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Kenya</p>
          <p className="grey font-smaller">+254717053217</p>
          <OpenMail mail="info.ke@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Ghana</p>
          <p className="grey font-smaller">+233(0)500406855</p>
          <OpenMail mail="info.gh@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Uganda</p>
          <p className="grey font-smaller">+25 677 297 9480</p>
          <OpenMail mail="info.ug@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Togo</p>
          <p className="grey font-smaller">+228 9257 7720</p>
          <OpenMail mail="info.tg@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Ivory Coast</p>
          <p className="grey font-smaller">+225  49400000</p>
          <OpenMail mail="info.ivc@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Burkina Faso</p>
          <p className="grey font-smaller">+226 75244998</p>
          <OpenMail mail="info.bf@kobo360.com"></OpenMail>
        </span>
        <span>
          <p className="bold">Media Enquiries</p>
          <OpenMail mail="press@kobo360.com"></OpenMail>
        </span>
      </div>
    </div>
  );
};

export default Footer;
