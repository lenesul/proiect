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
    
    app.controller("tabController", function(){
        this.active = 1;
    });
    
    app.controller("imageController", function(){
        var that=this;
        this.brightness=0;
        
    Caman("#image-id", function (that) {
        this.brightness(that.brightness);
        this.render();
    });


    });
})();