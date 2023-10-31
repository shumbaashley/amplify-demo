import { useState } from 'react';
import {
  Flex,
  Input,
  Label,
  SelectField,
  Button,
  TextAreaField,
  Heading,
  useTheme,
  Grid,
} from '@aws-amplify/ui-react';

const AddItem = () => {
  const { tokens } = useTheme();

  const [name, setName] = useState('');
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [typeOptions, setTypeOptions] = useState([
    { value: 'income', name: 'Income' },
    { value: 'expense', name: 'Expense' },
  ]);

  const submit = e => {
    e.preventDefault();
    console.log('submitting');
    console.log({ name, type, description, amount });
  };

  return (
    <Grid>
      <Flex direction="column">
        <Heading level={4} fontWeight={tokens.fontWeights.normal}>
          Add New Item
        </Heading>
        <form action="" method="post" onSubmit={submit}>
          <Flex direction="column" gap="small">
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              name="name"
              onChange={e => setName(e.target.value)}
            />
          </Flex>

          <Flex direction="column" gap="small">
            <Label htmlFor="amount">Amount:</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              onChange={e => setAmount(e.target.value)}
            />
          </Flex>

          <TextAreaField
            descriptiveText="Enter more details"
            label="Description"
            name="description"
            placeholder=""
            onChange={e => setDescription(e.target.value)}
            rows={3}
          />

          <SelectField
            label="Item type:"
            onChange={e => setType(e.target.value)}
          >
            {typeOptions.map(typeOption => {
              return (
                <option key={typeOption.value} value={typeOption.value}>
                  {typeOption.name}
                </option>
              );
            })}
          </SelectField>

          <Button variation="primary" type="submit" loadingText="...">
            Add Item
          </Button>
        </form>
      </Flex>
    </Grid>
  );
};

export default AddItem;
