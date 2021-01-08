import React, { useEffect } from "react";
import logocolored from "../../images/logo.png";
import { FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import Footer from "../common/Footer";
import Accordion from "../Careers/Accordion";
import SEO from "../SEO";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    
      <SEO title="Gotruck | Privacy Policy"/>
    <div className="overflow-head">
      <TheHeader
        bgColor="light-blue"
        kobo={logocolored}
        color="black"
        sticky="sticky"
      />
      <div className="terms">
        <div className="terms-heading middle">
          <h1 className="capitalize">
            <FormattedMessage
              id="app.privacy-policy"
              defaultMessage="Privacy Policy"
            />
          </h1>
          <p>
            <FormattedMessage
              id="app.privacy-caption"
              defaultMessage="Our policy book"
            />
          </p>
        </div>
        <Accordion title="Terms and Conditions" location="">
          <div className="conclusion padding-1">
            <p>
              Gotruck recognizes the importance of protecting your personal
              information, and this Privacy Policy explains our privacy
              practices when it comes to using, sharing, and protecting the
              information we collect when you visit our “Gotruck.com” website
              and any other online platform, website, mobile or tablet
              application, or other online service that links or refers to this
              Privacy Policy (collectively, the “Services”). Terms used in this
              Privacy Policy but not otherwise defined will have the respective
              meaning ascribed to them in the Terms and Conditions.
              <br />
              <h4 style={{ textDecoration: "underline" }}>
                Collection of Information
              </h4>
              We may collect personal information about our users in various
              ways. For example, we may collect information that you provide to
              us, information about your use of the Services, and information
              from publicly available sources or third parties.
              <li>
                <b>Information You Provide to Us.</b>
              </li>{" "}
              You may provide information directly to us in several different
              ways. For example, when you create, modify, or log in to your Gotruck
              account (“Account”) , contact us with questions or feedback,
              or otherwise provide information directly to us, we may ask you to
              provide your name, email address, postal address, phone number,
              insurance information or other information.
              <li>
                <b>Information About Your Use of the Services.</b>
              </li>{" "}
              We may collect certain information about you and your computer or
              your device when you use the Services, including:
              <li style={{ left: "2em" }}>
                Device information. We may collect information concerning your
                computer and other devices used to access the Services. For
                example, we may collect your hardware model, IP address, other
                unique identifiers, operating system version, and browser type
                and settings of the device you use to access the Services.
              </li>
              <li style={{ left: "2em" }}>
                Usage information. We may also collect information about the
                Services you use, your interactions with content offered through
                the Services, and other online activity. For example, we may
                collect information about how many users visit a specific page
                on the Services, how long they stay on that page, and which
                hyperlinks, if any, they click. We collect this information, in
                part, through the use of cookies, web beacons and similar
                technologies, which are discussed in greater detail below.
              </li>
              <li>
                <b>Location Information.</b>
              </li>{" "}
              When you use our mobile application, depending on your device
              settings, we may collect information about your precise location.
              Disabling the geolocation function may prevent you from using
              certain features of our products and services that require
              location information.
              <li>
                <b>Information From Third-Party Sources.</b>
              </li>{" "}
              We may receive information about you from publicly and
              commercially available sources, as permitted by Applicable Law,
              which we may combine with other information we receive from or
              about you. For example, we may receive information about you from
              a social media site if you connect to the Services through that
              site.
              <li>
                <b>Other Information We Collect.</b>
              </li>{" "}
              We also may collect other information about you, your device, or
              your use of our products and services in ways that we describe to
              you at the point of collection or otherwise with your consent. You
              may choose not to provide us with certain types of information,
              but doing so may affect your ability to use some of our products
              and services. We may combine the information we collect or receive
              about you and use or disclose it in the manner described in this
              Privacy Policy.
              <br />
              <b>Use of Information</b>
              <br />
              We use the information we collect and receive for the following
              purposes:
              <li>
                To deliver and improve our products and services, including to
                manage your Account(s), perform billing and payment activities,
                and analyze usage of the Services;
              </li>
              <li>
                To respond to your questions or to communicate with you about
                your Account status and our products, services, and promotions;
              </li>
              <li>
                To customize your experience with our products and services and
                enhance your engagement with them, including by providing you
                with relevant advertising on the Services or elsewhere;
              </li>
              <li>
                To protect the security and integrity of our products and
                services; and
              </li>
              <li>
                For other purposes that may be described to you at the point of
                collection.
              </li>
              <h4 style={{ textDecoration: "underline" }}>
                Sharing of Information{" "}
              </h4>
              We may share your information with the following entities:
              <li>
                <b>Other Users.</b>
              </li>{" "}
              We may share your information with other users of our products and
              services who require such information to help fulfill a shipment
              request or in connection with transportation services. For
              example, if you are a Carrier, we may share your name and contact
              information, location, vehicle information, and certain other
              information with Shippers in connection with your provision of
              cargo transportation services.
              <li>
                <b>Affiliates.</b>
              </li>{" "}
              We may share your information with our current and future
              affiliates—companies that control, are controlled by, or are under
              common control with gotruck.
              <li>
                <b>Service Providers.</b>
              </li>{" "}
              We may share your information with third-party service providers
              that provide a variety of services on our behalf. For example, we
              may rely on service providers to provide web analytics, data
              processing, advertising, email distribution, and other services.
              These service providers are expected to protect the
              confidentiality, integrity, and security of the information we
              share with them. However, we are not responsible for their privacy
              practices.
              <li>
                <b>
                  Other Parties When Required by Law or as Necessary to Protect
                  Our Services.
                </b>
              </li>{" "}
              There may be instances when we disclose your information to other
              parties in order to:
              <li>
                protect the legal rights of Gotruck, its affiliates, and users
                of our products and services;
              </li>
              <li>
                protect the safety and security of users of our products and
                services;
              </li>
              <li>prevent fraud (or for risk management purposes); or</li>
              <li>
                comply with or respond to the law or legal process or a request
                for cooperation by a government entity, whether or not legally
                required.{" "}
              </li>
              <li>
                <b>Other Parties in Aggregated Form.</b>
              </li>{" "}
              We may share your information with third parties in aggregated or
              de-identified form.
              <li>
                <b>Other Parties in Connection With a Transfer of Assets.</b>
              </li>{" "}
              If we make a sale or transfer of assets, or are involved in a
              merger or transfer, or in the unlikely event of bankruptcy, we may
              transfer your information to one or more third parties as part of
              that transaction.
              <li>
                <b>Other Parties With Your Consent.</b>
              </li>{" "}
              In addition to the sharing described in this Privacy Policy, we
              may share information about you with other third parties when you
              consent to such sharing.
            </p>
          </div>
        </Accordion>
        <Accordion title="Links to Third-Party Sites" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>
                Links to Third-Party Sites
              </h4>
              Our Services may link to third-party websites and services that
              are outside our control. We are not responsible for the security
              or privacy of any information collected by other websites or other
              services. You should exercise caution when accessing such websites
              and review the privacy statements applicable to the third-party
              websites and services you use.
              <h4 style={{ textDecoration: "underline" }}>
                Advertising and Analytics Services Provided by Others{" "}
              </h4>
              We and third parties that provide content or functionality on the
              Services or provide us analytics and advertising services may
              collect or receive information about your use of the Services and
              other websites or mobile applications, including through the use
              of cookies, web beacons, and similar technologies. This
              information may include, for example, your IP address, browser,
              device information, pages viewed, time spent on pages, links
              clicked and conversion information. This information may be
              combined with information collected across different websites,
              online services, and linked or associated devices to, among other
              things, analyze and track data, determine the popularity of
              certain content, deliver advertising and content targeted to your
              interests, and better understand your online activity. For more
              information about Internet-based ads, or to opt out of receiving
              targeted advertising from participating companies, please visit{" "}
              <a href="http://www.aboutads.info/choices">
                www.aboutads.info/choices.
              </a>
            </p>
          </div>
        </Accordion>
        <Accordion title="Your Privacy Choices" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>
                Your Privacy Choices
              </h4>
              <li>
                <b>Manage Your Account.</b>
              </li>{" "}
              You may access or modify your Account information at any time by
              logging into your Account. If you would like to cancel your
              Account, please contact us at Support@gotruck.com.
              <li>
                <b>Promotional Communications.</b>
              </li>{" "}
              You may opt out of receiving promotional messages from us by
              following the instructions contained in those messages. If you opt
              out, we may still send you non-promotional communications, such as
              those related to your Account or use of our products and services.
              <li>
                <b>Access, Correction, and Deletion Rights.</b>{" "}
              </li>{" "}
              You may have certain rights as a data subject under local law. For
              example, you may have the right to access, update, or correct
              inaccuracies in your personal information in our custody and
              control, subject to certain exceptions prescribed by law. If you
              would like to exercise your rights, please contact us as set out
              in the Contact Us section below.
            </p>
          </div>
        </Accordion>
        <Accordion title="Protection of Information" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>
                Protection of Information
              </h4>
              We have put in place physical, technical, and administrative
              measures that are intended to help safeguard information in our
              possession against loss, theft and unauthorized use, disclosure,
              or modification. Please note, however, that no data transmission
              or storage can be guaranteed to be 100% secure. As a result,
              although we strive to protect the information we maintain, we
              cannot ensure or warrant the security of any information that you
              transmit to us.
            </p>
          </div>
        </Accordion>
        <Accordion title="Children Information" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>
                Children’s Information
              </h4>
              We do not knowingly collect any personal information from children
              without parental consent unless permitted by law. If we learn that
              a child has provided us with personal information, we will delete
              it in accordance with local laws.
            </p>
          </div>
        </Accordion>
        <Accordion title="Do-Not-Track Signals" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>
                Do-Not-Track Signals
              </h4>
              Some web browsers may transmit “do-not-track” signals to the
              websites and other online services with which the browser
              communicates. There is no standard that governs what, if anything,
              websites and online services should do when they receive these
              signals. We currently do not take action in response to these
              signals. If and when a standard for responding is established, we
              may revisit our policy on responding to these signals.
            </p>
          </div>
        </Accordion>
        <Accordion title="Changes to this Privacy Policy" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>
                Changes to this Privacy Policy
              </h4>
              If we decide to modify our Privacy Policy, we will post those
              changes here or notify you by other appropriate means. Your
              continued use of our products and services following any changes
              indicates your acceptance of these changes.
            </p>
          </div>
        </Accordion>
        <Accordion title="Contact us" location="">
          <div className="conclusion padding-1">
            <p>
              <h4 style={{ textDecoration: "underline" }}>Contact Us</h4>
              If you have questions or comments about this Privacy Policy,
              please contact us at Support@gotruck.com.
            </p>
          </div>
        </Accordion>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Privacy;
