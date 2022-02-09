import { SessionProvider } from 'next-auth/react';
import { AppProps } from "next/app";
import LogRocket from 'logrocket';

LogRocket.init('bst3bv/log-rocket-tester', {
  network: {
    requestSanitizer: request => {
      // if the url contains 'ignore'
      if (request.url.toLowerCase().indexOf('ignore') !== -1) {
        // ignore the request response pair
        return null;
      }
      
      // otherwise log the request normally
      return request;
    },
  },
});


LogRocket.identify('1', {
  name: 'Robert Glover',
  email: 'androidgeek54@gmail.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});


const App = ({
   Component,
   pageProps}: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
    </SessionProvider>
  );
};


export default App;

