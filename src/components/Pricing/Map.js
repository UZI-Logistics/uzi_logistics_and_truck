// import React, { Component } from "react";
// import {
//   Map,
//   GoogleApiWrapper,
//   InfoWindow,
//   Polyline,
//   Marker,
// } from "google-maps-react";
// import Loader from "../helpers/Loader";

// const mapStyles = {
//   width: "50%",
//   height: "80%",
//   boxShadow: "0px 1px 40px #00000029",
// };

// let locator = navigator.geolocation;

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//     route: [],
//     lat: 0,
//     lng: 0,
//     loading: false,
//   };
//   componentDidMount() {
//     this.locationReq();
//   }
//   componentWillUnmount() {
//     locator.clearWatch(this.locationReq());
//   }

//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });
//   };

//   onMapClicked = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   locationReq = () => {
//     this.setState({ loading: true });
//     if ("geolocation" in navigator) {
//       locator.getCurrentPosition((position) => {
//         this.setState({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//           loading: false,
//         });
//       });
//     } else {
//       alert("Geolocation not available");
//     }
//   };
//   calculateDistance = (origin, destination) => {
//     const { google } = this.props;
//     const DirectionsService = new google.maps.DirectionsService();
//     DirectionsService.route(
//       {
//         origin,
//         destination,
//         travelMode: google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             route: result.routes[0].overview_path.map((p) => {
//               return { lat: p.lat(), lng: p.lng() };
//             }),
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       }
//     );
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.destAddress !== this.props.destAddress) {
//       this.calculateDistance(prevProps.sourceAddress, this.props.destAddress);
//     }
//   }
//   render() {
//     const { source, dest } = this.props;
//     // var bounds = new this.props.google.maps.LatLngBounds();
//     for (let i = 0; i < this.state.route.length; i++) {
//       // bounds.extend(this.state.route[i]);
//     }

//     return (
//       <div className="map-div" data-aos="zoom-out">
//         {this.state.loading ? (
//           <Loader color="green" />
//         ) : (
//           <Map
//             google={this.props.google}
//             zoom={12}
//             style={mapStyles}
//             center={this.props.center}
//             initialCenter={{
//               lat: this.state.lat,
//               lng: this.state.lng,
//             }}
//             onReady={() => this.calculateDistance()}
//             // bounds={bounds}
//           >
//             <Marker
//               onClick={this.onMarkerClick}
//               position={{
//                 lat: source.lat,
//                 lng: source.lng,
//               }}
//               name={this.props.sourceAddress}
//             />

//             <Marker
//               onClick={this.onMarkerClick}
//               position={{
//                 lat: dest.lat,
//                 lng: dest.lng,
//               }}
//               name={this.props.destAddress}
//             />

//             <Polyline
//               path={this.state.route}
//               fillColor="#000000"
//               fillOpacity={0.5}
//               strokeColor="#000000"
//               strokeOpacity={1}
//               strokeWeight={2}
//             />
//             <InfoWindow
//               marker={this.state.activeMarker}
//               visible={this.state.showingInfoWindow}
//             >
//               <div>
//                 <p>{this.state.selectedPlace.name}</p>
//               </div>
//             </InfoWindow>
//           </Map>
//         )}
//       </div>
//     );
//   }
// }
// export default GoogleApiWrapper({
//   // apiKey: process.env.REACT_APP_GOOGLE_MAP,
//   apiKey: "AIzaSyBDv8lkv6j4FA-Xpb6ie4BZtC-2TWRyo5g",
// })(MapContainer);


// Moshod Sent
import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Polyline,
  Marker,
} from "google-maps-react";
import Loader from "../helpers/Loader";

const mapStyles = {
  width: "50%",
  height: "80%",
  boxShadow: "0px 1px 40px #00000029",
};

let locator = window.navigator.geolocation;
console.log("locate>>", locator);

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    route: [],
    lat: 0,
    lng: 0,
    loading: false,
  };
  componentDidMount() {
    this.locationReq();
  }
  componentWillUnmount() {
    locator.clearWatch(this.locationReq());
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  locationReq = () => {
    this.setState({ loading: true });
    console.log("locating<<<", navigator);
    if ("geolocation" in navigator) {
      console.log("locating>>>", navigator.geolocation.getCurrentPosition);
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("pos>>>", position);
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          loading: false,
        });
      });
    } else {
      alert("Geolocation not available");
    }
  };
  calculateDistance = (origin, destination) => {
    const { google } = this.props;
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            route: result.routes[0].overview_path.map((p) => {
              return { lat: p.lat(), lng: p.lng() };
            }),
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.destAddress !== this.props.destAddress) {
      this.calculateDistance(prevProps.sourceAddress, this.props.destAddress);
    }
  }
  render() {
    const { source, dest } = this.props;
    // var bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < this.state.route.length; i++) {
      // bounds.extend(this.state.route[i]);
    }

    return (
      <div className="map-div" data-aos="zoom-out">
        {this.state.loading ? (
          <Loader color="green" />
        ) : (
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            center={this.props.center}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng,
            }}
            onReady={() => this.calculateDistance()}
            // bounds={bounds}
          >
            <Marker
              onClick={this.onMarkerClick}
              position={{
                lat: source.lat,
                lng: source.lng,
              }}
              name={this.props.sourceAddress}
            />

            <Marker
              onClick={this.onMarkerClick}
              position={{
                lat: dest.lat,
                lng: dest.lng,
              }}
              name={this.props.destAddress}
            />

            <Polyline
              path={this.state.route}
              fillColor="#000000"
              fillOpacity={0.5}
              strokeColor="#000000"
              strokeOpacity={1}
              strokeWeight={2}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <p>{this.state.selectedPlace.name}</p>
              </div>
            </InfoWindow>
          </Map>
        )}
      </div>
    );
  }
}
export default GoogleApiWrapper({
  // apiKey: process.env.REACT_APP_GOOGLE_MAP,
  apiKey: ("AIzaSyBDv8lkv6j4FA-Xpb6ie4BZtC-2TWRyo5g"),
})(MapContainer);
