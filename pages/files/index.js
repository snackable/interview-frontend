import React, { useState, useEffect, useMemo } from "react";
import FilesPage from "../../components/FilesPage";
import FileList from "../../components/FileList";
import FilePaginaton from "../../components/FilePagination";
import FileFilter from "../../components/FileFilter";
import Loading from "../../components/Loading";
import { loadFiles } from '../../api'

const FileListPage = ({ files, pageSize }) => {
  const [pageFiles, setPageFiles] = useState(files);
  const [loadedFiles, setLoadedFiles] = useState({0: files});
  const [page, setPage] = useState(0);
  const [filterStatus, setFilterStatus] = useState('');

  // If the page changes load files if necessary
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

  // If there is a new page or loaded files set them as the ones to display
  useEffect(() => {
    setPageFiles(loadedFiles[page] || []);
  }, [loadedFiles, page]);

  // If current pages files are not loaded we can have the "loading" state
  const loading = useMemo(() => !loadedFiles.hasOwnProperty(page), [loadedFiles, page]);

  const filesToDisplay = useMemo(() => pageFiles.filter(file => filterStatus === '' || file.processingStatus === filterStatus), [pageFiles, filterStatus]);

  return (
    <FilesPage>
      <FileFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      {loading ?
        <Loading />
      :
        <FileList files={filesToDisplay} />
      }
      <FilePaginaton page={page} setPage={setPage} hasNext={pageFiles.length === pageSize} />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async () => {
  const pageSize = 5;
  const files = await loadFiles(0, 5);

  return { files, pageSize };
};

export default FileListPage;
