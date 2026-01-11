import Editor from "@monaco-editor/react";

const SnippetEditor = ({ code, setCode, language }) => {
  return (
    <Editor
      height="400px"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value)}
      options={{
        fontSize: 14,
        minimap: { enabled: false }
      }}
    />
  );
};

export default SnippetEditor;
