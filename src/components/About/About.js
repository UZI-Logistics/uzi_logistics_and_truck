import React, { useEffect } from "react";
import TheHeader from "../common/TheHeader";
import logocolored from "../../images/logo.png";
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
          <div className="services-box__images margin-1">
            <img
              loading="lazy"
              data-aos="zoom-out"
              className="small"
              src={serviceimage}
              alt=""
            />
          </div>
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
          <h1 className="center title white">
            <FormattedMessage
              id="app.in-the-news"
              defaultMessage="In The News"
              description="In The News"
            /><br />
            <FormattedMessage
              id="app.in-the-news"
              defaultMessage="Coming Soon..."
              description="Coming soon..."
            />
          </h1>
        
          <div className="news-card ">
            <div className="news-card__content margin-1">
              {/* <img
                className="news-card__content--image "
                src={techcrunch}
                alt=""
                loading="lazy"
              /> */}
              {/* <div className="news-card__content--text">
                <p className="grey font-smaller margin-bottom-1">
                  August 14, 2019
                </p>
                <p className="margin-bottom-1">
                  <b>Gotrucking raises $30M backed by Goldman Sachs</b>
                </p>
                <p className="margin-bottom-1">
                  Gotrucking has raised a $20 million Series A round led by
                  Goldman Sachs...
                </p>
                <p
                  className="more-button pointer flex margin-bottom-1"
                  onClick={() =>
                    window.open(
                      "https://techcrunch.com/2019/08/14/nigerian-logistics-startup-kobo360-raises-30m-backed-by-goldman-sachs/"
                    )
                  }
                >
                  <img
                    src={arrow}
                    alt=""
                    className="smaller pointer-margin-5"
                    loading="lazy"
                  />{" "}
            
                </p>
              </div> */}
            </div>
            {/* <div className="news-card__content margin-1">
              <img
                className="news-card__content--image "
                src={bloomberg}
                alt=""
                loading="lazy"
              />
              <div className="news-card__content--text">
                <p className="grey font-smaller margin-bottom-1">
                  September 1, 2019
                </p>
                <p className="margin-bottom-1">
                  <b>
                    {" "}
                    IFC-Backed Uber of Trucks Reshapes Nigeria’s Haulage Market
                  </b>
                </p>
                <p className="margin-bottom-1">
                  An Uber-like App for trucks is making it easier and cheaper{" "}
                  <br />
                  for firms to move goods in <br /> Africa’s most populous
                  <br /> nation ...
                </p>
                <p
                  className="more-button pointer flex margin-bottom-1"
                  onClick={() =>
                    window.open(
                      "https://www.bloomberg.com/news/articles/2019-09-01/ifc-backed-uber-of-trucks-reshapes-nigeria-s-haulage-market"
                    )
                  }
                >
                  <img
                    src={arrow}
                    alt=""
                    className="smaller pointer-margin-5"
                    loading="lazy"
                  />{" "}
                  <FormattedMessage
                    id="app.read-more"
                    defaultMessage="Read more"
                    description="Read more..."
                  />
                </p>
              </div>
            </div> */}
           {/* <div className="news-card__content margin-1">
              <img
                className="news-card__content--image"
                loading="lazy"
                src={kobobbc}
                alt=""
              />
             <div className="news-card__content--text">
                <p className="grey font-smaller margin-bottom-1">
                  May 22, 2019
                </p>
                <p className="margin-bottom-1">
                  <b> How cargo delivery is going digital in Nigeria</b>
                </p>
                <p className="margin-bottom-1">
                  Digital startup Gotrucking is revolutionising cargo delivery
                  with an app inspired by Uber.
                </p>
                <p
                  className="more-button pointer flex margin-bottom-1"
                  onClick={() =>
                    window.open(
                      "https://www.bbc.com/news/av/business-48372152/how-cargo-delivery-is-going-digital-in-nigeria?ocid=wsnews.chat-apps.in-app-msg.whatsapp.trial.link1_.auin"
                    )
                  }
                >
                  <img
                    src={arrow}
                    alt=""
                    className="smaller pointer-margin-5"
                    loading="lazy"
                  />{" "}
                  <FormattedMessage
                    id="app.read-more"
                    defaultMessage="Read more"
                    description="Read more..."
                  />
                </p>
              </div> 
            </div> */}
            {/* <div className="news-card__content margin-1">
            <img className="news-card__content--image" src={forbes} alt="" loading="lazy" />
            <div className="news-card__content--text">
              <p className="grey font-smaller margin-bottom-1">
                September 9, 2019
              </p>
              <p className="margin-bottom-1">
                <b>
                  Q&A With Gotrucking Co-Founder Obi Ozor On His E-Logistics
                  Startups's $30 Million Raise
                </b>
              </p>
              <p className="margin-bottom-1">
                Gotrucking co-founder Obi Uzor talks about how his startup plans to
                dominate Supply Chain Management In Africa after raising $30
                million...
              </p>
              <p
                className="more-button pointer flex margin-bottom-1"
                onClick={() =>
                  window.open(
                    "https://www.forbes.com/sites/mfonobongnsehe/2019/09/03/qa-with-kobo360-co-founder-obiora-ozor-on-his-e-logistics-startupss-30-million-raise/#2bc8b3df10e5"
                  )
                }
              >
                <img src={arrow} alt="" className="smaller pointer-margin-5" loading="lazy" />{" "}
                <FormattedMessage
                  id="app.read-more"
                  defaultMessage="Read more"
                  description="Read more..."
                />
              </p>
            </div>
          </div> */}
            {/* <div className="news-card__content margin-1">
              <img
                className="news-card__content--image"
                loading="lazy"
                src={ft}
                alt=""
              />
              <div className="news-card__content--text">
                <p className="grey font-smaller margin-bottom-1">
                  August 27, 2019
                </p>
                <p className="margin-bottom-1">
                  <b>Tech start-ups drive change for Nigerian truckers</b>
                </p>
                <p className="margin-bottom-1">
                  Uber-style apps are transforming industry rife with
                  inefficiency and corruption...
                </p>
                <div className="more-button pointer flex margin-bottom-1">
                  {" "}
                  <img
                    src={arrow}
                    alt=""
                    className="smaller pointer-margin-5"
                    loading="lazy"
                  />{" "}
                  <a href={pdf} target="_blank" rel="noopener noreferrer">
                    <FormattedMessage
                      id="app.read-more"
                      defaultMessage="Read more"
                      description="Read more..."
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
