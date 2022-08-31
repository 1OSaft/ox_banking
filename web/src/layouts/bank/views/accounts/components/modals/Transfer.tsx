import { Box, Autocomplete, Stack, Button, Text } from '@mantine/core';
import { TbCreditCard } from 'react-icons/tb';
import { closeAllModals } from '@mantine/modals';
import { formatNumber } from '../../../../../../utils/formatNumber';
import { useState } from 'react';
import { fetchNui } from '../../../../../../utils/fetchNui';
import { isEnvBrowser } from '../../../../../../utils/misc';
import { useRecoilValue } from 'recoil';
import { logsAccountsAtom } from '../../../../../../atoms/account';
import FormattedInput from '../../../../components/FormattedInput';

const Transfer: React.FC = () => {
  const accounts = useRecoilValue(logsAccountsAtom);
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState<number | undefined>();

  return (
    <Stack>
      <Box>
        <Text size="xs">Account Balance</Text>
        <Text weight={700} size={28}>
          {formatNumber(92575)}
        </Text>
      </Box>
      <Autocomplete
        placeholder="To account"
        data={accounts}
        icon={<TbCreditCard size={20} />}
        onChange={(value) => setAccount(value)}
        value={account}
      />
      <FormattedInput value={amount} onChange={(value) => setAmount(value)} />
      <Button
        variant="light"
        uppercase
        onClick={async () => {
          if (isEnvBrowser()) return closeAllModals();
          const resp = await fetchNui('transferMoney', { account, amount });
          if (resp) return closeAllModals();
          else fetchNui('notify', 'No such account found.');
        }}
      >
        Transfer
      </Button>
    </Stack>
  );
};

export default Transfer;
