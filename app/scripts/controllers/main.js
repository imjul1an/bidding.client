'use strict';

angular.module('clientbiddingApp')
  .controller('MainCtrl', function ($scope, socketService) {
  		$scope.userName = 'User_' + Math.floor((Math.random() * 10000) + 1)
  		$scope.allBids = [];
  		$scope.users = [];
		$scope.bid = 0;
		$scope.highestBid = 0;
		$scope.name = '';
		$scope.picture = '';
		$scope.description = '';
		$scope.placeBid = placeBid;

		// place my bid on the item
		function placeBid() {
			if($scope.allBids.length > 0) {
				if($scope.bid > $scope.highestBid) {
					$scope.allBids.splice(0, 0, {name: $scope.userName , bid: $scope.bid});
					socketService.emit('place:bid', $scope.bid);
				} else {
					alert('You cannot place bid lower than highest bid');
				}
			} else {
				$scope.allBids.splice(0, 0, {name: $scope.userName , bid: $scope.bid});
				socketService.emit('place:bid', $scope.bid);
			}
		}

		function _inArray(list, value) {
			for (var i = 0; i < list.length; i++) {
				if (list[i].bid === value) {
					return true;
				}
			}
			return false;
		}

		socketService.on('connect', function () {

			socketService.emit('join', $scope.userName);

			socketService.on('last:bid', function (lastBid) {
				$scope.allBids.splice(0, 0, lastBid);
			});

			socketService.on('highest:bid', function (highestBid) {
				$scope.highestBid = highestBid.bid;
			});

			socketService.on('new:user', function (user) {
				$scope.users.push(user);
			});
		});
  });
