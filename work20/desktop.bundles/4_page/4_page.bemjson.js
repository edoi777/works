({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
    { elem: 'meta', attrs: { name: 'description', content: '' }},
    { elem: 'css', url: '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css' },
    { elem: 'css', url: '4_page.min.css' }

    ],
    scripts: [
    { elem: 'js', url: '4_page.min.js' },

    ],
    mods: { theme: 'default' },
    content: [
    {
        block:'slider_personal_page',
        content: 
        {
            elem:'wrapper',
            attrs:{id:'per_slider'},
            content: [{
                elem:'wrapper_lvl_2',
                content: '<div data-thumb="../../img/product_big.jpg"><img src="../../img/product_big.jpg"></div>'+
            '<div data-thumb="../../img/product_big_2.jpg"><img src="../../img/product_big_2.jpg"></div>' +
            '<div data-thumb="../../img/product_big_2.jpg"><img src="../../img/product_big_2.jpg"></div>' +
            '<div data-thumb="../../img/product_big_2.jpg"><img src="../../img/product_big_2.jpg"></div>' 
            },
            {
                elem:'close',
                tag:'img',
                attrs:{src:'../../img/close_v_3.svg'}
            }
            ]
        }


    },

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
            content: [
            {
                elem:'item',
                tag: 'a',
                attrs: {href:'#'},
                content: 'Главная'
            },
            {
                elem:'item',
                tag: 'a',
                attrs: {href:'#'},
                content: 'Компьютеры, Ноутбуки, Планшеты, Моноблоки'
            },
            {
                elem:'item',
                tag: 'a',
                attrs: {href:'#'},
                content: 'Компьютеры'
            },
            {
                elem:'item',
                tag: 'a',
                attrs: {href:'#'},
                content: 'Компьютеры Apple'
            }
            ]
        },
        {
            block:'personal_product_page',
            content: [
            {
                elem:'title',
                tag:'h1',
                content:'Apple iMac (MK462RU/A) 27» Retina (5120х2880) 5K i5 3.2GHz (TB 3.6GHz)/8GB/1TB/R9 M380 2GB'
            },
            {
                elem:'body_product',
                content:[
                {
                    elem:'left_part',
                    content: [
                    {
                        elem:'mini_picture',
                        content:[
                        {
                            elem:'img',
                            tag:'img',
                            attrs:{src:'../../img/product_big.jpg'}
                        },
                        {
                            elem:'img',
                            tag:'img',
                            attrs:{src:'../../img/product_big.jpg'}
                        }
                        ]
                    },
                    {
                        elem:'big_picture',
                        content: [

                        {
                            elem:'img_big',
                            tag:'img',
                            attrs:{src:'../../img/product_big.jpg'}
                        },
                        {
                            elem:'icon_plus',
                            content: [
                            {
                                elem:'icon_loup',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/loup.svg'}
                            },
                            {
                                elem:'icon_loup_text',
                                content:'Увеличить'
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'bottom_part',
                        content: [
                        {
                            elem:'bottom_params',
                            content: [
                            {
                                elem:'bottom_params_icon',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/size.svg'}
                            },
                            {
                                elem:'text_icon',
                                content: '1000х1200х80 мм.'
                            },
                            {
                                elem:'clarification',
                                content: 'Размеры'
                            }
                            ]
                        },
                        {
                            elem:'bottom_params',
                            content: [
                            {
                                elem:'bottom_params_icon',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/weight.svg'}
                            },
                            {
                                elem:'text_icon',
                                content: '35 кг.'
                            },
                            {
                                elem:'clarification',
                                content: 'Вес'
                            }
                            ]
                        }
                        ]
                    }
                    ]
                },
                {
                    elem:'right_part',
                    content: [
                    {
                        elem:'bl_1',
                        content: [
                        {
                            elem:'kod',
                            content:'код товара:<span>219-926</span>'
                        },
                        {
                            block: 'hearth',
                            tag:'label',
                            content: [
                            {
                                elem:'input',
                                tag:'input',
                                attrs:{type:'checkbox'}
                            },
                            {
                                elem:'icon',
                                content:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 17"><defs><style>.cls-1{fill:#fff;stroke:#e5e5e4;stroke-miterlimit:10;}</style></defs><title>Ресурс 1</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><path class="cls-1" d="M17.23,2a5,5,0,0,1,0,7.13L10,16.35a.52.52,0,0,1-.73,0L2,9.1A5,5,0,1,1,9.1,2l.5.51.5-.5a5,5,0,0,1,7.13,0"/></g></g></svg>'
                            },
                            ]
                        },
                        {
                          elem:'stars',
                          tag:'img',
                          attrs: {src:'../../img/personal_page/stars.svg'}

                      }
                      ]
                  },
                  {
                    elem:'bl_2',
                    content: [
                    {
                        elem:'bl_2_left',
                        content: [
                        {
                            elem:'bl_2_item',
                            attrs: {id:'i1'},
                            content: [
                            {
                                elem:'bl_2_icon',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/est_na_sklade.svg'}
                            },
                            {
                                elem:'bl_2_name',
                                content:'Есть на складе'
                            }
                            ]
                        },
                        {
                            elem:'bl_2_item',
                            attrs: {id:'i2'},
                            content: [
                            {
                                elem:'bl_2_icon',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/dostavka_segodna.svg'}
                            },
                            {
                                elem:'bl_2_name',
                                content:'Сможем доставить сегодня'
                            },
                            {
                                elem:'bl_2_name_desc',
                                content:'Стоимость доставки по москве: <span>500 <span class="rubl"></span></span>'
                            }
                            ]
                        },
                        {
                            elem:'bl_2_item',
                            attrs: {id:'i3'},
                            content: [
                            {
                                elem:'bl_2_icon',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/zabrat_iz_ofisa.svg'}
                            },
                            {
                                elem:'bl_2_name',
                                content:'Можно забрать из офиса сегодня'
                            },
                            {
                                elem:'bl_2_name_desc',
                                content:'Это бесплатно'
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'bl_2_center',
                        content:{
                            elem:'bl_2_item',
                            attrs: {id:'i4'},
                            content: [
                            {
                                elem:'bl_2_icon',
                                tag:'img',
                                attrs:{src:'../../img/personal_page/garantiay.svg'}
                            },
                            {
                                elem:'bl_2_name',
                                content:'1 Год'
                            },
                            {
                                elem:'bl_2_name_desc',
                                content:'гарантия'
                            }
                            ]
                        }
                    },
                    {
                        elem:'bl_2_right',
                        content:[
                        {
                            elem:'price',
                            content: '138 710 <span class="rubl"></span>'
                        },
                        {
                            elem:'notification',
                            content: 'Уведомить об изменении цены'
                        },
                        {
                            elem:'prices',
                            content: [
                            {
                                elem: 'juridical_persons',
                                content: 'Юридические лица: <span>142 871.30 <span class="rubl"></span> </span>'
                            },
                            {
                                elem: 'portal_price',
                                content: 'Юридические лица: <span>142 871.30 <span class="rubl"></span> </span>'
                            }
                            ]
                        },
                        {
                            elem:'buy_button',
                            content: 'Купить'
                        }
                        ]
                    }
                    ]
                },
                {
                    elem:'bl_3',
                    content: [
                    {
                        elem:'title_s_tovarom_buy',
                        content: 'С этим товаром покупают'
                    },
                    {
                        block:'s_tovarom_buy_slider',
                        content: [
                        {
                            elem:'item',
                            content: {
                                elem:'item_body',
                                content:[
                                {
                                    elem:'img',
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/magic_mouse.jpg'}
                                },
                                {
                                    elem:'text',
                                    content:'Apple Magic Mouse White BlueTooth'
                                },
                                {
                                    elem:'price',
                                    content:'6 060 <span class="rubl"></span>'
                                }
                                ]
                            }
                        },
                        {
                            elem:'item',
                            content: {
                                elem:'item_body',
                                content:[
                                {
                                    elem:'img',
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/magic_mouse.jpg'}
                                },
                                {
                                    elem:'text',
                                    content:'Apple Magic Mouse White BlueTooth'
                                },
                                {
                                    elem:'price',
                                    content:'6 060 <span class="rubl"></span>'
                                }
                                ]
                            }
                        },
                        {
                            elem:'item',
                            content: {
                                elem:'item_body',
                                content:[
                                {
                                    elem:'img',
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/magic_mouse.jpg'}
                                },
                                {
                                    elem:'text',
                                    content:'Apple Magic Mouse White BlueTooth'
                                },
                                {
                                    elem:'price',
                                    content:'6 060 <span class="rubl"></span>'
                                }
                                ]
                            }
                        },
                        {
                            elem:'item',
                            content: {
                                elem:'item_body',
                                content:[
                                {
                                    elem:'img',
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/magic_mouse.jpg'}
                                },
                                {
                                    elem:'text',
                                    content:'Apple Magic Mouse White BlueTooth'
                                },
                                {
                                    elem:'price',
                                    content:'6 060 <span class="rubl"></span>'
                                }
                                ]
                            }
                        },
                        {
                            elem:'item',
                            content: {
                                elem:'item_body',
                                content:[
                                {
                                    elem:'img',
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/magic_mouse.jpg'}
                                },
                                {
                                    elem:'text',
                                    content:'Apple Magic Mouse White BlueTooth'
                                },
                                {
                                    elem:'price',
                                    content:'6 060 <span class="rubl"></span>'
                                }
                                ]
                            }
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
            block:'switch',
            content: [
            {
                elem: 'controls',
                content: [
                {
                    elem:'cont_item active',
                    content: 'Характеристики'
                },
                {
                    elem:'cont_item',
                    content: 'Отзывы <span>5</span>'
                },
                {
                    elem:'cont_item',
                    content: 'Вопросы и ответы <span>9</span>'
                }
                ]
            },
            {
                elem:'body',
                content: [
                {
                    elem:'s1 wrapper_switch',
                    content: [
                    {
                        elem:'table',
                        tag:'table',
                        content: [
                        {
                            elem:'title_table',
                            tag:'thead',
                            content: '<tr><th colspan="2">Основные характеристики</th></tr>'
                        },
                        {
                            elem:'table_body',
                            tag:'tbody',
                            content: [
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Производитель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'APPLE'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Модель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Z0SC002QQ'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Цвет'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Комбинированная расцветка'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Описание Расцветки'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Черный, серебристый'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Позиционирование'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Для мультимедийных задач'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Операционная Система'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Mac OS'
                                }
                                ]
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'table',
                        tag:'table',
                        content: [
                        {
                            elem:'title_table',
                            tag:'thead',
                            content: '<tr><th colspan="2">Основные характеристики</th></tr>'
                        },
                        {
                            elem:'table_body',
                            tag:'tbody',
                            content: [
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Производитель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'APPLE'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Модель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Z0SC002QQ'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Цвет'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Комбинированная расцветка'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Описание Расцветки'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Черный, серебристый'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Позиционирование'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Для мультимедийных задач'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Операционная Система'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Mac OS'
                                }
                                ]
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'table',
                        tag:'table',
                        content: [
                        {
                            elem:'title_table',
                            tag:'thead',
                            content: '<tr><th colspan="2">Основные характеристики</th></tr>'
                        },
                        {
                            elem:'table_body',
                            tag:'tbody',
                            content: [
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Производитель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'APPLE'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Модель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Z0SC002QQ'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Цвет'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Комбинированная расцветка'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Описание Расцветки'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Черный, серебристый'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Позиционирование'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Для мультимедийных задач'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Операционная Система'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Mac OS'
                                }
                                ]
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'table',
                        tag:'table',
                        content: [
                        {
                            elem:'title_table',
                            tag:'thead',
                            content: '<tr><th colspan="2">Основные характеристики</th></tr>'
                        },
                        {
                            elem:'table_body',
                            tag:'tbody',
                            content: [
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Производитель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'APPLE'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Модель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Z0SC002QQ'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Цвет'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Комбинированная расцветка'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Описание Расцветки'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Черный, серебристый'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Позиционирование'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Для мультимедийных задач'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Операционная Система'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Mac OS'
                                }
                                ]
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'table',
                        tag:'table',
                        content: [
                        {
                            elem:'title_table',
                            tag:'thead',
                            content: '<tr><th colspan="2">Основные характеристики</th></tr>'
                        },
                        {
                            elem:'table_body',
                            tag:'tbody',
                            content: [
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Производитель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'APPLE'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Модель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Z0SC002QQ'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Цвет'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Комбинированная расцветка'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Описание Расцветки'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Черный, серебристый'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Позиционирование'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Для мультимедийных задач'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Операционная Система'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Mac OS'
                                }
                                ]
                            }
                            ]
                        }
                        ]
                    },
                    {
                        elem:'table',
                        tag:'table',
                        content: [
                        {
                            elem:'title_table',
                            tag:'thead',
                            content: '<tr><th colspan="2">Основные характеристики</th></tr>'
                        },
                        {
                            elem:'table_body',
                            tag:'tbody',
                            content: [
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Производитель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'APPLE'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Модель'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Z0SC002QQ'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Цвет'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Комбинированная расцветка'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Описание Расцветки'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Черный, серебристый'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Позиционирование'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Для мультимедийных задач'
                                }
                                ]
                            },
                            {
                                elem:'tr',
                                tag:'tr',
                                content: [
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Операционная Система'
                                },
                                {
                                    elem:'td',
                                    tag:'td',
                                    content:'Mac OS'
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
                    elem:'s2 wrapper_switch hide',
                    content:[
                    {
                        block:'sortirovka',
                        content:
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
                        }

                    },
                    {
                        elem:'item_recall',
                        content: [
                        {
                            elem:'desc_user',
                            content:[
                            {
                                elem:'user_name',
                                content:'Ovc Max'
                            },
                            {
                                elem:'kol_vo_recall',
                                content:'Автор 17 отзывов'
                            },
                            {
                                elem:'date',
                                content:'22 октября, Красноярск'
                            },
                            {
                                elem:'rating',
                                content:{
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/stars.svg'}
                                }
                            },
                            {
                                elem:'rating_text',
                                content:'хорошая модель'
                            },
                            {
                                elem:'exp',
                                content:'Опыт использования: несколько месяцев'
                            }
                            ]
                        },
                        {
                            elem:'recall_body',
                            content:'<span>Достоинства:</span>:<br>Быстрый во всем (кроме камеры), особенно в играх и браузере. <br>Камера когда не тупит норм. <br>Батарейка держит как в S7, что для айфона уже круто. <br>Всякие штуки вроде: поднял телефон и он загорелся, даванул на него и он чего-то сделал, подкаст плеер встроенный, меню настроек уведомлений - все это тут круто сделано и реально работает (я пользуюсь всем этим)<br><span>Недостатки:</span>:<br>Камера неплохая, но точно хуже S7. Плюс она то быстро запустится, то секунд 5 тупит. <br>Многозадачности нет - свернул приложение и оно перестало качать и по сути работать, только пуш уведомления. Чтобы понят о чем я надо посмотреть как это работает на андройд, когда все висит в памяти и все работает ровно так как настроил сам. При этом батарейка такой же емкости живет не меньше ))) Это к слову об оптимизации оси о которой так любят говорить сравнивая Iphone за 50тр с андоройдом за 15 тр. Сравнивайте равные по цене продукты и вопросы отпадут. <br>Софта сильно меньше чем на андройд, и качество его так себе. Пример: наберите «ЛФК» или «Личный тренер» или «интернет магазины» или «онлайн плеер» и сравните. Под андройд реально софта больше и он порой просто отсутствует на ios. <br>Siri - она крута только своими шуточками не в попад. Когда даешь реальные задачи Google now рвет ее в клочья.<br><span>Комментарий:</span> <br>В общем перешел на iphone потому что: сдох ноут на винде и купил macbook, устарел планшет на андройде и купил air. И если macbook оставил двоякие впечатления, то ipad конечно вещь, собственно поэтому продал Galaxy s7 и переехал на Iphone. Как видите при прочих равных мне андройд больше нравился, но коль уже встал на темную сторону силы, надо идти до конца, может и мнение изменится :)'
                        }
                        ]
                    },
                    {
                        elem:'item_recall',
                        content: [
                        {
                            elem:'desc_user',
                            content:[
                            {
                                elem:'user_name',
                                content:'Ovc Max'
                            },
                            {
                                elem:'kol_vo_recall',
                                content:'Автор 17 отзывов'
                            },
                            {
                                elem:'date',
                                content:'22 октября, Красноярск'
                            },
                            {
                                elem:'rating',
                                content:{
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/stars.svg'}
                                }
                            },
                            {
                                elem:'rating_text',
                                content:'хорошая модель'
                            },
                            {
                                elem:'exp',
                                content:'Опыт использования: несколько месяцев'
                            }
                            ]
                        },
                        {
                            elem:'recall_body',
                            content:'<span>Достоинства:</span>:<br>Быстрый во всем (кроме камеры), особенно в играх и браузере. <br>Камера когда не тупит норм. <br>Батарейка держит как в S7, что для айфона уже круто. <br>Всякие штуки вроде: поднял телефон и он загорелся, даванул на него и он чего-то сделал, подкаст плеер встроенный, меню настроек уведомлений - все это тут круто сделано и реально работает (я пользуюсь всем этим)<br><span>Недостатки:</span>:<br>Камера неплохая, но точно хуже S7. Плюс она то быстро запустится, то секунд 5 тупит. <br>Многозадачности нет - свернул приложение и оно перестало качать и по сути работать, только пуш уведомления. Чтобы понят о чем я надо посмотреть как это работает на андройд, когда все висит в памяти и все работает ровно так как настроил сам. При этом батарейка такой же емкости живет не меньше ))) Это к слову об оптимизации оси о которой так любят говорить сравнивая Iphone за 50тр с андоройдом за 15 тр. Сравнивайте равные по цене продукты и вопросы отпадут. <br>Софта сильно меньше чем на андройд, и качество его так себе. Пример: наберите «ЛФК» или «Личный тренер» или «интернет магазины» или «онлайн плеер» и сравните. Под андройд реально софта больше и он порой просто отсутствует на ios. <br>Siri - она крута только своими шуточками не в попад. Когда даешь реальные задачи Google now рвет ее в клочья.<br><span>Комментарий:</span> <br>В общем перешел на iphone потому что: сдох ноут на винде и купил macbook, устарел планшет на андройде и купил air. И если macbook оставил двоякие впечатления, то ipad конечно вещь, собственно поэтому продал Galaxy s7 и переехал на Iphone. Как видите при прочих равных мне андройд больше нравился, но коль уже встал на темную сторону силы, надо идти до конца, может и мнение изменится :)'
                        }
                        ]
                    },
                    {
                        elem:'item_recall',
                        content: [
                        {
                            elem:'desc_user',
                            content:[
                            {
                                elem:'user_name',
                                content:'Ovc Max'
                            },
                            {
                                elem:'kol_vo_recall',
                                content:'Автор 17 отзывов'
                            },
                            {
                                elem:'date',
                                content:'22 октября, Красноярск'
                            },
                            {
                                elem:'rating',
                                content:{
                                    tag:'img',
                                    attrs:{src:'../../img/personal_page/stars.svg'}
                                }
                            },
                            {
                                elem:'rating_text',
                                content:'хорошая модель'
                            },
                            {
                                elem:'exp',
                                content:'Опыт использования: несколько месяцев'
                            }
                            ]
                        },
                        {
                            elem:'recall_body',
                            content:'<span>Достоинства:</span>:<br>Быстрый во всем (кроме камеры), особенно в играх и браузере. <br>Камера когда не тупит норм. <br>Батарейка держит как в S7, что для айфона уже круто. <br>Всякие штуки вроде: поднял телефон и он загорелся, даванул на него и он чего-то сделал, подкаст плеер встроенный, меню настроек уведомлений - все это тут круто сделано и реально работает (я пользуюсь всем этим)<br><span>Недостатки:</span>:<br>Камера неплохая, но точно хуже S7. Плюс она то быстро запустится, то секунд 5 тупит. <br>Многозадачности нет - свернул приложение и оно перестало качать и по сути работать, только пуш уведомления. Чтобы понят о чем я надо посмотреть как это работает на андройд, когда все висит в памяти и все работает ровно так как настроил сам. При этом батарейка такой же емкости живет не меньше ))) Это к слову об оптимизации оси о которой так любят говорить сравнивая Iphone за 50тр с андоройдом за 15 тр. Сравнивайте равные по цене продукты и вопросы отпадут. <br>Софта сильно меньше чем на андройд, и качество его так себе. Пример: наберите «ЛФК» или «Личный тренер» или «интернет магазины» или «онлайн плеер» и сравните. Под андройд реально софта больше и он порой просто отсутствует на ios. <br>Siri - она крута только своими шуточками не в попад. Когда даешь реальные задачи Google now рвет ее в клочья.<br><span>Комментарий:</span> <br>В общем перешел на iphone потому что: сдох ноут на винде и купил macbook, устарел планшет на андройде и купил air. И если macbook оставил двоякие впечатления, то ipad конечно вещь, собственно поэтому продал Galaxy s7 и переехал на Iphone. Как видите при прочих равных мне андройд больше нравился, но коль уже встал на темную сторону силы, надо идти до конца, может и мнение изменится :)'
                        }
                        ]
                    },
                    {
                        block:'pagination'
                    }
                    ]
                },
                {
                    elem:'s3 wrapper_switch hide',
                    content:{
                        elem:'comment',
                        content:[
                        {
                            elem:'name_user_comment',
                            content:'Дима Лавр'
                        },
                        {
                            elem:'commtent_date',
                            content:'9 октября 2015'
                        },
                        {
                            elem:'comment_text',
                            content:'Скажите мне чем он лучше Note 4 за 36к и я кину в Вас тапком'
                        },
                        {
                            elem:'comment_answer',
                            content:[
                            {
                                elem:'name_user_comment',
                                content:'Дима Лавр'
                            },
                            {
                                elem:'commtent_date',
                                content:'9 октября 2015'
                            },
                            {
                                elem:'comment_text',
                                content:'Скажите мне чем он лучше Note 4 за 36к и я кину в Вас тапком'
                            },
                            {
                                elem:'comment_answer',
                                content:[
                                {
                                    elem:'name_user_comment',
                                    content:'Дима Лавр'
                                },
                                {
                                    elem:'commtent_date',
                                    content:'9 октября 2015'
                                },
                                {
                                    elem:'comment_text',
                                    content:'Скажите мне чем он лучше Note 4 за 36к и я кину в Вас тапком'
                                }
                                ]
                            }
                            ]
                        }
                        ]
                    }
                }
                ]
            }
            ]
        }
        ]
    },
    {
        block:'item_product_v1_wrapper',
        mods: { align: 'left'},
        content: [
        {
            elem: 'title_block',
            content:'Вы недавно смотрели',
        },
        {
            elem:'items',
            content: [
            {
                block: 'item_product_v1',
            },
            {
                block: 'item_product_v1',
            }
            ]
        }
        ]
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
        attrs: {src:'//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js'}
    },
    {
        tag:'script',
        attrs: {src:'../../scripts/header.js'}
    },
    {
        tag:'script',
        attrs: {src:'../../scripts/4_page.js'}
    }
    ]
}
]
})