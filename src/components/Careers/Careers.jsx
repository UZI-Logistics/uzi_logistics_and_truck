import React, { useEffect } from "react";
import logocolored from "../../images/logo-green.png";
import { FormattedMessage } from "react-intl";
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
 
    window.scrollTo(0, 0);
  });
  return (
    <>
      <SEO title="UZI-Logistics-&-Trucks | Careers" />
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
                defaultMessage="JOINING UZI-Logistics-&-Trucks"
              />
            </h1>
            <p>
              <FormattedMessage
                id="app.careers-caption"
                defaultMessage="Come work with us in UZI logistics and Trucking!"
              >
                {(txt) => (
                  <b>
                    <em>{txt}</em>
                  </b>
                )}
              </FormattedMessage>
            </p>
          </div>
        </div>
        <div className="flex careers-box">
          <span data-aos="zoom-in" className="careers-box__card">
            <FormattedMessage
              id="app.careers-text-1"
              defaultMessage="At UZI, we recruit, train, and retain the very best logistics and technical experts globally. 
              Yes! We give you chances to grow, thrive, and do what you love."
            />
            <FormattedMessage
              id="app.careers-text-3"
              defaultMessage="Prime for Opportunities"
            >
              {(txt) => <h3>{txt}</h3>}
            </FormattedMessage>

            <FormattedMessage
              id="app.careers-text-2"
              defaultMessage="We are young, agile, creative and professional, it’s an exciting time to make an impact. Join our unique 
              family as we drive your passion and with our commitment to your success, to provide excellent service. "
            />
            <br />
            <div className="line"></div>

            <FormattedMessage
              id="app.careers-text-4"
              defaultMessage="
                <ul>
                  <li>• Nigeria and Beyond: Rub elbows with people and cultures around the world.</li>
                  <li>• Training: We hire for attitude and train for skill.</li>
                  <li>•	Technology: We provide cutting edge solutions that aids global logistics and trucking</li>
                  <li>•	Global logistics: An industry that’s evolving, fast-moving, challenging, and rewarding.</li>
                  <li>• Solid financial ground: We’re not for sale and have no long-term debt.</li>
                  <li>•	Community connections: We’re passionate about helping out the communities where we live and work.</li>
                  <li>•	Competitive benefits: We offer a wide range of benefits to support the well-being of you and your family, 
                including health care, financial security, paid time off and education reimbursement.</li>
                </ul>"
              values={{
                ul: (...msg) => <ul>{msg}</ul>,
                li: (...msg) => <li>{msg}</li>,
              }}
            />
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
          title="UZI’s Core Competencies"
          location="General - All-Over "
        >
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Exceptional Customer Service:</b>
            </p>
            <ul className="list-careers">
              <li>
                Exceeds customer expectations by anticipating, understanding,
                and meeting needs. Is proactive and when issues arise, is timely
                and resolute in solving problems, including escalating to
                management when necessary. Builds rapport and exhibits empathy
                during interactions, and consistently strives to improve
                customer satisfaction with customers. (This skill expectation
                applies both externally (customers, service providers) and
                internally (other UZI’s offices/employees).
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Job Execution:</b>
            </p>
            <ul className="list-careers">
              <li>
                Consistently completes quality work that matches job
                expectations. Is committed to operational excellence and
                continuous improvement for own job function and across the
                network. All activities are compliant with company
                policies/procedures and code of business conduct and with
                government regulations.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Reliability: </b>
            </p>
            <ul className="list-careers">
              <li>
                Consistently meets deadlines. Is punctual and can be relied on
                for planning purposes. Is organized, manages own time
                effectively and can prioritize.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Collaboration: </b>
            </p>
            <ul className="list-careers">
              <li>
                Displays a willingness to accomplish not only his/her own job
                responsibilities without the need for constant prodding but is
                willing, without request, to aid and assist others to the
                benefit of the company and/or customers. Works in harmony with
                superiors and fellow workers without incident or delay.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Communication: </b>
            </p>
            <ul className="list-careers">
              <li>
                Effectively listens to others and communicates (verbal and
                written) in a professional manner, both internally and
                externally. Provides relevant and timely information to
                co-workers, customers and service providers. Answers phone calls
                and responds to voicemails, emails and other communication
                according to UZI’s standards.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Culture: </b>
            </p>
            <ul className="list-careers">
              <li>
                Exhibits and promotes the company’s 10 cultural attributes:
                Appearance, Attitude, Confidence, Curiosity, Excellence,
                Integrity, Pride, Resolute, Sense of Humor, and Visionary.
              </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Personal Growth and Development: </b>
            </p>
            <ul className="list-careers">
              <li>
                Participates in training within the company’s guidelines,
                completing at least 52 hours of relevant training per year.
                Completes required training in a timely manner with minimal
                reminders. Pursues professional development goals for self,
                including participating in a development plan as appropriate.
              </li>
            </ul>
          </div>
          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics
              and if you think you are up for the challenge, we’d love to hear
              from you. Please send your CV to{" "}
              <OpenMail
                mail="careers@uzi_logistics_&_trucks.com"
                color="black"
              />
            </p>
          </div>
        </Accordion>
        <Accordion title="Agent - Customs Brokerage " location="Lagos, Nigeria">
          <div className="responsibility padding-1 ">
            <p className="roles-title">
              <b>Key Responsibilities</b>
              <h4>Full - Time</h4>
            </p>
            <p>
              <h5>Job Description </h5>
              Provide customer service in monitoring freight to ensure timely
              arrival, accurate and timely customs declarations for final
              delivery to consignee within specified / agree time frame.{" "}
            </p>
            <ul className="list-careers">
              <li>
                Follow up on inbound shipments and ensure timely delivery to
                consignee.
              </li>
              <li>
                Monitor flight/vessel arrivals and ensure timely feedback on
                arrival information to customer
              </li>
              <li>
                Ensure to meet all Pharmaceutical & Healthcare requirement as
                per GDP/GDPMDS regulations and directives, as required.
              </li>
              <li>
                Ensure that discrepancy related to shipment is reported to
                customers and origin offices promptly
              </li>
              <li>
                Complete customs competency test and able to file for customs
                entry whenever necessary/required
              </li>
              <li>
                Ensure all paperwork are in proper order that meet customer
                profile and comply to local rules and regulations
              </li>
              <li>
                Ensure Key Performance Indicators on customs entries are met
                within customers’ requirements. Comply with Singapore Customs /
                Competent Authorities rules and regulations imposed as well as
                adhering compliance to UZI’s policy and expectations
              </li>
              <li>
                Achieve 100 % customer satisfaction at all times through
                understanding customers’ needs and handling requirements as well
                as ensuring 100% compliance
              </li>
              <li>
                Respond to customer complaint and query with a sense of urgency
                and provide solution or improvement plan whenever possible.
              </li>
              <li>Answer all incoming calls promptly and politely</li>
              <li>Develop good rapport with the customers</li>
              <li>
                Ensure all data are entered into system timely and accurately
              </li>
              <li>
                Ensure that freight and handling charges are billed to customers
                timely and accurately{" "}
              </li>
              <li>Prepare and submit reports timely whenever required </li>
              <li>
                Take up additional tasks as required to meet department’s needs
              </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Other skills</b>
            </p>
            <ul className="list-careers">
              <li>
                Good working knowledge in computer software applications
                including E-Mail, Excel, Word and PowerPoint
              </li>
              <li>Good interpersonal and problem-solving skills</li>
              <li>
                Good communications skills with good command in written and
                spoken English
              </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <ul className="list-careers">
              <b>
                In view of COVID19, only those currently residing in Nigeria
                need to apply.
              </b>{" "}
              Successful candidate must pass the company's defined background
              check. <br />
              All your information will be kept confidential according to
              Nigerian Labor guidelines.
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics
              and if you think you are up for the challenge, we’d love to hear
              from you. Please send your CV to{" "}
              <OpenMail
                mail="careers@uzi_logistics_&_trucks.com"
                color="black"
              />
              , with
              <b> Agent - Customs Brokerage</b> as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="District Business Operations - Specialist"
          location="Lagos - Nigeria"
        >
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Key Responsibilities</b>
              <h4>Full - Time</h4>
              <p>
                This is a multi-role position with a focus on District Business
                Operations.
                <b>
                  <em>
                    District Business Operations - (Approximately 50% of time
                    investment)
                  </em>
                </b>
                <br />
                This section lists job-specific tasks and duties, such as the
                ones listed below, that are completed on a regular basis by the
                employee.
              </p>
            </p>
            <ul className="list-careers">
              <li>
                Support the creation and execution of the District’s Tactical
                Business Plan, in an effort to ensure efficiency, world-class
                service, and global consistency.
              </li>
              <li>
                Drive full and proper usage of existing systems and tools by
                operations.
              </li>
              <li>
                Introduce new processes, the underlying strategy, and associated
                performance expectations to the district in conjunction with
                receiving and rolling out new operating systems and related
                tools.
              </li>
              <li>
                Train and coach operations in the skill of providing meaningful
                feedback on new processes, systems, and tools.
              </li>
              <li>
                Support with documenting processes, identify areas of
                improvement or waste and create a project plan towards
                improvement
              </li>
              <li>
                Drive the GBO strategy and objectives and collaborate with other
                districts, regional, and global resources to build consistency
                in all processes leading to world-class service.
              </li>
              <li>
                {" "}
                Be vocal in addressing local market conditions and regulations
                that may hinder the district from meeting the global standards.
                Strive to find opportunities to align with the global standard
                despite local variances.
              </li>
              <li>
                Collaborate with local management to identify opportunities to
                improve quality, service, compliance, and profitability through
                the pursuit of efficiency and consistency by identifying and
                prioritizing problem areas through communication with
                operational staff and via [observation, process mapping, timing
                studies, and self-assessments] process analysis methods
              </li>
              <li>
                Provide training for every employee in the art and application
                of the Process Management Fundamentals, through teaching and
                mentoring.
              </li>
              <li>
                Monitor performance standards and District Excellence metrics
                and promote behaviors and processes to close the performance gap
                within the district.
              </li>
              <li>
                Coach the district in root cause analysis and effective problem
                solving when identifying and closing corrective and preventative
                actions.
              </li>
              <li>
                Drive and support the Product teams with the closure of all open
                CAPAs (Corrective and Preventive Assessments)
              </li>
              <li>
                Align with Regional Business Operations and work alongside the
                district and regional Enterprise Data & Analytics and IS teams
                (if applicable) to deliver reporting and automation tools to the
                field - driving efficiency and productivity gains.
              </li>
              <li>
                Communicate the measurable impact process improvements have had
                on our employees, customers, and finances.
              </li>
              <li>
                Drive the Management Review Meeting within the district and
                following the meeting minute requirements, as well as the
                follow-up meetings to discuss progress on action items.
              </li>
              <li>
                Timely completion of the District's self-assessment and drive
                the District's preparation for our annual Operational Standards
                Audit.
              </li>
              <li>
                Drive and support Active Process Management within the District
              </li>
              <li>
                Good Project Management skills and the management of multiple
                projects are essential in this role.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Branch Trainer - (Approximately 40% of time investment)</b>
            </p>
            <ul className="list-careers">
              <li>
                Management of all Professional Development Center related
                district reporting
              </li>
              <li>
                {" "}
                Coordination and scheduling of all branch/regional trainer-led
                training.
              </li>
              <li>
                Coordination of all employee development programs and
                initiatives.
              </li>
              <li>Facilitate training to the branch as scheduled</li>
              <li>
                Employee Satisfaction Committee Sponsor and employee recognition
                coordinator
              </li>
              <li>
                Become the District's Professional Development Center
                Application expert
              </li>
              <li>District Smart Recruiter Coordinator and administrator</li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>T&I Agent - (Approximately 10% of time investment)</b>
            </p>
            <ul className="list-careers">
              <li>
                Oversight of onboarding of all new multi-product business for
                the district.
              </li>
              <li>
                {" "}
                Communicate with customers and create a Transition &
                Implementation checklist to cover all relevant aspects of their
                operations.
              </li>
              <li>
                Weekly communication of Transition & Implementation status for
                all active transitions.
              </li>
              <li>
                Support in the successful on-boarding of new multi-product
                accounts.
              </li>
              <li>
                Communication of all client expectations & operational
                requirements to relevant teams within the district.
              </li>
              <li>
                Coordinate with management to prepare initial Quarterly Business
                Reviews 3 months following the start of business.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <h3>Core Competencies</h3>
            </p>
            <ul className="list-careers">
              <li>
                <b>Analytical</b> <br />
                Has the ability to problem solve using quantitative and
                qualitative analysis to understand process issues. Can map out
                processes and clearly identify areas for improvement and
                efficiency opportunities. Comfortable analyzing large sets of
                complex data.
              </li>
              <li>
                <b>Influential</b> <br /> Can promote lean thinking and is
                skilled in implementing change. Builds and maintains long-term
                relationships with a district that results in positively
                influencing employee performance. Inspires others by
                challenging, encouraging and guiding them through effective
                training and strong presentation skills. Is flexible and adapts
                to unexpected events.
              </li>
              <li>
                <b>Pursuit of Excellence </b> <br />
                Is strong willed and meets resistance as a challenge to
                overcome. Passionate about lean mindset and willing to
                continuously learn and evolve. Focused on improving customer
                service and employee experience.
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Qualifications</b>
            </p>
            <ul className="list-careers">
              <li>
                Degree (preferred level): Bachelor's degree or equivalent
                combination of education and experience
              </li>
              <li>Must be legally authorized to work in Nigeria</li>
              <li>
                Minimum 3+ years of experience in operations or the equivalent
                in a role such as district business operations,
                management-trainee, etc. within UZI’s, or minimum of 4+ years in
                quality control within the logistics industry.
              </li>
              <li>Strong negotiation skills</li>
              <li>
                Exhibit a leadership style that empowers, coaches, mentors, and
                fosters a cohesive team environment always prioritizing employee
                satisfaction
              </li>
              <li>Customer Satisfaction oriented</li>
              <li>
                Strong interpersonal and communication skills, ability to
                communicate at all levels written and oral communication and
                presentations
              </li>
              <li>
                Ability to relate and influence clients, service providers, and
                employees at all levels
              </li>
              <li>Strong time management skills and attention to detail</li>
              <li>Problem solving and business analytical skills</li>
              <li>
                Understanding of Lean principles and effective problem-solving
                techniques
              </li>
              <li>
                Strong project management skills and ability to manage multiple
                projects at the same time.
              </li>
              <li>Commitment to Exemplify our culture at all times</li>
              <li>Commitment to self-development</li>
              <li>
                Strong computer skills, including proficient knowledge of all
                Microsoft Office applications; specifically Excel, PowerPoint,
                Word, and willing to learn other applications such as Power BI,
                SharePoint, etc.
              </li>
              <li>Self-driven personality and can work autonomously</li>
              <li>
                Ability to complete work within standard procedures, guidelines,
                and office policies
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <ul className="list-careers">
              <b>
                In view of COVID19, only those currently residing in Nigeria
                need to apply.
              </b>{" "}
              Successful candidate must pass the company's defined background
              check. <br />
              All your information will be kept confidential according to
              Nigerian Labor guidelines.
            </ul>
          </div>
          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics
              and if you think you are up for the challenge, we’d love to hear
              from you. Please send your CV to{" "}
              <OpenMail
                mail="careers@uzi_logistics_&_trucks.com"
                color="black"
              />
              , with
              <b>
                District Business Operations - <i>Specialist</i>
              </b>{" "}
              as the subject.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Customer Service Executive "
          location="Lagos, Nigeria"
        >
          <div className="responsibility padding-1 ">
            <h3>Full Time</h3>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Key Responsibilities</b>
            </p>
            <ul className="list-careers">
              <li>Ensure smooth and timely customs process flow.</li>
              <li>Ensure compliance at all times to regulations.</li>
              <li>
                Assist with verification of customs declaration information and
                the submission of such to the customs authority.
              </li>
              <li>
                Transfer customs declaration information from documents, or
                other sources into the customs entry system to allow for the
                build of a valid customs declaration.
              </li>
              <li>
                Understand all the elements of the import and export customs
                Desk Level Operating Procedure and correctly interpret this
                information to fulfill our customer´s instructions and
                expectations.
              </li>
              <li>Ensure accurate and timely client billing.</li>
              <li>Track and Trace Custom files and reporting.</li>
              <li>
                Ensure accurate and timely data entry into our operational
                system.
              </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Desired Experience / Qualifications</b>
            </p>
            <ul className="list-careers">
              <li>
                Customer Service: 6 months to 1 year experience and/or training;
                or equivalent combination of education and experience
              </li>
              <li>Fluent in English</li>
              <li>College degree or educational equivalent</li>
              <li>Good computer skills (Excel, Word, PowerPoint)</li>
              <li>Pro-active, strong organizational skills </li>
              <li>Strong desire to learn</li>
              <li>
                Effective interpersonal skills, including proven abilities to
                listen, comprehend, effectively communicate clearly and
                concisely to obtain positive results
              </li>
              <li>
                Understanding of transportation documentation and terms is a
                plus
              </li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <ul className="list-careers">
              <b>
                In view of COVID19, only those currently residing in Nigeria
                need to apply.
              </b>{" "}
              Successful candidate must pass the company's defined background
              check. <br />
              All your information will be kept confidential according to
              Nigerian Labor guidelines.
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics
              and if you think you are up for the challenge, we’d love to hear
              from you. Please send your CV to{" "}
              <OpenMail
                mail="careers@uzi_logistics_&_trucks.com"
                color="black"
              />
              , with
              <b> Customer Service Executive </b> as the subject.
            </p>
          </div>
        </Accordion>

        <Accordion title="Account Manager" location="Lagos, Nigeria">
          <div className="responsibility padding-1 ">
            <h4>Full Time</h4>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Job Description</b>
              <p>
                <b>
                  <em>Scope of Position</em>:
                </b>
                To maintain ownership of existing identified house accounts, to
                improve the level of customer service, while increasing business
                opportunities.
              </p>
            </p>
            <ul className="list-careers">
              <b>Duties and Responsibilities</b>
              <li>Strengthen relationships with existing house accounts.</li>
              <li>
                Penetrate organizational structure for house accounts and
                develop relationships at all levels beyond main point of
                contact.
              </li>
              <li>
                Understand customers’ business and strategy and our role with
                the customer.
              </li>
              <li>Ensure customer satisfaction and follow up.</li>
              <li>
                Communicate service issues to Department Managers/Supervisors.
              </li>
              <li>
                Action items lists maintained and updated weekly for follow up
                items.
              </li>
              <li>
                Identify opportunities and grow business from existing house
                accounts.
              </li>
              <li>
                Assist with collections when needed. • Manage client profiles -
                separated out by location.
              </li>
              Continually seek improvement in procedures and services to create
              more efficient and cost effective operations.
              <li>
                10 calls per week. Preliminary schedule due by Monday afternoon.
                Mondays & Fridays are for setup and follow up. Tuesday-Thursday
                are for calls.{" "}
              </li>
              <li>
                Build territory maps showing number of accounts located in each
                city – update monthly
              </li>
              <li>
                Team sell input & management for significant calls. • Involve
                sales and operations at appropriate times.
              </li>
              <li>
                Share weekly schedule with all Departments to help coordinate
                and participate in joint account visits.
              </li>
              <li>
                Turn major business opportunities and proposals over to Sales
                and operational issues to Ops.
              </li>
              <li>
                Management of Business Reviews – goal is to have a minimum of
                one per account per year{" "}
              </li>
              <li>
                {" "}
                Continually seek improvement in procedures and services to
                create more efficient and cost effective operations.
              </li>
              <li>
                Assume lead responsibility for the efficient delivery of all
                local (branch) services.
              </li>
              <li>
                Assist, and if needed, spearhead problem resolution for issues
                outside of local branch.
              </li>
              <li>
                Insure that a functioning and agreed upon invoicing - payment
                process is in place.
              </li>
              <li>
                Meet with the local customer to maintain customer information
                and satisfaction.{" "}
              </li>
              <li>
                Be dedicated to the success of UZI’s and the program using
                ethical business practices, personal commitment, passion &
                sacrifice, and an obsession with the fundamental details of
                running the business!
              </li>
            </ul>
          </div>

          <div className="need-from padding-1">
            <p className="roles-title">
              <b>Desired Experience / Qualifications</b>
            </p>
            <ul className="list-careers">
              <li>University or equivalent business qualifications</li>
              <li>Strong analytics skills</li>
              <li>Proven project management skills</li>
              <li>Strong presentation skills</li>
              <li>Proficient in MS Office and CRM software</li>
              <li>Knowledge of required UZI’s operating systems</li>
              <li>
                Ability to create/write customer requirements clearly for use by
                other UZI’s employees
              </li>
              <li>Knowledge of UZI’s product and services</li>
              <li>Minimum 3 years’ industry experience</li>
              <li>Charismatic with an ability to connect</li>
              <li>Proven problem solving and interpersonal skills </li>
              <li>Proven work experience in business development</li>
            </ul>
          </div>
          <div className="need-from padding-1">
            <ul className="list-careers">
              <b>
                In view of COVID19, only those currently residing in Nigeria
                need to apply.
              </b>{" "}
              Successful candidate must pass the company's defined background
              check. <br />
              All your information will be kept confidential according to
              Nigerian Labor guidelines.
            </ul>
          </div>

          <div className="conclusion padding-1">
            <p>
              If you want to be part of the revolution to transform logistics
              and if you think you are up for the challenge, we’d love to hear
              from you. Please send your CV to{" "}
              <OpenMail
                mail="careers@uzi_logistics_&_trucks.com"
                color="black"
              />
              , with
              <b> Account Manager</b> as the subject.
            </p>
          </div>
        </Accordion>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
