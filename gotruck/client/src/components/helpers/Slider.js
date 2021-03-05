import React from "react";
import fmn from "../../images/fmn.png";
import honeywell from "../../images/honeywell.png";
import msc from "../../images/msc.png";
import dangote from "../../images/dangote.png";
import olam from "../../images/olam.png";
import dhl from "../../images/dhl.png";
import bua from "../../images/bua.png";
import emel from "../../images/emel.png";
import sinoma from "../../images/sinoma.png";
import lafarge from "../../images/lafarge.png";
import chisco from "../../images/chisco copy.png";
import ups from "../../images/ups.png";
import incl from "../../images/icnl.png";
import sifax from "../../images/sifax.png";

export const Slider = () => {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={fmn} height="55" width="70" alt=""  loading="lazy"/>
          </div>
          <div className="slide">
            <img src={honeywell} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={msc} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={dangote} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={olam} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={dhl} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={bua} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={emel} height="55" width="70" alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={sinoma} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={lafarge} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={chisco} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={ups} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={incl} height="55" width="70" alt="" loading="lazy"/>
          </div>
          <div className="slide">
            <img src={sifax} height="55" width="70" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};
