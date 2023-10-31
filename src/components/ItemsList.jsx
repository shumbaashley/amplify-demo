import { useState } from 'react';
import CardItem from './CardItem';
import {
  Heading,
  Placeholder,
  Text,
  useTheme,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Badge,
} from '@aws-amplify/ui-react';

const ItemsList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Milk',
      type: 'Expense',
      amount: 20,
      description: '',
    },
    {
      id: 2,
      name: 'Pay',
      type: 'Income',
      amount: 300,
      description: '',
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Grid>
      {' '}
      {isLoading && <Loading />}
      <Placeholder size="large" />
      <Table caption="" highlightOnHover={false} variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Type</TableCell>
            <TableCell as="th">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => {
            return (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.type === 'Expense' && <Badge variation="error">{item.type}</Badge>}
                  {item.type === 'Income' && <Badge variation="info">{item.type}</Badge>}
                </TableCell>
                <TableCell>{item.amount}</TableCell>
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
    </Grid>
  );
};

export default ItemsList;
