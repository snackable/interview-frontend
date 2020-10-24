import { useState } from "react";

import StatusesContextProvider from "../utils/StatusesContext";

const App = ({ Component, pageProps }) => {
  return (
    <StatusesContextProvider>
      <Component {...pageProps} />
    </StatusesContextProvider>
  );
};

export default App;
