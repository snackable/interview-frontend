import React from "react";
import fetch from "isomorphic-unfetch";

import FileList from "../../../components/FileList";
import FilesPage from "../../../components/FilesPage";
import Pagination from "../../../components/Pagination";
import redirect from "../../../utils/redirect";

const limit = 5;

const FileListPage = ({ files, page }) => {
  // existence of next page not guaranteed, but likely
  const hasNextPage = files.length === limit;

  return (
    <FilesPage>
      <FileList files={files} />
      <Pagination page={page} hasNextPage={hasNextPage} />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async ({ res, query }) => {
  const num = parseInt(query.num, 10);

  if (num) {
    const offset = num * limit;

    const resp = await fetch(
      `http://interview-api.snackable.ai/api/file/all?limit=${limit}&offset=${offset}`
    );
    const json = await resp.json();

    if (json.length === 0) {
      redirect(res, "/files/page/1");
    }

    return { files: json, page: num };
  } else {
    redirect(res, "/files/page/1");
  }
};

export default FileListPage;
