import Layout from "./../components/Layout";
import ContactForm from "../components/ContactForm";
import { Row } from "antd";
import ColResponsive from "../components/utilityComponents.js/ColResponsive";

const Index = props => {
  return (
    <Layout
      title={"Impressum und Kontakt"}
      headerImagePath={"/static/images/stock/sportbecken-header.jpg"}
      headline={
        <span>
          Hier finden Sie rechtliche Informationen zu dieser Seite.<br></br>Bei
          Fragen oder Kooperationsanfragen können Sie uns gerne kontaktieren.
        </span>
      }
    >
      <div style={{ padding: "1rem" }}>
        <Row>
          <ColResponsive span={12}>
            <h2 className="caption">Impressum</h2>
            <hr></hr>
            <h3 className="caption">Angaben gemäß § 5 TMG:</h3>
            <p>
              THAPPS - Digital Media <br></br>
              Tadeo Hepperle<br></br>
              Kurfürstenstraße 115 <br></br>
              10787 Berlin<br></br>
              Deutschland
            </p>
            <hr></hr>
            <h3 className="caption">Kontakt:</h3>
            <p>
              Tel: +491590 1469611 <br></br>
              E-Mail: thappsmedia@gmail.com<br></br>
              Sprechzeiten: 10:00 – 17:00 <br></br>
            </p>
            <hr></hr>
            <h3 className="caption">
              Verantwortlich für den Inhalt <br></br>nach §55 Abs. 2 RStV:
            </h3>
            <p>
              Tadeo Hepperle<br></br>
              Kurfürstenstraße 115 <br></br>
              10787 Berlin<br></br>
            </p>
            <hr></hr>
            <h3 className="caption">Hinweise zu Bildern auf dieser Seite:</h3>
            <p>
              Die Rechte an den Fotos der Bäder auf unserer Seite sind teilweise
              von Dritten urheberrechtlich geschützt. Für die Verwendung von
              Bildern der Bäder der Berliner Bäderbetriebe wurden uns von deren
              Pressstelle die entsprechenden Nutzungsrechte zugesichert. Die
              Nutzung von Bildern anderer Bäderbetreiber erfolgt stets mit
              Einverständnis dieser. Dadurch werden die Rechte an den Bildern
              nicht an uns übertragen, uns wird lediglich ein Nutzungsrecht
              eingeräumt.
            </p>
          </ColResponsive>
          <ColResponsive span={12}>
            <h2 className="caption">Kontakt</h2>
            <hr></hr>
            <ContactForm></ContactForm>
          </ColResponsive>
        </Row>
      </div>
      <style jsx global>{`
        .caption {
          font-weight: normal;
          font-size: 1.5rem;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
