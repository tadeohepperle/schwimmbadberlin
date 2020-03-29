const BilligsterPreisSchwimmbadCard = ({ element }) => {
  const { billigsterEintrittspreis, billigsterEintrittspreisErm } = element;

  return billigsterEintrittspreis ? (
    <React.Fragment>
      <span>
        <span className="">{`Eintritt ab ${billigsterEintrittspreis
          .toFixed(2)
          .split(".")
          .join(",")}€`}</span>
        {billigsterEintrittspreisErm && (
          <span className="">
            <small>{` (ermäßigt ${billigsterEintrittspreisErm
              .toFixed(2)
              .split(".")
              .join(",")}€)`}</small>
          </span>
        )}
      </span>
    </React.Fragment>
  ) : (
    "null"
  );
};

export default BilligsterPreisSchwimmbadCard;
