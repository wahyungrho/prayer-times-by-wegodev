//* function fetch API from aladhan.com
function prayerTimes(latitude, longitude) {
    fetch('https://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=2&month=9&year=2021').then(response => response.json()).then(function (response) {
        console.log(response);
        let date = new Date();
        let today = date.getDate() - 1;
        let data = response.data[today].timings;

        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');

        for (i in data) {
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);

            name.innerHTML = i;
            time.innerHTML = data[i];
            tableTbody.appendChild(row);
        }
        table.appendChild(tableTbody);
        app.appendChild(table);

        console.log(data);
    });
}

//* function callback Geolocation
function success(position) {
    console.log(position);
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
    alert('Posisi tidak dapat diakses');
}

//* function geolocation for userLocation
function userLocation() {
    if (!navigator.geolocation) {
        alert('Browser anda tidak mendukung geolocation, silahkan gunakan browser lain !');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index() {
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';


    app.appendChild(h3);
    userLocation();
}

index();