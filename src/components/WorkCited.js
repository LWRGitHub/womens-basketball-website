import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCited = () => (
    <div className='bg-light rounded m-5 p-5'>
        <h2 className='ml-5  mt-5'><u>Work Cited</u></h2>
        <p className="my-5" style={{fontSize: '20px'}}>
            <ul>
                <li>
                    <a href={process.env.PUBLIC_URL + "/files/First-Girl's-Basketball-Tournament.pdf"}>First Girl's Basketball Tournament PDF</a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + "/files/work-cited.pdf"}>Work Cited PDF</a>
                </li>
            </ul>
        </p> 
    </div>
);

export default WorkCited;