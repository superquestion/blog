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
 <div my-directive
  my-url="http://google.com"
  my-link-text="Click me to go to Google">
</div>
