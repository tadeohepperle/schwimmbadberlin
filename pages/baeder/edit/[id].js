import React, { Component } from "react";

import {
  Col,
  Row,
  Button,
  Divider,
  Descriptions,
  Badge,
  Modal,
  Icon
} from "antd";
import { handleAuthSSR } from "./../../../services/authService";

import Link from "next/link";
import {
  getBaederData,
  postSchwimmbad,
  deleteSchwimmbad
} from "./../../../services/APIConnection";
import DataEntry from "./../../../components/backend/DataEntry";
import Layout from "./../../../components/Layout";

class Page extends Component {
  state = { record: {}, saved: true };

  constructor(props) {
    super(props);
    this.state.record = props.record;
    this.onChange = this.onChange.bind(this);
    this.updateSchwimmbadInDatabase = this.updateSchwimmbadInDatabase.bind(
      this
    );
    this.deleteSchwimmbadInDataBase = this.deleteSchwimmbadInDataBase.bind(
      this
    );
  }

  onChange(specname, value) {
    //console.log(specname, value);
    this.setState(old => {
      old.record[specname] = value;
      old.saved = false;

      return old;
    });
  }

  async updateSchwimmbadInDatabase() {
    const result = await postSchwimmbad(this.state.record);
  }

  async deleteSchwimmbadInDataBase() {
    const result = await deleteSchwimmbad(this.state.record);
  }

  render() {
    const { record, saved } = this.state;

    const {
      title,
      subtitle,
      slugname,
      releaseDate,
      showContent,
      rawContent
    } = record;
    return (
      <Layout title={`${title}`} headline={`${subtitle}`} noindex={true}>
        {properties.map(spec => (
          <DataEntry
            value={record[spec.specname]}
            key={spec.specname}
            spec={spec}
            onChange={this.onChange}
          ></DataEntry>
        ))}
        <div style={{ padding: "0.5rem" }}>
          <Button
            style={{ marginLeft: "0.5rem" }}
            onClick={() => {
              this.setState({ saved: true });
              this.updateSchwimmbadInDatabase();
            }}
            type="primary"
            disabled={saved}
          >
            {saved ? "gespeichert" : "Schwimmbad speichern"}
          </Button>
          <Link href={`/blog/${slugname}`}>
            <a>
              <Button
                disabled={false}
                type="primary"
                ghost
                style={{ marginLeft: "0.5rem" }}
              >
                {saved
                  ? "zurück zum Schwimmbad"
                  : "ohne Speichern zurück zum Schwimmbad"}
              </Button>
            </a>
          </Link>
          {false && (
            <Button
              style={{ marginLeft: "0.5rem" }}
              onClick={() => {
                const deleteFunctionRef = () => {
                  this.deleteSchwimmbadInDataBase();
                };
                Modal.confirm({
                  title: "Möchtest du dieses Schwimmbad wirklich löschen?",
                  content:
                    "Das Schwimmbad wird aus der Datenbank entfernt und kann nicht wieder hergestellt werden!",
                  okText: <span>Eintrag Löschen</span>,
                  okType: "danger",
                  cancelText: "abbrechen",
                  onOk() {
                    deleteFunctionRef();
                  },
                  onCancel() {}
                });
              }}
              type="danger"
              ghost
            >
              Delete Schwimmbad
            </Button>
          )}
        </div>

        <style jsx>
          {`
            /*
          .middletitle {
            font-size: 2rem;
          }
          */
            .price {
              font-weight: bold;
              font-size: 2rem;
            }

            .showImage {
              width: 100%;
            }

            .middletitle {
              font-size: 1.25rem;
              /* text-align: center; */
              margin-top: 0.5rem;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Page;

Page.getInitialProps = async function (context) {
  const { id } = context.query;
  await handleAuthSSR(context);
  //console.log("slugname: ", slugname);
  const data = await getBaederData({ _id: id }); // diese stelle ist eigentlich scheiße gelöst, da unnötig viele daten abgefragt werden, aber ich habe gerade keine Lust eine komplexe Query Lösung im Backend einzubauen.
  // find the correct element:
  const record = data[0];
  return { record };
};

const DEFAULTCOLSIZE = 24;
const properties = [
  {
    specname: "title",
    title: "Titel",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "titleArticle",
    title: "titleArticle",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "bezirk",
    title: "Bezirk",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "typ",
    title: "Typ (Hallenbad, Freibad, Sauna & Spa oder Kombibad)",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "website",
    title: "Website URL",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "contents",
    title: "HTML Content",
    type: "richtext",
    span: DEFAULTCOLSIZE,
    editorHeight: 400
  },
  {
    specname: "imageCount",
    title: 'Anzahl images a la "static/images/baeder/slugname1", starten mit 1',
    type: "numeric",
    span: DEFAULTCOLSIZE
  },

  {
    specname: "featuresBig",
    title: "featuresBig",
    type: "multiselect",
    options: [
      "Hallenbad",
      "Freibad",
      "Spaßbad",
      "Sauna",
      "Wellness & Spa",
      "Whirlpool",
      "Fitness",
      "Sportbecken",
      "Kinderbecken",
      "Wasserrutsche"
    ],
    span: DEFAULTCOLSIZE
  },
  {
    specname: "featuresSmall",
    title: "featuresSmall",
    type: "multiselect",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "visible",
    title: "Schwimmbad ist öffentlich sichtbar",
    type: "bool",
    span: 12
  }
];
