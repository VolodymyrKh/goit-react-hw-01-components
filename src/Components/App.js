import React from 'react';
import Profile from './User-profile/Profile';
import Statistics from './Statistical-data/Statistics';
import FriendList from './Friend-list/FriendList';
import TransactionHistory from './Transaction-history/TransActionHistory';
import user from '../../src/user.json';
import statisticalData from '../../src/statistical-data.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';

const App = () => (
  <>
    <Profile
      {...user}
      //   name={user.name}
      //   tag={user.tag}
      //   location={user.location}
      //   avatar={user.avatar}
      //   stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList items={friends} />

    <TransactionHistory items={transactions} />
  </>
);

export default App;
