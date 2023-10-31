import { Heading, Text, useTheme, Grid } from '@aws-amplify/ui-react';

const Header = () => {
  const { tokens } = useTheme();

  return (
    <div>
      {' '}
      <Heading level={3} fontWeight={tokens.fontWeights.medium}>
        Cashflow Control
      </Heading>
    </div>
  );
};

export default Header;
