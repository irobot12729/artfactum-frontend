(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Dispatcher = require('./../dispatcher.js');

var Actions = {
  setData: function (data) {
    Dispatcher.setData(data);
  }
};

module.exports = Actions;
},{"./../dispatcher.js":2}],2:[function(require,module,exports){
'use strict';

/*
 * Dispatchers are simple action dispatchers for stores.
 * Stores handle the related action.
 */
 
var Flux = require('delorean').Flux;

 
var store = require('./stores/store.js');
 
var Dispatcher = Flux.createDispatcher({
  setData: function (data) {
    this.dispatch('incoming-data', data);
  },
  getStores: function () {
    return {increment: store};
  }
});

module.exports = Dispatcher;
},{"./stores/store.js":6,"delorean":20}],3:[function(require,module,exports){
'use strict';


var TopNav = React.createClass({displayName: 'TopNav',

  render: function(){
  
    return (
	
	  React.createElement("div", {className: "row top-nav"}, 
		React.createElement("nav", {className: "navbar navbar-default", role: "navigation"}, 
		  React.createElement("div", {className: "navbar-header"}, 
			React.createElement("button", {type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 
			  'data-target': "#af-navbar-collapse-1"}, 
			  React.createElement("span", {className: "sr-only"}, "Navigate"), 
			  React.createElement("span", {className: "icon-bar"}), 
			  React.createElement("span", {className: "icon-bar"}), 
			  React.createElement("span", {className: "icon-bar"})
			), 
			React.createElement("img", {className: "top-logo-holder", src: "images/logo_+_256.png"})
		  ), 
		  React.createElement("div", {className: "collaspe navbar-collapse", id: "af-navbar-collapse-1"}, 
			React.createElement("ul", {className: "nav navbar-nav search-wrapper"}, 
			  React.createElement("li", {className: "active search-box"}, 
				React.createElement("form", {className: "navbar-form navar-left", role: "search"}, 

				  React.createElement("div", {className: "form-group"}, 
					React.createElement("div", {className: "input-group"}, 
					  React.createElement("input", {type: "text", className: "search form-control", placeholder: "Search"}), 
					  React.createElement("span", {className: "input-group-addon glyphicon glyphicon-search"})
					)
				  )
				 
				)
			  ), 
			  
			  React.createElement("li", {className: "dropdown"}, 
				React.createElement("a", {href: "#", className: "top-drop dropdown-toggle", 'data-toggle': "dropdown"}, 
				  React.createElement("span", {className: "glyphicon glyphicon-align-justify"})
				), 
				React.createElement("ul", {className: "dropdown-menu"}, 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something")), 
				  React.createElement("li", {className: "divider"}), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
				  React.createElement("li", {className: "divider"}), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated "))
				)
			  ), 
			  React.createElement("li", null, React.createElement("a", {className: "tabs", href: "#"}, "Browse")), 
			  React.createElement("li", null, React.createElement("a", {className: "tabs", href: "#"}, "Collections")), 
			  React.createElement("li", null, React.createElement("a", {className: "tabs", href: "#"}, "Marketplace"))
			), 
			
			React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
			
			  React.createElement("li", null, React.createElement("a", {href: "#"}, "My Gallery")), 
			  React.createElement("li", null, React.createElement("a", {href: "#"}, "My Marketplace")), 
			  React.createElement("li", {className: "dropdown"}, 
				React.createElement("a", {href: "#", className: "top-drop dropdown-toggle", 'data-toggle': "dropdown"}, 
				  React.createElement("span", {className: "glyphicon glyphicon-search"}), 
				  React.createElement("b", {className: "caret"})
				), 
				React.createElement("ul", {className: "dropdown-menu"}, 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
				  React.createElement("li", {className: "divider"}), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
				)
			  )
			)
		  )/*-- /.navbar-collapse --*/
		
		)
		
	  )
	
	);
  
  }

});

module.exports = TopNav;
},{}],4:[function(require,module,exports){
'use strict';


var Flux = require('delorean').Flux;

var UserProfile = React.createFactory(require('./user-profile.js'));


React.render (

  React.createElement(UserProfile, null),
  document.getElementById('container')

);





},{"./user-profile.js":5,"delorean":20}],5:[function(require,module,exports){
'use strict'


var TopNav = React.createFactory(require('./TopNav'));

var store = require('./../stores/store.js');
var Dispatcher = require('./../dispatcher.js');
var Actions = require('./../actions/actions.js');


//css  
require('../../styles/user-profile.css');
require('../../styles/color-swatch.css');
 

var UserProfile = React.createClass({displayName: 'UserProfile',
  
  getInitialState: function(){
  
    return { username: 'user profile'} 
  
  },
  
  componentDidMount: function(){
  
    this.handleNavCollapse();
	var self = this;
	
	store.onChange(function () {
    
	// End of data cycle.
    // document.getElementById('result').innerText = store.store.data;
      
	  self.setState({username: store.store.data});    
	
    });
  
  },
  
  handleNavCollapse: function(){
	
	$('#af-navbar-collapse-1').collapse('hide');  
	
  },
  
  render: function(){
  
    
    return (
	 
      React.createElement("div", {className: "user-profile"}, 	  
	 
	    React.createElement("div", {className: "container fluid"}, 
	      
		  React.createElement(TopNav, null), /*end first row*/
		 
		  React.createElement("div", {className: "row user-profile-head"}, 
		  
		  
		    React.createElement("div", {className: "col-xs-12"}, 
		    
			  React.createElement("h1", {onClick: this.handleButtonClick, className: "text-center vertical-align"}, 
			  
			    this.state.username, 
			  
			    React.createElement("div", {className: "photo-circle"}, 
				  React.createElement("div", {className: "inner-circle"}, 
				    React.createElement("img", {src: "images/camera.png", alt: "camera", title: "camera"})
				  )
				)
			  )
		    )
		   
		  ), /*end second row*/
		  
		  React.createElement("div", {className: "row user-profile-menu"}, 
		  
		    React.createElement("div", {className: "col-xs-12"}, 
			
			  React.createElement("menu", null, 
			  
			    React.createElement("menuitem", null, "My Account | "), 
			    React.createElement("menuitem", null, "About Me | "), 
			    React.createElement("menuitem", null, "Social | "), 
			    React.createElement("menuitem", null, "Background | "), 
			    React.createElement("menuitem", null, "Interests")
				
			  )
			
			)
			
		  ), /*end third row*/
			
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "My Account"), 
			  React.createElement("strong", {className: ""}, "*required")
	
			)
          
		  ), /*end fourth row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "username"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "username"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
			
			    React.createElement("p", null, "Artfactum url"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "url"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
				
				React.createElement("div", {className: "center-block button-wrapper"}, 
                  React.createElement("div", {className: "btn-group"}, 
				    React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", 'data-toggle': "dropdown"}, 
                      "Artist ", React.createElement("span", {className: "caret"})
                    ), 
                    React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
                      React.createElement("li", null, React.createElement("a", {href: "#"}, "Artist")), 
                      React.createElement("li", null, React.createElement("a", {href: "#"}, "Art Lover"))
                    )
                  )
				)
			
			  )
			
			)			
		  
		  ), /*end fifth row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "About Me")
			 
			)
          
		  ), /*end sixth row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Living in"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "country"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
			
			    React.createElement("p", null, "Spoken languages"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "url"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
				
				React.createElement("p", {className: "gray"}, "Suggestions -",  
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				)
                
			  )
			
			)			
		  
		  ), /*end seventh row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "Social")
			 
			), 
			
		    React.createElement("div", {className: "row center-block"}, 
			
			  React.createElement("div", {className: "col-xs-12 col-md-4 padding1"}, 
			
			    React.createElement("span", {className: "btn-lg btn-primary center-block"}, "Facebook")
			
			  ), 
          
		      React.createElement("div", {className: "col-xs-12 col-md-4 padding1"}, 
			
			    React.createElement("span", {className: "btn-lg btn-primary center-block"}, "Twitter")
			
			  ), 
			
			  React.createElement("div", {className: "col-xs-12 col-md-4 padding1"}, 
			
			    React.createElement("span", {className: "btn-lg btn-primary center-block"}, "Google+")
			
			  )
			
		    )/*end sub-row*/
		  
		  ), /*end eighth row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "Artistic Background")
			 
			)
          
		  ), /*end ninth row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Artistic Disciplines"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "country"})
			  
                ), 
				
				React.createElement("p", {className: "gray"}, "Suggestions -",  
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Photography"), 
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Painting")
				), 
			
			    React.createElement("p", null, "Artistic CV"), 
			    
			    React.createElement("div", {className: "input-group"}, 
			      
				  React.createElement("input", {type: "text", className: "form-control"}), 
				  React.createElement("span", {className: "input-group-btn"}, 
                    React.createElement("button", {className: "btn btn-default", type: "button"}, "Browse")
                  )
                  
                )
				
			  )
			
			)			
		  
		  ), /*end tenth row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
	 	    React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, 
				"Personal Interests"
		      )
			)
			  
		  ), " ", /*end 11th row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-4"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Favorite art styles"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "username"}), 
			      
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				  )
				  
				), 
			
			    React.createElement("p", null, "Featured interests"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "url"}), 
			      
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				  )
                
				), 
				 
				
				React.createElement("p", null, "Influences"), 
			  
				React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "influences"}), 
			     
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Surrealism"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Cubism")
				  )
				
				), 
				
				React.createElement("div", {className: "center-block button-wrapper"}, 
                  React.createElement("div", {className: "btn-group"}, 
				    
					React.createElement("button", {type: "button", className: "btn btn-active"}, 
                      "Save"
                    )
                    
                  )
				
				)
			
			  )
			
			)			
		  
		  ), " ", /*end 12th row*/
		
		  React.createElement("div", {className: "row user-profile-bottom"}, 
		  
		    React.createElement("div", {className: "col-xs-12"}, 
		      
			  React.createElement("div", {className: "user-profile-logo-bottom center-block"}, 
			    React.createElement("img", {className: "img-responsive padding1", src: "images/Logo_AF_vector_white.png", alt: "artfactum logo", title: "artfactum logo"})
		      )
			  
			), 
			
			React.createElement("div", {className: "col-xs-10 col-xs-offset-1 padding1"}, 
			
		      React.createElement("span", null, "About | "), React.createElement("span", null, "Legal | "), React.createElement("span", null, "FAQ | "), React.createElement("span", null, "Developers | "), 
			  React.createElement("span", null, "Ads | "), " ", React.createElement("span", null, "Contact")
		  
		    ), 
			
			React.createElement("div", {className: "col-xs-10 col-xs-offset-1 padding1"}, 
			
		      React.createElement("span", null, "Made with love on assembly")
		  
		    )
		  
		  ), " "/*end 13th row*/
		
		)
		
	  )
		
	);
	
  },
  
  handleButtonClick: function(){
  
    Actions.setData(Math.random());
  
  }
  
});



