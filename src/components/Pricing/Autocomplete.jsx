import React, { useEffect, useCallback, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
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
  handleChange,
  children,
  input_values,
}) => {
  const pickupRef = useRef(null);
  const destinationRef = useRef(null);
  // const [setTrucks] = useState({});
  const [truck_types, setTruckTypes] = useState([]);
  const [tonnageRange, setTonnageRange] = useState([]);

  const [inputValues, setInputValues] = useState({
    truckType: "",
    tonnage: "",
  });

  const getRef = useCallback(() => {
    setRef(pickupRef.current);
  }, [setRef]);

  const _getRef = useCallback(() => {
    _setRef(destinationRef.current);
  }, [_setRef]);

  const getTruckTypes = async () => {
    try {
      let res = await httpGetNoToken("get_truck_types");
      console.log("res>", res);
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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValues({ ...inputValues, [name]: value });
  // };

  useEffect(() => {
    getTruckTypes();
    let res = httpGetNoToken("get_truck_types").then((data) => {
      // setTrucks(data.data.data);
    });
    getRef();
    _getRef();
    console.log(res);
  }, [getRef, _getRef]);

  // useEffect(() => {
  //   if (state.truck_types) {
  //     const sizes = trucks.cargo_tonnes.find(
  //       (truck_types) =>
  //         truck_types.name.toLowerCase() === state.truck_types.toLowerCase()
  //     ).size;
  //     setSizes(sizes);
  //   }
  // }, [state.truck_types, trucks.assetClasses]);

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
              // onChange={handleChange}
              onChange={(value) => newTonnageRange(value)}
              value={inputValues.truckType}
              // value={state.truck_types}
            >
              <option value=""></option>
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
              value={input_values.tonnage}
              onChange={handleChange}
              // onChange={setChange}
              // value={state.tonnage}
            >
              <option value=""></option>
              {tonnageRange.map((item, index) => (
                <option value={item.id} key={index}>
                  {/* console.log(item) */}
                  {/* {item.cargo_tonnes} */}
                  {item.cargo_tonnes}
                </option>
              ))}
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
