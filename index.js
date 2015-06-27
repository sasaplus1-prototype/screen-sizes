(function(){

  'use strict';

  function setValues() {
    var properties = [],
        html = [],
        i, len;

    properties.push('screen.width                           ');
    properties.push('screen.height                          ');
    properties.push('screen.availWidth                      ');
    properties.push('screen.availHeight                     ');
    properties.push('window.innerWidth                      ');
    properties.push('window.innerHeight                     ');
    properties.push('window.outerWidth                      ');
    properties.push('window.outerHeight                     ');
    properties.push('document.width                         ');
    properties.push('document.height                        ');
    properties.push('document.body.clientWidth              ');
    properties.push('document.body.clientHeight             ');
    properties.push('document.documentElement.clientWidth   ');
    properties.push('document.documentElement.clientHeight  ');
    properties.push('window.scrollX                         ');
    properties.push('window.scrollY                         ');
    properties.push('document.body.scrollLeft               ');
    properties.push('document.body.scrollTop                ');
    properties.push('document.documentElement.scrollLeft    ');
    properties.push('document.documentElement.scrollTop     ');
    properties.push('window.orientation                     ');

    for (i = 0, len = properties.length; i < len; ++i) {
      try {
        html.push(
          '<tr>' +
            '<th>' + properties[i] + '</th>' +
            '<th>' +
              (new Function('return ' + properties[i])).call(null) +
            '</th>' +
          '</tr>'
        );
      } catch(e) {
        html.push(
          '<tr>' +
            '<th>' + properties[i] + '</th>' +
            '<th>error</th>' +
          '</th>'
        );
      }
    }

    $('table').html(html.join(''));
  }

  $(window)
    .on('resize', setValues)
    .on('scroll', setValues)
    .on('orientationchange', setValues);

  $(setValues);

}());
