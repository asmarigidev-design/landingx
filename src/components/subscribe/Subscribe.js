import React, { useEffect } from 'react'; // ایمپورت ری‌اکت و هوک useEffect برای مدیریت افکت‌ها // Importing React and useEffect hook
import { TiSocialGooglePlus } from "react-icons/ti"; // آیکون گوگل پلاس برای شبکه اجتماعی // Google Plus icon for social media
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // آیکون‌های فیسبوک، توییتر و اینستاگرام // Facebook, Twitter, Instagram icons
import './Subscribe.css' // فایل استایل مخصوص بخش اشتراک // CSS file for Subscribe section
import AOS from 'aos'; // کتابخانه انیمیشن هنگام اسکرول // Animation on Scroll library
import 'aos/dist/aos.css'; // استایل‌های مربوط به AOS // AOS styles

const Subscribe = () => {
  useEffect(()=>{
    AOS.init(
      { duration: 1000} // تنظیم مدت زمان انیمیشن به ۱۰۰۰ میلی‌ثانیه // Set animation duration to 1000ms
     );
  },[]) // اجرای فقط یک‌بار هنگام بارگذاری کامپوننت // Run once on component mount

  return (
    <section id="subscribe"> {/* سکشن اشتراک در خبرنامه یا خدمات // Subscription section */}
      <div className="container subscribe" data-aos="fade-up"> {/* کانتینر اصلی با افکت بالا آمدن // Main container with fade-up animation */}
        <h2>حالا مشترک شوید!</h2>
        <form> {/* فرم دریافت ایمیل برای اشتراک // Email subscription form */}
          <button>مشترک شدن</button>
          <input type="text" placeholder='ایمیل خود را وارد کنید ...' />
        </form>

        <div className="socials"> {/* آیکون‌های شبکه‌های اجتماعی // Social media icons */}
          <div className="social-icon">
            <FaInstagram />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
        </div>
      </div>
    </section>
    );
};

export default Subscribe; // خروجی گرفتن از کامپوننت برای استفاده در صفحه اصلی // Exporting component for use in main page
