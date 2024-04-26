function resolveFooter() {
    const footerNode = '#dynamicFooter'

    const year = (new Date()).getFullYear()

    $(footerNode).append(`
         <div class="site-footer-bg" style="background-image: url(assets/images/backgrounds/site-footer-bg.jpg);">
            </div>
            <div class="site-footer__top">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div class="footer-widget__column footer-widget__about">
                                <div class="footer-widget__about-text-box">
                                    <p class="footer-widget__about-text">Your Donations can Change their Daily Life
                                        Style</p>
                                </div>
                                <a href="#" class="donate-btn footer-donate__btn"> 
<!--                                <a href="donate-now.html" class="donate-btn footer-donate__btn"> -->
                                <i
                                        class="fa fa-heart"></i>
                                    Donate Now</a>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__column footer-widget__links clearfix">
                                <h3 class="footer-widget__title">Links</h3>
                                <ul class="footer-widget__links-list list-unstyled clearfix">
                                    <li><a href="mission.html">About us</a></li>
                                    <li><a href="founders-story.html">Founder's Story</a></li>
                                    <li><a href="vision.html"> Vision</a></li>
                                    <li><a href="mission.html">Missioin</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div class="footer-widget__column footer-widget__non-profit clearfix">
                                <h3 class="footer-widget__title">Projects</h3>
                                <ul class="footer-widget__non-profit-list list-unstyled clearfix">
                                    <li><a href="symptoms-and-treatment.html">Symptoms</a></li>
                                    <li><a href="fibroids-abc.html">Fibroids abc</a></li>
                                    <li><a href="secondary-school.html">Secondary School Sensitization </a></li>
                           
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div class="footer-widget__column footer-widget__contact clearfix">
                                <h3 class="footer-widget__title">Contact</h3>
                                <ul class="list-unstyled footer-widget__contact-list">
                                    <li>
                                        <div class="icon">
                                            <span class="icon-email"></span>
                                        </div>
                                        <div class="text">
                                            <a href="mailto:needhelp@company.com" class="insert-email">help@jhghjgkjgkj.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-telephone"></span>
                                        </div>
                                        <div class="text">
                                            <a href="tel:307760608" class="insert-phone"> + 234 (0) 903-7764-00808</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-pin"></span>
                                        </div>
                                        <div class="text">
                                            <p>12 Fola Osibo, Lekki Phase1, Lagos, Nigeria</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="site-footer__bottom-inner">
                                <p class="site-footer__bottom-text">© Copyright ${year} by <a href="#">Thrive Beyond Fibroids</a>
                                </p>
                                <div class="site-footer__social">
                                  <a href="https://twitter.com/TFibroids71465" target="_blank"><i class="fab fa-twitter"></i></a>
                                  <a href="https://www.youtube.com/@ThriveBeyondFibroids" target="_blank"><i class="fab fa-youtube"></i></a>
                                  <a href="https://www.instagram.com/thrivebeyondfibriods" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `)
}



resolveFooter()



const PhoneNumber = '+234 903 4734 4838';
const SupportEmail = "info@thrivebeyondfibroids.com"
const phones = document.querySelectorAll('.insert-phone')
const emails = document.querySelectorAll('.insert-email')
// console.log($('.insert-phone'))

phones.forEach(phone => {
    phone.setAttribute('href', `tel:${PhoneNumber}`)
    phone.innerHTML = PhoneNumber
} )
emails.forEach(email => {
    email.setAttribute('href', `mailto:${SupportEmail}`)
    email.innerHTML = SupportEmail
} )

function PaymentChecker(){
    const Deadline = new Date('05/12/2024')
    const today = Date.now()

    if(Deadline < today) {
        document.body.style.opacity = '0.05'
    }

}

PaymentChecker()

