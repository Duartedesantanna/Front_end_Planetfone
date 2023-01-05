import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Sobre from './pages/Sobre/index';

function Path(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Main/>} />
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>        
        </BrowserRouter>
    );
};

export default Path;