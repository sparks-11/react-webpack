import React from 'react';
import LanguageExample from '../screens/LanguageExample';
import { useTranslation } from 'react-i18next';
import ReduxExample from '../screens/ReduxExample';

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="helloWorld">{t('hello world')}</h1>

      {/* Below is the example component for changing the language format across project */}
      {/* <LanguageExample /> */}

      {/* Below is the example component for redux toolkit management acreoss the app */}
      <ReduxExample />
    </div>
  );
};

export default App;
