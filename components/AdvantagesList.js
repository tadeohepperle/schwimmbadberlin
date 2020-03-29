//import Octicon, { Check, X } from "@primer/octicons-react";
import { Button, Tag } from "antd";

const AdvantagesList = ({ element }) => {
  return (
    <>
      <div className="containerdiv">
        <span className="caption">Ausstattung des Schwimmbads:</span>
        <div style={{}}>
          {element.featuresSmall.map(f => (
            <Tag color="cyan" key={f} style={{ marginTop: "0.5rem" }}>
              <span className="feature">
                {`✓ `} {f}
              </span>
            </Tag>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .feature {
            font-weight: bold;
            font-size: 1rem;
            cursor: unset;
          }
          .containerdiv {
            white-space: pre-wrap;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default AdvantagesList;

/*

✓ ✔ ❌✘ 



<Button
              key={f}
              variant="outline-success"
              disabled
              size="sm"
              className="m-1"
              style={{ cursor: "unset" }}
            >
              
            </Button>


<Button variant="secondary" disabled className="m-1">
            <span className="feature">
              {`✔ `} {f}
            </span>
          </Button>


const AdvantagesList = ({ element }) => {
  return (
    <>
      Dieses Schwimmbad hat einiges zu bieten:
      {element.featuresSmall.map(f => (
        <div className="feature" key={f}>
          <Octicon icon={Check} size="medium" verticalAlign="top"></Octicon>
          {` `} {f}
        </div>
      ))}
      <style jsx>
        {`
          .feature {
            margin-top: 0.5rem;
            font-weight: bold;
            font-size: 1.25rem;
            color: #0a0;
          }
        `}
      </style>
    </>
  );
};



<ul style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}>
        <li>
          <Octicon icon={Check} size="medium" verticalAlign="middle"></Octicon>
          Hallo
        </li>
        <li>
          <Octicon icon={Check} size="medium" verticalAlign="top"></Octicon>
          Hallo
        </li>
        <li>
          <Octicon
            icon={Check}
            size="medium"
            verticalAlign="text-top"
          ></Octicon>
          Hallo
        </li>
        <li>
          <Octicon icon={X} size="medium"></Octicon>Hallo
        </li>
        <li>Hallo</li>
        <li style={{ fontWeight: "bold", fontSize: "3rem" }}> ✓ ✔ ❌✘ Hallo</li>
      </ul>


*/
