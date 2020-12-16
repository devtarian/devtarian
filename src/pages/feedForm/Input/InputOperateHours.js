import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import { timeSelect } from '../../../utils/helper';
import { Select, Input } from '../../../components/form';

const weekDayOptions = [
  { title: '월요일' },
  { title: '화요일' },
  { title: '수요일' },
  { title: '목요일' },
  { title: '금요일' },
  { title: '토요일' },
  { title: '일요일' },
];

const initialValue = {
  weekDay: '월요일',
  start: '0시 00분',
  end: '0시 00분',
};
const InputOperateHours = ({ value, setInputs }) => {
  const [time, setTime] = useState(initialValue);
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
      setInputs((state) => {
        return {
          ...state,
          operatingTime: [...state.operatingTime, result],
        };
      });

      setTime({
        ...initialValue,

        weekDay: weekDayOptions[value.length + 1] ? weekDayOptions[value.length + 1].title : '일요일',
      });
    }
  };

  const handleClickDelete = (deleteItem) => {
    setInputs((state) => {
      return {
        ...state,
        operatingTime: state.operatingTime.filter((item) => item !== deleteItem),
      };
    });
  };

  return (
    <Wrap className="wrap">
      <label>운영시간</label>
      <FormRow>
        <div className="col">
          <Select name="weekDay" value={time.weekDay} onChange={handleChange} options={weekDayOptions} />
        </div>
        <div className="col">
          <Select name="start" value={time.start} onChange={handleChange} options={startTimeOptions} />
        </div>
        <div className="col">
          <Select name="end" value={time.end} onChange={handleChange} options={endTimeOptions} />
        </div>
        <button type="button" className="addButton" onClick={handleClick}>
          +
        </button>
      </FormRow>

      {value.map((item, idx) => (
        <div className="operatingHours" key={idx}>
          {item}
          <button type="button" className="deleteButton" onClick={() => handleClickDelete(item)}>
            삭제
          </button>
        </div>
      ))}
    </Wrap>
  );
};

export default InputOperateHours;

const Wrap = styled.div`
  .addButton {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 2rem;
    border-radius: 50%;
    color: white;
    background: ${(props) => props.theme.green[2]};
    text-align: center;
    align-items: center;
  }

  .operatingHours {
    margin-left: 5px;
    margin-top: 15px;

    .deleteButton {
      margin-left: 10px;
      background: ${(props) => props.theme.gray[0]};
      color: white;
      border-radius: 10%;
      padding: 5px 10px;
    }
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
