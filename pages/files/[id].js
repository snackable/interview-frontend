import React from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../components/FilesPage";

const FileDetail = ({ fileId }) => {
  return <FilesPage>detail page for file {fileId} </FilesPage>;
};

FileDetail.getInitialProps = async ({ req, query }) => {
  const fileId = query.id;
  return { fileId };
};

export default FileDetail;
