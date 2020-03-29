import React, { Component } from "react";
import { Button, Icon } from "antd";

class Adresse extends Component {
  constructor(props) {
    super(props);
    this.toggleMapView = this.toggleMapView.bind(this);
    this.state = { el: props.element };
    this.state.showMap = false;
    this.state.mapLoaded = false;
  }

  toggleMapView() {
    if (!this.state.mapLoaded) this.setState({ mapLoaded: true });
    this.setState({ showMap: !this.state.showMap });
    //console.log("toggle");
  }

  render() {
    let { el, showMap, mapLoaded } = this.state;
    let contactLinksStyle = { color: "grey" };
    return (
      <div>
        <span className="caption indent">Kontakt und Adresse: </span>
        <hr className="hrbelowcaption"></hr>
        <div className="indent">
          {el.telefon.map(t => (
            <React.Fragment key={t}>
              <span>
                Tel:{" "}
                <a style={contactLinksStyle} href={`tel:${t}`}>
                  {t}
                </a>
              </span>
              <br></br>
            </React.Fragment>
          ))}
          {el.email ? (
            <span>
              Email:{" "}
              <a style={contactLinksStyle} href={`mailto:${el.email}`}>
                {el.email}
              </a>
              <br></br>
            </span>
          ) : null}

          <span>
            Website:{" "}
            <a
              style={contactLinksStyle}
              href={el.website}
              target="_blank"
              rel="nofollow"
            >
              hier klicken zum öffnen
            </a>
          </span>
        </div>

        {el.parken && (
          <div className="indent">
            <span className="mystrong">Parkmöglichkeiten vor Ort: </span>
            <div>{el.parken}</div>
            <hr></hr>
          </div>
        )}
        <hr></hr>
        <div className="indent" style={{ marginBottom: "1rem" }}>
          {el.title}
          <br></br>
          {el.adresse[0]}
          <br></br>
          {el.adresse[1] + " - " + el.bezirk}
        </div>
        <div style={{ marginBottom: "1rem" }} className="indent">
          <Button variant="outline-secondary" onClick={this.toggleMapView}>
            <span style={{ marginLeft: "4px" }}>Bei Google Maps anzeigen</span>
          </Button>
          {showMap && (
            <div>
              {mapLoaded && (
                <iframe
                  src={el.mapsEmbedURL}
                  width="100%"
                  height="300rem"
                  frameBorder="0"
                  style={{ transform: "translate(0,0) scale(1)" }}
                ></iframe>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Adresse;
