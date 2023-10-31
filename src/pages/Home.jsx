import { useState } from 'react';
import { Heading, Text, useTheme } from '@aws-amplify/ui-react';

import CardItem from '../components/CardItem';
import Loading from '../components/Loading';

const Home = () => {
  const { tokens } = useTheme();

  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Milk',
      type: 'Expense',
      amount: 20,
      description: '',
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Heading level={2} fontWeight={tokens.fontWeights.medium}>
        Cashflow Control
      </Heading>
      {isLoading && <Loading />}
      {items.map(item => {
        return <CardItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default Home;
