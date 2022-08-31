import { Button, Paper, Stack } from '@mantine/core';
import { TbBolt } from 'react-icons/tb';
import HeaderGroup from '../../../components/HeaderGroup';
import FormattedInput from '../../../components/FormattedInput';
import { useState } from 'react';

const QuickActions: React.FC = () => {
  const [amount, setAmount] = useState<number | undefined>();

  return (
    <Paper p="md" sx={{ height: '100%' }}>
      <Stack sx={{ height: '100%' }}>
        <HeaderGroup header="Quick Actions" Icon={TbBolt} />
        <Stack justify="space-between" sx={{ height: '100%' }} spacing={0}>
          <FormattedInput value={amount} onChange={(value) => setAmount(value)} />
          <Stack>
            <Button color="blue" uppercase>
              Deposit
            </Button>
            <Button color="blue" uppercase>
              Withdraw
            </Button>
            <Button color="blue" uppercase>
              Transfer
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default QuickActions;
