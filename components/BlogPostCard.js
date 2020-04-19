import React, { Fragment } from "react";
import Link from "next/link";
import Excerpt from "./Excerpt";
export function excerpt(html, len) {
  let text = html.replace(/<[^>]*>/g, "");
  return text.substr(0, len) + "...";
}

const BlogPostCard = ({ element }) => {
  return (
    <Fragment>
      <div className="cardContainer">
        <div className="card ant-card ant-card-bordered ant-card-hoverable">
          <div style={{ position: "relative" }}>
            <div className="topleft">
              <span className="date">{`${new Date(
                element.releaseDate
              ).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "numeric",
                day: "numeric"
              })}`}</span>
            </div>

            <Link as={`/blog/${element.slugname}`} href={`/blog/[slugname]`}>
              <a>
                <img
                  className="cardImage"
                  src={element.headerPicPath}
                  //src={`/static/images/blog/${element.slugname}.jpg`}
                  alt={`${element.title} - Blogpost`}
                ></img>
              </a>
            </Link>
          </div>
          <div style={{ padding: "0rem 0.5rem" }}>
            <Link as={`/blog/${element.slugname}`} href={`/blog/[slugname]`}>
              <a>
                <h3>{element.title}</h3>
              </a>
            </Link>
            <Excerpt html={element.showContent} paragraph limit={149}></Excerpt>
          </div>
        </div>
      </div>

      <style jsx>{`
        .date {
          font-weight: bold;
          color: #ff4c3b;

          font-size: 1.25rem;
        }

        .topleft {
          position: absolute;
          right: 0px;
          bottom: 0px;
          background: #fff;
          border-radius: 0.75rem 0 0rem 0;
          border-top: 1px solid #e8e8e8;
          border-left: 1px solid #e8e8e8;
          padding: 4px 8px;
        }

        .card {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        }

        a:link {
          text-decoration: none;
        }

        p,
        div {
          text-align: center !important;
        }import Excerpt from './Excerpt';

        .floatincorner {
          color: red;
          position: absolute;
          top: 15px;
          right: 5px;
        }

        /*************************************/

        .cardContainer {
          padding: 8px;
          align-items: center;
          text-align: center;
        }

        .cardImage {
          width: 100%;
          border-top-right-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
          /* border-bottom: 1px solid #e8e8e8;  */
        }

        .price {
        }

        .card {
          border-radius: 0.5rem;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
          margin-top: 1rem;
        }
      `}</style>
    </Fragment>
  );
};

export default BlogPostCard;
