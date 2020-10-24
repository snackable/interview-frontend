import { useContext } from "react";

import { Context, processingStatuses } from "../../utils/StatusesContext";

import ListItem from "./ListItem";

export default ({ files }) => {
  const { statuses, toggle } = useContext(Context);

  const visibleFiles = files.filter((file) =>
    statuses.includes(file.processingStatus)
  );

  return (
    <section>
      {processingStatuses.map((status) => (
        <label className="mr-2 cursor-pointer" key={status}>
          <input
            type="checkbox"
            checked={statuses.includes(status)}
            onChange={() => toggle(status)}
            className="mr-1"
          />
          {status}
        </label>
      ))}
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
          {visibleFiles.map((file) => (
            <ListItem key={file.fileId} file={file} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
