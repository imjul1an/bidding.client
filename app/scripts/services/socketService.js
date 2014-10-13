'use strict';

angular.module('clientbiddingApp').factory('socketService', function (socketFactory) {
    return socketFactory({
	    ioSocket: io.connect('localhost:5000')
  	});
});
