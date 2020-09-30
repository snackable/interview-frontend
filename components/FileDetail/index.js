import { THead } from './thead';
import "./index.scss"

const BodyCell = ({ children }) => <td className='border border-gray-400 px-4 py-2'>{children}</td>;

export default ({ file, segments }) => {
    return (
        <table className='border-collapse border-2 border-gray-500'>
            <THead />
            <tbody>
                <tr className='row'>
                    <BodyCell>{file.fileId}</BodyCell>
                    <BodyCell>{file.fileName}</BodyCell>
                    <BodyCell>{file.seriesTitle}</BodyCell>
                    <BodyCell>
                        <audio controls className='audio-control'>
                            <source src={file.mp3Path} type='audio/mpeg' />
                        </audio>
                        {file.fileLength && <>(~{Math.round(file.fileLength / 60000)}m)</>}
                    </BodyCell>
                </tr>
            </tbody>
        </table>
    );
};