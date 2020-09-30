import React from "react";
import Head from "next/head";
// import "../styles/main.css";
import "./files-page.scss"

const FilesPage = ({ children }) => {
  return (
    <div className="files-page">
      <Head>
        <title>Snackable - File browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default FilesPage;
