import React, { useEffect } from 'react'; // ایمپورت ری‌اکت و هوک useEffect برای مدیریت افکت‌ها // Importing React and useEffect hook
import phoneHeader from '../../assets/phone-header-bg.png'; // تصویر هدر اپلیکیشن موبایل // Mobile app header image
import './Header.css'; // فایل استایل مخصوص کامپوننت هدر // CSS file for Header component
import { BsMouse } from "react-icons/bs"; // آیکون موس برای اسکرول به پایین // Mouse icon for scroll-down cue
import AOS from 'aos'; // کتابخانه انیمیشن هنگام اسکرول // Animation on Scroll library
import 'aos/dist/aos.css'; // استایل‌های مربوط به AOS // AOS styles

const Header = () => {
useEffect(()=>{
  AOS.init(
    { duration: 1000} // تنظیم مدت زمان انیمیشن به ۱۰۰۰ میلی‌ثانیه // Set animation duration to 1000ms
   );
},[]) // اجرای فقط یک‌بار هنگام بارگذاری کامپوننت // Run once on component mount

  return (
    <section id="header"> {/* سکشن اصلی هدر سایت // Main header section */}
      <div className="container header"> {/* کانتینر کلی هدر // Main header container */}
        <div className="header-right rtl" data-aos="fade-right"> {/* بخش راست با افکت اسکرول // Right section with scroll animation */}
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>ما در ارائه خدمات دیجیتال، امنیت و ارتباطات سریع در تمامی پلتفرم‌ها پیشگام هستیم.</p> {/* توضیح کوتاه درباره مزایا // Brief description of benefits */}
          <div className="header-btn"> {/* دکمه‌های دعوت به اقدام // Call-to-action buttons */}
            <a href="/" className="btn btn-dark">بیاین شروع کنیم</a>
            <a href="/" className="btn btn-light">چجوری کار میکنیم</a>
          </div>
        </div>
        <div className="header-left" data-aos="fade-left"> {/* بخش چپ شامل تصویر // Left section with image */}
          <img src={phoneHeader} alt="" />
        </div>
      </div>

      <div className="floating-icon"> {/* آیکون شناور برای هدایت به بخش ویژگی‌ها // Floating icon to navigate to features section */}
        <a href="#features">
          <BsMouse color={"#fff"} size={25}  className='mouse'/>
        </a>
      </div>
    </section>
  )
};

export default Header; // خروجی گرفتن از کامپوننت برای استفاده در صفحه اصلی // Exporting component for use in main page
