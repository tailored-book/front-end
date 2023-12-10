import styled from "styled-components";

//가로축 긴줄 컨테이너
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
`;

export const InnerContainer = styled.div`
  width: 70%;
  border-left: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
  border-right: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
  font-color: red;
  padding: 1%;
`;

export const BookContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-start;
  border-left: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
  border-right: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerBodyContainer = styled.div`
  width: 70%;
  border-left: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
  border-right: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
  border-bottom: ${({ theme }) => theme.basis.line.size["heavy"]} solid
    ${({ theme }) => theme.basis.line.color["medium"]};
  padding: 1%;
`;
