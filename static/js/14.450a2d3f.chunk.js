(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1402:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(46),i=n(58),o=n(780),s=n(47),j=n(362),u=n(369),l=n(2),b=n(13),a=n(904),d=n(92),O=n(1),x=function(){var t=Object(b.b)().t;return Object(O.jsx)(l.n,{mb:"24px",children:Object(O.jsxs)(l.o,{children:[Object(O.jsx)(d.a,{to:"/",children:t("Home")}),Object(O.jsx)(d.a,{to:"/prediction",children:t("Prediction")}),Object(O.jsx)(l.jc,{children:t("Leaderboard")})]})})},h=function(){var t=Object(b.b)().t;return Object(O.jsxs)(a.a,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(l.Y,{as:"h1",scale:"xxl",color:"secondary",children:t("Leaderboard")})]})},f=n(396),p=n(407),m=n(251),g=n(397);var v,B,k,w,S,y,W,N,D,C,L,F=n(62),A=n(241),R=n(5),T=n(52),I=n(10),z=n(7),U=n(4),P=n(36),M=n(239),V=n(364),H=n(93),_=n(131),E=["children"],q=["amount","textPrefix","textColor"],Y=function(t){var e=t.children,n=Object(T.a)(t,E);return Object(O.jsx)(l.W,Object(R.a)(Object(R.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:e}))},Q=function(t){var e=t.amount,n=t.textPrefix,c=void 0===n?"":n,r=t.textColor,i=void 0===r?"text":r,o=Object(T.a)(t,q),s=Object(_.g)().times(Math.abs(e)).toNumber();return e?Object(O.jsxs)(l.W,Object(R.a)(Object(R.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(O.jsx)(l.jc,{fontWeight:"bold",color:i,children:"".concat(c).concat(e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(O.jsx)(l.jc,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},G=function(t){var e=t.amount,n=Object(b.b)().t;return Object(O.jsxs)(Y,{mb:"4px",children:[Object(O.jsx)(l.jc,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(O.jsx)(Q,{amount:e,textPrefix:e>0?"+":"",textColor:e>0?"success":"failure"})]})},J=n(3),X=n.n(J),K=n(12),$=n(804),Z=n.n($),tt=n(248),et=n.n(tt),nt=U.e.div(v||(v=Object(z.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(t){var e=t.theme,n=t.bgColor;return e.colors[n]})),ct=U.e.div(B||(B=Object(z.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),rt=function(t){var e=t.position,n=Object(b.b)().t,c=e===s.a.BULL,r=c?"success":"failure",i=c?Object(O.jsx)(l.g,{width:"24px",color:"white"}):Object(O.jsx)(l.d,{width:"24px",color:"white"});return Object(O.jsxs)(nt,{bgColor:r,children:[i,Object(O.jsx)(ct,{children:n(c?"Up":"Down")})]})},it=function(t){var e=t.numberOfBets,n=void 0===e?5:e,r=t.account,i=Object(c.useState)(!1),o=Object(I.a)(i,2),s=o[0],j=o[1],u=Object(c.useState)([]),a=Object(I.a)(u,2),d=a[0],x=a[1],h=Object(b.b)().t,f=et()(d,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var t=Object(K.a)(X.a.mark((function t(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,Object(F.e)({user:r.toLowerCase()},n);case 4:e=t.sent,x(e.map(F.s));case 6:return t.prev=6,j(!1),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})));return function(){return t.apply(this,arguments)}})()()}),[r,n,j,x]),Object(O.jsxs)(l.fc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(l.kc,{children:h("Round")}),Object(O.jsx)(l.kc,{children:h("Direction")}),Object(O.jsx)(l.kc,{textAlign:"right",children:h("Winnings (BNB)")})]})}),Object(O.jsx)("tbody",{children:s?Z()(n).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(l.hc,{children:Object(O.jsx)(l.Ub,{width:"80px"})}),Object(O.jsx)(l.hc,{children:Object(O.jsx)(l.Ub,{width:"60px",height:"32px"})}),Object(O.jsx)(l.hc,{children:Object(O.jsx)(l.Ub,{width:"80px"})})]},t)})):f.map((function(t){var e=t.position===t.round.position;return Object(O.jsxs)("tr",{children:[Object(O.jsx)(l.hc,{textAlign:"center",fontWeight:"bold",children:t.round.epoch.toLocaleString()}),Object(O.jsx)(l.hc,{textAlign:"center",children:Object(O.jsx)(rt,{position:t.position})}),Object(O.jsx)(l.hc,{textAlign:"right",children:Object(O.jsx)(Q,{amount:e?t.claimedNetBNB:t.amount,textPrefix:e?"+":"-",textColor:e?"success":"failure"})})]},t.id)}))})]})},ot=function(t){var e=t.account,n=Object(b.b)().t,r=Object(c.useState)(!1),i=Object(I.a)(r,2),o=i[0],s=i[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(l.W,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(O.jsx)(l.jc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(O.jsx)(l.H,{}):Object(O.jsx)(l.K,{})]}),o&&Object(O.jsx)(it,{account:e})]})},st=function(t){var e=t.account,n=Object(b.b)().t;return Object(O.jsxs)(l.n,{p:"24px",children:[Object(O.jsx)(l.jc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(O.jsx)(l.v,{children:Object(O.jsx)(it,{account:e})})]})},jt=Object(U.e)(l.ib)(k||(k=Object(z.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.text})),ut=function(t){var e,n,c,r,i,j=t.account,u=t.onDismiss,a=t.onBeforeDismiss,d=Object(b.b)().t,x=Object(H.a)().theme,h=Object(o.u)(j),f=Object(M.b)(j),p=Object(o.q)()===s.c.LOADING,m=Object(l.Cc)().isDesktop;return Object(O.jsxs)(l.yb,{minWidth:"320px",children:[Object(O.jsxs)(l.zb,{background:x.colors.gradients.bubblegum,children:[Object(O.jsxs)(l.W,{alignItems:"center",style:{flex:1},children:[Object(O.jsx)(l.n,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(O.jsx)(l.Mb,{src:"/images/nfts/".concat(null===(e=f.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:96,width:96})}),Object(O.jsxs)(l.n,{children:[f.username&&Object(O.jsx)(l.Y,{scale:"lg",mb:"8px",children:f.username}),Object(O.jsx)(jt,{href:Object(P.e)(j,"address"),children:Object(V.a)(j)})]})]}),Object(O.jsx)(l.bb,{variant:"text",onClick:function(){a&&a(),u()},"aria-label":"Close the dialog",children:Object(O.jsx)(l.M,{color:"text",width:"24px"})})]}),null===h?Object(O.jsx)(l.jc,{p:"32px",textAlign:"center",fontWeight:"bold",children:d("No results found.")}):Object(O.jsxs)(l.n,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(O.jsxs)(l.X,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(O.jsxs)(l.n,{children:[Object(O.jsx)(l.jc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Net Winnings")}),p?Object(O.jsx)(l.Ub,{}):Object(O.jsx)(Q,{amount:null===h||void 0===h?void 0:h.netBNB,textPrefix:(null===h||void 0===h?void 0:h.netBNB)>0?"+":"",textColor:(null===h||void 0===h?void 0:h.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(O.jsxs)(l.n,{children:[Object(O.jsx)(l.jc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Win Rate")}),p?Object(O.jsx)(l.Ub,{}):Object(O.jsx)(l.jc,{fontWeight:"bold",children:"".concat(null===h||void 0===h||null===(c=h.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsxs)(l.n,{children:[Object(O.jsx)(l.jc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Won")}),p?Object(O.jsx)(l.Ub,{}):Object(O.jsx)(l.jc,{fontWeight:"bold",children:null===h||void 0===h||null===(r=h.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(O.jsxs)(l.n,{children:[Object(O.jsx)(l.jc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Played")}),p?Object(O.jsx)(l.Ub,{}):Object(O.jsx)(l.jc,{fontWeight:"bold",children:null===h||void 0===h||null===(i=h.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),m?Object(O.jsx)(st,{account:j}):Object(O.jsx)(ot,{account:j})]})]})},lt=["user"],bt=Object(U.e)(l.n)(w||(w=Object(z.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),at=Object(U.e)(l.n)(S||(S=Object(z.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),dt=function(t){var e,n,c=t.user,r=Object(T.a)(t,lt),i=Object(b.b)().t,o=Object(M.b)(c.id),s=Object(l.Dc)(Object(O.jsx)(ut,{account:c.id})),j=Object(I.a)(s,1)[0];return Object(O.jsxs)(l.ac,{component:Object(O.jsxs)(l.W,Object(R.a)(Object(R.a)({alignItems:"center"},r),{},{children:[Object(O.jsxs)(at,{children:[Object(O.jsx)(l.jc,{color:"primary",fontWeight:"bold",children:o.username||Object(V.a)(c.id)})," "]}),Object(O.jsx)(bt,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(O.jsx)(l.Mb,{src:"/images/nfts/".concat(null===(e=o.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(O.jsx)(l.bc,{onClick:j,children:i("View Stats")}),Object(O.jsx)(l.bc,{as:l.hb,href:Object(P.e)(c.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})},Ot=["rank","user"],xt=function(t){var e=t.rank,n=t.user,c=Object(T.a)(t,Ot);return Object(O.jsxs)("tr",Object(R.a)(Object(R.a)({},c),{},{children:[e?Object(O.jsx)(l.hc,{children:Object(O.jsx)(l.jc,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(e)})}):Object(O.jsx)(l.hc,{}),Object(O.jsx)(l.hc,{children:Object(O.jsx)(dt,{user:n})}),Object(O.jsx)(l.hc,{children:Object(O.jsx)(Q,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(O.jsx)(l.hc,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(O.jsx)(l.hc,{textAlign:"center",children:Object(O.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(O.jsx)(l.hc,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},ht=function(t){var e=t.results,n=Object(b.b)().t;return Object(O.jsx)(A.a,{mb:"24px",children:Object(O.jsx)(l.v,{children:Object(O.jsxs)(l.fc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(l.kc,{width:"60px",children:"\xa0"}),Object(O.jsx)(l.kc,{textAlign:"left",children:n("User")}),Object(O.jsx)(l.kc,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(O.jsx)(l.kc,{children:n("Win Rate")}),Object(O.jsx)(l.kc,{children:n("Rounds Won")}),Object(O.jsx)(l.kc,{children:n("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:e.map((function(t,e){return Object(O.jsx)(xt,{rank:e+4,user:t},t.id)}))})]})})})},ft=Object(U.e)(l.n)(y||(y=Object(z.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(t){return t.theme.card.background}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.colors.cardBorder})),pt=function(t){var e=t.rank,n=t.user,c=Object(b.b)().t;return Object(O.jsxs)(ft,{p:"16px",children:[Object(O.jsxs)(Y,{mb:"16px",children:[e?Object(O.jsx)(l.jc,{fontWeight:"bold",color:"secondary",children:"#".concat(e)}):Object(O.jsx)("div",{}),Object(O.jsx)(dt,{user:n})]}),Object(O.jsxs)(Y,{mb:"4px",children:[Object(O.jsx)(l.jc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(O.jsx)(l.jc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)(G,{amount:n.netBNB}),Object(O.jsxs)(Y,{children:[Object(O.jsx)(l.jc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(O.jsx)(l.jc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},mt=function(t){var e=t.results;return Object(O.jsx)(l.n,{mb:"24px",children:e.map((function(t,e){return Object(O.jsx)(pt,{rank:e+4,user:t},t.id)}))})},gt=Object(U.e)(l.fb)(W||(W=Object(z.a)(["\n  transform: rotate(30deg);\n"]))),vt=Object(U.e)(l.gb)(N||(N=Object(z.a)(["\n  transform: rotate(-30deg);\n"]))),Bt=function(t){var e,n,c=t.rank,r=t.user,i=Object(b.b)().t,o=function(t){return 3===t?"bronze":2===t?"silver":"gold"}(c),s=Object(M.b)(r.id),j=Object(l.Dc)(Object(O.jsx)(ut,{account:r.id})),u=Object(I.a)(j,1)[0];return Object(O.jsx)(l.v,{ribbon:Object(O.jsx)(l.z,{variantColor:o,text:"#".concat(c),ribbonPosition:"left"}),children:Object(O.jsxs)(l.w,{p:"24px",children:[Object(O.jsx)(l.W,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(O.jsxs)(l.ac,{component:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(l.W,{mb:"4px",children:[Object(O.jsx)(gt,{color:o,width:"32px"}),Object(O.jsx)(l.n,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(O.jsx)(l.Mb,{src:"/images/nfts/".concat(null===(e=s.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:64,width:64})}),Object(O.jsx)(vt,{color:o,width:"32px"})]}),Object(O.jsx)(l.jc,{color:"primary",fontWeight:"bold",textAlign:"center",children:s.username||Object(V.a)(r.id)})]}),options:{placement:"bottom"},children:[Object(O.jsx)(l.bc,{onClick:u,children:i("View Stats")}),Object(O.jsx)(l.bc,{as:l.hb,href:Object(P.e)(r.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})}),Object(O.jsxs)(Y,{mb:"4px",children:[Object(O.jsx)(l.jc,{fontSize:"12px",color:"textSubtle",children:i("Win Rate")}),Object(O.jsx)(l.jc,{fontWeight:"bold",children:"".concat(r.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)(G,{amount:r.netBNB}),Object(O.jsxs)(Y,{children:[Object(O.jsx)(l.jc,{fontSize:"12px",color:"textSubtle",children:i("Rounds Won")}),Object(O.jsx)(l.jc,{fontWeight:"bold",children:"".concat(r.totalBetsClaimed.toLocaleString(),"/").concat(r.totalBets.toLocaleString())})]})]})})},kt=function(){var t,e=Object(l.Cc)().isDesktop,n=Object(b.b)().t,c=Object(o.r)(),r=(t=c,Object(f.a)(t)||Object(p.a)(t)||Object(m.a)(t)||Object(g.a)()),u=r[0],a=r[1],d=r[2],x=r.slice(3),h=Object(o.q)()===s.c.LOADING,v=Object(o.s)(),B=Object(o.p)(),k=Object(i.b)();return Object(O.jsxs)(l.n,{children:[Object(O.jsx)(A.a,{mb:"16px",children:Object(O.jsxs)(l.X,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[Object(O.jsx)(Bt,{rank:1,user:u}),Object(O.jsx)(Bt,{rank:2,user:a}),Object(O.jsx)(Bt,{rank:3,user:d})]})}),e?Object(O.jsx)(ht,{results:x}):Object(O.jsx)(mt,{results:x}),Object(O.jsx)(l.W,{mb:"40px",justifyContent:"center",children:B&&Object(O.jsx)(l.r,{variant:"secondary",isLoading:h,endIcon:h?Object(O.jsx)(l.h,{spin:!0,color:"currentColor"}):void 0,onClick:function(){k(Object(j.i)(v+F.a))},children:n(h?"Loading...":"View More")})})]})},wt=n(116),St=function(){var t=Object(r.c)().account,e=Object(b.b)().t,n=Object(i.b)(),s=Object(o.u)(t),u=Object(l.Cc)().isDesktop;return Object(c.useEffect)((function(){t&&(n(Object(wt.d)(t)),n(Object(j.b)(t)))}),[t,n]),t&&s?Object(O.jsxs)(A.a,{mb:"48px",children:[Object(O.jsx)(l.Y,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:e("My Rankings")}),u?Object(O.jsx)(l.v,{isActive:!0,children:Object(O.jsxs)(l.fc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(l.kc,{width:"60px",children:"\xa0"}),Object(O.jsx)(l.kc,{textAlign:"left",children:"\xa0"}),Object(O.jsx)(l.kc,{textAlign:"right",children:e("Net Winnings (BNB)")}),Object(O.jsx)(l.kc,{textAlign:"center",children:e("Win Rate")}),Object(O.jsx)(l.kc,{children:e("Rounds Won")}),Object(O.jsx)(l.kc,{children:e("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(xt,{user:s})})]})}):Object(O.jsx)(l.v,{isActive:!0,children:Object(O.jsx)(pt,{user:s})})]}):null},yt=n(194);!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(L||(L={}));var Wt,Nt,Dt=U.e.div(D||(D=Object(z.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),Ct=Object(U.e)(l.jc)(C||(C=Object(z.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),Lt={isFetching:!1,resultFound:L.NOT_VALID,value:""},Ft=function(){var t=Object(c.useState)(Lt),e=Object(I.a)(t,2),n=e[0],r=e[1],s=Object(o.a)(n.value),u=Object(b.b)().t,a=Object(i.b)(),d=n.isFetching,x=n.resultFound,h=n.value,f=Object(l.Dc)(Object(O.jsx)(ut,{account:n.value,onBeforeDismiss:function(){return r(Lt)}})),p=Object(I.a)(f,1)[0];return Object(c.useEffect)((function(){!1!==Object(P.h)(h)?function(){var t=Object(K.a)(X.a.mark((function t(){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r((function(t){return Object(R.a)(Object(R.a)({},t),{},{isFetching:!0})})),t.next=4,a(Object(j.b)(h));case 4:return t.prev=4,r((function(t){return Object(R.a)(Object(R.a)({},t),{},{isFetching:!1})})),t.finish(4);case 7:case"end":return t.stop()}}),t,null,[[0,,4,7]])})));return function(){return t.apply(this,arguments)}}()():r((function(t){return Object(R.a)(Object(R.a)({},t),{},{resultFound:L.NOT_VALID})}))}),[h,a,r]),Object(c.useEffect)((function(){void 0!==s&&r((function(t){return Object(R.a)(Object(R.a)({},t),{},{resultFound:null===s?L.NOT_FOUND:L.FOUND})}))}),[s,r]),Object(O.jsxs)(l.n,{position:"relative",children:[Object(O.jsx)(l.eb,{placeholder:u("Search %subject%",{subject:u("Address").toLowerCase()}),value:n.value,onChange:function(t){var e=t.target.value;r((function(t){return Object(R.a)(Object(R.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),d&&Object(O.jsx)(l.n,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(O.jsx)(yt.a,{})}),Object(O.jsx)(Dt,{isOpen:x!==L.NOT_VALID,children:x===L.FOUND?Object(O.jsx)(Ct,{onClick:function(){r(Lt),p()},children:n.value}):Object(O.jsx)(l.jc,{px:"16px",fontWeight:"bold",children:u("No results found.")})})]})},At=Object(U.e)(l.n)(Wt||(Wt=Object(z.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Rt=Object(U.e)(l.n)(Nt||(Nt=Object(z.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Tt=function(){var t=Object(b.b)().t,e=Object(i.b)(),n=[{label:t("Net Winnings"),value:"netBNB"},{label:t("Total BNB"),value:"totalBNB"},{label:t("Rounds Played"),value:"totalBets"},{label:t("Win Rate"),value:"winRate"}];return Object(O.jsxs)(A.a,{py:"32px",children:[Object(O.jsx)(l.jc,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:t("Rank By")}),Object(O.jsxs)(l.W,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(O.jsx)(Rt,{children:Object(O.jsx)(l.Sb,{options:n,onOptionChange:function(t){e(Object(j.p)({orderBy:t.value}))}})}),Object(O.jsx)(At,{children:Object(O.jsx)(Ft,{})})]})]})};e.default=function(){var t=Object(o.q)(),e=Object(o.o)(),n=Object(r.c)().account,l=Object(i.b)();return Object(c.useEffect)((function(){l(Object(j.h)({filters:e}))}),[n,e,l]),t===s.c.INITIAL?Object(O.jsx)(u.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(Tt,{}),Object(O.jsx)(St,{}),Object(O.jsx)(kt,{})]})}},780:function(t,e,n){"use strict";n.d(e,"w",(function(){return O})),n.d(e,"b",(function(){return x})),n.d(e,"l",(function(){return h})),n.d(e,"g",(function(){return f})),n.d(e,"y",(function(){return p})),n.d(e,"x",(function(){return m})),n.d(e,"d",(function(){return g})),n.d(e,"k",(function(){return v})),n.d(e,"v",(function(){return B})),n.d(e,"j",(function(){return k})),n.d(e,"h",(function(){return w})),n.d(e,"e",(function(){return S})),n.d(e,"t",(function(){return y})),n.d(e,"c",(function(){return W})),n.d(e,"m",(function(){return N})),n.d(e,"i",(function(){return D})),n.d(e,"n",(function(){return C})),n.d(e,"f",(function(){return L})),n.d(e,"q",(function(){return F})),n.d(e,"r",(function(){return A})),n.d(e,"o",(function(){return R})),n.d(e,"s",(function(){return T})),n.d(e,"p",(function(){return I})),n.d(e,"a",(function(){return z})),n.d(e,"u",(function(){return U}));var c=n(17),r=n(5),i=n(0),o=n(30),s=n(55),j=n(132),u=n(36),l=n(58),b=n(62),a=n(362),d=function(){var t=Object(o.c)((function(t){return t.predictions.rounds}));return Object.keys(t).reduce((function(e,n){return Object(r.a)(Object(r.a)({},e),{},Object(c.a)({},n,Object(b.q)(t[n])))}),{})},O=function(){var t=d();return Object(j.orderBy)(Object.values(t),["epoch"],["asc"])},x=function(t,e){var n=Object(o.c)((function(t){return t.predictions.ledgers}));return n[t]&&n[t][e]?Object(b.q)(n[t][e]):null},h=function(t){return Object(o.c)((function(t){return t.predictions.claimableStatuses}))[t]||!1},f=function(){return Object(o.c)((function(t){var e=Object(j.minBy)(Object.values(t.predictions.rounds),"epoch");return null===e||void 0===e?void 0:e.epoch}))},p=function(){return Object(o.c)((function(t){return t.predictions.isHistoryPaneOpen}))},m=function(){return Object(o.c)((function(t){return t.predictions.isChartPaneOpen}))},g=function(){return Object(o.c)((function(t){return t.predictions.currentEpoch}))},v=function(){return Object(o.c)((function(t){return t.predictions.intervalSeconds}))},B=function(){return Object(o.c)((function(t){return t.predictions.status}))},k=function(){return Object(o.c)((function(t){return t.predictions.historyFilter}))},w=function(){return Object(o.c)((function(t){return t.predictions.hasHistoryLoaded}))},S=function(){return Object(o.c)((function(t){return t.predictions.currentHistoryPage}))},y=function(){var t=Object(o.c)((function(t){return t.predictions.minBetAmount}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},W=function(){return Object(o.c)((function(t){return t.predictions.bufferSeconds}))},N=function(){return Object(o.c)((function(t){return t.predictions.isFetchingHistory}))},D=function(){return Object(o.c)((function(t){return t.predictions.history}))},C=function(){var t=Object(o.c)((function(t){return t.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},L=function(){var t=function(){var t=g();return d()[t]}(),e=v();return t.lockTimestamp?t.lockTimestamp:t.startTimestamp+e},F=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.loadingState}))},A=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.results}))},R=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.filters}))},T=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.skip}))},I=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.hasMoreResults}))},z=function(t){return Object(o.c)((function(e){return e.predictions.leaderboard.addressResults[t]}))},U=function(t){var e=z(t),n=Object(l.b)();return Object(i.useEffect)((function(){var c=Object(u.h)(t);!e&&null!==e&&c&&n(Object(a.b)(t))}),[n,t,e]),e}},804:function(t,e,n){var c=n(487),r=n(826),i=n(827),o=4294967295,s=Math.min;t.exports=function(t,e){if((t=i(t))<1||t>9007199254740991)return[];var n=o,j=s(t,o);e=r(e),t-=o;for(var u=c(j,e);++n<t;)e(n);return u}},826:function(t,e,n){var c=n(170);t.exports=function(t){return"function"==typeof t?t:c}},827:function(t,e,n){var c=n(488);t.exports=function(t){var e=c(t),n=e%1;return e===e?n?e-n:e:0}},904:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var c,r,i=n(5),o=n(52),s=n(7),j=(n(0),n(4)),u=n(2),l=n(241),b=n(1),a=["background","children"],d=Object(j.e)(u.n)(c||(c=Object(s.a)(["\n  background: ",";\n"])),(function(t){var e=t.theme;return t.background||e.colors.gradients.bubblegum})),O=Object(j.e)(l.a)(r||(r=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),x=function(t){var e=t.background,n=t.children,c=Object(o.a)(t,a);return Object(b.jsx)(d,Object(i.a)(Object(i.a)({background:e},c),{},{children:Object(b.jsx)(O,{children:n})}))}}}]);
//# sourceMappingURL=14.450a2d3f.chunk.js.map