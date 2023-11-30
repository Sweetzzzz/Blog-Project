import {useEffect, useState} from 'react'




const useFetch1 = (url) => {

    const [data1, setData1] = useState(null)
    const [error1, setError1] = useState(null)
    const [loading1, setLoading1] = useState(true)




    useEffect(() => {
        const fetchData = async () => {
            setLoading1(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData1(json)
                setLoading1(false)
                
            } catch (error1) {
                setError1(error1)
                setLoading1(false)
            }
        }
        fetchData()
  
    }, [url])
    
  return {loading1, error1, data1}
}

export default useFetch1