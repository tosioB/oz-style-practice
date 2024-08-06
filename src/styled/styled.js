// SCSS의 변수와 Mixin을 styled components에서 사용하는 방법
import { css } from "styled-components";
// @mixin flex(
  // $direction: row,
  // $justify: start,
  // $align: stretch,
  // $gap: 0,
  // $wrap: nowrap
// ) {
  // display: flex;
  // flex-direction: $direction;
  // justify-content: $justify;
  // align-items: $align;
  // gap: $gap;
  // flex-wrap: $wrap;
// }

// @mixin font($size, $weight: 400) {
//   font-size: $size;
//   font-weight: $weight;
// }

// // 변수
// $tag-color: #d7fa00;
// $gray: rgb(160, 160, 160);

export const flexMixin = (
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = 0,
  wrap = 'nowrap'
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
}

// export const tag_color = '#d7fa00';
export const gray = 'rgb(160, 160, 160)';