import React from "react";
// import fmn from "../../images/fmn.png";
import abtech from "../../images/png/ABTECH logistics logo white.png";
import fortune from "../../images/png/fortune global logo white.png";
import eminence from "../../images/png/Eminence logistics logo white.png";
import helem from "../../images/png/helem logistics logo white.png";
import moe from "../../images/png/mo-joe logistics logo white.png";

// import honeywell from "../../images/honeywell.png";
// import msc from "../../images/msc.png";
// import dangote from "../../images/dangote.png";
// import olam from "../../images/olam.png";
// import dhl from "../../images/dhl.png";
// import bua from "../../images/bua.png";
// import emel from "../../images/emel.png";
// import sinoma from "../../images/sinoma.png";
// import lafarge from "../../images/lafarge.png";
// import chisco from "../../images/chisco copy.png";
// import ups from "../../images/ups.png";
// import incl from "../../images/icnl.png";
// import sifax from "../../images/sifax.png";

export const Slider = () => {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={abtech} height="55" width="100" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={fortune} height="55" width="100" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={eminence} height="55" width="100" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={helem} height="55" width="100" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={moe} height="55" width="100" alt="" loading="lazy" />
          </div>
          {/* <div className="slide">
            <img src={dhl} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={bua} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={emel} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={sinoma} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={lafarge} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={chisco} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={ups} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={incl} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={sifax} height="55" width="70" alt="" loading="lazy" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
