import {Navbar, Header, Features, Download, Subscribe, Faq, Footer} from './components'; // ایمپورت همه کامپوننت‌های اصلی از پوشه components // Importing all main components from components folder

function App() {
  return (
    <main> {/* ریشه اصلی اپلیکیشن برای نمایش محتوا // Main root of the application */}
        <header className="header-bg"> {/* بخش هدر شامل نوبار و معرفی اولیه // Header section with navbar and intro */}
          <Navbar />
          <Header />
        </header>
        <Features /> {/* نمایش ویژگی‌های اپلیکیشن // Displaying app features */}
        <Download /> {/* بخش دانلود برای پلتفرم‌های مختلف // Download section for various platforms */}
        <Subscribe /> {/* فرم اشتراک و آیکون‌های شبکه اجتماعی // Subscription form and social icons */}
        <Faq /> {/* سوالات متداول برای پاسخ به پرسش‌های کاربران // FAQ section for user questions */}
        <Footer /> {/* فوتر شامل لینک‌ها و اطلاعات تماس // Footer with links and contact info */}
    </main>
  );
}

export default App;