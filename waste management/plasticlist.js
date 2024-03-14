function searchShops() {
    var input, filter, ul, li, location, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('shopList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        location = li[i].getAttribute('data-location').toUpperCase();
        if (location.indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}