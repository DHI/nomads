import React from 'react';
import Breadcrumbs from '../../src';

export const Basic = () => (
  <Breadcrumbs
    list={[
      {
        label: 'Foo',
        href: '/foo',
      },
      {
        label: 'Bar',
        href: '/Bar',
      },
      {
        label: 'Baz',
        href: '/Baz',
        isActive: true,
      },
    ]}
  />
);
