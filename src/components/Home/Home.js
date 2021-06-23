import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactPhoneInput from "react-phone-input-2";
import kobo from "../../images/uzi web main video effects 1.mp4";
import iosstore from "../../images/app-store-logo@2x.png";
import googlestore from "../../images/en_badge_web_generic@2x.png";
import Loader from "../helpers/Loader";
import Swal from "sweetalert2";
import { FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import logo from "../../images/logo2.png";
import { httpGetNoToken, httpPostNoToken } from "../helpers/api";
import { Slider } from "../helpers/Slider";
import SEO from "../SEO";
import { Event } from "../helpers/tracking";

const Home = () => {
  const node = useRef();

  const [show, setShow] = useState(false);
  const [_show, _setShow] = useState(false);
  const [trucks] = useState({});
  const [submitting, setSubmitting] = useState(false);
  let [phone, setPhone] = useState("");
  // const [loading, setIsLoading] = useState(false);
  const [truck_types, setTruckTypes] = useState([]);

  const [inputValues, setInputValues] = useState({
    truckType: "",
    referral: "",
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phone: "",
  });

  const handleClickOutside = useCallback(
    (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      _setShow(!_show);
    },
    [_show]
  );

  const handleRegClickOutside = useCallback(
    (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setShow(!show);
    },
    [show]
  );

  const getTruckTypes = async () => {
    try {
      let res = await httpGetNoToken("get_truck_types");
      console.log("res>", res);
      setTruckTypes(res.data);
      // setIsLoading(true);
    } catch (error) {
      console.log("error", error);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    if (_show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [_show, handleClickOutside]);

  // For registration modal
  useEffect(() => {
    getTruckTypes();
    if (show) {
      document.addEventListener("mousedown", handleRegClickOutside);
    } else {
      document.removeEventListener("mousedown", handleRegClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleRegClickOutside);
    };
  }, [show, handleRegClickOutside]);

  const toPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/"
    );
  };

  const toAppleStore = () => {
    window.open(
      "https://apps.apple.com/apps/"
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      const data = {
        first_name: inputValues.firstName,
        last_name: inputValues.lastName,
        location: inputValues.location,
        email_address: inputValues.email,
        truck_type_id: inputValues.truckType,
        phone_number:
          inputValues.phone.charAt(4) === "0"
            ? (phone = phone.replace(phone.charAt(4), ""))
            : phone,
        referred_by: inputValues.referral,
      };
      let res = await httpPostNoToken("register_truck", data);
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted. We will get in touch shortly",
        // type: "success",
      });
      Event(
        "Register Truck",
        "Registering truck was successful",
        "Register Truck Success"
      );
      setSubmitting(false);
      closeModal();
      setInputValues({
        ...inputValues,
        truckType: "",
        referral: "",
        firstName: "",
        lastName: "",
        location: "",
        // state: "",
        email: "",
        phone: "",
      });
      console.log(res);
    } catch (error) {
      setSubmitting(false);
      Swal.fire({
        title: "Sorry 😞, we couldn't process your details",
        text: error.message,
        type: "error",
      });
      Event(
        "Register Truck",
        "Registering truck Failed",
        "Register Truck failure"
      );
    }
  };

  const showModal = () => {
    setSubmitting(true);
    setShow(!show);
    setSubmitting(false);
  };

  const handleOnChange = (value, data) => {
    setPhone(value);
  };

  const closeModal = () => {
    setSubmitting(true);
    setShow(!show);
    setInputValues({
      ...inputValues,
      truckType: "",
      referral: "",
      firstName: "",
      lastName: "",
      location: "",
      // state: "",
      email: "",
      phone: "",
    });
    setSubmitting(false);
    setPhone("");
  };

  return (
    <>
      <SEO title="UZI Logistics & Trucking | Your Number 1 Logistics Plug Company" />
      <div className="home">
        <TheHeader kobo={logo} color="white" sticky="sticky" />
        {_show && (
          <div className="modal">
            <div className="signin-box margin-top-10" ref={node}>
              <div className="flex-column">
                <button
                  className="home-button capitalize margin-bottom-1"
                  onClick={() =>
                    window.open("https://customer-uzi-logistics.netlify.app/")
                  }
                >
                  <FormattedMessage
                    id="app.sig"
                    defaultMessage="SIGN IN AS CUSTOMER"
                  />
                </button>
                {/* <button
                  className="home-button capitalize"
                  onClick={() =>
                    window.open("https://admin-uzi-logistics.netlify.app/")
                  }
                >
                  <FormattedMessage
                    id="app.sig"
                    defaultMessage="SIGN IN AS PARTNER"
                  />
                </button> */}
                <button
                  className="home-button capitalize"
                  onClick={() =>
                    // window.open("https://admin.uzi-logistics-&-trucking.com/")
                    window.open("https://test-uzi.vercel.app/")
                  }
                >
                  <FormattedMessage id="app.sig" defaultMessage="ADMIN LOGIN" />
                </button>
              </div>
            </div>
          </div>
        )}

        {show && (
          <div className="modal">
            <div className="register-box" ref={node}>
              <i
                className="material-icons pointer green-x"
                onClick={closeModal}
              >
                {" "}
                close
              </i>
              <form
                className="contact-box__images margin-1"
                onSubmit={register}
              >
                <p className="margin-bottom-1 bold">
                  <FormattedMessage
                    id="app.signupyourtruck"
                    defaultMessage="Sign up Your Truck"
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
                      name="firstName"
                      value={inputValues.firstName}
                      //required
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
                      name="lastName"
                      value={inputValues.lastName}
                      //required
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
                      //required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-column">
                    <ReactPhoneInput
                      dropdownClass=""
                      inputClass=""
                      preferredCountries={["ng", "gh"]}
                      value={phone}
                      country="ng"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="grid-input">
                  <div className="flex-column">
                    <label htmlFor="model" className="input-text font-smaller">
                      <FormattedMessage
                        id="app.location"
                        defaultMessage="Truck location"
                      />
                    </label>

                    <input
                      type="text"
                      placeholder=""
                      name="location"
                      value={inputValues.location}
                      //required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-column ">
                    <label
                      htmlFor="model"
                      className="input-text font-smaller"
                    >
                      <FormattedMessage
                        id="app.truck-type"
                        defaultMessage="Truck type"
                      />
                    </label>
                    <select
                      name="truckType"
                      className="select-box"
                      //required
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      {truck_types.map((item, index) => (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      ))}
                      {trucks.assetClasses
                        ? [
                          ...new Set(
                            trucks.assetClasses.map((asset, index) => (
                              <option
                                key={index}
                                value={`${asset.name} ${asset.size}${asset.unit}`}
                              >
                                {asset.name.toUpperCase()} {asset.size}
                                {asset.unit}
                              </option>
                            ))
                          ),
                        ]
                        : ""}
                    </select>
                  </div>
                </div>
                <div className="flex flex-column bottom-padding-20">
                  <label className="label-color font-size-12">
                    <FormattedMessage
                      id="app.hear-aboutus"
                      defaultMessage="How did You Hear About Us?"
                    />
                  </label>
                  <select
                    name="referral"
                    id=""
                    className="bhee-select"
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Television">Television</option>
                    <option value="Radio">Radio</option>
                    <option value="Newspaper">Newspaper</option>
                    <option value="Internet">Internet</option>
                    <option value="Flyer">Flyer</option>
                    <option value="Marketers">Marketers</option>
                    <option value="Agents">Agents</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="contact-button">
                  <button type="submit" className="register-button reg-button">
                    {submitting ? (
                      <Loader />
                    ) : (
                      <FormattedMessage
                        id="app.sell"
                        defaultMessage="Register Truck"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="home-video">
          <div className="video-overlay" />
          <video src={kobo} muted autoPlay loop width="100%"></video>
        </div>
        <div className="home-container">
          <div className="home-content">
            <div className="">
              <h1 className="capitalize font-10 title white home-title">
                <FormattedMessage
                  id="app.africa-platform"
                  defaultMessage="YOUR RELIABLE LOGISTICS PARTNER"
                />
              </h1>
              <div className="home-buttons center">
                <button
                  className="home-button capitalize padding-1 font-size-1rem"
                  onClick={(e) => _setShow(!_show)}
                >
                  <FormattedMessage
                    id="app.started"
                    defaultMessage="GET STARTED"
                  />
                </button>
                <br />
                <button
                  className="home-button truck-register padding-1 capitalize font-size-1rem"
                  onClick={showModal}
                >
                  <FormattedMessage
                    id="app.sell"
                    defaultMessage="CLICK HERE TO REGISTER TRUCK"
                  />
                </button>

                {/* <div className="download-app download">
              <p className="capitalize white left margin-bottom-1 download-text">
                <FormattedMessage
                  id="app.download"
                  defaultMessage="download our apps"
                />
              </p>
              <div className="app-store">
                <img
                  src={iosstore}
                  alt="app-store"
                  onClick={toAppleStore}
                  className="pointer download-img"
                  loading="lazy"
                />
                <img
                  src={googlestore}
                  alt="google-store"
                  onClick={toPlayStore}
                  className="pointer download-img"
                  loading="lazy"
                />
              </div>
            </div> */}
                {/* <button
                  className="home-button orange padding-1 capitalize font-size-1rem"
                  onClick={showModal}
                >
                  <FormattedMessage
                    id="app.sell"
                    defaultMessage="REGISTER TRUCK"
                  />
                </button> */}
              </div>

              {/* <div className="manual-download capitalize center white pointer margin-1 bold">
                <a
                  download="User guide English"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={userguideenglish}
                >
                  Download the registration manual to learn more
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="brands flex space-between">
          <div className="slide width-40">
            <p className="trusted-text capitalize white">
              <FormattedMessage
                id="app.trusted_brands"
                defaultMessage="TRUSTED BY LEADING BRANDS"
              />
            </p>
            <Slider />
          </div>
          <div className="brands-apps">
            <div className="download-app download">
              <p className="capitalize white left margin-bottom-1 download-text">
                <FormattedMessage
                  id="app.download"
                  defaultMessage="download our apps"
                />
              </p>
              <div className="app-store">
                <img
                  src={iosstore}
                  alt="app-store"
                  onClick={toAppleStore}
                  className="pointer download-img"
                  loading="lazy"
                />
                <img
                  src={googlestore}
                  alt="google-store"
                  onClick={toPlayStore}
                  className="pointer download-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
