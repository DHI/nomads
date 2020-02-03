import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import * as Types from './types';

import useStyles from './useStyles';

const Topbar: FC<Types.Props> = ({
  left: Left,
  center: Center,
  right: Right,
  children,
  ...rest
}) => {
  const classes = useStyles({});
  return (
    <AppBar {...rest}>
      <Toolbar disableGutters>
        {children || (
          <Box
            width={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {Left && (
              <Box>
                <Left />
              </Box>
            )}
            {Center && (
              <Box>
                <Center />
              </Box>
            )}
            {Right && (
              <Box>
                <Right />
              </Box>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
