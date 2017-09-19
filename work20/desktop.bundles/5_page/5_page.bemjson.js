({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
    { elem: 'meta', attrs: { name: 'description', content: '' }},
    { elem: 'css', url: 'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/css/selectize.css' },
    { elem: 'css', url: '5_page.min.css' },
    { elem: 'css', url: '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css' }

    
    ],
    scripts: [
    { elem: 'js', url: '5_page.min.js' },
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
            block:'breadcumbs',
        },
        {
            block: 'registration_product',
            content: [
            {
                elem:'title',
                tag:'h1',
                content: 'Оформление заказа'
            },
            {
                elem:'title_2',
                tag:'h2',
                content: 'Корзина товаров'
            },
            {
                elem:'table_products',
                tag:'table',
                content:[
                {
                    elem:'tr_thead',
                    tag:'thead',
                    content:[
                    {
                        elem:'th t1',
                        tag:'th'
                    },
                    {
                        elem:'th t1',
                        tag:'th'
                    },
                    {
                        elem:'th t2',
                        tag:'th',
                        content:'Кол-во'
                    },
                    {
                        elem:'th t3',
                        tag:'th',
                        content:'Цена'
                    },
                    {
                        elem:'th t4',
                        tag:'th',
                        content:'Скидка'
                    },
                    {
                        elem:'th t5',
                        tag:'th',
                        content:'Итого'
                    }

                    ]
                },
                {
                    elem:'tbody',
                    tag:'tbody',
                    content: [
                        {
                            elem:'tr',
                            tag:'tr',
                        },
                        {
                            elem:'tr',
                            tag:'tr'
                        }
                    ]
                }
                ]
            },
            {
                elem:'itogo_stoimost',
                content:'Стоимость: 141 220 <span class="rubl"></span>'
            }
            ]
        },
        {
            block: 'switch-part',
            mix:{block:'choise-delivery'},
            content: [
            {
                elem:'title',
                content: 'Доставка'
            },
            {
                elem:'buttons-wrapper',
                content: [
                    {
                        elem:'button active',
                        content:'Доставка курьером'
                    },
                    {
                        elem:'button',
                        content:'Самовывоз'
                    },
                    {
                        elem:'button',
                        content:'Транспортная компания'
                    }
                ]
            },
            {
                elem:'switchable-blocks',
                content: [
                    {
                        elem:'item-switchable kurer',
                        content: [
                        {
                            elem:'left-part',
                            content: [
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Ближайшая станция метро'
                                    },
                                    {
                                        elem:'select-selectize',
                                        tag:'select',
                                        content: [
                                        {
                                            tag:'option',
                                            attrs:{value:'1'},
                                            content:'1'
                                        },
                                        {
                                            tag:'option',
                                            attrs:{value:'2'},
                                            content:'2'
                                        }
                                        ]
                                }
                                ]
                            },
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Улица'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input'
                                    }
                                ]
                            },
                            {
                                elem: 'input-wrapper-wrapper',
                                mods:{quantity:'four'},
                                content: [
                                    {
                                        elem:'input_wrapper',
                                        content: [
                                                    {
                                                    elem:'title-input',
                                                    content:'Дом / Корпус'
                                                    },
                                                    {
                                                        elem:'exactly-input ',
                                                        tag:'input'
                                                    }
                                    ]
                                    },
                                    {
                                        elem:'input_wrapper',
                                        content: [
                                                {
                                                elem:'title-input',
                                                content:'Квартира'
                                                },
                                                {
                                                    elem:'exactly-input',
                                                    mods:{s:'full'},
                                                    tag:'input'
                                                }
                                    ]
                                    },
                                    {
                                        elem:'input_wrapper  not-important',
                                        content: [
                                                {
                                                elem:'title-input',
                                                content:'Подъезд'
                                                },
                                                {
                                                    elem:'exactly-input',
                                                    mods:{s:'full'},
                                                    tag:'input'
                                                }
                                    ]
                                    },
                                    {
                                        elem:'input_wrapper not-important',
                                        content: [
                                                {
                                                elem:'title-input',
                                                content:'Этаж'
                                                },
                                                {
                                                    elem:'exactly-input',
                                                    mods:{s:'full'},
                                                    tag:'input'
                                                }
                                    ]
                                    }
                                ]
                            }
                            ]
                        },
                        {
                            elem:'right-part',
                            content: [
                                {
                                    elem:'title_description',
                                    content: 'Условия доставки'
                                },
                                {
                                    elem:'text_description',
                                    content: 'Доставка товара осуществляется строго по указанному адресу покупателем.<br>Доставка товара до квартиры (офиса) осуществляется, если вес и объем не превышают возможность транспортировки одним человеком за один раз.<br>Оплата товара производится исключительно только в рублях РФ.<br>Проверка и последующая оплата товара заказанного покупателем с доставкой, производится строго в помещении (офис, квартира , № гостиницы).<br>Курьер, водитель, экспедитор не уполномочен давать консультации по техническим параметрам поставляемого товара.<br>В случае доставки товара на территорию с платным въездом, оплата за въезд осуществляется за счет покупателя. В противном случае, доставка осуществляется до места платного въезда.'
                                },
                                {
                                    elem:'result_price',
                                    content: 'Стоимость доставки: 500 <span class="rubl"></span>'
                                }
                            ]
                        }
                        ]
                    }
                ]
            }

            ]
        },

        {
            block: 'switch-part',
            mix:{block:'kontact-info'},
            content: [
            {
                elem:'title',
                content: 'Контактная информация'
            },
            {
                elem:'buttons-wrapper',
                content: [
                    {
                        elem:'button active',
                        content:'Физическое лицо'
                    },
                    {
                        elem:'button',
                        content:'Юридическое лицо'
                    },
                    {
                        elem:'button',
                        content:'Портал поставщиков'
                    }
                ]
            },
 {
                elem:'switchable-blocks',
                content: [
                    {
                        elem:'item-switchable kurer',
                        content: [
                        {
                            elem:'items-input-wrappers',
                            content: [
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Фамилия'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input',
                                        attrs:{placeholder:'Иванов'}
                                    }
                                ]
                            },
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Имя'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input',
                                        attrs:{placeholder:'Иван'}
                                    }
                                ]
                            },
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Отчество'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input',
                                        attrs:{placeholder:'Иванович'}
                                    }
                                ]
                            },
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'E-mail'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input',
                                        attrs:{placeholder:'example@example.com'}
                                    },
                                    {
                                        elem:'description-input-wrapper',
                                        content:'По указанному E-mail будет отправлена информация о заказе'
                                    }
                                ]
                            },
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Телефон'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input',
                                        attrs:{placeholder:'+7 (495) 646-1071'}
                                    },
                                    {
                                        elem:'description-input-wrapper',
                                        content:'Менеджер свяжется с вами по указанному телефону'
                                    }
                                ]
                            }
                            ]
                        }

                        ]
                    }
                ]
            }
            
            ]
        },
        {
            block: 'switch-part',
            mix:{block:'promo-kod'},
            content: [
            {
                elem:'title',
                content: 'Промо код'
            },
                            {
                                elem: 'input-wrapper',
                                content: [
                                    {
                                        elem:'title-input',
                                        content:'Промо код'
                                    },
                                    {
                                        elem:'exactly-input exactly-input_s_full',
                                        tag:'input'
                                    },
                                    {
                                        elem:'description-input-wrapper',
                                        content:'Введите промо код для получения скидки'
                                    }
                                ]
                            }

            
            ]
        },
        {
            block:'result_price_end',
            content: [
            {
                elem: 'price',
                content: '<span>Стоимость:</span> <span>141 220 <span class="rubl"></span></span>'
            },
            {
                elem: 'dostavka',
                content: '<span>Доставка:</span> <span>500 <span class="rubl"></span></span>'
            },
            {
                elem: 'sale',
                content: '<span>Скидка:</span> <span>0 <span class="rubl"></span></span>'
            },
            {
                elem: 'result',
                content: '<span>Итого:</span> <span>141 720 <span class="rubl"></span></span>'
            }
            ]
        },
        {
            block:'oformit',
            content: 'Офомрить'
        }

        ]
    }

},    

{
    block:'footer',
    tag:'footer'
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
        attrs: {src:'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.js'}
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
        attrs: {src:'../../scripts/5_page.js'}
    }
    ]
}
]
})








