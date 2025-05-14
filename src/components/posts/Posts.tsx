import React from "react";
import useFetchData from "../../hooks/useFetch";

const Posts = () => {
  const { data, isLoading } = useFetchData("/wp-json/wp/v2/attributes");

  return (
    <React.Fragment>
      <div id="frontPagePosts">
        <h1>Attributes</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((post, index) => (
            <div
              className="post"
              key={index}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Posts;
