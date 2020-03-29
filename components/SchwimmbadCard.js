import React, { Fragment } from "react";
import Link from "next/link";
import OpenPill from "./OpenPill";
import BilligsterPreisSchwimmbadCard from "./BilligsterPreisSchwimmbadCard";
import {
  getSlugnameFromBezirk,
  featureDictionary
} from "./../services/lookUpService";
import { Tag } from "antd";

const SchwimmbadCard = ({ element }) => {
  return (
    <Fragment>
      <div className="cardContainer">
        <div className="card ant-card ant-card-bordered ant-card-hoverable">
          <Link href={`/baeder/${element._id}`}>
            <a>
              <img
                className="cardImage"
                src={`/static/images/baeder/${element._id}1.jpg`}
                alt={`${element.title} - Schwimmbad in Berlin ${element.bezirk}`}
              ></img>
            </a>
          </Link>
          <div className="floatincorner">
            <Link href={`/baeder/${element._id}`}>
              <a>
                <OpenPill element={element}></OpenPill>
              </a>
            </Link>
          </div>
          <Link href={`/baeder/${element._id}`}>
            <a>
              <h3>{element.title}</h3>
            </a>
          </Link>
          <span>
            {element.typ} in{" "}
            <Link href={`/bezirke/${getSlugnameFromBezirk(element.bezirk)}`}>
              <a>Berlin {element.bezirk}</a>
            </Link>
          </span>
          <BilligsterPreisSchwimmbadCard
            element={element}
          ></BilligsterPreisSchwimmbadCard>
          <div style={{ marginTop: "8px" }}>
            {element.featuresBig.map(feature => {
              const colorAndLink = getBadgeColorVariantAndLinkFromFeature(
                feature
              );
              return colorAndLink.hide ? null : (
                <span key={feature}>
                  <Link href={colorAndLink.to}>
                    <a>
                      <Tag
                        style={{ marginBottom: "8px", cursor: "pointer" }}
                        color={colorAndLink.color}
                      >
                        {feature}
                      </Tag>
                    </a>
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
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
        }

        a:link {
          text-decoration: none;
        }

        p,
        div {
          text-align: center !important;
        }
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
          font-size: 1.25rem;
          text-align: center;
          margin-top: 1rem;
        }
      `}</style>
    </Fragment>
  );
};

export default SchwimmbadCard;

function getBadgeColorVariantAndLinkFromFeature(f) {
  for (let i = 0; i < Object.keys(featureDictionary).length; i++) {
    const key = Object.keys(featureDictionary)[i];
    const struct = featureDictionary[key];
    if (struct.showName == f)
      return {
        color: struct.color,
        to: `/ausstattung/${key}`,
        hide: struct.hide
      };
  }
  return { color: "secondary", to: "#", hide: false };
}
