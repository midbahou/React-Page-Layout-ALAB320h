

function EmployeeListItem({image, employeeName, profession}) {
// function EmployeeListItem() {
    
    return (

    <div style={{border: "3px solid red", padding: "10px", marginBottom: "3px", display:"flex", backgroundColor: "red"}}>
        <img src={image} alt="Employee image" style={styles}/>

        <div>
        <h3>{employeeName}</h3><br />
        <p>{profession}</p>
        </div>

    </div>

)
}

const styles = {
    borderRadius: "30%",
    width: "100px",
    marginRight: "10px",
}


export default EmployeeListItem;




{/* <div style={{border: "2px solid red"}}>
    <img src="#" alt="Employee image" style={styles}/>
    <h3>Julie Taylor</h3>
    <p>VP of Marketing</p>
</div>

<div style={{border: "2px solid red"}}>
    <img src="#" alt="Employee image" style={styles}/>
    <h3>Eugene Lee</h3>
    <p>CFO</p>
</div> */}