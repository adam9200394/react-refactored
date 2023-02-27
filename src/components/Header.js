import React from "react";
import '../static/css/about.css'
import Loggo from '../static/icons/huppe-logo-white.png';
import Phone from '../static/icons/phone-icon.png';
import Fb from '../static/icons/fb-icon.png';
import Ig from '../static/icons/instgram-icon.png';
import Ln from '../static/icons/linkedin-icon.png';
import tiktok from '../static/./icons/tiktok.png';


function Header () {
    return (
            <div class="fixed-header tw-event-pointer-none" >
                <header class="section-hero">
                    <nav class="nav">
                        <div class="nav__logo tw-event-pointer-fill">
                            <a href="./index.html">
                                <img src={Loggo} alt="huppe" />
                            </a>
                        </div>

                        <div class="nav__mobile tw-event-pointer-fill">
                            <input type="checkbox" class="nav__mobile__checkbox" id="navi-toggle" />

                            <label for="navi-toggle" class="nav__mobile__button">
                                <span class="nav__mobile__icon">&nbsp;</span>
                            </label>

                            <div class="nav__mobile__background">&nbsp;</div>

                            <nav class="nav__mobile__nav">
                                <ul class="nav__mobile__list">
                                    <li class="nav__mobile__item">
                                        <a href="/index.html" class="nav__mobile__link">
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav__mobile__item">
                                        <a href="/about.html" class="nav__mobile__link">
                                            About
                                        </a>
                                    </li>
                                    <li class="nav__mobile__item">
                                        <a href="/services.html" class="nav__mobile__link">
                                            Services
                                        </a>
                                    </li>
                                    <li class="nav__mobile__item">
                                        <a href="/services.html" class="nav__mobile__link">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li class="nav__mobile__item">
                                        <a href="/contact-us.html" class="nav__mobile__link">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <ul class="nav__pages tw-event-pointer-fill">
                            <li class="nav__pages-link">
                                <a href="/about.html">
                                    <span class="m-circle"></span>
                                    <span class="nav__pages-link-title">
                                        About
                                    </span>
                                </a>
                            </li>
                            <li class="nav__pages-link">
                                <a href="/services.html">
                                    <span class="m-circle"></span>
                                    <span class="nav__pages-link-title">
                                        services
                                    </span>
                                </a>
                            </li>
                            <li class="nav__pages-link">
                                <a href="">
                                    <span class="m-circle"></span>
                                    <span class="nav__pages-link-title">
                                        portfolio
                                    </span>
                                </a>
                            </li>
                            <li class="nav__pages-link">
                                <a href="/contact-us.html">
                                    <span class="m-circle"></span>
                                    <span class="nav__pages-link-title">
                                        contact us
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <ul class="nav__social tw-event-pointer-fill">
                            <li class="nav__social-link">
                                <a href="">
                                    <img src={Phone} alt="icon" />
                                </a>
                            </li>
                            <li class="nav__social-link">
                                <a href="">
                                    <img src={Fb} alt="icon" />
                                </a>
                            </li>
                            <li class="nav__social-link">
                                <a href="">
                                    <img src={Ig} alt="icon" />
                                </a>
                            </li>
                            <li class="nav__social-link">
                                <a href="">
                                    <img src={Ln} alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={tiktok} onmouseover="this.src='./icons/tiktokhover.png';" onmouseleave="this.src='./icons/tiktok.png';" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
        </div>
    )
}

export default Header;