import SchwimmbadCard from "../components/SchwimmbadCard";
import { Row } from "antd";
import ColResponsive from "./utilityComponents.js/ColResponsive";

const GRIDCOUNTHORIZONTAL = 3;

const SchwimmbadCardsGrid = ({ data }) => {
  //console.log(data);
  // Chunk the data for rows:
  let chunkedData = [[]];
  for (let i = 0; i < data.length; i++) {
    chunkedData[chunkedData.length - 1].push(data[i]);
    if ((i + 1) % GRIDCOUNTHORIZONTAL === 0) chunkedData.push([]);
  }
  // create jsx elements:
  const rowsArray = chunkedData.map((row, index) => (
    <Row key={index}>
      {" "}
      {row.map(el => (
        <ColResponsive span={8} key={el._id}>
          <SchwimmbadCard element={el}></SchwimmbadCard>
        </ColResponsive>
      ))}
    </Row>
  ));

  return (
    <div>
      <div className="topMargin"></div>
      <div className="paddingCorrection">{rowsArray}</div>

      <style jsx>{`
        .topMargin {
          margin-bottom: 30px;
        }

        .paddingCorrection {
          margin: 0 -8px;
        }
      `}</style>
    </div>
  );
};

export default SchwimmbadCardsGrid;
