### 判断ios 和 android
``` javascript
 if(navigator.userAgent.match(/Android/i)){
		 //TODO
		}else if(navigator.userAgent.match(/iPhone|iPod/i)){
		 //TODO
	}
```
### 判断微信 和 qq
``` javascript
  if (navigator.userAgent.indexOf('MicroMessenger')>=0 ) {
	   //TODO
	}else if (navigator.userAgent.indexOf('QQ/')>=0) {
	  //TODO
	}
```	
### web 打开native app
``` javascript
  function openAndroid(){
    var iframe = document.createElement("iframe");
		iframe.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;"
		var start = new Date().valueOf();
		iframe.src = "ttpod://";
		// 执行打开动作
		document.body.appendChild(iframe);
		setTimeout(function(){
			var end = new Date().valueOf();
			if( (end - start) < 1550 ){
				// 打开失败进入这个异常处理，跳转下载页
				window.location.href = downloadUrl; 
			}
		},1500);
	}
  function openIos(){
  var start = new Date().valueOf();
		// 执行打开动作
		window.location.href = "ttpod://";
		setTimeout(function(){
			var end = new Date().valueOf();
			if( (end - start) < 1550 ){
				// 打开失败进入这个异常处理
				setTimeout(function(){
					window.location.href = downloadUrl;
				},100);
			}
		},1500);
  }		
```
