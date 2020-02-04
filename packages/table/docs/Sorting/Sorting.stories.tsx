import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Table from '../../src';

const CustomComponent = ({ tags }: { tags: string[] }) => (
  <Box display="flex">
    {tags.map(tag => (
      <Box key={tag} margin={0.5}>
        <Chip color="primary" size="small" label={tag} />
      </Box>
    ))}
  </Box>
);

const columns = [
  {
    heading: 'Language',
    field: 'language',
  },
  {
    heading: '',
    field: 'lastName',
  },
];

const data = [
  {
    id: 1,
    firstName: 'Mads',
    lastName: 'Zeneli',
  },
  {
    id: 2,
    firstName: 'Robert',
    lastName: 'Popescu',
  },
  {
    id: 3,
    firstName: 'James',
    lastName: 'Harper',
  },
  {
    id: 4,
    firstName: 'Jerone',
    lastName: 'Derks',
  },
];

const sorting = [
  {
    field: 'firstName',
    direction: 'asc',
  },
  {
    field: 'lastName',
    direction: 'asc',
  },
];

export const Sorting = () => {
  const onRowClick = (row: { [property: string]: any }) =>
    console.log('Clicked on row:', row);
  const onHeadClick = (head: { [property: string]: any }) =>
    console.log('Clicked on head:', head);
  return (
    <Box bgcolor="background" width={1} padding={4}>
      <Table
        columns={columns}
        data={data}
        sorting={sorting}
        onRowClick={onRowClick}
        onHeadClick={onHeadClick}
      />
    </Box>
  );
};
