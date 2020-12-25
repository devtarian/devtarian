import React from 'react';
import styled from 'styled-components';
// import history from '../../history';
import BgImg from '../reviewForm/images/pexels-karolina-grabowska-4197908.jpg';

import { SubmitBtn } from '../../components/form';
import useInput from '../../hooks/useInput';

import FeedFormStore from './FeedFormStore/FeedFormStore';
import FeedFormMenu from './FeedFormMenu/FeedFormMenu';
import FeedFormInfo from './FeedFormInfo/FeedFormInfo';

const pageConfig = [
  { id: 'store', title: '가게 정보', validate: ['vegType', 'storeName', 'contactNum', 'operatingHours'] },
  { id: 'menu', title: '메뉴 정보', validate: ['menuList'] },
  { id: 'info', title: '나의 소개', validate: [] },
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

const initialValue = {
  step: 0,
  vegType: [],
  imgFiles: [],
  imgFileURLs: [],
  starRating: '',
  storeName: '',
  region: '',
  address: '',
  contactNum: '',
  operatingHours: [],
  menuList: [],
  files: [],
  // operatingHours: [],
  // menuList: [],
  // files: [],
};

const FeedForm = ({ onAddPost, history }) => {
  const { inputs, setInputs, errors, setErrors, onInputChange, onImageUpload, requiredValidate } = useInput(
    initialValue
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

  const handleClickNext = () => {
    let requiredList = pageConfig[inputs.step].validate;
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    if (inputs.step !== 2) {
      setInputs({
        ...inputs,
        step: inputs.step + 1,
      });
    } else {
      console.log(inputs);
    }
  };

  const handleAddPost = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const requiredList = [
      'contactNum',
      'contents',
      'email',
      'menuList',
      'operatingHours',
      'starRating',
      'storeName',
      'userName',
      'vegType',
    ];
    onAddPost(inputs);
    console.log('피드제출');
=======
    // const requiredList = [
    //   'contactNumber',
    //   'contents',
    //   'email',
    //   'menu',
    //   'operatingTime',
    //   'starRating',
    //   'storeName',
    //   'userName',
    //   'veganType',
    // ];
    // onAddPost(inputs);
    // console.log('피드제출');
    console.log(inputs);
>>>>>>> c569d302b1f4643971f118beccd2c2bcebfd5438
  };

  return (
    <Wrap bg={BgImg}>
      <h2>가게 등록</h2>
      <form onSubmit={handleAddPost}>
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
        <SubmitBtn type="button" value="다음" onSubmit={handleClickNext} />
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
  border-bottom: 1px solid ${(props) => props.theme.gray[0]};
  margin-top: 10px;
  margin-bottom: 30px;
  padding-bottom: 30px;

  button {
    height: 40px;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: ${(props) => props.theme.gray[0]};
    transition: all 0.3s ease;
    margin-right: 0.5rem;
    &:hover {
      background-color: ${(props) => props.theme.green[1]};
    }
    &.active {
      background-color: ${(props) => props.theme.green[1]};
      transition: none;
    }
  }
`;

const Breadcrumb = styled.div`
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.gray[1]};

  .item {
    .num {
      display: inline-block;
      width: 35px;
      height: 35px;
      line-height: 35px;
      border-radius: 50%;
      text-align: center;
      font-weight: bold;
      color: ${(props) => props.theme.gray[1]};
      border: 1px solid ${(props) => props.theme.gray[1]};
      margin-left: 10px;
    }
    span {
      margin-left: 10px;
    }
  }
  .item.on {
    .num {
      border: ${(props) => props.theme.green[2]};
      background: ${(props) => props.theme.green[2]};
      color: white;
    }
    span {
      color: ${(props) => props.theme.green[2]};
      font-weight: bold;
    }
  }
`;
