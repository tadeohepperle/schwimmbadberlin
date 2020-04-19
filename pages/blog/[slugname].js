import { useRouter } from "next/router";
import { getBlogData } from "./../../services/APIConnection";
import Layout from "./../../components/Layout";
import Excerpt from "./../../components/Excerpt";
import OpenPill from "./../../components/OpenPill";
import { Col, Row } from "antd";
import ColResponsive from "../../components/utilityComponents.js/ColResponsive";
import { excerpt } from "./../../components/BlogPostCard";

export default function Post(props) {
  // console.log(props);
  const { element } = props;
  // console.log(element);
  //const router = useRouter();

  return (
    <Layout
      title={element.title}
      metatitle={`${element.title}`}
      headline={`Blogartikel vom ${new Date(
        element.releaseDate
      ).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      })}, verfasst von ${element.author}`}
      metadescription={excerpt(element.showContent, 200)}
      headerImagePath={element.headerPicPath}
    >
      <div>
        <h1>{element.title}</h1>
        <h2>{element.subtitle}</h2>

        <Excerpt html={element.showContent}></Excerpt>
        <hr></hr>
      </div>
      <style jsx global>{`
        .infocontainer {
          background: #ffffff;
          border-radius: 0.5rem;
          padding-top: 1rem;
          7* box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);  */
        }

        .hrbelowcaption {
          margin-top: 0rem;
        }

        .indent {
          margin-left: 0.75rem;
        }

        .caption {
          font-weight: normal;
          font-size: 1.5rem;
        }
      `}</style>
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const { slugname } = context.query;
  const data = await getBlogData({}); // diese stelle ist eigentlich scheiße gelöst, da unnötig viele daten abgefragt werden, aber ich habe gerade keine Lust eine komplexe Query Lösung im Backend einzubauen.
  // find the correct element:
  const element = data.find(el => el.slugname == slugname);
  return {
    element: element
  };
};

/*



rgb(233, 236, 239);

return await getData({});








const { id } = context.query;
  const dataFromBackend = await getData({}); // diese stelle ist eigentlich scheiße gelöst, da unnötig viele daten abgefragt werden, aber ich habe gerade keine Lust eine komplexe Query Lösung im Backend einzubauen.
  // find the correct element:
  console.log(dataFromBackend);
  //const element = dataFromBackend.find(el => el._id == id);

  const element = dataFromBackend[0];
  return {
    element: element,
    sameBezirk: "_________",
    sameType: "_________",
    seeOpen: "__________"
  };


  

<div className="col-md-1">
          <BilderSlideShow></BilderSlideShow>
        </div>


*/
