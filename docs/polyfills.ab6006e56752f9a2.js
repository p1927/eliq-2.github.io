"use strict";(self.webpackChunkwhite_label_app=self.webpackChunkwhite_label_app||[]).push([[461],{50:(ee,J,ye)=>{ye(935)},935:()=>{const ee=globalThis;function J(t){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+t}const de=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,ft=Object.create,ht=Array.prototype.slice,Le="addEventListener",Me="removeEventListener",Ze=J(Le),Ae=J(Me),ce="true",ae="false",ke=J("");function je(t,r){return Zone.current.wrap(t,r)}function He(t,r,c,n,i){return Zone.current.scheduleMacroTask(t,r,c,n,i)}const H=J,Pe=typeof window<"u",_e=Pe?window:void 0,$=Pe&&_e||globalThis,dt="removeAttribute";function xe(t,r){for(let c=t.length-1;c>=0;c--)"function"==typeof t[c]&&(t[c]=je(t[c],r+"_"+c));return t}function We(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const ze=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in $)&&typeof $.process<"u"&&"[object process]"===$.process.toString(),Ge=!we&&!ze&&!(!Pe||!_e.HTMLElement),qe=typeof $.process<"u"&&"[object process]"===$.process.toString()&&!ze&&!(!Pe||!_e.HTMLElement),Re={},Xe=function(t){if(!(t=t||$.event))return;let r=Re[t.type];r||(r=Re[t.type]=H("ON_PROPERTY"+t.type));const c=this||t.target||$,n=c[r];let i;return Ge&&c===_e&&"error"===t.type?(i=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===i&&t.preventDefault()):(i=n&&n.apply(this,arguments),null!=i&&!i&&t.preventDefault()),i};function Ye(t,r,c){let n=de(t,r);if(!n&&c&&de(c,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const i=H("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;const l=n.get,_=n.set,E=r.slice(2);let g=Re[E];g||(g=Re[E]=H("ON_PROPERTY"+E)),n.set=function(C){let T=this;!T&&t===$&&(T=$),T&&("function"==typeof T[g]&&T.removeEventListener(E,Xe),_&&_.call(T,null),T[g]=C,"function"==typeof C&&T.addEventListener(E,Xe,!1))},n.get=function(){let C=this;if(!C&&t===$&&(C=$),!C)return null;const T=C[g];if(T)return T;if(l){let M=l.call(this);if(M)return n.set.call(this,M),"function"==typeof C[dt]&&C.removeAttribute(r),M}return null},Ne(t,r,n),t[i]=!0}function $e(t,r,c){if(r)for(let n=0;n<r.length;n++)Ye(t,"on"+r[n],c);else{const n=[];for(const i in t)"on"==i.slice(0,2)&&n.push(i);for(let i=0;i<n.length;i++)Ye(t,n[i],c)}}const re=H("originalInstance");function ve(t){const r=$[t];if(!r)return;$[H(t)]=r,$[t]=function(){const i=xe(arguments,t);switch(i.length){case 0:this[re]=new r;break;case 1:this[re]=new r(i[0]);break;case 2:this[re]=new r(i[0],i[1]);break;case 3:this[re]=new r(i[0],i[1],i[2]);break;case 4:this[re]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ue($[t],r);const c=new r(function(){});let n;for(n in c)"XMLHttpRequest"===t&&"responseBlob"===n||function(i){"function"==typeof c[i]?$[t].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:Ne($[t].prototype,i,{set:function(l){"function"==typeof l?(this[re][i]=je(l,t+"."+i),ue(this[re][i],l)):this[re][i]=l},get:function(){return this[re][i]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&($[t][n]=r[n])}function le(t,r,c){let n=t;for(;n&&!n.hasOwnProperty(r);)n=Ie(n);!n&&t[r]&&(n=t);const i=H(r);let l=null;if(n&&(!(l=n[i])||!n.hasOwnProperty(i))&&(l=n[i]=n[r],We(n&&de(n,r)))){const E=c(l,i,r);n[r]=function(){return E(this,arguments)},ue(n[r],l)}return l}function Et(t,r,c){let n=null;function i(l){const _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments)},n.apply(_.target,_.args),l}n=le(t,r,l=>function(_,E){const g=c(_,E);return g.cbIdx>=0&&"function"==typeof E[g.cbIdx]?He(g.name,E[g.cbIdx],g,i):l.apply(_,E)})}function ue(t,r){t[H("OriginalDelegate")]=r}let Ke=!1,Ve=!1;function pt(){if(Ke)return Ve;Ke=!0;try{const t=_e.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Ve=!0)}catch{}return Ve}let Ee=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){Ee=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{Ee=!1}const gt={useG:!0},ne={},Je={},Qe=new RegExp("^"+ke+"(\\w+)(true|false)$"),et=H("propagationStopped");function tt(t,r){const c=(r?r(t):t)+ae,n=(r?r(t):t)+ce,i=ke+c,l=ke+n;ne[t]={},ne[t][ae]=i,ne[t][ce]=l}function yt(t,r,c,n){const i=n&&n.add||Le,l=n&&n.rm||Me,_=n&&n.listeners||"eventListeners",E=n&&n.rmAll||"removeAllListeners",g=H(i),C="."+i+":",T="prependListener",M="."+T+":",w=function(v,h,G){if(v.isRemoved)return;const W=v.callback;let X;"object"==typeof W&&W.handleEvent&&(v.callback=p=>W.handleEvent(p),v.originalDelegate=W);try{v.invoke(v,h,[G])}catch(p){X=p}const V=v.options;return V&&"object"==typeof V&&V.once&&h[l].call(h,G.type,v.originalDelegate?v.originalDelegate:v.callback,V),X};function j(v,h,G){if(!(h=h||t.event))return;const W=v||h.target||t,X=W[ne[h.type][G?ce:ae]];if(X){const V=[];if(1===X.length){const p=w(X[0],W,h);p&&V.push(p)}else{const p=X.slice();for(let B=0;B<p.length&&(!h||!0!==h[et]);B++){const L=w(p[B],W,h);L&&V.push(L)}}if(1===V.length)throw V[0];for(let p=0;p<V.length;p++){const B=V[p];r.nativeScheduleMicroTask(()=>{throw B})}}}const U=function(v){return j(this,v,!1)},x=function(v){return j(this,v,!0)};function oe(v,h){if(!v)return!1;let G=!0;h&&void 0!==h.useG&&(G=h.useG);const W=h&&h.vh;let X=!0;h&&void 0!==h.chkDup&&(X=h.chkDup);let V=!1;h&&void 0!==h.rt&&(V=h.rt);let p=v;for(;p&&!p.hasOwnProperty(i);)p=Ie(p);if(!p&&v[i]&&(p=v),!p||p[g])return!1;const B=h&&h.eventNameToString,L={},R=p[g]=p[i],k=p[H(l)]=p[l],O=p[H(_)]=p[_],Q=p[H(E)]=p[E];let z;h&&h.prepend&&(z=p[H(h.prepend)]=p[h.prepend]);const Y=G?function(s){if(!L.isExisting)return R.call(L.target,L.eventName,L.capture?x:U,L.options)}:function(s){return R.call(L.target,L.eventName,s.invoke,L.options)},Z=G?function(s){if(!s.isRemoved){const a=ne[s.eventName];let f;a&&(f=a[s.capture?ce:ae]);const b=f&&s.target[f];if(b)for(let D=0;D<b.length;D++)if(b[D]===s){b.splice(D,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[f]=null);break}}if(s.allRemoved)return k.call(s.target,s.eventName,s.capture?x:U,s.options)}:function(s){return k.call(s.target,s.eventName,s.invoke,s.options)},be=h&&h.diff?h.diff:function(s,a){const f=typeof a;return"function"===f&&s.callback===a||"object"===f&&s.originalDelegate===a},fe=Zone[H("UNPATCHED_EVENTS")],Se=t[H("PASSIVE_EVENTS")],u=function(s,a,f,b,D=!1,m=!1){return function(){const P=this||t;let S=arguments[0];h&&h.transferEventName&&(S=h.transferEventName(S));let A=arguments[1];if(!A)return s.apply(this,arguments);if(we&&"uncaughtException"===S)return s.apply(this,arguments);let F=!1;if("function"!=typeof A){if(!A.handleEvent)return s.apply(this,arguments);F=!0}if(W&&!W(s,A,P,arguments))return;const K=Ee&&!!Se&&-1!==Se.indexOf(S),te=function I(s,a){return!Ee&&"object"==typeof s&&s?!!s.capture:Ee&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],K),pe=te?.signal;if(pe?.aborted)return;if(fe)for(let ie=0;ie<fe.length;ie++)if(S===fe[ie])return K?s.call(P,S,A,te):s.apply(this,arguments);const Fe=!!te&&("boolean"==typeof te||te.capture),it=!(!te||"object"!=typeof te)&&te.once,It=Zone.current;let Ue=ne[S];Ue||(tt(S,B),Ue=ne[S]);const ct=Ue[Fe?ce:ae];let Oe,ge=P[ct],at=!1;if(ge){if(at=!0,X)for(let ie=0;ie<ge.length;ie++)if(be(ge[ie],A))return}else ge=P[ct]=[];const lt=P.constructor.name,ut=Je[lt];ut&&(Oe=ut[S]),Oe||(Oe=lt+a+(B?B(S):S)),L.options=te,it&&(L.options.once=!1),L.target=P,L.capture=Fe,L.eventName=S,L.isExisting=at;const he=G?gt:void 0;he&&(he.taskData=L),pe&&(L.options.signal=void 0);const se=It.scheduleEventTask(Oe,A,he,f,b);if(pe){L.options.signal=pe;const ie=()=>se.zone.cancelTask(se);s.call(pe,"abort",ie,{once:!0}),he&&(he.removeAbortListener=()=>pe.removeEventListener("abort",ie))}return L.target=null,he&&(he.taskData=null),it&&(te.once=!0),!Ee&&"boolean"==typeof se.options||(se.options=te),se.target=P,se.capture=Fe,se.eventName=S,F&&(se.originalDelegate=A),m?ge.unshift(se):ge.push(se),D?P:void 0}};return p[i]=u(R,C,Y,Z,V),z&&(p[T]=u(z,M,function(s){return z.call(L.target,L.eventName,s.invoke,L.options)},Z,V,!0)),p[l]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=arguments[2],b=!!f&&("boolean"==typeof f||f.capture),D=arguments[1];if(!D)return k.apply(this,arguments);if(W&&!W(k,D,s,arguments))return;const m=ne[a];let P;m&&(P=m[b?ce:ae]);const S=P&&s[P];if(S)for(let A=0;A<S.length;A++){const F=S[A];if(be(F,D)){S.splice(A,1),F.isRemoved=!0,0!==S.length||(F.allRemoved=!0,s[P]=null,b||"string"!=typeof a)||(s[ke+"ON_PROPERTY"+a]=null);const K=F.data;return K?.removeAbortListener&&(K.removeAbortListener(),K.removeAbortListener=null),F.zone.cancelTask(F),V?s:void 0}}return k.apply(this,arguments)},p[_]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=[],b=nt(s,B?B(a):a);for(let D=0;D<b.length;D++){const m=b[D];f.push(m.originalDelegate?m.originalDelegate:m.callback)}return f},p[E]=function(){const s=this||t;let a=arguments[0];if(a){h&&h.transferEventName&&(a=h.transferEventName(a));const f=ne[a];if(f){const m=s[f[ae]],P=s[f[ce]];if(m){const S=m.slice();for(let A=0;A<S.length;A++){const F=S[A];this[l].call(this,a,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(P){const S=P.slice();for(let A=0;A<S.length;A++){const F=S[A];this[l].call(this,a,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const f=Object.keys(s);for(let b=0;b<f.length;b++){const m=Qe.exec(f[b]);let P=m&&m[1];P&&"removeListener"!==P&&this[E].call(this,P)}this[E].call(this,"removeListener")}if(V)return this},ue(p[i],R),ue(p[l],k),Q&&ue(p[E],Q),O&&ue(p[_],O),!0}let q=[];for(let v=0;v<c.length;v++)q[v]=oe(c[v],n);return q}function nt(t,r){if(!r){const l=[];for(let _ in t){const E=Qe.exec(_);let g=E&&E[1];if(g&&(!r||g===r)){const C=t[_];if(C)for(let T=0;T<C.length;T++)l.push(C[T])}}return l}let c=ne[r];c||(tt(r),c=ne[r]);const n=t[c[ae]],i=t[c[ce]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function mt(t,r){const c=t.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(i,l){i[et]=!0,n&&n.apply(i,l)})}const Ce=H("zoneTask");function Te(t,r,c,n){let i=null,l=null;c+=n;const _={};function E(C){const T=C.data;return T.args[0]=function(){return C.invoke.apply(this,arguments)},T.handleId=i.apply(t,T.args),C}function g(C){return l.call(t,C.data.handleId)}i=le(t,r+=n,C=>function(T,M){if("function"==typeof M[0]){const w={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?M[1]||0:void 0,args:M},j=M[0];M[0]=function(){try{return j.apply(this,arguments)}finally{w.isPeriodic||("number"==typeof w.handleId?delete _[w.handleId]:w.handleId&&(w.handleId[Ce]=null))}};const U=He(r,M[0],w,E,g);if(!U)return U;const x=U.data.handleId;return"number"==typeof x?_[x]=U:x&&(x[Ce]=U),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(U.ref=x.ref.bind(x),U.unref=x.unref.bind(x)),"number"==typeof x||x?x:U}return C.apply(t,M)}),l=le(t,c,C=>function(T,M){const w=M[0];let j;"number"==typeof w?j=_[w]:(j=w&&w[Ce],j||(j=w)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof w?delete _[w]:w&&(w[Ce]=null),j.zone.cancelTask(j)):C.apply(t,M)})}function rt(t,r,c){if(!c||0===c.length)return r;const n=c.filter(l=>l.target===t);if(!n||0===n.length)return r;const i=n[0].ignoreProperties;return r.filter(l=>-1===i.indexOf(l))}function ot(t,r,c,n){t&&$e(t,rt(t,r,c),n)}function Be(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function St(t,r,c,n,i){const l=Zone.__symbol__(n);if(r[l])return;const _=r[l]=r[n];r[n]=function(E,g,C){return g&&g.prototype&&i.forEach(function(T){const M=`${c}.${n}::`+T,w=g.prototype;try{if(w.hasOwnProperty(T)){const j=t.ObjectGetOwnPropertyDescriptor(w,T);j&&j.value?(j.value=t.wrapWithCurrentZone(j.value,M),t._redefineProperty(g.prototype,T,j)):w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],M))}else w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],M))}catch{}}),_.call(r,E,g,C)},t.attachOriginToPatched(r[n],_)}const st=function me(){const t=globalThis,r=!0===t[J("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function ye(){const t=ee.performance;function r(I){t&&t.mark&&t.mark(I)}function c(I,d){t&&t.measure&&t.measure(I,d)}r("Zone");let n=(()=>{class I{static#e=this.__symbol__=J;static assertZonePatched(){if(ee.Promise!==L.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=I.current;for(;e.parent;)e=e.parent;return e}static get current(){return k.zone}static get currentTask(){return O}static __load_patch(e,o,y=!1){if(L.hasOwnProperty(e)){const N=!0===ee[J("forceDuplicateZoneCheck")];if(!y&&N)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const N="Zone:"+e;r(N),L[e]=o(ee,I,R),c(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,o){this._parent=e,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,o)}get(e){const o=this.getZoneWith(e);if(o)return o._properties[e]}getZoneWith(e){let o=this;for(;o;){if(o._properties.hasOwnProperty(e))return o;o=o._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,o){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const y=this._zoneDelegate.intercept(this,e,o),N=this;return function(){return N.runGuarded(y,this,arguments,o)}}run(e,o,y,N){k={parent:k,zone:this};try{return this._zoneDelegate.invoke(this,e,o,y,N)}finally{k=k.parent}}runGuarded(e,o=null,y,N){k={parent:k,zone:this};try{try{return this._zoneDelegate.invoke(this,e,o,y,N)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{k=k.parent}}runTask(e,o,y){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===q&&(e.type===B||e.type===p))return;const N=e.state!=G;N&&e._transitionTo(G,h),e.runCount++;const Y=O;O=e,k={parent:k,zone:this};try{e.type==p&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,o,y)}catch(Z){if(this._zoneDelegate.handleError(this,Z))throw Z}}finally{e.state!==q&&e.state!==X&&(e.type==B||e.data&&e.data.isPeriodic?N&&e._transitionTo(h,G):(e.runCount=0,this._updateTaskCount(e,-1),N&&e._transitionTo(q,G,q))),k=k.parent,O=Y}}scheduleTask(e){if(e.zone&&e.zone!==this){let y=this;for(;y;){if(y===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);y=y.parent}}e._transitionTo(v,q);const o=[];e._zoneDelegates=o,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(y){throw e._transitionTo(X,v,q),this._zoneDelegate.handleError(this,y),y}return e._zoneDelegates===o&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,o,y,N){return this.scheduleTask(new _(V,e,o,y,N,void 0))}scheduleMacroTask(e,o,y,N,Y){return this.scheduleTask(new _(p,e,o,y,N,Y))}scheduleEventTask(e,o,y,N,Y){return this.scheduleTask(new _(B,e,o,y,N,Y))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===h||e.state===G){e._transitionTo(W,h,G);try{this._zoneDelegate.cancelTask(this,e)}catch(o){throw e._transitionTo(X,W),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(e,-1),e._transitionTo(q,W),e.runCount=0,e}}_updateTaskCount(e,o){const y=e._zoneDelegates;-1==o&&(e._zoneDelegates=null);for(let N=0;N<y.length;N++)y[N]._updateTaskCount(e.type,o)}}return I})();const i={name:"",onHasTask:(I,d,e,o)=>I.hasTask(e,o),onScheduleTask:(I,d,e,o)=>I.scheduleTask(e,o),onInvokeTask:(I,d,e,o,y,N)=>I.invokeTask(e,o,y,N),onCancelTask:(I,d,e,o)=>I.cancelTask(e,o)};class l{get zone(){return this._zone}constructor(d,e,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=d,this._parentDelegate=e,this._forkZS=o&&(o&&o.onFork?o:e._forkZS),this._forkDlgt=o&&(o.onFork?e:e._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:e._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:e._interceptZS),this._interceptDlgt=o&&(o.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:e._invokeZS),this._invokeDlgt=o&&(o.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:e._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:e._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:e._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:e._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const y=o&&o.onHasTask;(y||e&&e._hasTaskZS)&&(this._hasTaskZS=y?o:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(d,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,e):new n(d,e)}intercept(d,e,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,e,o):e}invoke(d,e,o,y,N){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,e,o,y,N):e.apply(o,y)}handleError(d,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,e)}scheduleTask(d,e){let o=e;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,e),o||(o=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=V)throw new Error("Task is missing scheduleFn.");U(e)}return o}invokeTask(d,e,o,y){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,e,o,y):e.callback.apply(o,y)}cancelTask(d,e){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");o=e.cancelFn(e)}return o}hasTask(d,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,e)}catch(o){this.handleError(d,o)}}_updateTaskCount(d,e){const o=this._taskCounts,y=o[d],N=o[d]=y+e;if(N<0)throw new Error("More tasks executed then were scheduled.");0!=y&&0!=N||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:d})}}class _{constructor(d,e,o,y,N,Y){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=e,this.data=y,this.scheduleFn=N,this.cancelFn=Y,!o)throw new Error("callback is not defined");this.callback=o;const Z=this;this.invoke=d===B&&y&&y.useG?_.invokeTask:function(){return _.invokeTask.call(ee,Z,this,arguments)}}static invokeTask(d,e,o){d||(d=this),Q++;try{return d.runCount++,d.zone.runTask(d,e,o)}finally{1==Q&&x(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,v)}_transitionTo(d,e,o){if(this._state!==e&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${e}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=d,d==q&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const E=J("setTimeout"),g=J("Promise"),C=J("then");let w,T=[],M=!1;function j(I){if(w||ee[g]&&(w=ee[g].resolve(0)),w){let d=w[C];d||(d=w.then),d.call(w,I)}else ee[E](I,0)}function U(I){0===Q&&0===T.length&&j(x),I&&T.push(I)}function x(){if(!M){for(M=!0;T.length;){const I=T;T=[];for(let d=0;d<I.length;d++){const e=I[d];try{e.zone.runTask(e,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),M=!1}}const oe={name:"NO ZONE"},q="notScheduled",v="scheduling",h="scheduled",G="running",W="canceling",X="unknown",V="microTask",p="macroTask",B="eventTask",L={},R={symbol:J,currentZoneFrame:()=>k,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:U,showUncaughtError:()=>!n[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:j};let k={parent:null,zone:new n(null,null)},O=null,Q=0;function z(){}return c("Zone","Zone"),n}(),t.Zone}();(function Nt(t){(function Ct(t){t.__load_patch("ZoneAwarePromise",(r,c,n)=>{const i=Object.getOwnPropertyDescriptor,l=Object.defineProperty,E=n.symbol,g=[],C=!1!==r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=E("Promise"),M=E("then"),w="__creationTrace__";n.onUnhandledError=u=>{if(n.showUncaughtError()){const s=u&&u.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(u)}},n.microtaskDrainDone=()=>{for(;g.length;){const u=g.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(s){U(s)}}};const j=E("unhandledPromiseRejectionHandler");function U(u){n.onUnhandledError(u);try{const s=c[j];"function"==typeof s&&s.call(this,u)}catch{}}function x(u){return u&&u.then}function oe(u){return u}function q(u){return Z.reject(u)}const v=E("state"),h=E("value"),G=E("finally"),W=E("parentPromiseValue"),X=E("parentPromiseState"),V="Promise.then",p=null,B=!0,L=!1,R=0;function k(u,s){return a=>{try{I(u,s,a)}catch(f){I(u,!1,f)}}}const O=function(){let u=!1;return function(a){return function(){u||(u=!0,a.apply(null,arguments))}}},Q="Promise resolved with itself",z=E("currentTaskTrace");function I(u,s,a){const f=O();if(u===a)throw new TypeError(Q);if(u[v]===p){let b=null;try{("object"==typeof a||"function"==typeof a)&&(b=a&&a.then)}catch(D){return f(()=>{I(u,!1,D)})(),u}if(s!==L&&a instanceof Z&&a.hasOwnProperty(v)&&a.hasOwnProperty(h)&&a[v]!==p)e(a),I(u,a[v],a[h]);else if(s!==L&&"function"==typeof b)try{b.call(a,f(k(u,s)),f(k(u,!1)))}catch(D){f(()=>{I(u,!1,D)})()}else{u[v]=s;const D=u[h];if(u[h]=a,u[G]===G&&s===B&&(u[v]=u[X],u[h]=u[W]),s===L&&a instanceof Error){const m=c.currentTask&&c.currentTask.data&&c.currentTask.data[w];m&&l(a,z,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<D.length;)o(u,D[m++],D[m++],D[m++],D[m++]);if(0==D.length&&s==L){u[v]=R;let m=a;try{throw new Error("Uncaught (in promise): "+function _(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(P){m=P}C&&(m.throwOriginal=!0),m.rejection=a,m.promise=u,m.zone=c.current,m.task=c.currentTask,g.push(m),n.scheduleMicroTask()}}}return u}const d=E("rejectionHandledHandler");function e(u){if(u[v]===R){try{const s=c[d];s&&"function"==typeof s&&s.call(this,{rejection:u[h],promise:u})}catch{}u[v]=L;for(let s=0;s<g.length;s++)u===g[s].promise&&g.splice(s,1)}}function o(u,s,a,f,b){e(u);const D=u[v],m=D?"function"==typeof f?f:oe:"function"==typeof b?b:q;s.scheduleMicroTask(V,()=>{try{const P=u[h],S=!!a&&G===a[G];S&&(a[W]=P,a[X]=D);const A=s.run(m,void 0,S&&m!==q&&m!==oe?[]:[P]);I(a,!0,A)}catch(P){I(a,!1,P)}},a)}const N=function(){},Y=r.AggregateError;class Z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return s instanceof Z?s:I(new this(null),B,s)}static reject(s){return I(new this(null),L,s)}static withResolvers(){const s={};return s.promise=new Z((a,f)=>{s.resolve=a,s.reject=f}),s}static any(s){if(!s||"function"!=typeof s[Symbol.iterator])return Promise.reject(new Y([],"All promises were rejected"));const a=[];let f=0;try{for(let m of s)f++,a.push(Z.resolve(m))}catch{return Promise.reject(new Y([],"All promises were rejected"))}if(0===f)return Promise.reject(new Y([],"All promises were rejected"));let b=!1;const D=[];return new Z((m,P)=>{for(let S=0;S<a.length;S++)a[S].then(A=>{b||(b=!0,m(A))},A=>{D.push(A),f--,0===f&&(b=!0,P(new Y(D,"All promises were rejected")))})})}static race(s){let a,f,b=new this((P,S)=>{a=P,f=S});function D(P){a(P)}function m(P){f(P)}for(let P of s)x(P)||(P=this.resolve(P)),P.then(D,m);return b}static all(s){return Z.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(s,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(s,a){let f,b,D=new this((A,F)=>{f=A,b=F}),m=2,P=0;const S=[];for(let A of s){x(A)||(A=this.resolve(A));const F=P;try{A.then(K=>{S[F]=a?a.thenCallback(K):K,m--,0===m&&f(S)},K=>{a?(S[F]=a.errorCallback(K),m--,0===m&&f(S)):b(K)})}catch(K){b(K)}m++,P++}return m-=2,0===m&&f(S),D}constructor(s){const a=this;if(!(a instanceof Z))throw new Error("Must be an instanceof Promise.");a[v]=p,a[h]=[];try{const f=O();s&&s(f(k(a,B)),f(k(a,L)))}catch(f){I(a,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Z}then(s,a){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||Z);const b=new f(N),D=c.current;return this[v]==p?this[h].push(D,b,s,a):o(this,D,b,s,a),b}catch(s){return this.then(null,s)}finally(s){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=Z);const f=new a(N);f[G]=G;const b=c.current;return this[v]==p?this[h].push(b,f,s,s):o(this,b,f,s,s),f}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;const De=r[T]=r.Promise;r.Promise=Z;const be=E("thenPatched");function fe(u){const s=u.prototype,a=i(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const f=s.then;s[M]=f,u.prototype.then=function(b,D){return new Z((P,S)=>{f.call(this,P,S)}).then(b,D)},u[be]=!0}return n.patchThen=fe,De&&(fe(De),le(r,"fetch",u=>function Se(u){return function(s,a){let f=u.apply(s,a);if(f instanceof Z)return f;let b=f.constructor;return b[be]||fe(b),f}}(u))),Promise[c.__symbol__("uncaughtPromiseErrors")]=g,Z})})(t),function Dt(t){t.__load_patch("toString",r=>{const c=Function.prototype.toString,n=H("OriginalDelegate"),i=H("Promise"),l=H("Error"),_=function(){if("function"==typeof this){const T=this[n];if(T)return"function"==typeof T?c.call(T):Object.prototype.toString.call(T);if(this===Promise){const M=r[i];if(M)return c.call(M)}if(this===Error){const M=r[l];if(M)return c.call(M)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}})}(t),function Ot(t){t.__load_patch("util",(r,c,n)=>{const i=Be(r);n.patchOnProperties=$e,n.patchMethod=le,n.bindArguments=xe,n.patchMacroTask=Et;const l=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");r[_]&&(r[l]=r[_]),r[l]&&(c[l]=c[_]=r[l]),n.patchEventPrototype=mt,n.patchEventTarget=yt,n.isIEOrEdge=pt,n.ObjectDefineProperty=Ne,n.ObjectGetOwnPropertyDescriptor=de,n.ObjectCreate=ft,n.ArraySlice=ht,n.patchClass=ve,n.wrapWithCurrentZone=je,n.filterProperties=rt,n.attachOriginToPatched=ue,n._redefineProperty=Object.defineProperty,n.patchCallbacks=St,n.getGlobalObjects=()=>({globalSources:Je,zoneSymbolEventNames:ne,eventNames:i,isBrowser:Ge,isMix:qe,isNode:we,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ke,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Me})})}(t)})(st),function Rt(t){t.__load_patch("legacy",r=>{const c=r[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",r=>{const c="set",n="clear";Te(r,c,n,"Timeout"),Te(r,c,n,"Interval"),Te(r,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{Te(r,"request","cancel","AnimationFrame"),Te(r,"mozRequest","mozCancel","AnimationFrame"),Te(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,c)=>{const n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++)le(r,n[i],(_,E,g)=>function(C,T){return c.current.run(_,r,T,g)})}),t.__load_patch("EventTarget",(r,c,n)=>{(function Pt(t,r){r.patchEventPrototype(t,r)})(r,n),function bt(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=r.getGlobalObjects();for(let g=0;g<c.length;g++){const C=c[g],w=_+(C+l),j=_+(C+i);n[C]={},n[C][l]=w,n[C][i]=j}const E=t.EventTarget;E&&E.prototype&&r.patchEventTarget(t,r,[E&&E.prototype])}(r,n);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,c,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,c,n)=>{ve("IntersectionObserver")}),t.__load_patch("FileReader",(r,c,n)=>{ve("FileReader")}),t.__load_patch("on_property",(r,c,n)=>{!function wt(t,r){if(we&&!qe||Zone[t.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let n=[];if(Ge){const i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function Tt(){try{const t=_e.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];ot(i,Be(i),c&&c.concat(l),Ie(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){const l=r[n[i]];l&&l.prototype&&ot(l.prototype,Be(l.prototype),c)}}(n,r)}),t.__load_patch("customElements",(r,c,n)=>{!function vt(t,r){const{isBrowser:c,isMix:n}=r.getGlobalObjects();(c||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,c)=>{!function C(T){const M=T.XMLHttpRequest;if(!M)return;const w=M.prototype;let U=w[Ze],x=w[Ae];if(!U){const R=T.XMLHttpRequestEventTarget;if(R){const k=R.prototype;U=k[Ze],x=k[Ae]}}const oe="readystatechange",q="scheduled";function v(R){const k=R.data,O=k.target;O[_]=!1,O[g]=!1;const Q=O[l];U||(U=O[Ze],x=O[Ae]),Q&&x.call(O,oe,Q);const z=O[l]=()=>{if(O.readyState===O.DONE)if(!k.aborted&&O[_]&&R.state===q){const d=O[c.__symbol__("loadfalse")];if(0!==O.status&&d&&d.length>0){const e=R.invoke;R.invoke=function(){const o=O[c.__symbol__("loadfalse")];for(let y=0;y<o.length;y++)o[y]===R&&o.splice(y,1);!k.aborted&&R.state===q&&e.call(R)},d.push(R)}else R.invoke()}else!k.aborted&&!1===O[_]&&(O[g]=!0)};return U.call(O,oe,z),O[n]||(O[n]=R),B.apply(O,k.args),O[_]=!0,R}function h(){}function G(R){const k=R.data;return k.aborted=!0,L.apply(k.target,k.args)}const W=le(w,"open",()=>function(R,k){return R[i]=0==k[2],R[E]=k[1],W.apply(R,k)}),V=H("fetchTaskAborting"),p=H("fetchTaskScheduling"),B=le(w,"send",()=>function(R,k){if(!0===c.current[p]||R[i])return B.apply(R,k);{const O={target:R,url:R[E],isPeriodic:!1,args:k,aborted:!1},Q=He("XMLHttpRequest.send",h,O,v,G);R&&!0===R[g]&&!O.aborted&&Q.state===q&&Q.invoke()}}),L=le(w,"abort",()=>function(R,k){const O=function j(R){return R[n]}(R);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===c.current[V])return L.apply(R,k)})}(r);const n=H("xhrTask"),i=H("xhrSync"),l=H("xhrListener"),_=H("xhrScheduled"),E=H("xhrURL"),g=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function _t(t,r){const c=t.constructor.name;for(let n=0;n<r.length;n++){const i=r[n],l=t[i];if(l){if(!We(de(t,i)))continue;t[i]=(E=>{const g=function(){return E.apply(this,xe(arguments,c+"."+i))};return ue(g,E),g})(l)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,c)=>{function n(i){return function(l){nt(r,i).forEach(E=>{const g=r.PromiseRejectionEvent;if(g){const C=new g(i,{promise:l.promise,reason:l.rejection});E.invoke(C)}})}}r.PromiseRejectionEvent&&(c[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,c,n)=>{!function kt(t,r){r.patchMethod(t,"queueMicrotask",c=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,n)})}(st)}},ee=>{ee(ee.s=50)}]);