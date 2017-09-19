module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
    { elem: 'meta', attrs: { name: 'description', content: '' }},
    { elem: 'css', url: '3_page.min.css' },
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
            block:'characteristics',
            content:[
            {
                elem:'close',
                tag:'label',
                attrs:{for:'characteristics'}
            },
            {
                elem:'title',
                content:'Подробные характеристики'
            },
            {
                elem:'items',
                content: [
                {
                    elem:'item',
                    content:'Производитель: <span>Apple</span>'
                },
                {
                    elem:'item',
                    content:'Артикул производителя: <span>Z0SC001U4</span>'
                },
                {
                    elem:'item',
                    content:'Диагональ дюймов:  <span>27</span>'
                },
                {
                    elem:'item',
                    content:'Разрешение:  <span>5120 х 2880</span>'
                }
                ]
            },
            {
                elem:'items',
                content: [
                {
                    elem:'item',
                    content:'Производитель: <span>Apple</span>'
                },
                {
                    elem:'item',
                    content:'Артикул производителя: <span>Z0SC001U4</span>'
                },
                {
                    elem:'item',
                    content:'Диагональ дюймов:  <span>27</span>'
                },
                {
                    elem:'item',
                    content:'Разрешение:  <span>5120 х 2880</span>'
                }
                ]
            },
            {
                elem:'items',
                content: [
                {
                    elem:'item',
                    content:'Производитель: <span>Apple</span>'
                },
                {
                    elem:'item',
                    content:'Артикул производителя: <span>Z0SC001U4</span>'
                },
                {
                    elem:'item',
                    content:'Диагональ дюймов:  <span>27</span>'
                },
                {
                    elem:'item',
                    content:'Разрешение:  <span>5120 х 2880</span>'
                }
                ]
            }
            ]
        },
        {
            block:'breadcumbs',
        },
        {
            block: 'left_part',
            content: [
            {
                block:'sidebar'
            },
            {
                block: 'department-sales'
            }
            ]
        },
        {
            block: 'product_list',
            content: [
            {
                elem: 'title',
                tag: 'h1',
                content: 'Компьютеры '
            },
            {
                block:'sortirovka',
                content: [
                {
                    elem:'block_1',
                    content: [

                    {
                        elem:'title',
                        content: 'Сортировать:'
                    },
                    {
                        elem: 'label',
                        tag:'label',
                        content: [
                        {
                            elem: 'button',
                            tag:'input',
                            attrs:{type:'radio', name:'sort', checked: 'checked'}
                        },
                        {
                            elem:'name',
                            content:'по цене'
                        }
                        ]

                    },
                    {
                        elem: 'label',
                        tag:'label',
                        content: [
                        {
                            elem: 'button',
                            tag:'input',
                            attrs:{type:'radio', name:'sort'}
                        },
                        {
                            elem:'name',
                            content:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.42 6"><defs><style>.cls-1{fill:#cdcccc;}</style></defs><title>Ресурс 3</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><rect class="cls-1" width="3.19" height="1.48"/><rect class="cls-1" y="2.26" width="4.17" height="1.48"/><rect class="cls-1" y="4.52" width="5.42" height="1.48"/></g></g></svg>по популярности'
                        }
                        ]

                    },
                    {
                        elem: 'label',
                        tag:'label',
                        content: [
                        {
                            elem: 'button',
                            tag:'input',
                            attrs:{type:'radio', name:'sort'}
                        },
                        {
                            elem:'name',
                            content:'по рейтингу'
                        }
                        ]

                    }
                    ]
                },
                {
                    elem:'block_2',
                    content: [
                    {
                        elem:'title',
                        content: 'Показывать в виде:'
                    },
                    {
                        elem: 'label',
                        tag:'label',
                        content: [
                        {
                            elem: 'button',
                            tag:'input',
                            attrs:{type:'radio', name:'vid'}
                        },
                        {
                            elem:'icon_1',
                            content:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.2 16"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#b3b2b2;}</style><clipPath id="clip-path" transform="translate(0 0)"><rect class="cls-1" width="19.2" height="16"/></clipPath></defs><title>Ресурс 4</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g class="cls-2"><path class="cls-3" d="M19.2,13.6v1.6a.81.81,0,0,1-.8.8H.8a.77.77,0,0,1-.56-.24A.77.77,0,0,1,0,15.2V13.6A.77.77,0,0,1,.24,13,.77.77,0,0,1,.8,12.8H18.4a.81.81,0,0,1,.8.8m0-6.4V8.8a.81.81,0,0,1-.8.8H.8a.77.77,0,0,1-.56-.24A.77.77,0,0,1,0,8.8V7.2a.77.77,0,0,1,.24-.56A.77.77,0,0,1,.8,6.4H18.4a.81.81,0,0,1,.8.8m0-6.4V2.4A.77.77,0,0,1,19,3a.76.76,0,0,1-.56.24H.8A.77.77,0,0,1,.24,3,.77.77,0,0,1,0,2.4V.8A.77.77,0,0,1,.24.24.77.77,0,0,1,.8,0H18.4A.77.77,0,0,1,19,.24.77.77,0,0,1,19.2.8" transform="translate(0 0)"/></g></g></g></svg>'
                        }
                        ]

                    },
                    {
                        elem: 'label',
                        tag:'label',
                        content: [
                        {
                            elem: 'button',
                            tag:'input',
                            attrs:{type:'radio', name:'vid',checked: 'checked'}
                        },
                        {
                            elem:'icon_2',
                            content: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.36 16"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#b3b2b2;}</style><clipPath id="clip-path" transform="translate(0 0)"><rect class="cls-1" width="20.36" height="16"/></clipPath></defs><title>Ресурс 5</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g class="cls-2"><path class="cls-3" d="M20.36,12.73v2.18A1.09,1.09,0,0,1,19.27,16H8.36a1.09,1.09,0,0,1-1.09-1.09V12.73a1.09,1.09,0,0,1,1.09-1.09H19.27a1.09,1.09,0,0,1,1.09,1.09m0-5.82V9.09a1.09,1.09,0,0,1-1.09,1.09H8.36A1.09,1.09,0,0,1,7.27,9.09V6.91A1.09,1.09,0,0,1,8.36,5.82H19.27a1.09,1.09,0,0,1,1.09,1.09m0-5.82V3.27a1.09,1.09,0,0,1-1.09,1.09H8.36A1.09,1.09,0,0,1,7.27,3.27V1.09A1.05,1.05,0,0,1,7.59.32,1,1,0,0,1,8.36,0H19.27A1.05,1.05,0,0,1,20,.32a1.05,1.05,0,0,1,.32.77M5.82,12.73v2.18A1.09,1.09,0,0,1,4.73,16H1.09a1.05,1.05,0,0,1-.77-.32A1.05,1.05,0,0,1,0,14.91V12.73A1.05,1.05,0,0,1,.32,12a1,1,0,0,1,.77-.32H4.73a1.09,1.09,0,0,1,1.09,1.09m0-5.82V9.09a1.09,1.09,0,0,1-1.09,1.09H1.09a1.05,1.05,0,0,1-.77-.32A1.05,1.05,0,0,1,0,9.09V6.91a1.05,1.05,0,0,1,.32-.77,1.05,1.05,0,0,1,.77-.32H4.73A1.09,1.09,0,0,1,5.82,6.91m0-5.82V3.27A1.09,1.09,0,0,1,4.73,4.36H1.09A1.05,1.05,0,0,1,.32,4,1.05,1.05,0,0,1,0,3.27V1.09A1.05,1.05,0,0,1,.32.32,1.05,1.05,0,0,1,1.09,0H4.73A1.05,1.05,0,0,1,5.5.32a1.05,1.05,0,0,1,.32.77" transform="translate(0 0)"/></g></g></g></svg>'
                        }
                        ]

                    }
                    ]
                }
                ]
            },
            {
                block:'item_product_v2_wrapper',
                content: [
                {
                    block: 'item_product_v3',
                    mods: {elements_control: 'hide'}
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                    mods: { gruz:'hide'}
                },
                {
                    block: 'item_product_v3',
                    mods: { gruz:'hide', sklad:'hide'}
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                },
                {
                    block: 'item_product_v3',
                }

                ]
            },
            {
                block:'pagination'
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










