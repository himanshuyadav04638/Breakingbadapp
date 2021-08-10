import { useEffect ,useState} from "react";
import Header from "./Component/Header";
import {Box} from '@material-ui/core'
import Api from "./service/Api";
import Character from './Component/Character'
const App=()=> {
  const [text,settext]=useState("");
  const [data,setdata]=useState([])

  useEffect(() => {
    const getData=async()=>{
    const result = await Api(text);
    setdata(result.data)
    console.log(result);

    }
    getData();
  
  
   
   
  }, [text])

  const getText=(text)=>{
    settext(text)
    console.log(text)
  }
  return (
     <Box>
      <Header getText={getText}/> 
       <Character data={data}/>
     </Box>
  );
}

export default App;
