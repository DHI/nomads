import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const muiTheme = createMuiTheme({});

addDecorator(jsxDecorator);
addDecorator(withKnobs);
addDecorator(StoryFn => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <StoryFn />
  </ThemeProvider>
));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(
  [
    require.context('../docs', false, /Introduction\.stories\.mdx/),
    require.context('../docs', false, /Packages\.stories\.mdx/),
    require.context('../packages', false, /Introduction\.stories\.mdx/),
    require.context('../packages', true, /\.stories\.(tsx|mdx)$/),
  ],
  module,
);
