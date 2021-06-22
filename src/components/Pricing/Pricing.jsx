import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Swal from "sweetalert2";
import { httpGetNoToken } from ".././helpers/api";
import TheHeader from "../common/TheHeader";
import logocolored from "../../images/logo-green.png";
import { FormattedMessage } from "react-intl";
import Loader from "../helpers/Loader";
import Autocomplete from "./Autocomplete";
import iosstore from "../../images/app-store-logo@2x.png";
import googlestore from "../../images/en_badge_web_generic@2x.png";
import MapContainer from "./Map";
import SEO from "../SEO";

const Pricing = () => {
  const [submitting, setSubmitting] = useState(false);
  // const setSubmitting = useState('');
  const [loading, setLoading] = useState(false);
  const [truck_types, setTruckTypes] = useState([]);
  const [costPrice, setCostPrice] = useState("");
  const [sourceAddress, destinationAddress] = useState("");
  const [tonnage, center] = useState("");
  const [source, setSource] = useState({});
  const [destination, setDestination] = useState({});

  const getTruckTypes = async () => {
    try {
      let res = await httpGetNoToken("get_truck_types");
      setTruckTypes(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTruckTypes();
  }, []);

  const [inputValues, setInputValues] = useState({
    truckType: "",
    tonnage: "",
  });

  const toPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/"
    );
  };

  const toAppleStore = () => {
    window.open("https://apps.apple.com/gh/apps/");
  };

  const setRef = (input) => {
    let pickupAddress = input;
    if (!window.google) {
      return false;
    }
    let autocomplete = new window.google.maps.places.Autocomplete(
      pickupAddress
    );
    autocomplete.setComponentRestrictions({
      country: ["ng"],
    });
    // Fire Event when a name is selected
    autocomplete.addListener("place_changed", () => {
      let addressObject = autocomplete.getPlace();
      if (addressObject !== undefined) {
        let sourceLat = addressObject.geometry
          ? addressObject.geometry.location.lat()
          : null;
        let sourceLng = addressObject.geometry
          ? addressObject.geometry.location.lng()
          : null;
        setSource({
          source: { lat: sourceLat, lng: sourceLng },
          center: { lat: sourceLat, lng: sourceLng },
          sourceAddress: addressObject && addressObject.formatted_address,
        });
      }
    });
  };

  const _setRef = (input) => {
    let destinationAddress = input;
    //needed to get the place().
    if (!window.google) {
      return false;
    }
    let autocomplete_ = new window.google.maps.places.Autocomplete(
      destinationAddress
    );
    autocomplete_.setComponentRestrictions({
      country: ["ng"],
    });
    autocomplete_.addListener("place_changed", () => {
      let addressObject = autocomplete_.getPlace();
      if (addressObject !== undefined) {
        let destLat = addressObject.geometry.location.lat();
        let destLng = addressObject.geometry.location.lng();
        setDestination({
          destination: { lat: destLat, lng: destLng },
          center: { lat: destLat, lng: destLng },
          destinationAddress: addressObject && addressObject.formatted_address,
        });
      }
    });
  };

  const handlePlaceSelect = (e) => {
    //console.log('e>>',autocomplete.getPlace());
    // let addressObject = autocomplete.getPlace();
    // if (addressObject !== undefined) {
    //   let sourceLat = addressObject.geometry
    //     ? addressObject.geometry.location.lat()
    //     : null;
    //   let sourceLng = addressObject.geometry
    //     ? addressObject.geometry.location.lng()
    //     : null;
    //   state((prevState) => ({
    //     ...prevState,
    //     source: { lat: sourceLat, lng: sourceLng },
    //     center: { lat: sourceLat, lng: sourceLng },
    //     sourceAddress: addressObject && addressObject.formatted_address,
    //   }));
    // }
  };

  // Extract City From Address Object
  const _handlePlaceSelect = (e) => {
    // let addressObject = autocomplete_.getPlace();
    // if (addressObject !== undefined) {
    //   let destLat = addressObject.geometry.location.lat();
    //   let destLng = addressObject.geometry.location.lng();
    //   source((prevState) => ({
    //     ...prevState,
    //     destination: { lat: destLat, lng: destLng },
    //     center: { lat: destLat, lng: destLng },
    //     destinationAddress: addressObject && addressObject.formatted_address,
    //   }));
    // }
  };

  const formatPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // const resetEstimator = (e) => {
  //   e.preventDefault();
  //   window.location.reload();
  // };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setSubmitting(true);
      if (!source || !destination || !inputValues.tonnage) {
        return Swal.fire({
          title: "Sorry 😞",
          text: "Please fill all fields before submitting",
          type: "error",
        });
      }

      if (!source.source || !destination.destination) {
        return Swal.fire({
          title: "Sorry 😞",
          text:
            "The address you provided isn't available. Please choose from the selected address",
          type: "error",
        });
      }

      let directionsService = new window.google.maps.DirectionsService();
      let directionsRenderer = new window.google.maps.DirectionsRenderer();
      // directionsRenderer.setMap(map); // Existing map object displays directions
      // Create route from existing points used for markers
      let source_lat = source.source.lat;
      let source_lng = source.source.lng;
      let destination_lat = destination.destination.lat;
      let destination_lng = destination.destination.lng;
      let selected_tonnage = truck_types.filter(
        (item) => item.id === inputValues.tonnage
      )[0];
      const route = {
        origin: { lat: source_lat, lng: source_lng },
        destination: { lat: destination_lat, lng: destination_lng },
        travelMode: "DRIVING",
      };
      directionsService.route(route, function (response, status) {
        // anonymous function to capture directions
        setLoading(false);
        setSubmitting(!submitting);
        if (status !== "OK") {
          window.alert("Directions request failed due to " + status);
          return;
        } else {
          directionsRenderer.setDirections(response); // Add route to the map
          var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
          if (!directionsData) {
            window.alert("Directions request failed. Please try again");
            return;
          } else {
            let distance = directionsData.distance.text
              .replace("km", "")
              .replace("m", "");
            setCostPrice(selected_tonnage.price_per_km * distance);
          }
        }
      });
    } catch (error) {
      setLoading(false);
      setSubmitting(false);
      const msg =
        typeof error !== "object"
          ? error.response.data.message
          : "The address you provided isn't available. Please choose from the selected address";

      Swal.fire({
        title: "Sorry 😞",
        text: msg,
        type: "error",
      });
      setSubmitting(false);
      clearSearchForm();
    }
  };

  const clearSearchForm = () => {
    setInputValues({
      ...inputValues,
      truckType: "",
      tonnage: "",
    });
  };

  const handleChange = (e) => {
    console.log("ee>>", e);
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <SEO title="UZI Logistics_&_Trucking | Pricing" />
      <div>
        <TheHeader
          bgColor="light-blue"
          kobo={logocolored}
          color="black"
          sticky="sticky"
        />
        <div className="pricing">
          <div className="estimator-heading middle">
            <h1 className="estimator" data-aos="zoom-out">
              <FormattedMessage
                id="app.estimator-title"
                defaultMessage="Price Estimator"
              />
            </h1>
          </div>
          <p className="center" data-aos="zoom-in">
            <FormattedMessage
              id="app.estimator-text"
              defaultMessage="How much does UZI Logistics cost in your city? Calculate a fare estimate for
                your next trip."
            />
            <br />
            <FormattedMessage
              id="app.estimator-text"
              defaultMessage="Simply enter a pickup location and destination to get started."
            />
          </p>

          <Autocomplete
            setRef={setRef}
            _setRef={_setRef}
            handlePlaceSelect={handlePlaceSelect}
            _handlePlaceSelect={_handlePlaceSelect}
            // state={state}
            // setChange={this.onChange}
            onSubmit={onSubmit}
            handleChange={handleChange}
            onChange={handleChange}
            input_values={inputValues}
            //loading={false}
          >
            <MapContainer
              source={source}
              dest={destination}
              center={center}
              sourceAddress={sourceAddress}
              // // onChange={this.onChange}
              onChange={handleChange}
              tonnage={tonnage}
              destAddress={destinationAddress}
            />
          </Autocomplete>
        </div>
        <div className="price grid trade-box">
          {costPrice ? (
            <div className="price-estimator">
              <p className="white">
                {" "}
                <FormattedMessage
                  id="app.estimator-range"
                  defaultMessage="The cost of the service is :"
                />
              </p>
              <p className="bold white font-5">
                {" "}
                {loading ? (
                  <Loader />
                ) : costPrice ? (
                  `NGN
                ${formatPrice(Math.round(costPrice))}`
                ) : (
                  ""
                )}
              </p>
              {/* <div
                className="flex-align-center white "
                onClick={resetEstimator}
              >
                <img
                  src={sync}
                  alt="sync"
                  className="pd-1 pointer rotate-90 "
                  loading="lazy"
                />
                <p className="pointer white padding-1-top">
                  <FormattedMessage id="app.reset" defaultMessage="Reset" />
                </p>
              </div> */}
              <div className="download-app download">
                <p className="capitalize white margin-bottom-1 right margin-top-2">
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
                    className="pointer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
