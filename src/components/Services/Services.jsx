import React, { useEffect } from "react";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import logocolored from "../../images/logo.png";
// import serviceimage from "../../images/2052636@2x.png";
import kgs from "../../images/Group 1406.png";
import businesses from "../../images/Group 1407.png";
import fleet from "../../images/fast.png";
import servicetruck from "../../images/NoPath@2x.png";
import arrow from "../../images/arrow-circle-right.svg";
import Footer from "../common/Footer";
import SEO from "../SEO";


const Services = ({ history }) => {
  useEffect(() => {
    // document.title = "Kobo360 | Services";
    window.scrollTo(0, 0);

    window.scrollTo(0, 0);
  });
  return (
    <>
    
      <SEO title="Kobo360 | Services"/>
    <div className="overflow-head">
      <TheHeader
        bgColor="light-blue"
        kobo={logocolored}
        color="black"
        sticky="sticky"
      />
      <div data-aos="zoom-out" className="about">
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
              defaultMessage="The company is building the Global Logistics Operating System to drive efficiency and affordability in supply chain."
              description="About Heading"
            />
          </p>
        </div>
      </div>
      <div className="flex about-box">
        <p data-aos="zoom-left" className="about-box__card">
          <FormattedMessage
            id="app.about-kobo"
            defaultMessage="Kobo360 is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework. <div class=about-content-space />  
                                    With only a click of a button on our seamless mobile and web applications, cargo owners can simply request for any truck of their choice and have their goods picked up and delivered to the required location through an all-in-one robust logistics ecosystem.<div class=about-content-space /> 
                                    Kobo uses big data and technology to reduce logistics frictions while empowering rural farmers to earn more by reducing farm wastages and helping manufacturers of all sizes to find new markets.
                                    Kobo enables unprecedented efficiency and cost reduction in the supply chain, providing 360-visibility while delivering products of all sizes safely, on time and in full."
            description="About Kobo"
          />
        </p>
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
              <h1 data-aos="zoom-in">300M+</h1>
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
              <h1 data-aos="zoom-in">2,345</h1>
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
              <h1 data-aos="zoom-out">12,908</h1>
            </span>
          </div>
        </div>
      </div>
      <div className="services-added">
        <h1 className="center white title services-title" data-aos="zoom-out">
          Value Added Services
        </h1>
        <div className="services-added__content flex">
          <div className="services-added__card bg-white">
            <div className="flex height-16">
              <img src={servicetruck} alt="" loading="lazy"/>
              <div className="card-content">
                <p>Kobo Care</p>
                <p data-aos="zoom-in" className="margin-bottom-1">
                  <b>
                    <FormattedMessage
                      id="app.about-text"
                      defaultMessage=" KoboCare is a solution for drivers registered on the Kobo
                  platform, as part of our commitment to drivers. The
                  advantages includes: <br /> Discounted Diesel sale ..."
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
                  <FormattedMessage
                    id="app.read-more"
                    defaultMessage="Read more"
                    description="Read more..."
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="services-added__card bg-white">
            <div className="flex height-16 ">
              <img src={servicetruck} alt="" loading="lazy"/>
              <div className="card-content">
                <p>Kobo Safe</p>
                <p data-aos="zoom-in" className="margin-bottom-1">
                  <b>
                    <FormattedMessage
                      id="app.kobo-safe"
                      defaultMessage="KoboSafe is our bespoke self insurance solution that provides insurance cover for every single trip on Kobo’s platform. This product offers 80% cost reduction on insurance premiums."
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
