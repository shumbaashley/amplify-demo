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
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  // CONSTANTS
  const typeOptions = [
    { value: 'income', name: 'Income' },
    { value: 'expense', name: 'Expense' },
  ]
  const incomeCategories = [
    { value: "Earned income", label: "Earned income" },
    { value: "Passive income", label: "Passive income" },
    { value: "Portfolio income", label: "Portfolio income" },
  ]

  const expenseCategories = [
    { value: "Housing", label: "Housing" },
    { value: "Transportation", label: "Transportation" },
    { value: "Food", label: "Food" },
    { value: "Utilities", label: "Utilities" },
    { value: "Insurance", label: "Insurance" },
    { value: "Medical & Healthcare", label: "Medical & Healthcare" },
    { value: "Debt Payments", label: "Debt Payments" },
    { value: "Personal Spending", label: "Personal Spending" },
    { value: "Recreation & Entertainment", label: "Recreation & Entertainment" },
    { value: "Miscellaneous", label: "Miscellaneous" }
  ]


  const submit = e => {
    e.preventDefault();
    console.log('submitting');
    console.log({ name, type, description, amount, category });
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
              onChange={e => setAmount(parseInt(e.target.value))}
            />
          </Flex>


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
          {
            type === 'expense' && (
              <SelectField
                label="Expense Category:"
                onChange={e => setCategory(e.target.value)}
              >
                <option value=''></option>

                {expenseCategories.map(category => {
                  return (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </SelectField>
            )
          }
          {
            type === 'income' && (
              <SelectField
                label="Income Category:"
                onChange={e => setCategory(e.target.value)}
              >
                <option value=''></option>

                {incomeCategories.map(category => {
                  return (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </SelectField>
            )
          }


          <TextAreaField
            descriptiveText="Enter more details"
            label="Description (Optional):"
            name="description"
            placeholder=""
            onChange={e => setDescription(e.target.value)}
            rows={3}
          />


          <Button variation="primary" type="submit" loadingText="...">
            Add Item
          </Button>
        </form>
      </Flex>
    </Grid>
  );
};

export default AddItem;
