import SchwimmbadCardsGrid from "./SchwimmbadCardsGrid";

const MoreArticlesRow = ({ data, title }) => {
  return (
    <div>
      {data != false && (
        <>
          <div className="caption" style={{ marginBottom: "0rem" }}>
            {title}
          </div>
          <SchwimmbadCardsGrid data={data}></SchwimmbadCardsGrid>
        </>
      )}
    </div>
  );
};

export default MoreArticlesRow;
