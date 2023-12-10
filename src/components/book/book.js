import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const books = [
  {
    id: 1,
    title: "title",
    imgSource: "../../picture/9791192300818.png",
  },
  {
    id: 2,
    title: "title2",
    imgSource: "../../picture/9791192300818.png",
  },
  {
    id: 3,
    title: "title3",
    imgSource: "../../picture/9791192300818.png",
  },
  {
    id: 4,
    title: "title4",
    imgSource: "../../picture/9791192300818.png",
  },
  {
    id: 5,
    title: "title",
    imgSource: "../../picture/9791192300818.png",
  },
  {
    id: 6,
    title: "title2",
    imgSource: "../../picture/9791192300818.png",
  },
  {
    id: 7,
    title: "title3",
    imgSource: "../../picture/9791192300818.jpg",
  },
  {
    id: 8,
    title: "title4",
    imgSource: "src/picture/9791192300818.png",
  },
  {
    id: 8,
    title: "title4",
    imgSource: "src/picture/9791192300818.png",
  },
];

const StyledBook = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  grid-row-gap: 2rem;
`;

const NewBookButton = styled.button`
  background: ${({ theme }) => theme.basis.line.color["medium"]};
  &:hover {
    background: ${({ theme }) => theme.basis.line.color["heavy"]};
  }
  &:active {
    background: #20c997;
  }

  z-index: 5; //겹치는 위치
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  bottom: 0px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
`;

const BookImage = styled.img``;

const NewBook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21%;
  background: gray;
`;

export function Book() {
  const aligner = [];
  if (books.length % 4 > 0) {
    let num = 3 - (books.length % 4);
    for (let i = 0; i < num; i++) {
      aligner.push({ id: 1 });
    }
  }

  console.log(aligner);

  return (
    <div>
      <StyledBook>
        {books.map((book) => (
          <BookImage
            width="21%"
            height="auto"
            src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791171171989.jpg"
          ></BookImage>
        ))}
        <NewBook>
          <NewBookButton>
            <MdAdd></MdAdd>
          </NewBookButton>
        </NewBook>
        {aligner.map(() => (
          <NewBook style={{ background: "none" }}></NewBook>
        ))}
      </StyledBook>
    </div>
  );
}
