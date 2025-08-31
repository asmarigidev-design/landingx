import React, { useState } from 'react'; // ایمپورت ری‌اکت و هوک useState برای مدیریت منوی موبایل // Importing React and useState for mobile menu toggle
import { AiOutlineBars } from "react-icons/ai"; // آیکون منوی باز برای موبایل // Menu open icon for mobile
import { RiCloseLine } from "react-icons/ri"; // آیکون بستن منو برای موبایل // Menu close icon for mobile
import { SiAnaconda } from "react-icons/si"; // آیکون لوگو از ری‌اکت آیکونز // Logo icon from react-icons
import './Navbar.css'; // فایل استایل مخصوص نوبار // CSS file for navbar styling

const Navbar = () => {
  const [showIcon , setShowIcon] = useState(false); // وضعیت نمایش منوی موبایل // State for showing/hiding mobile menu

  const toggleMenu = () => {
    setShowIcon(!showIcon); // تغییر وضعیت منو هنگام کلیک // Toggle menu visibility on click
  }

  return (
    <nav className="navbar container"> {/* سکشن نوبار اصلی سایت // Main navbar section */}
      <div className="menu"> {/* بخش منو شامل لینک‌ها // Menu section with navigation links */}
        <ul className="nav-links" id={showIcon ? "show-links-mobile" : "show-links-mobile-hide" }> {/* نمایش منو در حالت موبایل // Mobile menu toggle */}
          <li><a href="/" className="btn btn-dark">آموزش بیشتر</a></li>
          <li><a href="#header">خانه</a></li>
          <li><a href="#features">امکانات</a></li>
          <li><a href="#download">دانلود</a></li>
          <li><a href="#subscribe">مشترک شوید</a></li>
        </ul>
      </div>

      <div className="logo"> {/* نمایش لوگو در نوبار // Logo display in navbar */}
        <SiAnaconda color="#fff" size={30} />
        <p className='logo-text'>
          Social
          <span>X</span>
        </p>
      </div>

      <div className="menu-icons" onClick={toggleMenu}> {/* آیکون باز/بستن منو برای موبایل // Menu toggle icon for mobile */}
        {
          showIcon ? 
          <RiCloseLine size={35} color={"#fff"} cursor={"pointer"}/> // آیکون بستن منو // Close icon
          :
          <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} /> // آیکون باز کردن منو // Open icon
        }
      </div>
    </nav>
  );
};

export default Navbar; // خروجی گرفتن از کامپوننت برای استفاده در صفحات دیگر // Exporting component for use in other pages
