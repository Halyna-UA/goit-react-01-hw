import Profil from './components/Profil';
import profil from './profil.json';
import Statistics from './components/Statistics/Statistics';
import statistics from './statistics.json';

export default function App() {
  return (
    <div>
      <Profil
        avatar={profil.avatar}
        username={profil.username}
        tag={profil.tag}
        location={profil.location}
        stats={profil.stats}
        //followers={profil.stats.followers}
        //// followersQuantity={profil.stats.followers.quantity}
        //views={profil.stats.views}
        //// viewsQuantity={profil.stats.likes.quantity}
        //likes={profil.stats.likes}
        //// likesQuantity={profil.stats.likes.quantity}
      />

      <Statistics elements={statistics} title="Upload stats" />
    </div>
  );
}
