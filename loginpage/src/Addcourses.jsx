import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useState} from "react";


function Addcourses() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{width: 400, padding: 20}}>
    <TextField
        onChange={(e) => {
            setTitle(e.target.value)
        }}
        fullWidth={true}
        label="Title"
        variant="outlined"
        style={{marginBottom: 10}}
    />

    <TextField
        onChange={(e) => {
            setDescription(e.targetl.value)
        }}
        fullWidth={true}
        label="Description"
        variant="outlined"
        style={{marginBottom: 10}}
    />

    <Button
        size={"large"}
        variant="contained"
        onClick={() => {
            function callback2(data) {
                
                alert("Course added")
            }
            function callback1(res) {
                res.json().then(callback2)
            }
            fetch("http://localhost:3000/admin/courses", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    imageLink: "",
                    published: true
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
                .then(callback1)
        }}
    > Add course</Button>
    </Card>
</div>
}
export default Addcourses;