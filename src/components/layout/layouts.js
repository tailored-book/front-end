import * as S from "../../styles/layout/LayoutStyles";
import { Book } from "../book/book";

export function Header() {
  return (
    <>
      <S.MainContainer>
        <S.InnerContainer>
          <h1 align="center">Header</h1>
          <h1 align="center">Header</h1>
          <h1 align="center">Header</h1>
        </S.InnerContainer>
      </S.MainContainer>
    </>
  );
}

export function BookShelf() {
  return (
    <>
      <S.MainContainer>
        <S.InnerContainer>
          <Book></Book>
        </S.InnerContainer>
      </S.MainContainer>
    </>
  );
}

export function Body() {
  return (
    <>
      <S.BodyContainer>
        <S.InnerBodyContainer>contents</S.InnerBodyContainer>
        <S.InnerBodyContainer>contents</S.InnerBodyContainer>
        <S.InnerBodyContainer>contents</S.InnerBodyContainer>
      </S.BodyContainer>
    </>
  );
}
