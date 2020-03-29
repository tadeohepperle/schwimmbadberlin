import { Col } from "antd";

const lookUp = {
  "2": { xs: 12, sm: 4, md: 2, lg: 2, xl: 2 },
  "3": { xs: 12, sm: 4, md: 3, lg: 3, xl: 3 },
  "4": { xs: 12, sm: 6, md: 4, lg: 4, xl: 4 },
  "6": { xs: 24, sm: 8, md: 6, lg: 6, xl: 6 },
  "8": { xs: 24, sm: 12, md: 8, lg: 8, xl: 8 },
  "12": { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 }
};

const ColResponsive = ({ span, children }) => {
  return <Col {...lookUp[span.toString()]}>{children}</Col>;
};

export default ColResponsive;
