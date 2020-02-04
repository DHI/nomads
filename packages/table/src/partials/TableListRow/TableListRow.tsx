import React, { FC } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import get from 'lodash/get';

import * as Types from './types';

const TableListRow: FC<Types.IProps> = ({
  hover,
  row,
  onRowClick,
  columns,
}) => (
  <TableRow hover={hover} onClick={() => onRowClick(row as Types.IValue)}>
    {columns.map(({ heading, field, component: Component, options = {} }) => {
      const value = get(row, field);
      const isCustom = !!Component;
      return (
        <TableCell key={heading} {...options}>
          {isCustom ? <Component {...row} /> : value}
        </TableCell>
      );
    })}
  </TableRow>
);

export default TableListRow;
