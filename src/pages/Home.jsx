import { Grid } from '@aws-amplify/ui-react';

import ItemsList from '../components/ItemsList';
import AddItem from '../components/AddItem';
import TestAPI from '../components/TestAPI';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Grid>
        <Header />
        <ItemsList />
        <AddItem />
        {/* <TestAPI/> */}
      </Grid>
    </>
  );
};

export default Home;
