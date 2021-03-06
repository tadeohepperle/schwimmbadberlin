import Link from "next/link";
import { getBaederData } from "./../services/APIConnection";
import Layout from "./../components/Layout";
import SchwimmbadCardsGrid from "./../components/SchwimmbadCardsGrid";
import { Button, DatePicker } from "antd";

/*
const structuredData = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "url": "http://www.your-company-site.com",
  "image":
    "http://www.civil.usherbrooke.ca/cours/gci215a/empire-state-building.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mexico Beach",
    "addressRegion": "FL",
    "streetAddress": "3102 Highway 98"
  },
  "description": "A superb collection of fine gifts and clothing to accent your stay in Mexico Beach.",
  "name": "Beachwalk Beachwear & Giftware",
  "telephone": "850-648-4200",
  "priceRange": "ab 3,50€"
};
*/

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebContent",
  url: "https://www.schwimmbadberlin.de",
  image:
    "https://www.schwimmbadberlin.de/static/images/stock/sportbecken-header.jpg",
  name: "Schwimmbad-Überblick für Berlin",
  description:
    "Welche Schwimmbäder in Berlin haben gerade geöffnet? Finde ein Schwimmbad in deiner Nähe. Wir zeigen dir Öffnungszeiten, Preise und mehr."
};

const content1 = (
  <div>
    <div>
      <h2 className="caption">Badespaß in den Schwimmbädern Berlins</h2>
      <p>
        Schwimmen macht Spaß und ist gesund. Egal, ob du mit Familie und
        Freunden ein wenig im Wasser planschen möchtest oder sportlich unterwegs
        bist - Wir helfen dir dabei ein Schwimmbad oder Spa in Berlin zu finden,
        das auf deine Bedürfnisse abgestimmt ist.
      </p>
      <p>
        Berlin ist eine Stadt mit großer Variabilität - Und das zeigt sich auch
        bei den Bädern. Wenn du momentan in Berlin im Urlaub bist, solltest du
        definitiv eins oder mehrere der Schwimmbäder Berlins erleben. Das{" "}
        <Link href="/baeder/stadtbad-neukoelln">
          <a>Stadtbad Neukölln </a>
        </Link>{" "}
        wurde beispielsweise bereits 1914 eröffnet und bietet zwei fürstliche
        Hallenbäder sowie eine wohlige Saunalandschaft.
      </p>

      <hr></hr>
      <h3 className="caption">
        Bäder, Spas und Saunalandschaften in Berlin - Der Überblick für dich:
      </h3>
    </div>
  </div>
);

const Index = props => {
  const { data } = props;
  //console.log(data);

  return (
    <Layout
      title={
        <span>
          Schwimmbäder in Berlin: <br></br> Finde ein Bad in deiner Nähe
        </span>
      }
      metatitle={`Schwimmbäder in Berlin - Finde ein Bad in deiner Nähe`}
      structuredData={structuredData}
      headline={"Deine Berliner Schwimmbad-Übersicht"}
      metadescription={`Welche Schwimmbäder in Berlin haben gerade geöffnet? Finde ein Schwimmbad in deiner Nähe. Wir zeigen dir Öffnungszeiten, Preise und mehr.`}
    >
      {content1}
      <div>
        {data.filter(el => el.openRN == 1).length + " "}Schwimmbäder in Berlin
        haben gerade geöffnet:
      </div>
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
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const data = await getBaederData({});
  return { data: data };
};

export default Index;
