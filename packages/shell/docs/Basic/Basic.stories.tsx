import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Shell from '../../src/Shell';

export const Basic = () => (
  <Shell>
    <Box>
      <Box bgcolor="primary.main" margin={1} padding={2}>
        <Typography variant="h2" color="textSecondary">
          Shell
        </Typography>
        <Box bgcolor="primary.light" margin={1} padding={2}>
          <Typography variant="body1">Internationalization Provider</Typography>
          <Box border={1} borderColor="primary" margin={1} padding={2}>
            <Typography variant="body1">Global State Provider</Typography>
            <Box border={1} borderColor="primary" margin={1} padding={2}>
              <Typography variant="body1">Theme Provider</Typography>
              <Box bgcolor="primary.main" margin={1} padding={2}>
                <Typography variant="body1" color="textSecondary">
                  Your application
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Shell>
);
