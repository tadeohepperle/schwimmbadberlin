import { Col, Row } from "antd";
import { searchBarColor } from "../../assets/themeConstants";

const sequence = [0, 1, 1, 3, 5];

const MyContainer = ({
  children,
  className,
  flowout,
  bgMonoColored,
  noPadding
}) => {
  return (
    <div className={className}>
      <Row type="flex">
        <Col
          style={
            flowout
              ? {
                  backgroundImage:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),#b4dfff,#b4dfff)"
                }
              : {
                  background: bgMonoColored ? searchBarColor : null
                }
          }
          xs={sequence[0]}
          sm={sequence[1]}
          md={sequence[2]}
          lg={sequence[3]}
          xl={sequence[4]}
        ></Col>
        <Col
          style={{
            padding: noPadding ? "0" : "0 1rem"
          }}
          xs={24 - 2 * sequence[0]}
          sm={24 - 2 * sequence[1]}
          md={24 - 2 * sequence[2]}
          lg={24 - 2 * sequence[3]}
          xl={24 - 2 * sequence[4]}
        >
          {children}
        </Col>
        <Col
          style={
            flowout
              ? {
                  backgroundImage:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),#b4dfff,#b4dfff)"
                }
              : {
                  background: bgMonoColored ? searchBarColor : null
                }
          }
          xs={sequence[0]}
          sm={sequence[1]}
          md={sequence[2]}
          lg={sequence[3]}
          xl={sequence[4]}
        ></Col>
      </Row>
    </div>
  );
};

export default MyContainer;

/*


const MyContainer = ({ children, className, flowout }) => {
  return (
    <div className={className}>
      <Row type="flex">
        <Col
          style={
            flowout
              ? {
                  backgroundImage:
                    "linear-gradient(to left,rgba(0, 0, 0, 0),#b4dfff)"
                }
              : {}
          }
          xs={sequence[0]}
          sm={sequence[1]}
          md={sequence[2]}
          lg={sequence[3]}
          xl={sequence[4]}
        ></Col>
        <Col
          style={{
            padding: "0 1rem"
          }}
          xs={24 - 2 * sequence[0]}
          sm={24 - 2 * sequence[1]}
          md={24 - 2 * sequence[2]}
          lg={24 - 2 * sequence[3]}
          xl={24 - 2 * sequence[4]}
        >
          {children}
        </Col>
        <Col
          style={
            flowout
              ? {
                  backgroundImage:
                    "linear-gradient(to right,rgba(0, 0, 0, 0),#b4dfff)"
                }
              : {}
          }
          xs={sequence[0]}
          sm={sequence[1]}
          md={sequence[2]}
          lg={sequence[3]}
          xl={sequence[4]}
        ></Col>
      </Row>
    </div>
  );
};


















*/
