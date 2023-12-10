import { Outlet } from "react-router-dom";
import { Header, BookShelf } from "../components/layout/layouts";

export default function Home() {
  return (
    <>
      <Header></Header>
      <BookShelf></BookShelf>
      <Outlet></Outlet>
    </>
  );
}
