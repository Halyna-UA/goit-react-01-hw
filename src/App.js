import Profil from './components/Profil';
import profil from './profil.json';
import Statistics from './components/Statistics/Statistics';
import statistics from './statistics.json';
import FriendList from './components/FriendList/FriendList';
import friendList from './friendList.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './transactionHistory.json';

export default function App() {
  return (
    <div>
      <Profil
        avatar={profil.avatar}
        username={profil.username}
        tag={profil.tag}
        location={profil.location}
        stats={profil.stats}
      />
      <Statistics elements={statistics} title="Upload stats" />
      <FriendList friends={friendList} />
      <TransactionHistory items={transaction} />
    </div>
  );
}
