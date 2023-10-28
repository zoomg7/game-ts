import React from 'react';
import { useLang } from 'providers/LangProvider';

const Content = () => {
  const {t} = useLang();
  return (
    <div>
      <strong>{t('st1')}</strong>
      <br/>
      <strong>Some text 2</strong>
      <br/>
      <strong>Some text 3</strong>
    </div>
  );
};

export default Content;