import { useRouter } from "next/router";
import { getData } from "./../../services/APIConnection";
import Layout from "./../../components/Layout";
import BilderSlideShow from "../../components/BilderSlideShow";
import AdvantagesList from "../../components/AdvantagesList";
import OpenTimesTable from "../../components/OpenTimesTable";
import PriceTable from "../../components/PriceTable";
import Adresse from "./../../components/Adresse";
import Excerpt from "./../../components/Excerpt";
import OpenPill from "./../../components/OpenPill";
import MoreArticlesRow from "./../../components/MoreArticlesRow";
import { Col, Row } from "antd";
import ColResponsive from "../../components/utilityComponents.js/ColResponsive";

export default function Post(props) {
  // console.log(props);
  const { element, sameBezirk, seeOpen } = props;
  // console.log(element);
  //const router = useRouter();
  const headline = `${element.typ} in Berlin ${element.bezirk}`;
  const headerImagePath = `/static/images/baeder/${element._id}1.jpg`;

  return (
    <Layout
      title={element.title}
      metatitle={`${element.title} | Schwimmbad in Berlin ${element.bezirk}`}
      headline={
        <div>
          <span style={{}}>{headline}</span>
          <br></br>

          <OpenPill element={element}></OpenPill>
        </div>
      }
      headerImagePath={headerImagePath}
      metadescription={`${element.title} | ${element.typ} in Berlin ${element.bezirk} | ✓ Öffnungszeiten ✓ Preise ✓ Ausstattung ✓ Parkmöglichkeiten`}
    >
      <div>
        <div className="row justify-content-md-center"></div>
        <Row>
          <Col span={24}>
            <Excerpt element={element}></Excerpt>
            <hr></hr>
            <BilderSlideShow element={element}></BilderSlideShow>
            <hr></hr>
            <AdvantagesList element={element}></AdvantagesList>
          </Col>
        </Row>
        <hr></hr>
        <Row className="infocontainer">
          <ColResponsive span={8}>
            <OpenTimesTable element={element}></OpenTimesTable>
          </ColResponsive>
          <ColResponsive span={8}>
            <PriceTable element={element}></PriceTable>
          </ColResponsive>
          <ColResponsive span={8}>
            <Adresse element={element}></Adresse>
          </ColResponsive>
        </Row>

        <hr></hr>
        <MoreArticlesRow
          data={sameBezirk}
          title={`Weitere Schwimmbäder in Berlin ${element.bezirk}:`}
        ></MoreArticlesRow>
        <hr></hr>
        <MoreArticlesRow
          data={seeOpen}
          title={`Schwimmbäder in Berlin die gerade geöffnet haben:`}
        ></MoreArticlesRow>
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
  const { id } = context.query;
  const { data } = await getData({}); // diese stelle ist eigentlich scheiße gelöst, da unnötig viele daten abgefragt werden, aber ich habe gerade keine Lust eine komplexe Query Lösung im Backend einzubauen.
  // find the correct element:
  const element = data.find(el => el._id == id);

  // find elements with the same bezirk and other that are open
  let sameBezirk = [];
  const sameBezirkLimit = 3;
  let seeOpen = [];
  const seeOpenLimit = 6;
  for (let i = 0; i < data.length; i++) {
    const el = data[i];

    if (el._id != element._id) {
      if (el.bezirk == element.bezirk && sameBezirk.length < sameBezirkLimit)
        sameBezirk.push(el);
      else if (el.openRN == 1 && seeOpen.length < seeOpenLimit)
        seeOpen.push(el);
    }

    if (sameBezirk.length >= sameBezirkLimit && seeOpen >= seeOpenLimit) break;
  }

  // actually this should be randomized:

  // construct object to inject in Props
  const returnData = {
    element: element,
    sameBezirk: sameBezirk,
    seeOpen: seeOpen
  };

  return returnData;
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
