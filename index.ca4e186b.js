var t;function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}((function(t){if(Array.isArray(t))return r(t)})(t=document.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(t){var r=document.createElement("label"),e=t.name.split("N").join(" N");r.setAttribute("class","field-label"),r.setAttribute("for",t.getAttribute("id")),r.textContent=e,t.parentElement.prepend(r),t.placeholder=e.split("").map(function(t,r){return 0===r?t.toUpperCase():t}).join("")});
//# sourceMappingURL=index.ca4e186b.js.map
