import React, { Component } from "react";
import { Input, Select, Button } from "antd";
const { Option } = Select;

class MultiSelectWithCustomTags extends Component {
  state = { options: [], chosen: [] };

  constructor(props) {
    super(props);
    //console.log(props);
    this.inputTextChange = this.inputTextChange.bind(this);
    this.addInputAsTag = this.addInputAsTag.bind(this);
    this.addOptionAsChosen = this.addOptionAsChosen.bind(this);
    this.removeOptionFromChosen = this.removeOptionFromChosen.bind(this);
    this.state = {
      chosen: props.value ? props.value : []
    };

    this.state.options = [];
    if (props.options && props.options.length > 0)
      this.state.options = props.options;
    if (props.value && props.value.length > 0)
      this.state.options = [...this.state.options, ...props.value];

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
    const ref = this.props.onChange;
    this.setState(old => {
      old.options.push(value);
      old.chosen.push(value);
      ref(old.chosen);
      return old;
    });
  }

  addOptionAsChosen(value) {
    const ref = this.props.onChange;
    this.setState(old => {
      old.chosen.push(value);
      ref(old.chosen);
      return old;
    });
  }

  removeOptionFromChosen(value) {
    this.setState(old => {
      old.chosen = old.chosen.filter(el => el != value);
      return old;
    });
  }

  render() {
    const { options, chosen, currentInput } = this.state;
    //console.log(chosen);
    //console.log(options);

    return (
      <div>
        <Select
          mode={"multiple"}
          style={{ width: "100%" }}
          placeholder="Optionen wählen..."
          defaultValue={this.props.value}
          onChange={value => {
            //console.log(value);
            this.props.onChange(value);
          }}
          onSelect={value => this.addOptionAsChosen(value)}
          onDeselect={value => this.removeOptionFromChosen(value)}
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

export default MultiSelectWithCustomTags;

/*


*/
