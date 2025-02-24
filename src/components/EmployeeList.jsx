import EmployeeListItem from "./EmployeeListItem";

import photo1 from "../assets/face4.jfif"
import photo2 from "../assets/face3.jfif"
import photo3 from "../assets/face1.jfif"
import photo4 from "../assets/face2.png"
import photo5 from "../assets/face5.jfif"
import photo6 from "../assets/face6.png"


function EmployeeList() {
    
    return(
        <div style={{border: "3px solid #a84bb3", padding:"5px"}}>
            <EmployeeListItem image={photo1} employeeName = "James King" profession = "President & CEO" />
            <EmployeeListItem image={photo2} employeeName = "Julie Taylor" profession = "VP of Marketing" />
            <EmployeeListItem image={photo3} employeeName = "Eugene Lee" profession = "CFO" />
            <EmployeeListItem image={photo4} employeeName = "John Williams" profession = "VP of Engineering" />
            <EmployeeListItem image={photo5} employeeName = "Ray Moore" profession = "VP of Sales" />
            <EmployeeListItem image={photo6} employeeName = "Paul Jones" profession = "QA Manager" />
        </div>
    )
}

export default EmployeeList;