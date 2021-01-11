import React from 'react';
import styled from 'styled-components';
import { RadioInput, Input, Checkbox, InputAddressKakao, InputOperateHours, Textarea } from '../../../components/form';
import useActivedBtn from '../../../hooks/useActivedBtn';

const CATEGORIES = ['식당', '카페', '베이커리', 'Bar', '기타'];
const VEG_TYPE = ['비건', '베지테리언', '비건 옵션'];

const FeedFormStore = ({ inputs, setInputs, errors, setErrors, onChange }) => {
  const { activedBtn, onCheckboxClick } = useActivedBtn();
  console.log(inputs);
  const handleChangeAddr = (address) => {
    setInputs({ ...inputs, ...address });
  };
  return (
    <>
      <RadioInput name="category" label="카테고리" info={CATEGORIES} category={inputs.category} onChange={onChange} />
      <Checkbox
        name="vegType"
        label="채식 유형"
        info={VEG_TYPE}
        activedBtn={activedBtn}
        onChange={onChange}
        setInputs={setInputs}
        onCheckboxClick={onCheckboxClick}
        error={errors.vegType}
      />
      <FormRow>
        <div className="col">
          <Input
            label="가게 이름"
            name="storeName"
            value={inputs.storeName || ''}
            placeholder="제목을 입력하세요."
            onChange={onChange}
            error={errors.storeName}
          />
        </div>
        <div className="col">
          <Input
            label="전화번호"
            name="contactNum"
            value={inputs.contactNum || ''}
            placeholder="전화번호를 입력하세요."
            onChange={onChange}
            error={errors.contactNum}
          />
        </div>
      </FormRow>
      <InputAddressKakao
        addr={inputs.addr || ''}
        lat={inputs.lat || ''}
        lng={inputs.lng || ''}
        addrDetail={inputs.addrDetail || ''}
        onChange={handleChangeAddr}
      />

      <InputOperateHours
        value={inputs.operatingHours || []}
        setInputs={setInputs}
        error={errors.operatingHours}
        setErrors={setErrors}
      />

      <Textarea
        label="운영시간 기타사항"
        name="operatingHoursMemo"
        value={inputs.operatingHoursMemo || ''}
        placeholder="운영시간과 관련된 기타 사항을 작성해주세요."
        onChange={onChange}
        rows="3"
      />
    </>
  );
};

export default FeedFormStore;

const FormRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .col {
    flex: 1px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;
