import React, { useState, useEffect, useMemo } from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../components/FilesPage";
import FileList from "../../components/FileList";
import FilePaginaton from "../../components/FilePagination";
import Loading from "../../components/Loading";
import { loadFiles } from '../../api'

const FileListPage = ({ files, pageSize }) => {
  const [filesToDisplay, setFilesToDisplay] = useState(files);
  const [loadedFiles, setLoadedFiles] = useState({0: files});
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!loadedFiles.hasOwnProperty(page)) {
      (async () => {
        const files = await loadFiles(pageSize * page, pageSize);

        setLoadedFiles({
          ...loadedFiles,
          [page]: files
        });
      })();
    }
  }, [page]);

  useEffect(() => {
    setFilesToDisplay(loadedFiles[page] || []);
  }, [loadedFiles, page]);

  const loading = useMemo(() => !loadedFiles.hasOwnProperty(page), [loadedFiles, page]);

  return (
    <FilesPage>
      {loading ?
        <Loading />
      :
        <FileList files={filesToDisplay} />
      }
      <FilePaginaton page={page} setPage={setPage} hasNext={filesToDisplay.length === pageSize} />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async () => {
  const pageSize = 5;
  const files = await loadFiles(0, 5);

  return { files, pageSize };
};

export default FileListPage;
