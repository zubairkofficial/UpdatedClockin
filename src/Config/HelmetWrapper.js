import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = () => {
  return (
    <Helmet>
      <link
        href="/plugins/global/plugins.bundle.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/css/style.bundle.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  );
};

export default HelmetWrapper;
