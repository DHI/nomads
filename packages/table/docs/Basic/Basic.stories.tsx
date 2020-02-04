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
    heading: 'First name',
    field: 'firstName',
  },
  {
    heading: 'Last name',
    field: 'lastName',
  },
  {
    heading: 'Contry',
    field: 'country',
  },
  {
    heading: 'Tags',
    component: CustomComponent,
  },
];

const data = [
  {
    id: 1,
    firstName: 'Mads',
    lastName: 'Zeneli',
    country: 'Kosovo',
    tags: ['Nomad'],
  },
  {
    id: 2,
    firstName: 'Robert',
    lastName: 'Popescu',
    country: 'Romania',
    tags: ['Transporting'],
  },
  {
    id: 3,
    firstName: 'James',
    lastName: 'Harper',
    country: 'United Kingdom',
    tags: ['Long hair', "Don't care"],
  },
  {
    id: 4,
    firstName: 'Jerone',
    lastName: 'Derks',
    country: 'Netherlands',
    tags: ['Coffee shop'],
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

export const Basic = () => {
  return (
    <Box bgcolor="background" width={1} padding={4}>
      <Table columns={columns} data={data} sorting={sorting} />
    </Box>
  );
};
