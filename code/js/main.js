var imagePath = 'img/foxes/';

(function() {
    var ttt = document.querySelectorAll('img');
    var imgArr = [
        'img/foxes/01.jpg',
        'img/foxes/02.jpg',
        'img/foxes/03.jpg',
        'img/foxes/04.jpg',
        'img/foxes/05.jpg',
        'img/foxes/06.jpg',
        'img/foxes/07.jpg',
        'img/foxes/08.jpg',
        'img/foxes/09.jpg',
        'img/foxes/10.jpg',
        'img/foxes/11.jpg',
        'img/foxes/12.jpg'
    ];

    for(var i=0; i<ttt.length; i++){
        var rand = imgArr[Math.floor(Math.random() * imgArr.length)];

        var img = document.createElement('img');
        img.src = rand;
        img.onload = function() {
            var orientation;

            if (this.naturalWidth > this.naturalHeight) {
                orientation = 'landscape';
            } else if (this.naturalWidth < this.naturalHeight) {
                orientation = 'portrait';
            } else {
                orientation = 'even';
            }

            this.classList.add(orientation);
        };

        var image_con = ttt[i].parentElement;
        image_con.removeChild(ttt[i]);
        image_con.append(img);
    }
})();
