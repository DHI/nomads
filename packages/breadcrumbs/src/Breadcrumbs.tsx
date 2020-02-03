import React, { FC } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import CoreBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import useStyles from './useStyles';

import * as Types from './types';

const Breadcrumbs: FC<Types.IProps> = ({ list, ...rest }) => {
  const classes = useStyles({});
  return (
    <CoreBreadcrumbs separator="›" aria-label="mikebreadcrumb" {...rest}>
      {list.map(
        ({ label, href, onClick, isActive = false }: Types.IBreadcrumb) => (
          <Link
            key={label}
            className={clsx(classes.link, {
              [classes.linkIsActive]: isActive,
            })}
            href={href}
            onClick={onClick}
          >
            <Typography
              variant="body2"
              className={clsx({
                [classes.labelIsActive]: isActive,
              })}
            >
              {label}
            </Typography>
          </Link>
        ),
      )}
    </CoreBreadcrumbs>
  );
};

export default Breadcrumbs;
