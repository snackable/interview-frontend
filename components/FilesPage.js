import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import "../styles/main.css";
import { Pagination, Filter } from "./ui";
import { getFiles } from '../store/actions';
import FileList from './FileList';

const limit = 5;
const filters = ['FINISHED', 'FAILED', 'PROCESSING'];

const FilesPage = () => {
  const dispatch = useDispatch();

  const files = useSelector(state => state.files);

  const [offset, setOffset] = useState(0);
  const [showPagination, setShowPagination] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getFiles());
  }, []);

  const load = async () => {
    const nextOffset = offset + limit;

    if (nextOffset >= 0) {
      const data = await dispatch(getFiles(nextOffset));

      if (data.length < limit) {
        setShowPagination(false);
      } else {
        setOffset(nextOffset);
      }
    }
  };


  if (!files || files.length === 0) {
    return null;
  }

  const filteredFiles = files.filter((file) => file.processingStatus === filter);

  return (
    <>
      <Filter
        name="processingStatus"
        values={filters.map((item) => ({ value: item, checked: filter === item }))}
        handleChange={(ev) => setFilter(ev.target.value)}
        clear={() => setFilter('')}
      />
      <FileList files={filter ? filteredFiles : files} />
      {(showPagination && files.length > 0) && <Pagination load={load} />}
    </>
  );
};

export default FilesPage;
