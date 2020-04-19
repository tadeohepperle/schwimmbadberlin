import React, { Component } from "react";
import { AutoComplete, Button, Input, Icon } from "antd";
import { withRouter } from "next/router";
const { Option } = AutoComplete;
const { Search } = Input;
import { searchBarAutocompleteOptions } from "../services/lookUpService";

// props: STRING initialValue, FUNCTION handleConfirmSearch(value)
class SearchBar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.options = searchBarAutocompleteOptions;
    this.state.validOptions = [];
    this.state.input = this.props.initialValue;
    this.handleChange = this.handleChange.bind(this);
    this.confirmSearch = this.confirmSearch.bind(this);

    //console.log("withrouter", this.props);
  }

  handleChange(value) {
    let newValidOptions = this.state.options.filter(option =>
      this.optionIsValidForValue(option, value)
    );
    this.setState({ input: value, validOptions: newValidOptions });
  }

  optionIsValidForValue(option, value) {
    if (value.length == 0) return false;
    if (option.search(new RegExp(value, "i")) != -1) {
      return true;
    } else return false;
  }

  confirmSearch(value) {
    this.props.handleConfirmSearch
      ? this.props.handleConfirmSearch(this.state.input)
      : this.props.router.push(`/search?input=${this.state.input}`);
  }

  render() {
    // console.log(this.state);
    return (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <AutoComplete
          size="large"
          style={{ width: "100%" }}
          dataSource={this.state.validOptions.map(el => (
            <Option key={el} value={el}>
              {el}
            </Option>
          ))}
          placeholder={"Wonach suchst du?"}
          onSelect={this.handleChange}
          onSearch={this.handleChange}
          value={this.state.input}
        >
          <Input.Search
            style={{}}
            enterButton="Suche"
            size="large"
            onSearch={this.confirmSearch}
            defaultValue={this.state.initialValue}
          ></Input.Search>
        </AutoComplete>
      </div>
    );
  }
}

export default withRouter(SearchBar);

/*




dataSource={["Oculus", "Dell", "Visor"].map(el => (
            <Option key={el} value={el}>
              {el}
            </Option>
          ))}


<Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={e => this.handleChange(e.target.value)}
          value={this.state.input}
          onSearch={() => console.log("search..")}
        />
        <br></br>
        Suche
        <AutoComplete
          style={{
            width: 200
          }}
          onSearch={this.handleChange}
          placeholder="eingeben..."
          value={this.state.input}
        >
          {["Oculus", "Dell", "Visor"].map(el => (
            <Option
              key={el}
              value={el}
              onClick={value => {
                this.handleOptionClick(value.key);
              }}
            >
              {el}
            </Option>
          ))}
          <Input
            suffix={
              <Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>


*/
