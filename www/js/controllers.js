angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope, Image, $state){

  $scope.image = false;
  $scope.analyzing = false;
  $scope.selection = '';
  
  $scope.capture = function(gallery){
    if (gallery){
      navigator.camera.getPicture(
        cameraSuccess, cameraError,
        {sourceType: Camera.PictureSourceType.PHOTOLIBRARY});
      
    } else {
      navigator.camera.getPicture(cameraSuccess, cameraError);
    }
  };

  $scope.analyzeImage = function(){
    $scope.analyzing = true;
    setTimeout(function(){
      $state.go('app.captured');
    }, 2000);
  };

  function cameraSuccess (imageData) {
    Image.set(imageData);
    $scope.image = true;
    var image = document.getElementById('myImage');
    image.src = Image.get();
    $scope.$apply();
  }

  function cameraError (err) {
    console.log('Camera Error: ', err);
  }

})

.controller('CapturedCtrl', function($scope, Image) {
  // var image = document.getElementById('myImage');
  // image.src = Image.get();

  setTimeout(function(){
    $scope.loading = false;
    $scope.$apply();
  }, 2000);

})

.controller('ReportCtrl', function($scope){

});


















