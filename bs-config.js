
// Browser-sync config file
//--------------------------------------------------------------------------
// For up-to-date information about the options:
//   http://www.browsersync.io/docs/options/
//
// (There are more options than you see here.)
//
// To run: browser-sync start --config ./bs-config.js

module.exports={
	'files':[
		'*',
		'css/*'
	],
	notify:false,
	reloadDelay:100,
	server:['.'],
	watchEvents:['add','change','unlink']
};
