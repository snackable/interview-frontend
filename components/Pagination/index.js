import React from "react";
import Link from "next/link";

import "./Pagination.css";

const PaginationLink = ({ disabled = false, children, href }) => {
  if (disabled) {
    return <span className="navbar-button">{children}</span>;
  }

  return (
    <Link href={href}>
      <a className="navbar-button">{children}</a>
    </Link>
  );
};

export default ({ page, hasNextPage }) => {
  const hasPreviousPage = page > 1;

  return (
    <nav className="flex justify-between pt-4">
      <PaginationLink
        href={`/files/page/${page - 1}`}
        disabled={!hasPreviousPage}
      >
        Previous page
      </PaginationLink>
      <PaginationLink href={`/files/page/${page + 1}`} disabled={!hasNextPage}>
        Next page
      </PaginationLink>
    </nav>
  );
};
