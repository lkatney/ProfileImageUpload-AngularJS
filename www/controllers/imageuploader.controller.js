'use strict';
angular.module('ProfileDemoController')
    .controller('ImageUploaderCtrl', function($scope) {

    function init() {
        $scope.type='circle';
        $scope.imageDataURI='';
        $scope.resImageDataURI='';
        $scope.resImgFormat='image/png';
        $scope.resImgQuality=1;
        $scope.selMinSize=100;
        $scope.resImgSize=200;
        $scope.changeOnFly=false;
        $scope.resImageDataURI = null;
        //$scope.aspectRatio=1.2;
        $scope.onChange=function($dataURI) {
          console.log('onChange fired');
        };
        $scope.onLoadBegin=function() {
          console.log('onLoadBegin fired');
        };
        $scope.onLoadDone=function() {
          $scope.preview = true;
        };
        $scope.onLoadError=function() {
          console.log('onLoadError fired');
        };

        var handleFileSelect = function(evt) {
            var target  = evt.dataTransfer || evt.target;
            var file    = target && target.files && target.files[0];
            var options = {canvas:true, maxWidth:640 , maxHeight: 1136};
            var displayImg = function(img) {
              $scope.$apply(function($scope){
                 $scope.imageDataURI=img.toDataURL();
              });
            }
            loadImage.parseMetaData(file, function (data) {
              if (data.exif) {
                options.orientation = data.exif.get('Orientation');
              }
              loadImage(file, displayImg, options );
            });
        };
        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
        $scope.$watch('resImageDataURI',function(){
          //console.log('Res image', $scope.resImageDataURI);
        });
    }

    init();
})