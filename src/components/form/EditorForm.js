import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const EditorForm = ({ value, onChange }) => {
  return (
    <Wrap>
      <label>기타</label>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        placeholder="내용을 작성해주세요."
        editorState={value}
        onEditorStateChange={onChange}
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: false },
          history: { inDropdown: false },
        }}
        localization={{
          locale: 'ko',
        }}
      />
    </Wrap>
  );
};

export default EditorForm;

const Wrap = styled.div`
  margin-top: 2rem;
  height: auto;

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: bolder;
  }
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
  }
  .editor-class {
    padding: 5px !important;
    border: 1px solid #868e96 !important;
    padding: 5px !important;
    border-radius: 2px !important;
    height: 300px;
  }

  .toolbar-class {
    z-index: 100;
    position: relative;
    border: 1px solid #868e96 !important;
  }
`;
