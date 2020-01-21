import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const noSpacing = {
  margin: '0 !important',
};

export default makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '50%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.secondary.main,
    },
    noSpacing,
    summary: {
      ...noSpacing,
    },
    content: {
      ...noSpacing,
    },
  }),
);
