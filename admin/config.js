const CMS_CONFIG = {
    owner: 'piarbookru-hub',
    repo: 'landing_1',
    branch: 'main',
    projectName: 'Landing 1',
    
    // Безопасность превью:
    // false = скрипты сайта в превью НЕ выполняются (токен защищён)
    // true  = скрипты выполняются (метрика, виджеты работают, но токен может быть украден)
    previewScripts: true,
    
    // Дополнительные селекторы для редактирования (необязательно)
    extraEditableSelectors: [],
    
    // CSS-селекторы обёрток для картинок (необязательно)
    imageWrappers: []
};
