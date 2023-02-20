import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import axios from 'axios'; 
import PostMain from './components/PostMain';
import PostParis from './components/PostParis';
import PostAbout from './components/PostAbout';
import {useState, useEffect} from 'react';
// $.ajax와 거의 비슷, 서버에 데이터 요청시 비동기적으로 요청하려고 씀

function App() {

  const [postList, setPostList] = useState([])
  useEffect(()=>{
    selectAll()
  },[])

  const selectAll = async()=>{
    const result = await axios.get('/Paris')
    setPostList(result.data)
    // http://localhost:4000/List -> package.json - proxy
    // ES6 -> template string, arrow function, async-await
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<PostMain postList={postList}/>}/>
            <Route path='/Paris' element={<PostParis/>}/>
            <Route path='/about' element={<PostAbout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
