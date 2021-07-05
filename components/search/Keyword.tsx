import React from 'react';
import styled from 'styled-components';

function Keyword({ list }) {
  return (
    <KeywordWrap>
      <input id="check" type="checkbox" />
      <label for="check">
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
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  input[type='checkbox'] + label {
    display: inline-block;
    position: relative;
    padding-left: 26px;
    cursor: pointer;
  }

  input[type='checkbox'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 1.7rem;
    height: 1.7rem;
    border: 0.16rem solid #d4d4d4;
    text-align: center;
    box-sizing: border-box;
  }

  input[type='checkbox']:checked + label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    background-color: #3e3e3e;
  }
`;

export default Keyword;
