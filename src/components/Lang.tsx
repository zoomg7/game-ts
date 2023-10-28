import React from 'react';
import { useLang } from 'providers/LangProvider';

const Lang = () => {
  const { lang, setLang } = useLang();

  const onChangeLang = (newLang: string) => () => {
    setLang(newLang);
  }

  return (
    <section>
      <button onClick={onChangeLang('en')} className={lang === 'en' ? 'active' : ''}>English</button>
      <button onClick={onChangeLang('ru')} className={lang === 'ru' ? 'active' : ''}>Russian</button>
    </section>
  );
};

export default Lang;