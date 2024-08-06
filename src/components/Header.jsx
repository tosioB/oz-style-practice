import styled from "styled-components";
import { flexMixin } from "../styled/styled";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  ${flexMixin(undefined, "space-between", "center")}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin(undefined, undefined, undefined, "20px")}
    li {
      font-size: 16px;
      font-weight: 400;
      list-style: none;
    }
  }
`