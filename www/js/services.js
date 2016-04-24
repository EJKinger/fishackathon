angular.module('starter.services', [])

.factory('Image', function(){
  var image = null;

  function set (imageData){
    image = imageData;
  }

  function get () {
    return image;
  }

  return {
    set: set,
    get: get
  };
});
