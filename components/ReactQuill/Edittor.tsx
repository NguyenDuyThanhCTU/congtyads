import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGlobalState } from "../../Context/GlobalProvider";
import EditorToolbar, { formats, modules } from "./EditorToolbar";

export const Editor = () => {
  const { editor, setEditor } = useGlobalState();
  const handleChange = (value: any) => {
    setEditor({ value });
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={editor?.value}
        onChange={handleChange}
        placeholder={"Viết nội dung bài viết..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
