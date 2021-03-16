import React, { useState, useEffect, useRef } from "react";
import Footer from "../common/Footer";
import sync from "../../images/synchronize-arrows-1.svg";
import Swal from "sweetalert2";
import { POST, httpGetNoToken } from ".././helpers/api";
import TheHeader from "../common/TheHeader";
import logocolored from "../../images/logo.png";
import { FormattedMessage } from "react-intl";
import Loader from "../helpers/Loader";
import Autocomplete from "./Autocomplete";
import iosstore from "../../images/app-store-logo@2x.png";
import googlestore from "../../images/en_badge_web_generic@2x.png";
import MapContainer from "./Map";
import SEO from "../SEO";
import { Event } from "../helpers/tracking";
// import { Helmet } from "react-helmet";
//PRICING PAGE

//TODO: Remove pricing from being restricted to only NG.
class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceAddress: "",
      destinationAddress: "",
      destinationState: "",
      pickupState: "",
      source: {},
      destination: {},
      center: {},
      info: "",
      isOpen: false,
      estimate: {},
      loading: false,
      costPrice: "",
      // maxPrice: "",
      tonnage: "",
      truckType: "",
      country: "Nigeria",
    };

    this.pickupAddress = React.createRef();
    this.destinationAddress = React.createRef();
    this.autocomplete = null;
    this.autocomplete_ = null;
  }

  componentDidMount() {
    // document.title = "Kobo360 | Pricing";
    window.scrollTo(0, 0);
  }
  setRef = (input) => {
    this.pickupAddress = input;
    this.autocomplete = new window.google.maps.places.Autocomplete(
      this.pickupAddress
    );
    this.autocomplete.setComponentRestrictions({
      country: ["ng"],
    });
    // Fire Event when a name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  _setRef = (input) => {
    this.destinationAddress = input;

    //needed to get the place().
    this.autocomplete_ = new window.google.maps.places.Autocomplete(
      this.destinationAddress
    );
    this.autocomplete_.setComponentRestrictions({
      country: ["ng"],
    });
    this.autocomplete_.addListener("place_changed", this._handlePlaceSelect);
  };

  handlePlaceSelect = (e) => {
    let addressObject = this.autocomplete.getPlace();
    if (addressObject !== undefined) {
      let sourceLat = addressObject.geometry
        ? addressObject.geometry.location.lat()
        : null;
      let sourceLng = addressObject.geometry
        ? addressObject.geometry.location.lng()
        : null;
      this.setState((prevState) => ({
        ...prevState,
        source: { lat: sourceLat, lng: sourceLng },
        center: { lat: sourceLat, lng: sourceLng },
        sourceAddress: addressObject && addressObject.formatted_address,
      }));
    }
  };

  // Extract City From Address Object
  // _handlePlaceSelect = (e) => {
  //   let addressObject = this.autocomplete_.getPlace();

  //   if (addressObject !== undefined) {
  //     let destLat = addressObject.geometry.location.lat();
  //     let destLng = addressObject.geometry.location.lng();
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       destination: { lat: destLat, lng: destLng },
  //       center: { lat: destLat, lng: destLng },
  //       destinationAddress: addressObject && addressObject.formatted_address,
  //     }));
  //   }
  // };

  //format numbers
  formatPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  resetEstimator = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=io.kobodriver.kobodriver"
    );
  };

  toAppleStore = () => {
    window.open("https://apps.apple.com/gh/app/kobo-customer/id1476414044");
  };

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      this.setState({ loading: true });
      const {
        sourceAddress,
        destinationAddress,
        tonnage,
        truckType,
        country,
      } = this.state;
      const data = {
        cargo_tonnes: tonnage,
        country,
        type: truckType,
      };

      let res = await httpGetNoToken("get_truck_types");

      this.setState({ estimate: res.data.data, loading: false });
      this.setState({ costPrice: res.data });
      console.log(res)
      Event(
        "Pricing",
        `Getting Price for ${sourceAddress} to ${destinationAddress} for tonnage ${tonnage}`,
        "Success getting price"
      );
    } catch (error) {
      this.setState({ loading: false });
      const msg =
        typeof error !== "object"
          ? error.response.data.message
          : "The address you provided isn't available. Please choose from the selected address";

            Swal.fire({
              title: "Sorry 😞",
              text: msg,
              type: "error",
            });
    }
  };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ loading: true });
  //   const { sourceAddress, destinationAddress, tonnage, country } = this.state;
  //   const data = {
  //     source: sourceAddress,
  //     destination: destinationAddress,
  //     tonnage: tonnage,
  //     country,
  //   };

  //   POST("estimator/breakdown", data)
  //     .then((res) => {
  //       this.setState({ estimate: res.data.data, loading: false });
  //       // this.setState({ minPrice: res.data.data.min });
  //       this.setState({ maxPrice: res.data.data.max });
  //   Event(
  //     "Pricing",
  //     `Getting Price for ${sourceAddress} to ${destinationAddress} for tonnage ${tonnage}`,
  //     "Success getting price"
  //   );
  // })
  //     .catch((error) => {
  //       this.setState({ loading: false });
  //       const msg =
  //         typeof error !== "object"
  //           ? error.response.data.message
  //           : "The address you entered is not available. Please, choose from the suggested address";

  //       Swal.fire({
  //         title: "Sorry 😞",
  //         text: msg,
  //         type: "error",
  //       });
  //       Event(
  //         "Pricing",
  //         `Getting Price for ${sourceAddress} to ${destinationAddress} for tonnage ${tonnage}`,
  //         "Error getting price"
  //       );
  //     });
  // };

  render() {
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
              setRef={this.setRef}
              _setRef={this._setRef}
              handlePlaceSelect={this.handlePlaceSelect}
              _handlePlaceSelect={this._handlePlaceSelect}
              state={this.state}
              onSubmit={this.onSubmit}
              setChange={this.onChange}
              loading={this.state.loading}
            >
              <MapContainer
                source={this.state.source}
                dest={this.state.destination}
                center={this.state.center}
                sourceAddress={this.state.sourceAddress}
                onChange={this.onChange}
                tonnage={this.state.tonnage}
                destAddress={this.state.destinationAddress}
              />
            </Autocomplete>
          </div>
          <div className="price grid trade-box">
            {this.state.costprice ? (
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
                  {this.state.loading ? (
                    <Loader />
                  ) : this.state.costPrice ? (
                    `NGN
                ${this.formatPrice(
                  Math.round(this.state.costPrice)
                )} - ${this.formatPrice(Math.round(this.state.maxPrice))}`
                  ) : (
                    ""
                  )}
                </p>
                <div
                  className="flex-align-center white "
                  onClick={this.resetEstimator}
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
                </div>
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
                      onClick={this.toAppleStore}
                      className="pointer download-img"
                      loading="lazy"
                    />
                    <img
                      src={googlestore}
                      alt="google-store"
                      onClick={this.toPlayStore}
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
  }
}
export default Pricing;

// const Pricing = ({
//   // setRef,
//   // _setRef,
//   // state,
//   // setChange,
//   // onSubmit,
//   // loading,
//   handlePlaceSelect,
//   _handlePlaceSelect,
//   children,
// }) => {
//   const [sourceAddress, destinationAddress] = useState("");
//   const [destinationState, pickupState, pickupAddress, state] = useState("");
//   const [source, destination, center, estimate] = useState({});
//   const [isOpen, loading] = useState(false);
//   const [info, costPrice] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [truck_types, setTruckTypes, tonnage] = useState([]);
//   const [country] = useState([]);
//   const [autocomplete, autocomplete_] = useState("");

//   useEffect(() => {
//     setRef();
//   });

//   const _setRef = (input) => {
//     destinationAddress = input;

//     //needed to get the place().
//     autocomplete_ = new window.google.maps.places.Autocomplete(
//       destinationAddress
//     );
//     autocomplete_.setComponentRestrictions({
//       country: ["ng"],
//     });
//     autocomplete_.addListener("place_changed", _handlePlaceSelect);
//   };

//   pickupAddress = React.createRef();
//   destinationAddress = React.createRef();
//   autocomplete = null;
//   autocomplete_ = null;

//   // const handlePlaceSelect = (e) => {
//   //   let addressObject = autocomplete.getPlace();
//   //   if (addressObject !== undefined) {
//   //     let sourceLat = addressObject.geometry
//   //       ? addressObject.geometry.location.lat()
//   //       : null;
//   //     let sourceLng = addressObject.geometry
//   //       ? addressObject.geometry.location.lng()
//   //       : null;
//   //     (prevState) => ({
//   //       ...prevState,
//   //       source: { lat: sourceLat, lng: sourceLng },
//   //       center: { lat: sourceLat, lng: sourceLng },
//   //       sourceAddress: addressObject && addressObject.formatted_address,
//   //     });
//   //   }
//   // };

//   const setRef = (input) => {
//     pickupAddress = input;
//     autocomplete = new window.google.maps.places.Autocomplete(pickupAddress);
//     autocomplete.setComponentRestrictions({
//       country: ["ng"],
//     });
//     // Fire Event when a name is selected
//     autocomplete.addListener("place_changed", this.handlePlaceSelect);
//   };

//   const [inputValues, setInputValues] = useState({
//     tonnage: "",
//     truckType: "",
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };

