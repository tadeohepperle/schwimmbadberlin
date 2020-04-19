const OpenPill = ({ element }) => {
  const { openRN, openRNdata } = element;

  const badge0 = { background: "#dc3545", text: "geschlossen", color: "white" };
  const badge1 = {
    background: "#28a745",
    text: "jetzt geöffnet",
    color: "white"
  };
  const badge2 = {
    background: "#ffc107",
    color: "black",
    text: `öffnet in ${
      openRNdata
        ? openRNdata.diffH
          ? `${openRNdata.diffH} ${
              openRNdata.diffH == 1 ? "Stunde" : "Stunden"
            }`
          : `${openRNdata.diffM} ${
              openRNdata.diffM == 1 ? "Minute" : "Minuten"
            }`
        : "EEEEERRROR"
    }`
  };
  const correctBadge = openRN ? (openRN === 1 ? badge1 : badge2) : badge0;
  return <OpenBadge badge={correctBadge}></OpenBadge>;
};

const OpenBadge = ({ badge }) => {
  return (
    <span
      style={{
        color: badge.color,
        background: badge.background,
        padding: "0.4rem 0.7rem",
        fontSize: "0.9rem",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "10rem",
        fontWeight: "bold"
      }}
    >
      <span>{badge.text}</span>
    </span>
  );
};

export default OpenPill;

/*

 {false && (
          <Badge
            pill
            variant={badge.class}
            style={{
              boxShadow: "inset 2px 2px  1px rgba(0, 0, 0, 0.6)"
            }}
          >
            <span
              style={{
                color: "rgb(0,0,0,0)"
              }}
            >
              i
            </span>
          </Badge>
        )}


        {false && (
          <Link href="#haftungsausschluss">
            <span style={{ cursor: "pointer" }}>*</span>
          </Link>
        )}

*/
