import React, { Component } from "react";
import { Button, Input, Select, Icon } from "antd";
const { Option } = Select;

class SelectVendors extends Component {
  state = {
    vendors: []
  };

  constructor(props) {
    super(props);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.selectAVendorFromDropDown = this.selectAVendorFromDropDown.bind(this);
    this.parentOnChange = this.parentOnChange.bind(this);
    this.deleteVendor = this.deleteVendor.bind(this);
    this.state.options = this.props.options;

    function deconstruct(obj) {
      if (obj) {
        let arr = [];
        let keys = Object.keys(obj);
        keys.forEach(key => {
          arr.push({ slugname: key, link: obj[key].link });
        });

        return arr;
      } else return [];
    }

    this.state.vendors = deconstruct(this.props.value);
  }
  parentOnChange(vendors) {
    //console.log(vendors);
    if (vendors.length == 0) this.props.onChange(null);
    else {
      let vendorsAsObject = {};
      vendors.forEach(vendor => {
        vendorsAsObject[vendor.slugname] = { link: vendor.link };
      });
      this.props.onChange(vendorsAsObject);
    }
  }

  inputOnChange(index, value) {
    this.setState(old => {
      old.vendors[index].link = value;
      this.parentOnChange(old.vendors);
      return old;
    });
  }

  selectAVendorFromDropDown(index, value) {
    this.setState(old => {
      old.vendors[index].slugname = value;
      //console.log(old.vendors);
      this.parentOnChange(old.vendors);
      return old;
    });
  }

  deleteVendor(index) {
    //console.log("delete Vendor" + index);
    this.setState(old => {
      old.vendors.splice(index, 1);
      //console.log(old.vendors);
      this.parentOnChange(old.vendors);
      return old;
    });
  }

  addVendor() {
    //console.log("add vendor");
    this.setState(old => {
      let newVendor = { slugname: old.options[0], link: null };
      old.vendors.push(newVendor);
      this.parentOnChange(old.vendors);

      //console.log(old);

      return old;
    });

    //console.log(this.state);
  }
  render() {
    const { options, vendors } = this.state;
    const selectBefore = (onChange, index, slugname) => (
      <Select
        defaultValue={slugname}
        value={slugname}
        style={{ width: 90 }}
        onChange={v => onChange(index, v)}
      >
        {options.map(o => (
          <Option key={o} value={o}>
            {o}
          </Option>
        ))}
      </Select>
    );

    const selectAfter = (onChange, index) => (
      <Icon type="danger" onClick={() => onChange(index)} type="delete" />
    );

    return (
      <div>
        <div style={{}}></div>

        {vendors.map((v, index) => (
          <Input
            key={index}
            addonBefore={selectBefore(
              this.selectAVendorFromDropDown,
              index,
              v.slugname ? v.slugname : "Amazon"
            )}
            addonAfter={selectAfter(this.deleteVendor, index)}
            value={v.link}
            onChange={e => this.inputOnChange(index, e.target.value)}
            placeholder="z.B. https://www.amazon.de/dp/B076S2VFM2"
          />
        ))}
        <Button
          style={{ marginTop: "4px" }}
          size="small"
          onClick={() => this.addVendor()}
        >
          + Vendor hinzufügen
        </Button>
      </div>
    );
  }
}

export default SelectVendors;

/**
 * 
 * 
 * 
 


 v.slugname ? v.slugname : "neu"
 

 <Input
            addonBefore={selectBefore}
            placeholder="z.B. https://www.amazon.de/dp/B076S2VFM2"
          />


const selectBefore = (
      <Select defaultValue="A" style={{ width: 90 }}>
        <Option value="A">Http://</Option>
        <Option value="B">Https://</Option>
      </Select>
    );





 */
