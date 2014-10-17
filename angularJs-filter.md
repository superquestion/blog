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
  
