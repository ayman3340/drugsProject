import firstImg from "../assets/firstImg.png";

export default function Drugs() {
  return (
    <div className="container mx-auto px-4 py-10" dir="rtl">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 mt-12">
        <div className="w-full lg:w-1/2 bg-black/20 border border-white/5 rounded-2xl p-8 flex flex-col justify-center shadow-sm">
          <h1 className="text-yellow-500 text-right text-3xl md:text-5xl font-bold mb-6">
            المخدرات
          </h1>
          <p className="text-gray-200 text-right text-lg md:text-xl leading-loose">
            مجموعة من المواد التي تسبب الإدمان وتسمم الجهاز العصبي، ويطلق لفظ
            (مخدر) على ما يُذهب العقل ويغيبه، لاحتوائه على مواد كيميائية تؤدي
            إلى النعاس والنوم أو غياب الوعي. قد يؤدي استخدام المخدرات إلى ما
            يسمى (متلازمة التبعية)، وهي مجموعة من الظواهر السلوكية والمعرفية
            والفسيولوجية التي تتطور بعد الاستخدام المتكرر للمواد، وتتضمن عادة
            رغبة قوية في الاستمرار بذلك على الرغم من العواقب الضارة، حتى يصل إلى
            مرحلة الاعتماد عليها وظهور أعراض انسحابية.
          </p>
          <div className="mt-10 bg-black/20 border border-white/5 text-gray-200 rounded-2xl p-6 text-right text-base md:text-lg font-medium leading-loose shadow-sm">
            <span className="text-yellow-500 font-bold ml-1"> الإدمان: </span>
            هو رغبة قهرية للاستمرار في تعاطي المادة المخدرة أو الحصول عليها بأي
            وسيلة، مع الميل إلى زيادة الجرعة المتعاطاة؛ مما يسبب اعتمادًا
            نفسيًّا وجسميًّا وتأثيرًا ضارًا في الفرد والمجتمع.
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          <img
            src={firstImg}
            alt="صورة تعبيرية توضح أدوات التعاطي وأضرار المخدرات"
            className="w-full h-64 lg:h-full object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
