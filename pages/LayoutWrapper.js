import React from 'react';
import store from "../store";
import Head from "next/head";
import {Provider} from "react-redux";

export default ({ children }) => (
  <Provider store={store}>
    <div className="flex flex-col flex-auto items-center justify-center">
      <Head>
        <title>Snackable - File browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  </Provider>
)
