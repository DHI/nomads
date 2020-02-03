import React, { FC } from 'react';
import { Formik, Form as CoreForm, useFormikContext } from 'formik';

import * as Types from './types';

export const useForm = useFormikContext;

const Form: FC<Types.Props> = ({ children, initialValues = {}, onSubmit, ...rest }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} {...rest}>
      <CoreForm>{children}</CoreForm>
    </Formik>
  );
};

export default Form;
