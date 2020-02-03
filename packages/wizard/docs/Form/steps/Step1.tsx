import React, { FC, ReactEventHandler } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

interface Props {
  form: {
    values: {
      firstName: string;
    };
    handleChange: ReactEventHandler;
  };
}

const Step: FC<Props> = ({ form: { values, handleChange } }) => (
  <Box
    bgcolor="secondary.light"
    width={1}
    height={250}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <TextField
      id="firstName"
      name="firstName"
      placeholder="First name"
      onChange={handleChange}
      value={values.firstName}
    />
  </Box>
);

export default Step;
