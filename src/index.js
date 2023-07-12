import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './css/style.css';
import './css/custom.css';
import './css/permissions.css';
import './css/upload.css';
import './css/vendor.css';
import './css/custom_modals.css';
import './css/additional.scss';
import './css/updated.scss';
import './css/loader.scss';
import 'react-responsive-modal/styles.css';
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import './i18n';
import FormLoading from "./components/common/blocks/FormLoading";
const reduxStore = store;

ReactDOM.render(
  <React.StrictMode>
      <Provider store={reduxStore}>
          <BrowserRouter>
              <Suspense fallback={<FormLoading/>}>
                  <App />
              </Suspense>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
