import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import React, { useEffect } from "react";

import { initGA, logPageView } from "./../services/analytics";
import MyContainer from "./utilityComponents.js/MyContainer";
import SearchBar from "./SearchBar";
import {
  searchBarColor,
  searchBarColorShadow,
  headerPicHeight
} from "./../assets/themeConstants";

const Layout = props => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  const {
    title,
    headerImagePath,
    headline,
    metadescription,
    metatitle,
    handleConfirmSearch,
    searchInitialValue,
    structuredData
  } = props;

  return (
    <div>
      <Head>
        <title>{metatitle ? metatitle : title}</title>
        <script
          key={title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <link rel="shortcut icon" href="/static/favicon.png" />

        <meta name="description" content={metadescription} />
      </Head>
      <MyContainer>
        <NavBar></NavBar>
      </MyContainer>
      <MyContainer className="searchBarArea">
        <div style={{ padding: "16px 0px 16px" }}>
          <SearchBar
            initialValue={searchInitialValue}
            handleConfirmSearch={handleConfirmSearch}
          ></SearchBar>
        </div>
      </MyContainer>

      <Header title={title ? title : metatitle} headline={headline}></Header>
      {headerImagePath && (
        <MyContainer bgMonoColored noPadding>
          <img
            className="headerImage"
            alt={title}
            title={title}
            src={headerImagePath}
            style={{ overflow: "hidden" }}
          ></img>
        </MyContainer>
      )}
      <MyContainer bgMonoColored>
        <div className="space"></div>
        {props.children}
        <div className="space"></div>
      </MyContainer>

      <Footer></Footer>

      <style jsx global>{`
        .headerImage {
          width: 100%;
        }

        .searchBarArea {
          background: ${searchBarColor};
          box-shadow: inset 0px -3px 4px 0px ${searchBarColorShadow};

          z-index: 10;
        }

        .space {
          margin-bottom: 24px;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: 0;
          border-top: 1px solid rgba(1, 1, 1, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Layout;

/*



        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>

       

        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>










BOOTSTRAP FULL:


<link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>


<script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>



















*/
