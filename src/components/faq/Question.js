import React,{useState} from "react"; // ایمپورت ری‌اکت و هوک useState برای مدیریت وضعیت نمایش پاسخ // Importing React and useState hook
import { AiOutlinePlus } from "react-icons/ai"; // آیکون‌های مثبت و منفی برای باز و بسته کردن پاسخ // Plus and minus icons for toggling answer

function Question({title, answer}){ // دریافت عنوان و پاسخ هر سوال به صورت پراپس // Receiving question title and answer as props
    const [showAnswer, setShowAnswer] = useState(false); // وضعیت نمایش پاسخ سوال // State to toggle answer visibility
    const handleClick = () =>{ // تابع برای تغییر وضعیت نمایش پاسخ // Function to toggle answer visibility
    setShowAnswer(!showAnswer)
 }
    return(
        <div className="container question"> {/* کانتینر اصلی هر سوال // Main container for each question */}
        <div className="question-title"> {/* بخش عنوان سوال و دکمه باز/بسته کردن // Question title and toggle button */}
          <h2>{title}</h2>
          <button onClick={handleClick}>
            <AiOutlinePlus color='#1f93ff' /> {/* آیکون مثبت برای نمایش پاسخ // Plus icon to show answer */}
          </button>
        </div>
        <div className="question-answer"> {/* بخش نمایش پاسخ سوال // Section to show answer */}
          {
            showAnswer &&  <p>{answer}</p> // نمایش پاسخ فقط در صورت فعال بودن وضعیت // Show answer only if state is true
          }
        </div>
      </div>
    )
}
export default Question; // خروجی گرفتن از کامپوننت برای استفاده در کامپوننت اصلی // Exporting component for use in main FAQ
