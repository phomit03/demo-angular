angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.names= [
        {country: 'Japan', capital:'Tokyo'},
        {country: 'Viet Nam', capital:'Ha Noi'},
        {country: 'Hoa Ky', capital:'Woashington'},
        {country: 'Trung Quoc', capital:'Bac King'}
    ];
});