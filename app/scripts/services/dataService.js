'use strict';

angular
	.module('clientbiddingApp')
	.service('dataService', dataService);

dataService.$inject = ['$http', '$rootScope'];

function dataService($http, $rootScope) {
	var config = window.config;

	return {
		getItem: getItem,
	};

	function getItem (id) {
        return $http.get(config.api + '/auction/' + id)
            .then(getVenueComplete)
            .catch(getVenueFailed);

        function getItemComplete (res) {
            return res.data;
        }

        function getItemFailed (err) {
            console.log('XHR Failed for getVenue.' + err.data);   
        }
	}
}