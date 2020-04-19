import Link from "next/link";
import { getBlogData, verifyJWT } from "./../services/APIConnection";
import Layout from "./../components/Layout";
import { yearRightNow } from "../services/lookUpService";
import BlogPostCard from "../components/BlogPostCard";
import { Col, Row, Button, Divider } from "antd";
import MoreArticlesRow from "../components/MoreArticlesRow";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "blog",
  url: "https://www.schwimmbadberlin.de/blog",
  image: "https://www.schwimmbadberlin.de/static/images/stock/spassbad.jpg",
  name: "Schwimmbadberlin - Der Badespaß Blog",
  description:
    "Der Blog rund um das Thema Schwimmen und Badespaß. Was sind die coolsten Bade-Gadgets? Außerdem findest du hier Öffnungszeiten der Berliner Schwimmbäder, Ausstattung, Preise und mehr."
};

const content1 = (
  <div>
    <h2 className="caption">Badespaß in den Schwimmbädern Berlins</h2>
    <p>
      Schwimmen macht Spaß und ist gesund. Egal, ob du mit Familie und Freunden
      ein wenig im Wasser planschen möchtest oder sportlich unterwegs bist - Wir
      helfen dir dabei ein Schwimmbad oder Spa in Berlin zu finden, das auf
      deine Bedürfnisse abgestimmt ist.
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
    <h3 className="caption">Blogposts zum Thema Schwimmen:</h3>
  </div>
);

const Page = props => {
  const { data } = props;
  //console.log(data);

  return (
    <Layout
      metatitle={`So schwimmt man ${yearRightNow()} - Der Blog rund um Badspaß`}
      title={`So schwimmt man ${yearRightNow()}!`}
      headline={"Der Blog rund um Schwimmen und Badespaß"}
      metadescription={`Der Blog rund um das Thema Schwimmen und Badespaß. Was sind die coolsten Bade-Gadgets in ${yearRightNow()}? Außerdem findest du hier Öffnungszeiten der Berliner Schwimmbäder, Ausstattung, Preise und mehr.`}
      structuredData={structuredData}
    >
      {content1}
      <Row type="flex" justify="start" key={"index"}>
        {data.map(el => (
          <Col key={el.slugname} sm={24} md={12}>
            <BlogPostCard element={el}></BlogPostCard>
          </Col>
        ))}
      </Row>
      <Divider></Divider>
      <MoreArticlesRow
        withAsyncData
        title={`Schwimmbad-Geheimtipps in Berlin:`}
      ></MoreArticlesRow>
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

Page.getInitialProps = async function(ctx) {
  const data = await getBlogData({});
  return { data };
};

export default Page;
