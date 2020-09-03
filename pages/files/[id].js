import React from "react";
import FilesPage from "../../components/FilesPage";
import FileDetail from "../../components/FileDetail";
import { loadFile } from '../../api';

const FileDetailPage = ({ file }) => {
  console.log(file);

  return (
    <FilesPage>
      <FileDetail file={file} />
    </FilesPage>
  );
};

FileDetailPage.getInitialProps = async ({ req, query }) => {
  const file = await loadFile(query.id);

  return { file };
};

export default FileDetailPage;
