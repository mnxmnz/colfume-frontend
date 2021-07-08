import React from 'react';
import styled from 'styled-components';

function Keyword({ list }) {
  return (
    <KeywordWrap>
      <input id="check" type="checkbox" />
      <label htmlFor="check">
        <span>{list}</span>
      </label>
    </KeywordWrap>
  );
}

const KeywordWrap = styled.div`
  font-family: 'NotoSans';
  font-size: 2rem;
  font-weight: 400;
  span {
    margin-left: 1.7rem;
  }

  input[type='checkbox'] {
    position: absolute;
    margin: -1px;
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  input[type='checkbox'] + label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding-left: 26px;
  }

  input[type='checkbox'] + label:before {
    box-sizing: border-box;
    position: absolute;
    top: 3px;
    left: 0;
    border: 0.16rem solid #d4d4d4;
    width: 1.7rem;
    height: 1.7rem;
    text-align: center;
    content: '';
  }

  input[type='checkbox']:checked + label:after {
    position: absolute;
    top: 3px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
    width: 18px;
    height: 18px;
    content: '';
  }
`;

export default Keyword;
