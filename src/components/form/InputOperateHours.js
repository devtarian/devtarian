import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { timeSelect } from '../../utils/helper';
import { InputSelect } from '.';

const initialValue = {
  weekDay: '월요일',
  start: '0시 00분',
  end: '0시 00분',
};
const InputOperateHours = ({ value, setInputs, error, setErrors }) => {
  const [time, setTime] = useState(initialValue);
  const weekDayOptions = useMemo(() => ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'], []);
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
    const { weekDay, start, end } = time;
    const checkWeekday = value.filter((item) => item.indexOf(weekDay) > -1);

    if (value.length <= 6 && checkWeekday.length === 0) {
      const result = `${weekDay} ${start} - ${end}`;
      setInputs((state) => ({
        ...state,
        operatingHours: [...state.operatingHours, result],
      }));

      setErrors((state) => ({ ...state, operatingHours: '' }));

      setTime({
        ...initialValue,
        weekDay: weekDayOptions[value.length + 1] ? weekDayOptions[value.length + 1] : '일요일',
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
      weekDay: weekDayOptions[value.length] ? weekDayOptions[value.length] : '일요일',
    });
  }, [setTime, value, weekDayOptions]);

  return (
    <Wrap className="wrap">
      <label>운영시간</label>
      <FormRow>
        <div className="col">
          <InputSelect name="weekDay" value={time.weekDay} onChange={handleChange} options={weekDayOptions} />
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
      {value.map((item, idx) => (
        <Card key={idx}>
          {item}
          <button type="button" className="btn-delete" onClick={() => handleClickDelete(item)}>
            삭제
          </button>
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.green[2]};

    &:after {
      content: '+';
      text-align: center;
      line-height: 20px;
      font-size: 2rem;
      color: white;
    }
  }

  .err {
    display: none;
    position: absolute;
    top: 90px;
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
`;

const Card = styled.div`
  margin-left: 5px;
  margin-top: 15px;

  .btn-delete {
    margin-left: 10px;
    background: ${(props) => props.theme.gray[0]};
    color: white;
    border-radius: 10%;
    padding: 5px 10px;
  }
`;
