import React, { useEffect } from "react";
import logocolored from "../../images/logo.png";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import TheHeader from "../common/TheHeader";
import joining from "../../images/joining@2x.png";
import Footer from "../common/Footer";
import Accordion from "./Accordion";
import SEO from "../SEO";

const OpenMail = ({ mail, color }) => {
  const onClick = () => {
    window.location.href = `mailto:${mail}?subject=&body=Message%20goes%20here`;
  };
  return (
    <>
      <span
        className={`grey font-smaller ${color} underline-mail pointer`}
        onClick={onClick}
      >
        {mail}
      </span>
    </>
  );
};
const Careers = () => {
  useEffect(() => {
    // document.title = "Kobo360 | Careers";
    window.scrollTo(0, 0);
  });
  return (
    <>

      <SEO title="Gotruck | Careers" />
      <div className="overflow-head">
        <TheHeader
          bgColor="light-blue"
          kobo={logocolored}
          color="black"
          sticky="sticky"
        />
        <div className="careers">
          <div className="careers-heading middle">
            <h1 className="capitalize">
              <FormattedMessage
                id="app.careers-heading"
                defaultMessage="JOINING GOTRUCK"
              />
            </h1>
            <p>
              <FormattedMessage
                id="app.careers-caption"
                defaultMessage="Job openings"
              />
            </p>
          </div>
        </div>
        <div className="flex careers-box">
          <span data-aos="zoom-in" className="careers-box__card">
            <FormattedMessage
              id="app.careers-text-1"
              defaultMessage="Gotruck is a pan-African e-logistics startup that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients achieve an efficient supply chain framework. With operations in Nigeria, Ivory Coast, Burkina Faso, Uganda, Togo, Ghana and Kenya, we are one of the fastest-growing logistics tech startups in Africa. "
            />
            <br /> <br />
            <FormattedMessage
              id="app.careers-text-2"
              defaultMessage="Our mission is to build the Global Logistics Operating System (GLOS) that will power trade and  commerce across Africa and emerging markets. In developing an all-in-one logistics ecosystem, we  leverage data and technology to enable unprecedented efficiency and cost reduction in the supply  chain, providing 360-visibility while delivering products of all sizes safely, on time and in full."
            />
            <br />
            <br />{" "}
            <FormattedMessage
              id="app.careers-text-3"
              defaultMessage="We promote the values of creativity, drive, ownership, accountability, and execution, which are vital to Africa’s economic future. We are building a dynamic and innovative company that is a critical element in sustaining Africa’s new-found optimism, and this will not only grow shareholder's worth but also create exponential economic expansion."
            />{" "}
            <div className="line"></div>
            <FormattedMessage
              id="app.careers-text-4"
              defaultMessage="We are driven by a set of shared values. We are fast, energetic and innovative. We work diligently and collaboratively to get it right; we don’t cut corners. At Gotruck, we are execution-focused, goal-oriented and hands-on; we bring these values into everything we do. We continue to fixate on building big, building for Africa. This is an exciting time to join our team, which is made up of individuals from global logistics  companies and top-ranking institutions in the world of innovation and learning. "
            />{" "}
          </span>

          <div className="careers-box__images margin-1 ">
            <img className="small" src={joining} alt="" loading="lazy" />
          </div>
        </div>
        {/* I commented out the job openings cause we need the accordion to display the job openings */}
        <div className="investors ">
          <h1 className="center title">
            <FormattedMessage
              id="app.careers-caption"
              defaultMessage="Job openings"
            />
          </h1>
        </div>
        <Accordion
          title="Head of Operations "
          location="Togo"
        >
          <div className="responsibility padding-1 ">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <p>The head of operations overseas trips execution from end to end:</p>
            <ul className="list-careers">
              <li>
                Acquisition of customers.
              </li>
              <li>
                Continued and growth of allocations from customers.
              </li>
              <li>
                Successful loading, tripping and execution on their accounts.
              </li>
              <li>
                Waybill collection and submission to the waybill team.
              </li>
              <li>
                Following up on invoice payment with support of commercial director
              </li>

            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>KPIs</b>
            </p>
            <ul className="list-careers">
              <li>
                10X growth of demand from both existing and new customers.
              </li>
              <li>95% of trips from customers are loaded through ensuring coordinated supply.</li>
              <li> Successful management of Operations managers who support in trip execution.</li>
              <li>Ensuring that your Ops coordinator has input all the right data and shared with relevant teams.</li>
              <li>That you have field officers 100% of the time there is loading at your loading locations.</li>
              <li>100% of waybills from your business are submitted to the waybill team.</li>
              <li>100% of payment requests made on time by your team. </li>
              <li>At any one time you are aware of your trip updates. </li>
              <li> Management of customers and transporters to ensure continued satisfaction. </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Requirements</b>
            </p>
            <ul className="list-careers">
              <li>
                Bachelor's degree in Business, Computer Science, or a related field.
              </li>
              <li>Experience as a Head of Operations or in a similar role of a minimum 5 years.</li>
              <li>Knowledge of business functions.</li>
              <li>Solid knowledge of data analytics.</li>
              <li>Strong mathematical literacy.</li>
              <li>Excellent organizational and leadership qualities.</li>
              <li>A strategic thinker. </li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Head of Operations - Togo</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Administrative Assistant"
          location="Burkina Faso"
        >
          <div className="responsibility padding-1 ">
            <p className="roles-title">
              <b>Job Summary</b>
            </p>
            <p>
              We are looking for a master multi-tasker with excellent communication skills and an upbeat attitude.  Candidates should be able to assist management and all visitors to the company by handling office  tasks, providing polite and professional assistance via phone, mail, and e-mail, making reservations or  travel arrangements, and generally being a helpful and positive presence in the workplace.
            </p>
            <br />
            <p>
              To be successful as an Administrative Assistant, candidates should be professional, polite, and  attentive while also being accurate. They should always be prepared and responsive, willing to meet  each challenge directly. Administrative Assistants must be comfortable with computers, general office  tasks, and excel at both verbal and written communication. Most importantly, Administrative  Assistants should have a genuine desire to meet the needs of others.
            </p>

          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>
                Handling office tasks, such as filing, generating reports and presentations, setting up for  meetings, and reordering supplies.
              </li>
              <li> Providing real-time scheduling support by booking appointments and preventing conflicts.</li>
              <li> Making travel arrangements, such as booking flights, cars, and making hotel and restaurant  reservations.</li>
              <li> Screening phone calls and routing callers to the appropriate party.</li>
              <li>Using computers to generate reports, transcribe minutes from meetings, create presentations,  and conduct research. </li>
              <li>Greet and assist visitors.</li>
              <li>Maintain polite and professional communication via phone, e-mail, and mail. </li>
              <li>Anticipate the needs of others in order to ensure their seamless and positive experience. </li>
              <li> May be called to perform duties outside your Job Description.  </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Requirements</b>
            </p>
            <ul className="list-careers">
              <li>
                Associate degree in related field.
              </li>
              <li>Prior administrative experience. </li>
              <li>Excellent computer skills, especially typing. </li>
              <li>Attention to detail.</li>
              <li> Must be able to Speak both English and French.</li>
              <li> Desire to be proactive and create a positive experience for others.</li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Administrative Assistant - Burkina Faso</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Finance Associate"
          location="Ivory Coast, Burkina Faso and Togo"
        >

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>
                Processing, verifying and posting transactions with clients.
              </li>
              <li> Performing Account reconciliations.</li>
              <li> Maintaining records regarding payments and account statuses.</li>
              <li> Ensuring timely billing and collection of payments due.</li>
              <li>Performing administrative and clerical tasks.</li>
              <li>Generating reports and statements for internal use.</li>
              <li>Other accounts role as and when support is needed. </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications/Expereience</b>
            </p>
            <ul className="list-careers">
              <li>
                ICA finalist/Degree in Accounting with at least 4 years of practical experience in the logistics  sector and credit control.
              </li>
              <li> Must have sufficient knowledge in Accounting Software.</li>
              <li> High level of accuracy and efficiency. </li>
              <li>Ability to build relationships with clients and internal departments.</li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b>  Finance Associate  - <i>Country</i></b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Finance Associate - Credit Control"
          location="Ghana"
        >

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>
                Processing,verifying and posting transactions with clients.
              </li>
              <li> Performing thorough background check for all new and existing account and maintaining credit limits.</li>
              <li> Maintaining records regarding payments and account statuses.</li>
              <li> Ensuring timely billing and collection of payments due.</li>
              <li>Performing administrative and clerical tasks.</li>
              <li>Generating reports and statements for internal use.</li>
              <li>Other accounts role as and when support is needed. </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications/Expereience</b>
            </p>
            <ul className="list-careers">
              <li>
                ICA finalist/Degree in Accounting with at least 4 years of practical experience in the logistics  sector and credit control.
              </li>
              <li> Must have sufficient knowledge in Accounting Software.</li>
              <li> High level of accuracy and efficiency. </li>
              <li>Ability to build relationships with clients and internal departments.</li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Finance Associate - Credit Control - Ghana</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Finance Manager"
          location="Ivory Coast and Manager"
        >

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>
                Managing the processing of transporter invoices and timely payments to transporters.
              </li>
              <li> Managing receivables and ensuring timely payments from the cargo owners within the agreed terms.</li>
              <li> Ensuring prompt, daily data entry and process improvement of the Gotruck Master Sheet.</li>
              <li> Acting as company treasurer to monitor and manage bank accounts, disbursements and  receivables. </li>
              <li>Send daily trip reports.</li>
              <li>Preparing monthly financial reports by 2nd of every month.</li>
              <li>Updating the Bank balances on daily basis. </li>
              <li>Reporting directly to the Head of Financial Planning -Africa Region on all finance related  matters. </li>
              <li>May be called to do duties outside your JD as business arises. </li>

            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications/Expereience</b>
            </p>
            <ul className="list-careers">
              <li>
                ICA finalist/Degree in Accounting with at least 4 years of practical experience in the logistics sector  and credit control.
              </li>
              <li> Must have sufficient knowledge in Accounting Software.</li>
              <li> High level of accuracy and efficiency. </li>
              <li>Ability to build relationships with clients and internal departments.</li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Finance Manager  - <i>Country</i></b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Backend Engineer"
          location="Nigeria, India"
        >

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>
                Provide proactive technology solutioning support in the analysis, design, planning, and governance of programmes, projects and change initiatives.
              </li>
              <li>
                Produce high quality deliverables by selecting and applying appropriate methods and standards in order to:
                  <b>  a. </b> Develop solution recommendations.
                  <b>  b. </b> Apply knowledge of technology options and
                  <b>  c. </b> Survey market landscape for solution insights, direction, and vendors, as required.

              </li>
              <li> Assists other software engineers, analysts, and designers in conceptualizing and developing new software programs and applications.</li>
              <li> Provide input into project and resource plans and support business case production.</li>
              <li> Oversee solution development and act as the bridge between the business and </li>
              <li>Technology development and support functions. Ensure the technologies developed and deployed are fit for purpose and meet the business requirements.</li>
              <li>Identify and implement opportunities for innovation and continuous improvement for the Press to benefit from the strategic application of technology. </li>
              <li>Define, communicate, lead and role model the required cultural and behavioural change. </li>

            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Requirements</b>
            </p>
            <ul className="list-careers">
              <li>
                Broad understanding of the Enterprise Architecture and technology landscape.
              </li>
              <li>
                Strong ability to problem-solve, debug, and understand pertinent performance metrics.
              </li>
              <li> Solution architecture development in a complex geographical / functional matrix organization.</li>
              <li> Communicating and inspiring confidence at a project level with both technical and nontechnical audiences.</li>
              <li> Comfort working within agile methodologies and experienced in estimation and time management. </li>
              <li> Ability to simplify and communicate complex concepts and information.</li>
              <li> Deep understanding of fundamental database concepts – relational (SQL) database, non-relational (NoSQL) database and ORMs/ODMs using MySQL & MongoDB. </li>
              <li> Deep expertise in one or more programming language Java, PhP, Node JS, GoLang,  </li>
              <li> Deep expertise in cloud ready application development methods using Dockers and Kubernetes.  </li>
              <li> Deep understanding of messaging queue, Kafka, RabbitMq, Spark and other apache product families.  </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications/Expereience</b>
            </p>
            <ul className="list-careers">
              <li>
                Bachelor’s degree in Computer Science or related field.
              </li>
              <li> Working knowledge of software engineering collaboration tools.</li>
              <li> High level of accuracy and efficiency. </li>
              <li> Strong preference for test-driven-development (TDD) and understands its importance.</li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Backend Engineer</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Mobile Engineer"
          location="Nigeria, India"
        >

          <div className="responsibility padding-1 ">
            <p>
              As a Flutter Developer on our team, you will create multi-platform apps for iOS and Android using Google's Flutter development framework. Occasionally this will require native iOS and/or Android development.
            </p>
            <br />
            <p>
              The primary focus will be on creating new experiences and maintaining all the apps under our management. This is an opportunity to work on the preeminent Flutter app, which has been featured numerous times by Google, Apple, and major media outlets.
            </p>
            <br />
            <p>
              Deep experience contributing to and managing high-scale production mobile apps for iOS and/or Android is required. You must have previous experience in iOS and Android development.
            </p>

          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>Unit testing: Be responsible for maintaining and expanding the feature set of application.</li>
              <li>Own individual modules and act as the technical SME for them.</li>
              <li>Work with great Engineers and solve difficult problems.</li>
              <li>Learn from skilled veterans on building software and get guidance on your career growth.</li>
              <li>Move and adapt to change at a rapid pace.</li>
              <li>Interface with creative, business, and engineers alike.</li>
              <li>Quick learner with passion to learn and adapt to new technologies.</li>
              <li>Excellent verbal and written communication skills and being a team player.</li>
              <li>Attention to details and striving for perfection.</li>
              <li>Honest, mature, committed and ensure a high level of communication.</li>

            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Desired Experience</b>
            </p>
            <ul className="list-careers">
              <li>Dart (Flutter). </li>
              <li>Swift,  kotlin or Java is a plus.</li>
              <li>Previous experience with Google Maps and other google apis.</li>
              <li>CI/CD. </li>
              <li>MVVM architectures.</li>
              <li>BLOC / Redux state management. </li>
              <li>Integrations with 3rd party APIs and/or creation of APIs. </li>
              <li>Firebase platform (especially Cloud Firestore). </li>
              <li>Any additional software languages. </li>
              <li>Prior agency experience and appreciation of visual and product design a strong plus. </li>
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Mobile Engineer </b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Senior QA Engineer"
          location="Nigeria, India"
        >

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li> Work with product owners/developers who are remote/onsite to understand and groom the requirements / stories.</li>
              <li> Participate in test case / test plan creation and reviews.</li>
              <li> Ability to debug and troubleshoot code.</li>
              <li> Great understanding of Microservices,APIs, HTTP & HTTPs protocols.</li>
              <li> Demonstrated experience in leading QA effort on large-scale software projects or deliverables.</li>
              <li> Should be a gatekeeper for QA.</li>
              <li> Participate in root cause analysis and reduce gaps in testing there by reducing defect leakage to production.</li>
              <li> Maintain and publish QA metrics for the product releases.</li>
              <li> Work with the QA team in Maintaining the health of the tests on a continued basis by adhering to the QA best practices that are in place.</li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications</b>
            </p>
            <ul className="list-careers">
              <li>BS in Computer Science or equivalent technical field.</li>
              <li>ISTQB/Equivalent testing certification.</li>
              <li>Strong communication skills.</li>
              <li>Strong experience in database testing.</li>
              <li>Strong at manual testing.</li>
              <li>Multitasking.</li>
              <li>Quick learner.</li>
              <li>Good debugging skills.</li>
              <li>Strong API testing experience.</li>
              <li>Passionate about mobile apps & web applications.</li>
              <li>Good at automation testing (Web & Mobile).</li>

            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Senior QA Engineer</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Junior QA Engineer"
          location="Nigeria, India"
        >

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>Works within the product team to deliver on QA commitments.</li>
              <li> Reports back and works with a QA lead for any blockers or guidelines.</li>
              <li> Work with product owners who are remote/onsite to understand and groom requirements / stories.</li>
              <li>Participate in test case / test plan creation and reviews.</li>
              <li>Work with the various software engineering groups to increase test coverage.</li>
              <li>Should be a gatekeeper for QA.</li>
              <li>Participate in root cause analysis and reduce gaps in testing thereby reducing defect leakage to production.</li>
              <li>Maintain and publish QA metrics for the product releases.</li>
              <li>Work with the QA team in Maintaining the health of the tests on a continued basis by adhering to the QA best practices that are in place.</li>

            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications</b>
            </p>
            <ul className="list-careers">
              <li>BS in Computer Science or equivalent technical field.</li>
              <li>ISTQB/Equivalent testing certification.</li>
              <li>Strong communication skills.</li>
              <li>Basic SQL Knowledge.</li>
              <li>Strong at manual testing.</li>
              <li>Multitasking.</li>
              <li>Quick learner.</li>
              <li>Good debugging skills.</li>
              <li>Basic API testing knowledge.</li>
              <li>Passionate about mobile apps.</li>

            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> Junior QA Engineer</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="UX Design Lead"
          location="Nigeria, India"
        >

          <div className="responsibility padding-1 ">
            <p className="roles-title">
              <b>Job Description</b>
            </p>
            <p>
              A UX Design Lead at Gotruck researches, plans, and architects the user experience for our website, mobile apps and web apps. This person leads the creation of all our digital products completely from the user’s perspective.
            </p>
            <br />
            <p>
              The UX Design Lead devises interaction strategies in sync with our user goals and business goals, develops navigation and structure, designs wireframes or interactive prototypes, organizes content to make it user-centric, and tirelessly advocates for the needs and goals of real users.
            </p>
            <br />
            <p>
            This person will make strategic and tactical UX decisions related to design and usability as well as features and functions. The UX lead will also perform usability assessments and tests of interactive systems. The best candidate will possess outstanding creativity, a highly detailed nature, and the ability to help define and solve complex user interface problems.
            </p>
          </div>
          
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Responsibilities</b>
            </p>
            <ul className="list-careers">
              <p><u>Conceive, Plan and Lead the design of high-end, effective digital products</u><br />
              Create or assist with information architecture and UX design for complex interactive projects. Define digital strategies. Produce user flows, personas, wireframes, prototypes and UX requirements documentation.</p>
              <br />
              <p><u>Become a zealous “user” advocate</u><br />
              Be the one to speak for the user passionately in all spaces, both internally and externally. Work to become an expert in the field of user experience design and people-centered digital products. </p>
              <br />
              <p><u>Communicate externally and internally</u><br/>
                Facilitate internal team communication, bridging the gap between visual design, functional development, and content. Communicate the value of these disciplines to stakeholders (especially internal ones). Grow to lead customer/users engagements from a UX perspective.</p>


            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Required Skills</b>
            </p>
            <ul className="list-careers">
            <li><b>Experience with UX Research:</b> Thorough knowledge of how to carry out interviews, surveys and focus groups with our unique user base, for both initial research and usability testing purposes.</li>
            <li><b>A True Designer’s Eye:</b> Must be able to translate complex concepts and interactions into visually coherent wireframes and.or prototypes.</li>
            <li><b>Deep Empathy and Passion:</b> Strong interest in understanding our users and then leading the design of innovative solutions specifically for them.</li>
            <li><b>Software Skills:</b> Adobe XD, Figma, Invision and other prototyping tools.</li>
            <li><b>UX and User story Writing:</b> Must be proficient in writing clearly, concisely and coherently for our users to understand. Must also be able to translate research work into implementable user stories by the team.</li>
            <li><b>Detail-oriented:</b> You must be highly organized to be an excellent Information Architect.</li>
            <li><b>Independence:</b> The ability to make things happen with limited direction. Excellent proactive attitude, take-charge personality and “can-do” demeanor.</li>
            <li>
                <b>Code:</b> Should at least be familiar with standard coding languages for interactive products. (E.g. HTML, CSS, JavaScript, etc.) Ability to code is a plus, not required.
              </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Desired Skills</b>
            </p>
            <ul className="list-careers">
              <p>
                <b>Code:</b> Should at least be familiar with standard coding languages for interactive products. (E.g. HTML, CSS, JavaScript, etc.) Ability to code is a plus, not required.
              </p>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications</b>
            </p>
            <ul className="list-careers">
              <p>
                At least 2-3 years’ experience as an Information Architect or related user experience position. Demonstrable experience with information architecture for websites, mobile apps and web apps. If you lack this, you must WOW us with your innate understanding of digital product design and outstanding ability to grasp and execute the position’s requirements. 
              </p>
              <br/>
              <p>
                B.Sc, BA or higher expected but not required if work experiences are exceptional. Degrees may be from:
                <ul>
                  <li>Human-Computer Interaction (HCI)</li>
                  <li>Graphic Design</li>
                  <li>Psychology</li>
                  <li>Computer Science</li>
                </ul>
              </p>

            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics and
              if you think you are up for the challenge, we’d love to hear from
              you. Please send your CV to <OpenMail mail="careers@gotruck.com" color="black" />, with
              <b> UX Design Lead</b> as the subject.
            </p>
          </div>
        </Accordion>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
