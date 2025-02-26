import EmployeeList from "./EmployeeList";
import Header from "./Header";
import Learner from "./Learner";
import Payload from "./PayLoad";
import SearchBar from "./SearchBar";



function HomePage() {
    
    return (
        <div>
            
        <div style={{border:"3px solid yellow", padding:"5px", width: "400px"}}>
        <Header />
        <SearchBar />
        <EmployeeList />
        </div>
        
            <Learner />
            {/* <Payload /> */}
        </div>
    )
}


export default HomePage;