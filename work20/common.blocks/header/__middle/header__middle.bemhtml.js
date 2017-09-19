block('header__middle_wrapper')(
    content()(function () {
        return [
                    {
                   elem:'middle content',
                   content: [
                    {
                                elem: 'logo',
                                tag: 'a',
                                attrs: {href: '#'}
                                
                            }, {
                                elem: 'nav_middle',
                                tag: 'nav',
                                content: [
                                    {
                                        elem: 'link',
                                        mix: {block:'nav_middle', elem:'link'},
                                        tag: 'a',
                                        attrs: {href: '#'},
                                        content: 'Акции'

                                    },
                                    {
                                        elem: 'link',
                                        mix: {block:'nav_middle', elem:'link'},
                                        tag: 'a',
                                        attrs: {href: '#'},
                                        content: 'Уценённый товар'

                                    },
                                    {
                                        elem: 'link',
                                        mix: {block:'nav_middle', elem:'link'},
                                        tag: 'a',
                                        attrs: {href: '#'},
                                        content: 'Услуги'

                                    }
                                ]

                            }, {
                                elem: 'callback',
                                content: [
                                    {
                                        elem: 'icon_call',
                                        tag: 'img',
                                        attrs: {src: '../../img/phone.svg'}
                                    },
                                    {
                                        elem: 'phone_block',
                                        content: [
                                            {
                                                elem: 'number',
                                                tag: 'a',
                                                attrs: {href: '#'},
                                                content: '+7 (495) 646-10-71'
                                            },
                                            {
                                                elem: 'text_callback',
                                                tag: 'p',
                                                content: 'Не смогли дозвониться?'
                                            },
                                            {
                                                elem: 'button',
                                                tag: 'p',
                                                content: 'Мы вам перезвоним'
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                elem: 'working_hours',
                                content: [
                                    {
                                        elem: 'icon_work',
                                        tag: 'img',
                                        attrs: {src: '../../img/clock.svg'}
                                    },
                                    {
                                        elem: 'time_block',
                                        content: [
                                            {
                                                elem: 'time',
                                                tag: 'p',
                                                content: 'с 10:00 до 19:00 <br><span>пн. - пт.</span>'
                                            },
                                            {
                                                elem: 'text_time',
                                                tag: 'p',
                                                content: ' г. Москва, метро Аэропорт'
                                            }
                                        ]
                                    }
                                ]
                            }
                            ]
                }
           ,
            applyNext()
        ];
    })
);
