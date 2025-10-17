import React, { useEffect } from 'react'; // ایمپورت ری‌اکت و هوک useEffect برای مدیریت افکت‌ها // Importing React and useEffect hook
import { MdOutlineLibraryBooks } from "react-icons/md"; // آیکون کتابخانه برای عنوان سوالات متداول // Library icon for FAQ title
import { questions } from './data.js'; // دریافت داده‌های سوالات از فایل data.js // Importing questions data
import './Faq.css'; // فایل استایل مخصوص کامپوننت سوالات متداول // CSS file for FAQ component
import Question from './Question.js'; // کامپوننت جداگانه برای نمایش هر سوال // Separate component for each question
import AOS from 'aos'; // کتابخانه انیمیشن هنگام اسکرول // Animation on Scroll library
import 'aos/dist/aos.css'; // استایل‌های مربوط به AOS // AOS styles

function Faq() {
  useEffect(()=>{
    AOS.init(
      { duration: 1000} // تنظیم مدت زمان انیمیشن به ۱۰۰۰ میلی‌ثانیه // Set animation duration to 1000ms
     );
  },[]) // اجرای فقط یک‌بار هنگام بارگذاری کامپوننت // Run once on component mount

  return (
    <section id="faq"> {/* سکشن اصلی سوالات متداول // Main FAQ section */}
      <div className="container faq"> {/* کانتینر کلی برای محتوا // Main container for content */}
        <div className="faq-title"  data-aos="fade-up"> {/* عنوان بخش با افکت بالا آمدن // Section title with fade-up animation */}
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>سوالات متداول</h2>
          <p>در این بخش می‌توانید پاسخ سوالات رایج کاربران را مشاهده کنید. هدف ما ارائه اطلاعات دقیق و شفاف برای تجربه بهتر شماست.</p> {/* توضیح کوتاه درباره بخش سوالات // Brief description of FAQ section */}
        </div>

        <div className="questions"> {/* لیست سوالات متداول // List of FAQ items */}
          {
            questions && questions.map((question) => // پیمایش روی آرایه سوالات // Iterating over questions array
          <Question
          key={question.id} // کلید یکتا برای هر سوال // Unique key for each question
          title={question.title} // عنوان سوال // Question title
          answer={question.answer} // پاسخ سوال // Question answer
          />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Faq; // خروجی گرفتن از کامپوننت برای استفاده در پروژه // Exporting component for use in project