module.exports = UserProfile;
},{"../../styles/color-swatch.css":7,"../../styles/user-profile.css":8,"./../actions/actions.js":1,"./../dispatcher.js":2,"./../stores/store.js":6,"./TopNav":3}],6:[function(require,module,exports){
'use strict';

var Flux = require('delorean').Flux;


var Store = Flux.createStore({
  data: null,
  setData: function (data) {
    this.data = data;
    this.emit('change');
  },
  actions: {
    'incoming-data': 'setData'
  }
});
var store = new Store();

module.exports = store;
},{"delorean":20}],7:[function(require,module,exports){
var css = "/*color swatch theme for artfactum signup page*/\r\n\r\n.tomato{\r\n  color:#e56e5c;\r\n}\r\n\r\n.tomato-background{\r\n  background:#e5635c;\r\n  color: white;\r\n}\r\n\r\n.dark-gray{\r\n\r\n  color: #3a3a3a;\r\n\r\n}\r\n\r\n.dark-gray-background{\r\n\r\n  background: #3a3a3a;\r\n  color:white;\r\n  \r\n}\r\n\r\n.chrome{\r\n\r\n  color: #d1ccca;\r\n\r\n}\r\n\r\n.chrome-background{\r\n\r\n  background: #d1ccca;\r\n  color: black;\r\n\r\n}\r\n\r\n.gray{\r\n  color: slategray;\r\n}\r\n"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":9}],8:[function(require,module,exports){
var css = "\r\n.top-nav{\r\n\r\n  width: 98%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  background: white;\r\n  \r\n}\r\n\r\n.tabs:active{\r\n\t\r\n\tcolor: tomato;\r\n\tbox-shadow: inset 0px -5px blue;\r\n    -webkit-transition: all 0.15s linear;\r\n\ttransition: all 0.15s linear;\r\n\t\r\n}\r\n\r\n.tabs:focus{\r\n\tcolor: tomato;\r\n\tbox-shadow: inset 0px -5px tomato;\r\n\r\n}\r\n\r\n\r\n.navbar{\r\n  background: white;\r\n  border: none;\r\n}\r\n\r\n.search{\r\n\r\n  border: none;\r\n  outline: none;\r\n  \r\n}\r\n\r\n.search-box{\r\n\r\n  overflow:hidden; \r\n\r\n}\r\n\r\n.user-profile-head{\r\n\r\n  height: 14em;\r\n  background: purple;\r\n  background-image: url(../images/mohai.jpg);\r\n \r\n\r\n}\r\n\r\n.user-profile-head h1{\r\n\r\n  position: relative;\r\n  top:1.5em;\r\n  width:100%;\r\n  height:7em;\r\n  color: white;\r\n \r\n}\r\n\r\n.photo-circle{\r\n  position:relative;\r\n  top:1em;\r\n  border: solid #eee 4px;\r\n  box-shadow: 0 0 4px 1px white;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  display:block;\r\n  overflow:hidden;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  display:cover;\r\n  background: white;\r\n}\r\n\r\n.inner-circle{\r\n\r\n  position:absolute;\r\n  z-index:9999;\r\n  width:100%;\r\n  height:100%;\r\n  top: .75em;\r\n}\r\n\r\n.user-profile-bottom{\r\n\r\n  position:relative;\r\n  top:300px;\r\n  height: 14em;\r\n  overflow:hidden;\r\n  background: #3a3a3a;\r\n  color:white;\r\n\r\n}\r\n\r\n\r\n\r\n.user-profile-forms{\r\n\r\n  width: 80%;\r\n  top:1em;\r\n\r\n}\r\n\r\n/*make width wider on wider screens*/\r\n\r\n.user-profile-forms article{\r\n  top:2em;\r\n  left:0; \r\n  width:90%;\r\n  height: 270px;\r\n \r\n}\r\n\r\narticle p{\r\n  margin-top:1em;\r\n}\r\n\r\narticle .btn-group{\r\n\r\n  margin-left:5em;\r\n  margin-right:5em;\r\n\r\n}\r\n\r\n.dropdown-toggle{\r\n  background:tomato;\r\n  color:white;\r\n}\r\n\r\n.button-wrapper{\r\n  position:relative;\r\n  top:1em;\r\n  width:100%;\r\n}\r\n\r\n.user-profile-logo-bottom{\r\n\r\n  width:200px;\r\n\r\n}\r\n\r\n.user-profile-top-logo{\r\n\r\n  width:3em;\r\n\r\n}\r\n\r\n.user-profile-search{\r\n  padding-top:.5em;\r\n}\r\n\r\n.top-logo-holder{\r\n  width: 50px;\r\n  height:50px;\r\n  \r\n}\r\n\r\n.article{\r\n  position: relative;\r\n  width:400px;\r\n  border: solid pink 1px;\r\n}\r\n\r\n\r\n\r\n.top-drop, .top-drop:active{\r\n\r\n  background: inherit;\r\n   \r\n}\r\n\r\n.top-drop:hover{\r\n  background: #d1ccca;\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":9}],9:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],10:[function(require,module,exports){
"use strict";
var Promise = require("./promise/promise").Promise;
var polyfill = require("./promise/polyfill").polyfill;
exports.Promise = Promise;
exports.polyfill = polyfill;
},{"./promise/polyfill":14,"./promise/promise":15}],11:[function(require,module,exports){
"use strict";
/* global toString */

var isArray = require("./utils").isArray;
var isFunction = require("./utils").isFunction;

/**
  Returns a promise that is fulfilled when all the given promises have been
  fulfilled, or rejected if any of them become rejected. The return promise
  is fulfilled with an array that gives all the values in the order they were
  passed in the `promises` array argument.

  Example:

  ```javascript
  var promise1 = RSVP.resolve(1);
  var promise2 = RSVP.resolve(2);
  var promise3 = RSVP.resolve(3);
  var promises = [ promise1, promise2, promise3 ];

  RSVP.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `RSVP.all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  var promise1 = RSVP.resolve(1);
  var promise2 = RSVP.reject(new Error("2"));
  var promise3 = RSVP.reject(new Error("3"));
  var promises = [ promise1, promise2, promise3 ];

  RSVP.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @for RSVP
  @param {Array} promises
  @param {String} label
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
*/
function all(promises) {
  /*jshint validthis:true */
  var Promise = this;

  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to all.');
  }

  return new Promise(function(resolve, reject) {
    var results = [], remaining = promises.length,
    promise;

    if (remaining === 0) {
      resolve([]);
    }

    function resolver(index) {
      return function(value) {
        resolveAll(index, value);
      };
    }

    function resolveAll(index, value) {
      results[index] = value;
      if (--remaining === 0) {
        resolve(results);
      }
    }

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && isFunction(promise.then)) {
        promise.then(resolver(i), reject);
      } else {
        resolveAll(i, promise);
      }
    }
  });
}

