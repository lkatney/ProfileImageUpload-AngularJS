'use strict';
angular.module('ProfileDemoController')
    .controller('ProfileCtrl', function($rootScope, $scope, $ionicPopup, $ionicLoading) {

    /**
        Section for image uploader
    **/
    var imageUploaderPopup;

    $scope.showUploader = function(){
        imageUploaderPopup = $ionicPopup.show({
            templateUrl: "templates/image-uploader.html",
            scope : $scope
        });
        imageUploaderPopup.then(function(res) {
        });
    }

    $scope.closeUploader = function(){
        imageUploaderPopup.close();
    }

    $scope.setNewPic = function(newValue){
        $scope.uploadedPic = newValue;
        $scope.closeUploader();
    }
})