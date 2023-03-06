import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageExample = () => {
  //Calling t and i18n method from useTranslation hook
  const { t, i18n } = useTranslation();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <div>
      {/* Select box to change language */}
      <select className="custom-select" style={{ width: 200 }} onChange={changeLanguageHandler}>
        <option value="en">English</option>
        <option value="hn">Hindi</option>
      </select>
      {/* call name of the variable from  the translation.json file to t() method */}
      <h1>{t('vignesh')}</h1>
    </div>
  );
};

export default LanguageExample;
