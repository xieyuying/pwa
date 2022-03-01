import React from 'react';
import ReactDOM from 'react-dom';
import App from '@pages/App';
import { isDev } from './utils/constant';
import PageErrorFallback from '@components/Lib/BeautifulError';
import ErrorBoundary from '@components/Lib/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <ErrorBoundary fallbackRender={PageErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('app')
);

if ('serviceWorker' in navigator && !isDev) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        // eslint-disable-next-line no-console
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        // eslint-disable-next-line no-console
        console.log('SW registration failed: ', registrationError);
      });
  });
}
