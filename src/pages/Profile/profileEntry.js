import React from 'react';
import { render } from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile';


render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-ouciyri7.us.auth0.com"
    clientId="uN9Oca9Eax7C4C6cg2EmEy7Yd11UtCd7"
    redirectUri="chrome-extension://gnpfhidgpkhliopbgbphicbkkamjefff/intro.html"
    useRefreshTokens={true}
    cacheLocation="localstorage"
    audience="https://express.sample"
  > 
    <Profile/>
  </Auth0Provider>
  </BrowserRouter>,
  document.querySelector('#profile-container')
);

if (module.hot) module.hot.accept();  
