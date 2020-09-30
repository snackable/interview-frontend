import React, { useState, useEffect, useMemo } from 'react';
import FileList from '../../components/FileList/FileList';
import FilesPage from '../../components/FilesPage/FilesPage';
import { getFiles } from '../../api';
import { FileFilter } from '../../components/FileFIlter/FileFilter';
import { Pagination } from '../../components/Pagination';
import { Loader } from '../../components/Loader/loader';

const FileListPage = ({ files, pageSize }) => {
    const [counter, setCount] = useState(0);
    const [loadedFiles, setFiles] = useState({ 0: files });
    const [filterStatus, setFilterStatus] = useState('');

    const isFile = () => counter in loadedFiles;

    const fetchData = async () => {
        let result = [];
        if (!isFile()) {
            result = await getFiles(pageSize * counter, pageSize);

            setFiles({
                ...loadedFiles,
                [counter]: result,
            });
        }
        if (!result.length) {
            setFiles({
                ...loadedFiles,
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, [counter]);

    const filteredFiles = useMemo(
        () =>
            loadedFiles[counter].filter(
                file => file.processingStatus === filterStatus || filterStatus === ''
            ),
        [loadedFiles, filterStatus]
    );

    const isLoading = useMemo(() => !isFile(), [loadedFiles, counter]);

    return isLoading ? (
        <Loader />
    ) : (
        <FilesPage>
            <FileFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
            <FileList files={filteredFiles} />

            <Pagination
                count={counter}
                pages={loadedFiles[counter]}
                pageSize={pageSize}
                setCount={setCount}
            />
        </FilesPage>
    );
};

FileListPage.getInitialProps = async () => {
    const pageSize = 5;
    const files = await getFiles(0, pageSize);

    return { files, pageSize };
};

export default FileListPage;
