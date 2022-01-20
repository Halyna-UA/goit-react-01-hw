import Profil from './components/Profil';
import profil from './profil.json';
//import './App';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <Profil
        avatar={profil[0].avatar}
        username={profil[0].username}
        tag={profil[0].tag}
        location={profil[0].location}
        followers={profil[0].stats.followers}
        followersQuantity={profil[0].stats.followers.quantity}
        views={profil[0].stats.views}
        viewsQuantity={profil[0].stats.likes.quantity}
        likes={profil[0].stats.likes}
        likesQuantity={profil[0].stats.likes.quantity}
      />
    </div>
  );
}
