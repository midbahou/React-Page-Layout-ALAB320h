import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";



function HomePage() {
    
    return (
        <div style={{border:"3px solid yellow", padding:"5px"}}>
        <Header />
        <SearchBar />
        <EmployeeList />
        </div>
    )
}


export default HomePage;