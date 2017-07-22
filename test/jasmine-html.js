jasmineRequire.html=function(e){e.ResultsNode=jasmineRequire.ResultsNode(),e.HtmlReporter=jasmineRequire.HtmlReporter(e),e.QueryString=jasmineRequire.QueryString(),e.HtmlSpecFilter=jasmineRequire.HtmlSpecFilter()},jasmineRequire.HtmlReporter=function(e){function s(s){function i(e){return h().querySelector(".jasmine_html-reporter "+e)}function n(){var e=i("");e&&h().removeChild(e)}function t(e,s,a){for(var i=j(e),n=2;n<arguments.length;n++){var t=arguments[n];"string"==typeof t?i.appendChild(N(t)):t&&i.appendChild(t)}for(var r in s)"className"==r?i[r]=s[r]:i.setAttribute(r,s[r]);return i}function r(e,s){var a=1==s?e:e+"s";return""+s+" "+a}function l(e){return b("spec",e.fullName)}function c(e){return b("seed",e)}function m(e,s){return"?"+e+"="+s}function o(e){d.setAttribute("class","jasmine_html-reporter "+e)}function u(e){return e.failedExpectations.length+e.passedExpectations.length===0&&"passed"===e.status}var d,p,f=s.env||{},h=s.getContainer,j=s.createElement,N=s.createTextNode,v=s.onRaiseExceptionsClick||function(){},g=s.onThrowExpectationsClick||function(){},C=s.onRandomClick||function(){},b=s.addToExistingQueryString||m,R=s.timer||a,S=0,x=0,y=0,k=[];this.initialize=function(){n(),d=t("div",{className:"jasmine_html-reporter"},t("div",{className:"jasmine-banner"},t("a",{className:"jasmine-title",href:"http://jasmine.github.io/",target:"_blank"}),t("span",{className:"jasmine-version"},e.version)),t("ul",{className:"jasmine-symbol-summary"}),t("div",{className:"jasmine-alert"}),t("div",{className:"jasmine-results"},t("div",{className:"jasmine-failures"}))),h().appendChild(d)};var E;this.jasmineStarted=function(e){E=e.totalSpecsDefined||0,R.start()};var w=t("div",{className:"jasmine-summary"}),q=new e.ResultsNode({},"",null),A=q;this.suiteStarted=function(e){A.addChild(e,"suite"),A=A.last()},this.suiteDone=function(e){"failed"==e.status&&k.push(e),A!=q&&(A=A.parent)},this.specStarted=function(e){A.addChild(e,"spec")};var H=[];return this.specDone=function(e){if(u(e)&&"undefined"!=typeof console&&"undefined"!=typeof console.error&&console.error("Spec '"+e.fullName+"' has no expectations."),"disabled"!=e.status&&S++,p||(p=i(".jasmine-symbol-summary")),p.appendChild(t("li",{className:u(e)?"jasmine-empty":"jasmine-"+e.status,id:"spec_"+e.id,title:e.fullName})),"failed"==e.status){x++;for(var s=t("div",{className:"jasmine-spec-detail jasmine-failed"},t("div",{className:"jasmine-description"},t("a",{title:e.fullName,href:l(e)},e.fullName)),t("div",{className:"jasmine-messages"})),a=s.childNodes[1],n=0;n<e.failedExpectations.length;n++){var r=e.failedExpectations[n];a.appendChild(t("div",{className:"jasmine-result-message"},r.message)),a.appendChild(t("div",{className:"jasmine-stack-trace"},r.stack))}H.push(s)}"pending"==e.status&&y++},this.jasmineDone=function(e){function s(e,a){for(var i,n=0;n<e.children.length;n++){var r=e.children[n];if("suite"==r.type){var c=t("ul",{className:"jasmine-suite",id:"suite-"+r.result.id},t("li",{className:"jasmine-suite-detail"},t("a",{href:l(r.result)},r.result.description)));s(r,c),a.appendChild(c)}if("spec"==r.type){"jasmine-specs"!=a.getAttribute("class")&&(i=t("ul",{className:"jasmine-specs"}),a.appendChild(i));var m=r.result.description;u(r.result)&&(m="SPEC HAS NO EXPECTATIONS "+m),"pending"===r.result.status&&""!==r.result.pendingReason&&(m=m+" PENDING WITH MESSAGE: "+r.result.pendingReason),i.appendChild(t("li",{className:"jasmine-"+r.result.status,id:"spec-"+r.result.id},t("a",{href:l(r.result)},m)))}}}var a=i(".jasmine-banner"),n=i(".jasmine-alert"),m=e&&e.order;n.appendChild(t("span",{className:"jasmine-duration"},"finished in "+R.elapsed()/1e3+"s")),a.appendChild(t("div",{className:"jasmine-run-options"},t("span",{className:"jasmine-trigger"},"Options"),t("div",{className:"jasmine-payload"},t("div",{className:"jasmine-exceptions"},t("input",{className:"jasmine-raise",id:"jasmine-raise-exceptions",type:"checkbox"}),t("label",{className:"jasmine-label",for:"jasmine-raise-exceptions"},"raise exceptions")),t("div",{className:"jasmine-throw-failures"},t("input",{className:"jasmine-throw",id:"jasmine-throw-failures",type:"checkbox"}),t("label",{className:"jasmine-label",for:"jasmine-throw-failures"},"stop spec on expectation failure")),t("div",{className:"jasmine-random-order"},t("input",{className:"jasmine-random",id:"jasmine-random-order",type:"checkbox"}),t("label",{className:"jasmine-label",for:"jasmine-random-order"},"run tests in random order")))));var d=i("#jasmine-raise-exceptions");d.checked=!f.catchingExceptions(),d.onclick=v;var p=i("#jasmine-throw-failures");p.checked=f.throwingExpectationFailures(),p.onclick=g;var h=i("#jasmine-random-order");h.checked=f.randomTests(),h.onclick=C;var j=i(".jasmine-run-options"),N=j.querySelector(".jasmine-trigger"),b=j.querySelector(".jasmine-payload"),A=/\bjasmine-open\b/;if(N.onclick=function(){A.test(b.className)?b.className=b.className.replace(A,""):b.className+=" jasmine-open"},S<E){var I="Ran "+S+" of "+E+" specs - run all",P=m&&m.random?"?random=true":"?";n.appendChild(t("span",{className:"jasmine-bar jasmine-skipped"},t("a",{href:P,title:"Run all specs"},I)))}var T="",F="jasmine-bar ";E>0?(T+=r("spec",S)+", "+r("failure",x),y&&(T+=", "+r("pending spec",y)),F+=x>0?"jasmine-failed":"jasmine-passed"):(F+="jasmine-skipped",T+="No specs found");var W;m&&m.random&&(W=t("span",{className:"jasmine-seed-bar"},", randomized with seed ",t("a",{title:"randomized with seed "+m.seed,href:c(m.seed)},m.seed))),n.appendChild(t("span",{className:F},T,W));for(var D="jasmine-bar jasmine-errored",_="AfterAll ",L=0;L<k.length;L++)for(var O=k[L],Q=0;Q<O.failedExpectations.length;Q++)n.appendChild(t("span",{className:D},_+O.failedExpectations[Q].message));var U=e&&e.failedExpectations||[];for(L=0;L<U.length;L++){var z=U[L];n.appendChild(t("span",{className:D},_+z.message))}var G=i(".jasmine-results");if(G.appendChild(w),s(q,w),H.length){n.appendChild(t("span",{className:"jasmine-menu jasmine-bar jasmine-spec-list"},t("span",{},"Spec List | "),t("a",{className:"jasmine-failures-menu",href:"#"},"Failures"))),n.appendChild(t("span",{className:"jasmine-menu jasmine-bar jasmine-failure-list"},t("a",{className:"jasmine-spec-list-menu",href:"#"},"Spec List"),t("span",{}," | Failures "))),i(".jasmine-failures-menu").onclick=function(){o("jasmine-failure-list")},i(".jasmine-spec-list-menu").onclick=function(){o("jasmine-spec-list")},o("jasmine-failure-list");var $=i(".jasmine-failures");for(L=0;L<H.length;L++)$.appendChild(H[L])}},this}var a={start:function(){},elapsed:function(){return 0}};return s},jasmineRequire.HtmlSpecFilter=function(){function e(e){var s=e&&e.filterString()&&e.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),a=new RegExp(s);this.matches=function(e){return a.test(e)}}return e},jasmineRequire.ResultsNode=function(){function e(s,a,i){this.result=s,this.type=a,this.parent=i,this.children=[],this.addChild=function(s,a){this.children.push(new e(s,a,this))},this.last=function(){return this.children[this.children.length-1]}}return e},jasmineRequire.QueryString=function(){function e(e){function s(e){var s=[];for(var a in e)s.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return"?"+s.join("&")}function a(){var s=e.getWindowLocation().search.substring(1),a=[],i={};if(s.length>0){a=s.split("&");for(var n=0;n<a.length;n++){var t=a[n].split("="),r=decodeURIComponent(t[1]);"true"!==r&&"false"!==r||(r=JSON.parse(r)),i[decodeURIComponent(t[0])]=r}}return i}return this.navigateWithNewParam=function(s,a){e.getWindowLocation().search=this.fullStringWithNewParam(s,a)},this.fullStringWithNewParam=function(e,i){var n=a();return n[e]=i,s(n)},this.getParam=function(e){return a()[e]},this}return e};
//# sourceMappingURL=jasmine-html.min.js.map