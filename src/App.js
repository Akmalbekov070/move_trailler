
import { Header,  Home } from "./componenet";
import { Route, Routes } from "react-router-dom";


function App() {
  // const [popular, setPopular] = useState([]);
  // useEffect(() => {
  //      fetch(API_REQUEST.popular)
  //      .then(response => response.json())
  //      .then(data =>setPopular(data));
  // }, [])
  
  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
     
    </>
  );
}

export default App;
