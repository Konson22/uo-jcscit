import { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
 

const apiContext = createContext()


export const useChildren = () => useContext(apiContext)


export default function ChildrenContextProvider({children}) {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [childrenData, setChildren] = useState([])

    
  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true
    async function fetchItems(){
      setLoading(true)
      try{
        const results = await axios('https://api.github.com/users').then(res => res)
        isMuted && setChildren(results.data)
      }catch(error){
        if(error.status === 404 || error.status === 403 || error.status === 500){
          return setError(error?.response?.data)
        }
        setError('Error Occures!')
      }finally{
        setLoading(false)
      }
    }
    fetchItems()

    return () => {
        controller.abort()
        isMuted = false
    }
  }, [])


  const values = {
    loading,
    error,
    childrenData,
    setChildren
  }

  return (
    <apiContext.Provider value={values}>
      {children}
    </apiContext.Provider>
  )
}

