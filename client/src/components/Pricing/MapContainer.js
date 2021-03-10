import React, { Component } from "react";

import Loader from "../helpers/Loader";

const mapStyles = {
  width: "80%",
  height: "80%",
  boxShadow: "0px 1px 40px #00000029",
  marginLeft: "12em",
};

let locator = navigator.geolocation;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      route: [],
      lat: 0,
      lng: 0,
      loading: false,
    };
    this.mapRef = React.createRef();
  }
  componentDidMount() {
    // this.googleChecker();
    this.locationReq();
  }
  componentWillUnmount() {
    locator.clearWatch(this.locationReq());
  }

  // googleChecker = () => {
  //   // check for maps in case you're using other google api
  //   if (!window.google.maps) {
  //     setTimeout(this.googleChecker, 100);

  //     this.setState({ loading: true });
  //   } else {
  //     this.setState({ loading: false });
  //     // the google maps api is ready to use, render the map
  //     this.renderMap();
  //   }
  // };
  renderMap = () => {
    const coords = { lat: +this.state.lat || 0, lng: +this.state.lng || 0 };
    // create map instance
    const map = new window.google.maps.Map(this.mapRef.current, {
      zoom: 12,
      center: {
        lat: coords.lat,
        lng: coords.lng,
      },
    });

    new window.google.maps.Marker({
      animation: window.google.maps.Animation.DROP,
      position: coords,
      map,
      title: this.props.sourceAddress,
    });
  };

  locationReq = () => {
    this.setState({ loading: true });
    if ("geolocation" in navigator) {
      locator.getCurrentPosition((position) => {
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
    const { center, centerDest } = this.props;
    const DirectionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const start = new window.google.maps.LatLng(
      +center.lat || 0,
      +center.lng || 0
    );
    const end = new window.google.maps.LatLng(
      +centerDest.lat || 0,
      +centerDest.lng || 0
    );

    const map = new window.google.maps.Map(this.mapRef.current, {
      zoom: 14,
      center,
    });
    const infowindow = new window.google.maps.InfoWindow({
      content: origin,
    });
    const infowindow_ = new window.google.maps.InfoWindow({
      content: destination,
    });

    const startMarker = new window.google.maps.Marker({
      animation: window.google.maps.Animation.DROP,
      position: start,
      map: map,
    });

    const endMarker = new window.google.maps.Marker({
      animation: window.google.maps.Animation.DROP,
      position: end,
      map: map,
    });

    DirectionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
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

    directionsRenderer.setMap(map);

    startMarker.addListener("click", () => {
      infowindow.open(map, startMarker);
    });

    endMarker.addListener("click", () => {
      infowindow_.open(map, endMarker);
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.destAddress !== this.props.destAddress) {
      this.calculateDistance(this.props.sourceAddress, this.props.destAddress);
    }
    if (prevState.lat !== this.state.lat || prevState.lng !== this.state.lng) {
      this.renderMap();
    }
  }
  render() {
    // var bounds = new window.google.maps.LatLngBounds();
    for (var i = 0; i < this.state.route.length; i++) {
      // bounds.extend(this.state.route[i]);
    }
    return (
      <div className="map_div">
        {this.state.loading ? (
          <Loader color="green" />
        ) : (
          <div ref={this.mapRef} style={mapStyles} />
        )}
      </div>
    );
  }
}
export default MapContainer;
