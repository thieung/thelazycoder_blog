(self.webpackChunk=self.webpackChunk||[]).push([[601],{6373:function(n,e,t){"use strict";var r=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function i(n){try{s(r.next(n))}catch(n){a(n)}}function c(n){try{s(r.throw(n))}catch(n){a(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}s((r=r.apply(n,e||[])).next())}))},o=this&&this.__generator||function(n,e){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(n,i)}catch(n){a=[6,n],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};e.__esModule=!0;var a,i=t(5885),c=document.getElementById("connect-phantom"),s=window,u=(0,i.clusterApiUrl)("devnet"),l=new i.Connection(u);c.addEventListener("click",(function(){return r(void 0,void 0,void 0,(function(){var n,e,t;return o(this,(function(c){switch(c.label){case 0:return[4,r(void 0,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s.solana.connect()];case 1:case 2:return n.sent(),[3,3];case 3:return[2]}}))}))];case 1:c.sent(),c.label=2;case 2:return c.trys.push([2,7,,8]),[4,r(void 0,void 0,void 0,(function(){var n,e,t;return o(this,(function(r){switch(r.label){case 0:return n=new i.PublicKey("9ZZoqoTfzMvpzeM719AbDnxdTBGaz2UYK77ZCwb5CQDD"),(e=(new i.Transaction).add(i.SystemProgram.transfer({fromPubkey:a.publicKey,toPubkey:n,lamports:.0125*i.LAMPORTS_PER_SOL}))).feePayer=a.publicKey,t=e,[4,l.getRecentBlockhash()];case 1:return t.recentBlockhash=r.sent().blockhash,[2,e]}}))}))];case 3:return(n=c.sent())?[4,a.signTransaction(n)]:[2];case 4:return e=c.sent(),[4,l.sendRawTransaction(e.serialize())];case 5:return t=c.sent(),[4,l.confirmTransaction(t)];case 6:return c.sent(),[3,8];case 7:return c.sent(),[3,8];case 8:return[2]}}))}))})),window.onload=function(){r(void 0,void 0,void 0,(function(){var n,e;return o(this,(function(t){return"solana"in window&&(n=window,(e=n.solana).isPhantom)?[2,e]:(c.disabled=!0,[2])}))})).then((function(n){a=n})).catch((function(){}))}},6601:()=>{},9214:()=>{},5568:()=>{},5024:()=>{}},n=>{n.O(0,[216],(()=>{return e=6373,n(n.s=e);var e}));n.O()}]);
//# sourceMappingURL=solana.bundle.js.map