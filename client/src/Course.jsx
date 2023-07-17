import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";

function Course() {
    const {courseId} = useParams();
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

    let course = null;
    for(let i = 0; i < courses.length; i++) {
        if(courses[i].id == courseId) {
            course = courses[i];
        }
    }

    if(!course) {
        return <div>Course not found</div>
    }

    return (
        <Card style={{width: 300, margin: 10}}>
        <Typography textAlign={"center"} variant="h6">{props.course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
        <img src={props.course.imagelink} alt="image link" style={{width: 300}} />
    </Card>
    )
}

export default Course;