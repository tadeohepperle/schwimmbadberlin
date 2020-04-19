import SchwimmbadCardsGrid from "./SchwimmbadCardsGrid";
import React, { Component } from "react";
import { getBaederData } from "../services/APIConnection";

class MoreArticlesRow extends Component {
  state = {};
  constructor(props) {
    super(props);

    if (props.withAsyncData) {
      this.state.data = [];
    } else {
      this.state.data = props.data;
    }
  }

  async componentDidMount() {
    let skip = Math.floor(Math.random() * 25);
    if (this.props.withAsyncData) {
      let asyncData = await getBaederData({}, {}, skip, 3);
      this.setState({ data: asyncData });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data?.length >= 1 && (
          <>
            <div className="caption" style={{ marginBottom: "0rem" }}>
              {this.props.title}
            </div>
            <SchwimmbadCardsGrid data={data}></SchwimmbadCardsGrid>
          </>
        )}
      </div>
    );
  }
}

export default MoreArticlesRow;
