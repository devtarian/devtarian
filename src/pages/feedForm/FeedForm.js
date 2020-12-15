import React, { useState } from 'react';
import styled from 'styled-components';
import BgImg from '../reviewForm/images/pexels-karolina-grabowska-4197908.jpg';

import { Input } from '../../components/form';
import SelectAll from '../../components/form/SelectAll';
import InputAddressKakao from './InputAddressKakao/InputAddressKakao';

const steps = [
  { id: 'store', title: '가게 정보' },
  { id: 'menu', title: '메뉴 정보' },
  { id: 'info', title: '나의 소개' },
];

const initialValue = {
  step: 0,
};

const FeedForm = () => {
  const [inputs, setInputs] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <Wrap bg={BgImg}>
      <h2>가게 등록</h2>
      <form>
        <FormHeader>
          <button type="button">뒤로가기</button>
          <Breadcrumb style={{ float: 'right' }}>
            {steps.map((step, idx) => (
              <div key={idx}>
                <div className="num">{idx + 1}</div>
                <span>{step.title}</span>
              </div>
            ))}
          </Breadcrumb>
        </FormHeader>

        <SelectAll
          title="비건 단계"
          name="veganType"
          selectedList={inputs?.veganType || []}
          onChange={handleChange}
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
              onReviewChange={handleChange}
            />
          </div>
          <div className="col">
            <Input
              label="전화번호"
              name="phone"
              value={inputs.phone || ''}
              placeholder="전화번호를 입력하세요."
              onReviewChange={handleChange}
            />
          </div>
        </FormRow>
        <InputAddressKakao setInputs={setInputs} />

        <Input
          label="전화번호"
          name="phone"
          value={inputs.phone || ''}
          placeholder="전화번호를 입력하세요."
          onReviewChange={handleChange}
        />
      </form>
    </Wrap>
  );
};

export default FeedForm;

const Wrap = styled.section`
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto 40px;
  padding: 3rem 1.5rem 0;

  .wrap {
    margin-top: 2rem;
  }
  h2 {
    margin: 1rem 0.5rem 1.5rem;
    font-size: 1.8rem;
  }
  form {
    position: relative;
    padding: 1rem 2rem 2rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 2px 5px ${(props) => props.theme.gray[0]};
    background-color: ${(props) => props.theme.background[0]};

    * {
      z-index: 1;
    }
    label,
    h3 {
      display: block;
      margin-bottom: 1rem;
      font-size: 1.125rem;
      font-weight: bolder;
    }
    &:before {
      z-index: -1;
      content: '';
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url(${(props) => props.bg});
      background-size: cover;
    }
  }
`;

const FormHeader = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const Breadcrumb = styled.div`
  .num {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid red;
    text-align: center;
  }
  span {
    margin: 0 5px;
  }
`;

const FormRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .col {
    width: 49%;
  }
`;
