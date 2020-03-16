import React from 'react';
import {navigate} from 'gatsby'
import Header from "../components/Header"
const Test = () => (
<div>
<Header title="Header of test page"></Header>
<h1>this is a test page</h1>
<h1>this is a test page</h1>
<button onClick={()=>navigate("/")}>Navigate To Home Page</button>
</div>
    
)

export default Test;