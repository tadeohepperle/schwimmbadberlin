import Link from "next/link";
import { getSearchResults } from "./../services/APIConnection";
import Layout from "./../components/Layout";
import SchwimmbadCardsGrid from "./../components/SchwimmbadCardsGrid";
import { Button, Col, Row, DatePicker } from "antd";
import { Fragment } from "react";
import React, { Component } from "react";
import NothingFound from "../components/utilityComponents.js/NothingFound";
import BlogPostCard from "../components/BlogPostCard";
import LoadingPlane from "../components/utilityComponents.js/LoadingPlane";

class Page extends Component {
  state = { loading: false };

  static async getInitialProps(ctx) {
    if (ctx.query.input && ctx.query.input != "") {
      let data = await getSearchResults({ input: ctx.query.input }); //ctx.query.input
      //console.log("initial", data);
      return {
        input: ctx.query.input,
        baederData: data.baederResults,
        blogData: data.blogResults
      }; // add .input
    } else {
      return { input: "", baederData: [], blogData: [] };
    }
  }

  constructor(props) {
    super(props);
    //console.log("constructor");
    //console.log("withrouter", this.props.router.query.input);
    let { input, baederData, blogData } = this.props;
    this.state = { input, baederData, blogData };
    this.handleConfirmSearch = this.handleConfirmSearch.bind(this);
  }

  async handleConfirmSearch(value) {
    this.setState({ loading: true });
    let data = await getSearchResults({ input: value });

    this.setState({
      baederData: data.baederResults,
      blogData: data.blogResults,
      loading: false
    });
  }

  render() {
    //console.log("state:", this.state);
    let { input, baederData, blogData, loading } = this.state;

    let showLoading = () => <LoadingPlane></LoadingPlane>;

    let showResults = () => (
      <React.Fragment>
        {baederData?.length >= 1 && (
          <div>
            <h2>{`Hier sind ${baederData.length} Berliner Schwimmbäder, die zu deiner Suchanfrage passen könnten:`}</h2>
            <SchwimmbadCardsGrid data={baederData}></SchwimmbadCardsGrid>
          </div>
        )}
        {blogData?.length >= 1 && (
          <div>
            <h2>{`Die folgenden ${blogData.length} Blogposts für Badespaß könnten dich interessieren:`}</h2>
            <Row type="flex" justify="start" key={"index"}>
              {blogData.map(el => (
                <Col key={el.slugname} sm={24} md={12}>
                  <BlogPostCard element={el}></BlogPostCard>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {!baederData?.length > 0 && !blogData?.length > 0 && (
          <NothingFound></NothingFound>
        )}
      </React.Fragment>
    );

    return (
      <Layout
        title={"Finde Schwimmbäder in Berlin"}
        // headerImagePath={"/static/images/stock/index-header.jpg"}
        headline={`Suche nach besonderen Eigenschaften wie zum Beispiel "Babybecken" oder "Wasserrutsche"`}
        metadescription={`Suche und finde Schwimmbäder in Berlin. Welche Schwimmbäder in Berlin haben gerade geöffnet? Finde ein Schwimmbad in deiner Nähe. Wir zeigen dir Öffnungszeiten, Preise und mehr.`}
        handleConfirmSearch={this.handleConfirmSearch}
        searchInitialValue={this.state.input}
      >
        {loading ? showLoading() : showResults()}
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
  }
}

export default Page;
