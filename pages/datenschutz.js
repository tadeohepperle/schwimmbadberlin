import Layout from "./../components/Layout";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { Row, Button } from "antd";

const Index = props => {
  return (
    <Layout
      title={"Datenschutz­erklärung für www.schwimmbadberlin.de"}
      // headerImagePath={"/static/images/stock/sportbecken-header.jpg"}
      headline={
        <span>
          Wir sind rechtlich dazu verpflichtet Ihnen mitzuteilen, welche Daten
          wir erheben und speichern:
        </span>
      }
    >
      <div style={{ padding: "1rem" }}>
        <Row>
          <div className="col-md-12">
            <h2 className="caption">Datenschutzerklärung</h2>
            <hr></hr>
            <p>
              Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:
              <br></br>
              Tadeo Hepperle<br></br>
              Kurfürstenstraße 115 <br></br>
              10787 Berlin<br></br>
              <Link href="#kontakt">
                <a>
                  <Button variant="outline-secondary" size="sm">
                    >> zum Kontaktformular
                  </Button>
                </a>
              </Link>
            </p>
            <hr></hr>
            <h3 className="caption">Erfassung allgemeiner Informationen</h3>
            <p>
              Wenn Sie auf unsere Webseite zugreifen, werden automatisch
              Informationen allgemeiner Natur erfasst. Diese Informationen
              (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das
              verwendete Betriebssystem, den Domainnamen Ihres Internet Service
              Providers und ähnliches. Hierbei handelt es sich ausschließlich um
              Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
              Diese Informationen sind technisch notwendig, um von Ihnen
              angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen
              bei Nutzung des Internets zwingend an. Anonyme Informationen
              dieser Art werden von uns statistisch ausgewertet, um unseren
              Internetauftritt und die dahinterstehende Technik zu optimieren.
            </p>
            <hr></hr>
            <h3 className="caption">Newsletter</h3>
            <p>
              Bei der Anmeldung zum Bezug unseres Newsletters werden die von
              Ihnen angegebenen Daten ausschließlich für diesen Zweck verwendet.
              Abonnenten können auch über Umstände per E-Mail informiert werden,
              die für den Dienst oder die Registrierung relevant sind
              (Beispielsweise änderungen des Newsletterangebots oder technische
              Gegebenheiten).
            </p>
            <p>
              Für eine wirksame Registrierung benötigen wir eine valide
              E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich
              durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das
              „Double-opt-in“-Verfahren ein. Hierzu protokollieren wir die
              Bestellung des Newsletters, den Versand einer Bestätigungsmail und
              den Eingang der hiermit angeforderten Antwort. Weitere Daten
              werden nicht erhoben. Die Daten werden ausschließlich für den
              Newsletterversand verwendet und nicht an Dritte weitergegeben.
            </p>
            <p>
              Die Einwilligung zur Speicherung Ihrer persönlichen Daten und
              ihrer Nutzung für den Newsletterversand können Sie jederzeit
              widerrufen.<br></br>
              Sie können uns Ihren entsprechenden Wunsch über die Kündigung
              durch eine kurze Mail an{" "}
              <a href="mailto:thappsmedia@gmail.com">
                thappsmedia@gmail.com
              </a>{" "}
              mitteilen.
            </p>
            <hr></hr>
            <h3 className="caption">Kontaktformular</h3>
            <p>
              Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt,
              werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung
              der Anfrage sowie für mögliche Anschlussfragen gespeichert.
            </p>
            <hr></hr>
            <h3 className="caption">Löschung bzw. Sperrung der Daten</h3>
            <p>
              Wir halten uns an die Grundsätze der Datenvermeidung und
              Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher
              nur so lange, wie dies zur Erreichung der hier genannten Zwecke
              erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen
              vielfältigen Speicherfristen vorsehen. Nach Fortfall des
              jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die
              entsprechenden Daten routinemäßig und entsprechend den
              gesetzlichen Vorschriften gesperrt oder gelöscht.
            </p>
            <h3 className="caption">Verwendung von Google Analytics</h3>
            <p>
              Diese Webseite benutzt Google Analytics, einen Webanalysedienst
              der Google Inc. (folgend: Google). Google Analytics verwendet sog.
              „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Webseite durch Sie
              ermöglichen. Die durch das Cookie erzeugten Informationen über
              Ihre Benutzung dieser Webseite werden in der Regel an einen Server
              von Google in den USA übertragen und dort gespeichert. Aufgrund
              der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird
              Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten
              der Europäischen Union oder in anderen Vertragsstaaten des
              Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur
              in Ausnahmefällen wird die volle IP-Adresse an einen Server von
              Google in den USA übertragen und dort gekürzt. Im Auftrag des
              Betreibers dieser Webseite wird Google diese Informationen
              benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports
              über die Webseitenaktivitäten zusammenzustellen und um weitere mit
              der Webseitennutzung und der Internetnutzung verbundene
              Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen.
              Die im Rahmen von Google Analytics von Ihrem Browser übermittelte
              IP-Adresse wird nicht mit anderen Daten von Google
              zusammengeführt.
            </p>
            <p>
              Sie können die Speicherung der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen
              können. Sie können darüber hinaus die Erfassung der durch das
              Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten
              (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser
              Daten durch Google verhindern, indem sie das unter dem folgenden
              Link verfügbare Browser-Plugin herunterladen und installieren:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
                Browser-Add-on zur Deaktivierung von Google Analytics
              </a>
            </p>
            <hr></hr>
            <h3 className="caption">Google AdWords</h3>
            <p>
              Unsere Webseite nutzt das Google Conversion-Tracking. Sind Sie
              über eine von Google geschaltete Anzeige auf unsere Webseite
              gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner
              gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein
              Nutzer auf eine von Google geschaltete Anzeige klickt. Diese
              Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht
              der persönlichen Identifizierung. Besucht der Nutzer bestimmte
              Seiten unserer Website und das Cookie ist noch nicht abgelaufen,
              können wir und Google erkennen, dass der Nutzer auf die Anzeige
              geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder
              Google AdWords-Kunde erhält ein anderes Cookie. Cookies können
              somit nicht über die Websites von AdWords-Kunden nachverfolgt
              werden. Die mithilfe des Conversion-Cookies eingeholten
              Informationen dienen dazu, Conversion-Statistiken für
              AdWords-Kunden zu erstellen, die sich für Conversion-Tracking
              entschieden haben. Die Kunden erfahren die Gesamtanzahl der
              Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem
              Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
              Sie erhalten jedoch keine Informationen, mit denen sich Nutzer
              persönlich identifizieren lassen.
            </p>
            <p>
              Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür
              erforderliche Setzen eines Cookies ablehnen – etwa per
              Browser-Einstellung, die das automatische Setzen von Cookies
              generell deaktiviert oder Ihren Browser so einstellen, dass
              Cookies von der Domain „googleleadservices.com“ blockiert werden.
            </p>
            <p>
              Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen
              dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen.
              Haben Sie alle Ihre Cookies im Browser gelöscht, müssen Sie das
              jeweilige Opt-out Cookie erneut setzen.
            </p>
            <hr></hr>
            <h3 className="caption">
              Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und
              Widerspruch
            </h3>
            <p>
              Sie haben das Recht, jederzeit Auskunft über Ihre bei uns
              gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben
              Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der
              vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung,
              Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu
              an unseren Datenschutzbeauftragten{" "}
              <Link href="/impressum-und-kontakt">
                <a>über unsere Kontaktseite</a>
              </Link>
              .
            </p>
            <p>
              Damit eine Sperre von Daten jederzeit berücksichtigt werden kann,
              müssen diese Daten zu Kontrollzwecken in einer Sperrdatei
              vorgehalten werden. Sie können auch die Löschung der Daten
              verlangen, soweit keine gesetzliche Archivierungsverpflichtung
              besteht. Soweit eine solche Verpflichtung besteht, sperren wir
              Ihre Daten auf Wunsch.
            </p>
            <p>
              Sie können änderungen oder den Widerruf einer Einwilligung durch
              entsprechende Mitteilung an uns mit Wirkung für die Zukunft
              vornehmen.
            </p>
            <hr></hr>
            <h3 className="caption">
              Änderung unserer Datenschutzbestimmungen
            </h3>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
              anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um änderungen unserer Leistungen in
              der Datenschutzerklärung umzusetzen, z. B. bei der Einführung
              neuer Services. Für Ihren erneuten Besuch gilt dann die neue
              Datenschutzerklärung.
            </p>
            <hr id="kontakt"></hr>
            <h3 className="caption">Fragen an den Datenschutzbeauftragten</h3>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
              eine E-Mail an{" "}
              <a href="mailto:thappsmedia@gmail.com">thappsmedia@gmail.com</a>{" "}
              oder nutzen Sie das folgende Kontaktformular:
            </p>
            <hr></hr>
            <ContactForm></ContactForm>
          </div>
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
