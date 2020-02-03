import React from 'react';
import Box from '@material-ui/core/Box';
import Topbar from '../../src';

export const Basic = () => (
  <Box bgcolor="secondary" width={1} height={1}>
    <Topbar
      left={() => <p>Left</p>}
      // center={() => (
      //   <Breadcrumbs
      //     list={[
      //       {
      //         label: 'Foo',
      //         href: '/foo',
      //       },
      //       {
      //         label: 'Bar',
      //         href: '/Bar',
      //       },
      //       {
      //         label: 'Baz',
      //         href: '/Baz',
      //         isActive: true,
      //       },
      //     ]}
      //   />
      // )}
      right={() => <p>Right</p>}
    />
  </Box>
);
