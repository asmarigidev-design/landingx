import React, { useEffect } from 'react'; // ایمپورت ری‌اکت و هوک useEffect برای مدیریت افکت‌ها // Importing React and useEffect hook
import { BsFillBookmarkStarFill } from "react-icons/bs" // آیکون ستاره برای عنوان ویژگی‌ها // Star icon for features title
import './Features.css' // فایل استایل مخصوص کامپوننت ویژگی‌ها // CSS file for Features component
import phoneFeatures from '../../assets/phone-features.png'; // تصویر ویژگی‌های اپلیکیشن موبایل // Image showing mobile app features
import { FeaturesList } from './data.js' // لیست ویژگی‌ها از فایل داده‌ها // Features list from data file
import { BsHexagon } from "react-icons/bs" // آیکون شش‌ضلعی برای نمایش هر ویژگی // Hexagon icon for each feature
import AOS from 'aos'; // کتابخانه انیمیشن هنگام اسکرول // Animation on Scroll library
import 'aos/dist/aos.css'; // استایل‌های مربوط به AOS // AOS styles

const Features = () => {
  useEffect(()=>{
    AOS.init(
      { duration: 1000} // تنظیم مدت زمان انیمیشن به ۱۰۰۰ میلی‌ثانیه // Set animation duration to 1000ms
     );
  },[]) // اجرای فقط یک‌بار هنگام بارگذاری کامپوننت // Run once on component mount

  return (
    <section id='features'> {/* سکشن اصلی ویژگی‌ها // Main section for features */}
       <div className='container features'> {/* کانتینر کلی برای محتوا // Main container for content */}
        <div className='title'  data-aos="fade-up"> {/* عنوان بخش با افکت بالا آمدن // Section title with fade-up animation */}
         <BsFillBookmarkStarFill color="orangered" size="30" />
          <h2>ویژگی های اصلی</h2>
           <p>در این بخش با قابلیت‌های کلیدی اپلیکیشن ما آشنا شوید که تجربه‌ای سریع، امن و کاربرپسند را برای شما فراهم می‌کند.</p> {/* توضیح کوتاه درباره ویژگی‌ها // Brief description of features */}
        </div>
        <div className='features-content'> {/* بخش محتوای ویژگی‌ها // Features content section */}
          <div className='features-right'  data-aos="fade-right"> {/* تصویر سمت راست با افکت اسکرول // Right image with scroll animation */}
            <img src={phoneFeatures} alt='' />
          </div>
          <div className='features-left'  data-aos="fade-left"> {/* لیست ویژگی‌ها در سمت چپ // Features list on the left */}
            {
              FeaturesList.map(feature =>( // پیمایش روی لیست ویژگی‌ها // Iterating over features list
               <div className='feature' key={feature}> {/* آیتم هر ویژگی // Each feature item */}
               <div className='feature-icon'> {/* آیکون ویژگی // Feature icon */}
               <BsHexagon color='#fc5412' size={55} />
               <div className='inner-icon'>{feature.icon}</div>
               </div>
               <div className='feature-text'> {/* متن ویژگی شامل عنوان و توضیح // Feature text including heading and description */}
               <h2>{feature.heading}</h2>
               <p>{feature.text}</p>
               </div>
               </div> 
              ))
            }
          </div>
        </div>
       </div>
    </section>
  );
};

export default Features; // خروجی گرفتن از کامپوننت برای استفاده در پروژه // Exporting component for use in project
