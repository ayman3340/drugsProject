// Assuming you have book1 and book2 imported as well
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";

export default function Book() {
  return (
    <div
      className="container mx-auto px-4 py-10 flex flex-col items-center gap-8"
      dir="rtl"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-[#CA8A04]">
        افضل الكتب للمساعدة في علاج ادمان المخدرات
      </h2>

      {/* استخدام نفس نظام الفليكس البسيط المستخدم في باقي الأقسام */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 p-5 w-full">
        {/* Card 1 */}

        <div className="w-full sm:w-[45%] lg:w-[30%] flex flex-col bg-white/10 p-8 rounded-xl border border-white/20">
          <div className="w-full h-auto rounded-r-lg rounded-l-sm shadow-2xl flex items-center justify-center transform rotate-[-5deg] hover:rotate-0 transition-all duration-300">
            <img
              className="w-full h-auto object-cover rounded-md shadow-sm"
              src={book1}
              alt="book 1"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full sm:w-[45%] lg:w-[30%] flex flex-col bg-white/10 p-8 rounded-xl border border-white/20">
          <div className="w-full h-auto rounded-r-lg rounded-l-sm shadow-2xl flex items-center justify-center transform rotate-[-5deg] hover:rotate-0 transition-all duration-300">
            <img
              className="w-full h-auto object-cover rounded-md shadow-sm"
              src={book2}
              alt="book 2"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full sm:w-[45%] lg:w-[30%] flex flex-col bg-white/10 p-8 rounded-xl border border-white/20">
          <div className="w-full h-auto rounded-r-lg rounded-l-sm shadow-2xl flex items-center justify-center transform rotate-[-5deg] hover:rotate-0 transition-all duration-300">
            <img
              className="w-full h-auto object-cover rounded-md shadow-sm"
              src={book3}
              alt="book 3"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
