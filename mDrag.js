var params = {
        left: 0,
        top: 0,
        currentX: 0,
        currentY: 0,
        flag: false
    };

    var getCss = function(o,key){
        return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
    };


    var mDrag = function(target){
        if(getCss(target, "left") !== "auto"){
            params.left = getCss(target, "left");
        }
        if(getCss(target, "top") !== "auto"){
            params.top = getCss(target, "top");
        }
  
        target.addEventListener("touchstart" ,function(event){

            params.flag = true;
            if(!event){
                event = window.event;
            }
            var e = event;
            params.currentX = e.touches[0].clientX;
            params.currentY = e.touches[0].clientY;
        });
        document.addEventListener('touchend',function(){
            params.flag = false;
            if(getCss(target, "left") !== "auto"){
                params.left = getCss(target, "left");
            }
            if(getCss(target, "top") !== "auto"){
                params.top = getCss(target, "top");
            }
        });
        document.addEventListener("touchmove",function(event){

            var e = event ? event: window.event;
            if(params.flag){
                var nowX = e.touches[0].clientX, nowY = e.touches[0].clientY;
                var disX = nowX - params.currentX, disY = nowY - params.currentY;
                target.style.left = parseInt(params.left) + disX + "px";
                target.style.top = parseInt(params.top) + disY + "px";
            }
        },false)
