import Link from "next/link";
import MyContainer from "./utilityComponents.js/MyContainer";
import BackendLogin from "./BackendLogin";
import { yearRightNow } from "../services/lookUpService";

const Footer = () => {
  return (
    <React.Fragment>
      <div style={{ background: "#f8f8f8", width: "100%", padding: "3rem 0" }}>
        <MyContainer>
          {" "}
          <div style={{ color: "#aaa" }}>
            Copyright ©{yearRightNow()}, THAPPS - Digital Media, Tadeo Hepperle,
            Berlin, Germany <br></br>
            <Link href="/impressum-und-kontakt">
              <a>Impressum und Kontakt</a>
            </Link>
            <br></br>
            <Link href="/datenschutz">
              <a>Datenschutz</a>
            </Link>
            <hr></hr>
            <br></br>
            <div id="haftungsausschluss">
              <p>
                <span className="mystrong">Haftungsausschluss </span>
                Wir übernehmen keine Haftung für die Richtigkeit der
                Informationen der auf dieser Website präsentierten Bäder.
              </p>
              <p>
                <span className="mystrong">*</span>Dies gilt insbesondere für
                die Öffnungszeiten der Schwimmbäder. Bitte besuchen Sie die
                verlinkten offiziellen Seiten der Betreiber um sicherzustellen,
                dass wirklich geöffnet ist oder rufen sie vorher beim Schwimmbad
                an.
              </p>
              <p>
                Zudem kann es vereinzelt vorkommen, dass Bäder z.B. durch eine
                Personalbesprechung während der regulären Öffnungszeiten
                geschlossen bleiben. Daher stellen Sie bitte durch einen
                persönlichen Anruf sicher, dass das Bad offen ist, bevor Sie es
                besuchen.
              </p>
            </div>
            <div>
              <BackendLogin></BackendLogin>
            </div>
            <style jsx>{`
              a {
                color: #aaaaaa;
              }
            `}</style>
          </div>
        </MyContainer>
      </div>
    </React.Fragment>
  );
};

export default Footer;
/*





*/
