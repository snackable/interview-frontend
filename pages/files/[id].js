import React from "react";
import fetch from "isomorphic-unfetch";
import LayoutWrapper from '../LayoutWrapper';
import FileDetail from "../../components/FileDetail";

const FileDetailPage = ({ data }) => {
  return (
    <LayoutWrapper>
      <FileDetail file={data} />
    </LayoutWrapper>
  );
};

FileDetailPage.getInitialProps = async ({ req, query }) => {
  const fileId = query.id;
  const res = await fetch(`http://interview-api.snackable.ai/api/file/details/${fileId}`);
  const data = await res.json();

  return { data };
};

export default FileDetailPage;
