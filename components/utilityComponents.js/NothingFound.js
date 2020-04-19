import MyInternalLink from "./MyInternalLink";

const NothingFound = ({ alternativeTitle }) => {
  return (
    <div>
      <h2>
        {alternativeTitle
          ? alternativeTitle
          : `Wir konnten leider keine Schwimmbäder oder Blogposts finden, die zu deiner Suchanfrage passen.`}
      </h2>
      <strong>Wie wir dir vielleicht trotzdem helfen können:</strong>
      <ul style={{ fontSize: "1.3rem" }}>
        <li>
          <MyInternalLink href="/blog">
            Aktuelle Blogposts zum Thema Schwimmen und Badespaß
          </MyInternalLink>
        </li>
        <li>
          <MyInternalLink href="/">
            Schwimmbäder sehen, die gerade geöffnet haben
          </MyInternalLink>
        </li>
        <li>
          <MyInternalLink href="/impressum-kontakt">
            Kontakt - Du möchtest uns etwas mitteilen?
          </MyInternalLink>
        </li>
      </ul>
    </div>
  );
};

export default NothingFound;
