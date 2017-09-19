<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimal-ui">
    <title>Document</title>
      
      <style>
    @charset 'UTF-8';.call_back_body form,.logo,.sidebar ul li{-webkit-box-orient:vertical;-webkit-box-direction:normal}*,.slick-dots{list-style:none}*{margin:0;padding:0;line-height:100%;outline:0}a{color:inherit;text-decoration:inherit}.content{width:95%;max-width:1100px;margin:0 auto}textarea{font-family:inherit}body{font-family:Roboto,sans-serif;font-size:14px;color:#313131;overflow-x:hidden}.icon-arrow_left:before,.icon-arrow_right:before,.icon-check:before,.icon-close:before,.icon-loop:before,.icon-map:before,.icon-menu:before,.icon-phone:before,.sidebar ul li a:before{font-family:fontello}::-webkit-input-placeholder{color:#adafad;font-size:14px}::-moz-placeholder{color:#adafad;font-size:14px}:-moz-placeholder{color:#adafad;font-size:14px}:-ms-input-placeholder{color:#adafad;font-size:14px}.icon-check:before{content:'\e800'}.icon-map:before{content:'\e801'}.icon-phone:before{content:'\e802'}.icon-loop:before{content:'\e803'}.icon-menu:before{content:'\e804'}.icon-close:before{content:'\e805'}.icon-arrow_right:before{content:'\e806'}.icon-arrow_left:before{content:'\e807'}.button_type_1{color:#022761;font-size:16px;border:2px solid #113977;padding:8px 30px;border-radius:3px;display:block}.button_type_2{color:#113977;font-size:15px}.button_type_3{background:#113977;color:#fff;font-size:16px;padding:8px 40px;display:block}main .content>h1,main .content>h2,main .content>h3,main .content>h4,main .content>h5{margin-bottom:45px;font-size:36px;text-transform:uppercase;font-weight:400}.breadbumbs{padding-top:15px;padding-bottom:40px}.breadbumbs .content{content:">"}.breadbumbs .content a:after{content:" >"}.breadbumbs .content a:last-child:after{content:""}.breadbumbs .content a{color:#57575d}.breadbumbs .content a:last-child{color:#113977}.sidebar .zag{background:#113977;color:#fff;font-size:24px;padding:5px 17px;box-sizing:border-box;margin-bottom:4px}.sidebar{max-width:268px;margin-right:32px;width:100%}.sidebar ul li a{background:#efefef;display:block;margin-bottom:2px;font-size:16px;padding:8px 10px;box-sizing:border-box;line-height:19px}.sidebar ul li a:before{content:'\e806';color:#04066b;font-size:12px;float:left;padding-bottom:3px;margin-right:12px;font-weight:400}.sidebar>ul>li>ul+a,.slide_text_block span{font-weight:700}.sidebar ul li ul{-webkit-box-ordinal-group:2;order:1}.sidebar ul li ul li a{background:#f5f6f6!important;padding-left:30px}.sidebar ul li ul li a:before{color:#000;padding-bottom:3px}.sidebar ul li{display:-webkit-box;display:flex;flex-direction:column}.pagination .content .icon-arrow_left,.pagination .content .icon-arrow_right,.pagination .content .pag_page{width:25px;height:25px;display:block;vertical-align:middle}.pagination{margin-top:45px}.logo_svg_footer+p,.logo_svg_header+p{font-family:Arial;margin-top:-17px}.pagination .content .icon-arrow_left:before{font-size:7px;vertical-align:middle;margin-right:22px;line-height:25px}.pagination .content .icon-arrow_right:before{font-size:7px;vertical-align:middle;margin-left:22px;line-height:25px}.pagination .content .pag_page{text-align:center;line-height:25px}.pagination .content .pag_page.active{background:#113977;color:#fff;text-align:center;line-height:25px}@media screen and (max-width:768px){.sidebar{margin-bottom:50px;margin-right:0;width:100%;max-width:100%}.breadbumbs .content{-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}}.logo_svg_footer,.logo_svg_header{width:207px;height:75px}@font-face{font-family:Roboto;src:url(font/Roboto-Black.ttf);font-weight:800;font-style:normal}@font-face{font-family:Roboto;src:url(font/Roboto-Bold.ttf);font-weight:700;font-style:normal}@font-face{font-family:Roboto;src:url(font/Roboto-Medium.ttf);font-weight:600;font-style:normal}@font-face{font-family:Roboto;src:url(font/Roboto-Regular.ttf);font-weight:400;font-style:normal}@font-face{font-family:fontello;src:url(data:application/octet-stream;base64,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) format('woff'),url(data:application/octet-stream;base64,AAEAAAAPAIAAAwBwR1NVQiCMJXkAAAD8AAAAVE9TLzI+IUmhAAABUAAAAFZjbWFwaPfs8QAAAagAAAHSY3Z0IAbt/wIAAAwYAAAAIGZwZ22KkZBZAAAMOAAAC3BnYXNwAAAAEAAADBAAAAAIZ2x5ZvMmJi8AAAN8AAAEnmhlYWQNtPTyAAAIHAAAADZoaGVhCUkFbgAACFQAAAAkaG10eCP9/+8AAAh4AAAAJGxvY2EFOAZrAAAInAAAABRtYXhwAM0L3QAACLAAAAAgbmFtZcydHB4AAAjQAAACzXBvc3SBcofOAAALoAAAAG5wcmVw5UErvAAAF6gAAACGAAEAAAAKADAAPgACbGF0bgAOREZMVAAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAED/wGQAAUAAAJ6ArwAAACMAnoCvAAAAeAAMQECAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQOgA6AcDUv9qAFoDXgCXAAAAAQAAAAAAAAAAAAUAAAADAAAALAAAAAQAAAFiAAEAAAAAAFwAAwABAAAALAADAAoAAAFiAAQAMAAAAAQABAABAADoB///AADoAP//AAAAAQAEAAAAAQACAAMABAAFAAYABwAIAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAABwAAAAAAAAAAgAAOgAAADoAAAAAAEAAOgBAADoAQAAAAIAAOgCAADoAgAAAAMAAOgDAADoAwAAAAQAAOgEAADoBAAAAAUAAOgFAADoBQAAAAYAAOgGAADoBgAAAAcAAOgHAADoBwAAAAgAAAABAAD/awUrA1IABQAGswUBAS0rCQI3CQEFK/x8/lljAUQDIALv/HwBpV3+xAMhAAACAAD/agKwA1IAGQApAE6zDQEBREuwKlBYQBIEAQECAXAAAgIAWAMBAAAMAkkbQBgEAQECAXADAQACAgBUAwEAAAJYAAIAAkxZQBEbGgEAIyIaKRspABkBGQUFFCsBIgcGBwYVFBcWFxYfATc2NzY3NjU0JyYnJgMiJy4BNDc+ATIeARQGBwYBWF1RTS4vNitLNkA2NkA2Sys2Ly5NUV43NDE+Hx9lcGU9PjI0A1IsLElMWD53YIBbY1BQY1uAYHc+WUtKKyz9zyMga2wxLzo7YGxqISIAAAAB////+QMSAwsATgAjQCAyAQIBAAEAAgJHAAECAW8AAgACbwAAAGZCQCEgJgMFFSslFAYHBgcGIyImLwImJy4BJyYvAS4BLwEmNzQ3Njc+ATMyFxYfAR4BFx4CFRQOAgcUHwEeATUeARcyFh8BFjcyPgIXMh4BHwEWFxYDEgwGCzk0Mw8eERo7NitHmisbEwoICAQHAwEdHxwOMA8IBAoUEAoUBwIQCCAmHgEDBAEOKm5MARIFCwYHCh4eIAwHEBgCYCcDAp4PMA4cIBwEBQgVFBssmEgrNhwXEBIgDg80NDkLBgwCAycfFB4PAhgQCAsgHh4KBQgLAxYBTW4qDAIFAwEgJCIBCBACNhMKBAAAAAL/9P9pA+oDXgAdADIAK0AoAQEBAhYBAAECRwACAQJvAwEBAAFvAAAADQBJHx4pKB4yHzIZGAQFFCsFJzY3NicuAScmBw4BBwYXHgEXFjc2NxcWMj8BNiYlIicmJyY0NzY3NjIXFhcWFAcGBwYD3648CQgqK65ta2dqniAfFBSMZmRrb16uCRsJWgkB/dNWSkgqKysqSEqsSkgqKysqSEoHrl5va2RmjBQUHyCeamdrba4rKggJPK4JCVkKGmorKkhKrEpIKisrKkhKrEpIKisAAAAAA//9/2oGAANTAAsAFwAjAE9LsCpQWEAdAAIAAwACA14ABQUEVgAEBAxIAAAAAVYAAQENAUkbQBsABAAFAgQFXgACAAMAAgNeAAAAAVYAAQENAUlZQAkVFRUVFRAGBRorNyEeARQGByEuATQ2EyEeARQGByEuATQ2EyEeARQGByEuATQ2RAV1HigoHvqLHigoHgV1HigoHvqLHigoHgV1HigoHvqLHigoBwMtPS0DAy09LQHGAy09LQMDLT0tAYsDLT0tAwMtPS0AAAAAAQAA/2oEEANSABAAQUAJDwoFAQQAAQFHS7AqUFhADgIBAQEMSAQDAgAADQBJG0AOAgEBAAFvBAMCAAANAElZQAwAAAAQABAWEhMFBRcrFwEXEzMJASMHBgcmLwEjCQHlASU75eb+YwGA4LoYPhY4qewBdv5qlgGLVP7JAhIB1u4cUSFQ6v4f/fkAAAABAAD/aQOuA1MABgAGswQBAS0rNxUBNQEVAQIDrPxUAtc/1gGlowGi0v7hAAH///9pA4QDUwAGAAazBAEBLSsBNQEVATUBA4T8ewOF/VACedr+XKL+XNkBGQAAAAEAAAABAAA7St+fXw889QALA+gAAAAA1FDYowAAAADUUNij//T/aQYAA14AAAAIAAIAAAAAAAAAAQAAA1L/agAABf3/9P/9BgAAAQAAAAAAAAAAAAAAAAAAAAkD6AAABSsAAAKvAAADEf//A+j/9AX9//0EEAAAA68AAAOD//8AAAAAABgAhAEMAXYB3AIiAjgCTwABAAAACQBPAAMAAAAAAAIADAAcAHMAAABBC3AAAAAAAAAAEgDeAAEAAAAAAAAANQAAAAEAAAAAAAEACAA1AAEAAAAAAAIABwA9AAEAAAAAAAMACABEAAEAAAAAAAQACABMAAEAAAAAAAUACwBUAAEAAAAAAAYACABfAAEAAAAAAAoAKwBnAAEAAAAAAAsAEwCSAAMAAQQJAAAAagClAAMAAQQJAAEAEAEPAAMAAQQJAAIADgEfAAMAAQQJAAMAEAEtAAMAAQQJAAQAEAE9AAMAAQQJAAUAFgFNAAMAAQQJAAYAEAFjAAMAAQQJAAoAVgFzAAMAAQQJAAsAJgHJQ29weXJpZ2h0IChDKSAyMDE2IGJ5IG9yaWdpbmFsIGF1dGhvcnMgQCBmb250ZWxsby5jb21mb250ZWxsb1JlZ3VsYXJmb250ZWxsb2ZvbnRlbGxvVmVyc2lvbiAxLjBmb250ZWxsb0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABDACkAIAAyADAAMQA2ACAAYgB5ACAAbwByAGkAZwBpAG4AYQBsACAAYQB1AHQAaABvAHIAcwAgAEAAIABmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQBmAG8AbgB0AGUAbABsAG8AUgBlAGcAdQBsAGEAcgBmAG8AbgB0AGUAbABsAG8AZgBvAG4AdABlAGwAbABvAFYAZQByAHMAaQBvAG4AIAAxAC4AMABmAG8AbgB0AGUAbABsAG8ARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQECAQMBBAEFAQYBBwEIAQkBCgAFY2hlY2sDbWFwBXBob25lBGxvb3AEbWVudQVjbG9zZQthcnJvd19yaWdodAphcnJvd19sZWZ0AAAAAAABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAYABgAGAAYA17/aQNe/2mwACwgsABVWEVZICBLuAAOUUuwBlNaWLA0G7AoWWBmIIpVWLACJWG5CAAIAGNjI2IbISGwAFmwAEMjRLIAAQBDYEItsAEssCBgZi2wAiwgZCCwwFCwBCZasigBCkNFY0VSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQpDRWNFYWSwKFBYIbEBCkNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ABK1lZI7AAUFhlWVktsAMsIEUgsAQlYWQgsAVDUFiwBSNCsAYjQhshIVmwAWAtsAQsIyEjISBksQViQiCwBiNCsQEKQ0VjsQEKQ7ABYEVjsAMqISCwBkMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZISCwQFNYsAErGyGwQFkjsABQWGVZLbAFLLAHQyuyAAIAQ2BCLbAGLLAHI0IjILAAI0JhsAJiZrABY7ABYLAFKi2wBywgIEUgsAtDY7gEAGIgsABQWLBAYFlmsAFjYESwAWAtsAgssgcLAENFQiohsgABAENgQi2wCSywAEMjRLIAAQBDYEItsAosICBFILABKyOwAEOwBCVgIEWKI2EgZCCwIFBYIbAAG7AwUFiwIBuwQFlZI7AAUFhlWbADJSNhRESwAWAtsAssICBFILABKyOwAEOwBCVgIEWKI2EgZLAkUFiwABuwQFkjsABQWGVZsAMlI2FERLABYC2wDCwgsAAjQrILCgNFWCEbIyFZKiEtsA0ssQICRbBkYUQtsA4ssAFgICCwDENKsABQWCCwDCNCWbANQ0qwAFJYILANI0JZLbAPLCCwEGJmsAFjILgEAGOKI2GwDkNgIIpgILAOI0IjLbAQLEtUWLEEZERZJLANZSN4LbARLEtRWEtTWLEEZERZGyFZJLATZSN4LbASLLEAD0NVWLEPD0OwAWFCsA8rWbAAQ7ACJUKxDAIlQrENAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAOKiEjsAFhIIojYbAOKiEbsQEAQ2CwAiVCsAIlYbAOKiFZsAxDR7ANQ0dgsAJiILAAUFiwQGBZZrABYyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsQAAEyNEsAFDsAA+sgEBAUNgQi2wEywAsQACRVRYsA8jQiBFsAsjQrAKI7ABYEIgYLABYbUQEAEADgBCQopgsRIGK7ByKxsiWS2wFCyxABMrLbAVLLEBEystsBYssQITKy2wFyyxAxMrLbAYLLEEEystsBkssQUTKy2wGiyxBhMrLbAbLLEHEystsBwssQgTKy2wHSyxCRMrLbAeLACwDSuxAAJFVFiwDyNCIEWwCyNCsAojsAFgQiBgsAFhtRAQAQAOAEJCimCxEgYrsHIrGyJZLbAfLLEAHistsCAssQEeKy2wISyxAh4rLbAiLLEDHistsCMssQQeKy2wJCyxBR4rLbAlLLEGHistsCYssQceKy2wJyyxCB4rLbAoLLEJHistsCksIDywAWAtsCosIGCwEGAgQyOwAWBDsAIlYbABYLApKiEtsCsssCorsCoqLbAsLCAgRyAgsAtDY7gEAGIgsABQWLBAYFlmsAFjYCNhOCMgilVYIEcgILALQ2O4BABiILAAUFiwQGBZZrABY2AjYTgbIVktsC0sALEAAkVUWLABFrAsKrABFTAbIlktsC4sALANK7EAAkVUWLABFrAsKrABFTAbIlktsC8sIDWwAWAtsDAsALABRWO4BABiILAAUFiwQGBZZrABY7ABK7ALQ2O4BABiILAAUFiwQGBZZrABY7ABK7AAFrQAAAAAAEQ+IzixLwEVKi2wMSwgPCBHILALQ2O4BABiILAAUFiwQGBZZrABY2CwAENhOC2wMiwuFzwtsDMsIDwgRyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsABDYbABQ2M4LbA0LLECABYlIC4gR7AAI0KwAiVJiopHI0cjYSBYYhshWbABI0KyMwEBFRQqLbA1LLAAFrAEJbAEJUcjRyNhsAlDK2WKLiMgIDyKOC2wNiywABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyCwCEMgiiNHI0cjYSNGYLAEQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwAmIgsABQWLBAYFlmsAFjYSMgILAEJiNGYTgbI7AIQ0awAiWwCENHI0cjYWAgsARDsAJiILAAUFiwQGBZZrABY2AjILABKyOwBENgsAErsAUlYbAFJbACYiCwAFBYsEBgWWawAWOwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbA3LLAAFiAgILAFJiAuRyNHI2EjPDgtsDgssAAWILAII0IgICBGI0ewASsjYTgtsDkssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbkIAAgAY2MjIFhiGyFZY7gEAGIgsABQWLBAYFlmsAFjYCMuIyAgPIo4IyFZLbA6LLAAFiCwCEMgLkcjRyNhIGCwIGBmsAJiILAAUFiwQGBZZrABYyMgIDyKOC2wOywjIC5GsAIlRlJYIDxZLrErARQrLbA8LCMgLkawAiVGUFggPFkusSsBFCstsD0sIyAuRrACJUZSWCA8WSMgLkawAiVGUFggPFkusSsBFCstsD4ssDUrIyAuRrACJUZSWCA8WS6xKwEUKy2wPyywNiuKICA8sAQjQoo4IyAuRrACJUZSWCA8WS6xKwEUK7AEQy6wKystsEAssAAWsAQlsAQmIC5HI0cjYbAJQysjIDwgLiM4sSsBFCstsEEssQgEJUKwABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyBHsARDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbACYiCwAFBYsEBgWWawAWNhsAIlRmE4IyA8IzgbISAgRiNHsAErI2E4IVmxKwEUKy2wQiywNSsusSsBFCstsEMssDYrISMgIDywBCNCIzixKwEUK7AEQy6wKystsEQssAAVIEewACNCsgABARUUEy6wMSotsEUssAAVIEewACNCsgABARUUEy6wMSotsEYssQABFBOwMiotsEcssDQqLbBILLAAFkUjIC4gRoojYTixKwEUKy2wSSywCCNCsEgrLbBKLLIAAEErLbBLLLIAAUErLbBMLLIBAEErLbBNLLIBAUErLbBOLLIAAEIrLbBPLLIAAUIrLbBQLLIBAEIrLbBRLLIBAUIrLbBSLLIAAD4rLbBTLLIAAT4rLbBULLIBAD4rLbBVLLIBAT4rLbBWLLIAAEArLbBXLLIAAUArLbBYLLIBAEArLbBZLLIBAUArLbBaLLIAAEMrLbBbLLIAAUMrLbBcLLIBAEMrLbBdLLIBAUMrLbBeLLIAAD8rLbBfLLIAAT8rLbBgLLIBAD8rLbBhLLIBAT8rLbBiLLA3Ky6xKwEUKy2wYyywNyuwOystsGQssDcrsDwrLbBlLLAAFrA3K7A9Ky2wZiywOCsusSsBFCstsGcssDgrsDsrLbBoLLA4K7A8Ky2waSywOCuwPSstsGossDkrLrErARQrLbBrLLA5K7A7Ky2wbCywOSuwPCstsG0ssDkrsD0rLbBuLLA6Ky6xKwEUKy2wbyywOiuwOystsHAssDorsDwrLbBxLLA6K7A9Ky2wciyzCQQCA0VYIRsjIVlCK7AIZbADJFB4sAEVMC0AS7gAyFJYsQEBjlmwAbkIAAgAY3CxAAVCsgABACqxAAVCswoCAQgqsQAFQrMOAAEIKrEABkK6AsAAAQAJKrEAB0K6AEAAAQAJKrEDAESxJAGIUViwQIhYsQNkRLEmAYhRWLoIgAABBECIY1RYsQMARFlZWVmzDAIBDCq4Af+FsASNsQIARAAA) format('truetype')}footer nav{background:0 0;padding-top:8px}footer nav .content ul li .active{background:0 0;color:#fff}footer nav .content{border-bottom:1px solid #707070;padding:0}footer{background:#545454}footer .content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:23px 0 20px}.logo_svg_footer .fil0,.logo_svg_footer .fil1{fill:#767676}.logo_svg_footer .fil2{fill:#767676;fill-rule:nonzero}.logo_svg_footer+p{color:#fff;font-size:18px;text-align:right;opacity:.27}footer .map_and_adress p{color:#f7f8f7}footer .map_and_adress p:first-child{margin-bottom:20px}footer .map_and_adress p:last-child{font-size:12px}footer .callback_header>p{color:#fff}footer .callback_header .button_type_1{color:#fff;border-color:#fff}@media screen and (max-width:1000px){.logo_svg_footer+p{font-size:14px}}@media screen and (max-width:768px){footer nav .content ul{flex-wrap:wrap}footer nav .content ul li a{padding:0 20px}footer .map_and_adress{text-align:center}footer .content{flex-wrap:wrap;justify-content:space-around}footer .content>*{margin-bottom:20px}}header{background:#fff}.logo_svg_header+p{color:#565656;font-size:18px;text-align:right}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}header .content{padding:8px 0 14px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.logo{display:-webkit-box;display:flex;flex-direction:column;width:260px}.map_and_adress{font-size:16px;margin:0 0 0 57px;-webkit-transition:margin .3s;transition:margin .3s}.map_and_adress p{vertical-align:middle;font-size:16px}.map_and_adress p span{margin-right:9px;color:#b8b8b8;font-size:19px;vertical-align:middle}.callback_header>p{font-size:22px}.callback_header .button_type_1{margin-top:5px;cursor:pointer}.callback_header .icon-phone{color:#bbbcbc}.search_header{position:relative;width:310px;max-width:100%;display:-webkit-box;display:flex;margin-top:7px;height:27px;border:1px solid #d1d3d1;border-radius:3px;box-sizing:border-box;z-index:1}.search_header span{position:absolute;right:10px;top:5px;color:#9a9b9b;z-index:-7;cursor:cell;display:block;font-size:13px}.search_header input{border:none;width:100%;background:0 0;position:relative;z-index:3;padding:0 30px 0 12px}nav{background:#113977}nav .content{display:-webkit-box;display:flex}nav .content ul{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between}nav .content ul li{height:44px;display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.menu_button>span,nav .content ul li a{-webkit-box-align:center;width:100%;text-transform:uppercase}nav .content ul li a{display:-webkit-box;display:flex;height:100%;align-items:center;-webkit-box-pack:center;justify-content:center;color:#fff;-webkit-transition:all .3s;transition:all .3s}nav .content ul li a:hover{background:rgba(196,197,197,.51)!important;color:#000!important}nav .content ul li .active{background:#c4c5c5;color:#000}.menu_button{display:none!important;height:44px;-webkit-box-flex:1;flex-grow:1}.menu_button>span{font-size:16px;display:-webkit-box;display:flex;height:100%;align-items:center;color:#fff;-webkit-transition:all .3s;transition:all .3s;-webkit-box-pack:start;justify-content:flex-start;box-sizing:border-box;padding-left:27px}.menu_button span{margin-right:19px}#menu_button{display:none}label[for=menu_button]{cursor:pointer}.slick-track>div{height:464px;background-size:cover;background-repeat:no-repeat}.slide_show{position:relative;z-index:1}.arrows_home_slider{position:absolute;top:0;height:100%;left:50%;margin-left:-600px;width:100%;max-width:1200px}.slide_1{background:url(img/slide_1.jpg)}.slide_2{background:url(img/slide_2.jpg)}.slide_3{background:url(img/slide_3.jpg)}#next,#prev{width:24px;height:93px;background-repeat:no-repeat;background-position:center center;background-size:cover;position:absolute;z-index:10;top:50%;margin-top:-46.5px;cursor:pointer}#prev{background-image:url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAABdCAMAAACW9WamAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABL1BMVEX////V1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTj4uLV1NTW1tbx8PDe3t7h4ODy8vLq6urt7Ozv7+/b29vk5OTn5+fZ2NjX1tbx8fHq6eni4uLe3d3u7u7v7u7d3Nzp6enY19fo6Ojk4+Pc3Nzt7e3i4eHn5ubl5eXb2trW1dXw8PDs7Ozg39/Z2dnc29vf39/r6+va2dnm5ub////SRZNUAAAAOnRSTlMAABJ7iQQNVGe90Ok5iKIiE7Z0TQEDR7AYHKmBQG4QJpyPMwnKYQonD9YFHRcCFCE6BlrDLJUtDAfw890yKgAAAAFiS0dEAIgFHUgAAAAHdElNRQfgCxEMNRIdd/pTAAAB+0lEQVRIx43WV1MiURAF4GlZRFyzmHNWFHNaRvAgKmLG7GD2//+Hvc4s+3D63irm8SuKutO3+/R43r9H/j8NsQbxNP/K+nHNjXu5fEJz0z4KSc3NByj+VtxyCBy1Km47BkrtzB0nZZx2qgN2nQHn3cwp/wKXfg9z7xWQjQlz3zXKlX7mgQpwMyjMQ7fA3TBz3C/i3k8xJ/LAw4gwJwson4wyj5WAx3FhnngCnieZp4IqXqaFeeYVeJ1RPP2CajDLPPkMPE0I8/gj8DbHPG/qX0gK88gDkE8oXrhHMUgzD98Bt0PCPHgDVBaZlyplXPcJcywLXPUyZ/xLXPgZ5u5z4KxLmDtPTf2XmVdM/Y/bhLn1CHhfZV4z9T9oFub1D2C/SfHGJ3J7jcybX8D3ljBvfQNf28w7QQ6fGx6zGTh8rCs2A1cNdplrA0dcGzjiPz9v6Nl/vaJ49d3639FJ1uo9t4kV21tGNdlUvG2vYFjvYKfe29m132V484ctitvtfRJ1VYdiRw/2hB2bYnb0t9dvn4ZodgYUOyYt5Zu59OPMriketc98mBClMcWOPInSZ0qxI6tm7cnmyEGZe7OmZpSx84odiZwOTH4vKHakvSzad0O0SZYUO/ZOJtxSmTp3mizbN6DUBpLYsV0du9i1uU3s2Pa8+SoI0hb++Yb4C3gDe8l4ACqjAAAAAElFTkSuQmCC);left:0}#next{background-image:url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAABdCAMAAACW9WamAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABLFBMVEX////V1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTV1NTj4uLe3t7x8PDW1tbq6ury8vLh4ODv7+/t7Ozk5OTb29vZ2Njn5+fq6enx8fHX1tbe3d3i4uLv7u7u7u7d3NzY19fp6eno6Ojc3Nzk4+Pt7e3i4eHn5ubb2trl5eXs7Ozw8PDW1dXg39/Z2dnc29vf39/r6+vm5uba2dn////tcxBIAAAAOXRSTlMAEnsEiVQNvWfp0Ig5IqK2E010AwFHGLCpHECBbhCcJjOPyglhCicPBdYdFwIUIToGWsOVLC0MB/Cs6DIPAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+ALEQw4HqFvyDUAAAHjSURBVEjHrZbXWgIxFIQpYscGVrA3RFSsuLQBAV1sqCCoi/X9H8KQy8yJV+7l/50vyeacmYnP5w/4ffwFnWyfgEO5fKGf8UARpUHGQ2VcDDMeqQDVUcLhGnA5xuXjV3DrE4Qnr4GbKcIR5xZ3TpR4IAvcTxOeabh4mOVN5x6BxjzhhSegGSMcdVooO0Hi8WcgFyK8WHdRHOBNl9pAbZnwSgd4WeXytVe8eeuEN7pAd4PwpveG1zVeZfUF6KwQ3noH2ktcrlrt1rcJh3LAc5xwwiujtcOrxJrA0wLhZAN4nOPy2Qe4jV3C0/dANkA45dzh1kkRn7oBricJ76luXI3zpmOXqhv7hA8+gMoIlw9fqG6kCQ+WgM9Dwv2FPL6OeJXjb+DnhPDpD/B9zOVHX8h7Z4QPPyEJMqNG4B8E2fvTc6L7cnVv7Y8Dk6blk1jO3ftLtp0T+U70DZ6a9MwT79vSHd3LjElHq2Ln9ZyETTohT5U8g1E9sRETW+Zbq2HGpPOydmSlBR2lS3ZJi4q15hdNulwTHUL2k3XZfSxepZ1t06QWH+y55vuWSbdlj7U48o7yby9hUovb62xImnRXThI5d1I6pciiLJmmE3DPpH8IThCzJYstya1yXrAVZefiq0B+Q/wCyH52EFKTdhcAAAAASUVORK5CYII=);right:0}.slide_text_block{background:rgba(0,27,69,.6);font-size:36px;color:#fff;width:100%;max-width:593px;box-sizing:border-box;padding:35px;margin-bottom:-1100px;-webkit-transition:all .5s;transition:all .5s}.slide_text_block p{line-height:38px}.slick-track>div{display:-webkit-box!important;display:flex!important;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;position:relative;overflow:hidden}.slick-active .slide_text_block{margin-bottom:0}#callback_form:checked+.call_back_body{display:-webkit-box;display:flex;opacity:1;visibility:visible}.call_back_body,.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}#callback_form{display:none}.call_back_body{position:fixed;left:0;top:0;height:100%;width:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;z-index:99999;display:none;opacity:0;-webkit-transition:all .3s;transition:all .3s}.call_back_body .content{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.call_back_body form{background:#fff;border:1px solid #000;width:320px;box-sizing:border-box;height:234px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;flex-direction:column;padding:30px 25px 20px;-webkit-box-align:center;align-items:center;position:relative}.call_back_body form p{font-size:24px;font-weight:600;text-transform:uppercase}.call_back_body form input[type=text]{border:1px solid #cecfce;height:41px;width:100%;padding-left:15px;box-sizing:border-box}.call_back_body form input[type=button]{height:41px;width:100%;background:#113977;box-sizing:border-box;border:none;color:#fff;font-size:16px;font-weight:600;text-transform:uppercase;cursor:pointer}.call_back_body form .icon-close{position:absolute;right:15px;top:15px;cursor:pointer;color:#838382}@media screen and (max-width:1200px){.arrows_home_slider{margin-left:0;left:0}.arrows_home_slider>div:first-child{left:10px!important}.arrows_home_slider>div:last-child{right:10px!important}.slick-track>div{padding:0 30px;box-sizing:border-box}}@media screen and (max-width:1000px){.map_and_adress{margin:0}.map_and_adress p{font-size:15px}.search_header{width:291px}.logo_svg_header+p{font-size:14px!important}.logo{width:216px}}@media screen and (max-width:768px){body>nav .content,body>nav .content ul,header .content{-webkit-box-orient:vertical;-webkit-box-direction:normal}header .content{flex-direction:column;height:269px;margin-bottom:20px}body>nav .content{width:100%;flex-direction:column;position:relative}body>nav .content ul li a{-webkit-box-pack:start;justify-content:flex-start;box-sizing:border-box;padding-left:27px}body>nav .content ul{flex-direction:column;height:0;position:absolute;top:100%;z-index:999999999}body>nav .content ul li{display:none;background:#113977}.menu_button{display:-webkit-box!important;display:flex!important}#menu_button:checked+nav ul li{display:-webkit-box;display:flex}#menu_button:checked+nav .content ul{height:auto}.slide_text_block{font-size:30px}}.slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}@media screen and (max-width:480px){.slide_text_block{font-size:22px;line-height:32px}}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'←'}.slick-next:before,[dir=rtl] .slick-prev:before{content:'→'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'←'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'•';text-align:center;opacity:.25;color:#000}.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-dots li.slick-active button:before{opacity:.75;color:#000}.slick-slider{box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}
    </style>
      
</head>
<body>

 <?php include 'include/header.php' ?>
 
<main>
    <div class="breadbumbs">
        <div class="content">
            <a href="#">Главная</a>
            <a href="#">Новости</a>
        </div>
    </div>
     <div class="page">
         <div class="content">
            <div class="sidebar">
                <div class="zag">Продукция</div>
                <ul>
                    <li><a href="#">Опоры трубопроводов</a></li>
                    <li><a href="#">Резервуары горизонтальные
стальные двустенные РГСД</a></li>
                    <li><a href="#">Лестницы стремянки
площадки и ограждения</a></li>
                    <li><a href="#">Резервуары 
горизонтальные стальные </a></li>
                    <li><a href="#">Прожекторные мачты</a></li>
                    <li><a href="#">Резервуары вертикальные
стальные</a></li>
                    <li><a href="#">Роствеaрки</a></li>
                    <li>
                       <ul>
                           <li><a href="#">Металлические поры ВЛ и ЛЭП</a></li>
                           <li><a href="#">Нестандартные изделия</a></li>
                           <li><a href="#">Фундаментные болты</a></li>
                           <li><a href="#">Сваи металлические</a></li>
                           <li><a href="#">Сальники набивные</a></li>
                           <li><a href="#">Емкость подземная</a></li>
                           <li><a href="#">Закладные детали</a></li>
                           <li><a href="#">Заборы столбики</a></li>
                           <li><a href="#">Баки септики</a></li>
                       </ul>
                        <a href="#">Строительные металлоконструкции</a>
                    </li>
                    
                </ul>
            </div>
            <div class="content page_content">
                <h1>Опоры трубопроводов</h1>
                <b>ООО «ТМСН» изготавливает под заказ неподвижные опоры для трубопроводов диаметром от 57 до 
1220 мм по приемлемым ценам.</b>
           <p class="b1">
               Неподвижные опоры применяются:
           </p>
           <p class="b2">
               для трубопроводных систем надземной или подземной бесканальной прокладки и призваны 
обеспечить стационарное положение трубопровода в местах установки, исключающее как 
продольное, так и поперечное его смещение;
           </p>
           <p class="b3">
               производимые заводом неподвижные опоры теплоизолированных трубопроводов обеспечивают 
эффективную теплоизоляцию узлов бетонирования опор, электрохимическую защиту конструкций 
и герметичность примыкания теплоизолированных патрубков
           </p>
           <p class="b4">
               Соблюдение этих условий исключает ускоренную коррозию, деформирование опорных узлов, а 
следовательно, и аварийные разрушения трубопроводов в местах установки опор.
           </p>
           <div class="images">
               <img src="img/page_2/f_5.jpg" alt="">
               <img src="img/page_2/f_6.jpg" alt="">
               <img src="img/page_2/f_7.jpg" alt="">
               <img src="img/page_2/f_1.jpg" alt="">
               <img src="img/page_2/f_2.jpg" alt="">
               <img src="img/page_2/f_3.jpg" alt="">
               <img src="img/page_2/f_4.jpg" alt="">
           </div>
           <p class="b5">
               <span>Неподвижные опоры</span> – являются элементом  любого трубопровода, придающим системе труб 
целостность и устойчивость. Опоры неподвижные предназначаются для приема и сглаживания 
усилий, появляющихся в трубопроводах вследствие температурных колебаний. Неподвижные 
опоры предназначены фиксировать трубопровод и не позволять ему перемещаться в любом 
направлении под  весом транспортируемой среды. Опоры неподвижные используются 
практически во всех трубопроводных системах, несущей основой которых является стальная 
труба. Это трубопроводы теплоснабжения, отопления, горячего водоснабжения и другие.
           </p>
           <p class="b5">
              <span>Опоры подвижные (скользящие)</span> – предназначены поддерживать трубопровод. Подвижные 
опоры  не препятствуют  смещениям  трубопровода от температурных деформаций. Опоры 
скользящие обеспечивают возможность теплового перемещения трубопровода, как в 
направлении его оси, так и в поперечном направлении. Подвижные опоры не должны 
препятствовать перемещению трубопровода от температурных деформаций. По сути, главная 
задача подвижных опор это защита трубопровода от истирания и обеспечение продольных 
перемещений труб в предусмотренных местах.
           </p>
           <p class="b2">
               На сегодняшний день мы имеем возможность изготовить следующие типы опор трубопроводов, из 
листовой и сортовой стали марки 1-3сп/пс. По дополнительному согласованию возможно 
изготовление продукции в «северном исполнении», из стали марки 09Г2С:
           </p>
           <ul class="b6">
               <li>опоры неподвижные (ОБН, ОПН, ОХН, Т3, Т4, Т5, Т6, Т7, Т8, Т9, Т10, Т11, Т12, Т44, Т46),</li>
               <li>опоры подвесные жесткие и пружинные (Т22, Т23, Т24, Т25, Т26, Т27, Т28, Т29, Т41),</li>
               <li> опоры подвижные, скользящие (ОПБ-1, ОПБ-2, ОПП-1, ОПП-2, ОПП-3, ОПХ-1, ОПХ-2, ОПХ-3, Т13, Т14,
               Т15, Т16, Т17, Т18, Т19, Т20, Т21(43), Т43),</li>
           </ul>
           <p>и многие другие виды скользящих и неподвижных опор трубопроводов.</p>
            </div>
         </div>
     </div>
</main>

<?php include 'include/footer.php' ?>
 
  <link rel="stylesheet" href="css/pages/page_3.css">
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="js/all.js"></script>
</body>
</html>