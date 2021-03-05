import React from "react";
import { Helmet } from "react-helmet";
import { useRouteMatch } from "react-router-dom";

const SEO = ({ title }) => {
  const { url } = useRouteMatch();
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="UZI-logistics-&-truck, is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."
      />

      {/* <!-- Google / Search Engine Tags -->  */}
      <meta itemprop="name" content="UZI-logistics-&-truck" />
      <meta
        itemprop="description"
        content="UZI-logistics-&-truck is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."
      />
      <meta
        itemprop="image"
        content="https://data.UZI-logistics-&-truck.com/image/r200x200/i256.256/profile/1619529297131564421965.jpg"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://UZI-logistics-&-truck.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="UZI-logistics-&-truck" />
      <meta
        property="og:description"
        content="UZI-logistics-&-truck is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."
      />
      <meta
        property="og:image"
        content="https://data.UZI-logistics-&-truck.com/image/r200x200/i256.256/profile/1619529297131564421965.jpg"
      />

      {/* <!-- Twitter Meta Tags -->  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="UZI-logistics-&-truck" />
      <meta
        name="twitter:description"
        content="UZI-logistics-&-truck is a technology company that aggregates end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients to achieve an efficient supply chain framework."
      />
      <meta
        name="twitter:image"
        content="https://data.UZI-logistics-&-truck.com/image/r200x200/i256.256/profile/1619529297131564421965.jpg"
      />
      <meta name="twitter:site" content="@UZI-logistics-&-truck" />
      <meta name="twitter:creator" content="@UZI-logistics-&-truck" />
      <link
        rel="canonical"
        href={`https://www.uzi_logistics_&_trcking.com${url}`}
      />
    </Helmet>
  );
};

export default SEO;
