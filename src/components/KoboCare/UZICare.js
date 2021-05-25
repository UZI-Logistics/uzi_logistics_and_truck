import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import tyres from "../../images/tyres.png";
import diesel from "../../images/diesel.png";
import oil from "../../images/oil.png";
import Footer from "../common/Footer";
import logocolored from "../../images/logo-green.png";
import { httpPostNoToken } from "../helpers/api";
import ReactPhoneInput from "react-phone-input-2";
import Loader from "../helpers/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import SEO from "../SEO";
import { Event } from "../helpers/tracking";

const KoboCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}route/country`).then((res) => {
      setCountry(res.data.data.countries);
    });
  }, []);

  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  let [mobile, setMobile] = useState("");
  let [country, setCountry] = useState("");
  const [inputValues, setInputValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    secret: "",
    mobile: "",
    location: "",
    country: "",
    user_type: "uzi_care",
    // user_type: "customer",
  });
  // const { lang } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      const data = {
        first_name: inputValues.first_name,
        last_name: inputValues.last_name,
        email: inputValues.email,
        password: inputValues.secret,
        // phone_number: inputValues.mobile,
        phone_number:
          mobile.charAt(4) === "0"
            ? (mobile = mobile.replace(mobile.charAt(4), ""))
            : mobile,
        location: inputValues.location,
        country: inputValues.country,
        type: inputValues.user_type,
      };
      const response = await httpPostNoToken("create_user", data);
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted. We will get in touch shortly",
        type: "success",
      });
      Event(
        "UZI Logistics & Trucking",
        "Registering for UZI Logistics",
        "UZI Logistics registration successful"
      );
      console.log(data);
      console.log(response);
      setSubmitting(false);
      closeModal();
      clearForm();
    } catch (error) {
      // handleError(error);
      // const text = error.response.data
      //   ? error.response.data.data.error.message
      //   : error.response.data.message;
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
        type: "error",
      });
      setSubmitting(false);
      clearForm();
    }
  };

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      secret: "",
      first_name: "",
      user_type: "",
      last_name: "",
      country: "",
      location: "",
      email: "",
      mobile: "",
      phone: "",
    });
  };

  const showModal = () => {
    setSubmitting(true);
    setShow(!show);
    setSubmitting(false);
  };
  const handleOnChange = (value, data) => {
    console.log(data);
    setMobile(value);
  };

  const closeModal = () => {
    setSubmitting(true);
    setShow(!show);
    setInputValues({
      ...inputValues,
      secret: "",
      country: "",
      first_name: "",
      last_name: "",
      location: "",
      email: "",
      mobile: "",
      user_type: "",
    });
    setSubmitting(false);
    setMobile("");
  };

  return (
    <>
      <SEO title="UZI-LOGISTICS-&-TRUCKING CARE | UZICare" />
      <div className="overflow-head">
        <TheHeader
          bgColor="orange-header"
          kobo={logocolored}
          color="black"
          sticky="sticky"
        />
        {show && (
          <div className="modal">
            <div className="register-box light-orange">
              <i
                className="material-icons pointer green-x"
                onClick={closeModal}
              >
                {" "}
                close
              </i>
              <form className="contact-box__images" onSubmit={register}>
                <p className="margin-bottom-1 bold">
                  <FormattedMessage
                    id="app.signupkobocare"
                    defaultMessage="Sign up for UZICare"
                  />
                </p>
                <div className="grid-input input-text">
                  <div className="flex-column">
                    <label
                      htmlFor="model"
                      className="input-text font-smaller"
                      data-aos="zoom-in"
                    >
                      {" "}
                      <FormattedMessage
                        id="app.first-name"
                        defaultMessage="Firstname"
                      />
                    </label>

                    <input
                      data-aos="zoom-in"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      name="first_name"
                      value={inputValues.first_name}
                      required
                    />
                  </div>
                  <div className="flex-column">
                    <label htmlFor="model" className="input-text font-smaller">
                      <FormattedMessage
                        id="app.last-name"
                        defaultMessage="Lastname"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="last_name"
                      value={inputValues.last_name}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid-input">
                  <div className="flex-column">
                    <label htmlFor="model" className="input-text font-smaller">
                      <FormattedMessage
                        id="app.email"
                        defaultMessage="Email address"
                      />
                    </label>

                    <input
                      type="text"
                      placeholder=""
                      name="email"
                      value={inputValues.email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-column">
                    <label
                      htmlFor="model"
                      className="input-text font-smaller margin-label"
                    >
                      {/* <FormattedMessage
                        id="app.phone-number"
                        defaultMessage="Phone number"
                      /> */}
                    </label>
                    <ReactPhoneInput
                      dropdownClass=""
                      inputClass=""
                      preferredCountries={["ng", "gh"]}
                      value={mobile}
                      // defaultCountry={localStorage.code.toLowerCase() || "ng"}
                      country="ng"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="flex flex-column bottom-padding-20">
                  <label className="label-color font-smaller">
                    <FormattedMessage
                      id="app.password"
                      defaultMessage="Password"
                    />
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    name="secret"
                    autocomplete
                    value={inputValues.secret}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="grid-input">
                  <div className="flex-column">
                    <label htmlFor="model" className="input-text font-smaller">
                      <FormattedMessage
                        id="app.country"
                        defaultMessage="Country"
                      />
                    </label>

                    <select
                      type="text"
                      className="select-box"
                      name="country"
                      value={inputValues.country}
                      required
                      onChange={handleChange}
                    >
                      <option className="close">Select Country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      {country
                        ? country.map((countries) => (
                            <option value={countries.country}>
                              {countries.country.toUpperCase()}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>

                  {/* <div className="flex-column">
                    <label htmlFor="model" className="input-text font-smaller">
                      <FormattedMessage
                        id="app.user_type"
                        defaultMessage="User Type"
                      />
                    </label>
                    <select
                      type="text"
                      className="select-box"
                      name="user_type"
                      value={inputValues.user_type}
                      required
                      onChange={handleChange}
                    >
                      <option className="close">Select User</option>
                      <option value="ng">UZI CARE</option>
                      <option value="gh">CUSTOMER</option>
                    </select>
                  </div> */}

                  <div className="flex-column">
                    <label htmlFor="model" className="input-text font-smaller">
                      <FormattedMessage
                        id="app.location"
                        defaultMessage="Location"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="location"
                      value={inputValues.location}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-button">
                  <button type="submit" className="register-button capitalize">
                    {submitting ? (
                      <Loader />
                    ) : (
                      <FormattedMessage
                        id="app.signup"
                        defaultMessage="SIGN UP"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="care">
          <div className="care-heading middle">
            <h1 className="capitalize" data-aos="zoom-out">
              UZI LOGISTICS & TRUCKING
            </h1>
            <p data-aos="zoom-out">
              <FormattedMessage
                id="app.kobocare-caption"
                defaultMessage="Get products at discounted rates."
              />
            </p>
            <p data-aos="zoom-in">
              {" "}
              <FormattedMessage
                id="app.get-prod-text"
                defaultMessage="UZICare is a solution for registered drivers on the UZI Logistics Platform, as part of our commitment to drivers."
              />
            </p>
          </div>
        </div>
        <div className="flex care-box">
          <p className="care-box__card" data-aos="zoom-out">
            <FormattedMessage
              id="app.kobo-care-text"
              defaultMessage="UZICare is a solution for registered drivers on the Kobo Platform, as part of our commitment to drivers."
            />

            <ul className="margin-1 margin-left-1 ">
              <li className="padding-1 list-care">
                <FormattedMessage
                  id="app.about-list-1"
                  defaultMessage="Discounted Diesel sale to UZI Drivers in partnership with Oando/MRS filling stations nationwide."
                />
              </li>
              <li className="padding-1 list-care" data-aos="zoom-out">
                <FormattedMessage
                  id="app.about-list-2"
                  defaultMessage="Access to Diver Support Centers across Nigeria with services like filling stations maintenance bay, fire services, law enforcements dedicated parking, rest bay for drivers etc."
                />
              </li>
              <li className="padding-1 list-care" data-aos="zoom-in">
                <FormattedMessage
                  id="app.about-list-3"
                  defaultMessage="Integrated HMO plan on UZI Care for drivers and their families."
                />
              </li>
            </ul>
            <button
              className="care-button middle"
              data-aos="zoom-in"
              onClick={showModal}
              // onClick={() => window.open("https://care.kobo360.com")}
            >
              <FormattedMessage id="app.started" defaultMessage="Get started" />
            </button>
          </p>
          <div className="flex-column kobocare-images" data-aos="zoom-in">
            <div className="care-box__images flex-align-center hover-scale margin-1">
              <img src={tyres} alt="" className="tyre" loading="lazy" />
              <span data-aos="zoom-out">
                <p>
                  <FormattedMessage id="app.tyres" defaultMessage="Tyres" />
                </p>
                <h1>+20% off</h1>
              </span>
            </div>
            <div className="care-box__images margin-left-5 flex-align-center hover-scale margin-1">
              <img src={diesel} alt="" loading="lazy" />
              <span>
                <p>
                  <FormattedMessage id="app.diesel" defaultMessage="Diesel" />{" "}
                </p>
                <h1>+30% off</h1>
              </span>
            </div>
            <div className="care-box__images flex-align-center hover-scale margin-1">
              <img src={oil} alt="" loading="lazy" />
              <span>
                <p>
                  <FormattedMessage
                    id="app.engine-oil"
                    defaultMessage="Engine oil"
                  />
                </p>
                <h1>+15% off</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="partners ">
          <h1 className="center title" data-aos="zoom-in">
            <FormattedMessage
              id="app.partner-with"
              defaultMessage="Our Partners"
            />
          </h1>
          <div className="partners-images" data-aos="zoom-out">
            <h3>Coming Soon ...</h3>
           {/*  <img className="big" src={oando} alt="" loading="lazy" />
            <img className="small-icon" src={total} alt="" loading="lazy" />
            <img className="small-icon" src={danco} alt="" loading="lazy" />  */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default KoboCare;
