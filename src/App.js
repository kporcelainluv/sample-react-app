import React from "react";
import { Search } from "./pages/search";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
const theme = {
  colors: {
    primary: "black"
  }
};

const Header = styled.header`
  height: 10%;
  width: 100%;
  background-color: hotpink;
`;

const Main = styled.div`
  width: 100%;
  background-color: red;
  height: 90%;
`;

export default () => {
  return (
    <body>
      <Global
        styles={{
          html: {
            height: "100%"
          },
          body: {
            height: "100%"
          },
          "#root": {
            height: "100%"
          }
        }}
      />
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Main>
          <Search />
        </Main>
      </ThemeProvider>
    </body>
  );
};
