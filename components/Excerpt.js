const Excerpt = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default Excerpt;
