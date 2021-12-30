// console.log('%c Fahad Kamran', 'font-weight: bold; font-size: 50px;color: #000; text-shadow: 2px 2px 0 rgb(217,31,38)');
// console.log(
// "%cBackground image",
// "display: inline-block ; background-image: url( 'https://dummyimage.com/400/ccaecc/000000.png&text=9' ) ; " +
// "background-size: cover ; padding: 10px 175px 158px 10px ; " +
// "border: 2px solid black ; font-size: 11px ; line-height: 11px ; " +
// "font-family: monospace ;"
// );
// console.group(
// "%cGrouped Output",
// "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
// );
// console.log( "Groups are cool for grouped stuff." );
// console.log( "Totes magotes" );
// console.groupEnd();
 // window Load Function
 $(window).on('load', function() {
    // show modal click function
    $(".show_modal").click(function () {
        // show modal modal id
        $('#exampleModal').modal('show');
        // target all parents
        var popup_data = $(this).parents('.card');
        var popup_img_src = popup_data.children('.img-fluid')[0].src;
        // target queryselector by tagName
        var popup_title = popup_data.children('.card-body')[0].querySelector('h5').innerHTML;
        var popup_discription = popup_data.children('.card-body')[0].querySelector('p').innerHTML;

        //modal title
        $('#exampleModalLabel').html(popup_title);

        // if image tag present in modal-body
        $('.modal_img').attr('src', popup_img_src);

        // modal discription

        $('.modal_discription').html(popup_discription);

        // if img tag not in .modal-body
        // previous tag deleted
        //$('.modal-body').children().remove('img')
        // append image
        //$('.modal-body').append(`<img src=${popup_img_src} class='img-fluid' alt='${popup_title}'/>`)
    });
 });