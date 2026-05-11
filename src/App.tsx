import { useState, useEffect, useCallback } from "react";
import {
  Users,
  Route,
  MessageCircle,
  Megaphone,
  Target,
  TrendingUp,
  Clock,
  Star,
  GraduationCap,
  Heart,
  Coins,
  Video,
  Repeat,
  Camera,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, index)));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#030712] relative overflow-hidden font-body p-4 md:p-8">
      {/* Background ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col">
        {/* Progress Bar */}
        <div className="h-1 bg-slate-800/50 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Stage */}
        <div className="overflow-hidden rounded-3xl relative w-full min-h-[500px] shadow-2xl shadow-indigo-500/5 bg-slate-900/20">
          <div
            className="flex items-stretch transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] will-change-transform min-h-[500px]"
            style={{ 
              width: '100%',
              transform: `translateX(-${currentSlide * 100}%)` 
            }}
          >
            {/* --- SLIDE 1: Intro --- */}
            <div className="flex-[0_0_100%] min-w-full px-2 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 h-full">
                {/* Header */}
                <div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between backdrop-blur-md group hover:border-slate-700 transition duration-500 relative overflow-hidden h-full">
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition duration-700" />
                  <div className="relative z-10">
                    <span className="inline-block bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                      Стратегия продвижения · Слайд 1 из 4
                    </span>
                    <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-6 tracking-tight">
                      Как и где <br className="hidden sm:block" /> мы найдём <br className="hidden sm:block" /> пользователей?
                    </h1>
                  </div>
                  <div className="relative z-10 pt-6 border-t border-slate-800/60 mt-auto">
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                      План привлечения аудитории, основанный на подробных интервью с пользователями и понимании их мышления (
                      <span className="text-white bg-white/5 px-1.5 py-0.5 rounded">CJM</span>
                      ) для платформы взаимного обмена навыками <span className="text-blue-400">SkillFlow</span>. Наша цель — завоевать доверие и привлечь первых активных участников без прямой платной рекламы.
                    </p>
                  </div>
                </div>

                {/* Age */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between backdrop-blur-md group hover:border-slate-700 transition duration-500 min-h-[160px]">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-50 transition-colors">18-28</div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">наша основная аудитория. Это студенты и начинающие специалисты (джуниоры).</div>
                  </div>
                </div>

                {/* Channels */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between backdrop-blur-md group hover:border-slate-700 transition duration-500 min-h-[160px]">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 mb-4 drop-shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <Route size={24} />
                  </div>
                  <div>
                    <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-50 transition-colors">3</div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">ключевых способа продвижения: Telegram, блогеры и короткие видео.</div>
                  </div>
                </div>

                {/* Insight */}
                <div className="lg:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-center backdrop-blur-md group hover:border-slate-700 transition duration-500 relative overflow-hidden min-h-[160px]">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-80" />
                  <div className="flex items-center gap-2.5 mb-3 text-cyan-400">
                    <Star size={18} fill="currentColor" className="opacity-80 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
                    <span className="text-xs font-bold tracking-widest uppercase">Главное наблюдение за пользователями</span>
                  </div>
                  <p className="text-slate-300 text-[13px] sm:text-[15px] leading-relaxed italic">
                    «Когда люди только начинают чем-то интересоваться, они смотрят короткие вдохновляющие видео. Но когда они решают, стоит ли пользоваться новым сервисом, они <span className="text-white not-italic font-medium">идут в Telegram-чаты искать отзывы живых людей</span>. Поэтому скучная прямая реклама здесь не сработает.»
                  </p>
                </div>
              </div>
            </div>

            {/* --- SLIDE 2: Telegram --- */}
            <div className="flex-[0_0_100%] min-w-full px-2 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 h-full">
                {/* Telegram Header */}
                <div className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between backdrop-blur-md group hover:border-slate-700 transition duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10 w-full">
                    <div>
                      <span className="text-teal-400 text-[11px] font-bold tracking-widest uppercase mb-3 block opacity-90">Способ 1 · Telegram-сообщества</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">Естественное общение</h2>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400 shrink-0">
                      <MessageCircle size={28} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed relative z-10 w-full md:max-w-3xl mt-auto">
                    Наша аудитория часто общается в группах по IT, дизайну и маркетингу, когда пытается решить, где учиться. <span className="text-slate-300 font-medium">Наша цель</span> — присоединиться к этим беседам, помогая и отвечая на вопросы, например: «где найти ментора бесплатно».
                  </p>
                </div>

                {/* Telegram Admins */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col backdrop-blur-md group hover:border-slate-700 transition duration-500 h-full justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Megaphone size={22} className="text-teal-400 shrink-0" />
                    <h3 className="font-display font-semibold text-white text-lg lg:text-xl">Договоренности в чатах</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-slate-400 leading-snug">Мы связываемся с администраторами закрытых чатов онлайн-школ или сообществ и предлагаем рассказать о нас. Главное — это должно быть написано как искренняя рекомендация.</p>
                </div>

                {/* Telegram Seed */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col backdrop-blur-md group hover:border-slate-700 transition duration-500 h-full justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={22} className="text-teal-400 shrink-0" />
                    <h3 className="font-display font-semibold text-white text-lg lg:text-xl">Распространение историй</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-slate-400 leading-snug">Мы будем делиться живыми историями наших первых пользователей, описывая, как конкретный человек нашел напарника и обменялся знаниями (плюс ссылка-приглашение).</p>
                </div>

                {/* Telegram Tags */}
                <div className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-5 flex flex-wrap items-center gap-3 backdrop-blur-md mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                    <Target size={14} className="text-teal-400" /> Бесплатно
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                    <TrendingUp size={14} className="text-teal-400" /> Виральный потенциал
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                    <Clock size={14} className="text-teal-400" /> Старт: неделя 1
                  </span>
                </div>
              </div>
            </div>

            {/* --- SLIDE 3: Influencers --- */}
            <div className="flex-[0_0_100%] min-w-full px-2 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 h-full">
                {/* Influencers Header */}
                <div className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between backdrop-blur-md group hover:border-slate-700 transition duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10 w-full">
                    <div>
                      <span className="text-amber-400 text-[11px] font-bold tracking-widest uppercase mb-3 block opacity-90">Способ 2 · Небольшие блогеры</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">Авторы от 5 до 50 тысяч</h2>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400 shrink-0">
                      <Star size={28} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed relative z-10 w-full md:max-w-3xl mt-auto">
                    Люди часто больше <span className="text-slate-300 font-medium">искренне верят рекомендациям</span> авторов небольших, но уютных блогов об обучении и саморазвитии, чем крупной корпоративной рекламе. У таких авторов самая преданная аудитория.
                  </p>
                </div>

                {/* Influencers Barter */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col backdrop-blur-md group hover:border-slate-700 transition duration-500 h-full justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart size={22} className="text-amber-400 shrink-0" />
                    <h3 className="font-display font-semibold text-white text-lg lg:text-xl">Сотрудничество без денег</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-slate-400 leading-snug">Мы даем микро-блогерам бесплатный доступ ко всем платным функциям платформы. Взамен они честно расскажут о своем опыте поиска напарника в видео или посте.</p>
                </div>

                {/* Influencers Niches */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col backdrop-blur-md group hover:border-slate-700 transition duration-500 h-full justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap size={22} className="text-amber-400 shrink-0" />
                    <h3 className="font-display font-semibold text-white text-lg lg:text-xl">Где мы ищем блогеров?</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-slate-400 leading-snug">Мы ищем авторов, которые делятся советами о современных профессиях, о том, как начать строить карьеру, выучить английский язык или стать программистом.</p>
                </div>

                {/* Influencers Tags */}
                <div className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-5 flex flex-wrap items-center gap-3 backdrop-blur-md mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                    <Heart size={14} className="text-amber-400" /> Высокий trust
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                    <Coins size={14} className="text-amber-400" /> Без бюджета
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                    <Clock size={14} className="text-amber-400" /> Старт: неделя 2
                  </span>
                </div>
              </div>
            </div>

            {/* --- SLIDE 4: Content --- */}
            <div className="flex-[0_0_100%] min-w-full px-2 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 h-full">
                {/* Content Header */}
                <div className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between backdrop-blur-md group hover:border-slate-700 transition duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10 w-full">
                    <div>
                      <span className="text-rose-400 text-[11px] font-bold tracking-widest uppercase mb-3 block opacity-90">Способ 3 · Короткие забавные видео</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">VK Клипы и Reels</h2>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 text-rose-400 shrink-0">
                      <Video size={28} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed relative z-10 w-full md:max-w-3xl mt-auto">
                    Такие ролики могут бесплатно увидеть сотни тысяч человек. Видео, где <span className="text-slate-300 font-medium">полезное сочетается с юмором</span>, часто попадают в тренды. Это отличный способ показать, как весело и несложно можно получать знания.
                  </p>
                </div>

                {/* Content Format */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col backdrop-blur-md group hover:border-slate-700 transition duration-500 h-full justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera size={22} className="text-rose-400 shrink-0" />
                    <h3 className="font-display font-semibold text-white text-lg lg:text-xl">О чем сюжеты? (до 60 сек)</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-slate-400 leading-snug">Мы будем снимать короткие жизненные сценки о том, как люди обмениваются опытом: «Я научил друга писать код, а он научил меня делать дизайн». С демонстрацией экрана.</p>
                </div>

                {/* Content Virality */}
                <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col backdrop-blur-md group hover:border-slate-700 transition duration-500 h-full justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Repeat size={22} className="text-rose-400 shrink-0" />
                    <h3 className="font-display font-semibold text-white text-lg lg:text-xl">Как работают репосты</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-slate-400 leading-snug">Мы делаем видео такими, чтобы люди хотели отправлять их друзьям. Прямо в видео добавим фразу: «Отправь это другу, с которым вы хотите научиться новому месте».</p>
                </div>

                {/* Content Tags */}
                <div className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-5 flex flex-wrap justify-between items-center gap-3 backdrop-blur-md mt-auto">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                      <MessageSquare size={14} className="text-rose-400" /> VK Clips
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                      <Camera size={14} className="text-rose-400" /> Reels
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700/80 shadow-sm">
                      <Clock size={14} className="text-rose-400" /> Старт: неделя 3
                    </span>
                  </div>
                  <div className="hidden md:block px-3 py-1 bg-white/5 rounded text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    SkillFlow Marketing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation / Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 px-2">
          {/* Slide indicator */}
          <div className="text-slate-500 font-display text-[13px] tracking-widest uppercase font-semibold order-2 sm:order-1">
            {String(currentSlide + 1).padStart(2, "0")} / 0{totalSlides}
          </div>

          {/* Dots */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-500 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  i === currentSlide
                    ? "w-8 h-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    : "w-2.5 h-2.5 bg-slate-800 hover:bg-slate-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 order-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700/80 text-white bg-slate-800/50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95 transition-all disabled:opacity-30 disabled:hover:bg-slate-800/50 disabled:cursor-not-allowed shadow-lg backdrop-blur"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700/80 text-white bg-slate-800/50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95 transition-all disabled:opacity-30 disabled:hover:bg-slate-800/50 disabled:cursor-not-allowed shadow-lg backdrop-blur"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[11px] text-slate-500/80 font-medium tracking-wide">
          <span className="bg-slate-800 px-1.5 py-0.5 rounded shadow-sm border border-slate-700">←</span>
          <span>или</span>
          <span className="bg-slate-800 px-1.5 py-0.5 rounded shadow-sm border border-slate-700">→</span>
          <span>для навигации</span>
        </div>
      </div>
    </div>
  );
}

