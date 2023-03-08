import React from 'react';
import LanguageExample from '../screens/LanguageExample';
import { useTranslation } from 'react-i18next';
import ReduxExample from '../screens/ReduxExample';
import ApiTest from '../screens/apiTest';

const App = () => {
  const { t } = useTranslation();
  console.log('thisis env', process.env.REACT_APP_API_URL);
  return (
    <div>
      <h1 className="helloWorld">{t('hello world')}</h1>

      {/* Below is the example component for changing the language format across project */}
      {/* <LanguageExample /> */}

      {/* Below is the example component for redux toolkit management acreoss the app */}
      <ReduxExample />
      <h2> text {process.env.REACT_APP_API_URL}</h2>
      <ApiTest />
    </div>
  );
};

export default App;
