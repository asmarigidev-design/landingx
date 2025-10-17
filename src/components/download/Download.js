import React, { useEffect } from 'react'; // ایمپورت ری‌اکت و هوک useEffect برای مدیریت افکت‌ها // Importing React and useEffect hook
import { FaApple, FaWindows } from 'react-icons/fa'; // آیکون‌های اپل و ویندوز از کتابخانه ری‌اکت آیکونز // Apple and Windows icons from react-icons
import { GrAndroid } from 'react-icons/gr'; // آیکون اندروید از ری‌اکت آیکونز // Android icon from react-icons
import './Download.css'; // فایل استایل مخصوص این کامپوننت // CSS file for styling this component
import AOS from 'aos'; // کتابخانه انیمیشن اسکرول // Animation on Scroll library
import 'aos/dist/aos.css'; // استایل‌های مربوط به AOS // AOS styles

function Download() {
  useEffect(()=>{
    AOS.init(
      { duration: 1000} // تنظیم مدت زمان انیمیشن به ۱۰۰۰ میلی‌ثانیه // Set animation duration to 1000ms
     );
  },[]) // اجرای فقط یک‌بار هنگام بارگذاری کامپوننت // Run once on component mount

  return(
<section id='download'> {/* سکشن اصلی دانلود اپلیکیشن‌ها // Main section for app downloads */}
<div className='container download' data-aos="fade-up"> {/* کانتینر با افکت بالا آمدن هنگام اسکرول // Container with fade-up scroll animation */}
 <div className='download-title'> {/* عنوان بخش دانلود // Download section title */}
  <h2>دانلوداپلیکیشن ما</h2>
  <p>برنامه های ما برای دانلود در همه ی فروشگاه ها موجود است</p>
 </div>
 <div className='download-apps'> {/* لیست پلتفرم‌های قابل دانلود // List of downloadable platforms */}
<div className='download-app'> {/* آیتم اپل // Apple item */}
  <FaApple />
  <p>آیفون</p>
</div>
<div className='download-app'> {/* آیتم ویندوز // Windows item */}
  <FaWindows />
  <p>ویندوز</p>
</div>
<div className='download-app'> {/* آیتم اندروید // Android item */}
  <GrAndroid />
  <p>اندروید</p>
</div>
 </div>
  </div>
</section>
  );
}

export default Download; // خروجی گرفتن از کامپوننت برای استفاده در پروژه // Exporting component for use in project
