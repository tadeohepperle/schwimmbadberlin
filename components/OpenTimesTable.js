import React from "react";

import Link from "next/link";

const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };

const OpenTimesTable = ({ element, dateRN }) => {
  let dayToday = new Date().toString().split(" ")[0];
  const dayArray = [
    { name: "Montag", short: "Mon", i: 0 },
    { name: "Dienstag", short: "Tue", i: 1 },
    { name: "Mittwoch", short: "Wed", i: 2 },
    { name: "Donnerstag", short: "Thu", i: 3 },
    { name: "Freitag", short: "Fri", i: 4 },
    { name: "Samstag", short: "Sat", i: 5 },
    { name: "Sonntag", short: "Sun", i: 6 }
  ];

  dayArray.forEach(d => {
    let date = new Date(element.weekDayDates[d.i]);
    d.dateString = date.toLocaleDateString("de-DE", dateOptions);
  });

  let trArray = [];
  function getTableRowFromDay(obj) {
    return (
      <tr
        key={obj.short}
        className={
          dayToday != obj.short
            ? ""
            : element.openRN
            ? "tableSuccess boldTableRow"
            : "tableDanger boldTableRow"
        }
      >
        <td style={{ width: "55%" }}>
          {" "}
          {obj.name} <br></br>
          <small>({obj.dateString})</small>
        </td>
        <td style={{ width: "45%" }}>
          {element.zeitenSchwimmbad[obj.short][0] +
            (element.zeitenSchwimmbad[obj.short][1] ? " - " : "") +
            element.zeitenSchwimmbad[obj.short][1]}
        </td>
        <style jsx>{`
          .boldTableRow {
            font-weight: bold;
          }

          .tableSuccess {
            background: #c3e6cb;
          }

          .tableDanger {
            background: #f5c6cb;
            op
      
          }

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

  trArray = dayArray.map(day => getTableRowFromDay(day));

  return (
    <div>
      <span className="caption indent">
        Öffnungszeiten
        {false && (
          <span style={{ cursor: "pointer" }}>
            <Link href="#haftungsausschluss">
              <a>*</a>
            </Link>
          </span>
        )}
      </span>
      <table style={{ width: "100%" }}>
        <tbody>{trArray}</tbody>
      </table>
    </div>
  );
};

export default OpenTimesTable;
