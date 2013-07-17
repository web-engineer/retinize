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
var Retinize={Version:"0.0.2",supported:[],isSupported:null,density:null,supportedLayouts:[],currentLayout:"",width:0,get:function(d,b,a,f){var c="<img ";if(!Retinize.density)Retinize.density=window.devicePixelRatio===void 0?1:window.devicePixelRatio;var h=1;if(Retinize.supported.length>1)for(var g=0;g<Retinize.supported.length;g++){if(Retinize.match(Retinize.supported[g])){h=Retinize.supported[g];break}}else Math.floor(Retinize.supported[0])===Math.ceil(Math.round(Retinize.density))&&(h=Retinize.supported[0]);
h>1&&(d=d.replace(/(.*)\.(gif|jpg|jpeg|png)/i,"$1-x"+h+".$2"));c+='src="'+d+'" ';if(typeof f==="object")for(var e in f)c+=e+'="'+f[e]+'" ';c+='width="'+b+'" ';c+='height="'+a+'" ';c+=" />";document.write(c)},support:function(d,b){if(typeof Retinize.isSupported!=="boolean"){var a=-1;navigator.appName==="Microsoft Internet Explorer"?(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)!==null&&(a=parseFloat(RegExp.$1)),Retinize.isSupported=a>8):Retinize.isSupported=true}if(Retinize.isSupported===
true)a=document.createElement("link"),a.rel="stylesheet",a.media="only screen and (min-resolution: "+d+"dppx), only screen and (min--moz-device-pixel-ratio: "+d+"), only screen and (-o-min-device-pixel-ratio: "+d+"/1), only screen and (-webkit-min-device-pixel-ratio: "+d+"), only screen and (min-device-pixel-ratio: "+d+")",a.href=b,document.getElementsByTagName("head")[0].appendChild(a),Retinize.supported.push(d)},addDeviceSupport:function(d,b,a){Retinize.supportedLayouts.push({klass:d,min:b,max:a})},
onResize:function(){var d=window,b=document,a=b.documentElement,b=b.getElementsByTagName("body")[0];Retinize.width=d.innerWidth||a.clientWidth||b.clientWidth;for(var d=document.body.className,b=d.split(" "),a=[],f=0;f<b.length;f++)b[f]!==""&&a.push(b[f]);for(var b=[],f=[],c=0;c<Retinize.supportedLayouts.length;c++)Retinize.width>=Retinize.supportedLayouts[c].min&&(Retinize.supportedLayouts[c].max===0||Retinize.width<=Retinize.supportedLayouts[c].max)?b.push(Retinize.supportedLayouts[c].klass):f.push(Retinize.supportedLayouts[c].klass);
for(var c=[],h=0;h<a.length;h++){for(var g=true,e=0;e<b.length;e++)if(b[e]===a[e]){g=false;break}for(e=0;e<f.length;e++)if(b[e]===a[e]){g=false;break}g&&c.push(a[e])}for(a=0;a<b.length;a++)c.push(b[a]);if(d===document.body.className)document.body.className=c.join(" ");else Retinize.onResize()}};