var originalProducts = [
    {
      name : 'Chaise',
      price : 35,
      stock : 15
    },{
      name : 'Table',
      price : 150,
      stock : 10
    },{
      name : 'Meuble TV',
      price : 250,
      stock : 20
    },{
      name : 'Ordinateur',
      price : 1000,
      stock : 5
    },{
      name : 'Ventilateur',
      price : 100,
      stock : 10
    },{
      name : 'Lampe',
      price : 50,
      stock : 30
    }
  ];

var app = angular.module('scApp', []);
app.controller('mainController', function($scope){
  $scope.showAlert = false;
  $scope.finalPrice = 0;
  $scope.products = [];
  angular.copy(originalProducts, $scope.products);
  $scope.cartProducts = [];

  $scope.addItem = function(item){
    if(item.stock === 0){
      return;
    }
    --$scope.products[$scope.products.indexOf(item)].stock;

    var indexQt = $scope.cartProducts.indexOf(item);
    if(indexQt != -1){
      ++$scope.cartProducts[indexQt].quantity;
    }
    else{
      item.quantity = 1;
      $scope.cartProducts.push(item);
    }
    $scope.finalPrice += item.price;
  };

  $scope.deleteItem = function(index, item){
    // delete item.quantity;
    ++$scope.products[$scope.products.indexOf(item)].stock;
    $scope.finalPrice -= $scope.cartProducts[index].price;

    if($scope.cartProducts[index].quantity > 1){
      --$scope.cartProducts[index].quantity;
      // $scope.finalPrice -= $scope.cartProducts[index].price;
    }
    else{
      $scope.cartProducts.splice(index, 1);
    }
  };

  $scope.deleteAll = function(){
    $scope.finalPrice = 0;
    $scope.cartProducts = [];
    angular.copy(originalProducts, $scope.products);
  };

  // $scope.addProduct = function(){
  //   var newProd = {
  //     name : $scope.prName,
  //     price : $scope.prPrice,
  //     stock : $scope.prStock
  //   }
  //   originalProducts.push(newProd);
  //   // $scope.products.push(newProd);
  // }
});
