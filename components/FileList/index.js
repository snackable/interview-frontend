import { useContext } from "react";

import { Context } from "../../utils/StatusesContext";

import ListItem from "./ListItem";

export default ({ files }) => {
  const { statuses } = useContext(Context);

  const visibleFiles = files.filter((file) =>
    statuses.includes(file.processingStatus)
  );

  return (
    <section>
      <table className="border-collapse border-2 border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">
              File ID
            </th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">
              Processing Status
            </th>
          </tr>
        </thead>
        <tbody>
          {visibleFiles.length > 0 ? (
            visibleFiles.map((file) => (
              <ListItem key={file.fileId} file={file} />
            ))
          ) : (
            <tr>
              <td colSpan="2">
                No files found. Adjust the filter or try another page.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};
