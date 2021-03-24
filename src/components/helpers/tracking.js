import ReactGA from "react-ga";

export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};

export const PageView = () => {
  ReactGA.pageview(window.location.href);
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const setProperties = ({ userId, name }) => {
  ReactGA.set({
    appName: "UZI-Logistics-and-Trucking Website",
    hostname: window.location.hostname,
    location: window.location.href,
    language: localStorage.locale,
    userId,
    appId: name,
  });
};
