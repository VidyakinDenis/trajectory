import {createRoot} from 'react-dom/client';
import {App} from './core';
import {createGlobalStyle} from "styled-components";
import { BrowserRouter } from "react-router-dom";


const Global = createGlobalStyle`
    body{
      margin: 0;
      padding: 0;
      background-color: #fff;
    }
`

const container =   document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Global/>
    <App />
  </BrowserRouter>
);