import accessories from "../../shared/assets/article-bath-accessories.png"
import hot from "../../shared/assets/article-hot-water.png"
import toilet from "../../shared/assets/article-toilet-condensation.png"
import sealant from "../../shared/assets/article-bath-accessories.png"




const articles = [
  {
    image: accessories,
    title: "Актуальные и необычные аксессуары для ванной комнаты",
    category: "Идеи для дома",
    readTime: "4 минуты",
  },
  {
    image: hot,
    title: "Какой температуры должна быть горячая вода?",
    category: "Советы эксперта",
    readTime: "5 минут",
  },
  {
    image: toilet,
    title: "Конденсат на бачке унитаза: причины появления и способы устранения",
    category: "Полезные советы",
    readTime: "6 минут",
  },
  {
    image: sealant,
    title: "Анаэробный герметик для резьбовых соединений",
    category: "Материалы",
    readTime: "3 минуты",
  },
];

export default function ArticlesAndSeo() {
  return (
    <section className="overflow-hidden bg-[#f2f8ff] px-4 py-14 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[.22em] text-cyan-700">
              Журнал Promarket
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Статьи<span className="text-cyan-500">.</span>
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-cyan-500" />
          </div>
          <a
            href="#all-articles"
            className="text-sm font-bold text-cyan-700 transition hover:text-slate-900"
          >
            Все статьи <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <a
              href="#article"
              key={article.title}
              onClick={(event) => event.preventDefault()}
              className="group overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44 overflow-hidden bg-slate-200">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-cyan-100 to-slate-200 text-slate-500">
                 
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-slate-700 backdrop-blur">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Чтение · {article.readTime}
                </p>
                <h3 className="text-sm font-extrabold leading-6 text-slate-900 transition group-hover:text-cyan-700">
                  {article.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-700">
                  Читать статью <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-300/30 lg:grid-cols-[.95fr_1.05fr]">
          <div className="group relative min-h-[300px] overflow-hidden bg-slate-200">
            <img
             src="src/shared/assets/seo-kitchen.png"
              alt="Современный интерьер кухни"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
        
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-6 pt-20 text-white">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200">
                Пространство для вдохновения
              </p>
              <p className="mt-2 text-xl font-extrabold">Детали, которые создают комфорт</p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-teal-500 p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border-[30px] border-white/10" />
            <div className="relative">
              <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-white/75">
                О магазине
              </p>
              <h2 className="mb-5 text-2xl font-extrabold leading-tight sm:text-3xl">
                Всё для ванной, кухни и вашего комфорта
              </h2>
              <p className="text-sm leading-7 text-white/90">
                Promarket — магазин сантехнического оборудования, плитки и аксессуаров.
                Мы помогаем подобрать решения для дома: от смесителей и душевых систем
                до ванн, раковин и мебели. Удобная структура каталога, понятные описания
                и характеристики помогают сравнить товары и сделать уверенный выбор.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/90">
                Изучайте подборки, знакомьтесь с рекомендациями специалистов и находите
                товары под свой интерьер. Если нужна помощь, свяжитесь с нашей командой —
                подскажем, на что обратить внимание при выборе и покупке.
              </p>
              <a
                href="#catalog"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-teal-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
              >
                Перейти в каталог <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
