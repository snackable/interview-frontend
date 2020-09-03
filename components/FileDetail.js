const HeaderCell = ({ children }) => (
    <th className="border border-gray-400 px-4 py-2 text-gray-800">{children}</th>
);
const BodyCell = ({ children }) => (
    <td className="border border-gray-400 px-4 py-2">{children}</td>
);

export default ({ file }) => (
    <table className="border-collapse border-2 border-gray-500">
        <thead>
            <tr>
                <HeaderCell>
                    File ID
                </HeaderCell>
                <HeaderCell>
                    File name
                </HeaderCell>
                <HeaderCell>
                    Series title
                </HeaderCell>
                <HeaderCell>
                    File
                </HeaderCell>
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-gray-100 cursor-pointer">
                <BodyCell>
                    {file.fileId}
                </BodyCell>
                <BodyCell>
                    {file.fileName}
                </BodyCell>
                <BodyCell>
                    {file.seriesTitle}
                </BodyCell>
                <BodyCell>
                    <audio controls>
                        <source src={file.mp3Path} type="audio/mpeg" />
                    </audio>
                    {file.fileLength &&
                        <>(~{Math.round(file.fileLength/60000)}m)</>
                    }
                </BodyCell>
            </tr>
        </tbody>
    </table>
);
