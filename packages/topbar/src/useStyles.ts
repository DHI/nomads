import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const inheritHeight = {
  minHeight: 'inherit',
  margin: 0,
  padding: 0,
};

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: '-4px',
      overflow: 'hidden',
      ...inheritHeight,
    },
    block: {
      width: 'calc(100% / 3)',
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      ...inheritHeight,
    },
  }),
);
