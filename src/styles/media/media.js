// 반응형 웹을 위한 media module 설정

import { css } from "styled-components";

const sizes = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  tesktop: 2560,
};

export default Object.keys(sizes).reduce((acc, label) => {
  // object.keys(...)의 enumerable속성명을 가지고 리듀서함수를 통해 css 속성을 축적시킴
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
