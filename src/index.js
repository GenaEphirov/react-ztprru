import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {store} from './state.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export const rerenderEntireTree = () => {
  root.render(
    <StrictMode>
      <App state={store.state} dispatch={store.dispatch}/>
    </StrictMode>
  );
}

rerenderEntireTree();