import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const blogData = blogs.posts;
  const [currentPaginationData, setCurrentPaginationData] = useState(
    blogData.slice(0, pageSize)
  );

  const updateRowsPerPage = (pageLength) => {
    setPageSize(pageLength);
  };

  const updatePage = (page) => {
    setCurrPage(page);
    setCurrentPaginationData(
      blogData.slice((page - 1) * pageSize, pageSize * page)
    );
  };

  const updatePageData = (pageLength) => {
    setCurrentPaginationData(blogData.slice(0, pageLength));
  };
  return (
    <div>
      <ul
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
      <Pagination
        currentPage={currPage}
        totalCount={blogs.posts.length}
        pageSize={Number(pageSize)}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
        updatePageData={updatePageData}
      />
    </div>
  );
}

export default BlogList;
