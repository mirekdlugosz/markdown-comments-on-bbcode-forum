// ==UserScript==
// @name         Markdown syntax in DUG posts
// @namespace    http://miroslaw-zalewski.eu
// @version      0.1
// @description  Use Markdown syntax on forums that only support BBcode
// @author       Mirosław Zalewski
// @match        https://forum.dug.net.pl/*
// @grant        none
// ==/UserScript==
// Underscore.js 1.2.1
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function u(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);if(b.isFunction(c.isEqual))return c.isEqual(a);var e=typeof a;if(e!=typeof c)return false;if(!a!=!c)return false;if(b.isNaN(a))return b.isNaN(c);var g=b.isString(a),f=b.isString(c);if(g||f)return g&&f&&String(a)==String(c);g=b.isNumber(a);f=b.isNumber(c);if(g||f)return g&&f&&+a==+c;g=b.isBoolean(a);f=b.isBoolean(c);
if(g||f)return g&&f&&+a==+c;g=b.isDate(a);f=b.isDate(c);if(g||f)return g&&f&&a.getTime()==c.getTime();g=b.isRegExp(a);f=b.isRegExp(c);if(g||f)return g&&f&&a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase;if(e!="object")return false;if(a.length!==c.length)return false;if(a.constructor!==c.constructor)return false;for(e=d.length;e--;)if(d[e]==a)return true;d.push(a);var e=0,g=true,h;for(h in a)if(m.call(a,h)&&(e++,!(g=m.call(c,h)&&u(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!e--)break;g=!e}d.pop();return g}var r=this,F=r._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,G=k.unshift,l=p.toString,m=p.hasOwnProperty,v=k.forEach,w=k.map,x=k.reduce,y=k.reduceRight,z=k.filter,A=k.every,B=k.some,q=k.indexOf,C=k.lastIndexOf,p=Array.isArray,H=Object.keys,s=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define("underscore",function(){return b}):r._=b;b.VERSION="1.2.1";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(v&&a.forEach===v)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,g=a.length;e<g;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.map===w)return a.map(c,b);j(a,function(a,f,h){e[e.length]=c.call(b,a,f,h)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var g=
d!==void 0;a==null&&(a=[]);if(x&&a.reduce===x)return e&&(c=b.bind(c,e)),g?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){g?d=c.call(e,d,a,b,i):(d=a,g=true)});if(!g)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(y&&a.reduceRight===y)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;
D(a,function(a,f,h){if(c.call(b,a,f,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.filter===z)return a.filter(c,b);j(a,function(a,f,h){c.call(b,a,f,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,f,h){c.call(b,a,f,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(A&&a.every===A)return a.every(c,b);j(a,function(a,f,h){if(!(e=e&&c.call(b,a,f,h)))return o});
return e};var D=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(B&&a.some===B)return a.some(c,d);j(a,function(a,b,h){if(e|=c.call(d,a,b,h))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=D(a,function(a){if(a===c)return true})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;
j(a,function(a,g){g==0?b[0]=a:(d=Math.floor(Math.random()*(g+1)),b[g]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,g=a.length;e<
g;){var f=e+g>>1;d(a[f])<d(c)?e=f+1:g=f}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,a.length-b):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=
function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,f,h){if(0==h||(c===true?b.last(d)!=f:!b.include(d,f)))d[d.length]=f,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};
b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);
for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(C&&a.lastIndexOf===C)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),g=0,f=Array(e);g<e;)f[g++]=a,a+=d;return f};var E=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;
e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));E.prototype=a.prototype;var b=new E,f=a.apply(b,e.concat(i.call(arguments)));return Object(f)===f?f:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,g,f,h;h=b.debounce(function(){f=false},c);return function(){e=this;g=arguments;var b;d||(d=setTimeout(function(){d=null;a.apply(e,g);h()},c));f||a.apply(e,g);h&&h();f=true}};b.debounce=function(a,b){var d;return function(){var e=this,g=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,
g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=H||function(a){if(a!==Object(a))throw new TypeError("Invalid object");
var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},
a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return u(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=l.call(arguments)=="[object Arguments]"?function(a){return l.call(a)=="[object Arguments]"}:function(a){return!(!a||!m.call(a,
"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===
void 0};b.noConflict=function(){r._=F;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),function(c){I(c,b[c]=a[c])})};var J=0;b.uniqueId=function(a){var b=J++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",d=new Function("obj",d);return c?d(c):d};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var t=function(a,c){return c?b(a).chain():a},I=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);G.call(a,this._wrapped);return t(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){b.apply(this._wrapped,arguments);return t(this._wrapped,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return t(b.apply(this._wrapped,arguments),this._chain)}});n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}})();var Markdown = function() {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  var self = this;

  self.init = function() {
    self.options = {
      methods: ["url", "italic", "underscore", "strong", "quote", "image"],
      codeBlockTypes: ["CODE", "HTML", "PHP"],
      defaultCodeBlock: "CODE"
    }
  };

  /*
    Converts Markdown URLs into BBCode URL.
    @content String The raw document. Each line is in Markdown.
    @return String The raw document. Each line is in BBCode.
    It ignores markdown image tags
    Example
      [Example](http://example.com) => [URL="http://example.com"]Example[/URL]
      ![Example](http://example.com) => ![Example](http://example.com)
  */
  self.url = function(content) {
    return content.replace(/\[([^\]]+)]\(([^ ]+)\)/gm, function(a, b, c, d, e) {
      /* Is this an image ? */
      if (a[0] === "!" || e[0] === "!") {
        return a;
      }
      return '[URL="' + c + '"]' + b + '[/URL]'
    });
  };

  /*
    Converts Markdown quotes into BBCode quotes.
    @content String The raw document. Each line is in Markdown.
    @return String The raw document. Each line is in BBCode.
    Examples:
      > This is a quote => [QUOTE]This is a quote[/QUOTE]
      John Doe> This is a quote => [QUOTE="John Doe"]This is a quote[/QUOTE]
      John Doe > This is a quote => [QUOTE="John Doe"]This is a quote[/QUOTE]
  */
  self.quote = function(content) {
    var quoteTemplate1, quoteTemplate2;

    quoteTemplate1 = _.template("[QUOTE]\n<%= quote %>\n[/QUOTE]");
    quoteTemplate2 = _.template('[QUOTE="<%= by %>"]\n<%= quote %>\n[/QUOTE]');

    return content.replace(/(.+)?>\s{1}?([^\n]+)/g, function(_, by, quote) {
      if (by) {
        return quoteTemplate2({
          by: by.trim(),
          quote: quote
        });
      } else {
        return quoteTemplate1({
          quote: quote
        });
      }
    });
  };

  // expect(converter.image("![My image](http://a.com/image.png)")).toEqual('[IMG alt="My image" title="My image"]http://a.com/image.png[/IMG]');
  self.image = function(content) {
    return content.replace(/\!\[([^\]]+)]\(([^)]+)\)/g, '[IMG alt="$1"]$2[/IMG]');
  };

  /*
    Converts Markdown **Text** into into BBCode's [B] tag.
    @content String The raw document. Each line is in Markdown.
    @return String The raw document. Each line is in BBCode.
    It ignores markdown that are inside a code block.
  */
  self.strong = function(content) {
    return content.replace(/[\*]{2}([^\*{2}]+)[\*]{2}/mg, '[B]$1[/B]');
  };

  /*
    Converts Markdown *Text* into into BBCode's [I] tag.
    @content String The raw document. Each line is in Markdown.
    @return String The raw document. Each line is in BBCode.
  */
  self.italic = function(content) {
    return content.replace(/([\*]+[^\[\]]+?[\*]+)/g, function(_, italic) {
      if (italic.match(/\*/g).length == 2) {
        return "[I]" + italic.replace(/\*/g, "") + "[/I]";
      }

      return _;
    });
  };

  /*
    Converts Markdown _Text_ and __Text__ into into BBCode's [U] tag.
    @content String The raw document. Each line is in Markdown.
    @return String The raw document. Each line is in BBCode.
  */
  self.underscore = function(content) {
    return _.reduce(["__([^_]+)__", "\\b\_([^\_\n]+?)\_(?!\_)"], function(content, regexp) {
      return content.replace(new RegExp(regexp, "gmi"), '[U]$1[/U]');
    },
    content);
  };

  /*
    Converts Markdown code tag into BBCode's code tag.
    @content String The raw document. Each line is in Markdown.
    @return String The raw document. Each line is in BBCode.
    Examples:
      ``` html
      Some HTML code
      ```

      ```
      Some HTML code
      ```

      `Code!`
  */
  self.code = function(content) {
    var regexp, template, getType;

    regexp = /```[ \f\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*(([^\n]+))?\n([\s\S]+?(?=\n```))\n```/gm;
    template = _.template("[<%= type %>]\n<%= content %>\n[/<%= type %>]");

    getType = function(match) {
      match = match || "";
      var type = match.trim().toUpperCase();
      if (_.include(self.options.codeBlockTypes, type)) {
        return type;
      } else {
        return self.options.defaultCodeBlock;
      }
    };

    /*
      ``` code
      My code block
      ```
      =>
      [CODE]My Code block[/CODE]
    */
    content = content.replace(regexp, function(full, none, type, code) {
      var type = getType(type);
      if (code.trim().length === 0) {
        code = type;
      } else {
        code = code.trim();
      }

      return template({
        type: type,
        content: code
      });
    });

    /* `My code block` => [CODE]My code block[/CODE] */
    return content.replace(/`([^`\n]+.?)`/g, function(content, code) {
	  template = _.template("[<%= type %>]<%= content %>[/<%= type %>]");
      return template({
        type: "TT",
        content: code
      });
    });
  };

  /*
    @document String A markdown document to process
    @return String A BBCode document.
  */
  self.process = function(document) {
    var i, split, length, con = true,
    to, re;

    /* Line breaks should be equal on all plattforms */
    document = document.replace(/\r\n/, "\n");

    /* Converting all code related markdown blocks to bbcode code blocks */
    document = self.code(document);
    split = document.split(/\n/);

    for (i = 0, length = split.length; i < length; i++) {
      if (split[i].match(/^\[[A-Z]+\]$/)) {
        for (i = i + 1; con; i++) {
          if (!split[i] || split[i].match(/^\[\/[A-Z]+\]\n$/)) {
            con = false;
          }

        };
      } else {
        _.each(["unorderedList", "orderedList", "codeIndent", "quoteBlock"], function(method) {
          /*
            re = {
              to: 5,
              data: "template-data",
              found: true
            }
          */
          re = self[method](split, i);
          if (re.found) {
            for (i = i, to = re.to; i < to; i++) {
              split[i] = null;
            };

            split[i] = re.data;
			if (method !== "codeIndent") {
				_.each(self.options.methods, function(method) {
				  split[i] = self[method](split[i]);
				});
			}
          }
        });

		if (!split[i].match(/\n/)) {
			_.each(self.options.methods, function(method) {
			  split[i] = self[method](split[i]);
			});
		}

      }
    };

    return _.reject(split, function(line) {
      return line === null;
    }).join("\n");
  };


  /*
    Converts Markdown multi-line quotes into single BBCode quote block
    @lines Array<String> A list of lines. Each line is in Markdown.
    @n Integer On what position should we start looking for a markdown quotes?
    @return Hash Take a look at the #renderBlock method for more information.
  */
  self.quoteBlock = function(lines, n) {
    var template = _.template("[QUOTE]<% for (var i = 0, length = list.length; i < length; i++){ %>\n<%= list[i] %><% }; %>\n[/QUOTE]");
    return self.renderBlock({
      template: template,
      lines: lines,
      n: n,
      match: /^>\s*([^\n]+)/,
      remove: /^>\s*/
    });
  };

  /*
    Converts Markdown multiple indented lines into single BBCode code block
    @lines Array<String> A list of lines. Each line is in Markdown.
    @n Integer On what position should we start looking for a markdown indented lines?
    @return Hash Take a look at the #renderBlock method for more information.
  */
  self.codeIndent = function(lines, n) {
    var template = _.template("[CODE]<% for (var i = 0, length = list.length; i < length; i++){ %>\n<%= list[i] %><% }; %>\n[/CODE]");
    return self.renderBlock({
      template: template,
      lines: lines,
      n: n,
      match: /[ ]{4}([^\n]+)/,
      remove: /^\s*/
    });
  };

  /*
    Converts Markdown unordered lists into BBCode lists.
    @lines Array<String> A list of lines. Each line is in Markdown.
    @n Integer On what position should we start looking for a markdown list?
    @return Hash Take a look at the #renderBlock method for more information.
  */
  self.unorderedList = function(lines, n) {
    var template = _.template("[LIST]<% for (var i = 0, length = list.length; i < length; i++){ %>\n[*]<%= list[i] %><% }; %>\n[/LIST]");
    return self.renderBlock({
      template: template,
      lines: lines,
      n: n,
      match: /^- ([^\n]+)/,
      remove: /^\s*- /
    });
  };

  /*
    Converts Markdown ordered lists into BBCode lists.
    @lines Array<String> A list of lines. Each line is in Markdown.
    @n Integer On what position should we start looking for a markdown list?
    @return Hash Take a look at the #renderBlock method for more information.
  */
  self.orderedList = function(lines, n) {
    var template = _.template("[LIST=1]<% for (var i = 0, length = list.length; i < length; i++){ %>\n[*]<%= list[i] %><% }; %>\n[/LIST]");
    return self.renderBlock({
      template: template,
      lines: lines,
      n: n,
      match: /^\d+\. ([^\n]+)/,
      remove: /^\d+\. /
    });
  };

  /*
  @options Hash A hash of options used for rendering a markdown block
  Example:
    options {
      template: "a template",
      n: 1,
      lines: [a line],
      match: /regexp/,
      remove: /regexp/
    }
    
    @template A underscore.js template
    @n Where #renderBlock should start look for a block
    @lines A list of lines for the entire document
    @match How do we know what a block item looks like?
    @remove What should be striped out before we can call it a block item?
  @return Hash 
    return {
      found: true,
      data: data,
      to: i
    };
    @found Did we find a block?
    @data How does the new, BBCode block looks like?
    @to On what line does the block end?
  */
  self.renderBlock = function(options) {
    var template, i, matches, lines, length;

    template = options.template;
    lines = options.lines;

    for (i = options.n, length = lines.length; i < length; i++) {
      /* Is this a block line ?*/
      if (lines[i].match(options.match)) {
        matches = [lines[i].replace(options.remove, "")];
        for (i = (i + 1); i < length; i++) {
          if (lines[i].match(options.match)) {
            matches.push(lines[i].replace(options.remove, ""));
          } else {
            break;
          }
        };

        /* 
          This is the end of the block
          Let's render it!
        */
        data = template({
          list: matches
        });

        return {
          found: true,
          data: data,
          to: (i - 1)
        };

      } else {
        return {
          found: false
        };
      }
    };
  };

  self.init();
};
function setupCustomStyle() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.pun div.preview { ' +
		'white-space: pre-line;' +
		'margin: -1px;' +
		'padding: 1em;' +
		'}';
	document.getElementsByTagName('head')[0].appendChild(style);
}

