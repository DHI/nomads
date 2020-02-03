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
        <Box className={classes.container}>
          {children || (
            <>
              <Box className={classes.block} justifyContent="flex-start">
                {Left && <Left />}
              </Box>
              <Box className={classes.block} justifyContent="center">
                {Center && <Center />}
              </Box>
              <Box className={classes.block} justifyContent="flex-end">
                {Right && <Right />}
              </Box>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
