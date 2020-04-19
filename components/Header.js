import MyContainer from "./utilityComponents.js/MyContainer";
import { primaryColor, primaryColorShadow } from "./../assets/themeConstants";

const Header = props => {
  const { title, headerImagePath, headline } = props;
  return (
    <div>
      <div className="headerTotal">
        <MyContainer>
          <div className="headerBoard">
            <h1 className="title">{title}</h1>
            <div>{headline}</div>
          </div>
        </MyContainer>
      </div>

      <style jsx>{`
        .title {
          color: white;
        }

        hr {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .separator {
          height: 1rem;
        }
        .headerTotal {
          background: ${primaryColor};
          box-shadow: inset 0px -3px 4px 0px ${primaryColorShadow};
          z-index: 5;

          width: 100%;
          padding-right: 0;
          padding-left: 0;
        }
        .headerBoard {
          border-radius: 1rem;
          padding: 2rem 0rem;
          color: white;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Header;

/*




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
           text-align: center;
        }
        `}</style>
      </div>
    );
  };









*/
