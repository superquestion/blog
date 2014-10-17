### Angular
  * ng-app 被包含的元素都属于AngularJs应用
  * ng-controller  被包含的元素都属于某个控制器
  
#### 用angularJs 实现一个时钟

    <div class="container-fluid"  ng-controller="myController">
      {{clock.now}}
    </div>
    
   ```
   angular.module('myApp', []).controller('myController', function($scope) {
        $scope.clock = {
            now: new Date()
        };
        var updateClock = function(){
            $scope.clock.now = new Date();
        }
        setInterval(function(){
            $scope.$apply(updateClock)
        },1000)
    })
   ```
  
  <span>注：</span><strong>angular.module('myApp', [])</strong>用来声明模块,接收两个
  参数，第一个是模块名称，第二个事依赖表，也就是可以被注入到模块中的对象列表。
  
  调用这个方法如果只传一个参数，就是引用模块：
  
  angular.moudle("myApp")
  ----------------------------------------------------------------------------
   <a href="http://jsbin.com/vevuy/1/edit?html,output">请单击我</a>
  
