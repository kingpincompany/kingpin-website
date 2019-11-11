import React from "react";
import Head from "next/head";

import "../style.css";

const Home = () => (
  <div>
    <Head>
      <title>Kingpin</title>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:height" content="1257" />
      <meta property="og:image:width" content="2400" />
      <meta property="og:title" content="Kingpin" />
      <meta property="og:description" content="hello@kingpin.fi" />
      <meta property="og:url" content="https://kingpin.fi" />
      <meta property="og:image" content="https://kingpin.fi/og-image.jpg" />
    </Head>
    <img src="/logo.png" alt="Kingpin" id="logo" />
    <a className="contact-link" href="mailto:hello@kingpin.fi">
      hello@kingpin.fi
    </a>
  </div>
);

export default Home;
