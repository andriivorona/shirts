var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

var appDir = 'app/';

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src([appDir + 'sass/**/*.sass', appDir + 'sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest(appDir + 'css')) // Выгружаем результата в папку css
  });

gulp.task('watch', function() {
  gulp.watch([appDir + 'sass/**/*.sass', appDir + 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']); 