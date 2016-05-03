# gulp-ng-replace-directive-template

```
npm install gulp-ng-replace-directive-template
```

## use

```
var gulp = require('gulp');
var gulpNgReplaceDirectiveTemplate = require('gulp-ng-replace-directive-template');
gulp.task("", function(callback) {
    gulp.src('directives/*.html')
    .pipe(gulpNgReplaceDirectiveTemplate({
        options: ['1']
    }))
    .pipe(gulp.dest('build'))
});
```