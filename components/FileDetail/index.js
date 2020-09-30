import { THead } from './thead';
import "./index.scss"

const BodyCell = ({ children }) => <td>{children}</td>;

export default ({ file, segments }) => {
    return (
        <table >
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