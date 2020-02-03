import { ReactNode, ReactEventHandler } from 'react';
import { FormikProps, FormikValues } from 'formik';

interface Values {
  [field: string]: any;
}

export interface Props {
  initialValues: Values;
  initialErrors?: Values;
  initialStatus?: string;
  initialTouched?: Values;
  onReset?: ReactEventHandler;
  onSubmit: ReactEventHandler;
  validationSchema?: any | (() => any);
  children: (props: FormikProps<FormikValues>) => ReactNode;
}
