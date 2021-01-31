import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { timeSelect } from '../../utils/helper';
import { InputSelect } from '.';

const initialValue = {
  day: '월요일',
  start: '0시 00분',
  end: '0시 00분',
};
const InputOperateHours = ({ value, setInputs, error, setErrors }) => {
  const [time, setTime] = useState(initialValue);
  const dayOptions = useMemo(() => ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'], []);
  const startTimeOptions = useMemo(() => timeSelect(), []);
  const endTimeOptions = useMemo(() => timeSelect(time.start), [time.start]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime({
      ...time,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { day, start, end } = time;
    const checkDay = value.filter((item) => item.indexOf(day) > -1);

    if (value.length <= 6 && checkDay.length === 0) {
      const result = `${day} ${start} - ${end}`;
      setInputs((state) => ({
        ...state,
        operatingHours: [...state.operatingHours, result],
      }));

      setErrors((state) => ({ ...state, operatingHours: '' }));

      setTime({
        ...initialValue,
        day: dayOptions[value.length + 1] ? dayOptions[value.length + 1] : '일요일',
      });
    }
  };

  const handleClickDelete = (deleteItem) => {
    setInputs((state) => {
      return {
        ...state,
        operatingHours: state.operatingHours.filter((item) => item !== deleteItem),
      };
    });
  };

  useEffect(() => {
    setTime({
      ...initialValue,
      day: dayOptions[value.length] ? dayOptions[value.length] : '일요일',
    });
  }, [setTime, value, dayOptions]);

  return (
    <Wrap className="wrap">
      <label>운영시간</label>
      <FormRow>
        <div className="col">
          <InputSelect name="day" value={time.day} onChange={handleChange} options={dayOptions} />
        </div>
        <div className="col">
          <InputSelect name="start" value={time.start} onChange={handleChange} options={startTimeOptions} />
        </div>
        <div className="col">
          <InputSelect name="end" value={time.end} onChange={handleChange} options={endTimeOptions} />
        </div>
        <button type="button" className="btn-add" onClick={handleClick} />
      </FormRow>
      <p className={error ? 'err on' : 'err'}>{error}</p>
      {value.map((operatingHour, idx) => (
        <Card key={idx}>
          {operatingHour}
          <button type="button" className="btn-delete" onClick={() => handleClickDelete(operatingHour)} />
        </Card>
      ))}
    </Wrap>
  );
};

export default InputOperateHours;

const Wrap = styled.div`
  position: relative;
  .btn-add {
    position: relative;
    top: 7px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${(props) => props.theme.green[2]};

    &:after {
      content: '+';
      text-align: center;
      line-height: 15px;
      font-size: 1.4rem;
      color: ${(props) => props.theme.background[0]};
    }
    @media (max-width: 767px) {
      margin: 10px auto;
    }
  }

  .err {
    display: none;
    position: absolute;
    bottom: -21px;
    font-size: 11px;
    color: ${(props) => props.theme.brown[1]};
  }
  .err.on {
    display: block;
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
    flex: 1px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    select {
      margin-bottom: 7px;
    }
  }
`;

const Card = styled.div`
  margin-left: 5px;
  margin-top: 15px;

  .btn-delete {
    margin-left: 20px;
    background: ${(props) => `url(${props.theme.svg.close})`} center center / contain no-repeat;
    width: 15px;
    height: 12px;
    &:hover {
      color: ${(props) => props.theme.gray[0]};
    }
  }
`;
