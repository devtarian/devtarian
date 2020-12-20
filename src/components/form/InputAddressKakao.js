import React from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';

const InputAddressKakao = ({ address, onChange }) => {
  return (
    <Wrap className="wrap">
      <label>가게 위치</label>
      <p>{address ? address : '주소를 검색 또는 클릭해주세요'}</p>
      <StyledMap
        onChange={onChange}
        defaultCenter={{ lat: 33.450701, lng: 126.570667 }}
        defaultLevel="3"
        eventListenerSearch={true}
      />
    </Wrap>
  );
};

export default InputAddressKakao;

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;

  p {
    margin-bottom: 20px;
  }
`;

const StyledMap = styled(KakaoMap)`
  height: 300px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.gray[1]};
`;
