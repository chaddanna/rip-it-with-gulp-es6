/*
 __      __    _      _    
 \ \    / /_ _| |_ __| |_  
  \ \/\/ / _` |  _/ _| ' \ 
   \_/\_/\__,_|\__\__|_||_|

 Watch ES6, SASS and templates for changes and compile on the fly.

*/

var gulp = require('gulp');

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('src/styles/**', ['styles']);
  gulp.watch('src/views/**', ['templates']);
});
