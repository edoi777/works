block('page').content()(function () {
    // Append typekit fonts
    return this.ctx.content.concat({
        html:
        '<script src="https://use.typekit.net/ttf1idm.js"></script>'+
        '<script>try{Typekit.load({ async: true });}catch(e){}</script>'+
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;amp;subset=cyrillic">'
    });
});


block('page')(
    content()(function () {
        return [
         {
      block:'popup-add-to-card',
      content: [
          {
            
              elem:'wrapper',
              content:[
                  {
                      elem:'bl_1',
                      content: [
                          {
                              elem:'img',
                              tag:'img',
                              attrs:{src:'../../img/product_big.jpg'}
                          },
                          {
                           elem:'body_1',
                              content:[
                                  {
                                    elem:'title',
                                    content:'Товар добавлен в корзину'
                                  },
                                  {
                                    elem:'name',
                                    content:'Apple iMac (MK462RU/A) 27» Retina (5120х2880) 5K i5 3.2GHz (TB 3.6GHz)/8GB/1TB/R9 M380 2GB'
                                  },
                                  {
                                    elem:'price',
                                    content:'138 710 <span class="rubl"></span>'
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      elem:'bl_2',
                      content:[
                          {
                              elem:'continue_shopping',
                              content:'Продолжить покупки'
                          },
                          {
                              elem:'oformit',
                              content:'Оформить'
                          }
                      ]
                  },
                  {
                      elem:'bl_3',
                      content:[
                          {
                              elem: 'input',
                              tag:'input',
                              attrs:{type:'radio', name:'popup', id:'i_1',checked:'checked'}
                          },
                          {
                              elem: 'input',
                              tag:'input',
                              attrs:{type:'radio', name:'popup', id:'i_2'}
                          },
                          {
                              elem: 'label',
                              tag:'label',
                              attrs:{for:'i_1'},
                              content:'С этим товаром покупают'
                          },
                          {
                              elem: 'label',
                              tag:'label',
                              attrs:{for:'i_2'},
                              content:'Аксессуары'
                          },
                          {
                              elem:'slider',
                              attrs:{id:'pup_up_slider_1'},
                              content: [
                              {elem:'slick-prev', mix:{block:'slick-prev'}},
                                    {elem:'slider_item'},
                                    {elem:'slider_item'},
                                    {elem:'slider_item'},
                                    {elem:'slider_item'},
                              {elem:'slick-next', mix:{block:'slick-next'}}, 
                                
                              ]
                          },
                          {
                              elem:'slider',
                              attrs:{id:'pup_up_slider_2'},
                              content: [
                              
                                    {elem:'slider_item'},
                                    {elem:'slider_item'},
                                    {elem:'slider_item'},
                                    {elem:'slider_item'}
                                 
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
    },
    
    {
        block: 'top_button',
        content: [
        {
            elem: 'icon',
            tag:'img',
            attrs:{src:'../../img/top_button.svg'}
        },
       {
         elem:'text',
        content: 'наверх'
       }
        ]
    } 
                                        
           ,
            applyNext()
        ];
    })
);




                                    