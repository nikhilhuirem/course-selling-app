import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            
        <center>
            <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
            }}>
                <Typography variant='h6'>
                    Welcome to Coursera. Sign in below
                </Typography>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                
                <Card variant="outlined" sx={{ width: 400, padding: 5 }}>
                
                    <TextField
                        onChange={(evant11) => {
                            let elemt = evant11.target;
                            setEmail(elemt.value);
                        }}
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br/><br/>
                    
                   
                    <Button size={"large"} variant='contained' onClick={() => {
                        fetch("http://localhost:3000/admin/login", {
                            method: 'POST',
                            body: JSON.stringify({username: email, password: password}),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }).then((res) => {
                            res.json().then((data) => {
                                localStorage.setItem("token", data.token);
                                window.location = '/'
                            })
                        })
                    }}>
                    Log in</Button>
                   
                    
                </Card>
            </div>
        </center>
        </div>
    )
}

export default Signin;