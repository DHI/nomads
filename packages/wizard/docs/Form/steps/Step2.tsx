import React, { FC, ReactEventHandler } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

interface Props {
  form: {
    values: {
      lastName: string;
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
      id="lastName"
      name="lastName"
      placeholder="Last name"
      onChange={handleChange}
      value={values.lastName}
    />
  </Box>
);

export default Step;
