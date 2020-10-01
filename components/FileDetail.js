import React from 'react';

export default ({ file }) => {

  if (!file) {
    return null;
  }

  return (
    <table className="border-collapse border-2 border-gray-500">
      <tbody>
        {Object.keys(file).map((key) => (
          <tr key={key}>
            <td className="border border-gray-400 px-4 py-2">
              {key}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {file[key]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
