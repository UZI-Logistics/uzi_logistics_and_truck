import React, { useState, useRef, useEffect } from "react";
import pin from "../../images/pin-location.svg";

const Accordion = props => {
  const [active, setActive] = useState("");
  const contentRef = useRef(null);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    //get the height of the child's ref value
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  return (
    <div className="accordion-section">
      <div className="pointer accordion-title" onClick={toggleActive}>
        <div className="flex space-between">
          <span>
            {" "}
            <b>{props.title}</b>
          </span>
          <i className="fa fa-caret-down orange-color"></i>
        </div>
        {props.location !== "" ? (
          <span className="location flex ">
            <img src={pin} alt="" className="pd-1" loading="lazy" />
            <p>{props.location}</p>
          </span>
        ) : (
          ""
        )}
      </div>

      <div ref={contentRef} className="accordion-content">
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
