(function ()
{
	var app = angular.module ('instagram', []);
    
    app.directive("imageEdit", function() {
        return {
            restrict: 'E',
            templateUrl: 'html/image-edit.html',
            controller: function() {
                var img = null;
                that=this;
                this.brightness=0;
                this.contrast=0;
                this.saturation=0;
                this.vibrance=0;
                this.shouldRender = false;
                this.isRendering = false;

                Caman("#cvsedit", "img/img13.jpg", function () {
                    img = this;
                });

                this.render = function () {
                    if  (that.isRendering === true) {
                        that.shouldRender = true;
                    }
                    if (that.isRendering === false) {
                        img.revert(false);
                        that.isRendering = true;

                        img.brightness(parseInt(that.brightness));
                        img.contrast(parseInt(that.contrast));
                        img.saturation(parseInt(that.saturation));
                        img.vibrance(parseInt(that.vibrance));

                        img.render( function(){
                            that.isRendering = false;
                            if (that.shouldRender === true) {
                                that.shouldRender = false;
                                that.render();
                            }
                        });
                    }
                };
            },
        controllerAs: 'imgC'
        };
    });
    
    app.controller("tabController", function(){
        this.active = 1;
    });
})();