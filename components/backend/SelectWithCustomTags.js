import React, { Component } from "react";
import { Input, Select, Button } from "antd";
const { Option } = Select;

class SelectWithCustomTags extends Component {
  state = { options: [], chosen: null };

  constructor(props) {
    super(props);
    this.inputTextChange = this.inputTextChange.bind(this);
    this.addInputAsTag = this.addInputAsTag.bind(this);
    this.addOptionAsChosen = this.addOptionAsChosen.bind(this);

    this.state = {
      options: props.options ? [...props.options, props.value] : [props.value],
      chosen: props.value ? props.value : []
    };

    this.state.options = this.state.options.filter((item, index) => {
      return this.state.options.indexOf(item) >= index && item;
    });
  }

  inputTextChange(value) {
    if (value[value.length - 1] == ",") {
      this.addInputAsTag(value.substring(0, value.length - 1));
      this.setState({ currentInput: "" });
    } else this.setState({ currentInput: value });
  }

  addInputAsTag(value) {
    this.setState(old => {
      old.options.push(value);
      old.chosen = value;
      this.props.onChange(value);
      return old;
    });
  }

  addOptionAsChosen(value) {
    this.setState(old => {
      old.chosen = value;
      return old;
    });
  }

  render() {
    const { options, chosen, currentInput } = this.state;
    //console.log(chosen);

    return (
      <div>
        <Select
          mode={"default"}
          style={{ width: "100%" }}
          placeholder="Option wählen..."
          defaultValue={this.props.value}
          onChange={value => {
            //console.log(value);
            this.props.onChange(value);
          }}
          onSelect={value => this.addOptionAsChosen(value)}
          value={chosen}
          optionLabelProp="label"
        >
          {options.map(option => (
            <Option key={option} value={option} label={option}>
              {option}
            </Option>
          ))}
        </Select>
        <Input
          style={{ marginTop: "4px" }}
          onPressEnter={e => {
            this.addInputAsTag(currentInput);
            this.setState({ currentInput: "" });
          }}
          placeholder={"eigene Optionen hinzufügen"}
          onChange={e => {
            this.inputTextChange(e.target.value);
          }}
          size="small"
          value={this.state.currentInput}
        ></Input>
      </div>
    );
  }
}

export default SelectWithCustomTags;

/*


*/