//   const toPlayStore = () => {
//     window.open(
//       "https://play.google.com/store/apps/details?id=io.kobodriver.kobodriver"
//     );
//   };

//   const toAppleStore = () => {
//     window.open("https://apps.apple.com/gh/app/kobo-customer/id1476414044");
//   };

//   const clearForm = () => {
//     setInputValues({
//       ...inputValues,
//       truckType: "",
//       tonnage: "",
//     });
//   };

//   const resetEstimator = (e) => {
//     e.preventDefault();
//     window.location.reload();
//   };

//   const onSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       setSubmitting(true);
//       const data = {
//         ...inputValues,
//       };
//     } catch (error) {
//       clearForm();
//       setSubmitting(false);
//       Swal.fire({
//         title: "Sorry 😞",
//         // text: msg,
//         type: "error",
//       });
//       Event(
//         "Pricing",
//         `Getting Price for ${sourceAddress} to ${destinationAddress} for tonnage ${tonnage}`,
//         "Error getting price"
//       );
//     }
//   };

//   return (
//     <>
//       <SEO title="UZI Logistics_&_Trucking | Pricing" />
//       <div>
//         <TheHeader
//           bgColor="light-blue"
//           kobo={logocolored}
//           color="black"
//           sticky="sticky"
//         />
//         <div className="pricing">
//           <div className="estimator-heading middle">
//             <h1 className="estimator" data-aos="zoom-out">
//               <FormattedMessage
//                 id="app.estimator-title"
//                 defaultMessage="Price Estimator"
//               />
//             </h1>
//           </div>
//           <p className="center" data-aos="zoom-in">
//             <FormattedMessage
//               id="app.estimator-text"
//               defaultMessage="How much does UZI Logistics cost in your city? Calculate a fare estimate for
//                 your next trip."
//             />
//             <br />
//             <FormattedMessage
//               id="app.estimator-text"
//               defaultMessage="Simply enter a pickup location and destination to get started."
//             />
//           </p>

