
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  const url = 'https://picsum.photos/v2/list';

  const [images, setImages] = useState([]);

  const getImages = () =>{
    axios.get(url).then((res)=>{
      setImages(res.data)
    })
  }

  useEffect(() =>{
    getImages()
  }, []);

  if(!images){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      {images.map((image)=>{
        return (
          <LazyLoadImage 
            effect='blur'
            src={image.download_url} 
            style={{width:"50%", padding:"10px"}}
            key={image.id}
            placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"} />
        );
        
      })}
    </div>
  );
}

export default App;
