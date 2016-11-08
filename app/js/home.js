define(function(require,expores,module){
	var header = require('../views/headerView.html');
	var headerjs = require('../js/header.js');
	var footer = require('../views/footerView.html');

	var Home = {
		initPage: function(){
			this.showView();
		},
		showView: function(){
			var _header = _.template( header );
			$('#header').html( _header() );
			headerjs.initPage();

			var _footer = _.template( footer );
			$('#footer').html( _footer() );
		}
	}
	module.exports = Home;
})