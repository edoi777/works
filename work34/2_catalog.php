<?php 
include 'php_parts/common_head.php';
?>

    </head>
    <body>

      <?php include 'php_parts/header.php'; ?>
      <?php include 'php_parts/block__select__metro_and_category_services.php'; ?>
       

        
        <div class="toggler">
            <div class="toggler__a active">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13" class="toggler__a__icon">
                    <defs>
                        <style>
                            .cls-list {
                                fill: #ca4775;
                            }
                        </style>
                    </defs>
                    <g>
                        <g>
                            <rect class="cls-list fill" x="5.33" y="1" width="9.67" height="1" />
                            <circle class="cls-list fill" cx="1.5" cy="1.5" r="1.5" />
                            <rect class="cls-list fill" x="5.33" y="6" width="9.67" height="1" />
                            <circle class="cls-list fill" cx="1.5" cy="6.5" r="1.5" />
                            <rect class="cls-list fill" x="5.33" y="11" width="9.67" height="1" />
                            <circle class="cls-list fill" cx="1.5" cy="11.5" r="1.5" />
                        </g>
                    </g>
                </svg>
                <span class="toggler__a__title">Списком</span>
            </div>
            <div class="toggler__a">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 15" class="toggler__a__icon">
                    <defs>
                        <style>
                            .cls-map{fill:#222220;}
                        </style>
                    </defs>
                    <g >
                        <g>
                            <path class="cls-map fill" d="M.5,15a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,.34,2l5-2A.5.5,0,0,1,6,.5v12a.5.5,0,0,1-.34.47l-5,2ZM1,2.86V13.81l4-1.67V1.19Z"/>
                            <path class="cls-map fill" d="M11.5,14.94a.5.5,0,0,1-.5-.5V2.65a.5.5,0,0,1,.34-.48l5-2A.5.5,0,0,1,17,.69V12.47a.5.5,0,0,1-.34.48l-5,2ZM12,3V13.75l4-1.64V1.38Z"/>
                            <path class="cls-map fill" d="M11.5,15l-.16,0-6-2A.5.5,0,0,1,5,12.5V.5A.5.5,0,0,1,5.66,0l6,2A.5.5,0,0,1,12,2.5v12a.5.5,0,0,1-.5.5ZM6,12.14l5,1.67V2.86L6,1.19Z"/>
                        </g>
                    </g>
                </svg>
                <span class="toggler__a__title">На карте</span>
            </div>
        </div>
        <div class="catalog-item-wrapper">
            <div class="place__title ">
                <div class="place__title__wrapper_img"><img src="img/place_img.jpg" alt="" class="place__title__wrapper_img__img"></div>
                <div class="place__title__description">
                    <div class="place__title__description__part_left">
                        <div class="place__title__description__name">Этисэль на Таганке</div>
                        <div class="place__title__description__street">ул. Верхняя Радищевская 4с1</div>
                        <div class="place__title__description__metro">
                            <div class="place__title__description__metro__elipses">
                                <div class="place__title__description__metro__elipses__item" data-background-color="#b31d8e"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#fbd601"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#725d28"></div>
                            </div>
                            <span class="place__title__description__metro__this">м. Таганская</span>
                            <span class="place__title__description__metro__distance">350 м</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list wrapper page_catalog">
                <li class="list__item">
                    <div class="list__item__name">
                        Ксеомин (1ед)
                    </div>
                    <div class="list__item__price">
                        300 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Инъекции (увеличение губ, гиалуроновая кислота и т.д.)
                    </div>
                    <div class="list__item__price">
                        2 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат JuvidermUltraSmile (0,55) для губ
                    </div>
                    <div class="list__item__price">
                        10 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат Juviderm 3 (1мл)
                    </div>
                    <div class="list__item__price">
                        11 500 руб.
                    </div>
                </li>
            </ul>
            <a href="#" class="btn_t_1">
                <img src="img/icon__phone.svg" alt=""> +7 (499) 628-22-34
            </a>
        </div>
        <div class="registration__your__place">
            <div class="registration__your__place__text">Вы владелец салона?<br> <span>Добавьте его в каталог!</span></div>
            <button class="registration__your__place__button">
                <span class="registration__your__place__button__icon_plus"></span>Зарегистрировать салон
            </button>
        </div>
               <div class="catalog-item-wrapper">
            <div class="place__title ">
                <div class="place__title__wrapper_img"><img src="img/place_img.jpg" alt="" class="place__title__wrapper_img__img"></div>
                <div class="place__title__description">
                    <div class="place__title__description__part_left">
                        <div class="place__title__description__name">Этисэль на Таганке</div>
                        <div class="place__title__description__street">ул. Верхняя Радищевская 4с1</div>
                        <div class="place__title__description__metro">
                            <div class="place__title__description__metro__elipses">
                                <div class="place__title__description__metro__elipses__item" data-background-color="#b31d8e"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#fbd601"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#725d28"></div>
                            </div>
                            <span class="place__title__description__metro__this">м. Таганская</span>
                            <span class="place__title__description__metro__distance">350 м</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list wrapper page_catalog">
                <li class="list__item">
                    <div class="list__item__name">
                        Ксеомин (1ед)
                    </div>
                    <div class="list__item__price">
                        300 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Инъекции (увеличение губ, гиалуроновая кислота и т.д.)
                    </div>
                    <div class="list__item__price">
                        2 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат JuvidermUltraSmile (0,55) для губ
                    </div>
                    <div class="list__item__price">
                        10 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат Juviderm 3 (1мл)
                    </div>
                    <div class="list__item__price">
                        11 500 руб.
                    </div>
                </li>
            </ul>
            <a href="#" class="btn_t_1">
                <img src="img/icon__phone.svg" alt=""> +7 (499) 628-22-34
            </a>
        </div>
               <div class="catalog-item-wrapper">
            <div class="place__title ">
                <div class="place__title__wrapper_img"><img src="img/place_img.jpg" alt="" class="place__title__wrapper_img__img"></div>
                <div class="place__title__description">
                    <div class="place__title__description__part_left">
                        <div class="place__title__description__name">Этисэль на Таганке</div>
                        <div class="place__title__description__street">ул. Верхняя Радищевская 4с1</div>
                        <div class="place__title__description__metro">
                            <div class="place__title__description__metro__elipses">
                                <div class="place__title__description__metro__elipses__item" data-background-color="#b31d8e"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#fbd601"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#725d28"></div>
                            </div>
                            <span class="place__title__description__metro__this">м. Таганская</span>
                            <span class="place__title__description__metro__distance">350 м</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list wrapper page_catalog">
                <li class="list__item">
                    <div class="list__item__name">
                        Ксеомин (1ед)
                    </div>
                    <div class="list__item__price">
                        300 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Инъекции (увеличение губ, гиалуроновая кислота и т.д.)
                    </div>
                    <div class="list__item__price">
                        2 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат JuvidermUltraSmile (0,55) для губ
                    </div>
                    <div class="list__item__price">
                        10 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат Juviderm 3 (1мл)
                    </div>
                    <div class="list__item__price">
                        11 500 руб.
                    </div>
                </li>
            </ul>
            <a href="#" class="btn_t_1">
                <img src="img/icon__phone.svg" alt=""> +7 (499) 628-22-34
            </a>
        </div>
               <div class="catalog-item-wrapper">
            <div class="place__title ">
                <div class="place__title__wrapper_img"><img src="img/place_img.jpg" alt="" class="place__title__wrapper_img__img"></div>
                <div class="place__title__description">
                    <div class="place__title__description__part_left">
                        <div class="place__title__description__name">Этисэль на Таганке</div>
                        <div class="place__title__description__street">ул. Верхняя Радищевская 4с1</div>
                        <div class="place__title__description__metro">
                            <div class="place__title__description__metro__elipses">
                                <div class="place__title__description__metro__elipses__item" data-background-color="#b31d8e"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#fbd601"></div>
                                <div class="place__title__description__metro__elipses__item" data-background-color="#725d28"></div>
                            </div>
                            <span class="place__title__description__metro__this">м. Таганская</span>
                            <span class="place__title__description__metro__distance">350 м</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list wrapper page_catalog">
                <li class="list__item">
                    <div class="list__item__name">
                        Ксеомин (1ед)
                    </div>
                    <div class="list__item__price">
                        300 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Инъекции (увеличение губ, гиалуроновая кислота и т.д.)
                    </div>
                    <div class="list__item__price">
                        2 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат JuvidermUltraSmile (0,55) для губ
                    </div>
                    <div class="list__item__price">
                        10 000 руб.
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item__name">
                        Препарат Juviderm 3 (1мл)
                    </div>
                    <div class="list__item__price">
                        11 500 руб.
                    </div>
                </li>
            </ul>
            <a href="#" class="btn_t_1">
                <img src="img/icon__phone.svg" alt=""> +7 (499) 628-22-34
            </a>
        </div>
        <footer>
            <div class="footer__mail">
                info@msk-beauty.ru
            </div>
            <div class="footer__description">
                Рейтинг составлен на коммерческой основе, чтобы узнать подробности вы можете <a href="#">связаться с менеджером.</a>
            </div>
        </footer>
    </body>
</html>