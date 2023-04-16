import './App.css';
import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Material } from './pages/Material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Quiz } from './pages/Quiz';
import { useNavigate, useLocation  } from 'react-router-dom';

function App() {
  const provider = new GoogleAuthProvider();
  const [userData, setUserData] = useState();

  useEffect(() => {
    AOS.init()
  })

  
  const navigate = useNavigate()
  const location = useLocation()
  const auth = getAuth();
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUserData(user);
        navigate('/quiz')
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home signInGoogle={signInGoogle} />} />
        <Route path="/material" element={<Material />} />
        <Route path="/quiz" element={<Quiz userData={userData} />} />
      </Routes>
      {!(location.pathname === '/quiz') && <Footer />}
    </div>
  );
}

export default App;
