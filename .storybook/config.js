import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(jsxDecorator);
addDecorator(withKnobs);

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
