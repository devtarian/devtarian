import React from 'react';
import styled from 'styled-components';
import { Input, SelectAll, InputAddressKakao, InputOperateHours, Textarea } from '../../../components/form';

const FeedFormStore = ({ inputs, setInputs, errors, setErrors, onChange }) => {
  const handleChangeAddr = (address) => {
    setInputs({ ...inputs, ...address });
  };
  return (
    <>
      <SelectAll
        title="채식 유형"
        name="vegType"
        selectedList={inputs?.vegType || []}
        onChange={onChange}
        options={[
          { key: 'veganOnly', title: '비건 Only' },
          { key: 'veganMany', title: '비건 위주' },
          { key: 'dairy', title: '유제품 사용' },
          { key: 'egg', title: '계란 사용' },
          { key: 'honny', title: '꿀 사용' },
        ]}
        exceptOnly={['veganOnly']}
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
      <InputAddressKakao address={inputs.addr || ''} onChange={handleChangeAddr} />
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
