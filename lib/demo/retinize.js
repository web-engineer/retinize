/*

 Retinize by web-engineer - http://www.web-engineer.co.uk	
 This work is licensed under a Creative Commons Attribution 3.0 Unported License.

 http://creativecommons.org/licenses/by/3.0/

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Retinize={Version:"0.0.2",supported:[],isSupported:null,density:null,get:function(a,f,b,g){var c="<img ";if(!Retinize.density)Retinize.density=window.devicePixelRatio===void 0?1:window.devicePixelRatio;var d=1;if(Retinize.supported.length>1)for(var e=0;e<Retinize.supported.length;e++){if(Retinize.match(Retinize.supported[e])){d=Retinize.supported[e];break}}else Math.floor(Retinize.supported[0])==Math.ceil(Math.round(Retinize.density))&&(d=Retinize.supported[0]);d>1&&(a=a.replace(/(.*)\.(gif|jpg|jpeg|png)/i,
"$1-x"+d+".$2"));c+='src="'+a+'" ';if(typeof g=="object")for(var h in g)c+=h+'="'+g[h]+'" ';c+='width="'+f+'" ';c+='height="'+b+'" ';c+=" />";document.write(c)},support:function(a,f){if(typeof Retinize.isSupported!="boolean"){var b=-1;navigator.appName=="Microsoft Internet Explorer"?(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)!=null&&(b=parseFloat(RegExp.$1)),Retinize.isSupported=b>8):Retinize.isSupported=true}if(Retinize.isSupported===true)b=document.createElement("link"),b.rel="stylesheet",
b.media="only screen and (min-resolution: "+a+"dppx), only screen and (min--moz-device-pixel-ratio: "+a+"), only screen and (-o-min-device-pixel-ratio: "+a+"/1), only screen and (-webkit-min-device-pixel-ratio: "+a+"), only screen and (min-device-pixel-ratio: "+a+")",b.href=f,document.getElementsByTagName("head")[0].appendChild(b),Retinize.supported.push(a)}};