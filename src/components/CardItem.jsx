import {
  Card,
  Text,
  Badge,
  Flex,
  Divider,
  useTheme,
} from '@aws-amplify/ui-react';

const CardItem = ({ name, amount, type, description }) => {
  const { tokens } = useTheme();

  let badgeColor = type === 'Income' ? 'info' : 'error';
  return (
    <Card margin={tokens.space.xs} variation="elevated">
      <Flex direction="row" justifyContent="space-between">
        <Text>{name}</Text>
        <Text>USD$ {amount}</Text>
      </Flex>
      <Badge variation={badgeColor}>{type}</Badge>
    </Card>
  );
};

export default CardItem;