function displayPreview() {
	if (! displayPreviewCheckbox.checked) {
		previewBox.style.display = "none";
		return;
	}
	previewBox.style.display = "block";
	preview.innerHTML = converter.process(postForm.req_message.value)
}

function main() {
	postForm = false;
	for (var i = 0; i < document.forms.length; i++) {
		if (document.forms[i].req_message && 
			document.forms[i].req_message.tagName.toLowerCase() == "textarea") {
			postForm = document.forms[i];
			break;
		}
	}

	if (! postForm) 
		return;

	setupCustomStyle();

	converter = new Markdown(),
		previewBox = document.createElement("div"),
		preview = document.createElement("div"),
		displayPreviewItem = document.createElement("li"),
		displayPreviewLabel = document.createElement("label"),
		displayPreviewCheckbox = document.createElement("input");

	previewBox.setAttribute("class", "box preview");
	previewBox.appendChild(preview);

	postForm.parentNode.appendChild(previewBox);

	postForm.getElementsByClassName("bblinks")[0].appendChild(displayPreviewItem);
	displayPreviewItem.appendChild(displayPreviewLabel);
	displayPreviewLabel.appendChild(displayPreviewCheckbox);
	displayPreviewLabel.appendChild(document.createTextNode("Show markdown → BBcode preview"));
	displayPreviewLabel.style.display = "inline";
	displayPreviewCheckbox.type = "checkbox";
	displayPreviewCheckbox.name = "display_preview";
	displayPreviewCheckbox.checked = true;

	postForm.addEventListener("input", displayPreview, true);
	postForm.addEventListener("change", displayPreview, true);
	postForm.addEventListener("submit", function(){
		postForm.req_message.value = converter.process(postForm.req_message.value);
	}, true)
}

main();
