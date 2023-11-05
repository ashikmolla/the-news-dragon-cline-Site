import React from 'react';
import QZon1 from '..//../../assets/qZone1.png'
import QZon2 from '..//../../assets/qZone2.png'
import QZon3 from '..//../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary p-1 rounded my-4 mt-4'>
            <h4 className=" text-center"> Q-Zone</h4>
            <div className=''>
                <img className="d-block m-auto"  src={QZon1} alt="" />
                <img className="d-block m-auto" src={QZon2} alt="" />
                <img className="d-block m-auto" src={QZon3} alt="" />
            </div>
        </div>
    )
};

export default QZone;