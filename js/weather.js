var opogodeInformerConfigs = opogodeInformerConfigs || [];
opogodeInformerConfigs.push(['opogode.ua', {
  "type": "new",
  "link": "lviv",
  "width": 303,
  "color": "51adde",
  "locale": "ua",
  "roundedCorners": false,
  "showNews": true,
  "day": "today",
  "additionalLinks": []
}]);
(function() {
  var oi = document.createElement('script');
  oi.type = 'text/javascript';
  oi.async = true;
  oi.src = 'http://opogode.ua/javascripts/informers.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(oi, s);
})();

time_is_widget.init({
  Lviv_z713: {}
});