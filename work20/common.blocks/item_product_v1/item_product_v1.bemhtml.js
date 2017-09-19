block('item_product_v1')(
    content()(function () {
        return [
                
                    {
                        elem: 'img',
                        tag: 'img',
                        attrs: {src: '../../img/product_mini.png'}
                    },
                    {
                        elem: 'icon_znachek'
                    },
                    {
                        elem: 'title',
                        content: 'Apple iMac (MK462RU/A) 27» Retina (5120х2880) 5K i5 3.2GHz (TB 3.6GHz)/8GB/1TB/R9 M380 2GB'
                    },
                    {
                        elem: 'kod',
                        content: 'код товара: <span>219-564</span>'
                    },
                    {
                        elem: 'params',
                        content: [
                            {
                                elem: 'icons',
                                content: [
                                    {
                                        elem: 'item_icon percent',
                                        tag: 'img',
                                        attrs: {src: '../../img/procent.svg'}
                                    },
                                    {
                                        elem: 'item_icon dostavka',
                                        content: [
                                            {
                                                elem: 'dostavka',
                                                tag: 'img',
                                                attrs: {src: '../../img/dostavka.svg'}
                                            },
                                            {
                                                elem: 'text_icon',
                                                tag: 'span',
                                                content: 'доставим сегодня'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'price',
                                content: '<p><span class="rubl">20 200</span> <span class="price__old_price"> старая цена: <span class="rubl">23 500</span></span>'
                            }
                        ]
                    }
                
                                        
           ,
            applyNext()
        ];
    })
);




                                    