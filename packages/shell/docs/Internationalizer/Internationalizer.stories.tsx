import React, { FC, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Shell, { ShellContext } from '../../src';

import { IContext } from '../../src/partials/GlobalStateProvider/types';

const LanguageSwitcher: FC = () => {
  const { states } = useContext<IContext>(ShellContext);
  const { intl } = states;
  const { instance, translate } = intl;

  const headline = translate('welcome');

  const handleChange = (lang: string) => instance.changeLanguage(lang);

  const setDanish = () => handleChange('da');
  const setEnglish = () => handleChange('en');

  return (
    <div className="App">
      <Container maxWidth="xl">
        <h1>{headline}</h1>
        <Box display="flex" justifyContent="center">
          <Box padding={2}>
            <Button variant="contained" color="primary" onClick={setDanish}>
              Danish
            </Button>
          </Box>
          <Box padding={2}>
            <Button variant="contained" color="secondary" onClick={setEnglish}>
              English
            </Button>
          </Box>
        </Box>
        <h5>Active language: {instance.language}</h5>
      </Container>
    </div>
  );
};

export const Internationalizer = () => (
  <Shell
    overrides={{
      intl: {
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
      },
    }}
    withIntl
  >
    <LanguageSwitcher />
  </Shell>
);
