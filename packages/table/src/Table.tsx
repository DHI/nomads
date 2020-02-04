import React, { FC } from 'react';
import CoreTable from '@material-ui/core/Table';
import CoreTableBody from '@material-ui/core/TableBody';
import CoreTableCell from '@material-ui/core/TableCell';
import CoreTableHead from '@material-ui/core/TableHead';
import CoreTableRow from '@material-ui/core/TableRow';
import orderBy from 'lodash/orderBy';

import TableListRow from './partials/TableListRow';

import * as Types from './types';

const TableList: FC<Types.IProps> = ({
  columns = [],
  data = [],
  hover = true,
  sorting = [],
  onRowClick = () => ({}),
  onHeadClick = () => ({}),
}) => {
  if (!columns.length || !data.length) return null;
  const fields = sorting.map(item => item.field);
  const directions = sorting.map(item => item.direction);
  const sortedRows = orderBy(data, fields, directions);
  return (
    <CoreTable>
      <CoreTableHead>
        <CoreTableRow>
          {columns.map(column => (
            <CoreTableCell
              key={column.heading}
              onClick={() => onHeadClick(column as Types.IColumn)}
            >
              {column.heading}
            </CoreTableCell>
          ))}
        </CoreTableRow>
      </CoreTableHead>
      <CoreTableBody>
        {sortedRows.map(sortedRow => (
          <TableListRow
            key={sortedRow.id}
            row={sortedRow}
            columns={columns}
            hover={hover}
            onRowClick={onRowClick}
          />
        ))}
      </CoreTableBody>
    </CoreTable>
  );
};

export default TableList;
