$(document).ready(function() {

    $('#header_menu_button').click(function() { $('body').toggleClass('show_menu'); /* Шторка меню*/ });

    $('.list_menu > ul > li > .title').click(function() {
        if ($(window).width() < 750) {
            if (!$(this).parent('li').parent('ul').hasClass('show_list_menu')) {
                $('.show_list_menu').removeClass('show_list_menu');
                $(this).parent('li').parent('ul').addClass('show_list_menu');
            } else { $('.show_list_menu').removeClass('show_list_menu'); }
        }
    });

    var figure = $(".left_video a, .right_video a").hover(function() {
        $(this).siblings('video').get(0).play();

    }, function() {
        $(this).siblings('video').get(0).pause();
    });

});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////****************** MAP******************////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var map, map2;
function initMap() {
  $(window).resize(function() {
    if ($(window).width() < 1040) {
        map.setCenter(myLatLngMARKER)
    }
});

      var stchetch = (0.000017408333333332897 * $(window).width()) + 30.306849;
// 0.00002640624999999952 - zoom = 13
      var myLatLng = {lat: 59.915630, lng: stchetch};
      var myLatLngMARKER = {lat: 59.915630, lng: 30.306849};
      var div_ID_footer = 'footer_map';
      var div_ID_page_contacts = 'map_page_contacts';
      var zoom = 13;
      var zoom2 = 14;
      var image_min = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzNweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgMzMgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MiAoMzY3ODEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkVGODkzMzYwLUQ0N0YtNDdEOS1CMTcyLTc0M0I4QTM5N0NCNjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvb3Rlci0xNDQwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwOS4wMDAwMDAsIC0xMTguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtYXAtcGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTA5LjAwMDAwMCwgMTE4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjUsMCBDNy4zODcyODU3MSwwIDAsNy4zNjQ5IDAsMTYuNDUgQzAsMjUuNTM1MSAxNi41LDQ3IDE2LjUsNDcgQzE2LjUsNDcgMzMsMjUuNTM1MSAzMywxNi40NSBDMzMsNy4zNjQ5IDI1LjYxMjcxNDMsMCAxNi41LDAiIGlkPSJwaW5fZmlsbF9zaGFycF9jaXJjbGUtWyM2MzRdIiBmaWxsPSIjMjIyOTQ0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA3LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC41MjY2MDUzLDExLjU5MzE2NDQgQzE4LjUwMjM1MjUsMTEuNDk5NTAzMyAxOC4zODEwODg4LDExLjQ3NzA5NTEgMTguMzIyMzMyMSwxMS41NTM4ODcxIEMxNi43NTE0MDM2LDEzLjYwODEzNjEgMTQuNDI1MTM5MiwxNS4wNDU3ODMgMTEuNzYxODM2NiwxNS40NDQ1OTc5IEMxMS41MjY1NTk4LDE1LjQ3OTg0NjcgMTEuMjg4NzgyOCwxNS41MDcyOTA0IDExLjA0ODc1NTUsMTUuNTI2MTczNiBDMTAuNzg1NDc1NiwxNS41NDY1Njc2IDEwLjUxOTQ0NTQsMTUuNTU3MTQyMiAxMC4yNTA5MTQ5LDE1LjU1NzE0MjIgQzguNTY5NDczOCwxNS41NTcxNDIyIDYuOTgzNzkzNjEsMTUuMTQ2NzQ1NiA1LjU4NjEzNDc5LDE0LjQyMDExNzEgQzMuNjAwNDA5MTQsMTMuMzg3NTc5NCAxLjk5NTcyNjc5LDExLjcxNjUzNTEgMS4wMzkxMTgwOCw5LjY3NjYzNzQ4IEMwLjgwNzM0MTc0Myw5LjE4MjM5OTEzIDAuNjEzMzE5Njk1LDguNjY2NzU5NzQgMC40NjE1NTI0NDksOC4xMzI5OTI0IEwwLjQ1OTU1MjIyMiw4LjEyNTQzOTA5IEMwLjQwODc5NjQ1NCw3Ljk0NjkyOTE2IDAuMTUyMjY3MzAzLDcuOTYzMjk0NjcgMC4xMjM3NjQwNjQsOC4xNDY4NDAxMyBDMC4wOTMwMTA1Njk0LDguMzQ0MjMzMzQgMC4wNjc3NTc2OTk3LDguNTQzNjQwNzYgMC4wNDg1MDU1MTIsOC43NDQ4MTA2MiBDMC4wMTY3NTE5MDM2LDkuMDc0Mzg2NzggMCw5LjQwODc0NjcgMCw5Ljc0NjYzMTUgQzAsMTAuNTEwMjcxMyAwLjA4MzUwOTQ4OTcsMTEuMjU0MDIwNyAwLjI0MDc3NzM2MSwxMS45Njk4MjI4IEMwLjgxMzU5MjQ1NCwxNC41Nzk0OTE5IDIuMzczNTE5NzIsMTYuODE1Nzc1NyA0LjUwNjc2MjEzLDE4LjI2MDQ3MjQgQzYuMTI4NDQ2NDEsMTkuMzU4NzIzOSA4LjA4MDY2ODI2LDIwIDEwLjE4MjE1NzEsMjAgQzExLjkyOTYwNTYsMjAgMTMuNTc0MjkyNSwxOS41NTYzNjg4IDE1LjAxMTIwNTgsMTguNzc1MzU2NCBDMTYuNTA0Mzc1NSwxNy45NjM4NzkgMTcuNzcyNzY5NiwxNi43ODc1NzY2IDE4LjY5OTYyNSwxNS4zNjUyODgxIEMxOC43NzIzODMyLDE1LjI1NDAwMjYgMTguODE1ODg4MiwxNS4xMjU1OTY0IDE4LjgyNjEzOTMsMTQuOTkyOTA5OCBDMTguODQ2MzkxNiwxNC43Mjg3OTU3IDE4Ljg1NzE0MjksMTQuNDYyMTYzOCAxOC44NTcxNDI5LDE0LjE5Mjc2MjQgQzE4Ljg1NzE0MjksMTMuNzI4NzM3MyAxOC44MjU4ODkzLDEzLjI3MjI2NTUgMTguNzY2NjMyNiwxMi44MjQzNTQxIEMxOC43MTExMjYzLDEyLjQwNTY0ODkgMTguNjMwNjE3MSwxMS45OTQ0OTcgMTguNTI2NjA1MywxMS41OTMxNjQ0IiBpZD0iRmlsbC00MyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCw1LjcxNDI4NTcxIEM3LjYzMzEzNTYsNS43MTQyODU3MSA1LjcxNDI4NTcxLDcuNjMzMDc5NzMgNS43MTQyODU3MSw5Ljk5OTg3NTIxIEM1LjcxNDI4NTcxLDEwLjk5NjIxMDUgNi4wNTQ5NzY0MSwxMS45MTIxODAxIDYuNjI1MjkwMTUsMTIuNjM5OTY0MSBDNy40MDk3NTIzMiwxMy42NDEyOTEgOC42MjkyNTAzMSwxNC4yODU3MTQzIDEwLDE0LjI4NTcxNDMgQzEwLjI3NzI5NDgsMTQuMjg1NzE0MyAxMC41NDgxMDAyLDE0LjI1ODI2MDIgMTAuODEwNjY5MiwxNC4yMDgwOTQgQzEyLjc4OTkxOTksMTMuODI4OTc3NCAxNC4yODU3MTQzLDEyLjA4OTYzMzYgMTQuMjg1NzE0Myw5Ljk5OTg3NTIxIEMxNC4yODU3MTQzLDkuNjg1NjUwMjMgMTQuMjUxMDIxMiw5LjM3OTQxMTkgMTQuMTg2NjI3LDkuMDg0NDA0ODEgQzE0LjE3NDg5NjIsOS4wMzA0OTQ4OCAxNC4xMjUyMjc4LDguOTkyNTU4MjcgMTQuMDcwMzE3OSw4Ljk5NDMwNTM1IEMxMi42ODIwOTY5LDkuMDM3NzMyNzkgMTEuMzY1MDA5MSw5LjM2MTY5MTUxIDEwLjE3Mjk2Niw5LjkxMTI3MzI1IEMxMC4wOTUwOTM5LDkuOTQ3MjEzMiAxMC4wMDU3NDA2LDkuODg5MzA5OTQgMTAuMDA5NDg0NCw5LjgwMzQ1MzQgQzEwLjA2Nzg4ODUsOC40MzU3Mzg2MiAxMC4zOTg4NDUyLDcuMTM4NDA2MjUgMTAuOTQ5MTkxNyw1Ljk2NDM2Nzg3IEMxMC45ODAzOTA1LDUuODk3OTc4NzkgMTAuOTQzMjAxNiw1LjgxODg2MDk5IDEwLjg3MTMxOTYsNS44MDM4ODYwMSBDMTAuNTkwMDMxNCw1Ljc0NTQ4MzU5IDEwLjI5ODc1OTUsNS43MTQyODU3MSAxMCw1LjcxNDI4NTcxIiBpZD0iRmlsbC0zOSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS43OTc4MDA3LDguMTUwOTIwMjcgQzE5LjI0MDgzNTYsNS4zNTk4MzU0MiAxNy41NzIzODU1LDIuOTg0MzQyNzIgMTUuMjg3ODAyMSwxLjUzMDAyMDgzIEMxMy43NjQ4Mjc5LDAuNTYwNDcyODk5IDExLjk2ODAxNjcsOC44ODE3ODQyZS0xNiAxMC4wNDMzMzMzLDguODgxNzg0MmUtMTYgQzYuNjgxOTgzNDEsOC44ODE3ODQyZS0xNiAzLjcwOTYyODgsMS43MDc3Mzc4NiAxLjkwNjcwNTE1LDQuMzIyODYwMjkgQzEuODMxMzk5OTYsNC40MzIzOTgxNSAxLjc4NDQ1NjQ2LDQuNTYwMjM0MSAxLjc3MDUyMDExLDQuNjkzMzMzODggQzEuNzMzMzU2NTEsNS4wNTIwMjY1MSAxLjcxNDI4NTcxLDUuNDE1OTgyOTcgMS43MTQyODU3MSw1Ljc4NDcwMTk1IEMxLjcxNDI4NTcxLDYuMjQ2NjY1OTcgMS43NDQ4NDc4OSw2LjcwMTM2MDg5IDEuODAyNzkzNzYsNy4xNDcwMzIwOSBDMS44NTI5MTU3Myw3LjUzMzA0NjUyIDEuOTI0MzA4OTYsNy45MTIyOTMxNiAyLjAxNTI2MTk4LDguMjgzNTE4NzMgQzIuMDM4NDg5MjQsOC4zNzc1MTU3NSAyLjE1NTYwMzQ4LDguNDAzMDgyOTQgMi4yMTQyODI4NSw4LjMyNjg4MjY5IEMzLjg5NTIwMjMxLDYuMTM2ODc3NDUgNi40MzExMjkxLDQuNjY5NzcxOTYgOS4zMDY0MTgyNSw0LjQ1NDIwNTQ2IEM5LjU0OTY5MzE0LDQuNDM1OTA3MzcgOS43OTU0MTMsNC40MjYzODIzNCAxMC4wNDMzMzMzLDQuNDI2MzgyMzQgQzEwLjY5MjQ3MzksNC40MjYzODIzNCAxMS4zMjcxODkxLDQuNDkwODAxNjMgMTEuOTQxNjExLDQuNjEyMzcxMTEgQzE1LjA5NDY0OTEsNS4yMzY3NjE5OCAxNy43MTczNzI1LDcuMzg1MTU3ODggMTkuMDUxMTA1NywxMC4yODEwMTgxIEMxOS4wNjk2ODc1LDEwLjMyMTM3NDEgMTkuMDg4NTEzOCwxMC4zNjE5ODA4IDE5LjEwNjYwNjYsMTAuNDAyNTg3NiBDMTkuMzIxMDMwOCwxMC44ODQ2MDQzIDE5LjQ5OTc1ODQsMTEuMzg2OTI0MyAxOS42Mzk2MTA5LDExLjkwNTUzNzIgTDE5LjY0MjMwMDMsMTEuOTE1MDYyMyBDMTkuNjc0NTc0LDEyLjAzNDg3NzEgMTkuODQzMDMyNywxMi4wMjUzNTIxIDE5Ljg2MzA4MTUsMTEuOTAyNzggQzE5Ljg4NDg0MTcsMTEuNzY5OTMwOSAxOS45MDQxNTcsMTEuNjM2MzI5OCAxOS45MjA3ODI5LDExLjUwMTcyNiBDMTkuOTQ0MjU0NiwxMS4zMTA5NzQ4IDE5Ljk2MjEwMjksMTEuMTE4NzE5NSAxOS45NzUzMDU4LDEwLjkyNDk2MDMgQzE5Ljk5MTE5ODEsMTAuNjg4MDg3OCAyMCwxMC40NDg5NTk0IDIwLDEwLjIwNzU3NTEgQzIwLDkuNTAzMjI0MDYgMTkuOTMwMzE4Miw4LjgxNTE2NTg4IDE5Ljc5NzgwMDcsOC4xNTA5MjAyNyIgaWQ9IkZpbGwtNDEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
      var image_big = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI3NnB4IiBoZWlnaHQ9IjEwOHB4IiB2aWV3Qm94PSIwIDAgMzMgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+bWFwIHBpbjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJTLUZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMC4wMDAwMDAsIC02MC4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJtYXAtcGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjAuMDAwMDAwLCA2MC4wMDAwMDApIj4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi41LDAgQzcuMzg3Mjg1NzEsMCAwLDcuMzY0OSAwLDE2LjQ1IEMwLDI1LjUzNTEgMTYuNSw0NyAxNi41LDQ3IEMxNi41LDQ3IDMzLDI1LjUzNTEgMzMsMTYuNDUgQzMzLDcuMzY0OSAyNS42MTI3MTQzLDAgMTYuNSwwIiBpZD0icGluX2ZpbGxfc2hhcnBfY2lyY2xlLVsjNjM0XSIgZmlsbD0iIzIyMjk0NCI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNy4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTguNTI2NjA1MywxMS41OTMxNjQ0IEMxOC41MDIzNTI1LDExLjQ5OTUwMzMgMTguMzgxMDg4OCwxMS40NzcwOTUxIDE4LjMyMjMzMjEsMTEuNTUzODg3MSBDMTYuNzUxNDAzNiwxMy42MDgxMzYxIDE0LjQyNTEzOTIsMTUuMDQ1NzgzIDExLjc2MTgzNjYsMTUuNDQ0NTk3OSBDMTEuNTI2NTU5OCwxNS40Nzk4NDY3IDExLjI4ODc4MjgsMTUuNTA3MjkwNCAxMS4wNDg3NTU1LDE1LjUyNjE3MzYgQzEwLjc4NTQ3NTYsMTUuNTQ2NTY3NiAxMC41MTk0NDU0LDE1LjU1NzE0MjIgMTAuMjUwOTE0OSwxNS41NTcxNDIyIEM4LjU2OTQ3MzgsMTUuNTU3MTQyMiA2Ljk4Mzc5MzYxLDE1LjE0Njc0NTYgNS41ODYxMzQ3OSwxNC40MjAxMTcxIEMzLjYwMDQwOTE0LDEzLjM4NzU3OTQgMS45OTU3MjY3OSwxMS43MTY1MzUxIDEuMDM5MTE4MDgsOS42NzY2Mzc0OCBDMC44MDczNDE3NDMsOS4xODIzOTkxMyAwLjYxMzMxOTY5NSw4LjY2Njc1OTc0IDAuNDYxNTUyNDQ5LDguMTMyOTkyNCBMMC40NTk1NTIyMjIsOC4xMjU0MzkwOSBDMC40MDg3OTY0NTQsNy45NDY5MjkxNiAwLjE1MjI2NzMwMyw3Ljk2MzI5NDY3IDAuMTIzNzY0MDY0LDguMTQ2ODQwMTMgQzAuMDkzMDEwNTY5NCw4LjM0NDIzMzM0IDAuMDY3NzU3Njk5Nyw4LjU0MzY0MDc2IDAuMDQ4NTA1NTEyLDguNzQ0ODEwNjIgQzAuMDE2NzUxOTAzNiw5LjA3NDM4Njc4IDAsOS40MDg3NDY3IDAsOS43NDY2MzE1IEMwLDEwLjUxMDI3MTMgMC4wODM1MDk0ODk3LDExLjI1NDAyMDcgMC4yNDA3NzczNjEsMTEuOTY5ODIyOCBDMC44MTM1OTI0NTQsMTQuNTc5NDkxOSAyLjM3MzUxOTcyLDE2LjgxNTc3NTcgNC41MDY3NjIxMywxOC4yNjA0NzI0IEM2LjEyODQ0NjQxLDE5LjM1ODcyMzkgOC4wODA2NjgyNiwyMCAxMC4xODIxNTcxLDIwIEMxMS45Mjk2MDU2LDIwIDEzLjU3NDI5MjUsMTkuNTU2MzY4OCAxNS4wMTEyMDU4LDE4Ljc3NTM1NjQgQzE2LjUwNDM3NTUsMTcuOTYzODc5IDE3Ljc3Mjc2OTYsMTYuNzg3NTc2NiAxOC42OTk2MjUsMTUuMzY1Mjg4MSBDMTguNzcyMzgzMiwxNS4yNTQwMDI2IDE4LjgxNTg4ODIsMTUuMTI1NTk2NCAxOC44MjYxMzkzLDE0Ljk5MjkwOTggQzE4Ljg0NjM5MTYsMTQuNzI4Nzk1NyAxOC44NTcxNDI5LDE0LjQ2MjE2MzggMTguODU3MTQyOSwxNC4xOTI3NjI0IEMxOC44NTcxNDI5LDEzLjcyODczNzMgMTguODI1ODg5MywxMy4yNzIyNjU1IDE4Ljc2NjYzMjYsMTIuODI0MzU0MSBDMTguNzExMTI2MywxMi40MDU2NDg5IDE4LjYzMDYxNzEsMTEuOTk0NDk3IDE4LjUyNjYwNTMsMTEuNTkzMTY0NCIgaWQ9IkZpbGwtNDMiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsNS43MTQyODU3MSBDNy42MzMxMzU2LDUuNzE0Mjg1NzEgNS43MTQyODU3MSw3LjYzMzA3OTczIDUuNzE0Mjg1NzEsOS45OTk4NzUyMSBDNS43MTQyODU3MSwxMC45OTYyMTA1IDYuMDU0OTc2NDEsMTEuOTEyMTgwMSA2LjYyNTI5MDE1LDEyLjYzOTk2NDEgQzcuNDA5NzUyMzIsMTMuNjQxMjkxIDguNjI5MjUwMzEsMTQuMjg1NzE0MyAxMCwxNC4yODU3MTQzIEMxMC4yNzcyOTQ4LDE0LjI4NTcxNDMgMTAuNTQ4MTAwMiwxNC4yNTgyNjAyIDEwLjgxMDY2OTIsMTQuMjA4MDk0IEMxMi43ODk5MTk5LDEzLjgyODk3NzQgMTQuMjg1NzE0MywxMi4wODk2MzM2IDE0LjI4NTcxNDMsOS45OTk4NzUyMSBDMTQuMjg1NzE0Myw5LjY4NTY1MDIzIDE0LjI1MTAyMTIsOS4zNzk0MTE5IDE0LjE4NjYyNyw5LjA4NDQwNDgxIEMxNC4xNzQ4OTYyLDkuMDMwNDk0ODggMTQuMTI1MjI3OCw4Ljk5MjU1ODI3IDE0LjA3MDMxNzksOC45OTQzMDUzNSBDMTIuNjgyMDk2OSw5LjAzNzczMjc5IDExLjM2NTAwOTEsOS4zNjE2OTE1MSAxMC4xNzI5NjYsOS45MTEyNzMyNSBDMTAuMDk1MDkzOSw5Ljk0NzIxMzIgMTAuMDA1NzQwNiw5Ljg4OTMwOTk0IDEwLjAwOTQ4NDQsOS44MDM0NTM0IEMxMC4wNjc4ODg1LDguNDM1NzM4NjIgMTAuMzk4ODQ1Miw3LjEzODQwNjI1IDEwLjk0OTE5MTcsNS45NjQzNjc4NyBDMTAuOTgwMzkwNSw1Ljg5Nzk3ODc5IDEwLjk0MzIwMTYsNS44MTg4NjA5OSAxMC44NzEzMTk2LDUuODAzODg2MDEgQzEwLjU5MDAzMTQsNS43NDU0ODM1OSAxMC4yOTg3NTk1LDUuNzE0Mjg1NzEgMTAsNS43MTQyODU3MSIgaWQ9IkZpbGwtMzkiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuNzk3ODAwNyw4LjE1MDkyMDI3IEMxOS4yNDA4MzU2LDUuMzU5ODM1NDIgMTcuNTcyMzg1NSwyLjk4NDM0MjcyIDE1LjI4NzgwMjEsMS41MzAwMjA4MyBDMTMuNzY0ODI3OSwwLjU2MDQ3Mjg5OSAxMS45NjgwMTY3LDguODgxNzg0MmUtMTYgMTAuMDQzMzMzMyw4Ljg4MTc4NDJlLTE2IEM2LjY4MTk4MzQxLDguODgxNzg0MmUtMTYgMy43MDk2Mjg4LDEuNzA3NzM3ODYgMS45MDY3MDUxNSw0LjMyMjg2MDI5IEMxLjgzMTM5OTk2LDQuNDMyMzk4MTUgMS43ODQ0NTY0Niw0LjU2MDIzNDEgMS43NzA1MjAxMSw0LjY5MzMzMzg4IEMxLjczMzM1NjUxLDUuMDUyMDI2NTEgMS43MTQyODU3MSw1LjQxNTk4Mjk3IDEuNzE0Mjg1NzEsNS43ODQ3MDE5NSBDMS43MTQyODU3MSw2LjI0NjY2NTk3IDEuNzQ0ODQ3ODksNi43MDEzNjA4OSAxLjgwMjc5Mzc2LDcuMTQ3MDMyMDkgQzEuODUyOTE1NzMsNy41MzMwNDY1MiAxLjkyNDMwODk2LDcuOTEyMjkzMTYgMi4wMTUyNjE5OCw4LjI4MzUxODczIEMyLjAzODQ4OTI0LDguMzc3NTE1NzUgMi4xNTU2MDM0OCw4LjQwMzA4Mjk0IDIuMjE0MjgyODUsOC4zMjY4ODI2OSBDMy44OTUyMDIzMSw2LjEzNjg3NzQ1IDYuNDMxMTI5MSw0LjY2OTc3MTk2IDkuMzA2NDE4MjUsNC40NTQyMDU0NiBDOS41NDk2OTMxNCw0LjQzNTkwNzM3IDkuNzk1NDEzLDQuNDI2MzgyMzQgMTAuMDQzMzMzMyw0LjQyNjM4MjM0IEMxMC42OTI0NzM5LDQuNDI2MzgyMzQgMTEuMzI3MTg5MSw0LjQ5MDgwMTYzIDExLjk0MTYxMSw0LjYxMjM3MTExIEMxNS4wOTQ2NDkxLDUuMjM2NzYxOTggMTcuNzE3MzcyNSw3LjM4NTE1Nzg4IDE5LjA1MTEwNTcsMTAuMjgxMDE4MSBDMTkuMDY5Njg3NSwxMC4zMjEzNzQxIDE5LjA4ODUxMzgsMTAuMzYxOTgwOCAxOS4xMDY2MDY2LDEwLjQwMjU4NzYgQzE5LjMyMTAzMDgsMTAuODg0NjA0MyAxOS40OTk3NTg0LDExLjM4NjkyNDMgMTkuNjM5NjEwOSwxMS45MDU1MzcyIEwxOS42NDIzMDAzLDExLjkxNTA2MjMgQzE5LjY3NDU3NCwxMi4wMzQ4NzcxIDE5Ljg0MzAzMjcsMTIuMDI1MzUyMSAxOS44NjMwODE1LDExLjkwMjc4IEMxOS44ODQ4NDE3LDExLjc2OTkzMDkgMTkuOTA0MTU3LDExLjYzNjMyOTggMTkuOTIwNzgyOSwxMS41MDE3MjYgQzE5Ljk0NDI1NDYsMTEuMzEwOTc0OCAxOS45NjIxMDI5LDExLjExODcxOTUgMTkuOTc1MzA1OCwxMC45MjQ5NjAzIEMxOS45OTExOTgxLDEwLjY4ODA4NzggMjAsMTAuNDQ4OTU5NCAyMCwxMC4yMDc1NzUxIEMyMCw5LjUwMzIyNDA2IDE5LjkzMDMxODIsOC44MTUxNjU4OCAxOS43OTc4MDA3LDguMTUwOTIwMjciIGlkPSJGaWxsLTQxIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=';
      var customMapType = new google.maps.StyledMapType([
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#444444"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#f6f6f6"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e4e4e4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#a2aab6"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#abaeba"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ececec"
      }
    ]
  }
], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';
  map = new google.maps.Map(document.getElementById(div_ID_footer), {
    center: myLatLngMARKER,
    zoom: zoom,  
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
        mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
    // draggable: false,
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
  var marker = new google.maps.Marker({
    position: myLatLngMARKER,
    map: map,
    icon:image_min

  });

  // MAP CONTACTS PAGE///////////////////////////
////////////////////////////////////////////////
  if (document.getElementById('map_page_contacts')) {

        if ($(window).width() > 850) {
        var stchetch = (0.000017408333333332897 * $(window).width()) + 30.306849;
        var myLatLng = ({lat: 59.915630, lng: stchetch})
    } else {

        var myLatLng = myLatLngMARKER;
        var myLatLng = {lat: 59.915630 - 0.007, lng: 30.306977746032757};
    }

      map2 = new google.maps.Map(document.getElementById(div_ID_page_contacts), {
    center: myLatLng,
    zoom: zoom2,  
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
        mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
    // draggable: false,
  });

  map2.mapTypes.set(customMapTypeId, customMapType);
  map2.setMapTypeId(customMapTypeId);
  var marker2 = new google.maps.Marker({
    position: myLatLngMARKER,
    map: map2,
    icon:image_big

  });
  $(window).resize(function() {
    if ($(window).width() > 850) {
        var stchetch = (0.000017408333333332897 * $(window).width()) + 30.306849;
        map2.setCenter({lat: 59.915630, lng: stchetch})
    } else {
        map2.setCenter(myLatLngMARKER);
        map2.setCenter({lat: map2.getCenter().lat() - 0.007, lng: map2.getCenter().lng()});
    }
});

  }




  // MAP NUMBER 2///////////////////////////
////////////////////////////////////////////////

}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////****************** FOOTER MAP******************////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

