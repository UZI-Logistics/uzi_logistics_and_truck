import React, { useEffect, useState } from "react";
import logocolored from "../../images/logo-green.png";
import TheHeader from "../common/TheHeader";
import { FormattedMessage } from "react-intl";
import Footer from "../common/Footer";
import truck from "../../images/sell-truck@2x.jpg";

import { httpPostNoToken, httpGetNoToken } from "../helpers/api";
import Loader from "../helpers/Loader";
import Swal from "sweetalert2";
import SEO from "../SEO";
import { Event } from "../helpers/tracking";

const TradeIn = () => {
  const [submitting, setSubmitting] = useState(false);
  const [truck_types, setTruckTypes] = useState([]);
  // const [loading, setLoaded] = useState(false);
  const [tonnageRange, setTonnageRange] = useState([
    2, 3, 5, 8, 10, 15, 16, 20, 28, 30, 35, 40, 45, 50, 60, 1000, 33000, 45000,
  ]);

  const getTruckTypes = async () => {
    try {
      let res = await httpGetNoToken("get_truck_types");
      setTruckTypes(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const newTonnageRange = (e) => {
    let filtered = truck_types.filter(
      (item) => item.type.toLowerCase() === e.target.value.toLowerCase()
    );
    setTonnageRange(filtered);
    setInputValues({ ...inputValues, truckType: e.target.value });
  };

  // const setTrucTypeUUID = (e) => {
  //   let uUID = truck_types.map((item, index) => (
  //    (item) => item.id === e.target.value
  //   )
  //     key=()
  // )}

  useEffect(() => {
    getTruckTypes();
    // filteredTonnage();
    // // window.scrollTo(0, 0);
    // axios.get(`${process.env.REACT_APP_API_URL}/api/aution_truck`).then((data) => {
    //   setTrucks(data.data.data);
    //   // console.log(data);
    // })
  }, []);

  const [inputValues, setInputValues] = useState({
    truckType: "",
    truckModel: "",
    truckYear: "",
    askingPrice: "",
    tonnage: "",
    noTrucks: "",
    location: "",
    email: "",
    phone: "",
  });

  const register = async (e) => {
    try {
      e.preventDefault(e);
      setSubmitting(true);
      const data = {
        ...inputValues,
        truck_type_id: inputValues.tonnage,
        //  cargo_tonnage: inputValues.tonnage,
        truck_model: inputValues.truckModel,
        truck_price: inputValues.askingPrice,
        no_of_trucks: inputValues.noTrucks,
        location: inputValues.location,
        email: inputValues.email,
        phone_number: inputValues.phone,
        truck_year: inputValues.truckYear,
      };
      // console.log(data);
      const response = await httpPostNoToken("auction_truck", data);
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted. We will get in touch shortly",
        // type: "success",
      });
      Event(
        "SellTruck",
        `Selling Truck on Kobo`,
        "Success sending truck message"
      );
      console.log(response);
      setSubmitting(false);
      clearSaleForm();
    } catch (error) {
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
        // type: "error",
      });
      clearSaleForm();
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
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
      tonnage: "",
      noTrucks: "",
      location: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <SEO title="UZI-logistics-&-truck | Sell Your Truck" />
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
                <FormattedMessage
                  id="app.trade-caption"
                  defaultMessage=" UZI-logistics-&-truck has a reliable market place to help you trade in
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
              <label htmlFor="model" className="grey">
                <FormattedMessage
                  id="app.truck-type"
                  defaultMessage="Truck type"
                />
                <select
                  name="truckType"
                  className="select-box black"
                  onChange={(value) => newTonnageRange(value)}
                  value={inputValues.truckType}
                >
                  <option value="" disabled>Please wait...</option>
                  {[...new Set(truck_types.map((item) => item.type))].map(
                    (item, index) => (
                      <option value={item} key={index}>
                        {/* console.log(item) */}
                        {item}
                      </option>
                    )
                  )}
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
                  {tonnageRange.map((item, index) => (
                    <option value={item.id} key={index}>
                      {/* console.log(item) */}
                      {/* {item.cargo_tonnes} */}
                      {item.cargo_tonnes}
                    </option>
                  ))}
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
