// description: Rich text editor component for creating and editing posts

import React from "react";
import { Box } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // to use snow theme

function RichTextEditor({ styles }) {
  const [value, setValue] = React.useState("");
  const module = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
  };
  return (
    <>
      <Box bg={"gray.50"} {...styles}>
        <ReactQuill
          modules={module}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </Box>
    </>
  );
}

export default RichTextEditor;
