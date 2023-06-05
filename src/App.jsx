import Homecrud from "./CRUD/Homecrud"
import Createusers from "./CRUD/Createuers"
import Users from "./CRUD/User"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Editusers from "./CRUD/Editusers"

const App=()=>{
    return(
        <section>
           <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route element={<Createusers/>} path="/comp1"/>
                <Route element={<Users/>} path="/comp2"/>
                <Route element={<Editusers/>} path={`/comp3/:xyz`}/>
            </Routes>
            </BrowserRouter>
        </section>
    )
}
export default App