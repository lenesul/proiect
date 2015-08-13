(function ()
{
	var app = angular.module ('instagram', []);
    
    app.directive("imageEdit", function() {
        return {
            restrict: 'E',
            templateUrl: 'html/image-edit.html',
            controller: function() {
                
            },
            controllerAs: 'img'
        }
    });

})();