###Angular-directive
  自定义指令
  
```
    angular.module('myApp', []).directive('myDirective', function() {
      return {
      restrict: 'A',
      replace: true,
      template: '<a href="{{myUrl}}>{{myLinkText}}</a>'
  }
});
```
---------------
```
 <div my-directive my-url="http://google.com"  my-link-text="Click me to go to Google"></div>
 
```

| 属性  | 描述 |
| ------------- | ------------- |
| restrict  |  决定一个指令可如何被使用  |
| scope   | 作用域  |
| template   | 可以包含 HTML 、数据绑定表达式，甚至是其它指令  |
| templateUrl   | 地址url   |
| controller  | 指令模板关联的控制器  |
| link  | dom 操作函数  |