//           <Autocomplete
//             setRef={setRef}
//             _setRef={_setRef}
//             handlePlaceSelect={handlePlaceSelect}
//             _handlePlaceSelect={_handlePlaceSelect}
//             // state={state}
//             onSubmit={onSubmit}
//             setChange={onChange}
//             loading={loading}
//           >
//             <MapContainer
//               source={source}
//               dest={destination}
//               center={center}
//               sourceAddress={sourceAddress}
//               onChange={onChange}
//               tonnage={tonnage}
//               destAddress={destinationAddress}
//             />
//           </Autocomplete>
//         </div>
//         <div className="price grid trade-box">
//           {costPrice ? (
//             <div className="price-estimator">
//               <p className="white">
//                 {" "}
//                 <FormattedMessage
//                   id="app.estimator-range"
//                   defaultMessage="Estimated price range"
//                 />
//               </p>
//               <p className="bold white font-5">
//                 {" "}
//                 {loading ? (
//                   <Loader />
//                 ) : costPrice ? (
//                   `NGN
//                 ${this.formatPrice(Math.round(costPrice))} - ${this.formatPrice(
//                     Math.round(costPrice)
//                   )}`
//                 ) : (
//                   ""
//                 )}
//               </p>
//               <div
//                 className="flex-align-center white "
//                 onClick={resetEstimator}
//               >
//                 <img
//                   src={sync}
//                   alt="sync"
//                   className="pd-1 pointer rotate-90 "
//                   loading="lazy"
//                 />
//                 <p className="pointer white padding-1-top">
//                   <FormattedMessage id="app.reset" defaultMessage="Reset" />
//                 </p>
//               </div>
//               <div className="download-app download">
//                 <p className="capitalize white margin-bottom-1 right margin-top-2">
//                   <FormattedMessage
//                     id="app.download"
//                     defaultMessage="download our apps"
//                   />
//                 </p>
//                 <div className="app-store">
//                   <img
//                     src={iosstore}
//                     alt="app-store"
//                     onClick={toAppleStore}
//                     className="pointer download-img"
//                     loading="lazy"
//                   />
//                   <img
//                     src={googlestore}
//                     alt="google-store"
//                     onClick={toPlayStore}
//                     className="pointer"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div></div>
//           )}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };
