import Link from "next/link";
import { getData } from "./../../services/APIConnection";

import Layout from "./../../components/Layout";
import SchwimmbadCardsGrid from "./../../components/SchwimmbadCardsGrid";
import { getShowNameFromBezirkSlugname } from "./../../services/lookUpService";

const Index = props => {
  const { data, bezirk } = props;

  return (
    <Layout
      title={`Schwimmbäder in Berlin ${getShowNameFromBezirkSlugname(bezirk)}`}
      headerImagePath={"/static/images/stock/index-header.jpg"}
      headline={`Deine Schwimmbad-Übersicht für Berlin ${getShowNameFromBezirkSlugname(
        bezirk
      )}`}
      metadescription={`Schwimmbäder in Berlin ${bezirk}. Finde ein Schwimmbad in deinem Stadtteil. ✓ Öffnungszeiten ✓ Preise ✓ Ausstattung ✓ Parkmöglichkeiten`}
    >
      <SchwimmbadCardsGrid data={data}></SchwimmbadCardsGrid>
      <style jsx global>{`
        .infocontainer {
          background: rgb(233, 236, 239);
          border-radius: 0.5rem;
          padding-top: 1rem;
          7* box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);  */
        }
        a:link {
          text-decoration: none;
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
};

Index.getInitialProps = async function(context) {
  const { bezirk } = context.query;
  const { data } = await getData({
    bezirk: getShowNameFromBezirkSlugname(bezirk)
  });

  const returnObject = { data: data, bezirk: bezirk };
  return returnObject;
};

export default Index;
