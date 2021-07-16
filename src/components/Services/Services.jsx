import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import logocolored from "../../images/logo-green.png";
import kgs from "../../images/Group 1406.png";
import businesses from "../../images/Group 1407.png";
import fleet from "../../images/fast.png";
import servicetruck from "../../images/NoPath@2x.png";
import arrow from "../../images/arrow-circle-right.svg";
import Footer from "../common/Footer";
import SEO from "../SEO";

const Services = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    window.scrollTo(0, 0);
  });
  return (
    <>
      <SEO title="UZI Logistics & Trucking | Services" />
      <div className="overflow-head">
        <TheHeader
          bgColor="light-blue"
          kobo={logocolored}
          color="black"
          sticky="sticky"
        />
        <div data-aos="zoom-out" className="about about-header">
          <div className="about-heading middle">
            <h1 className="capitalize">
              <FormattedMessage
                id="app.our-services"
                defaultMessage="Our Services"
                description="Our Services"
              />
            </h1>
            <p>
              <FormattedMessage
                id="app.about-leading"
                defaultMessage="The Logistics Of Your Business On Our Shoulders..."
                description="About Heading"
              />
            </p>
          </div>
        </div>
        <div className="flex about-box">
          <div className="flex-column box-images">
            <div className="about-box__images flex-align-center hover-scale margin-1">
              <img src={kgs} alt="" data-aos="zoom-in" loading="lazy" />
              <span>
                <p data-aos="zoom-out">
                  <FormattedMessage
                    id="app.moved"
                    defaultMessage="KG's Moved"
                    description="KG's Moved"
                  />
                </p>
                <h1 data-aos="zoom-in">150M+</h1>
              </span>
            </div>
            <div className="about-box__images margin-left-5 flex-align-center hover-scale margin-1">
              <img src={businesses} alt="" data-aos="zoom-in" loading="lazy" />
              <span>
                <p data-aos="zoom-out">
                  <FormattedMessage
                    id="app.biz-supported"
                    defaultMessage="Businesses Supported"
                    description="Businesses Supported"
                  />
                </p>
                <h1 data-aos="zoom-in">1,587</h1>
              </span>
            </div>
            <div className="about-box__images flex-align-center hover-scale margin-1 movement">
              <img src={fleet} alt="" loading="lazy" />
              <span className="">
                <p data-aos="zoom-out">
                  <FormattedMessage
                    id="app.fleet"
                    defaultMessage="Total Fleet"
                    description="Total Fleet"
                  />
                </p>
                <h1 data-aos="zoom-out">10,997</h1>
              </span>
            </div>
          </div>
          <p data-aos="zoom-left" className="about-box__card">
            <FormattedMessage
              id="app.about-uzi_logistics"
              defaultMessage="Our deep industry experience and passion for logistics enable us to meet customers’ demands. We ensure the best customer experience, 
              competitive pricing and state of the art technology through our mobile and web applications that fosters speed, service and safety with a single click of a button.
              be the “Top Choice” to our partners and customers worldwide for international freight forwarding and logistics services."
              description="About UZI Logistics & Trucking"
            />
            <br />
            <br />
            <FormattedMessage
              id="app.about-uzi_logistics"
              defaultMessage="UZI logistics and trucking solutions serves as an extension of your Logistics Team by providing a wide range of strategic, consultative, 
              and executional supply chain solutions. The people, processes and systems provided by Swift Logistics were built to address the complex needs of our clients 
              and with a commitment to always provide ’Good Service’"
              description="About UZI Logistics & Trucking"
            />

            <br />
            <br />
            <FormattedMessage
              id="app.about-uzi_logistics"
              defaultMessage="Yes! through the use of technology and on-site management we ensure swift delivery and safety of your cargo to any location in Nigeria and beyond. "
              description="About UZI Logistics & Trucking"
            />
          </p>
        </div>
        <div className="services-added">
          <h1 className="center white title services-title" data-aos="zoom-out">
            Value Added Services
          </h1>
          <div className="services-added__content flex">
            <div className="services-added__card bg-white">
              <div className="flex height-16">
                <img src={servicetruck} alt="" loading="lazy" />
                <div className="card-content">
                  <p>UZI Cares</p>
                  <br />

                  <p data-aos="zoom-in" className="margin-bottom-1">
                    <b>
                      <FormattedMessage
                        id="app.about-text"
                        defaultMessage=" UZI-Care provides discounted Diesel sale and fuel credit solution to Drivers and Trucks registered on the UZI Platform. 
                        This implies that our drivers and partners have easy access to fuel their trucks within our partners filling stations in Oando and MRS nation-wide.  ..."
                      />
                    </b>
                  </p>
                  <p
                    className="more-button pointer flex margin-bottom-1"
                    onClick={() => history.push("kobocare")}
                  >
                    <img
                      data-aos="zoom-in"
                      src={arrow}
                      alt=""
                      className="smaller-pointer pointer-margin-5"
                      loading="lazy"
                    />{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="services-added__card bg-white">
              <div className="flex height-16 ">
                <img src={servicetruck} alt="" loading="lazy" />
                <div className="card-content">
                  <p>UZI Safety</p>
                  <br />
                  <p data-aos="zoom-in" className="margin-bottom-1">
                    <b>
                      <FormattedMessage
                        id="app.kobo-safe"
                        defaultMessage="UZI-safety gives you peace of mind on every single 
                        transaction and trips on UZI Platform. Get peace of mind with insurance for transport goods and protect your cargo against the risk of loss or damage. "
                      />
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
