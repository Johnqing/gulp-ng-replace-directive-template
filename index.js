'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var fs = require('fs');
var File = gutil.File;

module.exports = function (options) {

	return through.obj(function (file, enc, cb){
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-ng-replace-directive-template', 'Streaming not supported'));
			return cb();
		}
		var fileContent = String(file.contents.toString());
		var content = '';

		options.params.forEach(function(param){
			var fileCont = !content ? fileContent : content;
			content = fileCont.replace('<' + param, '<div '+ param);
			content = content.replace('</' + param +'>', '</div>');
		});

		file.contents = new Buffer(content);
		this.push(file);
		cb();
	});

};