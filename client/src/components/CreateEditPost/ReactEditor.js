import React from "react";
import "../../assets/css/editor.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
//import htmlToDraft from "html-to-draftjs";
import Button from "@material-ui/core/Button";

class ReactEditor extends React.Component {
  state = {
    editorState: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(this.props.initialData.content)
      )
    ),

    content: this.props.initialData.content,
    heading: this.props.initialData.title,
    image: this.props.initialData.image,
    category: this.props.initialData.category.id,
    description: this.props.initialData.description,
    slug: this.props.initialData.slug,
    open: false,
    // files: [],
    // isUploaded: false,
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  onHeadingChange = (e) => {
    this.setState({
      heading: e.target.value,
    });
  };

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onImageChange = (e) => {
    this.setState({
      image: e.target.value,
    });
  };

  onSlugChange = (e) => {
    this.setState({
      slug: e.target.value,
    });
  };

  handleClose = (e) => {
    this.setState({
      open: true,
    });
  };

  onSubmit = (e) => {
    if (
      this.state.heading === "" ||
      this.state.content === "" ||
      this.state.image === "" ||
      this.state.description === "" ||
      this.state.slug === "" ||
      this.state.category === 0
    ) {
      alert("Please fill all the fields");
      return;
      //
    } else {
      const post = {
        title: this.state.heading,
        content: this.state.content,
        image: this.state.image,
        category: this.state.category,
        description: this.state.description,
        slug: this.state.slug,
        category: this.state.category,
      };
      console.log("Submitted");
      this.props.onChangeData(post);
    }
    this.props.onSubmitData();
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="grid">
        <div>
          <h2 className="customHeading">
            Heading:{" "}
            <input
              type="text"
              className="customInput"
              value={this.state.heading}
              onChange={this.onHeadingChange}
            />
          </h2>
        </div>

        <div className="editor">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />

          {/* <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          /> */}
        </div>

        <div className="customInput2">
          <label for="category">Select category:</label>
          <select
            name="category"
            className="customSelect"
            value={this.state.category}
            onChange={this.onCategoryChange}
          >
            <option>Select</option>
            <option value="1">Tech</option>
            <option value="2">Stocks</option>
            <option value="3">Current Affairs</option>
          </select>
        </div>
        <div className="customInput2">
          <label for="image-url">Enter image url:</label>
        </div>
        <div>
          <input
            className="customInput3"
            type="text"
            name="url"
            value={this.state.image}
            onChange={this.onImageChange}
          />
        </div>
        <div className="customInput2">
          <label for="description">Write a short description:</label>
        </div>
        <div>
          <input
            className="customInput3"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
        </div>

        <div className="customInput2">
          <label for="slug">Write Tags:</label>
        </div>
        <div>
          <input
            className="customInput3"
            type="text"
            name="slug"
            value={this.state.slug}
            onChange={this.onSlugChange}
          />
        </div>
        <Button variant="contained" color="primary" onClick={this.onSubmit}>
          Publish
        </Button>
      </div>
    );
  }
}

export default ReactEditor;
