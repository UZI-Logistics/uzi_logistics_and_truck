import React, { useEffect, useState } from "react";
import TheHeader from "../common/TheHeader";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import logocolored from "../../images/logo.png";
import Loader from "../helpers/Loader";
import { POST } from "../helpers/api";
import Swal from "sweetalert2";
// import Axios from "axios";
import { FormattedMessage } from "react-intl";
import FooterContact from "../common/FooterContact";
import SEO from "../SEO";
import { Event } from "../helpers/tracking";
// import { GET } from "../helpers/api";

am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// var map = am4core.create("chartdiv", am4maps.MapChart);

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  // const [disabled, setDisabled] = useState(false);
  const [, setCountry] = useState("");
  const [step, setStep] = useState(0);
  const [change, setChange] = useState(false);

  let countries = ["NG", "GH", "KE", "CI", "BF", "UG", "EG",];

  const [countryItem, setCountryItem] = useState({
    code: "NG",
    country: "Nigeria",
    address: "ITF Complex Iponri Plot 12 Funsho Williams Ave, Iponri, Lagos",
    email: "info@kobo360.com",
    mobile: "+234 818 678 0000",
  });

  const [inputValues, setInputValues] = useState({
    truckType: "",
    name: "",
    business: "",
    message: "",
    email: "",
    phone: "",
  });

  //set country with the nav titles... if country code is ng, nigeria... if it drops

  const countryDetails = [
    {
      code: "NG",
      country: "Nigeria",
      address: "ITF Complex Iponri Plot 12 Funsho Williams Ave, Iponri, Lagos",
      email: "info@kobo360.com",
      mobile: "+234 818 678 0000",
    },

    {
      code: "KE",
      country: "Kenya",
      address:
        "KOBO360 LIMITED, SMK BUSINESS PARK, 2ND FLOOR, ENTERPRISE RD. NAIROBI",
      email: "info.ke@kobo360.com",
      mobile: "+254 717053217",
    },
    {
      code: "UG",
      country: "Uganda",
      address: "Kobo360 IncPlot 27 Bandali Rise - Bugoloobi, Kampala, Uganda",
      email: "info.ug@kobo360.com",
      mobile: "+256 788 071 987",
    },
    {
      code: "GH",
      country: "Ghana",
      address:
        "3rd Floor, Excel House Off Nungua Barrier- Sakumono Road, Accra, Ghana",
      email: "info.gh@kobo360.com",
      mobile: "+233(0)5 0040 6855",
    },
    {
      code: "EG",
      country: "Egypt",
      address:
        "Building No. 11G/4 El-Laselky, New Maadi, front of Gate 3 technology village, Cairo",
      email: "info.eg@kobo360.com",
      mobile: "+204 818 678 0000",
    },
    {
      code: "CI",
      country: "Ivory Coast",
      address: "Rue des selliers, Treichville, Abidjan , Côte d'voire",
      email: "info.ivc@kobo360.com",
      mobile: "+225  49400000",
    },
    {
      code: "BF",
      country: "Burkina Faso",
      address: "",
      email: "info.bf@kobo360.com",
      mobile: "+226 75244998",
    },
  ];

  useEffect(() => {
    // document.title = "Kobo360 | Contact Us";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = {
      ...inputValues,
    };
    POST("contact/", data).then((res) => {
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted. We will get in touch shortly",
        type: "success",
      });
      Event("Contact", "Sending Message to Kobo", "Sending Message Success");
      setSubmitting(false);
      clearForm();
    });
  };

  useEffect(() => {
    // setMap(am4core.create("chartdiv", am4maps.MapChart));
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    var polygonSeries = new am4maps.MapPolygonSeries();
    map.series.push(polygonSeries);
    polygonSeries.useGeodata = true;
    map.paddingRight = 20;

    // Configure series
    // setPolygonTemplate(polygonSeries.mapPolygons.template);
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.applyOnClones = true;
    polygonTemplate.togglable = true;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeOpacity = 0.5;
    polygonTemplate.fill = am4core.color("#ccc");
    var lastSelected;

    //add colors;
    polygonSeries.data = [
      {
        id: "NG",
        name: "Nigeria",
        zoomLevel: 7.0,
        value: 10,
        fill: am4core.color("#f3d6c7"),
      },
      {
        id: "GH",
        name: "Ghana",
        value: 10,
        zoomLevel: 7.0,
        fill: am4core.color("#f3d6c7"),
      },
      {
        id: "KE",
        name: "Kenya",
        value: 10,
        zoomLevel: 7.0,

        fill: am4core.color("#f3d6c7"),
      },
      {
        id: "UG",
        name: "Uganda",
        value: 10,
        zoomLevel: 7.0,

        fill: am4core.color("#f3d6c7"),
      },
      {
        id: "EG",
        name: "Egypt",
        value: 10,
        zoomLevel: 7.0,
        fill: am4core.color("#f3d6c7"),
      },
      {
        id: "CI",
        name: "Ivory Coast",
        value: 10,
        zoomLevel: 7.0,
        fill: am4core.color("#f3d6c7"),
      },
      {
        id: "BF",
        name: "Burkina Faso",
        value: 10,
        zoomLevel: 7.0,
        fill: am4core.color("#f3d6c7"),
      },
    ];
    polygonSeries.dataFields.zoomLevel = "zoomLevel";
    polygonTemplate.propertyFields.fill = "fill";

    polygonTemplate.events.on("hit", function (ev) {
      setChange(false);

      /* if "active" state already exists; use getKey() to retrieve it */
      let nigeria = polygonSeries.getPolygonById("NG");

      if (nigeria.states.hasKey("active")) {
        nigeria.isActive = false;
      }
      // setChange(false);
      setCountry(ev.target.dataItem.dataContext.id);
      getCountry(ev.target.dataItem.dataContext.id);

      if (lastSelected) {
        lastSelected.isActive = false;
      }
      ev.target.series.chart.zoomToMapObject(ev.target);
      if (lastSelected !== ev.target) {
        lastSelected = ev.target;
      }
    });
    map.homeZoomLevel = 1;
    map.homeGeoPoint = {
      latitude: -54,
      longitude: 120,
    };
    var ss = polygonTemplate.states.create("active");
    ss.properties.fill = am4core.color("#2b3c95");

    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#ff932f");
    //dataContext: {multiPolygon: Array(1), id: "NG", madeFromGeoData: true, name: "Nigeria"}
    //get the polygontemplate and id and use it to run default states...
    polygonTemplate.events.on("ready", function (ev) {
      var nigeria = polygonSeries.getPolygonById("NG");

      map.events.on("ready", function (ev) {
        map.zoomToMapObject(polygonSeries.getPolygonById("NG"));
      });
      nigeria.isActive = true;
    });
    // Hide Antarctica
    polygonSeries.exclude = ["AQ", "RU", "CA", "US", "MX", "HN"];

    // Zoom control
    map.zoomControl = new am4maps.ZoomControl();

    // series1.mapPolygons.template.fill = am4core.color("#96BDC6");
    // series1.fill = am4core.color("#96BDC6");
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // Add image series
    var imageSeries = map.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.data = [
      {
        title: "Lagos",
        latitude: 6.465422,
        longitude: 3.406448,
      },
      {
        title: "Cairo",
        latitude: 30.033333,
        longitude: 31.233334,
      },
      {
        title: "Nairobi",
        latitude: -1.359227,
        longitude: 36.937984,
      },
      {
        title: "Abidjan",
        latitude: 5.345317,
        longitude: -4.024429,
      },
      {
        title: "Accra",
        latitude: 5.593222,
        longitude: -0.140138,
      },
      {
        title: "Kampala",
        latitude: 0.310841,
        longitude: 32.595242,
      },
      {
        title: "Ouagadougou",
        latitude: 12.3714,
        longitude: 1.5197,
      },
    ];

    // add events to recalculate map position when the map is moved or zoomed
    map.events.on("ready", updateCustomMarkers);
    map.events.on("mappositionchanged", updateCustomMarkers);

    // this function will take current images on the map and create HTML elements for them
    function updateCustomMarkers(event) {
      // go through all of the images
      imageSeries.mapImages.each(function (image) {
        // check if it has corresponding HTML element
        if (!image.dummyData || !image.dummyData.externalElement) {
          // create onex
          image.dummyData = {
            externalElement: createCustomMarker(image),
          };
        }

        // reposition the element accoridng to coordinates
        var xy = map.geoPointToSVG({
          longitude: image.longitude,
          latitude: image.latitude,
        });
        image.dummyData.externalElement.style.top = xy.y + "px";
        image.dummyData.externalElement.style.left = xy.x + "px";
      });
    }

    // this function creates and returns a new marker element
    function createCustomMarker(image) {
      var chart = image.dataItem.component.chart;

      // create holder
      var holder = document.createElement("div");
      holder.className = "map-marker";
      holder.title = image.dataItem.dataContext.title;
      holder.style.position = "absolute";

      // maybe add a link to it?
      if (undefined !== image.url) {
        holder.onclick = function () {
          window.location.href = image.url;
        };
        holder.className += " map-clickable";
      }

      // create dot
      var dot = document.createElement("div");
      dot.className = "dot";
      holder.appendChild(dot);

      // create pulse
      var pulse = document.createElement("div");
      pulse.className = "pulse";
      holder.appendChild(pulse);

      // append the marker to the map container
      chart.svgContainer.htmlElement.appendChild(holder);

      return holder;
    }
    //dispose

    return () => {
      if (map) {
        map.dispose();
      }
    };

    // eslint-disable-next-line
  }, []);

  // const getCountry = useCallback(
  //   (countryId) => {
  //     const selectedCountry = countryDetails.filter(
  //       (country) => country.code === countryId
  //     )[0];

  //     setCountryItem(selectedCountry);
  //   },
  //   [countryDetails]
  // );

  const getCountry = (countryId) => {
    const selectedCountry = countryDetails.filter(
      (country) => country.code === countryId
    )[0];

    if (selectedCountry) {
      setCountryItem(selectedCountry);
    } else if (selectedCountry === undefined) {
      setCountryItem(countryDetails[0]);
    }
  };

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      name: "",
      business: "",
      message: "",
      email: "",
      phone: "",
    });
  };

  const next = (e) => {
    setChange(true);
    setStep(prevState => prevState + 1);

    // getCountry(countries[step]);

  };

  const previous = () => {
    setChange(true);
    setStep(prevState => prevState - 1);
    // getCountry(countries[step]);
  };

  useEffect(() => {
    if(step >= 0) {
      const country = countryDetails.find(det => det.code === countries[step]);
      // console.log(step, country)
      setCountryItem(country);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  useEffect(() => {
    if (change) {
      let map = am4core.create("chartdiv", am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();
      var polygonSeries = new am4maps.MapPolygonSeries();
      map.series.push(polygonSeries);
      polygonSeries.useGeodata = true;

      // Configure series
      // setPolygonTemplate(polygonSeries.mapPolygons.template);
      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.applyOnClones = true;
      polygonTemplate.togglable = true;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.nonScalingStroke = true;
      polygonTemplate.strokeOpacity = 0.5;
      polygonTemplate.fill = am4core.color("#ccc");
      var lastSelected;

      //add colors;
      polygonSeries.data = [
        {
          id: "NG",
          name: "Nigeria",
          zoomLevel: 7.0,
          value: 10,
          fill: am4core.color("#f3d6c7"),
        },
        {
          id: "GH",
          name: "Ghana",
          value: 10,
          zoomLevel: 7.0,
          fill: am4core.color("#f3d6c7"),
        },
        {
          id: "KE",
          name: "Kenya",
          value: 10,
          zoomLevel: 7.0,

          fill: am4core.color("#f3d6c7"),
        },
        {
          id: "UG",
          name: "Uganda",
          value: 10,
          zoomLevel: 7.0,

          fill: am4core.color("#f3d6c7"),
        },
        {
          id: "EG",
          name: "Egypt",
          value: 10,
          zoomLevel: 7.0,
          fill: am4core.color("#f3d6c7"),
        },
        {
          id: "CI",
          name: "Ivory Coast",
          value: 10,
          zoomLevel: 7.0,
          fill: am4core.color("#f3d6c7"),
        },
        {
          id: "BF",
          name: "Burkina Faso",
          value: 10,
          zoomLevel: 7.0,
          fill: am4core.color("#f3d6c7"),
        },
      ];
      polygonSeries.dataFields.zoomLevel = "zoomLevel";
      polygonTemplate.propertyFields.fill = "fill";

      //responsible for the zoom of the map when hit...create an active event
      polygonTemplate.events.on("hit", function (ev) {
        setCountry(ev.target.dataItem.dataContext.id);
        getCountry(ev.target.dataItem.dataContext.id);
        if (lastSelected) {
          lastSelected.isActive = false;
        }
        ev.target.series.chart.zoomToMapObject(ev.target);

        if (lastSelected !== ev.target) {
          lastSelected = ev.target;
        }
      });

      var ss = polygonTemplate.states.create("active");

      ss.properties.fill = am4core.color("#2b3c95");
      // dataContext: {multiPolygon: Array(1), id: "NG", madeFromGeoData: true, name: "Nigeria"}
      //get the polygontemplate and id and use it to run default states...
      polygonTemplate.events.on("ready", function (ev) {
        var country = polygonSeries.getPolygonById(
          countryItem ? countryItem.code : "NG"
        );

        map.events.on("ready", function (ev) {
          map.zoomToMapObject(
            polygonSeries.getPolygonById(countryItem ? countryItem.code : "NG")
          );
        });
        country.isActive = true;
      });

      // Hide Antarctica
      polygonSeries.exclude = ["AQ", "RU", "CA", "US", "MX", "HN"];

      /* Branches Color */
      // Zoom control
      map.zoomControl = new am4maps.ZoomControl();

      // Add image series
      var imageSeries = map.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      imageSeries.data = [
        {
          title: "Lagos",
          latitude: 6.465422,
          longitude: 3.406448,
        },
        {
          title: "Cairo",
          latitude: 30.033333,
          longitude: 31.233334,
        },
        {
          title: "Nairobi",
          latitude: -1.359227,
          longitude: 36.937984,
        },
        {
          title: "Abidjan",
          latitude: 5.345317,
          longitude: -4.024429,
        },
        {
          title: "Accra",
          latitude: 5.593222,
          longitude: -0.140138,
        },
        {
          title: "Kampala",
          latitude: 0.310841,
          longitude: 32.595242,
        },
        {
          title: "Ouagadougou",
          latitude: 12.3714,
          longitude: 1.5197,
        },
      ];

      // add events to recalculate map position when the map is moved or zoomed
      map.events.on("ready", updateCustomMarkers);
      map.events.on("mappositionchanged", updateCustomMarkers);

      // this function will take current images on the map and create HTML elements for them
      function updateCustomMarkers(event) {
        // go through all of the images
        imageSeries.mapImages.each(function (image) {
          // check if it has corresponding HTML element
          if (!image.dummyData || !image.dummyData.externalElement) {
            // create onex
            image.dummyData = {
              externalElement: createCustomMarker(image),
            };
          }

          // reposition the element accoridng to coordinates
          var xy = map.geoPointToSVG({
            longitude: image.longitude,
            latitude: image.latitude,
          });
          image.dummyData.externalElement.style.top = xy.y + "px";
          image.dummyData.externalElement.style.left = xy.x + "px";
        });
      }

      // this function creates and returns a new marker element
      function createCustomMarker(image) {
        var chart = image.dataItem.component.chart;

        // create holder
        var holder = document.createElement("div");
        holder.className = "map-marker";
        holder.title = image.dataItem.dataContext.title;
        holder.style.position = "absolute";

        // maybe add a link to it?
        if (undefined !== image.url) {
          holder.onclick = function () {
            window.location.href = image.url;
          };
          holder.className += " map-clickable";
        }

        // create dot
        var dot = document.createElement("div");
        dot.className = "dot";
        holder.appendChild(dot);

        // create pulse
        var pulse = document.createElement("div");
        pulse.className = "pulse";
        holder.appendChild(pulse);

        // append the marker to the map container
        chart.svgContainer.htmlElement.appendChild(holder);

        return holder;
      }

      return () => {
        if (map) {
          map.dispose();
        }
      };
    }
    // eslint-disable-next-line
  }, [change, getCountry]);

  return (
    <>
      <SEO title="Kobo360 | Contact Us"/>
    <div className="overflow-head">
      <TheHeader
        bgColor="gradient-header"
        kobo={logocolored}
        color="black"
        sticky="sticky"
      />
      <div className="contact">
        <div id="chartdiv" style={{ width: "100%", height: "100vh" }}></div>
        <div className="contact-section">
          <div className="contact-nav">
            <span
              className={`${step === 0 && "disabled"} pointer map-button`}
              onClick={previous}
            >
              <i className="material-icons map-icon-smaller pointer">
                arrow_back_ios
              </i>
            </span>
            <span
              className={`${
                step === countries.length - 1 && "disabled"
              } pointer map-button margin-left-1`}
              onClick={next}
            >
              <i className="material-icons map-icon-smaller pointer">
                arrow_forward_ios
              </i>
            </span>
          </div>

          <div className="contact-info">
            <div className="contact-info__details">
              <h1>{countryItem ? countryItem.country : "N/A"}</h1>
              <div className="blue-side" style={{ fontSize: '1.2em'}}>
                <p className="grey capitalize" style={{width: '50%'}}>
                  {countryItem ? countryItem.address : "N/A"}
                </p>
                <p className="grey">
                  {countryItem ? countryItem.email : "N/A"}
                </p>
                <p className="grey">
                  {countryItem ? countryItem.mobile : "N/A"}
                </p>
              </div>
            </div>
          </div>
          {/* ))
            : ""} */}
          <div className="contact-box ">
            <h1 className="center">Feel free to reach out to us</h1>
            <form
              className="contact-box__images margin-1"
              onSubmit={handleSubmit}
            >
              <div className="grid-input">
                <div className="flex-column">
                  <label htmlFor="model" className="grey">
                    <FormattedMessage id="app.name" defaultMessage="Name" />
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={inputValues.name}
                    placeholder=""
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-column">
                  <label htmlFor="model" className="grey">
                    <FormattedMessage
                      id="app.business-name"
                      defaultMessage="Business Name"
                    />
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder=""
                    required
                    value={inputValues.business}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid-input">
                <div className="flex-column">
                  <label htmlFor="model" className="grey">
                    <FormattedMessage
                      id="app.email"
                      defaultMessage="Email address"
                    />
                  </label>

                  <input
                    type="text"
                    placeholder=""
                    name="email"
                    required
                    value={inputValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-column">
                  <label htmlFor="model" className="grey">
                    <FormattedMessage
                      id="app.phone-number"
                      defaultMessage="Phone number"
                    />
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="phone"
                    required
                    value={inputValues.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex-column textarea">
                <label htmlFor="model" className="grey">
                  <FormattedMessage id="app.message" defaultMessage="Message" />
                </label>
                <textarea
                  type="text"
                  name="message"
                  className=""
                  required
                  cols={2}
                  rows={2}
                  value={inputValues.message}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-button">
                <button
                  className="pricing-button capitalize width-100"
                  type="submit"
                >
                  {submitting ? (
                    <Loader />
                  ) : (
                    <FormattedMessage id="app.submit" defaultMessage="Submit" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterContact />
    </div>
    </>
  );
};

export default Contact;
