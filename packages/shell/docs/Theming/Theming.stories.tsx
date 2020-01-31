import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Shell from '../../src/Shell';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const ContainedButtons = () => {
  const classes = useStyles({});

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>

      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>

      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>

      <Button variant="contained" href="#" className={classes.button}>
        Link
      </Button>
    </div>
  );
};

const OutlinedButtons = () => {
  const classes = useStyles({});

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>

      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>

      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>

      <Button variant="outlined" href="#" className={classes.button}>
        Link
      </Button>
    </div>
  );
};

const TextButtons = () => {
  const classes = useStyles({});

  return (
    <div>
      <Button className={classes.button}>Default</Button>

      <Button color="primary" className={classes.button}>
        Primary
      </Button>

      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>

      <Button href="#" className={classes.button}>
        Link
      </Button>
    </div>
  );
};

const SizedButtons = () => {
  const classes = useStyles({});

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>

      <Button variant="contained" size="small" className={classes.button}>
        Small
      </Button>

      <Button variant="contained" size="medium" className={classes.button}>
        Medium
      </Button>

      <Button variant="contained" size="large" className={classes.button}>
        Large
      </Button>
    </div>
  );
};

export const Theming = () => (
  <>
    <Shell>
      <Box>
        <Box margin={4}>
          <Typography variant="h2">Contained Buttons</Typography>
          <ContainedButtons />
        </Box>

        <Box margin={4}>
          <Typography variant="h2">Outlined Buttons</Typography>
          <OutlinedButtons />
        </Box>

        <Box margin={4}>
          <Typography variant="h2">Text Buttons</Typography>
          <TextButtons />
        </Box>

        <Box margin={4}>
          <Typography variant="h2">Button sizes</Typography>
          <SizedButtons />
        </Box>
      </Box>
    </Shell>
  </>
);
