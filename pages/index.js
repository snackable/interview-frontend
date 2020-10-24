import redirect from "../utils/redirect";

const Index = () => null;

Index.getInitialProps = async ({ res }) => {
  redirect(res, "/files");
  return {};
};

export default Index;
