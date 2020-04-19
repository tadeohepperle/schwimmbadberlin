import { Spin } from "antd";

const LoadingPlane = () => {
  return (
    <div>
      <div className="spincontainer">
        <div>
          <div className="spincontainer">
            <Spin size="large"></Spin>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .spincontainer {
            text-align: center;
            background: rgba(0, 0, 0, 0);
            border-radius: 4px;
            margin-bottom: 20px;
            padding: 100px 50px 200px;
            margin: 20px 0;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPlane;
