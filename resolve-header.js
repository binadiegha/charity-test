 function resolveHeader(title) {
    const headerNode = '#dynamicHeader'

    $('#dynamicHeader').append(`
        <div class="main-header__top">
            <div class="main-header__top-left">
                <p class="main-header__top-text">Welcome to Thrive Beyond Fibroids</p>
                <div class="main-header__top-social">
                    <a href="https://twitter.com/TFibroids71465" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/@ThriveBeyondFibroids" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/thrivebeyondfibriods" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="main-header__top-right">
                <ul class="list-unstyled main-header__top-address">
                    <li>
                        <div class="icon">
                            <span class="icon-pin"></span>
                        </div>
                        <div class="text">
                            <p>12 Fola Osibo, Lekki Phase1, Lagos, Nigeria</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <span class="icon-email"></span>
                        </div>
                        <div class="text">
                            <p><a href="mailto:help@thrivebeyondfibroid.com" class="insert-email">help@thrivebeyondfibroid.com</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="main-menu clearfix">
            <div class="main-menu-wrapper clearfix">
                <div class="main-menu-wrapper__left">
                    <div class="main-menu-wrapper__logo">
                        <a href="index.html"><img src="assets/images/resources/logo-1.png" alt=""></a>
                    </div>
                    <div class="main-menu-wrapper__call">
                        <div class="main-menu-wrapper__call-icon">
                            <span class="icon-call"></span>
                        </div>
                        <div class="main-menu-wrapper__call-number">
                            <p>Give us a call</p>
                            <h5><a href="tel:13073330079" class="insert-phone">+ 234 (0) 903-4738-374</a></h5>
                        </div>
                    </div>
                </div>
                <div class="main-menu-wrapper__main-menu">
                    <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                    <ul class="main-menu__list">
                        <li class="dropdown">
                            <a href="#">Understanding Fibroid Health</a>
                            <ul>
                                <li><a href="fibroids-abc.html">Fibroid ABC’s</a></li>
                                <li><a href="symptoms-and-treatment.html">Symptoms & Treatment</a></li>
                                <li><a href="myths.html">Myths</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">About us</a>
                            <ul>
                                <li><a href="mission.html">Our Mission</a></li>
                                <li><a href="founders-story.html">Founder's Story</a></li>
                                <li><a href="vision.html">Our Vision</a></li>
                                <li><a href="big-issues-we-are-fixing.html">Big Issues we’re fixing</a></li>
                                <li><a href="impact.html">Impact</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Projects</a>
                            <ul>
                                <li><a href="secondary-school.html">Secondary School Sensitization Project 001</a></li>
                                <li><a href="our-stories.html">Our Stories</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Get Involved</a>
                            <ul>
                                <li><a href="become-volunteer.html">Be a Part</a></li>
                                <li><a href="become-volunteer.html">Volunteer</a></li>
                                <li><a href="become-volunteer.html">Share your Story</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Blog</a>
                            <ul>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="research.html">Research</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="main-menu-wrapper__right">
                    <!--      <div class="main-menu-wrapper__search-cat">
                              <a href="#" class="main-menu-wrapper__search search-toggler icon-magnifying-glass"></a>
                              <a href="login.html" class="main-menu-wrapper__cart icon-avatar mini-cart__toggler"></a>
                          </div>-->
                    <a href="#" class="donate-btn main-menu-wrapper__btn"> <i class="fa fa-heart"></i>
                        Donate Today</a>
                </div>
            </div>
        </nav>
    `)
}


