import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }).then((res) => {
            res.json().then((data) => {
                console.log(data);
                setCourses(data);
            })
        })
    },[])
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <h6>Courses</h6>
            {courses.map((course) => <Course course={course}/>)}
        </div>
    )
}

function Course(props) {
    return (
        <Card style={{width: 300, margin: 10}}>
            <Typography textAlign={"center"} variant="h6">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
            <img src={props.course.imagelink} alt="image link" style={{width: 300}} />
        </Card>
    )
}

export default Courses;