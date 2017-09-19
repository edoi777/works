module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
    { elem: 'meta', attrs: { name: 'description', content: '' }},
    { elem: 'css', url: '6_page.min.css' },
    { elem: 'css', url: 'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/9.1.0/nouislider.min.css' },
    { elem: 'css', url: '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css' }


    ],
    scripts: [
    { elem: 'js', url: '3_page.min.js' },

    ],
    mods: { theme: 'default' },
    content: [
    {
        block: 'header',
        tag: 'header',
        content: [
        {
            elem:'top'
        },
        {
            elem:'middle_wrapper'
        },
        {
            elem:'bot_wrapper'
        }
        ]
    },
    {
        block: 'main',
        tag: 'main',
        content:
        {
          elem:'content',
          content: [
          {
              block:'ten'
          },
          {
              block:'perecluchatel',
              tag:'input',
              attrs:{id:'characteristics', type:'checkbox'}
          },
        {
            block:'breadcumbs',
        },
        {
            block: 'left_part',
            content: [
            {
                block:'menu_sidebar',
                content: [
                {
                    elem:'item',
                    tag:'ul',
                    content: [
                    {
                        elem:'link active',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'О компании'}
                    },
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Доставка и оплата'}
                    },
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Политика возврата'}
                    },
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Контакты'}
                    }
                    ]
                },
                {
                    elem:'item',
                    tag:'ul',
                    content: [
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Коаталог товаров'}
                    },
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Акции'}
                    },
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Уцененные товары'}
                    },
                    {
                        elem:'link',
                        tag:'li',
                        content:{tag:'a', attrs:{href:'#'}, content:'Услуги'}
                    }
                    ]
                }
                ]
            },
            {
                block: 'department-sales'
            }
            ]
        },
        {
            block: 'right_part_content_page',
            content: [
            {
                elem: 'title',
                tag:'h1',
                content: 'О компании'
            },
            {
                elem: 'text',
                content: 'Полное наименование: Общество с ограниченной ответственностью «ТехноПлаза»<br>Государственный регистрационный номер: 109 774 639 2732<br>ИНН 7714783991<br>КПП 771401001<br>ОКПО 62171002<br>ОКВЭД 51.64<br>ОКОГУ 49013<br>ОКАТО 45277598000<br>Юридический адрес: 125167, РФ, г. Москва, Ленинградский проспект, дом 37, корпус 6, офис 2115<br>Фактический адрес: 125167, РФ, г. Москва, Ленинградский проспект, дом 37, корпус 6, офис 2115<br>Почтовый адрес: 125167, г. Москва, Ленинградский проспект, д.47, строение 1, офис 347 (3-й этаж)<br>Телефон: (495) 646-1071<br>Телефон: (499) 713-0972<br><br>Банковские реквизиты<br><br>Полное наименование банка Московский филиал ПАО РОСБАНК<br>Местонахождение банка г. Москва<br>Расчетный счет 40702810997160000009<br>Корреспондентский счет 30101810000000000272<br>БИК 044583272<br><br>Карточка компании'
            }
            ]
        }
        
        
        ]
    }

},

{
    block: 'footer',
    tag: 'footer',
},
{
    block:'scripts',
    content: [
    {
        tag:'script',
        attrs: {src:'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'}
    },
    {
        tag:'script',
        attrs: {src:'//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js'}
    },
    {
        tag:'script',
        attrs: {src:'../../scripts/header.js'}
    },
    {
        tag:'script',
        attrs: {src:'https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.0.4/wNumb.min.js'}
    },
    {
        tag:'script',
        attrs: {src:'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/9.1.0/nouislider.min.js'}
    },
    {
        tag:'script',
        attrs: {src:'../../scripts/2_page.js'}
    }
    ]
}
]
};










