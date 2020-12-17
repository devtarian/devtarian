import React from 'react';
import styled from 'styled-components';
import { Input, SelectAll, InputAddressKakao, InputOperateHours } from '../../../components/form';

const FeedFormStore = ({ inputs, setInputs, onChange }) => {
  return (
    <>
      <SelectAll
        title="비건 단계"
        name="veganType"
        selectedList={inputs?.veganType || []}
        onChange={onChange}
        options={[
          { key: 'veganOnly', title: '비건 Only' },
          { key: 'veganMany', title: '비건 위주' },
          { key: 'dairy', title: '유제품 사용' },
          { key: 'egg', title: '계란 사용' },
          { key: 'honny', title: '꿀 사용' },
        ]}
        exceptOnly={['veganOnly']}
      />
      <FormRow>
        <div className="col">
          <Input
            label="가게 이름"
            name="title"
            value={inputs.title || ''}
            placeholder="제목을 입력하세요."
            onReviewChange={onChange}
          />
        </div>
        <div className="col">
          <Input
            label="전화번호"
            name="phone"
            value={inputs.phone || ''}
            placeholder="전화번호를 입력하세요."
            onReviewChange={onChange}
          />
        </div>
      </FormRow>
      <InputAddressKakao value={inputs.addr || ''} setInputs={setInputs} />
      <InputOperateHours value={inputs.operatingTime || []} setInputs={setInputs} />

      <Input
        label="운영시간 기타"
        name="operatingHoursMemo"
        value={inputs.operatingHoursMemo || ''}
        placeholder="운영시간 관련 기타사항을 작성해주세요."
        onReviewChange={onChange}
      />

      {/* <Textarea
          label="운영시간 기사사항"
          name="operatingHoursMemo"
          placeholder="운영시간 관련 기타사항을 작성해주세요."
          onReviewChange={onChange}
        /> */}
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
