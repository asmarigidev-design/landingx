import React from 'react'; // ایمپورت ری‌اکت برای ساخت کامپوننت // Importing React to build the component
import './Footer.css'; // فایل استایل مخصوص فوتر // CSS file for footer styling
import logo from "../../assets/logo.png"; // لوگوی سایت برای نمایش در فوتر // Site logo to display in footer
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa"; // آیکون‌های تماس و ارتباط از ری‌اکت آیکونز // Contact icons from react-icons

const Footer = () => {
  return (
    <section id="footer"> {/* سکشن اصلی فوتر سایت // Main footer section */}
      <div className="container footer"> {/* کانتینر کلی فوتر // Main footer container */}
        
        <div className="quick-access rtl"> {/* بخش لینک‌های مفید // Useful links section */}
          <h4>لینک های مفید</h4>
          <div className="footer-links">
            <a href="/">&bull; پشتیبانی</a>
            <a href="/">&bull; درباره ما</a>
            <a href="/">&bull; آموزش</a>
            <a href="/">&bull; هاستینگ</a>
            <a href="/">&bull; پیام رسان</a>
          </div>
        </div>

        <div className="support rtl"> {/* بخش پشتیبانی تکراری برای ساختار فوتر // Support section (repeated for layout) */}
          <h4>پشتیبانی</h4>
          <div className="footer-links">
            <a href="/"> پشتیبانی</a>
            <a href="/"> درباره ما</a>
            <a href="/"> آموزش</a>
            <a href="/"> هاستینگ</a>
            <a href="/"> پیام رسان</a>
          </div>
        </div>

        <div className="contact rtl" > {/* اطلاعات تماس با آیکون‌ها // Contact information with icons */}
          <h4>راه های ارتباطی</h4>
          <div className="footer-contact">
           <p><FaMapMarkerAlt />  آدرس : شیراز سمت راست</p>
            <p><FaPhoneAlt />  تلفن : 0989111111111 </p>
            <p> <FaFax />  فکس : 0989111111111</p>
            <p> <FaEnvelope />  ایمیل : Example@gmail.com</p>
            <p><FaGlobe />  وبسایت : www.example.com </p>
          </div>
        </div>

        <div className="footer-logo"> {/* نمایش لوگو و کپی‌رایت در انتهای فوتر // Logo and copyright display */}
          <img src={logo} alt='' />
          <p>&copy; copyright 2021 .com</p>
        </div>

      </div>
    </section>
  );
};

export default Footer; // خروجی گرفتن از کامپوننت برای استفاده در صفحات دیگر // Exporting component for use in other pages
