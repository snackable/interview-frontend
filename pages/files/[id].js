import React from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../components/FilesPage";
import FileDetails from "../../components/FileDetails";

const FileDetailPage = ({ details, segments }) => {
  return (
    <FilesPage>
      <FileDetails details={details} segments={segments} />
    </FilesPage>
  );
};

FileDetailPage.getInitialProps = async ({ query }) => {
  const fileId = query.id;
  const detailsRequest = fetch(
    `http://interview-api.snackable.ai/api/file/details/${fileId}`
  );
  const segmentsRequest = fetch(
    `http://interview-api.snackable.ai/api/file/segments/${fileId}`
  );

  const [details, segments] = await Promise.all([
    detailsRequest,
    segmentsRequest,
  ]).then(async ([detailsResponse, segmentsResponse]) => {
    return [await detailsResponse.json(), await segmentsResponse.json()];
  });

  return { details, segments };
};

export default FileDetailPage;
