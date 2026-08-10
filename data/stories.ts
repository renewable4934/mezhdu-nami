export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface Story {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  body: string;
  importantToKeep: string[];
  quote?: {
    text: string;
    author: string;
  };
  heroImage: string;
  heroAlt: string;
  images: GalleryImage[];
  published: boolean;
  petName?: string;
  ownerName?: string;
  location?: string;
}

export const CATEGORIES = [
  { id: "all", label: "Все истории" },
  { id: "daily", label: "Жизнь рядом" },
  { id: "first-year", label: "Первый год" },
  { id: "us", label: "Мы" },
  { id: "milestone", label: "Важный этап" },
  { id: "memory", label: "На память" },
  { id: "as-is", label: "Такой, какой он есть" },
] as const;

export const STORIES: Story[] = [
  {
    slug: "mart-i-ego-utrennie-ritualy",
    title: "Март и его утренние ритуалы",
    category: "Жизнь рядом",
    categorySlug: "daily",
    excerpt: "Повседневная история дома, тихих утренних часов у окна и привычных мест.",
    body: "Март не любит спешки. Каждое утро начинается с одного и того же движения — он тихо прыгает на край кресла, вытягивает передние лапы и ждёт, пока на кухне закипит чайник. Нам было важно сохранить не просто красивые портреты Марта, а именно эту неторопливую домашнюю атмосферу, в которой проходит наша повседневная жизнь.",
    importantToKeep: [
      "Как он встречает утро на деревянном подоконнике",
      "Привычку класть лапу на чашку, когда хочется внимания",
      "Особый сонный взгляд в первые минуты после пробуждения",
      "Тихий ритм нашего общего дома",
    ],
    quote: {
      text: "Когда смотрю на эти кадры, я слышу тишину нашего утра. В них нет никакой постановки — только наш реальный дом.",
      author: "Анна и Март",
    },
    heroImage: "/images/story_mart.jpg",
    heroAlt: "Рыжий кот Март сидит на деревянном подоконнике в лучах утреннего солнца",
    images: [
      {
        src: "/images/story_mart.jpg",
        alt: "Март на подоконнике у окна",
        aspect: "landscape",
        caption: "Утреннее место Марта у окна",
      },
      {
        src: "/images/daria_portrait.jpg",
        alt: "Процесс съёмки Марта в комнате",
        aspect: "portrait",
        caption: "Естественные моменты без постановки",
      },
      {
        src: "/images/hero_cover.jpg",
        alt: "Март отдыхает рядом на диване",
        aspect: "landscape",
        caption: "Время рядом в тёплом свете",
      },
      {
        src: "/images/photobiography_book.jpg",
        alt: "Страницы печатной книги с историей Марта",
        aspect: "landscape",
        caption: "Фотокнига истории Марта",
      },
    ],
    published: true,
    petName: "Март",
    ownerName: "Анна",
    location: "Москва",
  },
  {
    slug: "staryj-drug-bruno",
    title: "Старый друг Бруно",
    category: "На память",
    categorySlug: "memory",
    excerpt: "Особенно бережная история пожилого пса и долгих лет, прожитых вместе.",
    body: "Бруно рядом уже двенадцать лет. Его походка стала медленнее, а морда покрылась благородной сединой, но взгляд остался тем же — глубоким и бесконечно преданным. Эта съёмка создавалась с особенной нежностью и уважением к возрасту Бруно: мы никуда не спешили, гуляли по его любимому осеннему полю и делали паузы каждый раз, когда ему нужно было отдохнуть.",
    importantToKeep: [
      "Седые волоски вокруг носа и мудрый взгляд",
      "Медленную, но уверенную походку по знакомой тропе",
      "Прикосновения рук, в которых чувствуется двенадцать лет доверия",
      "Тепло осеннего света на его шерсти",
    ],
    quote: {
      text: "Дарья сумела поймать то самое чувство спокойной благодарности, которое мы проживаем каждый день рядом с Бруно.",
      author: "Михаил",
    },
    heroImage: "/images/story_bruno.jpg",
    heroAlt: "Пожилой лабрадор Бруно гуляет по осеннему полю рядом с хозяином",
    images: [
      {
        src: "/images/story_bruno.jpg",
        alt: "Бруно на прогулке в осеннем поле",
        aspect: "landscape",
        caption: "Любимая тропа Бруно на заходящем солнце",
      },
      {
        src: "/images/hero_cover.jpg",
        alt: "Бруно прислонил голову к хозяину",
        aspect: "landscape",
        caption: "Жесты заботы и вековой связи",
      },
      {
        src: "/images/photobiography_book.jpg",
        alt: "Печатная фотокнига с фоторасссказом о Бруно",
        aspect: "landscape",
        caption: "Фотокнига на память",
      },
    ],
    published: true,
    petName: "Бруно",
    ownerName: "Михаил",
    location: "Подмосковье",
  },
  {
    slug: "margo-pervyj-god-v-dome",
    title: "Марго: первый год в доме",
    category: "Первый год",
    categorySlug: "first-year",
    excerpt: "Первые дни, новые места, стремительное взросление и становление характера.",
    body: "Появление Марго перевернуло привычный распорядок. Сначала она помещалась в ладонях, а теперь уверенно занимает весь диван. В этой истории мы хотели запечатлеть именно первичное удивление миру, смешную неуклюжесть и то, как быстро маленький щенок становится частью семьи.",
    importantToKeep: [
      "Первые исследование углов квартиры",
      "Как она засыпает прямо во время игры",
      "Смешные большие уши, которые росли быстрее всего",
      "Первые совместные прогулки в парке",
    ],
    heroImage: "/images/hero_cover.jpg",
    heroAlt: "Щенок Марго с хозяевами в уютной квартире",
    images: [
      {
        src: "/images/hero_cover.jpg",
        alt: "Марго на руках у хозяев",
        aspect: "landscape",
        caption: "Первые недели дома",
      },
      {
        src: "/images/story_mart.jpg",
        alt: "Детали домашнего пространства с Марго",
        aspect: "landscape",
        caption: "Знакомство с новыми предметами",
      },
    ],
    published: true,
    petName: "Марго",
    ownerName: "Елена и Сергей",
    location: "Санкт-Петербург",
  },
  {
    slug: "prikosnoveniya-i-vzglyady",
    title: "Мы: прикосновения и взгляды",
    category: "Мы",
    categorySlug: "us",
    excerpt: "История невербальной связи, общих привычек и времени, проведённого вдвоём.",
    body: "Самое ценное в кадрах с питомцем — это молчаливый диалог. Как человек протягивает руку, не глядя, а собака уже подставляет голову. Как они синхронно смотрят в окно или отдыхают на одном ковре. Настоящая история — это именно то, что происходит между двумя.",
    importantToKeep: [
      "Синхронные движения и привычные позы",
      "Взгляды, понятные без слов",
      "Тепло рук на шерсти",
      "Спокойствие совместного присутствия",
    ],
    heroImage: "/images/daria_portrait.jpg",
    heroAlt: "Человек и питомец в естественном домашнем взаимодействии",
    images: [
      {
        src: "/images/daria_portrait.jpg",
        alt: "Кадр взаимодействия человека и кота",
        aspect: "portrait",
        caption: "Тихий диалог дома",
      },
      {
        src: "/images/hero_cover.jpg",
        alt: "Собака и хозяин на диване",
        aspect: "landscape",
        caption: "Общие вечерние ритуалы",
      },
    ],
    published: true,
    petName: "Оскар",
    ownerName: "Мария",
    location: "Москва",
  },
  {
    slug: "novyj-dom-i-vazhnyj-etap",
    title: "Переезд в новый дом",
    category: "Важный этап",
    categorySlug: "milestone",
    excerpt: "Новое пространство, адаптация и сохранение чувства дома во время перемен.",
    body: "Переезд в другой город и новый дом был большим испытанием для всех. Но именно здесь, среди ещё не разобранных коробок и тёплого света новых окон, мы увидели, что дом — это не стены, а присутствие друг друга.",
    importantToKeep: [
      "Первые шаги по новому паркету",
      "Освоение нового любимого кресла",
      "Общий отдых среди коробок переезда",
    ],
    heroImage: "/images/photobiography_book.jpg",
    heroAlt: "Фотокнига о переезде и адаптации питомца",
    images: [
      {
        src: "/images/photobiography_book.jpg",
        alt: "Страница книги с кадрами переезда",
        aspect: "landscape",
      },
    ],
    published: true,
    petName: "Тео",
    ownerName: "Дмитрий",
    location: "Казань",
  },
  {
    slug: "takoj-kakoj-on-est",
    title: "Характер: несовершенный и настоящий",
    category: "Такой, какой он есть",
    categorySlug: "as-is",
    excerpt: "Живые, смешные и характерные моменты без попытки сделать питомца удобным.",
    body: "Он ворует носки, иногда смешно упрямится на прогулке и во сне издаёт невероятные звуки. Мы решили не сглаживать эти углы. Настоящая любовь бережёт не идеальную картинку, а самого питомца — со всеми его забавными странностями.",
    importantToKeep: [
      "Искренние смешные гримасы и позы во сне",
      "Упрямый взгляд перед любимым лакомством",
      "Неподдельные эмоции во время игры",
    ],
    heroImage: "/images/story_mart.jpg",
    heroAlt: "Характерный портрет питомца",
    images: [
      {
        src: "/images/story_mart.jpg",
        alt: "Кадр с настоящими эмоциями питомца",
        aspect: "landscape",
      },
    ],
    published: true,
    petName: "Коржик",
    ownerName: "Ольга",
    location: "Москва",
  },
];

// Helper to retrieve story by slug
export function getStoryBySlug(slug: string): Story | undefined {
  return STORIES.find((story) => story.slug === slug);
}

// Helper to filter stories by category slug
export function getStoriesByCategory(categorySlug: string): Story[] {
  if (categorySlug === "all" || !categorySlug) return STORIES;
  return STORIES.filter((story) => story.categorySlug === categorySlug);
}
