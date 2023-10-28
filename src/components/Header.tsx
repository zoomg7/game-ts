import React from 'react';
import { useLang } from 'providers/LangProvider';

const Header = () => {
  const {t} = useLang();

  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default Header;