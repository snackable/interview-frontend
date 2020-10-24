import Link from "next/link";

export default ({ file }) => {
  return (
    <Link href={`/files/${file.fileId}`}>
      <tr className="hover:bg-gray-100 cursor-pointer">
        <td className="border border-gray-400 px-4 py-2">{file.fileId}</td>
        <td className="border border-gray-400 px-4 py-2">
          {file.processingStatus}
        </td>
      </tr>
    </Link>
  );
};
