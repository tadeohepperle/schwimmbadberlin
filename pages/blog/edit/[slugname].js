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
  getBlogData,
  deleteBlogpost,
  postBlogpost
} from "./../../../services/APIConnection";
import DataEntry from "./../../../components/backend/DataEntry";
import Layout from "./../../../components/Layout";

class Page extends Component {
  state = { record: {}, saved: true };

  constructor(props) {
    super(props);
    this.state.record = props.record;
    this.onChange = this.onChange.bind(this);
    this.updatePostInDatabase = this.updatePostInDatabase.bind(this);
    this.deletePostInDatabase = this.deletePostInDatabase.bind(this);
  }

  onChange(specname, value) {
    //console.log(specname, value);
    this.setState(old => {
      old.record[specname] = value;
      old.saved = false;

      return old;
    });
  }

  async updatePostInDatabase() {
    const result = await postBlogpost(this.state.record);
  }

  async deletePostInDatabase() {
    const result = await deleteBlogpost(this.state.record);
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
              this.updatePostInDatabase();
            }}
            type="primary"
            disabled={saved}
          >
            {saved ? "gespeichert" : "Blogpost speichern"}
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
                  ? "zurück zum Blogpost"
                  : "ohne Speichern zurück zum Blogpost"}
              </Button>
            </a>
          </Link>
          <Button
            style={{ marginLeft: "0.5rem" }}
            onClick={() => {
              const deleteFunctionRef = () => {
                this.deletePostInDatabase();
              };
              Modal.confirm({
                title: "Möchtest du diesen Blogpost wirklich löschen?",
                content:
                  "Der Blogpost wird aus der Datenbank entfernt und kann nicht wieder hergestellt werden!",
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
            Delete Post
          </Button>
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

Page.getInitialProps = async function(context) {
  const { slugname } = context.query;
  //console.log("slugname: ", slugname);
  await handleAuthSSR(context);
  const data = await getBlogData({ slugname: slugname }); // diese stelle ist eigentlich scheiße gelöst, da unnötig viele daten abgefragt werden, aber ich habe gerade keine Lust eine komplexe Query Lösung im Backend einzubauen.
  // find the correct element:
  const record = data[0];
  return { record };
};

const DEFAULTCOLSIZE = 24;
const properties = [
  {
    specname: "slugname",
    title:
      "Slugname, wird in URL angezeigt, sollte nur kleinbuchstaben und bindestriche enthalten",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "title",
    title: "Title",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "subtitle",
    title: "Subtitle",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "headerPicPath",
    title:
      "Path to the source of the Header image. z.b. /static/images/baeder/stadtbad-charlottenburg-alte-halle1.jpg",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "rawContent",
    title: "HTML Content of Post",
    type: "richtext",
    span: DEFAULTCOLSIZE,
    editorHeight: 400
  },
  {
    specname: "author",
    title: "Author",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "tags",
    title: "Tags",
    type: "string",
    span: DEFAULTCOLSIZE
  },
  {
    specname: "visible",
    title: "Blogpost ist öffentlich sichtbar",
    type: "bool",
    span: 12
  },
  {
    specname: "releaseDate",
    title: "Veröffentlichungsdatum",
    type: "date",
    span: 12
  }
];
