/**
* @license
* Retinize by web-engineer - http://www.web-engineer.co.uk	
* This work is licensed under a Creative Commons Attribution 3.0 Unported License.
* 
* http://creativecommons.org/licenses/by/3.0/
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Retinize = {
	Version: '0.0.2',
	supported:[],
	isSupported:null,
	density:null,
	//container for supported responsive layouts
	supportedLayouts:[],
	//the default layout
	currentLayout:'',
	//the current browser width (0 if unchecked)
	width:0,
	/**
	 * will write out an <img/> tag with high density image link if supported
	 * note - the naming convention for images is 
	 * [YOURFILE]-x[DENSITY].[EXTENSION]
	 * e.g. my.png will be converted to my-x2.png at double density
	 * @param src:String path to image
	 * @param width:Number at density of 1
	 * @param height:Number at density of 1 
	 * @param attributes:Object aditional attributes (optional)
	 */
	get:function(src, width, height, attributes){
		//check pixel density
		var img = '<img ';
		if(!Retinize.density) Retinize.density = (window.devicePixelRatio === undefined) ? 1 : window.devicePixelRatio;
		//which scale factor, the nearest or next heighest density available
		var sf = 1;
		if(Retinize.supported.length>1){
			// consider options
			for(var i=0; i<Retinize.supported.length; i++){
				if(Retinize.match(Retinize.supported[i])){
					sf =  Retinize.supported[i];
					break;
				}
			}
		}else{
			// only use this density if were within a reasonable multiple 
			// of the available density, prevents excessive bandwidth use
			if(Math.floor(Retinize.supported[0])===Math.ceil(Math.round(Retinize.density))){
				sf = Retinize.supported[0];
			}
		}
		if(sf>1){
			src = src.replace(/(.*)\.(gif|jpg|jpeg|png)/i,'$1-x'+sf+'.$2');
		}
		img+='src="'+src+'" ';
		if(typeof attributes === "object"){
			for(var prop in attributes){
				img+=prop+'="'+attributes[prop]+'" ';
			}
		}
		img+='width="'+width+'" ';
		img+='height="'+height+'" ';
		img += ' />';
		document.write(img);
	},
	/**
	 * add support for a given pixel density
	 * @param density:Number
	 * @param css:String 
	 */
	support:function(density,css){
		//check supported status
		if(typeof Retinize.isSupported!=="boolean"){
			var rv = -1; // Return value assumes good browser.
			// IE8 or earlier we will not support 
			if (navigator.appName === 'Microsoft Internet Explorer'){
				var ua = navigator.userAgent;
				var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
				if (re.exec(ua) !== null) rv = parseFloat( RegExp.$1 );
				Retinize.isSupported = rv>8;
			}else{
				Retinize.isSupported = true;
			}
		}
		if(Retinize.isSupported === true){
			var sheet = document.createElement('link');
			sheet.rel = 'stylesheet';
			sheet.media = 'only screen and (min-resolution: '+density+'dppx), only screen and (min--moz-device-pixel-ratio: '+density+'), only screen and (-o-min-device-pixel-ratio: '+density+'/1), only screen and (-webkit-min-device-pixel-ratio: '+density+'), only screen and (min-device-pixel-ratio: '+density+')';
			sheet.href = css;
			// we include all options so that the user agent could choose to switch resoloutions
			document.getElementsByTagName('head')[0].appendChild(sheet);
			Retinize.supported.push(density);
			// add the density to the supported array
		}
	},
	 /**
	  * responsive layout support
	  * to use simply set your suported layouts, you will need to add the
	  * following attributes to your body tag -
	  * 
	  * to support oriantation change -
	  * > onorientationchange="Retinize.onResize()" 
	  * 
	  * to support browser size changes -
	  * > onresize="Retinize.onResize()" 
	  * 
	  * to make sure the page gets the right layout initially - you could also
	  * use scripted events or run inline before the </body> but after the
	  * Retinize.addDeviceSupport calls have been made.
	  * > onload="Retinize.onResize()"
	  * 
	  * @param String css_class
	  * @param Number min_width in standard pixels set to 0 if no min
	  * @param Number max_width in standard pixels set to 0 if no max
	  * @returns void
	  */
	 addDeviceSupport:function(css_class,min_width,max_width){
		 Retinize.supportedLayouts.push({klass:css_class,min:min_width,max:max_width});
	},
	onResize:function(){

		Retinize.width = window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
		//first - make a list of the formats we are responsible for - 
		//these classes will be removed/applied to the document body acording to
		//the min/max settings
		var cclass = document.body.className.split(' ');
		// sanitise the current classes
		var sclass = [];//santitised classes
		for(var j=0; j<cclass.length; j++){
			if(cclass[j]!==""){
				sclass.push(cclass[j]);
			}
		}
		var classAdd = [];
		var classRemove = [];
		for(var i=0; i<Retinze.supportedLayouts.length; i++){
			//does the layout apply?
			//add to the add/remove list
			if(Retinze.supportedLayouts[i].min>=Retinize.width && (Retinize.supportedLayouts[i].max===0 || (Retinize.supportedLayouts[i].max<=Retinize.width))){
				//in range
				classAdd.push(Retinize.supportedLayouts[i].klass);
			}else{
				classRemove.push(Retinize.supportedLayouts[i].klass);
			}
		}
		var classFinal = [];
		//itterate ovr the sclass array and remove unwanted, add needed if 
		for(var k=0; k<sclass.length; k++){
			//are we in?
			var unknown = true;
			for(var l=0; l<classAdd.length; l++){
				if(classAdd[l]===sclass[l]){
					unknown = false;
					break;
				}
			}
			//are we out?
			for(var l=0; l<classRemove.length; l++){
				if(classAdd[l]===sclass[l]){
					unknown = false;
					break;
				}
			}
			if(unknown){
				classFinal.push(sclass[l]);
			}
		}
		//finally add the known requried classes
		for(var m=0; m<classAdd.length; m++){
			classFinal.push(classAdd[m]);
		}
		//and set
		document.body.className = classFinal.join(' ');
	}
	 
};
