import React, { useEffect, useState } from "react";
import logocolored from "../../images/logo.png";
import TheHeader from "../common/TheHeader";
// import { FormattedMessage, FormattedHTMLMessage } from "./components/common/node_modules/react-intl";

import Footer from "../common/Footer";
// import trucky from "../../images/Rectangle 770@2x.png";
import truck from "../../images/sell-truck@2x.jpg";

import { POST } from "../helpers/api";
import Loader from "../helpers/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import SEO from "../SEO";
import { Event } from "../helpers/tracking";

const TradeIn = () => {
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOjg3MDgsInVzZXJUeXBlIjoiYWRtaW4iLCJlbWFpbCI6InllbWlAa29ibzM2MC5jb20iLCJtb2JpbGUiOiJ5ZW1pQGtvYm8zNjAuY29tIiwiZmlyc3ROYW1lIjoiTmV3IiwibGFzdE5hbWUiOiItIiwibW9iaWxlVmVyaWZpZWQiOjAsImVtYWlsVmVyaWZpZWQiOjAsInJvbGUiOiJTdXBlckFkbWluIiwiYWRtaW5JZCI6MzksInVuaXF1ZUhhc2giOiI1ZGI5OGZiODc1MjUwIiwiaXNzIjoiS29ibzM2MCIsImlhdCI6MTU3MjQ0MjA0MCwiZXhwIjoxNTczMDQ2ODQwfQ.H7wdFPkcm40052pQhT8-ZAO721e8N96FcMNjtrA3OaY";

  useEffect(() => {
    // document.title = "Kobo360 | Sell Your Truck";
    window.scrollTo(0, 0);

    // const { data } = axios
    //   .get(`https://stage.api.kobo360.com/asset`, {
    //     headers: { Authorization: `Bearer ${token}` }
    //   })
    //   .then(data => {
    //     // setLoading(false);
    //     setTrucks(data.data.data);
    //   });
    axios.get(`${process.env.REACT_APP_API_URL}asset`).then(data => {
      // setLoading(false);
      setTrucks(data.data.data);
    });
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [trucks, setTrucks] = useState("");

  const [inputValues, setInputValues] = useState({
    truckType: "",
    truckModel: "",
    truckYear: "",
    askingPrice: "",
    noTrucks: "",
    location: "",
    email: "",
    phone: ""
  });

  const register = e => {
    e.preventDefault();
    setSubmitting(true);
    const data = {
      ...inputValues
    };

    POST("selltruck", data).then(res => {
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted. We will get in touch shortly",
        type: "success"
      });
      Event("SellTruck", `Selling Truck on Kobo`, "Success sending truck message");


      setSubmitting(false);
      clearSaleForm();
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const clearSaleForm = () => {
    setInputValues({
      ...inputValues,
      truckType: "",
      truckModel: "",
      truckYear: "",
      askingPrice: "",
      noTrucks: "",
      location: "",
      email: "",
      phone: ""
    });
  };

  return (
    <>
      <SEO title="Kobo360 | Sell Your Truck" />
    <div className="overflow-head">
      <TheHeader
        bgColor="light-blue"
        kobo={logocolored}
        color="black"
        sticky="sticky"
      />
      <div className="trader">
        <div className="trade">
          <div className="trade-heading middle">
            <h1 className="capitalize" data-aos="zoom-in">
              <FormattedMessage
                id="app.truck-trade"
                defaultMessage="TRADE IN YOUR TRUCK"
              />
            </h1>
            <p className="center padding-1" data-aos="zoom-out">
              <FormattedHTMLMessage
                id="app.trade-caption"
                defaultMessage=" Kobo360 has a reliable market place to help you trade in <br />
                your truck for cash."
              />
            </p>
          </div>
        </div>
        <div className="grid trade-box sell-box">
          <form
            className="trade-box__form sell-form"
            data-aos="zoom-in"
            onSubmit={register}
          >
            {/* <div className="row">
              <label htmlFor="model" className="grey">
                <FormattedMessage
                  id="app.truck-type"
                  defaultMessage="Truck type"
                />
              </label>
              <select
                name="truckType"
                className="bhee-select margin-bottom-1"
                required
                onChange={handleChange}
              >
                <option value=""></option>
                {trucks.assetClasses
                  ? trucks.assetClasses.map((asset, index) => (
                      <option
                        key={index}
                        value={`${asset.name} ${asset.size}${asset.unit}`}
                      >
                        {asset.name} {asset.size}
                        {asset.unit}
                      </option>
                    ))
                  : ""}
              </select>
            </div> */}

            <label htmlFor="model" className="grey">
              <FormattedMessage
                id="app.truck-type"
                defaultMessage="Truck type"
              />
              <select
                name="truckType"
                className="select-box black"
                required
                onChange={handleChange}
                value={inputValues.truckType}
              >
                <option value=""></option>
                {trucks.assetClasses
                  ? [
                      ...new Set(
                        trucks.assetClasses.flatMap(asset =>
                          asset.type.toLowerCase()
                        )
                      )
                    ].map((asset, index) => (
                      <option key={index} value={asset}>
                        {asset.toUpperCase()}
                      </option>
                    ))
                  : ""}
              </select>
            </label>
            <label htmlFor="model" className="grey">
              <FormattedMessage id="app.cargo" defaultMessage="Tonnage" />
              <select
                name="tonnage"
                className="select-box black"
                required
                onChange={handleChange}
                value={inputValues.tonnage}
              >
                <option value=""></option>
                {trucks.assetClasses
                  ? [
                      ...new Set(
                        trucks.assetClasses
                          //return asset that the assetType is equal to the truck state...
                          .filter(
                            asset =>
                              asset.type.toLowerCase() === inputValues.truckType
                          )
                          .flatMap(asset => asset.size)
                      )
                    ].map((asset, index) => (
                      <option key={index} value={asset}>
                        {asset}
                      </option>
                    ))
                  : ""}
              </select>
            </label>
            <div className="row">
              <label htmlFor="model" className="grey">
                <FormattedMessage
                  id="app.truck-model"
                  defaultMessage="Truck model"
                />
              </label>
              <input
                type="text"
                placeholder=""
                name="truckModel"
                className="resizedTextbox"
                value={inputValues.truckModel}
                required
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="model" className="grey">
                <FormattedMessage
                  id="app.truck-year"
                  defaultMessage="Truck year"
                />
              </label>
              <input
                type="text"
                placeholder=""
                name="truckYear"
                value={inputValues.truckYear}
                className="resizedTextbox"
                required
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="model" className="grey">
                <FormattedMessage
                  id="app.asking-price"
                  defaultMessage="Asking price"
                />
              </label>
              <input
                type="text"
                placeholder="NGN |"
                name="askingPrice"
                className="resizedTextbox"
                value={inputValues.askingPrice}
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid-input">
              <div className="flex-column">
                <label htmlFor="model" className="grey">
                  {" "}
                  <FormattedMessage
                    id="app.no-trucks"
                    defaultMessage="Number of trucks"
                  />
                </label>

                <input
                  type="text"
                  placeholder=""
                  name="noTrucks"
                  value={inputValues.noTrucks}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex-column">
                <label htmlFor="model" className="grey">
                  {" "}
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
                  className="resizedTextbox"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <label htmlFor="model" className="grey">
                {" "}
                <FormattedMessage id="app.email" defaultMessage="Email" />
              </label>
              <input
                type="text"
                placeholder=""
                name="email"
                value={inputValues.email}
                className="resizedTextbox"
                required
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="model" className="grey">
                {" "}
                <FormattedMessage
                  id="app.phone-number"
                  defaultMessage="Phone number"
                />
              </label>
              <input
                type="text"
                placeholder=""
                name="phone"
                value={inputValues.phone}
                className="resizedTextbox"
                required
                onChange={handleChange}
              />
            </div>
            <div className="contact-button">
              <button className="trade-button capitalize" type="submit">
                {submitting ? (
                  <Loader />
                ) : (
                  <FormattedMessage id="app.submit" defaultMessage="SUBMIT" />
                )}
              </button>
            </div>
          </form>
          <span className="trade-box__card sell-card" data-aos="zoom-in">
            <img loading="lazy" data-aos="zoom-out" src={truck} alt="" />
          </span>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default TradeIn;
