import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const ErrorPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handelBack = () => {
        navigate(from, { replace: true })
    }

    useTitle("Erroer Page")
    return (
        <div className="w-100 text-center pb-5 mt-5" style={{ paddingTop: "100px" }}>

            <div>
                <div className=" mt-5">
                    <h1 className=" mt-5 ">
                        <spen className="">4</spen>
                        <spen className="text-base-300 text-9xl font-bold">O</spen>
                        <spen className="text-orange-600 text-9xl font-bold">4</spen>
                    </h1>
                </div>
                <div className=" ">
                    <h1 className="mt-40 text-5xl ms-36"><spen className="text-orange-500 font-bold text-6xl">O</spen>ops</h1>
                    <h1><spen className="text-4xl ms-28 text-teal-300 font-bold">Nothing </spen> <spen className="text-4xl">here.....</spen></h1>

                    <p className=" w-1/2 ms-24 text-center">You are moving to a wrong URL. Please go back to the correct URL. Badluck</p>
                    <Button onClick={handelBack}> GO Back</Button>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;