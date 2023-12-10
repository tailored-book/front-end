import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routers";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import media from "./styles/media/media";
import { GlobalStyle } from "./styles/global/GlobalStyle";
function App() {
  const mode = "light";
  return (
    <ThemeProvider theme={{ ...theme, ...media, mode }}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
