block('header__top')(
    content()(function () {
        return [
                    {
                    elem: 'navigation content',
                    mix: {block:'top', elem:'navigation'},
                    content: [
                        {
                            elem: 'link',
                            mix: {block:'top', elem:'link'},
                            tag: 'a',
                            attrs: {href: '#'},
                            content: 'О компании'
                        },
                        {
                            elem: 'link',
                            mix: {block:'top', elem:'link'},
                            tag: 'a',
                            attrs: {href: '#'},
                            content: 'Доставка и оплата'
                        },
                        {
                            elem: 'link',
                            mix: {block:'top', elem:'link'},
                            tag: 'a',
                            attrs: {href: '#'},
                            content: 'Политика возврата'
                        },
                        {
                            elem: 'link',
                            mix: {block:'top', elem:'link'},
                            tag: 'a',
                            attrs: {href: '#'},
                            content: 'Контакты'
                        }
                    ]
                }
           ,
            applyNext()
        ];
    })
);
