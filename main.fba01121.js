parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l=document.querySelector("thead"),c=document.querySelector("tbody"),u=e(c.querySelectorAll("tr")),i=1,d=1,s=1,m=1,p=1,v=document.querySelector("body"),f=document.createElement("form"),b=document.createElement("div"),y=document.createElement("tr");v.appendChild(b),v.appendChild(f),f.outerHTML='<form class="new-employee-form">\n<label>Name: <input name="name" type="text" data-qa="name" ></label>\n<label>Position: <input name="position" type="text" data-qa="position" >\n</label>\n<label>Office: <select name="office" data-qa="office">\n<option value="Tokyo">Tokyo</option>\n<option value="Singapore">Singapore</option>\n<option value="London">London</option>\n<option value="New York">New York</option>\n<option value="Edinburgh">Edinburgh</option>\n<option value="San Francisco">San Francisco</option>\n</select>\n</label>\n<label>Age: <input name="age" type="number" data-qa="age" ></label>\n<label>Salary: <input name="salary" type="number"  data-qa="salary" ></label>\n<button name="button">Save to table</button>\n</form>';var S=document.querySelector('input[name="name"]'),g=document.querySelector('input[name="position"]'),h=document.querySelector('select[name="office"]'),L=document.querySelector('input[name="age"]'),q=document.querySelector('input[name="salary"]'),k=document.querySelector("button");function A(e){return Number(e.slice(1).replaceAll(",",""))}function T(e,t){u.sort(function(n,a){var o=n.cells[t].innerHTML,r=a.cells[t].innerHTML;return e*o.localeCompare(r)})}function E(e){b.classList.add("error"),b.textContent=e}function w(){b.textContent="You have added a new employee",S.value="",g.value="",h.value="Tokyo",L.value="",q.value=""}l.addEventListener("click",function(e){var t=e.target.cellIndex;switch(e.target.cellIndex){case 0:T(i,t),i*=-1;break;case 1:T(d,t),d*=-1;break;case 2:T(s,t),s*=-1;break;case 3:u.sort(function(e,n){var a=e.cells[t].innerHTML,o=n.cells[t].innerHTML;return m*(Number(a)-Number(o))}),m*=-1;break;case 4:u.sort(function(e,n){var a=e.cells[t].innerHTML,o=n.cells[t].innerHTML;return p*(A(a)-A(o))}),p*=-1}u.forEach(function(e){return c.appendChild(e)})}),c.addEventListener("click",function(e){u.map(function(e){return e.classList.remove("active")}),e.target.parentNode.classList.add("active")}),k.addEventListener("click",function(e){e.preventDefault(),c.appendChild(y),b.setAttribute("data-qa","notification"),S.value&&L.value&&h.value&&g.value&&q.value?S.value.length<4?E("Name must have at least 4 letters"):L.value<18||L.value>90?E("Age must be between 18 and 90"):(y.outerHTML="<tr>\n    <td>".concat(S.value,"</td>\n    <td>").concat(g.value,"</td>\n    <td>").concat(h.value,"</td>\n    <td>").concat(L.value,"</td>\n    <td>$").concat(Number(q.value).toLocaleString("en-US"),"</td>\n    </tr>"),b.classList.add("success"),w()):E("at least one of the fields is empty")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fba01121.js.map