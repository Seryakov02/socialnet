import React from "react";
import { Pagination as Paginator } from "antd";

const Pagination = ({ totalUsersCount, pageSize, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <Paginator
        onChange={page => {
          onPageChanged(page);
        }}
        total={pages.length * 10}
      />
    </div>
  );
};

export default Pagination;
