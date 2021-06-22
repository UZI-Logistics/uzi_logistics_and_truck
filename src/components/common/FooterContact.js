import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import youtube from "../../images/youtube.png";
import { FormattedMessage } from "react-intl";
import { GET } from "../helpers/api";
import Axios from "axios";

const FooterContact = () => {
  const [language, setLanguage] = useState(localStorage.locale);
  const [ip, setIp] = useState("");
  const [code, setCode] = useState("NG");

  useEffect(() => {
    setLanguage(localStorage.locale);
    Axios.get(`https://api64.ipify.org/?format=json`)
      .then((res) => {
        setIp(res.data.ip);
      })
      .then(() => {
        GET(`${process.env.REACT_APP_IP_LOOKUP}${ip}`).then((res) => {
          setCode(res.data.country_code);
        });
      });
  }, [ip]);

  return (
    <div className="footer footer-contact bg-blue">
      <div className="join-us">
        <p className="bold white">
          <FormattedMessage id="app.about-head" defaultMessage="Join Us" />
        </p>
        <p className="white font-smaller">
          <FormattedMessage
            id="footer.text_desc"
            defaultMessage="The company is building the Global Logistics Operating System to drive efficiency and affordability in supply chain."
          />
        </p>
      </div>
      <div className="quick-links">
        <p className="bold white">
          <FormattedMessage id="footer.quick" defaultMessage="Quick Links" />
        </p>
        <ul className="white font-smaller no-bullets">
          <div>
            {" "}
            <NavLink className="list pointer" to={`/${code}/${language}/`}>
              <FormattedMessage id="app.home" defaultMessage="Home" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code}/${language}/about-uzi-logistics-&-trucking`}
            >
              <FormattedMessage id="app.about" defaultMessage="About Us" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code}/${language}/services`}
            >
              <FormattedMessage id="app.services" defaultMessage="Services" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code}/${language}/careers`}
            >
              <FormattedMessage id="app.career" defaultMessage="Career" />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              className="list pointer"
              to={`/${code}/${language}/terms-and-conditions`}
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
              to={`/${code}/${language}/privacy-policy`}
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
        <p className="bold white">Our Social Media</p>
        <p className="white font-smaller">
          <FormattedMessage
            id="footer.connect-text"
            defaultMessage="Stay connected with us"
          />
        </p>
        <div className="footer-social__media--logos margin-1">
          <a
            href="https://www.instagram.com/uzitruckingandlogistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" loading="lazy" />
          </a>
          <a
            href="https://web.facebook.com/UZI-Trucking-and-Logistics-104745208506879/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" loading="lazy" />
          </a>

          <a
            href="#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" loading="lazy" />
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
