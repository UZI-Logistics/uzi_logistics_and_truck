import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { IntlProvider } from "react-intl";
import "./styles/App.scss";

import messages_en from "./components/translations/en.json";
// import messages_ha from "./components/translations/ha.json";
// import messages_sw from "./components/translations/sw.json";
// import messages_fr from "./components/translations/fr.json";
import { GET } from "./components/helpers/api";
import Loading from "./Loading";
import { initGA, PageView, setProperties } from "./components/helpers/tracking";

// Lazy load routes
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Services"));
const Careers = lazy(() => import("./components/Careers/Careers"));
const UZICare = lazy(() => import("./components/KoboCare/UZICare"));
const TradeIn = lazy(() => import("./components/TradeIn/TradeIn"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Pricing = lazy(() => import("./components/Pricing/Pricing"));
const Terms = lazy(() => import("./components/Terms-Conditions/Terms"));
const Privacy = lazy(() => import("./components/Terms-Conditions/Privacy"));

const messages = {
  en: messages_en,
  // fr: messages_fr,
  // ha: messages_ha,
  // sw: messages_sw,
};

const App = () => {
  const [language] = useState(
    window.navigator.language !== undefined
      ? window.navigator.language.split(/[-_]/)[0]
      : "en"
  );

  const [ip, setIp] = useState("");

  useEffect(() => {
    if (!localStorage.locale) localStorage.locale = language;
    // setLanguage(localStorage.locale || "en");
  }, [language]);
  useEffect(() => {
    if (!localStorage.code) {
      GET(`https://api64.ipify.org/?format=json`)
        .then((res) => {
          setIp(res.data.ip);
        })
        .then(() => {
          GET(`${process.env.REACT_APP_IP_LOOKUP}${ip}`).then((res) => {
            localStorage.code = res.data.country_code || "NG";
          });
        });
    }
  }, [ip]);

  // Google aalytics
  if (process.env.NODE_ENV === "production") {
    initGA("UA-122568450-1");
    PageView();
    setProperties({ userId: "website-visitor", name: "UZI Visitor" });
  }

  AOS.init();
  // AOS.init({disable: 'mobile'});
  return (
    <IntlProvider
      locale={localStorage.locale}
      messages={messages[localStorage.locale]}
      defaultLocale="en"
    >
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/:code/:lang/" exact component={Home} />
            <Route
              path="/:code/:lang/about-uzi-logistics-&-trucking"
              exact
              component={About}
            />
            <Route path="/:code/:lang/services" exact component={Services} />
            <Route
              path="/:code/:lang/trade-in-your-truck"
              exact
              component={TradeIn}
            />
            <Route path="/:code/:lang/careers" exact component={Careers} />
            <Route path="/:code/:lang/contact" exact component={Contact} />
            <Route path="/:code/:lang/uzicare" exact component={UZICare} />
            <Route
              path="/:code/:lang/terms-and-conditions"
              exact
              component={Terms}
            />
            <Route
              path="/:code/:lang/privacy-policy"
              exact
              component={Privacy}
            />
            <Route path="/:code/:lang/pricing" exact component={Pricing} />
            <Redirect
              from="/"
              to={{
                pathname: `/${localStorage.code || "NG"}/${language}/`,
              }}
            />
          </Switch>
        </Suspense>
      </Router>
    </IntlProvider>
  );
};

export default App;
