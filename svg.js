
(function ($, document) {
    $.fn.easyaspie = function (options) {
        var	size =  parseInt(options.size),
            circle	= size / 2,
            color = options.fill,
            style = parseInt(options.width),
            value	= parseFloat(options.value),
            canvasSize = size,
            centre = canvasSize/2,
            radius = canvasSize*0.8/ 2,
            startY = centre-radius;
      
        if (isNaN(value)) {
            return this;
        }
        this.css({
            height: size,
            width: size
        });
      
        value = Math.min(Math.max(value, 0), 100);
        this.pie = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var _this = this;
        if (value >= 100) {
            this.pie.slice = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            this.pie.slice.setAttribute('r', radius);
            this.pie.slice.setAttribute('cx', radius);
            this.pie.slice.setAttribute('cy', radius);

        } else {
            this.pie.slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
            var x = Math.cos((2 * Math.PI)/(100/value));
            var y = Math.sin((2 * Math.PI)/(100/value));
            var longArc = (value <= 50) ? 0 : 1;
            var d = value*3.6 * delta,
                dr = d-90;
                radians = Math.PI*(dr)/180,
                endx = centre + radius*Math.cos(radians),
                endy = centre + radius * Math.sin(radians),
                largeArc = d>180 ? 1 : 0;
                path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
                this.pie.slice.setAttribute('d', path);
                this.pie.slice.setAttribute('fill', "none");
                this.pie.slice.setAttribute('stroke', color);
                this.pie.slice.setAttribute('style', "stroke-width:" + style + "px");
                    

        }

        $(this.pie.slice).appendTo(this.pie);
        $(this.pie).appendTo(this);
        return this;
    };
})(jQuery, document);
