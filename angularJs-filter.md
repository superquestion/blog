###AngularJs 过滤器

  * {{name | uppercase}} 转大写
  * {{name | lowercase}} 转小写
 
 实例：<a href="http://jsbin.com/pixuvu/2/">请单击我</a>

 过滤器可以选择所有包含字母e的单词：
 {{ ['Ari','Lerner','Likes','To','Eat','Pizza'] | filter:'e' }}
 <!-- ["Lerner","Likes","Eat"] -->
 
 属性过滤, 获得{'favorite food': 'Pizza'}的数据
   {{ [{
 'name': 'Ari',
 'City': 'San Francisco',
 'favorite food': 'Pizza'
 },{
 'name': 'Nate',
 'City': 'San Francisco',
 'favorite food': 'indian food'
 }] | filter:{'favorite food': 'Pizza'} }}
 <!-- [{"name":"Ari","City":"SanFrancisco","favoritefood":"Pizza"}] -->
 
 
  自定义过滤条件：
  ```
  angular.module('myApp', []).controller('myController', ['$scope', '$filter',function($scope, $filter) {
        $scope.clock = {
            n: 124,
            date: new Date()
        };

        $scope.name = $filter("lowercase")('Test') ;
        $scope.date = $filter("date")(new Date(),"yyyy-MM-dd HH:ss");
        $scope.test = "test";
        $scope.isCapitalized = function(str){
          return str[0] ==  str[0].toUpperCase();
        }
    }])
    //自定义过滤器cap
    
    angular.module('myApp').filter('cap', function() {
        return function(input) {
            return input[0].toUpperCase() + input.slice(1);
        };
    });
    
    ```
    
    -----------------------------------------------------------
    ###Angular常用指令
    
| 属性  | 描述 |
| ------------- | ------------- |
| ng-init  |  初始化  ng-init="someProperty=true"|
| ng-readonly   | 表单元素只读 true, false |
| ng-checked  |  checkBox radio是否选中 true, false |
| ng-selected   | selected的option是否是选中 true,false   |
| ng-href  | angluar使用ng-href代替href|
| ng-src  | angluar使用ng-src代替src  |
| ng-app  | 有ng-app属性的DOM元素将被标记为$rootScope的起始点  |
| ng-controller  | 为嵌套在其中的指令创建一个子作用域，避免将所有操作和模型都定义在$rootScope上  |
| ng-include  | 自动创建一个子作用域,不会像往常一样从外部作用域继承并创建一个新的子作用域 |
| ng-view  | 用来设置将被路由管理和放置在HTML中的视图的位置  |
| ng- if |   |
| ng-repeat| $index,$first,$middle,$last,$even,$odd|
|ng-cloak|ng-cloak指令会将内部元素隐藏，直到路由调用对应的页面时才显示出来,避免未渲染元素闪烁 |
|ng-show/ng-hide|根据所给表达式的值来显示或隐藏HTML元素 |
|ng-change|因为要处理表单输入|
|ng-click|用来指定一个元素被点击时调用的方法或表达式|
|ng-class|动态设置元素的类|
|ng-submit|ng-submit用来将表达式同onsubmit事件进行绑定|
  
