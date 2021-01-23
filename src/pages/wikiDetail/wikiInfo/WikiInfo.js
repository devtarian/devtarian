import React from 'react';
import styled from 'styled-components';

const TestEditorForm = ({ value }) => {
  return (
    <>
      <IntroduceContent dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
};

export default TestEditorForm;

const IntroduceContent = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  max-width: 100%;
  margin: 20px auto 0 auto;
  word-wrap: wrap;
`;
