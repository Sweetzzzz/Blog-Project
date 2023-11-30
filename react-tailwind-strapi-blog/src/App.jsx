import { HomePage, BlogContentPage, AboutPage, EventPage} from "./pages"
import { Routes, Route } from "react-router-dom"
import useFetch from "./hooks/useFetch"
import useFetch1 from "./hooks/useFetch1"

export default function App() {
  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*')
  let {loading1, data1, error1} = useFetch1('http://localhost:1337/api/events?populate=*')
  if (loading) return <p>Loading...</p>
  if (loading1) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  if (error1) return <p>Error!</p>
 


  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage blogs={data?data:""}/>}></Route>
        <Route path="/blog/:id" element={<BlogContentPage blogs={data?data:""}/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/events" element={<EventPage events={data1?data1:""}/>}></Route>
        
      </Routes>

    </div>
  )
}

// http://localhost:1337/admin/auth/login