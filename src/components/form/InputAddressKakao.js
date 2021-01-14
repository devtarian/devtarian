import React from 'react';
import styled from 'styled-components';
import KakaoMap from '../Map/KakaoMap';
import Input from './Input';

const InputAddressKakao = ({ addr, lat, lng, addrDetail, onChange }) => {
  const handleChangeAddrDetail = (e) => {
    onChange({
      addrDetail: e.target.value,
    });
  };
  const handleClickDelete = () => {
    onChange({
      addr: '',
      lat: '',
      lng: '',
      region: '',
      addrDetail: '',
    });
  };
  return (
    <Wrap className="wrap">
      <label>가게 위치</label>
      <p>
        {addr ? addr + ' ' + addrDetail : '주소를 검색 또는 클릭해주세요'}
        {addr && <span className="icon-close" onClick={handleClickDelete} />}
      </p>

      <StyledMap
        onChange={onChange}
        defaultCenter={{ lat: lat || 37.573, lng: lng || 126.9794 }}
        defaultLevel="3"
        eventListenerSearch={true}
      />
      {addr && (
        <Input
          name="addrDetail"
          value={addrDetail || ''}
          placeholder="상세주소를 적어주세요"
          onChange={handleChangeAddrDetail}
        />
      )}
    </Wrap>
  );
};

export default InputAddressKakao;

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;

  .btn-delete {
    margin-left: 20px;
    color: black;
    background: ${(props) => props.theme.gray[0]};

    &:hover {
      background-color: ${(props) => props.theme.green[0]};
    }
  }

  .icon-close {
    display: inline-block;
    background: ${(props) => `url(${props.theme.svg.close})`} center center / contain no-repeat;
    margin-left: 10px;
    width: 15px;
    height: 12px;
    color: black;
  }

  p {
    margin-bottom: 10px;
  }
`;

const StyledMap = styled(KakaoMap)`
  height: 300px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.gray[1]};
  margin-top: 20px;
`;
