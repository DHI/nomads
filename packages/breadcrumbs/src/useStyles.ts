import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    link: {
      cursor: 'pointer',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.text.primary,
      },
      '&:active': {
        color: theme.palette.text.primary,
      },
      '&:focus': {
        color: theme.palette.text.primary,
      },
    },
    linkIsActive: {
      pointerEvents: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    labelIsActive: {
      fontWeight: 'bold',
    },
  }),
);
