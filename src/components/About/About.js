import React, { useEffect } from "react";
import TheHeader from "../common/TheHeader";
import logocolored from "../../images/logo-green.png";
import { FormattedMessage } from "react-intl";
import serviceimage from "../../images/uzi-trucking-about-us.png";
import Footer from "../common/Footer";
import SEO from "../SEO";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <SEO title="UZI LOGISTICS | About UZI LOGISTICS & TRUCKING" />
      <div className="overflow-head">
        <TheHeader
          bgColor="light-blue"
          kobo={logocolored}
          color="black"
          sticky="sticky"
        />
        <div className="services" data-aos="zoom-in">
          <div className="services-heading middle">
            <h1 className="capitalize" data-aos="zoom-in">
              <FormattedMessage
                id="app.about-head"
                defaultMessage="About UZI LOGISTICS & TRUCKING"
                description="About Heading"
              />
            </h1>
            <p data-aos="zoom-out" className="">
              <FormattedMessage
                id="app.about-leading"
                defaultMessage="The logistics of your business on our shoulders."
                description="About Heading"
              />
            </p>
          </div>
        </div>
        <div className="flex services-box">
          <p className="services-box__card" data-aos="zoom-out">
            <FormattedMessage
              id="app.services-text-1"
              defaultMessage="“UZI Trucking Company strives to be the company of choice for logistics and trucking by fostering 
              a collaborative environment of partnerships, teamwork and creativity.“"
              description="Our Services Text 1"
            />
            <br />
            <br />
            <p data-aos="zoom-out">
              <FormattedMessage
                id="app.services-text-2"
                defaultMessage="We pride ourselves on having the largest intermodal fleet in Nigeria and beyond, staffed 24 hours per day, and 7 days a week 
                to meet all intermodal service requirements. Our trucks will be equipped with top of the line satellite dispatch software and GPS tracking 
                equipment to ensure accurate, up-to-date status all shipments. Our goal is to consistently deliver a competitive advantage to our customers 
                through innovative and customized solutions."
                description="Our Services Text 2"
              />
            </p>
            <br />
            <FormattedMessage
              id="app.services-text-3"
              defaultMessage="These values have shaped the company’s"
              description="Our Services Text 3"
            />
            <br />
            <br />
            <FormattedMessage
              id="app.mission"
              defaultMessage="Mission: Your Global Logistics and Trucking Partner... "
              description="Mission"
            />
            <br />
            <FormattedMessage
              id="app.vision"
              defaultMessage="Logistics solutions to enhance a culture of safety, speed, service, and trust to all our customers and partners... "
              description="Vision"
            />
            <br />
            <b data-aos="zoom-in"></b>{" "}
            <FormattedMessage
              id="app.corporate"
              defaultMessage="Service, Speed and Security is our culture."
              description="Corporate Tagline"
            />
          </p>
          <div className="services-box__images margin-1">
            <img
              loading="lazy"
              data-aos="zoom-out"
              className="about-small"
              src={serviceimage}
              alt=""
            />
          </div>
        </div>

        {/* <div className="investors ">
          <h1 className="center title investors-title" data-aos="zoom-in">
            <FormattedMessage
              id="app.investors"
              defaultMessage="Our Investors"
              description="Our Investors"
            />
          </h1>
          <div className="investors-images" data-aos="zoom-out">
            <img className="big" src={gms} alt="" loading="lazy" />
            <img className="small-icon" src={ifc} alt="" loading="lazy" />
            <img className="small-icon" src={ycomb} alt="" loading="lazy" />
            <img className="big" src={aaic} alt="" loading="lazy" />
            <img className="big" src={tlc} alt="" loading="lazy" />
          </div>
        </div> */}
        <div className="news" data-aos="zoom-in">
          <div className="news-card ">
            <div className="news-card__content margin-1"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
