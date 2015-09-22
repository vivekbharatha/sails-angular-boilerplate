/**
 * Created by v3xvard on 22/9/15.
 */

angular
  .module('yourApp')
  .service('ClockService',function () {
    this.getTime = function () {
      var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

      if (hours <= 9) hours = '0' + hours;
      if (minutes <= 9) minutes = '0' + minutes;
      if (seconds <= 9) seconds = '0' + seconds;

      var _time = hours + ':' + minutes + ':' + seconds;
      var color = '#' + hours + minutes + seconds;

      return {time: _time, color:color};
    }
  });
