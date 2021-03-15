import React, { useEffect, useCallback, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { httpGetNoToken } from "../helpers/api";
import Loader from "../helpers/Loader";

const Autocomplete = ({
  setRef,
  _setRef,
  state,
  setChange,
  onSubmit,
  loading,
  handlePlaceSelect,
  _handlePlaceSelect,
  children,
}) => {
  const pickupRef = useRef(null);
  const destinationRef = useRef(null);
  const [trucks, setTrucks] = useState({});
  const [sizes, setSizes] = useState([]);
  const [truck_types, setTruckTypes] = useState([]);
  const [tonnage, setTonnage] = useState([]);
  const [tonnageRange, setTonnageRange] = useState([]);

  const getRef = useCallback(() => {
    setRef(pickupRef.current);
  }, [setRef]);

  const _getRef = useCallback(() => {
    _setRef(destinationRef.current);
  }, [_setRef]);

  // const clearForm = () => {
  //   setInputValues({
  //     ...inputValues,
  //     truckType: "",
  //     tonnage: ""
  //   });
  // };

  const getTruckTypes = async () => {
    try {
      let res = await httpGetNoToken("get_truck_types");
      console.log("res>", res);
      setTruckTypes(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getTonnes = async (e) => {
    let filtered = truck_types.filter(
      (item) => item.type.toLowerCase() === e.target.value.toLowerCase()
    );
    setTonnage(filtered);
    // setInputValues({ ...inputValues, truckType: e.target.value });
  };

  useEffect(() => {
    getTruckTypes();
    getTonnes();
    // axios.get(`${process.env.REACT_APP_API_URL}assets/grouped`).then((data) => {
    let res = httpGetNoToken("get_truck_types").then((data) => {
      setTrucks(data.data.data);
    });
    // getRef();
    // _getRef();
    console.log(res);
  }, [getRef, _getRef]);

  // useEffect(() => {
  //   if (state.truckType) {
  //     const sizes = trucks.assetClasses.find(
  //       (asset) => asset.name.toLowerCase() === state.truckType.toLowerCase()
  //     ).size;
  //     setSizes(sizes);
  //   }
  // }, [state.truckType, trucks.assetClasses]);

  return (
    <div className="grid trade-box price-box">
      <form className="trade-box__form price-form" onSubmit={onSubmit}>
        {/* <label htmlFor="type" className="grey">
          <FormattedMessage id="app.country" defaultMessage="Country" />
          <input
            ref={pickupRef}
            type="text"
            placeholder=""
            name="sourceAddress"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onChange={handlePlaceSelect}
            className="resizedTextbox"
            required
          />
        </label> */}
        <label htmlFor="type" className="grey">
          <FormattedMessage id="app.pickup" defaultMessage="Pickup address" />
          <input
            ref={pickupRef}
            type="text"
            placeholder=""
            name="sourceAddress"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onChange={handlePlaceSelect}
            className="resizedTextbox"
            required
          />
        </label>

        <label htmlFor="model" className="grey">
          <FormattedMessage
            id="app.destination"
            defaultMessage="Destination address"
          />
          <input
            ref={destinationRef}
            type="text"
            placeholder=""
            name="destinationAdress"
            onChange={_handlePlaceSelect}
            className="resizedTextbox"
            required
          />
        </label>

        <div className="grid-input">
          <label htmlFor="model" className="grey">
            <FormattedMessage id="app.truck-type" defaultMessage="Truck type" />
            <select
              name="truckType"
              className="select-box black"
              required
              onChange={setChange}
              // value={state.truckType}
              value={truck_types}
            >
              <option value=""></option>
              {truck_types.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.type}
                </option>
              ))}
              {/* {trucks.assetClasses
                ? trucks.assetClasses.map(({ name }, index) => (
                    <option key={index} value={name}>
                      {name.toUpperCase()}
                    </option>
                  ))
                : ""} */}
            </select>
          </label>

          <label htmlFor="model" className="grey">
            <FormattedMessage id="app.cargo" defaultMessage="Tonnage" />
            <select
              name="tonnage"
              className="select-box black"
              required
              onChange={setChange}
              // value={state.tonnage}
              value={tonnage}
            >
              <option value=""></option>
              {truck_types.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.cargo_tonnes}
                </option>
              ))}
              {/* {tonnage.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))} */}
              {/* {sizes.length > 0
                ? sizes.map(({ size }, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))
                : ""} */}
            </select>
          </label>
        </div>

        <div className="button-pricing margin-1">
          <button className="pricing-button capitalize">
            {loading ? (
              <Loader />
            ) : (
              <FormattedMessage id="app.submit" defaultMessage="Submit" />
            )}
          </button>
        </div>
      </form>
      {children}
    </div>
  );
};

export default Autocomplete;
