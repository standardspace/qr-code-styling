!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){t.exports=r.p+"10cc19bd484118dbcd0a7886a38ceddc.png"},function(t,e,r){var n,o,i,a=function(){var t=function(t,e){var r=t,n=s[e],o=null,i=0,a=null,u=[],c={},f=function(t,e){o=function(t){for(var e=new Array(t),r=0;r<t;r+=1){e[r]=new Array(t);for(var n=0;n<t;n+=1)e[r][n]=null}return e}(i=4*r+17),h(0,0),h(i-7,0),h(0,i-7),l(),g(),v(t,e),r>=7&&d(t),null==a&&(a=y(r,n,u)),p(a,e)},h=function(t,e){for(var r=-1;r<=7;r+=1)if(!(t+r<=-1||i<=t+r))for(var n=-1;n<=7;n+=1)e+n<=-1||i<=e+n||(o[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},g=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var e=8;e<i-8;e+=1)null==o[6][e]&&(o[6][e]=e%2==0)},l=function(){for(var t=w.getPatternPosition(r),e=0;e<t.length;e+=1)for(var n=0;n<t.length;n+=1){var i=t[e],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var s=-2;s<=2;s+=1)o[i+u][a+s]=-2==u||2==u||-2==s||2==s||0==u&&0==s}},d=function(t){for(var e=w.getBCHTypeNumber(r),n=0;n<18;n+=1){var a=!t&&1==(e>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(e>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},v=function(t,e){for(var r=n<<3|e,a=w.getBCHTypeInfo(r),u=0;u<15;u+=1){var s=!t&&1==(a>>u&1);u<6?o[u][8]=s:u<8?o[u+1][8]=s:o[i-15+u][8]=s}for(u=0;u<15;u+=1){s=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=s:u<9?o[8][15-u-1+1]=s:o[8][15-u-1]=s}o[i-8][8]=!t},p=function(t,e){for(var r=-1,n=i-1,a=7,u=0,s=w.getMaskFunction(e),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var f=0;f<2;f+=1)if(null==o[n][c-f]){var h=!1;u<t.length&&(h=1==(t[u]>>>a&1)),s(n,c-f)&&(h=!h),o[n][c-f]=h,-1==(a-=1)&&(u+=1,a=7)}if((n+=r)<0||i<=n){n-=r,r=-r;break}}},y=function(t,e,r){for(var n=b.getRSBlocks(t,e),o=C(),i=0;i<r.length;i+=1){var a=r[i];o.put(a.getMode(),4),o.put(a.getLength(),w.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u+=1){var s=e[u].dataCount,c=e[u].totalCount-s;n=Math.max(n,s),o=Math.max(o,c),i[u]=new Array(s);for(var f=0;f<i[u].length;f+=1)i[u][f]=255&t.getBuffer()[f+r];r+=s;var h=w.getErrorCorrectPolynomial(c),g=m(i[u],h.getLength()-1).mod(h);a[u]=new Array(h.getLength()-1);for(f=0;f<a[u].length;f+=1){var l=f+g.getLength()-a[u].length;a[u][f]=l>=0?g.getAt(l):0}}var d=0;for(f=0;f<e.length;f+=1)d+=e[f].totalCount;var v=new Array(d),p=0;for(f=0;f<n;f+=1)for(u=0;u<e.length;u+=1)f<i[u].length&&(v[p]=i[u][f],p+=1);for(f=0;f<o;f+=1)for(u=0;u<e.length;u+=1)f<a[u].length&&(v[p]=a[u][f],p+=1);return v}(o,n)};c.addData=function(t,e){var r=null;switch(e=e||"Byte"){case"Numeric":r=S(t);break;case"Alphanumeric":r=B(t);break;case"Byte":r=k(t);break;case"Kanji":r=M(t);break;default:throw"mode:"+e}u.push(r),a=null},c.isDark=function(t,e){if(t<0||i<=t||e<0||i<=e)throw t+","+e;return o[t][e]},c.getModuleCount=function(){return i},c.make=function(){if(r<1){for(var t=1;t<40;t++){for(var e=b.getRSBlocks(t,n),o=C(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),w.getLengthInBits(a.getMode(),t)),a.write(o)}var s=0;for(i=0;i<e.length;i++)s+=e[i].dataCount;if(o.getLengthInBits()<=8*s)break}r=t}f(!1,function(){for(var t=0,e=0,r=0;r<8;r+=1){f(!0,r);var n=w.getLostPoint(c);(0==r||t>n)&&(t=n,e=r)}return e}())},c.createTableTag=function(t,e){t=t||2;var r="";r+='<table style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: "+(e=void 0===e?4*t:e)+"px;",r+='">',r+="<tbody>";for(var n=0;n<c.getModuleCount();n+=1){r+="<tr>";for(var o=0;o<c.getModuleCount();o+=1)r+='<td style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: 0px;",r+=" width: "+t+"px;",r+=" height: "+t+"px;",r+=" background-color: ",r+=c.isDark(n,o)?"#000000":"#ffffff",r+=";",r+='"/>';r+="</tr>"}return r+="</tbody>",r+="</table>"},c.createSvgTag=function(t,e){var r={};"object"==typeof arguments[0]&&(t=(r=arguments[0]).cellSize,e=r.margin),t=t||2,e=void 0===e?4*t:e;var n,o,i,a,u=c.getModuleCount()*t+2*e,s="";for(a="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",s+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',s+=r.scalable?"":' width="'+u+'px" height="'+u+'px"',s+=' viewBox="0 0 '+u+" "+u+'" ',s+=' preserveAspectRatio="xMinYMin meet">',s+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',s+='<path d="',o=0;o<c.getModuleCount();o+=1)for(i=o*t+e,n=0;n<c.getModuleCount();n+=1)c.isDark(o,n)&&(s+="M"+(n*t+e)+","+i+a);return s+='" stroke="transparent" fill="black"/>',s+="</svg>"},c.createDataURL=function(t,e){t=t||2,e=void 0===e?4*t:e;var r=c.getModuleCount()*t+2*e,n=e,o=r-e;return x(r,r,(function(e,r){if(n<=e&&e<o&&n<=r&&r<o){var i=Math.floor((e-n)/t),a=Math.floor((r-n)/t);return c.isDark(a,i)?0:1}return 1}))},c.createImgTag=function(t,e,r){t=t||2,e=void 0===e?4*t:e;var n=c.getModuleCount()*t+2*e,o="";return o+="<img",o+=' src="',o+=c.createDataURL(t,e),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',r&&(o+=' alt="',o+=r,o+='"'),o+="/>"};return c.createASCII=function(t,e){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var e,r,n,o,i,a=1*c.getModuleCount()+2*t,u=t,s=a-t,f={"██":"█","█ ":"▀"," █":"▄","  ":" "},h={"██":"▀","█ ":"▀"," █":" ","  ":" "},g="";for(e=0;e<a;e+=2){for(n=Math.floor((e-u)/1),o=Math.floor((e+1-u)/1),r=0;r<a;r+=1)i="█",u<=r&&r<s&&u<=e&&e<s&&c.isDark(n,Math.floor((r-u)/1))&&(i=" "),u<=r&&r<s&&u<=e+1&&e+1<s&&c.isDark(o,Math.floor((r-u)/1))?i+=" ":i+="█",g+=t<1&&e+1>=s?h[i]:f[i];g+="\n"}return a%2&&t>0?g.substring(0,g.length-a-1)+Array(a+1).join("▀"):g.substring(0,g.length-1)}(e);t-=1,e=void 0===e?2*t:e;var r,n,o,i,a=c.getModuleCount()*t+2*e,u=e,s=a-e,f=Array(t+1).join("██"),h=Array(t+1).join("  "),g="",l="";for(r=0;r<a;r+=1){for(o=Math.floor((r-u)/t),l="",n=0;n<a;n+=1)i=1,u<=n&&n<s&&u<=r&&r<s&&c.isDark(o,Math.floor((n-u)/t))&&(i=0),l+=i?f:h;for(o=0;o<t;o+=1)g+=l+"\n"}return g.substring(0,g.length-1)},c.renderTo2dContext=function(t,e){e=e||2;for(var r=c.getModuleCount(),n=0;n<r;n++)for(var o=0;o<r;o++)t.fillStyle=c.isDark(n,o)?"black":"white",t.fillRect(n*e,o*e,e,e)},c};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var e=[],r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e.push(255&n)}return e}}).default,t.createStringToBytes=function(t,e){var r=function(){for(var r=D(t),n=function(){var t=r.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=r.read();if(-1==a)break;var u=n(),s=n()<<8|n();i[String.fromCharCode(a<<8|u)]=s,o+=1}if(o!=e)throw o+" != "+e;return i}(),n="?".charCodeAt(0);return function(t){for(var e=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)e.push(i);else{var a=r[t.charAt(o)];"number"==typeof a?(255&a)==a?e.push(a):(e.push(a>>>8),e.push(255&a)):e.push(n)}}return e}};var e,r,n,o=1,i=2,a=4,u=8,s={L:1,M:0,Q:3,H:2},c=0,f=1,h=2,g=3,l=4,d=5,v=6,p=7,w=(e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=function(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e},(r={}).getBCHTypeInfo=function(t){for(var e=t<<10;n(e)-n(1335)>=0;)e^=1335<<n(e)-n(1335);return 21522^(t<<10|e)},r.getBCHTypeNumber=function(t){for(var e=t<<12;n(e)-n(7973)>=0;)e^=7973<<n(e)-n(7973);return t<<12|e},r.getPatternPosition=function(t){return e[t-1]},r.getMaskFunction=function(t){switch(t){case c:return function(t,e){return(t+e)%2==0};case f:return function(t,e){return t%2==0};case h:return function(t,e){return e%3==0};case g:return function(t,e){return(t+e)%3==0};case l:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case d:return function(t,e){return t*e%2+t*e%3==0};case v:return function(t,e){return(t*e%2+t*e%3)%2==0};case p:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw"bad maskPattern:"+t}},r.getErrorCorrectPolynomial=function(t){for(var e=m([1],0),r=0;r<t;r+=1)e=e.multiply(m([1,y.gexp(r)],0));return e},r.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case o:return 10;case i:return 9;case a:case u:return 8;default:throw"mode:"+t}else if(e<27)switch(t){case o:return 12;case i:return 11;case a:return 16;case u:return 10;default:throw"mode:"+t}else{if(!(e<41))throw"type:"+e;switch(t){case o:return 14;case i:return 13;case a:return 16;case u:return 12;default:throw"mode:"+t}}},r.getLostPoint=function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n+=1)for(var o=0;o<e;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||e<=n+u))for(var s=-1;s<=1;s+=1)o+s<0||e<=o+s||0==u&&0==s||a==t.isDark(n+u,o+s)&&(i+=1);i>5&&(r+=3+i-5)}for(n=0;n<e-1;n+=1)for(o=0;o<e-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(r+=3)}for(n=0;n<e;n+=1)for(o=0;o<e-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o+=1)for(n=0;n<e-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var f=0;for(o=0;o<e;o+=1)for(n=0;n<e;n+=1)t.isDark(n,o)&&(f+=1);return r+=Math.abs(100*f/e/e-50)/5*10},r),y=function(){for(var t=new Array(256),e=new Array(256),r=0;r<8;r+=1)t[r]=1<<r;for(r=8;r<256;r+=1)t[r]=t[r-4]^t[r-5]^t[r-6]^t[r-8];for(r=0;r<255;r+=1)e[t[r]]=r;var n={glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]}};return n}();function m(t,e){if(void 0===t.length)throw t.length+"/"+e;var r=function(){for(var r=0;r<t.length&&0==t[r];)r+=1;for(var n=new Array(t.length-r+e),o=0;o<t.length-r;o+=1)n[o]=t[o+r];return n}(),n={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var e=new Array(n.getLength()+t.getLength()-1),r=0;r<n.getLength();r+=1)for(var o=0;o<t.getLength();o+=1)e[r+o]^=y.gexp(y.glog(n.getAt(r))+y.glog(t.getAt(o)));return m(e,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var e=y.glog(n.getAt(0))-y.glog(t.getAt(0)),r=new Array(n.getLength()),o=0;o<n.getLength();o+=1)r[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)r[o]^=y.gexp(y.glog(t.getAt(o))+e);return m(r,0).mod(t)}};return n}var b=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,e){var r={};return r.totalCount=t,r.dataCount=e,r},r={};return r.getRSBlocks=function(r,n){var o=function(e,r){switch(r){case s.L:return t[4*(e-1)+0];case s.M:return t[4*(e-1)+1];case s.Q:return t[4*(e-1)+2];case s.H:return t[4*(e-1)+3];default:return}}(r,n);if(void 0===o)throw"bad rs block @ typeNumber:"+r+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var c=o[3*u+0],f=o[3*u+1],h=o[3*u+2],g=0;g<c;g+=1)a.push(e(f,h));return a},r}(),C=function(){var t=[],e=0,r={getBuffer:function(){return t},getAt:function(e){var r=Math.floor(e/8);return 1==(t[r]>>>7-e%8&1)},put:function(t,e){for(var n=0;n<e;n+=1)r.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return e},putBit:function(r){var n=Math.floor(e/8);t.length<=n&&t.push(0),r&&(t[n]|=128>>>e%8),e+=1}};return r},S=function(t){var e=o,r=t,n={getMode:function(){return e},getLength:function(t){return r.length},write:function(t){for(var e=r,n=0;n+2<e.length;)t.put(i(e.substring(n,n+3)),10),n+=3;n<e.length&&(e.length-n==1?t.put(i(e.substring(n,n+1)),4):e.length-n==2&&t.put(i(e.substring(n,n+2)),7))}},i=function(t){for(var e=0,r=0;r<t.length;r+=1)e=10*e+a(t.charAt(r));return e},a=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},B=function(t){var e=i,r=t,n={getMode:function(){return e},getLength:function(t){return r.length},write:function(t){for(var e=r,n=0;n+1<e.length;)t.put(45*o(e.charAt(n))+o(e.charAt(n+1)),11),n+=2;n<e.length&&t.put(o(e.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},k=function(e){var r=a,n=t.stringToBytes(e),o={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var e=0;e<n.length;e+=1)t.put(n[e],8)}};return o},M=function(e){var r=u,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(t,e){var r=n("友");if(2!=r.length||38726!=(r[0]<<8|r[1]))throw"sjis not supported."}();var o=n(e),i={getMode:function(){return r},getLength:function(t){return~~(o.length/2)},write:function(t){for(var e=o,r=0;r+1<e.length;){var n=(255&e[r])<<8|255&e[r+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(r+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),r+=2}if(r<e.length)throw"illegal char at "+(r+1)}};return i},A=function(){var t=[],e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,r,n){r=r||0,n=n||t.length;for(var o=0;o<n;o+=1)e.writeByte(t[o+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)e.writeByte(t.charCodeAt(r))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var r=0;r<t.length;r+=1)r>0&&(e+=","),e+=t[r];return e+="]"}};return e},D=function(t){var e=t,r=0,n=0,o=0,i={read:function(){for(;o<8;){if(r>=e.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=e.charAt(r);if(r+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},x=function(t,e,r){for(var n=function(t,e){var r=t,n=e,o=new Array(t*e),i={setPixel:function(t,e,n){o[e*r+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(r),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(r),t.writeShort(n),t.writeByte(0);var e=a(2);t.writeByte(2);for(var o=0;e.length-o>255;)t.writeByte(255),t.writeBytes(e,o,255),o+=255;t.writeByte(e.length-o),t.writeBytes(e,o,e.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var e=1<<t,r=1+(1<<t),n=t+1,i=u(),a=0;a<e;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(e)),i.add(String.fromCharCode(r));var s=A(),c=function(t){var e=t,r=0,n=0,o={write:function(t,o){if(t>>>o!=0)throw"length over";for(;r+o>=8;)e.writeByte(255&(t<<r|n)),o-=8-r,t>>>=8-r,n=0,r=0;n|=t<<r,r+=o},flush:function(){r>0&&e.writeByte(n)}};return o}(s);c.write(e,n);var f=0,h=String.fromCharCode(o[f]);for(f+=1;f<o.length;){var g=String.fromCharCode(o[f]);f+=1,i.contains(h+g)?h+=g:(c.write(i.indexOf(h),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(h+g)),h=g)}return c.write(i.indexOf(h),n),c.write(r,n),c.flush(),s.toByteArray()},u=function(){var t={},e=0,r={add:function(n){if(r.contains(n))throw"dup key:"+n;t[n]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return void 0!==t[e]}};return r};return i}(t,e),o=0;o<e;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,r(i,o));var a=A();n.write(a);for(var u=function(){var t=0,e=0,r=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,e+=8,r+=1;e>=6;)i(t>>>e-6),e-=6},o.flush=function(){if(e>0&&(i(t<<6-e),t=0,e=0),r%3!=0)for(var o=3-r%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),s=a.toByteArray(),c=0;c<s.length;c+=1)u.writeByte(s[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();a.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e.push(n):n<2048?e.push(192|n>>6,128|63&n):n<55296||n>=57344?e.push(224|n>>12,128|n>>6&63,128|63&n):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return e}(t)},o=[],void 0===(i="function"==typeof(n=function(){return a})?n.apply(e,o):n)||(t.exports=i)},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n={numeric:"Numeric",alphanumeric:"Alphanumeric",byte:"Byte",kanji:"Kanji"};const o=t=>t&&"object"==typeof t;function i(t,...e){let r;return r=e.length>1?i(...e):e[0],o(t)&&o(r)?(Object.keys(r).forEach(e=>{const n=t[e],a=r[e];Array.isArray(n)&&Array.isArray(a)?t[e]=n.concat(a):o(n)&&o(a)?t[e]=i(Object.assign({},n),a):t[e]=a}),t):t}const a={};for(let t=0;t<=40;t++)a[t]=t;var u=a,s=r(1),c=r.n(s);class f extends c.a{constructor(t){super(t.qrOptions.typeNumber,t.qrOptions.errorCorrectionLevel)}}function h({originalImageXSize:t,originalImageYSize:e,maxHiddenDots:r,dotSize:n}){let o,i,a,u;const s=e/t;return(o=Math.floor(Math.sqrt(r/s)))%2==0&&o--,a=o*n,{dotsXCount:o,dotsYCount:i=1+2*Math.ceil((o*s*n-n)/(2*n)),imageXSize:a,imageYSize:u=Math.ceil(a*s)}}var g={L:.07,M:.15,Q:.25,H:.3};class l{constructor({context:t,type:e}){this.context=t,this.type=e}draw(t,e,r,n){const o=this.context,i=this.type;"dots"===i?(o.beginPath(),o.arc(t+r/2,e+r/2,r/2,0,2*Math.PI),o.fill()):"rounded"===i?(o.beginPath(),o.moveTo(t,e+r/2),n(-1,0)||n(0,-1)?(o.lineTo(t,e),o.lineTo(t+r/2,e)):o.arc(t+r/2,e+r/2,r/2,-Math.PI,-Math.PI/2),n(0,-1)||n(1,0)?(o.lineTo(t+r,e),o.lineTo(t+r,e+r/2)):o.arc(t+r/2,e+r/2,r/2,-Math.PI/2,0),n(1,0)||n(0,1)?(o.lineTo(t+r,e+r),o.lineTo(t+r/2,e+r)):o.arc(t+r/2,e+r/2,r/2,0,Math.PI/2),n(0,1)||n(-1,0)?(o.lineTo(t,e+r),o.lineTo(t,e+r/2)):o.arc(t+r/2,e+r/2,r/2,Math.PI/2,Math.PI),o.fill()):o.fillRect(t,e,r,r)}}class d{constructor(t){this.canvas=document.createElement("canvas"),this.canvas.width=t.width,this.canvas.height=t.height,this.options=t}get context(){return this.canvas.getContext("2d")}get width(){return this.canvas.width}get height(){return this.canvas.height}getCanvas(){return this.canvas}clear(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}drawQR(t){this.clear(),this.drawBackground(),this.qr=t,this.options.image?this.drawImageAndDots():this.drawDots()}drawBackground(){const t=this.context,e=this.options;t.fillStyle=e.backgroundOptions.color,t.fillRect(0,0,this.canvas.width,this.canvas.height)}drawDots(t){const e=this.context,r=this.options,n=this.qr.getModuleCount(),o=Math.min(r.width,r.height),i=Math.floor(o/n),a=Math.floor((r.width-n*i)/2),u=Math.floor((r.height-n*i)/2);if(n>r.width||n>r.height)throw"The canvas is too small.";const s=new l({context:e,type:r.dotsOptions.type});for(let o=0;o<n;o++)for(let c=0;c<n;c++)t&&!t(o,c)||this.qr.isDark(o,c)&&(e.fillStyle=r.dotsOptions.color,s.draw(a+o*i,u+c*i,i,(e,r)=>{if(o+e>=0&&c+r>=0&&o+e<n&&c+r<n)return!(t&&!t(o+e,c+r))&&this.qr.isDark(o+e,c+r)}))}drawImageAndDots(){const t=this.context,e=this.options,r=this.qr.getModuleCount(),n=Math.min(e.width,e.height),o=Math.floor(n/r),i=Math.floor((e.width-r*o)/2),a=Math.floor((e.height-r*o)/2),u=new Image,s=e.imageOptions.imageSize*g[e.qrOptions.errorCorrectionLevel];u.src=e.image,u.onload=()=>{const n=Math.floor(s*r*r),{resizedImageWidth:c,resizedImageHeight:f,hiddenDotsWidth:g,hiddenDotsHeight:l}=function({originalWidth:t,originalHeight:e,maxHiddenDots:r,dotSize:n}){const o=h({originalImageXSize:t,originalImageYSize:e,maxHiddenDots:r,dotSize:n}),i=h({originalImageXSize:e,originalImageYSize:t,maxHiddenDots:r,dotSize:n});return o.imageXSize>=i.imageYSize?{resizedImageWidth:o.imageXSize,resizedImageHeight:o.imageYSize,hiddenDotsWidth:o.dotsXCount,hiddenDotsHeight:o.dotsYCount}:{resizedImageWidth:i.imageYSize,resizedImageHeight:i.imageXSize,hiddenDotsWidth:i.dotsYCount,hiddenDotsHeight:i.dotsXCount}}({originalWidth:u.width,originalHeight:u.height,maxHiddenDots:n,dotSize:o});this.drawDots((t,n)=>!e.imageOptions.hideBackgroundDots||(t<(r-g)/2||t>=(r+g)/2||n<(r-l)/2||n>=(r+l)/2)),t.drawImage(u,i+(r*o-c)/2,a+(r*o-f)/2,c,f)}}}const v={width:300,height:300,data:void 0,image:void 0,qrOptions:{typeNumber:u[0],mode:void 0,errorCorrectionLevel:"Q"},imageOptions:{hideBackgroundDots:!0,imageSize:.4},dotsOptions:{type:"square",color:"#000"},backgroundOptions:{color:"#fff"}};var p=class{constructor(t){this.options=i(v,t),this.update()}update(t){this.clearContainer(this.container),this.options=i(this.options,t),this.options.data&&(this.qr=new f(this.options),this.qr.addData(this.options.data,this.options.qrOptions.mode||function(t){switch(!0){case/^[0-9]*$/.test(t):return n.numeric;case/^[0-9A-Z $%*+\-.\/:]*$/.test(t):return n.alphanumeric;default:return n.byte}}(this.options.data)),this.qr.make(),this.canvas=new d(this.options),this.canvas.drawQR(this.qr),this.append(this.container))}clearContainer(t){t&&(t.innerHTML="")}append(t){if(t){if("function"!=typeof t.appendChild)throw"Container should be a single DOM node";this.container=t,t.appendChild(this.canvas.getCanvas())}}};r(2);var w=r(0),y=r.n(w);const m=document.getElementById("form"),b=document.getElementById("qr-description"),C=new class{constructor({root:t}={}){t&&this.init({root:t})}init({root:t}){const e=t.querySelectorAll(`[${this._getNodeKey()}]`);e.forEach(t=>{this._setNodeListener(t)}),this.nodes=this._buildNodes(e)}getState(){return this._buildState(this.nodes)}setState(t){const e=function t(e){const r=Object.keys(e),n={};return r.forEach(r=>{const o=e[r];if("object"==typeof o&&null!==o&&o.constructor==={}.constructor){const o=t(e[r]);Object.keys(o).forEach(t=>{n[`${r}.${t}`]=o[t]})}else n[r]=o}),n}(t);Object.keys(e).forEach(t=>{this._setNodeState(this.nodes[t],e[t]),this._getUpdateListener()({field:t,data:e[t]})})}onStateUpdate(t){this.listener=t}_getUpdateListener(){return this.listener}_getNodeState(t){return t[this._getNodeStateKey(t)]}_setNodeState(t,e){t[this._getNodeStateKey(t)]=e}_getNodeKey(){return"node"}_getNodeStateKey(t){return t.getAttribute("node-data-field")||"value"}_getChangeEventKey(t){return t.getAttribute("node-change-event")||"onchange"}_buildState(t){const e=Object.keys(t),r={};return e.forEach(e=>{r[e]=this._getNodeState(t[e])}),function t(e){const r=Object.keys(e),n={};return r.forEach(r=>{const o=r.split("."),i=e[r],a=o.shift(),u=o.join(".");if(u.length){const e=n[a]||{};e[u]=i,n[a]=t(e)}else n[a]=i}),n}(r)}_buildNodes(t){const e={};return t.forEach(t=>{const r=t.getAttribute(this._getNodeKey());e[r]=t}),e}_setNodeListener(t){const e=this._getChangeEventKey(t);t[e]=()=>{this._getUpdateListener()({field:t.getAttribute(this._getNodeKey()),data:this._getNodeState(t)})}}}({root:m}),S=C.getState(),B=new p({...S,image:y.a});function k(t,e){let r,n;M(t)>M(e)?(r=e,n=t):(r=t,n=e),b.style["background-image"]=`linear-gradient(90deg, #000 0%, ${r} 50%, ${n} 100%)`}function M(t){return parseInt(t.substring(1,3),16)+parseInt(t.substring(3,5),16)+parseInt(t.substring(5,6),16)}k(S.dotsOptions.color,S.backgroundOptions.color),C.onStateUpdate(({field:t,data:e})=>{const{image:r,...n}=C.getState();k(n.dotsOptions.color,n.backgroundOptions.color),"image"===t&&(e&&e[0]?function(t,e){let r=new FileReader;r.onload=t=>{e(t.target.result)},r.readAsDataURL(t)}(e[0],t=>{B.update({image:t})}):B.update({image:null})),B.update(n)});const A=document.getElementById("qr-code-generated");B.append(A),document.getElementById("button-cancel").onclick=()=>{C.setState({image:(new DataTransfer).files})},document.getElementById("button-default").onclick=()=>{C.setState({image:(new DataTransfer).files}),B.update({image:y.a})},document.getElementById("qr-download").onclick=()=>{const t=document.getElementById("qr-extension").value;!function(t,e){let r=document.createElement("a");r.download=e,r.href=t,document.body.appendChild(r),r.click(),document.body.removeChild(r)}(A.childNodes[0].toDataURL(`image/${t}`),`qr.${t}`)};let D=document.getElementsByClassName("accordion");for(let t=0;t<D.length;t++)D[t].classList.contains("accordion--open")||D[t].addEventListener("click",(function(){this.classList.toggle("active");const t=this.nextElementSibling;"grid"===t.style.display?t.style.display="none":t.style.display="grid"}))}]);
//# sourceMappingURL=index.js.map