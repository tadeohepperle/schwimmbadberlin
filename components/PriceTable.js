import React from "react";

const PriceTable = ({ element }) => {
  let trArray = [];
  let flip = true;
  element.angebote.forEach(a => {
    let trColor = ""; //flip ? "#f2f2f2" : "#ffffff"
    flip = !flip;
    trArray.push(
      <tr style={{ background: trColor }} key={a.angebotName}>
        <td style={{ width: "55%" }}>{a.angebotName}:</td>
        <td style={{ width: "45%", paddingBottom: 0 }}>
          {floatToEuroString(a.preis)}
          {a.preisErm ? (
            <div>
              <small>{`(Ermäßigt: ${floatToEuroString(a.preisErm)})`}</small>
            </div>
          ) : (
            <div></div>
          )}
        </td>
        <style jsx>{`
          td {
            padding: 0.75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6;
            color: #000;
          }
        `}</style>
      </tr>
    );
    if (a.kommentar) {
      trArray.push(
        <tr style={{ background: trColor }} key={a.angebotName + "_kommentar"}>
          <td style={{ borderTop: 0, paddingTop: 0 }} colSpan="2">
            <small>({a.kommentar})</small>
          </td>
          <style jsx>{`
            td {
              padding: 0.75rem;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
              color: #000;
            }
          `}</style>
        </tr>
      );
    }
  });

  return (
    <div>
      <span className="caption indent">Angebote und Preise</span>
      <table className="">
        <tbody className="">{trArray}</tbody>
      </table>
    </div>
  );
};

function floatToEuroString(price) {
  let arr = price.toString().split(".");
  if (arr.length == 1) {
    arr.push("00");
  } else if (arr.length == 2) {
    if (arr[1].length == 1) {
      arr[1] = arr[1] + "0";
    }
  } else {
    return "ERROR, Price not noted correctly in markdown";
  }
  return `${arr[0]},${arr[1]} €`;
}

export default PriceTable;