exports.all = all;
},{"./utils":19}],12:[function(require,module,exports){
(function (process,global){
"use strict";
var browserGlobal = (typeof window !== 'undefined') ? window : {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

// node
function useNextTick() {
  return function() {
    process.nextTick(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function() {
    node.data = (iterations = ++iterations % 2);
  };
}

function useSetTimeout() {
  return function() {
    local.setTimeout(flush, 1);
  };
}

var queue = [];
function flush() {
  for (var i = 0; i < queue.length; i++) {
    var tuple = queue[i];
    var callback = tuple[0], arg = tuple[1];
    callback(arg);
  }
  queue = [];
}

var scheduleFlush;

// Decide what async method to use to triggering processing of queued callbacks:
if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else {
  scheduleFlush = useSetTimeout();
}

function asap(callback, arg) {
  var length = queue.push([callback, arg]);
  if (length === 1) {
    // If length is 1, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    scheduleFlush();
  }
}

exports.asap = asap;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":23}],13:[function(require,module,exports){
"use strict";
var config = {
  instrument: false
};

function configure(name, value) {
  if (arguments.length === 2) {
    config[name] = value;
  } else {
    return config[name];
  }
}

exports.config = config;
exports.configure = configure;
},{}],14:[function(require,module,exports){
(function (global){
"use strict";
/*global self*/
var RSVPPromise = require("./promise").Promise;
var isFunction = require("./utils").isFunction;

function polyfill() {
  var local;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof window !== 'undefined' && window.document) {
    local = window;
  } else {
    local = self;
  }

  var es6PromiseSupport = 
    "Promise" in local &&
    // Some of these methods are missing from
    // Firefox/Chrome experimental implementations
    "resolve" in local.Promise &&
    "reject" in local.Promise &&
    "all" in local.Promise &&
    "race" in local.Promise &&
    // Older version of the spec had a resolver object
    // as the arg rather than a function
    (function() {
      var resolve;
      new local.Promise(function(r) { resolve = r; });
      return isFunction(resolve);
    }());

  if (!es6PromiseSupport) {
    local.Promise = RSVPPromise;
  }
}

exports.polyfill = polyfill;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./promise":15,"./utils":19}],15:[function(require,module,exports){
"use strict";
var config = require("./config").config;
var configure = require("./config").configure;
var objectOrFunction = require("./utils").objectOrFunction;
var isFunction = require("./utils").isFunction;
var now = require("./utils").now;
var all = require("./all").all;
var race = require("./race").race;
var staticResolve = require("./resolve").resolve;
var staticReject = require("./reject").reject;
var asap = require("./asap").asap;

var counter = 0;

config.async = asap; // default async is asap;

function Promise(resolver) {
  if (!isFunction(resolver)) {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  if (!(this instanceof Promise)) {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  this._subscribers = [];

  invokeResolver(resolver, this);
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value, error, succeeded, failed;

  if (hasCallback) {
    try {
      value = callback(detail);
      succeeded = true;
    } catch(e) {
      failed = true;
      error = e;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (handleThenable(promise, value)) {
    return;
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    resolve(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

var PENDING   = void 0;
var SEALED    = 0;
var FULFILLED = 1;
var REJECTED  = 2;

function subscribe(parent, child, onFulfillment, onRejection) {
  var subscribers = parent._subscribers;
  var length = subscribers.length;

  subscribers[length] = child;
  subscribers[length + FULFILLED] = onFulfillment;
  subscribers[length + REJECTED]  = onRejection;
}

function publish(promise, settled) {
  var child, callback, subscribers = promise._subscribers, detail = promise._detail;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    invokeCallback(settled, child, callback, detail);
  }

  promise._subscribers = null;
}

Promise.prototype = {
  constructor: Promise,

  _state: undefined,
  _detail: undefined,
  _subscribers: undefined,

  then: function(onFulfillment, onRejection) {
    var promise = this;

    var thenPromise = new this.constructor(function() {});

    if (this._state) {
      var callbacks = arguments;
      config.async(function invokePromiseCallback() {
        invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
      });
    } else {
      subscribe(this, thenPromise, onFulfillment, onRejection);
    }

    return thenPromise;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = all;
Promise.race = race;
Promise.resolve = staticResolve;
Promise.reject = staticReject;

function handleThenable(promise, value) {
  var then = null,
  resolved;

  try {
    if (promise === value) {
      throw new TypeError("A promises callback cannot return that same promise.");
    }

    if (objectOrFunction(value)) {
      then = value.then;

      if (isFunction(then)) {
        then.call(value, function(val) {
          if (resolved) { return true; }
          resolved = true;

          if (value !== val) {
            resolve(promise, val);
          } else {
            fulfill(promise, val);
          }
        }, function(val) {
          if (resolved) { return true; }
          resolved = true;

          reject(promise, val);
        });

        return true;
      }
    }
  } catch (error) {
    if (resolved) { return true; }
    reject(promise, error);
    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value) {
    fulfill(promise, value);
  } else if (!handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) { return; }
  promise._state = SEALED;
  promise._detail = value;

  config.async(publishFulfillment, promise);
}

function reject(promise, reason) {
  if (promise._state !== PENDING) { return; }
  promise._state = SEALED;
  promise._detail = reason;

  config.async(publishRejection, promise);
}

function publishFulfillment(promise) {
  publish(promise, promise._state = FULFILLED);
}

function publishRejection(promise) {
  publish(promise, promise._state = REJECTED);
}

exports.Promise = Promise;
},{"./all":11,"./asap":12,"./config":13,"./race":16,"./reject":17,"./resolve":18,"./utils":19}],16:[function(require,module,exports){
"use strict";
/* global toString */
var isArray = require("./utils").isArray;

/**
  `RSVP.race` allows you to watch a series of promises and act as soon as the
  first promise given to the `promises` argument fulfills or rejects.

  Example:

  ```javascript
  var promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 1");
    }, 200);
  });

  var promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 2");
    }, 100);
  });

  RSVP.race([promise1, promise2]).then(function(result){
    // result === "promise 2" because it was resolved before promise1
    // was resolved.
  });
  ```

  `RSVP.race` is deterministic in that only the state of the first completed
  promise matters. For example, even if other promises given to the `promises`
  array argument are resolved, but the first completed promise has become
  rejected before the other promises became fulfilled, the returned promise
  will become rejected:

  ```javascript
  var promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 1");
    }, 200);
  });

  var promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error("promise 2"));
    }, 100);
  });

  RSVP.race([promise1, promise2]).then(function(result){
    // Code here never runs because there are rejected promises!
  }, function(reason){
    // reason.message === "promise2" because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  @method race
  @for RSVP
  @param {Array} promises array of promises to observe
  @param {String} label optional string for describing the promise returned.
  Useful for tooling.
  @return {Promise} a promise that becomes fulfilled with the value the first
  completed promises is resolved with if the first completed promise was
  fulfilled, or rejected with the reason that the first completed promise
  was rejected with.
*/
function race(promises) {
  /*jshint validthis:true */
  var Promise = this;

  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to race.');
  }
  return new Promise(function(resolve, reject) {
    var results = [], promise;

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
}

exports.race = race;
},{"./utils":19}],17:[function(require,module,exports){
"use strict";
/**
  `RSVP.reject` returns a promise that will become rejected with the passed
  `reason`. `RSVP.reject` is essentially shorthand for the following:

  ```javascript
  var promise = new RSVP.Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  var promise = RSVP.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @for RSVP
  @param {Any} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become rejected with the given
  `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Promise = this;

  return new Promise(function (resolve, reject) {
    reject(reason);
  });
}

exports.reject = reject;
},{}],18:[function(require,module,exports){
"use strict";
function resolve(value) {
  /*jshint validthis:true */
  if (value && typeof value === 'object' && value.constructor === this) {
    return value;
  }

  var Promise = this;

  return new Promise(function(resolve) {
    resolve(value);
  });
}

exports.resolve = resolve;
},{}],19:[function(require,module,exports){
"use strict";
function objectOrFunction(x) {
  return isFunction(x) || (typeof x === "object" && x !== null);
}

function isFunction(x) {
  return typeof x === "function";
}

function isArray(x) {
  return Object.prototype.toString.call(x) === "[object Array]";
}

// Date.now is not available in browsers < IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
var now = Date.now || function() { return new Date().getTime(); };


exports.objectOrFunction = objectOrFunction;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.now = now;
},{}],20:[function(require,module,exports){
(function (DeLorean) {
  'use strict';

  // There are two main concepts in Flux structure: **Dispatchers** and **Stores**.
  // Action Creators are simply helpers but doesn't require any framework level
  // abstraction.

  var Dispatcher, Store;

  // ## Private Helper Functions

  // Helper functions are private functions to be used in codebase.
  // It's better using two underscore at the beginning of the function.

  /* `__hasOwn` function is a shortcut for `Object#hasOwnProperty` */
  function __hasOwn(object, prop) {
    return Object.prototype.hasOwnProperty.call(object, prop);
  }

  // Use `__generateActionName` function to generate action names.
  // E.g. If you create an action with name `hello` it will be
  // `action:hello` for the Flux.
  function __generateActionName(name) {
    return 'action:' + name;
  }

  /* It's used by the schemes to save the original version (not calculated)
     of the data. */
  function __generateOriginalName(name) {
    return 'original:' + name;
  }

  // `__findDispatcher` is a private function for **React components**.
  function __findDispatcher(view) {
     // Provide a useful error message if no dispatcher is found in the chain
    if (view == null) {
      throw 'No disaptcher found. The DeLoreanJS mixin requires a "dispatcher" property to be passed to a component, or one of it\'s ancestors.';
    }
    /* `view` should be a component instance. If a component don't have
        any dispatcher, it tries to find a dispatcher from the parents. */
    if (!view.props.dispatcher) {
      return __findDispatcher(view._owner);
    }
    return view.props.dispatcher;
  }

  // ## Dispatcher

  // The dispatcher is **the central hub** that **manages all data flow** in
  // a Flux application. It is essentially a _registry of callbacks into the
  // stores_. Each store registers itself and provides a callback. When the
  // dispatcher responds to an action, all stores in the application are sent
  // the data payload provided by the action via the callbacks in the registry.
  Dispatcher = (function () {

    // ### Dispatcher Helpers

    // Rollback listener adds a `rollback` event listener to the bunch of
    // stores.
    function __rollbackListener(stores) {

      function __listener() {
        for (var i in stores) {
          stores[i].listener.emit('__rollback');
        }
      }

      /* If any of them fires `rollback` event, all of the stores
         will be emitted to be rolled back with `__rollback` event. */
      for (var j in stores) {
        stores[j].listener.on('rollback', __listener);
      }
    }

    // ### Dispatcher Prototype
    function Dispatcher(stores) {
      var self = this;
      // `DeLorean.EventEmitter` is `require('events').EventEmitter` by default.
      // you can change it using `DeLorean.Flux.define('EventEmitter', AnotherEventEmitter)`
      this.listener = new DeLorean.EventEmitter();
      this.stores = stores;

      /* Stores should be listened for rollback events. */
      __rollbackListener(Object.keys(stores).map(function (key) {
        return stores[key];
      }));
    }

    // `dispatch` method dispatch the event with `data` (or **payload**)
    Dispatcher.prototype.dispatch = function (actionName, data) {
      var self = this, stores, deferred;

      /* Stores are key-value pairs. Collect store instances into an array. */
      stores = (function () {
        var stores = [], store;
        for (var storeName in self.stores) {
          store = self.stores[storeName];
          /* Store value must be an _instance of Store_. */
          if (!store instanceof Store) {
            throw 'Given store is not a store instance';
          }
          stores.push(store);
        }
        return stores;
      }());

      // Store instances should wait for finish. So you can know if all the
      // stores are dispatched properly.
      deferred = this.waitFor(stores, actionName);

      /* Payload should send to all related stores. */
      for (var storeName in self.stores) {
        self.stores[storeName].dispatchAction(actionName, data);
      }

      // `dispatch` returns deferred object you can just use **promise**
      // for dispatching: `dispatch(..).then(..)`.
      return deferred;
    };

    // `waitFor` is actually a _semi-private_ method. Because it's kind of internal
    // and you don't need to call it from outside most of the times. It takes
    // array of store instances (`[Store, Store, Store, ...]`). It will create
    // a promise and return it. _Whenever store changes, it resolves the promise_.
    Dispatcher.prototype.waitFor = function (stores, actionName) {
      var self = this, promises;
      promises = (function () {
        var __promises = [], promise;

        /* `__promiseGenerator` generates a simple promise that resolves itself when
            related store is changed. */
        function __promiseGenerator(store) {
          // `DeLorean.Promise` is `require('es6-promise').Promise` by default.
          // you can change it using `DeLorean.Flux.define('Promise', AnotherPromise)`
          return new DeLorean.Promise(function (resolve, reject) {
            store.listener.once('change', resolve);
          });
        }

        for (var i in stores) {
          // Only generate promises for stores that ae listening for this action
          if (stores[i].store.actions[actionName] != null) {
            promise = __promiseGenerator(stores[i]);
            __promises.push(promise);
          }
        }
        return __promises;
      }());
      // When all the promises are resolved, dispatcher emits `change:all` event.
      return DeLorean.Promise.all(promises).then(function () {
        self.listener.emit('change:all');
      });
    };

    // `registerAction` method adds a method to the prototype. So you can just use
    // `dispatcherInstance.actionName()`.
    Dispatcher.prototype.registerAction = function (action, callback) {
      /* The callback must be a function. */
      if (typeof callback === 'function') {
        this[action] = callback.bind(this.stores);
      } else {
        throw 'Action callback should be a function.';
      }
    };

    // `getStore` returns the store from stores hash.
    // You can also use `dispatcherInstance.stores[storeName]` but
    // it checks if the store really exists.
    Dispatcher.prototype.getStore = function (storeName) {
      if (!this.stores[storeName]) {
        throw 'Store ' + storeName + ' does not exist.';
      }
      return this.stores[storeName].store;
    };

    // ### Shortcuts

    Dispatcher.prototype.on = function () {
      return this.listener.on.apply(this.listener, arguments);
    };

    Dispatcher.prototype.off = function () {
      return this.listener.removeListener.apply(this.listener, arguments);
    };

    Dispatcher.prototype.emit = function () {
      return this.listener.emit.apply(this.listener, arguments);
    };

    return Dispatcher;
  }());

  // ## Store

  // Stores contain the application state and logic. Their role is somewhat similar
  // to a model in a traditional MVC, but they manage the state of many objects.
  // Unlike MVC models, they are not instances of one object, nor are they the
  // same as Backbone's collections. More than simply managing a collection of
  // ORM-style objects, stores manage the application state for a particular
  // domain within the application.
  Store = (function () {

    // ### Store Prototype
    function Store(store, args) {
      /* store parameter must be an `object` */
      if (typeof store !== 'object') {
        throw 'Stores should be defined by passing the definition to the constructor';
      }

      // `DeLorean.EventEmitter` is `require('events').EventEmitter` by default.
      // you can change it using `DeLorean.Flux.define('EventEmitter', AnotherEventEmitter)`
      this.listener = new DeLorean.EventEmitter();

      /* Store is _hygenic_ object. DeLorean doesn't extend it, it uses it. */
      this.store = store;
      this.bindActions();
      this.buildScheme();

      // `initialize` is the construction function, you can define `initialize` method
      // in your store definitions.
      if (typeof store.initialize === 'function') {
        store.initialize.apply(this.store, args);
      }
    }

     // `set` method updates the data defined at the `scheme` of the store.
    Store.prototype.set = function (arg1, value) {
      var changedProps = [];
      if (typeof arg1 === 'object') {
        for (var keyName in arg1) {
          changedProps.push(keyName);
          this.setValue(keyName, arg1[keyName]);
        }
      } else {
        changedProps.push(arg1);
        this.setValue(arg1, value);
      }
      this.recalculate(changedProps);
      return this.store[arg1];
    };

    // `set` method updates the data defined at the `scheme` of the store.
    Store.prototype.setValue = function (key, value) {
      var scheme = this.store.scheme, definition;
      if (scheme && this.store.scheme[key]) {
        definition = scheme[key];

        this.store[key] = value || definition.default;

        if (typeof definition.calculate === 'function') {
          this.store[__generateOriginalName(key)] = value;
          this.store[key] = definition.calculate.call(this.store, value);
        }
      } else {
        // Scheme **must** include the key you wanted to set.
        if (console != null) {
          console.warn('Scheme must include the key, ' + key + ', you are trying to set. ' + key + ' will NOT be set on the store.');
        }
      }
      return this.store[key];
    };

    // Removes the scheme format and standardizes all the shortcuts.
    // If you run `formatScheme({name: 'joe'})` it will return you
    // `{name: {default: 'joe'}}`. Also if you run `formatScheme({fullname: function () {}})`
    // it will return `{fullname: {calculate: function () {}}}`.
    Store.prototype.formatScheme = function (scheme) {
      var formattedScheme = {}, definition, defaultValue, calculatedValue;
      for (var keyName in scheme) {
        definition = scheme[keyName];
        defaultValue = null;
        calculatedValue = null;

        formattedScheme[keyName] = {default: null};

        /* {key: 'value'} will be {key: {default: 'value'}} */
        defaultValue = (definition && typeof definition === 'object') ?
                        definition.default : definition;
        formattedScheme[keyName].default = defaultValue;

        /* {key: function () {}} will be {key: {calculate: function () {}}} */
        if (definition && typeof definition.calculate === 'function') {
          calculatedValue = definition.calculate;
          /* Put a dependency array on formattedSchemes with calculate defined */
          if (definition.deps) {
            formattedScheme[keyName].deps = definition.deps;
          } else {
            formattedScheme[keyName].deps = [];
          }

        } else if (typeof definition === 'function') {
          calculatedValue = definition;
        }
        if (calculatedValue) {
          formattedScheme[keyName].calculate = calculatedValue;
        }
      }
      return formattedScheme;
    };

    /* Applying `scheme` to the store if exists. */
    Store.prototype.buildScheme = function () {
      var scheme, calculatedData, keyName, definition, dependencyMap, dependents, dep, changedProps = [];

      if (typeof this.store.scheme === 'object') {
        /* Scheme must be formatted to standardize the keys. */
        scheme = this.store.scheme = this.formatScheme(this.store.scheme);
        dependencyMap = this.store.__dependencyMap = {};

        /* Set the defaults first */
        for (keyName in scheme) {
          definition = scheme[keyName];
          this.store[keyName] = definition.default;
        }

        /* Set the calculations */
        for (keyName in scheme) {
          definition = scheme[keyName];
          if (definition.calculate) {
            // Create a dependency map - {keyName: [arrayOfKeysThatDependOnIt]}
            dependents = definition.deps || [];

            for (var i = 0; i < dependents.length; i++) {
              dep = dependents[i];
              if (dependencyMap[dep] == null) {
                dependencyMap[dep] = [];
              }
              dependencyMap[dep].push(keyName);
            }

            this.store[__generateOriginalName(keyName)] = definition.default;
            this.store[keyName] = definition.calculate.call(this.store, definition.default);
            changedProps.push(keyName);
          }
        }
        // Recalculate any properties dependent on those that were just set
        this.recalculate(changedProps);
      }
    };

    Store.prototype.recalculate = function (changedProps) {
      var scheme = this.store.scheme, dependencyMap = this.store.__dependencyMap, didRun = [], definition, keyName, dependents, dep;
      // Only iterate over the properties that just changed
      for (var i = 0; i < changedProps.length; i++) {
        dependents = dependencyMap[changedProps[i]];
        // If there are no properties dependent on this property, do nothing
        if (dependents == null) {
          continue;
        }
        // Iterate over the dependendent properties
        for (var d = 0; d < dependents.length; d++) {
          dep = dependents[d];
          // Do nothing if this value has already been recalculated on this change batch
          if (didRun.indexOf(dep) !== -1) {
            continue;
          }
          // Calculate this value
          definition = scheme[dep];
          this.store[dep] = definition.calculate.call(this.store,
                                this.store[__generateOriginalName(dep)] || definition.default);

          // Make sure this does not get calculated again in this change batch
          didRun.push(dep);
        }
      }
      // Update Any deps on the deps
      if (didRun.length > 0) {
        this.recalculate(didRun);
      }
      this.listener.emit('change');
    };

    // `bindActions` is semi-private method. You'll never need to call it from outside.
    // It powers up the `this.store` object.
    Store.prototype.bindActions = function () {
      var callback;

      // Some required methods can be used in **store definition** like
      // **`emit`**, **`emitChange`**, **`emitRollback`**, **`rollback`**, **`listenChanges`**
      this.store.emit = this.listener.emit.bind(this.listener);
      this.store.emitChange = this.listener.emit.bind(this.listener, 'change');
      this.store.emitRollback = this.listener.emit.bind(this.listener, 'rollback');
      this.store.rollback = this.listener.on.bind(this.listener, '__rollback');
      this.store.listenChanges = this.listenChanges.bind(this);
      this.store.set = this.set.bind(this);

      // Stores must have a `actions` hash of `actionName: methodName`
      // `methodName` is the `this.store`'s prototype method..
      for (var actionName in this.store.actions) {
        if (__hasOwn(this.store.actions, actionName)) {
          callback = this.store.actions[actionName];
          if (typeof this.store[callback] !== 'function') {
            throw 'Callback \'' + callback + '\' defined for action \'' + actionName + '\' should be a method defined on the store!';
          }
          /* And `actionName` should be a name generated by `__generateActionName` */
          this.listener.on(__generateActionName(actionName),
                           this.store[callback].bind(this.store));
        }
      }
    };

    // `dispatchAction` called from a dispatcher. You can also call anywhere but
    // you probably won't need to do. It simply **emits an event with a payload**.
    Store.prototype.dispatchAction = function (actionName, data) {
      this.listener.emit(__generateActionName(actionName), data);
    };

    // ### Shortcuts

    // `listenChanges` is a shortcut for `Object.observe` usage. You can just use
    // `Object.observe(object, function () { ... })` but everytime you use it you
    // repeat yourself. DeLorean has a shortcut doing this properly.
    Store.prototype.listenChanges = function (object) {
      var self = this, observer;
      if (!Object.observe) {
        console.error('Store#listenChanges method uses Object.observe, you should fire changes manually.');
        return;
      }

      observer = Array.isArray(object) ? Array.observe : Object.observe;

      observer(object, function (changes) {
        self.listener.emit('change', changes);
      });
    };

    // `onChange` simply listens changes and calls a callback. Shortcut for
    // a `on('change')` command.
    Store.prototype.onChange = function (callback) {
      this.listener.on('change', callback);
    };

    return Store;
  }());

  // ### Flux Wrapper
  DeLorean.Flux = {

    // `createStore` **creates a function to create a store**. So it's like
    // a factory.
    createStore: function (factoryDefinition) {
      return function () {
        return new Store(factoryDefinition, arguments);
      };
    },

    // `createDispatcher` generates a dispatcher with actions to dispatch.
    /* `actionsToDispatch` should be an object. */
    createDispatcher: function (actionsToDispatch) {
      var actionsOfStores, dispatcher, callback, triggers, triggerMethod;

      // If it has `getStores` method it should be get and pass to the `Dispatcher`
      if (typeof actionsToDispatch.getStores === 'function') {
        actionsOfStores = actionsToDispatch.getStores();
      }

      /* If there are no stores defined, it's an empty object. */
      dispatcher = new Dispatcher(actionsOfStores || {});

      /* Now call `registerAction` method for every action. */
      for (var actionName in actionsToDispatch) {
        if (__hasOwn(actionsToDispatch, actionName)) {
          /* `getStores` & `viewTriggers` are special properties, it's not an action. */
          if (actionName !== 'getStores' && actionName != 'viewTriggers') {
            callback = actionsToDispatch[actionName];
            dispatcher.registerAction(actionName, callback.bind(dispatcher));
          }
        }
      }

      /* Bind triggers */
      triggers = actionsToDispatch.viewTriggers;
      for (var triggerName in triggers) {
        triggerMethod = triggers[triggerName];
        if (typeof dispatcher[triggerMethod] === 'function') {
          dispatcher.on(triggerName, dispatcher[triggerMethod]);
        } else {
          if (console != null) {
            console.warn(triggerMethod + ' should be a method defined on your dispatcher. The ' + triggerName + ' trigger will not be bound to any method.');
          }
        }
      }

      return dispatcher;
    },
    // ### `DeLorean.Flux.define`
    // It's a key to _hack_ DeLorean easily. You can just inject something
    // you want to define.
    define: function (key, value) {
      DeLorean[key] = value;
    }
  };

  // Store and Dispatcher are the only base classes of DeLorean.
  DeLorean.Dispatcher = Dispatcher;
  DeLorean.Store = Store;

  // ## Built-in React Mixin
  DeLorean.Flux.mixins = {
    // It should be inserted to the React components which
    // used in Flux.
    // Simply `mixin: [Flux.mixins.storeListener]` will work.
    storeListener: {

      trigger: function () {
        this.__dispatcher.emit.apply(this.__dispatcher, arguments);
      },

      // After the component mounted, listen changes of the related stores
      componentDidMount: function () {
        var self = this, store, storeName;

        /* `__changeHandler` is a **listener generator** to pass to the `onChange` function. */
        function __changeHandler(store, storeName) {
          return function () {
            var state, args;
            /* If the component is mounted, change state. */
            if (self.isMounted()) {
              self.setState(self.getStoreStates());
            }
            // When something changes it calls the components `storeDidChanged` method if exists.
            if (self.storeDidChange) {
              args = [storeName].concat(Array.prototype.slice.call(arguments, 0));
              self.storeDidChange.apply(self, args);
            }
          };
        }

        // Remember the change handlers so they can be removed later
        this.__changeHandlers = {};

        /* Generate and bind the change handlers to the stores. */
        for (storeName in this.__watchStores) {
          if (__hasOwn(this.stores, storeName)) {
            store = this.stores[storeName];
            this.__changeHandlers[storeName] = __changeHandler(store, storeName);
            store.onChange(this.__changeHandlers[storeName]);
          }
        }
      },

      // When a component unmounted, it should stop listening.
      componentWillUnmount: function () {
        for (var storeName in this.__changeHandlers) {
          if (__hasOwn(this.stores, storeName)) {
            var store = this.stores[storeName];
            store.listener.removeListener('change', this.__changeHandlers[storeName]);
          }
        }
      },

      getInitialState: function () {
        var self = this, state, storeName;

        /* The dispatcher should be easy to access and it should use `__findDispatcher`
           method to find the parent dispatchers. */
        this.__dispatcher = __findDispatcher(this);

        // If `storesDidChange` method presents, it'll be called after all the stores
        // were changed.
        if (this.storesDidChange) {
          this.__dispatcher.on('change:all', function () {
            self.storesDidChange();
          });
        }

        // Since `dispatcher.stores` is harder to write, there's a shortcut for it.
        // You can use `this.stores` from the React component.
        this.stores = this.__dispatcher.stores;

        this.__watchStores = {};
        if (this.watchStores != null) {
          for (var i = 0; i < this.watchStores.length;  i++) {
            storeName = this.watchStores[i];
            this.__watchStores[storeName] = this.stores[storeName];
          }
        } else {
          this.__watchStores = this.stores;
          if (console != null && Object.keys != null && Object.keys(this.stores).length > 4) {
            console.warn('Your component is watching changes on all stores, you may want to define a "watchStores" property in order to only watch stores relevant to this component.');
          }
        }

        return this.getStoreStates();
      },

      getStoreStates: function () {
        var state = {stores: {}}, store;

        /* Set `state.stores` for all present stores with a `setState` method defined. */
        for (var storeName in this.__watchStores) {
          if (__hasOwn(this.stores, storeName)) {
            state.stores[storeName] = {};
            store = this.__watchStores[storeName].store;
            if (store && store.getState) {
              state.stores[storeName] = store.getState();
            } else if (typeof store.scheme === 'object') {
              var scheme = store.scheme;
              for (var keyName in scheme) {
                state.stores[storeName][keyName] = store[keyName];
              }
            }
          }
        }
        return state;
      },

      // `getStore` is a shortcut to get the store from the state.
      getStore: function (storeName) {
        return this.state.stores[storeName];
      }
    }
  };

  // ## DeLorean API
  // DeLorean can be used in **CommonJS** projects.
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {

    var requirements = require('./requirements');
    for (var requirement in requirements) {
      DeLorean.Flux.define(requirement, requirements[requirement]);
    }
    module.exports = DeLorean;

  // It can be also used in **AMD** projects, too.
  // And if there is no module system initialized, just pass the DeLorean
  // to the `window`.
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return DeLorean;
      });
    } else {
      window.DeLorean = DeLorean;
    }
  }

})({});

},{"./requirements":21}],21:[function(require,module,exports){
// ## Dependency injection file.

// You can change dependencies using `DeLorean.Flux.define`. There are
// two dependencies now: `EventEmitter` and `Promise`
var requirements;

module.exports = requirements = {
  // DeLorean uses **Node.js native EventEmitter** for event emittion
  EventEmitter: require('events').EventEmitter,
  // and **es6-promise** for Deferred object management.
  Promise: require('es6-promise').Promise
};
// It's better you don't change them if you really need to.

// This library needs to work for Browserify and also standalone.
// If DeLorean is defined, it means it's called from the browser, not
// the browserify.
if (typeof DeLorean !== 'undefined') {
  for (var requirement in requirements) {
    DeLorean.Flux.define(requirement, requirements[requirement]);
  }
}

},{"es6-promise":10,"events":22}],22:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],23:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[4]);
