block('main__content')(
    content()(function () {
        return [
        		{
        			block:'ten',
        			mix:{block:'main', elem:'ten'}
        		}
           ,
            applyNext()
        ];
    })
);
