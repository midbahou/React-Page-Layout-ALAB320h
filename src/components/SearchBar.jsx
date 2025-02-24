

function SearchBar() {

    return (
        <div className="Search-Bar" style={{border: "3px solid green", backgroundColor:"lightblue"}}>

            <div style={styles}>
            <input type="text" id="search-bar" placeholder="Search Employee Name" required />
            <button id="search-btn" type="button">Search</button>
            </div>

        </div>
    )
}

const styles = {
    display: "flex",
    justifyContent: "space-around",
    border_radius: "10px",

}


export default SearchBar;