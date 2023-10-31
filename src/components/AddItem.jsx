import { useState } from 'react';
import { Flex, Input, Label, SelectField, Button } from '@aws-amplify/ui-react';

const AddItem = () => {
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
    console.log({name, type, description, amount});
  };

  return (
    <>
      <Flex direction="column">
        <form action="" method="post" onSubmit={submit}>
          <Flex direction="column" gap="small">
            <Label htmlFor="name">Name:</Label>
            <Input id="name" name="name" onChange={(e) => setName(e.target.value)} />
          </Flex>

          <Flex direction="column" gap="small">
            <Label htmlFor="amount">Amount:</Label>
            <Input id="amount" name="amount" type="number" onChange={(e) => setAmount(e.target.value)} />
          </Flex>

          <Flex direction="column" gap="small">
            <Label htmlFor="description">Description (Optional):</Label>
            <Input id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
          </Flex>

        <SelectField label="Item type:" onChange={(e) => setType(e.target.value)}>
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
    </>
  );
};

export default AddItem;
