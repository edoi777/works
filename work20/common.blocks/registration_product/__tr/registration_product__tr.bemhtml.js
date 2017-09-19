block('registration_product__tr')(
    content()(function () {
        return [
                        {
                            elem:'td td1',
                            tag:'td',
                            content:{
                                elem:'img',
                                tag:'img',
                                attrs:{src:'../../img/product.jpg'}
                            }
                        },
                        {
                            elem:'td td2',
                            tag:'td',
                            content:{
                                elem:'desc_product',
                                content:'Пылесос для оргтехники АП-2388/ПТ-1100 M (пылесос для тонера, пылесос сервисный 497AB, Пылесос тонерный)'
                            }
                        },
                        {
                            elem:'td td3',
                            tag:'td',
                            content:{
                                elem:'input',
                                tag:'input',
                                attrs:{type:'text',value:'10'}
                            }
                        },
                        {
                            elem:'td td4',
                            tag:'td',
                            content:'<p>13 700 <span class="rubl"></span></p>'
                        },
                        {
                            elem:'td td5',
                            tag:'td',
                            content:'<p>0 <span class="rubl"></span></p>'
                        },
                        {
                            elem:'td td6',
                            tag:'td',
                            content:[
                            {
                                elem:'itogo',
                                content:'<p>137 000 <span class="rubl"></span></p>'
                            },
                            {
                                elem:'delet_product',
                                tag:'img',
                                attrs:{src:'../../img/close.svg'}
                            }
                            ]
                        }
                                        
           ,
            applyNext()
        ];
    })
);




                                    