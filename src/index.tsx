import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from "./routers/main";
import {Container} from "@mui/material";
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Container className='container' sx={{maxWidth: '1080px !important'}}>
       <RouterProvider router={router}/>
    </Container>
);