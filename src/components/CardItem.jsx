import { Card, Text, Badge, Flex, Divider } from '@aws-amplify/ui-react';

const CardItem = ({ name, amount, type, description }) => {
  let badgeColor = type === 'Income' ? 'info' : 'error';
  return (
    <Card variation="elevated">
      <Flex direction="row" justifyContent="space-between">
        <Text>{name}</Text>
        <Text>USD$ {amount}</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Badge variation={badgeColor}>{type}</Badge>
    </Card>
  );
};

export default CardItem;
