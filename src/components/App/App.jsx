import { Container } from './App.styled';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendsList } from 'components/Friends';
import { TransactionsList } from 'components/Transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendsList
        friends={friends}
      />

      <TransactionsList
        transactions={transactions}
      />
    </Container>
  );
};
