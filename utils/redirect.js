import Router from "next/router";

export default (res, to) => {
  if (res) {
    res
      .writeHead(302, {
        Location: to,
      })
      .end();
  } else {
    Router.push(to);
  }
};
