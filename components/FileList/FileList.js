import Link from "next/link";
import "./file-list.scss"

export default ({ files }) => {
  if (!files || !files.length) return null;
  return (
  <table className="border-collapse border-2 border-gray-500">
    <thead>
      <tr>
        <th>
          File ID
        </th>
        <th   >
          Processing Status
        </th>
      </tr>
    </thead>
    <tbody>
      {files.map(file => {
        return (
          <Link key={file.fileId} href={`/files/${file.fileId}`}>
            <tr className="row">
              <td className="border border-gray-400 px-4 py-2">
                {file.fileId}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {file.processingStatus}
              </td>
            </tr>
          </Link>
        );
      })}
    </tbody>
  </table>
)};
