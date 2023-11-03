import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='mt-2'>
                    <spen>Journalism Without Fear or Favour</spen>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex">
                <Button className='px-4' variant="danger">Latest</Button>
                <Marquee className='text-green ' speed={100}>
                    বিয়ে করেছেন ঢালিউডের আলোচিত নায়িকা পরীমনি। পরীর স্বামীর নাম কামরুজ্জামান রনি। তিনি ছোট পর্দার নির্মাতা।
                    অভিনেত্রী আগেই জানিয়েছিলেন 'গুনিন' ছবির শ্যুটিং সেটে গোপনে রাজকে বিয়ে করেছেন তিনি। তবে চলতি মাসের শুরুতে তাঁর মা হতে চলবার ...
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;