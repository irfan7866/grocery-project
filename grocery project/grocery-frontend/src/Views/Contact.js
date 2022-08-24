import React from "react";

import {ImFacebook} from "react-icons/im";
import {ImWhatsapp} from "react-icons/im";
import {ImTelegram} from "react-icons/im";
import {ImTwitter} from "react-icons/im";
import {ImYoutube} from "react-icons/im";
import {ImMail} from "react-icons/im";


export default function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-header"><i><b>Grocery</b></i></h1>

            <h3>Contact us by clicking the icons given below...</h3>

            <ul className="contact-list">
                <li className="contact-list-item"><a href="https://web.whatsapp.com/" target={"_blank"}><ImWhatsapp/></a> Whatsapp</li>
                <li className="contact-list-item"><a href="https://www.facebook.com/" target={"_blank"}><ImFacebook/></a> Facebook</li>
                <li className="contact-list-item"><a href="#" target={"_blank"}><ImTelegram/></a> Telegram</li>
                <li className="contact-list-item"><a href="https://twitter.com/" target={"_blank"}><ImTwitter/></a> Twitter</li>
                <li className="contact-list-item"><a href="https://mail.google.com" target={"_blank"}><ImMail/></a> Email</li>
                
            </ul>

            <h3>Official Address of our centers...</h3>
            
            <address>
                <b>Bangalore:</b> <br/>
                Supermarket Grocery Supplies Pvt. Ltd. <br/>
                3rd floor, <br/>
                Fairway Business Park, <br/>
                Embassy Golf Link, Challaghatta, <br/>
                Bangalore, Karnataka 560000 <br/>
                Tel: 1800-100-1000
            </address>

            <address>
                <b>Mumbai:</b> <br/>
                Gala No. 3,4,5,6, Krishna Mill Compound <br/>
                Sonapur lane, Off LBS marg, Bhandup West <br/>
                Mumbai-400000 <br/>
                Tel: 1800-100-1000
            </address>

            <address>
                <b>Jaipur:</b> <br/>
                Supermarket Grocery Supplies (P.) Ltd. <br/>
                SP-2023, Industrial Area <br/>
                RamchandraPura, Sitapura(Ext.) <br/>
                Jaipur-3020000 <br/>
                Near : Audi Service Station <br/>
                Tel: 1800-100-1000 
            </address>

        </div>
    )
}