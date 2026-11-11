// ═══════════════════════════════════════════════════════
// НАСТРОЙКИ САЙТА — ЗАМЕНИ ЗНАЧЕНИЯ ПОД СВОЙ ПРОЕКТ
// ═══════════════════════════════════════════════════════

const CMS_CONFIG = {

    // ─── 1. НАСТРОЙКИ РЕПОЗИТОРИЯ (ОБЯЗАТЕЛЬНО МЕНЯТЬ) ───
    
    // Твой ник на GitHub (посмотри в URL: github.com/ТВОЙ_НИК)
    owner: 'piarbookru-hub',
    
    // Название репозитория (как называется папка с сайтом)
    repo: 'МОЙ-САЙТ',
    
    // Ветка репозитория (обычно main или master)
    branch: 'main',
    
    // Название проекта (отображается в шапке админки)
    projectName: 'Название сайта',

    // ─── 2. ПОЛЯ ТОВАРОВ / УСЛУГ ───
    // Меняй под свою нишу (автосервис, салон, стоматология и т.д.)
    
    productFields: [
        { name: 'name', label: 'Название', type: 'text' },
        { name: 'description', label: 'Описание', type: 'textarea' },
        { name: 'price', label: 'Цена (₽)', type: 'number' },
        { name: 'old_price', label: 'Старая цена (₽)', type: 'number' },
        { name: 'image', label: 'Ссылка на фото', type: 'text' },
        { name: 'icon', label: 'Иконка (Font Awesome)', type: 'text' }
    ],

    // ─── 3. ПОЛЯ ОТЗЫВОВ ───
    
    reviewFields: [
        { name: 'name', label: 'Имя клиента', type: 'text' },
        { name: 'company', label: 'Компания / Должность', type: 'text' },
        { name: 'text', label: 'Текст отзыва', type: 'textarea' },
        { name: 'rating', label: 'Рейтинг', type: 'select', options: [
            { value: 5, label: '★★★★★ (5)' },
            { value: 4, label: '★★★★☆ (4)' },
            { value: 3, label: '★★★☆☆ (3)' },
            { value: 2, label: '★★☆☆☆ (2)' },
            { value: 1, label: '★☆☆☆☆ (1)' }
        ]}
    ],

    // ─── 4. ПОЛЯ КОНТАКТОВ ───
    
    contactFields: [
        { name: 'phone', label: 'Телефон', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'address', label: 'Адрес', type: 'text' },
        { name: 'hours', label: 'Режим работы', type: 'text' },
        { name: 'vk', label: 'Ссылка на VK', type: 'text' },
        { name: 'telegram', label: 'Ссылка на Telegram', type: 'text' },
        { name: 'whatsapp', label: 'Ссылка на WhatsApp', type: 'text' },
        { name: 'instagram', label: 'Ссылка на Instagram', type: 'text' }
    ],

    // ─── 5. ПАЛИТРА ЦВЕТОВ (выбор в админке) ───
    // Можешь добавить свои цвета или убрать лишние
    
    colorPresets: [
        { name: 'Красный', value: '#dc2626' },
        { name: 'Оранжевый', value: '#f97316' },
        { name: 'Жёлтый', value: '#eab308' },
        { name: 'Зелёный', value: '#16a34a' },
        { name: 'Бирюзовый', value: '#0891b2' },
        { name: 'Синий', value: '#1e40af' },
        { name: 'Фиолетовый', value: '#7c3aed' },
        { name: 'Розовый', value: '#db2777' },
        { name: 'Чёрный', value: '#1f2937' },
        { name: 'Золотой', value: '#d97706' }
    ],

    // ─── 6. БЛОКИ СТРАНИЦ (конструктор) ───
    // Список всех возможных секций сайта
    
    availableBlocks: [
        { id: 'home', label: 'Главный экран (Hero)', icon: 'fa-home' },
        { id: 'about', label: 'О нас / О компании', icon: 'fa-info-circle' },
        { id: 'services', label: 'Услуги / Товары', icon: 'fa-th-list' },
        { id: 'pricing', label: 'Цены / Прайс', icon: 'fa-tags' },
        { id: 'gallery', label: 'Галерея работ', icon: 'fa-images' },
        { id: 'team', label: 'Команда / Специалисты', icon: 'fa-users' },
        { id: 'reviews', label: 'Отзывы клиентов', icon: 'fa-star' },
        { id: 'faq', label: 'Частые вопросы (FAQ)', icon: 'fa-question-circle' },
        { id: 'contact', label: 'Контакты и форма', icon: 'fa-envelope' }
    ]
};
