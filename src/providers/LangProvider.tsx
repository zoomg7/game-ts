import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Value {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const dictionary: Record<string, Record<string, string>> = {
  en: {
    welcome: 'Welcome',
    st1: 'Some text 1',
    st2: 'Some text 2',
  },
  ru: {
    welcome: 'Добро пожаловать',
    st1: 'Какой-то текст 1',
    st2: 'Какой-то текст 2',
  }
};

const LangContext = createContext<Value>({} as Value);

export const useLang = () => useContext(LangContext);

interface Props {
  children: ReactNode;
}

const LangProvider = (props: Props) => {
  const {children} = props;
  const [lang, setLang] = useState<string>('en')

  const value: Value = {
    lang,
    setLang,
    t: (key: string) => {
      return dictionary[lang][key] ?? dictionary['en'][key] ?? key
    }
  }

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;