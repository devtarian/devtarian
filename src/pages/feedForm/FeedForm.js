import React from 'react';
import styled from 'styled-components';
import BgImg from '../../images/pexels-karolina-grabowska-4197908.jpg';

import { SubmitBtn } from '../../components/form';
import useInput from '../../hooks/useInput';

import FeedFormStore from './feedFormStore/FeedFormStore';
import FeedFormMenu from './feedFormMenu/FeedFormMenu';
import FeedFormInfo from './feedFormInfo/FeedFormInfo';
import apis from '../../service/apis';

const pageConfig = [
  { id: 'store', title: '가게 정보', validate: ['category', 'vegType', 'storeName', 'contactNum', 'operatingHours'] },
  { id: 'menu', title: '메뉴 정보', validate: ['menuList'] },
  { id: 'info', title: '나의 소개', validate: ['starRating'] },
];

const renderForm = ({ step, ...rest }) => {
  switch (step) {
    case 0:
      return <FeedFormStore {...rest} />;
    case 1:
      return <FeedFormMenu {...rest} />;
    case 2:
      return <FeedFormInfo {...rest} />;
    default:
      return null;
  }
};

const INIT_VALUES = {
  step: 0,
  category: 'restaurant',
  lat: '',
  lng: '',
  vegType: 'vegan',
  storeName: '',
  contactNum: '',
  region: '',
  addr: '',
  addrDetail: '',
  operatingHours: [],
  operatingHoursMemo: '',
  menuList: [],
  starRating: '',
  contents: '',
  files: [],
};

const FeedForm = ({ history }) => {
  const { inputs, setInputs, errors, setErrors, onInputChange, onImageUpload, requiredValidate } = useInput(
    INIT_VALUES
  );

  const handleClickGoBack = () => {
    if (inputs.step === 0) {
      return history.goBack();
    }

    setInputs({
      ...inputs,
      step: inputs.step - 1,
    });
  };

  const handleClickButton = async () => {
    try {
      let requiredList = pageConfig[inputs.step].validate;
      let isValid = requiredValidate(requiredList);
      if (!isValid) return;

      if (inputs.step !== 2) {
        return setInputs({ ...inputs, step: inputs.step + 1 });
      }

      const { files, step, addr, addrDetail, ...body } = inputs;
      body.address = addr + addrDetail;

      const formData = new FormData();
      files.forEach((file) => formData.append('file', file));
      formData.append('body', JSON.stringify(body));

      await apis.storeApi.createStore(formData);
      alert('제출되었습니다.');
      setInputs(INIT_VALUES);
      history.push('/');
    } catch (err) {
      console.log(err.response ? err.response : err);
    }
  };

  return (
    <Wrap bg={BgImg}>
      <h2>가게 등록</h2>
      <form>
        <FormHeader>
          <button type="button" onClick={handleClickGoBack}>
            뒤로가기
          </button>
          <Breadcrumb>
            {pageConfig.map((step, idx) => (
              <div key={idx} className={`item ${idx === inputs.step && 'on'}`}>
                <div className="num">{idx + 1}</div>
                <span>{step.title}</span>
              </div>
            ))}
          </Breadcrumb>
        </FormHeader>
        {renderForm({
          step: inputs.step,
          inputs,
          setInputs,
          errors,
          setErrors,
          onImageUpload,
          onChange: onInputChange,
        })}
        <SubmitBtn type="button" value={inputs.step === 2 ? '제출' : '다음'} onSubmit={handleClickButton} />
      </form>
    </Wrap>
  );
};

export default FeedForm;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  max-width: 1000px;
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
    border: 1px solid ${(props) => props.theme.color[1]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 2px 5px ${(props) => props.theme.gray[0]};
    background: rgba(255, 255, 255, 0.85);

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
  select {
    background-color: transparent;
  }
`;

const FormHeader = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color[1]};
  margin-top: 30px;
  padding-bottom: 15px;

  button {
    height: 40px;
    min-width: 90px;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.color[1]};
    color: ${(props) => props.theme.color[1]};
    transition: all 0.3s ease;
    margin-right: 0.5rem;
    &:hover {
      border: 1px solid ${(props) => props.theme.gray[0]};
      color: ${(props) => props.theme.gray[0]};
    }
    &.active {
      border: 1px solid ${(props) => props.theme.color[2]};
      color: ${(props) => props.theme.color[2]};
      transition: none;
    }
  }
`;

const Breadcrumb = styled.div`
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: ${(props) => props.theme.color[1]};

  .item {
    .num {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 27px;
      margin-left: 10px;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.color[1]};
      text-align: center;
      color: ${(props) => props.theme.color[1]};
    }
    span {
      margin-left: 10px;
    }
  }
  .item.on {
    .num {
      border: ${(props) => props.theme.green[1]};
      background: ${(props) => props.theme.green[1]};
      color: ${(props) => props.theme.background[0]};
      font-weight: bold;
    }
    span {
      color: ${(props) => props.theme.green[1]};
      font-weight: bold;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    .item {
      margin-bottom: 5px;
      font-size: 14px;
      .num {
        width: 20px;
        height: 20px;
        line-height: 17px;
      }
    }
  }
`;
