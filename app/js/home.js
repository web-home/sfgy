define(function(require,expores,module){
	var header = require('../views/headerView.html');
	var headerjs = require('../js/header.js');

	var Home = {
		initPage: function(){
			this.showView();
		},
		showView: function(){
			var _header = _.template( header );
			$('#header').html( _header() );
			headerjs.initPage();
		}
	}
	module.exports = Home;
})