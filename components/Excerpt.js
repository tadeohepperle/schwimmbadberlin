const Excerpt = ({ element }) => {
  return <div dangerouslySetInnerHTML={{ __html: element.contents }}></div>;
};

export default Excerpt;
