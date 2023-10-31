import { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';
import { ThemeProvider } from '@aws-amplify/ui-react';

function App() {
  return (
    <ThemeProvider colorMode="light">
      <Home />
    </ThemeProvider>
  );
}

export default App;
