(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[26],{1411:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(33),c=n(3),a=n.n(c),r=n(12),o=n(17),l=n(10),s=n(7),d=n(0),u=n(4),j=n(6),b=n(8),O=n(2),v=n(57),x=n(13),m=n(34),p=n(178),h=n(204),C=n(378),f=n(190),y=n(25),R=n(182),I=n(110),E=n(59),g=n(38),T=n(22),U=n(60),w=n(42),Y=n(270),N=n(119),_=n(873),k=n(36),S=n(163);var B=n(61),P=n(67),D=n(219),A=n(30),L=n(135),q=n(226),Q=n(121),W=n(101),V=n(325);function z(){return Object(A.c)((function(e){return e.burn}))}var M,F=n(49),H=n(250),G=n(1),J=u.e.div(M||(M=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var t,n,c,s,u,M,K,X,Z,$,ee,te,ne,ie,ce,ae,re,oe,le,se=e.history,de=e.match.params,ue=de.currencyIdA,je=de.currencyIdB,be=null!==(t=Object(U.c)(ue))&&void 0!==t?t:void 0,Oe=null!==(n=Object(U.c)(je))&&void 0!==n?n:void 0,ve=Object(T.a)(),xe=ve.account,me=ve.chainId,pe=ve.library,he=Object(d.useMemo)((function(){return[Object(B.b)(be,me),Object(B.b)(Oe,me)]}),[be,Oe,me]),Ce=Object(l.a)(he,2),fe=Ce[0],ye=Ce[1],Re=Object(x.b)().t,Ie=Object(F.e)(),Ee=z(),ge=Ee.independentField,Te=Ee.typedValue,Ue=function(e,t){var n,i,c,a,r,s=Object(T.a)(),d=s.account,u=s.chainId,j=z(),O=j.independentField,v=j.typedValue,x=Object(L.b)(e,t),m=Object(l.a)(x,2)[1],p=Object(W.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(B.b)(e,u),Object(B.b)(t,u)],f=C[0],y=C[1],R=(c={},Object(o.a)(c,V.a.CURRENCY_A,f),Object(o.a)(c,V.a.CURRENCY_B,y),Object(o.a)(c,V.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),c),I=Object(q.a)(null===m||void 0===m?void 0:m.liquidityToken),E=m&&I&&h&&f&&b.e.greaterThanOrEqual(I.raw,h.raw)?new b.k(f,m.getLiquidityValue(f,I,h,!1).raw):void 0,g=m&&I&&h&&y&&b.e.greaterThanOrEqual(I.raw,h.raw)?new b.k(y,m.getLiquidityValue(y,I,h,!1).raw):void 0,U=(a={},Object(o.a)(a,V.a.CURRENCY_A,E),Object(o.a)(a,V.a.CURRENCY_B,g),a),w=new b.g("0","100");if(O===V.a.LIQUIDITY_PERCENT)w=new b.g(v,"100");else if(O===V.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(Q.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new b.g(Y.raw,h.raw))}}else if(R[O]){var N=Object(Q.a)(v,R[O]),_=U[O];N&&_&&!N.greaterThan(_)&&(w=new b.g(N.raw,_.raw))}var k,S,P=(r={},Object(o.a)(r,V.a.LIQUIDITY_PERCENT,w),Object(o.a)(r,V.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new b.k(h.token,w.multiply(h.raw).quotient):void 0),Object(o.a)(r,V.a.CURRENCY_A,f&&w&&w.greaterThan("0")&&E?new b.k(f,w.multiply(E.raw).quotient):void 0),Object(o.a)(r,V.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new b.k(y,w.multiply(g.raw).quotient):void 0),r);return d||(k="Connect Wallet"),P[V.a.LIQUIDITY]&&P[V.a.CURRENCY_A]&&P[V.a.CURRENCY_B]||(k=null!==(S=k)&&void 0!==S?S:"Enter an amount"),{pair:m,parsedAmounts:P,error:k}}(null!==be&&void 0!==be?be:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),we=Ue.pair,Ye=Ue.parsedAmounts,Ne=Ue.error,_e=function(){var e=Object(A.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(V.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,ke=!Ne,Se=Object(d.useState)(!1),Be=Object(l.a)(Se,2),Pe=Be[0],De=Be[1],Ae=Object(d.useState)(!1),Le=Object(l.a)(Ae,2),qe=Le[0],Qe=Le[1],We=Object(d.useState)(""),Ve=Object(l.a)(We,2),ze=Ve[0],Me=Ve[1],Fe=Object(Y.a)(),He=Object(F.n)(),Ge=Object(l.a)(He,1)[0],Je=(Z={},Object(o.a)(Z,V.a.LIQUIDITY_PERCENT,Ye[V.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ye[V.a.LIQUIDITY_PERCENT].lessThan(new b.g("1","100"))?"<1":Ye[V.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,V.a.LIQUIDITY,ge===V.a.LIQUIDITY?Te:null!==(c=null===(s=Ye[V.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(Z,V.a.CURRENCY_A,ge===V.a.CURRENCY_A?Te:null!==(u=null===(M=Ye[V.a.CURRENCY_A])||void 0===M?void 0:M.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,V.a.CURRENCY_B,ge===V.a.CURRENCY_B?Te:null!==(K=null===(X=Ye[V.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Ke=null===($=Ye[V.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new b.g("1")),Xe=Object(w.r)(null===we||void 0===we||null===(ee=we.liquidityToken)||void 0===ee?void 0:ee.address),Ze=Object(d.useState)(null),$e=Object(l.a)(Ze,2),et=$e[0],tt=$e[1],nt=Object(P.b)(Ye[V.a.LIQUIDITY],g.t),it=Object(l.a)(nt,2),ct=it[0],at=it[1];function rt(){return(rt=Object(r.a)(a.a.mark((function e(){var t,n,i,c,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Xe&&we&&pe&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=Ye[V.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Xe.nonces(xe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Pancake LPs",version:"1",chainId:me,verifyingContract:we.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:xe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Fe.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),pe.send("eth_signTypedData_v4",[xe,l]).then(j.splitSignature).then((function(e){tt({v:e.v,r:e.r,s:e.s,deadline:Fe.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&at()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ot=Object(d.useCallback)((function(e,t){return tt(null),_e(e,t)}),[_e]),lt=Object(d.useCallback)((function(e){return ot(V.a.LIQUIDITY,e)}),[ot]),st=Object(d.useCallback)((function(e){return ot(V.a.CURRENCY_A,e)}),[ot]),dt=Object(d.useCallback)((function(e){return ot(V.a.CURRENCY_B,e)}),[ot]),ut=Object(N.d)();function jt(){return bt.apply(this,arguments)}function bt(){return(bt=Object(r.a)(a.a.mark((function e(){var t,n,c,r,l,s,d,u,j,O,x,m,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me&&pe&&xe&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=Ye[V.a.CURRENCY_A],c=Ye[V.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.g)(me,pe,xe),t={},Object(o.a)(t,V.a.CURRENCY_A,Object(k.c)(n,Ge)[0]),Object(o.a)(t,V.a.CURRENCY_B,Object(k.c)(c,Ge)[0]),l=t,be&&Oe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=Ye[V.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=Oe===b.d,u=be===b.d||d,fe&&ye){e.next=16;break}throw new Error("could not wrap");case 16:if(ct!==P.a.APPROVED){e.next=20;break}u?(j=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,Fe.toHexString()]):(j=["removeLiquidity"],O=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,Fe.toHexString()]),e.next=25;break;case 20:if(null===et){e.next=24;break}u?(j=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,et.deadline,!1,et.v,et.r,et.s]):(j=["removeLiquidityWithPermit"],O=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,et.deadline,!1,et.v,et.r,et.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(j.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=j[m],h=x[m],Qe(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h,gasPrice:Ie}])).then((function(e){var t,n;Qe(!1),ut(e,{summary:"Remove ".concat(null===(t=Ye[V.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===be||void 0===be?void 0:be.symbol," and ").concat(null===(n=Ye[V.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),Me(e.hash)})).catch((function(e){Qe(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ot(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.jc,{fontSize:"24px",children:null===(e=Ye[V.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:be,size:"24px"}),Object(G.jsx)(O.jc,{fontSize:"24px",ml:"10px",children:null===be||void 0===be?void 0:be.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(O.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.jc,{fontSize:"24px",children:null===(t=Ye[V.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:Oe,size:"24px"}),Object(G.jsx)(O.jc,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(O.jc,{small:!0,textAlign:"left",pt:"12px",children:Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Ge/100})})]})}function vt(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.jc,{children:Re("%assetA%/%assetB% Burned",{assetA:null!==(e=null===be||void 0===be?void 0:be.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(E.b,{currency0:be,currency1:Oe,margin:!0}),Object(G.jsx)(O.jc,{children:null===(n=Ye[V.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),we&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.jc,{children:Re("Price")}),Object(G.jsxs)(O.jc,{children:["1 ",null===be||void 0===be?void 0:be.symbol," = ",fe?we.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(O.jc,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?we.priceOf(ye).toSignificant(6):"-"," ",null===be||void 0===be?void 0:be.symbol]})]})]}),Object(G.jsx)(O.r,{disabled:!(ct===P.a.APPROVED||null!==et),onClick:jt,children:Re("Confirm")})]})}var xt=Re("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=Ye[V.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===be||void 0===be?void 0:be.symbol)&&void 0!==ie?ie:"",amountB:null!==(ce=null===(ae=Ye[V.a.CURRENCY_B])||void 0===ae?void 0:ae.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(re=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==re?re:""}),mt=Object(d.useCallback)((function(e){ot(V.a.LIQUIDITY_PERCENT,e.toString())}),[ot]),pt=be===b.d||Oe===b.d,ht=Boolean(me&&(be&&Object(b.o)(b.n[me],be)||Oe&&Object(b.o)(b.n[me],Oe))),Ct=Object(d.useCallback)((function(e){je&&Object(S.a)(e)===je?se.push("/remove/".concat(Object(S.a)(e),"/").concat(ue)):se.push("/remove/".concat(Object(S.a)(e),"/").concat(je))}),[ue,je,se]),ft=Object(d.useCallback)((function(e){ue&&Object(S.a)(e)===ue?se.push("/remove/".concat(je,"/").concat(Object(S.a)(e))):se.push("/remove/".concat(ue,"/").concat(Object(S.a)(e)))}),[ue,je,se]),yt=Object(d.useCallback)((function(){tt(null),ze&&ot(V.a.LIQUIDITY_PERCENT,"0"),Me("")}),[ot,ze]),Rt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(Ye[V.a.LIQUIDITY_PERCENT].toFixed(0)),mt),It=Object(l.a)(Rt,2),Et=It[0],gt=It[1],Tt=Object(O.Dc)(Object(G.jsx)(p.c,{title:Re("You will receive"),customOnDismiss:yt,attemptingTxn:qe,hash:ze||"",content:function(){return Object(G.jsx)(p.a,{topContent:Ot,bottomContent:vt})},pendingText:xt}),!0,!0,"removeLiquidityModal"),Ut=Object(l.a)(Tt,1)[0];return Object(G.jsxs)(H.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Re("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===be||void 0===be?void 0:be.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:""}),subtitle:"To receive ".concat(null===be||void 0===be?void 0:be.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(G.jsxs)(O.w,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.jc,{children:Re("Amount")}),Object(G.jsx)(O.r,{variant:"text",scale:"sm",onClick:function(){return De(!Pe)},children:Re(Pe?"Simple":"Detailed")})]}),!Pe&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(O.jc,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Je[V.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(O.Vb,{name:"lp-amount",min:0,max:100,value:Et,onValueChanged:function(e){return gt(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(O.W,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(O.r,{variant:"tertiary",scale:"sm",onClick:function(){return ot(V.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(O.r,{variant:"tertiary",scale:"sm",onClick:function(){return ot(V.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(O.r,{variant:"tertiary",scale:"sm",onClick:function(){return ot(V.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(O.r,{variant:"tertiary",scale:"sm",onClick:function(){return ot(V.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Pe&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(O.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(O.jc,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("You will receive")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.W,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(O.W,{children:[Object(G.jsx)(E.a,{currency:be}),Object(G.jsx)(O.jc,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===be||void 0===be?void 0:be.symbol})]}),Object(G.jsx)(O.jc,{small:!0,children:Je[V.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(O.W,{justifyContent:"space-between",children:[Object(G.jsxs)(O.W,{children:[Object(G.jsx)(E.a,{currency:Oe}),Object(G.jsx)(O.jc,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(O.jc,{small:!0,children:Je[V.a.CURRENCY_B]||"-"})]}),me&&(ht||pt)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:pt?Object(G.jsx)(_.a,{to:"/remove/".concat(be===b.d?b.n[me].address:ue,"/").concat(Oe===b.d?b.n[me].address:je),children:Re("Receive WBNB")}):ht?Object(G.jsx)(_.a,{to:"/remove/".concat(be&&Object(b.o)(be,b.n[me])?"BNB":ue,"/").concat(Oe&&Object(b.o)(Oe,b.n[me])?"BNB":je),children:Re("Receive BNB")}):null}):null]})]})]}),Pe&&Object(G.jsxs)(O.n,{my:"16px",children:[Object(G.jsx)(h.a,{value:Je[V.a.LIQUIDITY],onUserInput:lt,onMax:function(){ot(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ke,disableCurrencySelect:!0,currency:null===we||void 0===we?void 0:we.liquidityToken,pair:we,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.d,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Je[V.a.CURRENCY_A],onUserInput:st,onMax:function(){return ot(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ke,currency:be,label:Re("Output"),onCurrencySelect:Ct,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Je[V.a.CURRENCY_B],onUserInput:dt,onMax:function(){return ot(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ke,currency:Oe,label:Re("Output"),onCurrencySelect:ft,id:"remove-liquidity-tokenb"})]}),we&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(O.jc,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("Prices")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.W,{justifyContent:"space-between",children:[Object(G.jsxs)(O.jc,{small:!0,color:"textSubtle",children:["1 ",null===be||void 0===be?void 0:be.symbol," ="]}),Object(G.jsxs)(O.jc,{small:!0,children:[fe?we.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(O.W,{justifyContent:"space-between",children:[Object(G.jsxs)(O.jc,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(O.jc,{small:!0,children:[ye?we.priceOf(ye).toSignificant(6):"-"," ",null===be||void 0===be?void 0:be.symbol]})]})]})]}),Object(G.jsx)(O.n,{position:"relative",mt:"16px",children:xe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.r,{variant:ct===P.a.APPROVED||null!==et?"success":"primary",onClick:function(){return rt.apply(this,arguments)},disabled:ct!==P.a.NOT_APPROVED||null!==et,width:"100%",mr:"0.5rem",children:ct===P.a.PENDING?Object(G.jsx)(D.a,{children:Re("Enabling")}):ct===P.a.APPROVED||null!==et?Re("Enabled"):Re("Enable")}),Object(G.jsx)(O.r,{variant:!ke&&Ye[V.a.CURRENCY_A]&&Ye[V.a.CURRENCY_B]?"danger":"primary",onClick:function(){Ut()},width:"100%",disabled:!ke||null===et&&ct!==P.a.APPROVED,children:Ne||Re("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),we?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:ht,pair:we})}):null]})}},873:function(e,t,n){"use strict";var i,c=n(7),a=n(92),r=n(4),o=Object(r.e)(a.a)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=26.adb79baf.chunk.js.map