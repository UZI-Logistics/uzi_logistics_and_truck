import React, { useEffect, useCallback, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
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
  children
}) => {
  const pickupRef = useRef(null);
  const destinationRef = useRef(null);
  const [trucks, setTrucks] = useState({});
  const [sizes, setSizes] = useState([]);

  // const getRef = useCallback(() => {
  //   setRef(pickupRef.current);
  // }, [setRef]);

  const _getRef = useCallback(() => {
    _setRef(destinationRef.current);
  }, [_setRef]);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}asset/grouped`).then((data) => {
  //     setTrucks(data.data.data);

  //   });
  //   getRef();
  //   _getRef();
  // }, [getRef, _getRef]);

  useEffect(() => {
    if(state.truckType) {
      const sizes = trucks.assetClasses.find(asset => asset.name.toLowerCase() === state.truckType.toLowerCase()).size
      setSizes(sizes);
      
    }
  }, [state.truckType, trucks.assetClasses])

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
              value={state.truckType}
            >
              <option value=""></option>
              {trucks.assetClasses
                ? trucks.assetClasses.map(({name}, index) => (
                  <option key={index} value={name}>
                    {name.toUpperCase()}
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
              onChange={setChange}
              value={state.tonnage}
            >
              <option value=""></option>
              {sizes.length > 0 ? sizes.map(({size}, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))
                : ""}
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
