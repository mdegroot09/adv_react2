import {useState, useEffect} from 'react'
import axios from 'axios'

function useAxios(url, method = 'get', body = null, initialData = []){
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios(url, {
      method, 
      body
    })
    .then(res => setData(res.data))
    .catch(console.log)
  }, [body, method, url])  //passing in an array makes it run once; the passed in variables cause a re-render when any of them change
  
  return data
}

export default useAxios