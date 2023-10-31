import { useState } from 'react';
import { Grid } from '@aws-amplify/ui-react';

import ItemsList from '../components/ItemsList';
import AddItem from '../components/AddItem';
import Loading from '../components/Loading';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Grid>
        <Header />
        <ItemsList />
        <AddItem />
      </Grid>
    </>
  );
};

export default Home;
