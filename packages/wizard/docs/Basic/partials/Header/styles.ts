import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {},
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    fab: { margin: '20px' },
    stepper: {
      borderBottom: '1px solid gray',
      marginBottom: '10px',
    },
  }),
);
