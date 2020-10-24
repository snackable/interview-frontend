import redirect from "../../utils/redirect";

const FileListPage = () => {
  return null;
};

FileListPage.getInitialProps = async ({ res }) => {
  redirect(res, "/files/page/1");
};

export default FileListPage;
