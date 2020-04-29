import React from 'react';
import Head from 'next/head';
/** @jsx jsx */
import { jsx } from '@emotion/core'; // Include this import for global styles
import Dashboard from '../src/containers/Dashboard';
import withRedux from '../src/redux';

const PaymentTracker = () => {
  return (
    <React.Fragment>
      <Head>
        <title>cferestrada | Payment Tracker</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="p:domain_verify" content="7d47cbb36d8a429292d3f2476ff5db35" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/favicon-144.png" />
      </Head>
      <Dashboard />
    </React.Fragment>
  );
};

PaymentTracker.getInitialProps = async (ctx) => {
  const {
    query,
    res,
  } = ctx;

  // Hacky function to stop
  if (typeof window !== 'undefined' && !res) {
    window.location.reload();
    return;
  }

  // eslint-disable-next-line consistent-return
  return {
    query,
  };
};

export default withRedux(PaymentTracker);
