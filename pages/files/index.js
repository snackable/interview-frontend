import React from "react";
import fetch from "isomorphic-unfetch";
import FileList from "../../components/FileList";
import FilesPage from "../../components/FilesPage";

const FileListPage = ({ files }) => {
  return (
    <FilesPage>
      <FileList files={files} />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async () => {
  const resp = await fetch("http://interview-api.snackable.ai/api/file/all");
  const json = await resp.json();
  return { files: json };
};

export default FileListPage;
