import { Container, Jumbotron, Button } from "react-bootstrap";
import MyContainer from "./utilityComponents.js/MyContainer";

const Header = props => {
  const { title, headerImagePath, headline } = props;
  return (
    <div>
      <div className="headerWithoutImage">
        <div className="whiteoverlay">
          <MyContainer>
            <div className="headerBoard">
              <h1 style={{}}>{title}</h1>
              <hr></hr>
              <div className="headline">{headline}</div>
            </div>
          </MyContainer>
        </div>
      </div>

      <style jsx>{`
        .headline {
          font-size: 1.5rem;
          fontweight: normal;
        }
        .separator {
          height: 10rem;
        }
        .headerWithoutImage {
          background: #b4dfff;
          width: 100%;
          padding-right: 0;
          padding-left: 0;
          
        }
        .headerWithImage {
          width: 100%;
          background: url(${headerImagePath});
          background-repeat: repeat
          background-position: center;
          background-size: cover;
          padding-right: 0;
          padding-left: 0;
        }
        .whiteoverlay {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(255, 255, 255, 0.75),
            rgba(255, 255, 255, 1)
          );
        }
        .headerBoard {
          border-radius: 1rem;
          padding: 2rem 0rem;
          /* text-align: center; */
        }
      `}</style>
    </div>
  );
};

export default Header;
