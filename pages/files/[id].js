import React from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../components/FilesPage";
import FileDetail from "../../components/FileDetail";

const FileDetailPage = ({ fileId }) => {
  return (
    <FilesPage>
      <FileDetail fileId={fileId} />
    </FilesPage>
  );
};

FileDetailPage.getInitialProps = async ({ req, query }) => {
  const fileId = query.id;
  return { fileId };
};

export default FileDetailPage;
