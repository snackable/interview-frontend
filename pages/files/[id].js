import React from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../components/FilesPage/FilesPage";
import FileDetail from "../../components/FileDetail";
import { getFile, getSegments } from '../../api';

const FileDetailPage = ({ file, segments }) => {
  return (
    <FilesPage>
      <FileDetail file={file} segments={segments} />
    </FilesPage>
  );
};

FileDetailPage.getInitialProps = async ({ req, query }) => {
  const file = await getFile(query.id);
  const segments = await getSegments(query.id);
  return { file, segments };
};

export default FileDetailPage;
