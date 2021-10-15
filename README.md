# Prayer Times By Course Wegodev

A website platform that displays prayer schedules from API [aladhan.com](aladhan.com) based on regional zones when the user activates the location permit and when the user does not activate the permit, by default the regional zone shows the DKI Jakarta province.

## Prayer Times Website View
[![image.png](https://i.postimg.cc/RFrxpbyt/image.png)](https://postimg.cc/mcSntVbZ)

## Installation

You can download the project folder at [Github](https://github.com/wahyungrho/prayer-times-by-wegodev) 
to run prayer times.

## Tutorials on using Geolocation

```javascript

//* function geolocation for userLocation
function userLocation() {
    if (!navigator.geolocation) {
        alert('Your browser does not support geolocation, please use another browser!');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

//* function callback Geolocation
function success(position) {
    console.log(position);
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
    //* default latitude dan longitude DKI Jakarta
    prayerTimes('-6.200000', '106.816666');
}

```

## Contributing
 - I hope you can watch the full video tutorial at the following link: [https://www.wegodev.com/tutorial/case-study/api-prayer-times/introduction.html](https://www.wegodev.com/tutorial/case-study/api-prayer-times/introduction.html)
- In this repository i provide a summary of the steps to create a prayer schedule application based on the user's location.
- Continue to support programming learning content in Indonesia.
- Thanks to Wegodev.com

## License
[Course by Wegodev](https://www.wegodev.com/)
