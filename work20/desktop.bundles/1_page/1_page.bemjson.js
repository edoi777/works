({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: '1_page.min.css'},
        {elem: 'css', url: '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css' }
    ],
    scripts: [
        {elem: 'js', url: '1_page.min.js'},
    ],
    mods: {theme: 'default'},
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
            content: {
                elem: 'content',
                content: [
                    {
                        block: 'page_1_promotion_block_1',
                        content: 'Рекламный блок'
                    },
                    {
                        block: 'item_product_v1_wrapper',
                        content: [
                            {
                                elem: 'title_block',
                                content: 'Лучшие на сегодня',
                            },
                            {
                                elem: 'items',
                                content: [
                                    {
                                        block: 'item_product_v1',
                                        mods: {section:'new'}
                                    },
                                    {
                                        block: 'item_product_v1',
                                        mods: {section:'super_price', old_price:'show', kod:'show', icons:'show'}
                                    },
                                    {
                                        block: 'item_product_v1',
                                        mods: {percent:'show'}
                                    },
                                    {
                                        block: 'item_product_v1',
                                        mods: {section:'super_price', dostavka:'show'}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'page_1_promotion_block_2',
                        content: [
                            {
                                elem: 'item_1',
                                content: 'Рекламный блок'
                            },
                            {
                                elem: 'item_2',
                                content: 'Рекламный блок'
                            }
                        ]
                    },
                    {
                        block: 'item_product_v1_wrapper',
                        content: [
                            {
                                elem: 'title_block',
                                content: 'Новинки',
                            },
                            {
                                elem: 'items',
                                content: [
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show'}
                                    },
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show', dostavka:'show'}
                                    }
,
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show', dostavka:'show'}
                                    }
,
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show'}
                                    },
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show'}
                                    },
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show', dostavka:'show'}
                                    }
,
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show', dostavka:'show'}
                                    }
,
                                    {
                                        block: 'item_product_v1',
                                        mods:{kod:'show'}
                                    }

                                ]
                            }
                        ]
                    }
                ]
            }

        },
        {
            block: 'footer',
            tag: 'footer'
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
                }
            ]
        }
    ]        
})

















