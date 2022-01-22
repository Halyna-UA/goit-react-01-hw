import Profil from './components/Profil';
import profil from './profil.json';
//import { Container } from './components/App.styled';//
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
    </div>
  );
}
