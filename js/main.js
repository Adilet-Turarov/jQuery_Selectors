//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>
// 1. Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание:
// попробуйте подключение с разных CDN-хранилищ, и при помощи локального
// файла

// $('document').ready(function(){
//     console.log('Доброго Времени Суток)')
// })

// 2. Выберите при помощи селекторов jQuery
// — все HTML-элементы strong и окрасьте их в зеленый цвет

// $(document).ready(function(){
//     let elem = $('strong')
//     elem.css('color', 'green')
// })

// — найдите все HTML-элементы em и добавьте им класс .selected

// $(document).ready(function(){
//     let elementEm = $('em')
//     elementEm.addClass('selected')
// })

// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected

// $(document).ready(function(){
//     let row = $('.row').find('mark');
//     row.addClass('selected')
// })

// — Найдите все гиперссылки и удалите у них подчеркивания

// $(document).ready(function(){
//     let href = $('a');
//     href.css('text-decoration', 'none')
// })

// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.

// $(document).ready(function(){
//     let strong = $('strong');
//     strong.toggleClass('some')
// })

// — среди набора элементов с классом .row удалите класс у второго элемента

// $(document).ready(function(){
//     $('.row').eq(1).removeClass('row');
// })

// — прочитайте CSS-свойство color у второй гиперсылки в тексте

// $(document).ready(function(){
//     let color = $('a').eq(1)
//     console.log(color.css('color'))
// })
