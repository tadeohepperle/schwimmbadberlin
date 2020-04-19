const Excerpt = ({ html, limit, paragraph }) => {
  if (limit) {
    html = html.replace(/<[^>]*>/g, "");
    html = html.substr(0, limit) + "...";
  }

  let styles = {};
  if (paragraph) {
    styles = {
      display: "block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginBottom: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px"
    };
  }

  return <div style={styles} dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default Excerpt;

/*

p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

*/
