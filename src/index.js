import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {addPost, state} from './state.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App chatdata={state.chatdata} addPost={addPost}/>
  </StrictMode>
);
