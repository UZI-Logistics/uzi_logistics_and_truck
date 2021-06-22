import React, { useEffect } from "react";
import logocolored from "../../images/logo.png";
import { FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import Footer from "../common/Footer";
import Accordion from "../Careers/Accordion";
import { Link } from "react-router-dom";
import SEO from "../SEO";

const Terms = () => {
  useEffect(() => {
    // document.title = "Uzi Logistics && Trucking | Terms and Conditions";
    window.scrollTo(0, 0);
  });
  return (
    <>
      
      <SEO title="Gotruck | Terms and Conditions"/>
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
                id="app.terms-of-use"
                defaultMessage="Terms and Conditions"
              />
            </h1>
            <p>
              <FormattedMessage
                id="app.terms-of-use-caption"
                defaultMessage="Our rule book"
              />
            </p>
          </div>
          <Accordion title="Terms and Conditions" location="">
            <div className="conclusion padding-1">
              <p>
                Thank you for visiting the Gotruck{" "}
                <b>(“Gotruck,” “we,” “our,” or “us”)</b> website titled
              “Gotruck.com” (including any subdomains thereof and any websites
              through which we make our Services available) and if you{" "}
                <b>(“you,” or “your”)</b> have done so, downloading the Gotruck
              mobile, tablet or other smart device application and application
              program interfaces (collectively, the <b>“Site”</b>). IN RETURN
              FOR GAINING ACCESS TO AND USING THE SERVICES, YOU AGREE TO BE
              BOUND BY THE FOLLOWING TERMS AND CONDITIONS (THIS{" "}
                <b>“AGREEMENT”</b>) WITHOUT LIMITATION OR QUALIFICATION, SO PLEASE
              CAREFULLY REVIEW THIS AGREEMENT BEFORE ACCESSING OR USING THE
              SERVICES. If you do not intend to be legally bound by this
              Agreement, do not access or use the Services. By accessing or
              using the Services, you represent and warrant to us that you are
              18 years of age or older and possess the legal right and ability
              to enter into this Agreement and to use the Services in accordance
              with all of the terms and conditions of this Agreement.
              <br />
              This Agreement describes the terms by which we offer you access to
              and use of the Site and our online and mobile platform connecting
              Shippers with Carriers for the transportation of cargo (the{" "}
                <b>“Services”</b>). As part of the Services, Shippers submit
              requests for the transportation of cargo and if Carriers accept
              such requests, both Shippers and Carriers can track such requests
              up to delivery of the cargo to the cargo recipient and destination
              designated by Shipper. We reserve the right in our sole and
              unfettered discretion to deny you access to the Services at any
              time. We reserve the right to, at any time, modify, suspend or
              discontinue the Services or any part thereof with or without
              notice. We shall not be liable to you or to any third party for
              any such modification, suspension or discontinuance of the
              Services or any part thereof.
            </p>
            </div>
          </Accordion>
          <Accordion title="License to Use Services" location="">
            <div className="conclusion padding-1">
              <p>
                Subject to your compliance with this Agreement, we grant you a
                limited, non-exclusive, non-sublicensable, revocable,
                non-transferable license to access and use the Services solely to
                permit you to make legitimate requests, or accept and fulfill such
                requests, for cargo transportation services and goods or otherwise
                transact business with us, and for no other purposes. You shall
                only use the Services for their intended purposes, as permitted by
                this Agreement, and only in accordance with applicable federal,
                state or local laws, codes, rules, regulations or orders of any
              governmental authority <b>(“Applicable Law”)</b>. Any rights not
              expressly granted to you herein are reserved by us.
            </p>
            </div>
          </Accordion>
          <Accordion title="Limitation on Your Use of Services" location="">
            <div className="conclusion padding-1">
              <p>
                You shall not, and shall not encourage or authorize any third
                party to, directly or indirectly, access or use the Services to do
              any of the following (each, a <b>“Misuse”</b>): (a) sell, resell,
              license, sublicense, distribute, rent or lease the Services,
              including as a service bureau or outsourcing offering or otherwise
              access or use the Services other than as expressly permitted
              hereunder; (b) make any fictitious, fraudulent, or abusive request
              or submission; (c) distribute, disseminate, post, or publish,
              store or transmit any (i) information or material that degrades,
              embarrasses, harasses, humiliates, intimidates, or threatens any
              individual or group of individuals (in each case, as determined by
              us in our sole discretion), (ii) any infringing, libelous, or
              otherwise unlawful or tortious material, or (iii) code, files,
              scripts, agents, or programs intended to do harm (including, for
              example, viruses, Trojan horses, worms, time bombs, and cancel
              bots), or other computer programming routines or code that may
              damage or detrimentally interfere with the Services or any data or
              personal information maintained on or in connection with the
              Services <b>(“Harmful Code”);</b> (d) abuse, stalk, or otherwise
              violate others' legal rights, including but not limited to rights
              of privacy and publicity; (e) engage in any commercial purpose,
              including advertising or offering to sell any goods or business
              opportunities, conducting contests or surveys, or advertising any
              employment, independent contractor positions, multi-level
              marketing opportunities, or securities; (f) post, send, or
              otherwise disclose confidential information, trade secrets, or
              other confidential and/or protected proprietary data of any entity
              or person, including Gotruck or any of our affiliates; (g)
              download or upload files that you know, or reasonably should know,
              cannot be legally distributed through the Services; (h) upload,
              download, or otherwise export or re-export software from the
              Services: (i) to a national or resident of or into any country the
              U.S. has embargoed, including, Cuba, Iran, Iraq, Libya, North
              Korea, Syria, or Yugoslavia, (ii) to anyone on the U.S. Treasury
              Department's Specially Designated Nationals list, or (iii) to
              anyone on the U.S. Commerce Department's Table of Denial Orders;
              (i) copy, modify, correct, adapt, translate, enhance or otherwise
              prepare derivative works or improvements of the Services or any
              part, feature, function or user interface thereof; (j) frame or
              mirror any part of the Services; (k) access the Services in order
              to build a competitive product or service, or for purposes of
              monitoring its availability, performance or functionality, or for
              any other benchmarking or competitive purposes; (l) “harvest” or
              collect information from the Services (including information about
              other users of the Services or offerings, products or services
              available on or through the Services) using an automated software
              tool or manually on a mass basis; (m) reverse engineer,
              disassemble, decompile, decode or otherwise attempt to derive or
              gain access to the source code of the Services or any component
              thereof, except to the extent permitted by Applicable Law; (n)
              integrate or link to any open source software or freeware with the
              Services; (o) remove any proprietary notices, labels or marks from
              the Services; or (p) engage in any other conduct that is, or that
              we deem to be, in conflict with this Agreement. We forbid each of
              the foregoing Misuses, and accessing the Services for any Misuse
              or other similar purposes is an unauthorized use of the Services.
            </p>
            </div>
          </Accordion>
          <Accordion title="Gotruck Account Credentials" location="">
            <div className="conclusion padding-1">
              <p>
                For access to and use of certain features of the Site (including
                for registering as a Carrier, Shipper or Driver), we may provide
              you with a user identification and password{" "}
                <b>(“Gotruck Account Credentials”).</b> The Gotruck Account
              Credentials are proprietary to and the property of Gotruck.
              However, you must take precautions to ensure the security of your
              Gotruck Account Credentials. We assume no responsibility for, and
              will not be liable in the event that, a third party learns your
              Gotruck Account Credentials or uses it to access your Gotruck
              account on the Site <b>(“Account”)</b> or cause damage to you. You
              must provide accurate, current and complete information during the
              registration process and keep your Gotruck Account Credentials and
              Account information up-to-date at all times. You may not give
              access to your Account to any person or entity. However, if you
              are a Carrier, you may give those you directly supervise or
              control as part of your business or employment, including Drivers
              (collectively, your <b>“Agents”</b>), access to your Account,
              provided that you must ensure Agents comply with this Agreement.
              Any act or omission of an Agent will be deemed to be your act or
              omission, for which you will be liable in accordance with the
              terms of this Agreement. You will not, and if you are a Carrier,
              will ensure your Agents do not, share “Gotruck Account Credentials
              with any other individual or allow any third party to access or
              use your Account or the Services under your Gotruck Account
              Credentials.
            </p>
            </div>
          </Accordion>
          <Accordion title="Account Suspension; Termination" location="">
            <div className="conclusion padding-1">
              <p>
                We may suspend or terminate your access to the Services or to any
                features or portions thereof, at any time, for no reason or any
                reason and without notice, including if you violate this
                Agreement. If we suspend your access to the Services, we will use
                commercially reasonable efforts to promptly restore your access to
                and use of the Services after the event giving rise to the
                suspension has been resolved to our satisfaction. We may
                permanently remove or delete any information that you may have on
                ﬁle with us, including any User Content or “Gotruck Account
                Credentials without any liability whatsoever.
            </p>
            </div>
          </Accordion>
          <Accordion title="Cargo Transportation Services" location="">
            <div className="conclusion padding-1">
              <p>
                As used in this Agreement: <br />
                <b>“Transportation Broker,”</b> means a person or entity that
              sells, offers for sale, negotiates, provides, or arranges
              transportation of cargo by Carrier for compensation; <br />
                <b>“Shipper”</b> means the owner, shipper, consignor, or consignee
              of the cargo being transported via the Services; <br />
                <b>“Carrier”</b> means any motor carrier, trucking company, or
              fleet owner providing motor vehicle transportation of cargo for
              compensation; and
              <b>“Drivers”</b> means those Carrier employees, contractors,
              owner-operators under contract with Carrier, employees of such
              owner-operators, or any other service providers of the Carrier
              assigned to operate motor vehicles providing transportation of
              cargo on behalf of the Carrier.
              <br />
                <span style={{ textDecoration: "underline" }}>
                  Our Obligations.
              </span>{" "}
              Unless expressly represented to you in writing otherwise, we: (a)
              are not a carrier and our sole obligation is to connect Shippers
              with Carriers for the transportation of cargo; (b) do not take
              possession, custody or control of any cargo; (c) do not assume any
              liability, possessory rights, obligations, or financial
              responsibility whatsoever for cargo, including loss, theft, damage
              or delayed delivery thereof; and (d) will not be liable for loss,
              damage, theft, destruction, or delayed delivery of any cargo. We
              do not assess the suitability, legality, regulatory compliance,
              quality or ability of any Carrier, Driver, Shipper or shipped
              cargo scheduled through the use of the Services, and we make no
              warranty regarding the same. We are not responsible for any terms
              entered into between Shippers and any Carrier and we do not
              guarantee that a Shipper’s shipment request will be accepted by
              any Carrier. <br />
                <span style={{ textDecoration: "underline" }}>
                  Carrier Obligations.
              </span>{" "}
              It is the Carrier’s obligation to provide transportation services,
              which may be scheduled through the use of the Services. A Carrier
              who accesses or uses the Services is an independent contractor and
              shall be solely responsible for controlling the method, manner,
              and means of transporting cargo for Shippers. The Carrier and its
              Drivers are responsible for determining the appropriate route for
              transportation. For purposes of this Agreement, any navigational
              directions that we offer to Carriers or Drivers are offered for
              convenience only, and Carrier and Drivers have no obligation to
              follow such navigational directions. Any transportation requests
              (i.e., trips) that are accepted by a Carrier or any Driver on
              behalf of a Carrier are subject to the rates and charges indicated
              on the Services and the terms and conditions of the applicable
              agreement entered into between such Carrier and us and this
              Agreement. Carrier represents, warrants and covenants to us that
              Carrier: (i) shall perform all transportation services with
              equipment that is regularly maintained and in good order,
              condition and repair and that meets with all Applicable Law; (ii)
              shall furnish equipment for transporting cargo that is clean, dry,
              leak proof, free from harmful or offensive odor, sanitary and free
              of any contamination, is suitable for the particular cargo being
              transported and which will not cause, in whole or in part,
              adulteration of the cargo; (iii) shall not supply equipment that
              has been used to transport hazardous wastes of any kind; and (iv)
              shall ensure all equipment and cargo has been properly loaded,
              secured, blocked and braced. If you are a Driver, you agree that
              all charges and compensation due to you as a Driver are the sole
              responsibility of the Carrier and not us.
              <br />
                <span style={{ textDecoration: "underline" }}>
                  Shipper Obligations.
              </span>
              If you are a Shipper, you represent, warrant and covenant to us
              that you: (A) own, possess, or otherwise have rights to transport
              the cargo you seek to ship by way of the Services and have
              obtained all relevant approvals for this purpose; (B) will not use
              the Services to ship hazardous materials or prohibited and
              restricted materials by applicable law; (C) shall obtain
              first-party insurance to cover any anticipated losses of cargo;
              and (D) shall not request pick-up or delivery dates or hour that
              would require a Carrier to violate hours of service regulations
              under Applicable Law.
            </p>
            </div>
          </Accordion>
          <Accordion title="Account Suspension; Termination" location="">
            <div className="conclusion padding-1">
              <p>
                We may suspend or terminate your access to the Services or to any
                features or portions thereof, at any time, for no reason or any
                reason and without notice, including if you violate this
                Agreement. If we suspend your access to the Services, we will use
                commercially reasonable efforts to promptly restore your access to
                and use of the Services after the event giving rise to the
                suspension has been resolved to our satisfaction. We may
                permanently remove or delete any information that you may have on
                ﬁle with us, including any User Content or “Gotruck Account
                Credentials without any liability whatsoever.
            </p>
            </div>
          </Accordion>
          <Accordion title="Privacy and Security" location="">
            <div className="conclusion padding-1">
              <p>
                <span style={{ textDecoration: "underline" }}>Privacy.</span> Our
              privacy policy can be found{" "}
                <Link className="blue-color pointer" to="privacy-policy">
                  here
              </Link>{" "}
              and explains in detail how we collect, manage, process, secure,
              and store User Content and private information.
              <br />
                <span style={{ textDecoration: "underline" }}>
                  Security.
              </span>{" "}
              While we [will use commercially reasonable efforts] / [take
              reasonable steps] to safeguard and prevent unauthorized access to
              your private information (including User Content), we cannot be
              responsible for the acts of those who gain unauthorized access,
              and we make no warranty, express, implied, or otherwise, that we
              will prevent unauthorized access to your private information or
              User Content.
            </p>
            </div>
          </Accordion>
          <Accordion title="Intellectual Property" location="">
            <div className="conclusion padding-1">
              <p>
                <span style={{ textDecoration: "underline" }}>
                  Our Intellectual Property.
              </span>
                <br /> Except for User Content (as defined below) and unless
              otherwise expressly noted, we are and will remain the sole and
              exclusive owner of all right, title and interest in and to the
              Services (including any modifications and improvements thereto or
              derivatives thereof) and all information, “Gotruck Account
              Credentials (as defined below), account information, articles,
              blog posts, data, images, passwords, screens, text, user
              identification, Web pages, software, trademarks, logos, service
              marks, trade dress or other materials (collectively{" "}
                <b>“Gotruck Content”</b>) appearing on the Services, including all
              intellectual property rights therein and thereto. Neither this
              Agreement nor your use of or access to the Services conveys or
              grants to you any rights or licenses in or related to the Services
              (whether by estoppel, implication or otherwise), except for the
              limited license granted in Section 1 above. This Agreement does
              not authorize you to use our name, trademark or logo. <br />
                <span style={{ textDecoration: "underline" }}>
                  Your Intellectual Property.{" "}
                </span>
                <br />
              We may, in our sole discretion, permit you to, from time to time,
              submit, upload, publish or otherwise make available to us through
              the Services, or over email or by phone, textual, audio, and/or
              visual content and information, including commentary and feedback
              related to the Services, ratings and reviews, and initiation of
              support requests <b>(“User Content”).</b> Any User Content
              provided by you remains your property. However, by providing User
              Content to us, you grant us a worldwide, perpetual, irrevocable,
              transferable, assignable, royalty-free license, with the right to
              sublicense through multiple tiers, to host, use, access, read,
              store, publish, reproduce, copy, modify, create derivative works
              of, distribute, transmit, publicly display, publicly perform,
              incorporate into other works, and otherwise exploit in any manner
              and for any purpose such User Content, in whole or in part, in all
              formats and distribution channels now known or hereafter devised,
              without further notice to or consent from you, and without the
              requirement of payment to you or any other person or entity. We
              may, but shall not be obligated to, review, monitor, or remove
              User Content, at our sole discretion and at any time and for any
              reason, without notice to you. You represent, warrant and covenant
              to us that: (a) you either are the sole and exclusive owner of all
              User Content or you have all rights, licenses, consents and
              releases necessary to grant us the license to the User Content as
              set forth above; (b) all User Content will be accurate, correct,
              and up to date; and (c) neither the User Content, nor your
              submission, uploading, publishing or otherwise making available of
              such User Content, nor our use of the User Content as permitted
              herein, will infringe, misappropriate or violate a third party's
              intellectual property or proprietary rights, or rights of
              publicity or privacy, or result in the violation of any Applicable
              Law.
            </p>
            </div>
          </Accordion>
          <Accordion title="Indemnification" location="">
            <div className="conclusion padding-1">
              <p>
                <span style={{ textDecoration: "underline" }}>
                  General Obligations.
              </span>{" "}
              You agree to indemnify, defend, and hold us and our affiliates,
              and their respective officers, directors, employees, and agents,
              harmless from and against any and all claims, demands,
              proceedings, suits and actions, including any related liabilities,
              obligations, losses, damages, deficiencies, penalties, taxes,
              levies, fines, judgments, settlements, expenses (including legal
              and accountants' fees and disbursements) and costs (collectively,{" "}
                <b>“Claims”</b>), based on, arising out of or resulting from your
              use of the Services, submission of User Content, or interaction
              with other users of the Services, including any Claims alleging
              facts that, if true, would constitute your breach of this
              Agreement or Applicable Law.
              <br />
                <span style={{ textDecoration: "underline" }}>
                  Additional Carrier Obligations.
              </span>{" "}
              If you are a Carrier, you additionally agree to indemnify, defend
              and hold us, the Shipper you are providing transportation services
              to, and each of its and our respective affiliates, officers,
              directors, employees and agents, harmless from and against any and
              all Claims based on, arising out of or resulting from the
              performance or breach of this Agreement by you, your Drivers and
              other employees and contractors, including Claims for or related
              to personal injury (including death), property damage and your
              possession, use, maintenance, custody or operation of all
              equipment used to perform transportation services. The foregoing
              indemnification obligation will not apply to the prorated extent
              that any Claim is directly and proximately caused by the
              negligence or other wrongful conduct of the party to be
              indemnified. You hereby expressly waive any exclusive remedy
              defense, including those available under any worker’s compensation
              or other occupational accident statutory regime to the extent
              necessary to effectuate your obligations under this provision.
              <br />
                <span style={{ textDecoration: "underline" }}>
                  Additional Shipper Obligations.
              </span>{" "}
              If you are a Shipper, you additionally agree to indemnify, defend
              and hold us, the Carrier providing transportation services to you,
              and each of its and our respective affiliates, officers,
              directors, employees and agents, harmless from and against any and
              all Claims based on, arising out of or resulting from the
              performance or breach of this Agreement by you, your employees and
              contractors, including Claims for or related to personal injury
              (including death), property damage and your cargo. The foregoing
              indemnification obligation will not apply to the prorated extent
              that any Claim is directly and proximately caused by the
              negligence or other wrongful conduct of the party to be
              indemnified. You hereby expressly waive any exclusive remedy
              defense to the extent necessary to effectuate your obligations
              under this provision. <br />
              We reserve the right, at your expense, to assume the exclusive
              defense and control of any Claim for which you are required to
              indemnify us and you agree to cooperate with our defense of these
              Claims. You agree not to settle any Claim without our prior
              written consent. We will use reasonable efforts to notify you of
              any such Claim upon becoming aware of it.
            </p>
            </div>
          </Accordion>
          <Accordion title="Disclaimers" location="">
            <div className="conclusion padding-1">
              <p>
                <b>DISCLAIMERS.</b> Notwithstanding anything else set forth in
              this Agreement to the contrary and to the maximum extent permitted
              by Applicable Law: <br />
                <br />
                <span style={{ textDecoration: "underline" }}>GENERAL.</span> YOU
              USE THE SERVICES AT YOUR OWN RISK. THE SERVICES ARE PROVIDED "AS
              IS" AND “AS AVAILABLE” AND WITHOUT WARRANTY OF ANY KIND, EITHER
              EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ANY IMPLIED WARRANTIES
              OF EXPECTATION OF PRIVACY, FITNESS FOR A PARTICULAR PURPOSE,
              MERCHANTABILITY, NON-INFRINGEMENT OR TITLE, OR ANY WARRANTIES THAT
              MAY ARISE OUT OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE
              OR TRADE PRACTICE. WE MAKE NO REPRESENTATION, WARRANTY OR
              GUARANTEE REGARDING THE RELIABILITY, TIMELINESS, QUALITY,
              SUITABILITY, AVAILABILITY, COMPLETENESS OR ACCURACY OF THE
              SERVICES, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR FREE OF
              ERRORS, VIRUSES OR OTHER HARMFUL COMPONENTS. IN NO EVENT SHALL WE
              OR OUR AFFILIATES BE LIABLE FOR ANY DAMAGES (WHETHER
              CONSEQUENTIAL, DIRECT, INCIDENTAL, INDIRECT, PUNITIVE, SPECIAL,
              EXEMPLARY OR OTHERWISE), INCLUDING LOST PROFITS, LOST DATA,
              PERSONAL INJURY, OR PROPERTY DAMAGE RELATED TO, ARISING OUT OF, OR
              IN ANY WAY CONNECTED WITH, THE USE OF OR INABILITY TO USE THE
              SERVICES OR FOR ANY OF THE CONTENT OR PRODUCTS OBTAINED THROUGH OR
              OTHERWISE IN CONNECTION WITH THE SERVICES, IN EACH CASE REGARDLESS
              OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, STRICT LIABILITY,
              TORT OR OTHER THEORIES OF LIABILITY, AND ALSO REGARDLESS OF
              WHETHER WE WERE GIVEN ACTUAL OR CONSTRUCTIVE NOTICE THAT DAMAGES
              WERE POSSIBLE. WE DO NOT GUARANTEE THAT THE SERVICES, OR ANY
              PORTION THEREOF, WILL FUNCTION ON ANY PARTICULAR HARDWARE OR
              DEVICE. ADDITIONALLY, THE SERVICES MAY BE SUBJECT TO MALFUNCTIONS
              AND DELAYS INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC
              COMMUNICATIONS.
              <br />
                <br />
                <span style={{ textDecoration: "underline" }}>
                  THIRD PARTY ACTIONS AND CONTENT.
              </span>{" "}
              IN ADDITION TO THE FOREGOING, IN NO EVENT WILL WE OR OUR
              AFFILIATES BE LIABLE FOR ANY DAMAGES ARISING OUT OF, OR IN ANY WAY
              CONNECTED WITH, A THIRD PARTY'S UNAUTHORIZED ACCESS TO YOUR
              PRIVATE INFORMATION, GOTRUCK ACCOUNT CREDENTIALS, ACCOUNT OR USER
              CONTENT, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT,
              STRICT LIABILITY, TORT OR OTHER THEORIES OF LIABILITY, AND ALSO
              REGARDLESS OF WHETHER WE WERE GIVEN ACTUAL OR CONSTRUCTIVE NOTICE
              THAT DAMAGES WERE POSSIBLE. WE DO NOT CONTROL, ENDORSE OR TAKE
              RESPONSIBILITY FOR ANY USER CONTENT OR THIRD-PARTY CONTENT
              AVAILABLE ON OR LINKED TO BY THE SERVICES (INCLUDING INFORMATION
              ON THE SERVICES PROVIDED BY CARRIERS, SHIPPERS OR DRIVERS). WE
              SHALL NOT BE LIABLE FOR ANY TRANSACTION OR RELATIONSHIP BETWEEN
              YOU AND ANY THIRD PARTY (INCLUDING ANY SHIPPER, CARRIER, OR
              DRIVER), OR ANY DELAY OR FAILURE IN PERFORMANCE RESULTING FROM
              CAUSES BEYOND OUR REASONABLE CONTROL.
              <br />
                <br />
                <span style={{ textDecoration: "underline" }}>
                  SERVICES NOT AVAILABLE EVERYWHERE.
              </span>{" "}
              SINCE WE PROVIDE SERVICES AND PRODUCTS IN MANY PARTS OF THE WORLD,
              THE SITE MAY REFER TO CERTAIN GOODS, PRODUCTS, OR SERVICES THAT
              ARE NOT AVAILABLE IN YOUR AREA. A REFERENCE TO GOODS, PRODUCTS, OR
              SERVICES WITHOUT LIMITING THEIR GEOGRAPHIC SCOPE DOES NOT IMPLY
              THAT WE OFFER OR INTEND TO OFFER THOSE GOODS, PRODUCTS, OR
              SERVICES IN ALL LOCATIONS.
            </p>
            </div>
          </Accordion>
          <Accordion title="Limitation of Liability" location="">
            <div className="conclusion padding-1">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: (A) WE SHALL
                NOT BE LIABLE (IN CONTRACT, TORT OR OTHERWISE, INCLUDING
                NEGLIGENCE) TO YOU FOR ANY CONSEQUENTIAL, INCIDENTAL, GENERAL,
                SPECIAL OR EXEMPLARY DAMAGES OF ANY KIND, INCLUDING LOSS OF OR
                DAMAGE TO CARGO OR LOSS OF PROFITS, REVENUES OR DATA, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND (B) OUR
                AGGREGATE LIABILITY FOR ALL CLAIMS UNDER, IN CONNECTION WITH OR
                ARISING OUT OF, THIS AGREEMENT OR THE SERVICES (WHETHER IN
                CONTRACT, TORT, OR OTHERWISE, INCLUDING NEGLIGENCE) WILL NOT
                EXCEED [ONE HUNDRED U.S. DOLLARS] (US $[100]).
            </p>
            </div>
          </Accordion>
          <Accordion title="Network Access and Devices" location="">
            <div className="conclusion padding-1">
              <p>
                You are responsible for: (a) obtaining the data network access
                necessary to use the Services; (b) acquiring and maintaining
                compatible hardware or devices necessary to access and use the
                Services and any updates thereto, (c) securing the systems and
                devices you use to access the Services, and (d) backing up your
                User Content or other information. Mobile network data and
                messaging rates and fees may apply if you access or use the
                Services from your mobile device.
            </p>
            </div>
          </Accordion>
          <Accordion
            title="Links to Other Websites and to the Services"
            location=""
          >
            <div className="conclusion padding-1">
              <p>
                The Services may include hyperlinks or references to other
                websites, which are provided merely for your convenience and our
                inclusion of such links and references in the Services does not
                imply an endorsement of the linked or framed websites, their
                content, or the persons or entities operating those websites. We
                take no responsibility for the information, products, or services
                obtained on such other websites and will not be liable for any
                damages arising from your access to such websites. You assume sole
                responsibility for using links or pointers to third parties.
                Additionally, we bear no responsibility for websites that provide
                hyperlinks or references to the Services, unless those websites
                are operated by us.
            </p>
            </div>
          </Accordion>
          <Accordion title="Your Communications with Us" location="">
            <div className="conclusion padding-1">
              <p>
                The Site may provide you with information as to how you can
                contact us by telephone. You may use these functions only for
                business purposes related to the Services. For quality assurance
                purposes, we may monitor, record, or transcribe the contents of
                these communications. By contacting us, you agree that the
                communication may be monitored, recorded, or transcribed and you
                consent to the monitoring, recording, or transcribing. Such
                records may be kept indefinitely or disposed of at our sole
                discretion.
            </p>
            </div>
          </Accordion>
          <Accordion title="Governing Law; Dispute Resolution" location="">
            <div className="conclusion padding-1">
              <p>
                <span style={{ textDecoration: "underline" }}>
                  Governing Law.
              </span>{" "}
              This Agreement’s interpretation or any disputes arising from your
              access to, dealings with, or use of the Services will be governed
              by and interpreted in accordance with the laws of Delaware,
              without regard to conflicts of law principles. This Agreement
              shall not be governed by the United Nations Convention on
              Contracts for the International Sale of Goods. <br />
                <span style={{ textDecoration: "underline" }}>
                  Dispute Resolution.
              </span>{" "}
              Any dispute or claim arising out of or related to this Agreement
              or your or your Agents’ use of the Services will be finally
              settled by binding arbitration under the Rules of Arbitration of
              the International Chamber of Commerce by one or more arbitrators
              appointed in accordance with said Rules. The arbitration will be
              conducted in English in Wilmington, Delaware, and judgment on the
              arbitrator’s award may be entered in any court of competent
              jurisdiction. You or we may apply to any court or administrative
              body of competent jurisdiction for a temporary restraining order,
              preliminary injunction or other interim or conservatory relief.
              You agree and understand that you will not bring against us or any
              of our affiliated entities, agents, directors, employees, or
              officers any class action lawsuit related to your access to,
              dealings with, or use of the Services.
            </p>
            </div>
          </Accordion>
          <Accordion title="Notice" location="">
            <div className="conclusion padding-1">
              <p>
                We may give notice by means of a general notice on the Site,
                electronic mail to the email address you provide to us (including
                via your Account), or by written communication sent by first class
                mail or pre-paid post to the mailing address you provide to us
                (including via your Account). Such notice shall be deemed to have
                been given immediately (if it’s a general notice posted on the
                Site) or upon the expiration of 48 hours after mailing or posting
                (if sent by first class mail or pre-paid post) or upon the
                expiration of 12 hours after sending (if sent by email). You may
                give notice to us, with such notice deemed given when received by
                us, at any time by first class mail or pre-paid post to Yaba, 22
                Ikorodu Rd, Jibowu 100252, Lagos, Nigeria.
            </p>
            </div>
          </Accordion>
          <Accordion title="Other Terms" location="">
            <div className="conclusion padding-1">
              <p>
                <span style={{ textDecoration: "underline" }}>
                  Entire Agreement.
              </span>{" "}
              This Agreement constitutes the entire agreement governing your
              access to, dealings with, and use of the Services. This Agreement
              expressly supersedes prior agreements or arrangements with you,
              other than with respect to any Shipper, Carrier or Driver
              agreement with us to the extent such agreement is inconsistent
              with this Agreement.
              <br />
                <span style={{ textDecoration: "underline" }}>Changes.</span> We
              reserve the right to occasionally make changes to this Agreement.
              In the event we make any material changes to this Agreement, we
              will use commercially reasonable efforts to notify you in
              accordance with Section 15 (Notice) at least [five (5) days]
              before the date such material changes become effective. If you
              disagree with the revised Agreement, you may terminate this
              Agreement with immediate effect. Your continued access or use of
              the Services after such revisions become effective constitutes
              your consent to be bound by the Agreement, as amended.
              <br />
                <span style={{ textDecoration: "underline" }}>
                  Waivers; Severability; Assignment; Relationship; No Third Party
                  Beneficiaries; Interpretation.
              </span>{" "}
              Any failure by us to assert any rights we may have under this
              Agreement does not constitute a waiver of our right to assert the
              same or any other right at any other time or against any other
              person or entity. If any provision of this Agreement is found to
              be invalid or unenforceable, then the invalid or unenforceable
              provision will be stricken from this Agreement without affecting
              the validity or enforceability of any other provision. You may not
              assign this Agreement without our prior written approval. We may
              assign this Agreement without your consent to: (a) a subsidiary or
              affiliate; (b) an acquirer of our equity, business or assets; or
              (c) a successor by merger. Any purported assignment in violation
              of this section will be void. No joint venture, partnership,
              employment, or agency relationship exists among you, us or any
              third party as a result of this Agreement or use of the Services.
              This Agreement does not and is not intended to confer any rights
              or remedies upon any person other than you and us and any
              additional parties indemniﬁed hereunder. For all purposes of this
              Agreement, the words “including” and “includes” mean inclusion
              without limitation, and the words “or” and “any” are used in the
              inclusive sense.
            </p>
            </div>
          </Accordion>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
