(function ()
{
	var app = angular.module ('instagram', []);
    
    app.directive("imageEdit", function() {
        return {
            restrict: 'E',
            templateUrl: 'html/image-edit.html',
            scope: {
                imglink: '@',
            },
            controller: function($scope) {
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

                Caman("#cvsedit", $scope.imglink, function () {
                    img = this;
                    that.reset();
                });
                
                this.effect = function (eff){
                    if (eff === "vintage") img.vintage();
                    else if (eff === "lomo") img.lomo();
                    else if (eff === "clarity") img.clarity();
                    else if (eff === "sinCity") img.sinCity();
                    else if (eff === "sunrise") img.sunrise();
                    else if (eff === "crossProcess") img.crossProcess();
                    else if (eff === "orangePeel") img.orangePeel();
                    else if (eff === "love") img.love();
                    else if (eff === "grungy") img.grungy();
                    else if (eff === "jarques") img.jarques();
                    else if (eff === "pinhole") img.pinhole();
                    else if (eff === "oldBoot") img.oldBoot();
                    else if (eff === "glowingSun") img.glowingSun();
                    else if (eff === "hazyDays") img.hazyDays();
                    else if (eff === "herMajesty") img.herMajesty();
                    else if (eff === "nostalgia") img.nostalgia();
                    else if (eff === "hemingway") img.hemingway();
                    else if (eff === "concentrate") img.concentrate();
                    
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
    
    app.controller("serverController", function($http){
        this.resp = null;
        that = this;
        
        $http.get('/getdatabase').success(function(data) {
            console.log(data);
        });
        };
    });
})();