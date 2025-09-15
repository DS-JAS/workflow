import React from 'react'
import {Mainbar} from '../pages'
import{ Routes,Route }from 'react-router-dom';

export const Allroutes = () => {

return(
    <>
     <Routes>
        <Route path="/" element={<Mainbar title="Easy to Referencing Workflows"  />} />
    </Routes>
    </>
)
   
}

