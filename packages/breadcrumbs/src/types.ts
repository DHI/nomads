import { ReactEventHandler } from 'react';

export interface IBreadcrumb {
  label: string;
  href?: string;
  onClick?: ReactEventHandler;
  isActive?: boolean;
}

export interface IProps {
  list: IBreadcrumb[];
}
