import React, { useRef, useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "supper" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];
const TextEditor = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");
    console.log(socket);
    return () => {
      socket.disconnect();
    };
  }, []);
  const wrapperRef = useCallback((wrapperRef) => {
    if (wrapperRef == null) return;

    wrapperRef.innerHTML = "";
    const editor = document.createElement("div");
    wrapperRef.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } });
  }, []);
  return (
    <div className="container" ref={wrapperRef}>
      text editors
    </div>
  );
};

export default TextEditor;
