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
                this.reset = function() {
                    that.brightness=0;
                    that.contrast=0;
                    that.saturation=0;
                    that.vibrance=0;
                    that.exposure=0;
                    that.hue=0;
                    that.gamma=1;
                    that.noise=0;
                    that.stackBlur=0;
                };
                
                this.shouldRender = false;
                this.isRendering = false;

                Caman("#cvsedit", "img/img13.jpg", function () {
                    img = this;
                    that.reset();
                });
                
                this.effect = function (eff){
                    if (eff === "vintage") img.vintage();
                    else if (eff === "lomo") img.lomo();
                    else if (eff === "clarity") img.clarity();
                    else if (eff === "sinCity") img.sinCity();
                    else if (eff === "sunrise") img.sunrise();
                    that.reset();
                    that.render();
                };
                
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
                        img.exposure(parseInt(that.exposure));
                        img.hue(parseInt(that.hue));
                        img.gamma(parseInt(that.gamma));
                        img.noise(parseInt(that.noise));
                        img.stackBlur(parseInt(that.stackBlur));

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