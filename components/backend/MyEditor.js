import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class MyEditor extends React.Component {
  handleEditorChange = (content, editor) => {
    this.props.onChange(content);
  };

  render() {
    return (
      <Editor
        apiKey="r4r97yr3eml8yejyhphf5lxwa55hu1yqqibqvecsok5rw9hm"
        initialValue={this.props.value}
        init={{
          height: this.props.editorHeight ? this.props.editorHeight : 170,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help"
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default MyEditor;
