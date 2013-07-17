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
var Retinize={Version:"0.1.0",supported:[],isSupported:null,density:null,supportedLayouts:[],currentLayout:"",width:0,get:function(c,b,a,f){var d="<img ";if(!Retinize.density)Retinize.density=window.devicePixelRatio===void 0?1:window.devicePixelRatio;var h=1;if(Retinize.supported.length>1)for(var g=0;g<Retinize.supported.length;g++){if(Retinize.match(Retinize.supported[g])){h=Retinize.supported[g];break}}else Math.floor(Retinize.supported[0])===Math.ceil(Math.round(Retinize.density))&&(h=Retinize.supported[0]);
h>1&&(c=c.replace(/(.*)\.(gif|jpg|jpeg|png)/i,"$1-x"+h+".$2"));d+='src="'+c+'" ';if(typeof f==="object")for(var e in f)d+=e+'="'+f[e]+'" ';d+='width="'+b+'" ';d+='height="'+a+'" ';d+=" />";document.write(d)},support:function(c,b){if(typeof Retinize.isSupported!=="boolean"){var a=-1;navigator.appName==="Microsoft Internet Explorer"?(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)!==null&&(a=parseFloat(RegExp.$1)),Retinize.isSupported=a>8):Retinize.isSupported=true}if(Retinize.isSupported===
true)a=document.createElement("link"),a.rel="stylesheet",a.media="only screen and (min-resolution: "+c+"dppx), only screen and (min--moz-device-pixel-ratio: "+c+"), only screen and (-o-min-device-pixel-ratio: "+c+"/1), only screen and (-webkit-min-device-pixel-ratio: "+c+"), only screen and (min-device-pixel-ratio: "+c+")",a.href=b,document.getElementsByTagName("head")[0].appendChild(a),Retinize.supported.push(c)},addDeviceSupport:function(c,b,a){Retinize.supportedLayouts.push({klass:c,min:b,max:a})},
onResize:function(){var c=window,b=document,a=b.documentElement,b=b.getElementsByTagName("body")[0];Retinize.width=c.innerWidth||a.clientWidth||b.clientWidth;for(var c=document.body.className,b=c.split(" "),a=[],f=0;f<b.length;f++)b[f]!==""&&a.push(b[f]);for(var b=[],f=[],d=0;d<Retinize.supportedLayouts.length;d++)Retinize.width>=Retinize.supportedLayouts[d].min&&(Retinize.supportedLayouts[d].max===0||Retinize.width<=Retinize.supportedLayouts[d].max)?b.push(Retinize.supportedLayouts[d].klass):f.push(Retinize.supportedLayouts[d].klass);
for(var d=[],h=0;h<a.length;h++){for(var g=true,e=0;e<b.length;e++)if(b[e]===a[e]){g=false;break}for(e=0;e<f.length;e++)if(b[e]===a[e]){g=false;break}g&&d.push(a[e])}for(a=0;a<b.length;a++)d.push(b[a]);if(c===document.body.className){if(a=d.join(" "),a!==c)document.body.className=a}else Retinize.onResize()}};