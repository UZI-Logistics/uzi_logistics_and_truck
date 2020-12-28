import React from "react";
import { Helmet } from "react-helmet";
import { useRouteMatch } from "react-router-dom";

const SEO = ({ title }) => {
  const { url } = useRouteMatch();
  return (
    <Helmet>
      <title>{title}</title>
      {/* <meta name="description" content="Kobo360 is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."/>
            
            <!-- Google / Search Engine Tags --> 
            <meta itemprop="name" content="Kobo360"/>
            <meta itemprop="description" content="Kobo360 is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."/>
            <meta itemprop="image" content="https://data.kobo360.com/image/r200x200/i256.256/profile/1619529297131564421965.jpg"/>

             <!-- Facebook Meta Tags -->
            <meta property="og:url" content="https://kobo360.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Kobo360" />
            <meta property="og:description" content="Kobo360 is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework." />
            <meta property="og:image" content="https://data.kobo360.com/image/r200x200/i256.256/profile/1619529297131564421965.jpg" />

            <!-- Twitter Meta Tags --> 
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Kobo360"/>
            <meta name="twitter:description" content="Kobo360 is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."/>
            <meta name="twitter:image" content="https://data.kobo360.com/image/r200x200/i256.256/profile/1619529297131564421965.jpg" />
            <meta name="twitter:site" content="@kobo_360" />
            <meta name="twitter:creator" content="@kobo_360" /> */}
      <link rel="canonical" href={`https://www.kobo360.com${url}`} />
    </Helmet>
  );
};

export default SEO;
