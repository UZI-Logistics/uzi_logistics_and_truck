import React, { useEffect, useState } from "react";
// import logocolored from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import clsx from "clsx";
import { GETENDPOINT } from "../helpers/api";

const TheHeader = (props) => {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  // const [menu, setMenu] = useState(true);
  // const [show, setShow] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [language, setLanguage] = useState(localStorage.locale || "en");
  const [code, setCode] = useState(() => localStorage.code);
  const [countries, setCountries] = useState([]);

  const [inputValues, setInputValues] = useState({
    select: "",
  });

  //clsx helps manage multiple classNames
  const hamburgerClassNames = clsx({
    hamburger: true,
    open: hamburgerOpen,
  });

  const navVariants = {
    hidden: {
      x: "100%",
      transition: {
        ease: "easeInOut",
      },
    },
    visible: {
      x: "0%",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const navItemVariants = {
    hidden: {
      x: 300,
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  useEffect(() => {
    if (window.innerWidth < 830) {
      setToggle(true);
    }
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await GETENDPOINT("route/country");
        setCountries(res.data.data.countries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  // useEffect(() => {
  //   window.location.reload();
  // }, [code])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 20;
      if (isTop !== true) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [scroll]);
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    localStorage.locale = value;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    setLanguage(value);
    // window.location.reload();
    let pathname = window.location.pathname.replace(/.*\//, "");
    let origin = window.location.origin;
    window.location.replace(
      `${origin}/${code}/${localStorage.locale || "en"}/${pathname}`
    );
  };
  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  function setCountryCode(code) {
    localStorage.code = code;
    setCode(code);

    let pathname = window.location.pathname.replace(/.*\//, "");
    let origin = window.location.origin;

    window.location.replace(
      `${origin}/${localStorage.code}/${localStorage.locale || "en"
      }/${pathname}`
    );
  }
  return (
    <div
      className={`header ${props.color} ${props.bgColor || ""} ${scroll ? props.sticky : ""
        }`}
    >
      <NavLink to={`/${code || "NG"}/${language}/`}>
        <img src={props.kobo} alt="logo" loading="lazy" />
      </NavLink>
      <ul className={`header_list ${props.color}`}>
        <NavLink to={`/${code || "NG"}/${language}/`}>
          <div className="kobo360 nav-item pointer">
            UZI LOGISTICS <br /> & TRUCKING &nbsp;
            <i className="fa fa-caret-down"></i>
            <div className="dropdown-content">
              <NavLink
                className=""
                // to={`/${code || "NG"}/${language}/about-kobo360`}
                to={`/${code || "NG"
                  }/${language}/about-uzi-logistics-&-trucking`}
              >
                <div className="span dropdown">
                  <i className="fa fa-caret-right"></i>
                  <span>
                    {" "}
                    <FormattedMessage
                      id="app.about"
                      defaultMessage="About Us"
                    />
                  </span>
                </div>
              </NavLink>
              <NavLink
                className=""
                to={`/${code || "NG"}/${language}/services`}
              >
                <div className="span dropdown">
                  <i className="fa fa-caret-right"></i>
                  <span>
                    {" "}
                    <FormattedMessage
                      id="app.our-services"
                      defaultMessage="Our Services"
                    />
                  </span>
                </div>
              </NavLink>
              <NavLink
                className=""
                to={`/${code || "NG"}/${language}/trade-in-your-truck`}
              >
                <div className="span dropdown">
                  <i className="fa fa-caret-right"></i>
                  <span>
                    {" "}
                    <FormattedMessage
                      id="app.sell-your-truck"
                      defaultMessage="Sell your truck"
                    />
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
        </NavLink>

        {/* {code === "NG" ? (
          <NavLink
            className="header-underline capitalize"
            to={`/${code || 'NG'}/${language}/pricing`}
          >
            <FormattedMessage id="app.estimate" defaultMessage="PRICING" />
          </NavLink>
        ) : (
            ""
        )} */}
        <NavLink
          className="header-underline capitalize"
          to={`/${code || "NG"}/${language}/pricing`}
        >
          <FormattedMessage id="app.estimate" defaultMessage="PRICING" />
        </NavLink>

        <NavLink
          className="header-underline capitalize"
          to={`/${code || "NG"}/${language}/careers`}
        >
          <FormattedMessage id="app.career" defaultMessage="Careers" />
        </NavLink>

        {/* <div onClick={() => window.open("http://media.kobo360.com/")}>
          <NavLink to='' className="header-underline capitalize">
            {" "}
            <FormattedMessage id="footer.blog" defaultMessage="Blog" />
          </NavLink>
        </div> */}

        <div onClick={() => window.open("#")}>
          <NavLink to="" className="header-underline capitalize">
            {" "}
            <FormattedMessage id="footer.blog" defaultMessage="Blog" />
          </NavLink>
        </div>

        <NavLink
          className="header-underline capitalize"
          to={`/${code || "NG"}/${language}/contact`}
        >
          <FormattedMessage id="app.contact" defaultMessage="Contact" />
        </NavLink>

        <NavLink
          className="header-underline capitalize"
          to={`/${code || "NG"}/${language}/uzicare`}
        >
          <FormattedMessage
            id="app.kobocare"
            defaultMessage="UZI LOGISTICS & TRUCK "
          />
        </NavLink>

        <div className="kobo360 capitalize pointer nav-item">
          LOGIN
          <div className="dropdown-content left-100">
            <div className="span dropdown kobocare-dropdown-span">
              <i className="fa fa-caret-right"></i>
              {/* <span
                onClick={() => window.open("https://customer.kobo360.com/")}
                className="font-icon-small"
              > */}
              <span
                onClick={() => window.open("https://customer-uzi-logistics.netlify.app/")}
                className="font-icon-small"
              >
                <FormattedMessage
                  id="app.sig"
                  defaultMessage="CUSTOMER SIGN-IN"
                />
              </span>
            </div>
            {/* <div className="span dropdown kobocare-dropdown-span left-100">
              <i className="fa fa-caret-right"></i>
               <span
                className="font-icon-small"
                onClick={() => window.open("https://partner.kobo360.com/")}
              >
              <span
                className="font-icon-small"
                onClick={() => window.open("http://localhost:3001")}
              >
                <FormattedMessage
                  id="app.sig"
                  defaultMessage="SIGN IN AS PARTNER"
                />
              </span>
            </div> */}
          </div>
        </div>
      </ul>

      {/* <div className={`select-dropdown ${toggle ? "none" : ""} `}>
        <select
          className="header_language pointer"
          onChange={onChange}
          name="select"
          value={localStorage.locale}
        >
          <option value="en">ENGLISH</option>
          <option value="fr">FRANÇAIS</option>
          <option value="ha">HAUSA</option>
          <option value="sw">SWAHILI</option>
          <option value="ar">ARABIC</option>
        </select>
      </div> */}
      <div
        className={`uzi-logistics nav-item pointer set-flex ${props.color} ${toggle ? "none" : ""
          } `}
      >
        {/* {code || "NG"} */}
        {countries.length > 0 &&
          countries.find(
            (country) =>
              country.countryCode.toLowerCase() ===
              ((code && code.toLowerCase()) || "ng")
          ) ? (
          <img
            loading="lazy"
            src={
              countries.find(
                (country) =>
                  country.countryCode.toLowerCase() ===
                  ((code && code.toLowerCase()) || "ng")
              ).flag
            }
            alt="flag"
          />
        ) : (
          ""
        )}
        &nbsp;
        <i className="fa fa-caret-down"></i>
        <div
          className="dropdown-content country-dropdown"
          style={{ top: "2em" }}
        >
          {countries.length > 0 &&
            countries.map(({ country, countryCode }, i) => (
              <div
                onClick={() => setCountryCode(countryCode)}
                className={`country ${countryCode === code ? "active" : ""} `}
                key={i}
              >
                {country}
              </div>
            ))}
        </div>
      </div>

      {toggle === true && (
        <div className={hamburgerClassNames} onClick={handleHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      )}
      {/* MobileMenu list */}
      <div
        className={` ${hamburgerOpen ? "header-menu__list white show" : "close"
          } `}
        initial="hidden"
        animate={hamburgerOpen ? "visible" : "hidden"}
        variants={navVariants}
      >
        <div className="white pointer font-5 nav-list center">
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <NavLink className="header-underline" to={`/${code}/${language}/`}>
              <FormattedMessage id="app.home" defaultMessage="Home" />
            </NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <div
              className="kobo360"
              onClick={showDropdown}
              initial="hidden"
              animate={hamburgerOpen ? "visible" : "hidden"}
              variants={navItemVariants}
            >
              {" "}
              UZI-Logistics-&-Trucking &nbsp;
              <i className="fa fa-caret-down"></i>
              <div>
                <div className="dropdown-content">
                  <NavLink
                    className=""
                    exact={true}
                    to={`/${code || "NG"}/${language}/about-uzi-logistics-&-trucking`}
                  >
                    <div className="span dropdown">
                      <span>
                        {" "}
                        <FormattedMessage
                          id="app.about"
                          defaultMessage="About Us"
                        />
                      </span>
                    </div>
                  </NavLink>
                  <NavLink
                    className=""
                    exact={true}
                    to={`/${code || "NG"}/${language}/trade-in-your-truck`}
                  >
                    <div className="span dropdown">
                      <span>
                        <FormattedMessage
                          id="app.sell-your-truck"
                          defaultMessage="Sell your truck"
                        />{" "}
                      </span>
                    </div>
                  </NavLink>
                  <NavLink
                    className=""
                    exact={true}
                    to={`/${code || "NG"}/${language}/services`}
                  >
                    <div className="span dropdown">
                      <span>
                        {" "}
                        <FormattedMessage
                          id="app.our-services"
                          defaultMessage="Our Services"
                        />
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <NavLink
              className="header-underline"
              to={`/${code || "NG"}/${language}/pricing`}
            >
              <FormattedMessage id="app.estimate" defaultMessage="PRICING" />
            </NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <NavLink
              className="header-underline"
              to={`/${code || "NG"}/${language}/careers`}
            >
              <FormattedMessage id="app.career" defaultMessage="Careers" />
            </NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <a
              href="#region "
              //href='http://media.kobo360.com/'
              target="_blank"
              rel="noopener noreferrer"
              // to="http://media.kobo360.com/"
              className="header-underline"
            >
              {" "}
              <FormattedMessage id="footer.blog" defaultMessage="BLOG" />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <NavLink
              className="header-underline"
              to={`/${code || "NG"}/${language}/contact`}
            >
              Contact
            </NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            <NavLink
              className="header-underline"
              to={`/${code || "NG"}/${language}/uzicare`}
            >
              UZI LOGISTICS CARES
            </NavLink>
          </motion.li>

          <motion.div
            className="kobo360 margin-1"
            onClick={showDropdown}
            initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            variants={navItemVariants}
          >
            LOGIN
            <div className="dropdown-content ">
              <div className="span dropdown kobocare-dropdown-span">
                <i className="fa fa-caret-right"></i>
                <span
                  onClick={() => window.open("https://test-uzi.vercel.app/")}
                  className="font-icon-small"
                >
                  <FormattedMessage
                    id="app.sig"
                    defaultMessage="ADMIN LOGIN"
                  />
                </span>
                <span
                  onClick={() => window.open("https://test-uzi.vercel.app/")}
                  className="font-icon-small"
                >
                  <FormattedMessage
                    id="app.sig"
                    defaultMessage="CUSTOMER SIGN IN"
                  />
                </span>
              </div>
              {/* <div className="span dropdown kobocare-dropdown-span ">
                <i className="fa fa-caret-right"></i>
                <span
                  className="font-icon-small"
                  onClick={() => window.open("http://localhost:3001/")}
                >
                  <FormattedMessage
                    id="app.sig"
                    defaultMessage="SIGN IN AS PARTNER"
                  />
                </span>
              </div> */}
            </div>
          </motion.div>

          <div className="mobile-sel">
            <div className={`select-dropdown margin-1`}>
              <select
                className="header_language pointer"
                onChange={onChange}
                name="select"
                value={localStorage.locale}
              >
                <option value="en">ENGLISH</option>
                <option value="fr">FRANÇAIS</option>
                <option value="ha">HAUSA</option>
              </select>
            </div>
            <div className={`kobo360 nav-item pointer set-flex ${props.color}`}>
              {code || "NG"}
              {countries.length > 0 &&
                countries.find(
                  (country) =>
                    country.countryCode.toLowerCase() ===
                    ((code && code.toLowerCase()) || "ng")
                ) ? (
                <img
                  loading="lazy"
                  src={
                    countries.find(
                      (country) =>
                        country.countryCode.toLowerCase() ===
                        ((code && code.toLowerCase()) || "ng")
                    ).flag
                  }
                  alt="flag"
                />
              ) : (
                ""
              )}
              &nbsp;
              <i className="fa fa-caret-down"></i>
              <div
                className="dropdown-content country-dropdown"
                style={{ top: "2em" }}
              >
                {countries.length > 0 &&
                  countries.map(({ country, countryCode }, i) => (
                    <div
                      onClick={() => setCountryCode(countryCode)}
                      className={`country ${countryCode === code ? "active" : ""
                        } `}
                      key={i}
                    >
                      {country}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
// export default withRouter(TheHeader);
