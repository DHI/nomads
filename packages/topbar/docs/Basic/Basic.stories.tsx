import React from 'react';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@dhi-solutions/breadcrumbs';
import Topbar from '../../src';

export const Basic = () => (
  <Box width={1} height={200} padding={4}>
    <Topbar
      left={() => (
        <Box paddingX={2}>
          <Typography variant="h5">My DHI Application</Typography>
        </Box>
      )}
      center={() => (
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
      )}
      right={() => (
        <>
          <>
            <IconButton color="primary">
              <CloudUploadIcon />
            </IconButton>
            <IconButton color="primary">
              <SettingsIcon />
            </IconButton>
          </>
        </>
      )}
    />
  </Box>
);
