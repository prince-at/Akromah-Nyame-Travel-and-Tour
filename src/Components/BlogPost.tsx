import React from "react";
import { BlogList } from "./BlogData";
import "./Pages/BlogPost.css";



type Props = {}; 

const BlogPost: React.FC<Props> = () => {
   
  return (
    <div className="blog-post-page-container">
  
        <div className="blog-post">
      <div className="blog-post-outer">
        {BlogList.map((blog, index) => {
          return (
            <div className="blog-post-card" key={index}>
              <div>
                <img
                  src={blog.blogImage}
                  alt="Blog Image"
                  className="blog-image"
                />
                <p className="blog-date">{blog.blogDate}</p>
                <h1 className="title-blog">{blog.blogTitle}</h1>
                <p className="blog-description">{blog.blogDescription}</p>
                <button className="button-content"
                onClick={()=>
                    (window.location.href = blog.route)
                }>{blog.buttonText}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
        {/* <div className="blog-post-rows">
          <div className="blog-post-first-row"></div>
          <div className="blog-post-second-row"></div>
        </div> */}
    
    
     
     </div>
  );
};

export default BlogPost;
