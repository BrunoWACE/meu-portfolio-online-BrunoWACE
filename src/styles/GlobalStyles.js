import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    scroll-behavior: smooth;
    scroll-padding-top: 60px;
 }
`

/*
yarn build
git add -f dist
git commit -m ""
git subtree push --prefix dist origin gh-pages
*/



 
  
