import styled from "styled-components";
import { flexMixin, gray } from "../styled/styled";

export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <PropsTag padding="4px 5px" fontSize="12px" border="1px solid #d7fa00" borderRadius="3px" textColor="#d7fa00">모집중</PropsTag>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  /* gap: 5px; */
  ${flexMixin("column", undefined, "flex-start", "5px")}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  div {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: ${gray};
  }
`

const PropsTag = styled.span`
  padding: ${props => props.padding || '0'};
  font-size: ${props => props.fontSize || '16px'};
  border: ${props => props.border || '1px solid black'};
  border-radius: ${props => props.borderRadius || '0'};
  color: ${props => props.textColor || 'white'};
`