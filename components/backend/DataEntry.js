import React from "react";
import { Input, InputNumber, DatePicker, Select, Switch } from "antd";
const { Option } = Select;
import moment from "moment";
import MultiSelectWithCustomTags from "./MultiSelectWithCustomTags";
import SelectVendors from "./SelectVendors";
import SelectWithCustomTags from "./SelectWithCustomTags";
import MyEditor from "./MyEditor";
import ColResponsive from "./../utilityComponents.js/ColResponsive";

const DataEntry = ({ onChange, spec, value, span }) => {
  function getInputfield() {
    if (spec.type === "string")
      return (
        <Input
          value={value}
          onChange={e => onChange(spec.specname, e.target.value)}
        ></Input>
      );

    if (spec.type === "numeric")
      return (
        <InputNumber
          min={spec.min}
          max={spec.max}
          value={value}
          defaultValue={spec.defaultValue}
          onChange={value => onChange(spec.specname, value)}
        ></InputNumber>
      );
    if (spec.type === "date")
      return (
        <DatePicker
          onChange={(date, dateString) => onChange(spec.specname, date)}
          defaultValue={moment(value)}
          format={dateFormat}
        ></DatePicker>
      );
    if (spec.type === "multiselect")
      return (
        <MultiSelectWithCustomTags
          options={spec.options}
          onChange={value => onChange(spec.specname, value)}
          value={value}
        ></MultiSelectWithCustomTags>
      );
    if (spec.type === "select")
      return (
        <SelectWithCustomTags
          options={spec.options}
          onChange={value => onChange(spec.specname, value)}
          value={value}
        ></SelectWithCustomTags>
      );

    if (spec.type === "vendors")
      return (
        <SelectVendors
          options={spec.options}
          onChange={value => onChange(spec.specname, value)}
          value={value}
        ></SelectVendors>
      );
    if (spec.type === "bool")
      return (
        <>
          <Switch
            onChange={value => onChange(spec.specname, value)}
            checked={value}
          ></Switch>{" "}
          <br></br>
        </>
      );
    if (spec.type === "empty") return <div>empty</div>;
    if (spec.type === "richtext")
      return (
        <MyEditor
          value={value}
          onChange={v => onChange(spec.specname, v)}
          editorHeight={spec.editorHeight}
        ></MyEditor>
      );
  }

  return (
    <ColResponsive span={spec.span ? spec.span : 3}>
      <div style={{ padding: "0.5rem" }}>
        {getInputfield()}
        {spec.title && <small> ({spec.title})</small>}
      </div>
    </ColResponsive>
  );
};

export default DataEntry;

const dateFormat = "DD.MM.YYYY";

/*

onChange(spec.specname, value)


 if (spec.type === "vendors") return <SelectVendors></SelectVendors>;

*/
