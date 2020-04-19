import Link from "next/link";
import { getBaederData } from "./../../services/APIConnection";
import Layout from "./../../components/Layout";
import SchwimmbadCardsGrid from "./../../components/SchwimmbadCardsGrid";
import { featureDictionary } from "./../../services/lookUpService";
import React from "react";

const Index = props => {
  const { data, feature } = props;
  //console.log(feature.content1);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebContent",
    url: "https://www.schwimmbadberlin.de/ausstattung/" + feature.slugName,
    image:
      "https://www.schwimmbadberlin.de/static/images/stock/" +
      feature.slugName +
      ".jpg",
    name: "Schwimmbäder in Berlin mit " + feature.showName,
    description:
      feature.showName +
      "-Übersicht für Berlin. Preise, Ausstattung, Öffnungszeiten und mehr."
  };

  return (
    <Layout
      title={`Schwimmbäder in Berlin mit ${feature.showName}`}
      headerImagePath={`/static/images/stock/${feature.slugName}.jpg`}
      headline={`${feature.showName}-Übersicht Berlin`}
      metadescription={`Schwimmbäder mit ${feature.showName} in Berlin. ✓ Finde ein Schwimmbad in deiner Nähe. Wir zeigen dir Öffnungszeiten, Preise und mehr.`}
      structuredData={structuredData}
    >
      <div>
        {featureContents[feature.slugName]}
        <SchwimmbadCardsGrid data={data}></SchwimmbadCardsGrid>
        <style jsx global>{`
        .infocontainer {
          background: rgb(233, 236, 239);
          border-radius: 0.5rem;
          padding-top: 1rem;
          7* box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);  */
        }

        .hrbelowcaption {
          margin-top: 0rem;
        }

        a:link {
          text-decoration: none;
        }

        .indent {
          margin-left: 0.75rem;
        }

        .caption {
          font-weight: normal;
          font-size: 1.5rem;
        }
      `}</style>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function(context) {
  const { feature } = context.query;
  const data = await getBaederData({
    featuresBig: featureDictionary[feature].showName
  });

  const returnObject = {
    data: data,
    feature: { slugName: feature, ...featureDictionary[feature] }
  };
  return returnObject;
};

export default Index;

const featureContents = {
  "kinderfreundliche-schwimmbaeder": (
    <div>
      <h2 className="caption">Kinderfreundliche Schwimmbäder in Berlin</h2>
      <p>
        Mit den Kindern in Berlin in die Schwimmhalle zu gehen kann den Kleinen
        großen Spaß machen. Wichtig ist, darauf zu achten, dass das Schwimmbad
        der Wahl ein flaches Kinderbecken hat.
      </p>
      <p>
        Hier findest du Berliner Schwimmbäder, die dank Kinderbecken oder
        Babybecken für viel Freude bei den Kleinen sorgen.
      </p>
      <hr></hr>
    </div>
  ),
  sportbaeder: (
    <div>
      <h2 className="caption">Immer Sportlich - Bahnen schwimmen in Berlin</h2>
      <p>
        Nicht nur für Spaßbader sind die Hallenbäder Berlins ein Erlebnis. Wer
        gerne Bahnen schwimmt und seine sportliche Leistung pushen möchte, kann
        sich beispielsweise in der{" "}
        <Link href="/baeder/schwimm-und-sprunghalle-im-europasportpark-sse">
          <a>Schwimm- und Sprunghalle im Europasportpark</a>
        </Link>{" "}
        wie ein Weltmeister fühlen.{" "}
      </p>
      <p>
        Auf den Bahnen wurden bereits Weltrekorde von Spitzenschwimmern
        aufgestellt. Bahnen zu schwimmen hilft erwiesenermaßen auch bei
        Rückenschmerzen und stärkt die Muskulatur.
      </p>
      <hr></hr>
      <h3 className="caption">Schwimmbäder mit Sportbecken in Berlin:</h3>
    </div>
  ),
  sauna: (
    <div>
      <h2 className="caption">Saunieren ist gesund und entspannend.</h2>

      <p>
        Hier werden dir Berliner Schwimmbäder mit Sauna, Saunalandschaften und
        Spas mit Sauna in Berlin angezeigt:
      </p>
    </div>
  )
};
