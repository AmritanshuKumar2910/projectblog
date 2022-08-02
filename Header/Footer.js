import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div class="row">
            <div class="col">
                <img src="../Resources/siteicon.png" classname="footerlogo"/>
                <p style="font-size:17px; font-weight: 450; color:rgba(3, 3, 3, 0.486);">"Just Share A Story And Connect with
                    Million of Hearts."</p>
            </div>
            <div class="col">
                <h3 style="color:white !important;">Popular Cateogry</h3>
                <p>Technology</p>
                <p>Politics</p>
                <p>Education</p>
            </div>
            <div class="col">
                <h3 style="color:white !important;">Quick Links</h3>
                <p>Account</p>
                <p>Register</p>
                <p>Help</p>
                <p>Terms</p>
            </div>
            <div class="col">
                <h3 style="color:white !important;">Contact</h3>
                <p>Gola Road, Patna(Bihar)</p>
                <p>PIN 800012, India.</p>
                <p class="email-id">TheBloggerSpot2910@gmail.com</p>
                <p>+91 - 6200831673.</p>
            </div>

        </div>
    )
}
