(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var s=e.i(43476),a=e.i(71645);let n={STAR:0,NETH:1,DIA:2,AME:3,GOLD:4,SILV:5,BRON:6},l={STAR:"네더의 별",NETH:"네더라이트",DIA:"다이아몬드",AME:"자수정",GOLD:"골드",SILV:"실버",BRON:"브론즈"},r={STAR:"네더의 별",NETH:"네더라이트",DIA:"다이아몬드",AME:"자수정",GOLD:"골드",SILV:"실버",BRON:"브론즈"},i=new Map(["네뷸라","회귀자","에이드버스터","제트","엘리트","레이서","레일거너","명검사","번개검사","배틀퀸","아스트라","섀도우","바람검사","닌자","공간이동자","화동","모험가","헌터","인술사","슈퍼스타","체이서","기계천사","아크로바틱","중력마스터","마도가","슬레이어","데빌헌터","흡혈귀","리와인더","일렉트로","팬텀","패스파인더","루시드","체임버","바다의소녀","용검사","멜트다우너","폭탄광","액셀러레이터","다크매터","텔레포터","전격술사","이매진브레이커","인덱스","퀸카","스타로드","욘두","아이돌","주술사","카데나","저주의왕","뇌신","유미","로맨틱매지션","용병","엣지러너","정찰병","귀검사","교주","몰락한왕","롤러","언더테이커","역병사수","독사","악마","미치광이","집행자","검은침묵","안개검사","쥬얼","상어","검객","월광사수","장난꾸러기","재단사","퀸","사제","마녀","퇴마사","거장","몽상가","푸른잔향","처형인","도사","댄서","요원","해결사","포식자","불멸자","시간살인마","자경단","봄버","자객","살인마","가스터","블랙홀","악동","서리술사","암흑기사","카세트","테크니션","엔지니어","수호자","신동","배우","데드락","차원여행자","물결검사","맹독검사","등대지기","키네시스","마탄사수","간수","무법자","암살자","프리즘","요리사","방직자","정신지배자","앤젤릭버스터","림보","프로듀서","인플루언서","개그맨","변호사","점성술사","외계생명체","광축가","전략가","라피스라즐리","페리도트","청부업자","테이머","주인공","구미호","단장","광대","고고학자","군인","매화검수","외교관","플라워"].map((e,s)=>[e,s])),t={STAR:"/tier/star.png",NETH:"/tier/neth.png",DIA:"/tier/dia.png",AME:"/tier/ameth.png",GOLD:"/tier/gold.png",SILV:"/tier/silver.png",BRON:"/tier/bronze.png"},c={패시브:"skill-passive",무기스킬:"skill-weapon",일반스킬:"skill-normal",일회용스킬:"skill-consumable",특수스킬:"skill-special"},d=[{id:1,name:"바인드",image:"/maps/map1.png"},{id:2,name:"어센트",image:"/maps/map2.png"},{id:3,name:"헤이븐",image:"/maps/map3.png"},{id:4,name:"스플릿",image:"/maps/map4.png"},{id:5,name:"펄",image:"/maps/map5.png"},{id:6,name:"더스트",image:"/maps/map6.png"},{id:7,name:"뉴크",image:"/maps/map7.png"},{id:10,name:"아누비스",image:"/maps/map10.png"},{id:11,name:"로터스",image:"/maps/map11.png"},{id:12,name:"미드나잇",image:"/maps/map12.png"},{id:13,name:"엔드게임",image:"/maps/map13.png"},{id:14,name:"어비스",image:"/maps/map14.png"},{id:15,name:"에인션트",image:"/maps/map15.png"},{id:16,name:"고문받은 시인들 부서",image:"/maps/map16.png"},{id:17,name:"에메랄드 시티",image:"/maps/map17.png"},{id:18,name:"투스칸",image:"/maps/map18.png"},{id:19,name:"닌북하우스",image:"/maps/map19.png"},{id:20,name:"기차역",image:"/maps/map20.png"},{id:21,name:"애프터글로우",image:"/maps/map21.png"},{id:22,name:"뉴욕",image:"/maps/map22.png"},{id:23,name:"워터폴",image:"/maps/map23.png"},{id:24,name:"프랙쳐",image:"/maps/map24.png"},{id:25,name:"무한성",image:"/maps/map25.png"},{id:26,name:"쇼걸의 삶",image:"/maps/map26.png"},{id:27,name:"아포칼립스",image:"/maps/map27.png"},{id:28,name:"서쪽 마녀의 성",image:"/maps/map28.png"},{id:29,name:"츠쿠요미",image:"/maps/map29.png"},{id:30,name:"선셋",image:"/maps/map30.png"}],_MAPIMG=new Map(d.map(e=>[e.name,e.image])),_ICONIDX=i,_GRID=12,_CMAP=null,_CHARID=new Map(["네뷸라","회귀자","에이드버스터","제트","엘리트","레이서","레일거너","명검사","번개검사","배틀퀸","아스트라","섀도우","바람검사","닌자","공간이동자","화동","모험가","헌터","인술사","슈퍼스타","체이서","기계천사","아크로바틱","중력마스터","마도가","슬레이어","데빌헌터","흡혈귀","리와인더","일렉트로","팬텀","패스파인더","루시드","체임버","바다의소녀","용검사","멜트다우너","폭탄광","액셀러레이터","다크매터","텔레포터","전격술사","이매진브레이커","인덱스","퀸카","스타로드","욘두","아이돌","주술사","카데나","저주의왕","뇌신","유미","로맨틱매지션","용병","엣지러너","정찰병","귀검사","교주","몰락한왕","롤러","언더테이커","역병사수","독사","악마","미치광이","집행자","검은침묵","안개검사","쥬얼","상어","검객","월광사수","장난꾸러기","재단사","퀸","사제","마녀","퇴마사","거장","몽상가","푸른잔향","처형인","도사","댄서","요원","해결사","포식자","불멸자","시간살인마","자경단","봄버","자객","살인마","가스터","블랙홀","악동","서리술사","암흑기사","카세트","테크니션","엔지니어","수호자","신동","배우","데드락","차원여행자","물결검사","맹독검사","등대지기","키네시스","마탄사수","간수","무법자","암살자","프리즘","요리사","방직자","정신지배자","앤젤릭버스터","림보","프로듀서","인플루언서","개그맨","변호사","점성술사","외계생명체","광축가","전략가","라피스라즐리","페리도트","청부업자","테이머","주인공","구미호","단장","광대","플라워","고고학자","군인","매화검수","외교관"].map((e,s)=>[e,s+1])),_SPANS=[[0,"전체"],[100,"최근 100"],[50,"최근 50"]],_SORTS=[["name","가나다","asc"],["id","ID","asc"],["diff","난이도","asc"],["pick","픽률","desc"],["win","승률","desc"]],m=[1,2,3,4,5],h=new Intl.NumberFormat("ko-KR"),o=new Map,x=new Set,j=null,p=null,u=Math.floor(Date.now()/12e5),g=null;function hcGame(){let[hgOpen,hgSetOpen]=(0,a.useState)(!1),hgRef=(0,a.useRef)(null),[hgBest,hgSetBest]=(0,a.useState)(0),[hgScore,hgSetScore]=(0,a.useState)(0),[hgOver,hgSetOver]=(0,a.useState)(!1),hgHash=e=>{try{"#bow"===location.hash===!e&&history.replaceState(history.state,"",e?"#bow":location.pathname+location.search)}catch(t){}},hgOpenGame=()=>{hgSetOver(!1);hgSetScore(0);hgSetOpen(!0);setTimeout(()=>hgHash(!0),0)},hgClose=()=>{hgSetOpen(!1);hgHash(!1)};
(0,a.useEffect)(()=>{let n=0,last=0,f=e=>{let t=e.target;if(!t||!t.closest||!t.closest(".brand"))return;let now=Date.now();n=now-last<900?n+1:1;last=now;if(n>=5){n=0;hgOpenGame()}};let g=()=>{"#bow"===location.hash&&hgOpenGame()};g();window.addEventListener("hashchange",g);document.addEventListener("click",f,!0);try{hgSetBest(+(localStorage.getItem("hwalcass-bow")||0))}catch(e){}return()=>{document.removeEventListener("click",f,!0);window.removeEventListener("hashchange",g)}},[]);
(0,a.useEffect)(()=>{if(!hgOpen)return;let k=e=>{"Escape"===e.key&&hgClose()};window.addEventListener("keydown",k);let prev=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{window.removeEventListener("keydown",k);document.body.style.overflow=prev}},[hgOpen]);
(0,a.useEffect)(()=>{if(!hgOpen)return;let cv=hgRef.current;if(!cv)return;let ctx=cv.getContext("2d"),dpr=Math.min(2,window.devicePixelRatio||1),w=0,h=0,raf=0,live=!0,ready=!1,img=new Image,slots=[..._CHARID.values()].map(e=>e-1),targets=[],arrows=[],score=0,lives=5,acc=0,last=0,over=!1,draw=null,aim={x:0,y:0},flash=[];
img.onload=()=>{ready=!0};img.src="/character-icons/atlas.png";
let FW=600,FH=960,sc=1,ox=0,oy=0;let resize=()=>{let cw=Math.max(1,cv.clientWidth),ch=Math.max(1,cv.clientHeight);cv.width=cw*dpr;cv.height=ch*dpr;sc=Math.min(cw/FW,ch/FH);ox=(cw-FW*sc)/2;oy=(ch-FH*sc)/2;w=FW;h=FH;ctx.setTransform(dpr*sc,0,0,dpr*sc,dpr*ox,dpr*oy);aim.x=aim.x||w/2;aim.y=aim.y||h/3};resize();window.addEventListener("resize",resize);
let bx=()=>w/2,by=()=>h-30;
/* 마인크래프트 활 차징 곡선: f=(t^2+2t)/3, 1초에 최대 */
let pw=ms=>{let p=Math.min(1,ms/1e3);return Math.min(1,(p*p+2*p)/3)};
let hgSave=v=>{try{if(v>+(localStorage.getItem("hwalcass-bow")||0)){localStorage.setItem("hwalcass-bow",v);hgSetBest(v)}}catch(e){}};
let spawn=()=>{let d=36+24*Math.random();targets.push({x:d/2+Math.random()*Math.max(1,w-d),y:-d,r:d/2,v:.058+.028*Math.random()+.0019*score,s:slots[Math.floor(Math.random()*slots.length)]})};
let reset=()=>{score=0;lives=5;targets.length=0;arrows.length=0;flash.length=0;acc=0;draw=null;over=!1;hgSetOver(!1);hgSetScore(0)};
let at=e=>{let r=cv.getBoundingClientRect();aim.x=(e.clientX-r.left-ox)/sc;aim.y=(e.clientY-r.top-oy)/sc};
let down=e=>{if(over){reset();return}at(e);draw=performance.now();try{cv.setPointerCapture(e.pointerId)}catch(t){}};
let move=e=>{at(e)};
let up=e=>{if(null===draw)return;at(e);let f=pw(performance.now()-draw);draw=null;if(f<.05)return;let x0=bx(),y0=by(),dx=aim.x-x0,dy=aim.y-y0,d=Math.hypot(dx,dy)||1,v=.3+1.15*f;arrows.push({x:x0,y:y0,vx:dx/d*v,vy:dy/d*v,p:f,c:0})};
cv.addEventListener("pointerdown",down);cv.addEventListener("pointermove",move);cv.addEventListener("pointerup",up);cv.addEventListener("pointercancel",()=>{draw=null});
let step=t=>{if(!live)return;let dt=Math.min(50,t-(last||t));last=t;
if(!over){acc+=dt;let gap=Math.max(380,1350-10*score);if(acc>gap){acc=0;spawn()}
for(let i=targets.length-1;i>=0;i--){let o=targets[i];o.y+=o.v*dt;if(o.y-o.r>h){targets.splice(i,1);if(--lives<=0){over=!0;hgSetOver(!0);hgSave(score)}}}
for(let i=arrows.length-1;i>=0;i--){let p=arrows[i];p.x+=p.vx*dt;p.y+=p.vy*dt;
if(p.x<-60||p.x>w+60||p.y<-60||p.y>h+60){arrows.splice(i,1);continue}
/* 화살은 적을 무한정 관통한다. 한 발로 여러 개를 꿰면 점수가 누적으로 커진다 */
for(let j=targets.length-1;j>=0;j--){let o=targets[j];if(Math.hypot(o.x-p.x,o.y-p.y)<o.r){targets.splice(j,1);p.c++;score+=p.c;hgSetScore(score);hgSave(score);flash.push({x:o.x,y:o.y,n:p.c,t:0});if(p.p<.999){arrows.splice(i,1);break}}}}
for(let i=flash.length-1;i>=0;i--){flash[i].t+=dt;flash[i].t>700&&flash.splice(i,1)}}
ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height);ctx.restore();ctx.save();ctx.beginPath();ctx.rect(0,0,w,h);ctx.clip();ctx.strokeStyle="rgba(215,255,79,.05)";ctx.lineWidth=1;for(let x=0;x<w;x+=48){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
if(ready){let g=_GRID;for(let o of targets)ctx.drawImage(img,o.s%g*128,Math.floor(o.s/g)*128,128,128,o.x-o.r,o.y-o.r,2*o.r,2*o.r)}
for(let f of flash){let k=1-f.t/700;ctx.globalAlpha=k;ctx.fillStyle=f.n>1?"#d7ff4f":"#e7eef0";ctx.font="900 "+(13+4*Math.min(4,f.n))+"px sans-serif";ctx.textAlign="center";ctx.fillText("+"+f.n,f.x,f.y-14-20*(1-k));ctx.globalAlpha=1}
ctx.lineCap="round";for(let p of arrows){let L=16+26*p.p;ctx.strokeStyle=p.p>=.999?"#d7ff4f":"#9fb0b6";ctx.lineWidth=1+2*p.p;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-L*p.vx,p.y-L*p.vy);ctx.stroke()}
let f=null===draw?0:pw(t-draw),x0=bx(),y0=by();
if(null!==draw){ctx.setLineDash([5,7]);ctx.strokeStyle="rgba(215,255,79,"+(.18+.5*f)+")";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(aim.x,aim.y);ctx.stroke();ctx.setLineDash([])}
ctx.strokeStyle=f>=1?"#d7ff4f":"#8d9aa0";ctx.lineWidth=3;ctx.beginPath();ctx.arc(x0,y0+6,20,1.15*Math.PI,1.85*Math.PI);ctx.stroke();
ctx.strokeStyle="rgba(255,255,255,.5)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x0-18,y0-2);ctx.lineTo(x0,y0-2+13*f);ctx.lineTo(x0+18,y0-2);ctx.stroke();
if(null!==draw){ctx.fillStyle=f>=1?"#d7ff4f":"rgba(215,255,79,.45)";ctx.fillRect(x0-30,y0+16,60*f,3)}
ctx.fillStyle="#ff5d6c";ctx.font="600 13px sans-serif";ctx.textAlign="left";ctx.fillText("\u2665".repeat(Math.max(0,lives)),14,24);
ctx.restore();ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle="#070c0e";ctx.fillRect(0,0,cv.width,dpr*oy);ctx.fillRect(0,dpr*(oy+h*sc),cv.width,cv.height);ctx.fillRect(0,0,dpr*ox,cv.height);ctx.fillRect(dpr*(ox+w*sc),0,cv.width,cv.height);ctx.restore();ctx.strokeStyle="rgba(215,255,79,.16)";ctx.lineWidth=1;ctx.strokeRect(.5,.5,w-1,h-1);raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step);
return()=>{live=!1;cancelAnimationFrame(raf);window.removeEventListener("resize",resize);cv.removeEventListener("pointerdown",down);cv.removeEventListener("pointermove",move);cv.removeEventListener("pointerup",up)}},[hgOpen]);
return hgOpen?(0,s.jsxs)("div",{className:"bow-game",role:"dialog","aria-label":"활 연습장",children:[(0,s.jsxs)("div",{className:"bow-hud",children:[(0,s.jsx)("span",{children:"활 연습장"}),(0,s.jsxs)("b",{children:["SCORE ",hgScore]}),(0,s.jsxs)("b",{children:["BEST ",hgBest]}),(0,s.jsx)("button",{type:"button",onClick:hgClose,"aria-label":"닫기",children:"\u00d7"})]}),(0,s.jsx)("canvas",{ref:hgRef}),(0,s.jsx)("p",{children:hgOver?"명중 실패 5회 \u00b7 화면을 클릭하면 다시 시작":"길게 눌러 활을 당기고 떼면 발사 \u00b7 1초에 최대 차징 \u00b7 최대 차징만 관통 \u00b7 ESC 로 나가기"})]}):null}function hcKl(){return j?Promise.resolve(j):p||=fetch("/data/killlog.json").then(e=>e.ok?e.json():[]).then(e=>j=Array.isArray(e)?e:[]).catch(()=>j=[])}/* ── 지표 분석기 ──────────────────────────────────────────────────
   stats.json + killlog.json 만으로 리포트 전 항목을 브라우저에서 직접 계산한다.
   원본 hwalcass-player-metrics.html 은 고정 스냅샷이었다 — 여기서는 매 방문 계산하므로
   전적이 올라가면 바로 반영되고, 30판 미만 유저도 나온다.

   킬로그는 게임 #334 부터만 있다. 티어·승률·판수는 stats 전체(671판)를 쓰고,
   교전 지표는 킬로그가 있는 게임만 쓴다(logMatches 로 표시).

   라운드 재구성: 킬로그는 (라운드, 킬러, 피살자, 종류)의 순서열이다. 팀은 stats 의 win 값.
   라운드 승자는 전멸당한 쪽의 반대, 전멸이 없으면 사망이 적은 쪽, 동률이면 마지막 킬을 낸 팀.
   finalscore 와 대조하면 라운드 단위 97.3% 일치한다. */

var _MXAN = null;

function hcAnKey(g, n) { return g + "|" + n; }

/* 라운드별 이벤트 + 팀 구성. 무거우니 한 번만 만들고 캐시한다. */
function hcAnRounds(stats, kills) {
	var byGame = new Map(), i, r;
	for (i = 0; i < stats.length; i++) {
		r = stats[i];
		var a = byGame.get(r.gamenumber);
		if (!a) { a = []; byGame.set(r.gamenumber, a); }
		a.push(r);
	}
	var out = [];
	for (i = 0; i < kills.length; i++) {
		var gn = kills[i].gamenumber, recs = byGame.get(gn);
		if (!recs || !kills[i].kills || !kills[i].kills.length) continue;
		var team = new Map(), size = {}, j;
		for (j = 0; j < recs.length; j++) {
			team.set(recs[j].nickname, recs[j].win);
			size[recs[j].win] = (size[recs[j].win] || 0) + 1;
		}
		if (!(size[0] > 0) || !(size[1] > 0)) continue;
		var rounds = new Map(), ev = kills[i].kills;
		for (j = 0; j < ev.length; j++) {
			var e = ev[j];
			// 팀을 모르는 사람(그 판 stats 기록이 없는 중참 등)이 낀 이벤트는 버린다.
			if (!team.has(e.k) || !team.has(e.v)) continue;
			var list = rounds.get(e.r);
			if (!list) { list = []; rounds.set(e.r, list); }
			list.push(e);
		}
		rounds.forEach(function (list, rno) {
			var dead = { 0: 0, 1: 0 }, last = null, m;
			for (m = 0; m < list.length; m++) { dead[team.get(list[m].v)]++; last = team.get(list[m].k); }
			var winner = null;
			if (dead[0] >= size[0] && dead[1] < size[1]) winner = 1;
			else if (dead[1] >= size[1] && dead[0] < size[0]) winner = 0;
			else if (dead[0] !== dead[1]) winner = dead[0] < dead[1] ? 0 : 1;
			else winner = last;
			out.push({ game: gn, round: rno, ev: list, team: team, size: size, winner: winner, recs: recs });
		});
	}
	return out;
}

/* 라운드 상태(우리 생존 a : 상대 생존 b)별 승률. 킬 하나하나의 가치(WPA)를 재는 자다.
   전 라운드의 모든 상태를 세어 경험적으로 추정하고, WP(a,b)=1-WP(b,a) 로 대칭화한다. */
function hcAnWinProb(rounds) {
	var win = {}, tot = {}, i, j;
	for (i = 0; i < rounds.length; i++) {
		var R = rounds[i];
		if (R.winner === null) continue;
		var alive = { 0: R.size[0], 1: R.size[1] };
		var mark = function (t) {
			var k = alive[t] + ":" + alive[1 - t];
			tot[k] = (tot[k] || 0) + 1;
			if (R.winner === t) win[k] = (win[k] || 0) + 1;
		};
		mark(0); mark(1);
		for (j = 0; j < R.ev.length; j++) {
			alive[R.team.get(R.ev[j].v)]--;
			mark(0); mark(1);
		}
	}
	return function (a, b) {
		if (a <= 0) return 0;
		if (b <= 0) return 1;
		var k = a + ":" + b, k2 = b + ":" + a,
			w = (win[k] || 0) + ((tot[k2] || 0) - (win[k2] || 0)),
			t = (tot[k] || 0) + (tot[k2] || 0);
		if (t < 8) return a === b ? .5 : a > b ? .5 + .12 * Math.min(3, a - b) : .5 - .12 * Math.min(3, b - a);
		return w / t;
	};
}

function hcAnBlank(nick) {
	return {
		nickname: nick, totalGames: 0, wins: 0, kills: 0, deaths: 0, tier: null, tierAt: undefined,
		logMatches: 0, logRounds: 0, logKills: 0, logDeaths: 0,
		arrowKills: 0, skillKills: 0, meleeKills: 0,
		openingKills: 0, openingDeaths: 0, openingWins: 0, openingReDeaths: 0,
		earlyKills: 0, lateKills: 0, killRounds: 0, multiKillRounds: 0,
		tradeKills: 0, deathsTraded: 0,
		refillOpp: 0, refillConv: 0, refillArrow: 0, refillSkill: 0, refillMelee: 0,
		collapseKills: 0, garbageKills: 0, highLeverageKills: 0,
		lateEntryRounds: 0, firstInvolvementSum: 0, firstInvolvementRounds: 0,
		clutchOpp: 0, clutchWins: 0, clutchKills: 0,
		preKills: 0, postKills: 0, preRounds: 0, postRounds: 0,
		killWpa: 0, deathWpa: 0, charRounds: new Map(), charGames: new Map(), charKills: new Map(), charLogGames: new Map()
	};
}

/* 전 플레이어 지표를 한 번에 계산한다. stats/killlog 길이로 캐시. */
function hcAnalyze(stats, kills) {
	if (_MXAN && _MXAN.ns === stats.length && _MXAN.nk === kills.length) return _MXAN;
	var P = new Map(), i, j, get = function (n) { var p = P.get(n); if (!p) { p = hcAnBlank(n); P.set(n, p); } return p; };

	// 1) stats 전체 — 판수·승률·K/D·티어·캐릭터 사용
	for (i = 0; i < stats.length; i++) {
		var r = stats[i], p = get(r.nickname);
		p.totalGames++; p.wins += r.win ? 1 : 0;
		p.kills += r.kill || 0; p.deaths += r.death || 0;
		// 사이트가 넘겨주는 배열은 최신 경기가 앞이다(eg 는 내림차순). 순서에 기대지 말고
		// 가장 큰 게임번호의 티어를 현재 티어로 삼는다.
		if (p.tierAt === undefined || r.gamenumber >= p.tierAt) { p.tier = r.tier; p.tierAt = r.gamenumber; }
		if (r.character) p.charGames.set(r.character, (p.charGames.get(r.character) || 0) + 1);
	}

	// 2) 킬로그 — 교전 지표
	var rounds = hcAnRounds(stats, kills), WP = hcAnWinProb(rounds),
		charMap = new Map(), seenMatch = new Map(), C = new Map();
	var cget = function (c) {
		var x = C.get(c);
		if (!x) { x = { rounds: 0, kills: 0, wpa: 0, refillOpp: 0, refillConv: 0, openingKills: 0, a: 0, s: 0, m: 0 }; C.set(c, x); }
		return x;
	};
	for (i = 0; i < stats.length; i++) if (stats[i].character) charMap.set(hcAnKey(stats[i].gamenumber, stats[i].nickname), stats[i].character);

	for (i = 0; i < rounds.length; i++) {
		var R = rounds[i], ev = R.ev, n = ev.length, alive = { 0: R.size[0], 1: R.size[1] };
		var mine = new Map();   // 이 라운드에 등장한 사람별 집계
		var touch = function (nick) {
			var m = mine.get(nick);
			if (!m) { m = { k: 0, first: -1, died: -1, kIdx: [] }; mine.set(nick, m); }
			return m;
		};
		// 라운드 참가자 = 그 게임의 전원(킬로그에 안 나와도 라운드는 뛴 것으로 본다)
		for (j = 0; j < R.recs.length; j++) {
			var pp = get(R.recs[j].nickname);
			if (!seenMatch.has(hcAnKey(R.game, R.recs[j].nickname))) { seenMatch.set(hcAnKey(R.game, R.recs[j].nickname), 1); pp.logMatches++; }
			pp.logRounds++;
			if (R.round <= 6) pp.preRounds++; else pp.postRounds++;
			var ch = charMap.get(hcAnKey(R.game, R.recs[j].nickname));
			if (ch) {
				pp.charRounds.set(ch, (pp.charRounds.get(ch) || 0) + 1);
				cget(ch).rounds++;
				var ck2 = hcAnKey(R.game, R.recs[j].nickname) + "|" + ch;
				if (!seenMatch.has(ck2)) { seenMatch.set(ck2, 1); pp.charLogGames.set(ch, (pp.charLogGames.get(ch) || 0) + 1); }
			}
		}
		for (j = 0; j < n; j++) {
			var e = ev[j], kt = R.team.get(e.k), vt = R.team.get(e.v),
				K = get(e.k), V = get(e.v),
				before = WP(alive[kt], alive[1 - kt]);
			alive[vt]--;
			var after = WP(alive[kt], alive[1 - kt]), diff = alive[kt] - alive[1 - kt];

			K.logKills++; V.logDeaths++;
			var kch = charMap.get(hcAnKey(R.game, e.k));
			if (kch) { var cc = cget(kch); cc.kills++; cc.wpa += after - before; if (j === 0) cc.openingKills++; cc[e.t === "a" ? "a" : e.t === "s" ? "s" : "m"]++; }
			var vch = charMap.get(hcAnKey(R.game, e.v));
			if (vch) cget(vch).wpa += WP(alive[vt], alive[1 - vt]) - WP(alive[vt] + 1, alive[1 - vt]);
			if (e.t === "a") K.arrowKills++; else if (e.t === "s") K.skillKills++; else K.meleeKills++;
			if (kch) {
				var ck = K.charKills.get(kch);
				if (!ck) { ck = { a: 0, s: 0, m: 0 }; K.charKills.set(kch, ck); }
				ck[e.t === "a" ? "a" : e.t === "s" ? "s" : "m"]++;
			}
			if (R.round <= 6) K.preKills++; else K.postKills++;
			if (j < n / 3) K.earlyKills++; else if (j >= 2 * n / 3) K.lateKills++;
			K.killWpa += after - before;
			V.deathWpa += WP(alive[vt], alive[1 - vt]) - WP(alive[vt] + 1, alive[1 - vt]);
			if (diff >= 3) K.garbageKills++; else if (diff <= -2) K.collapseKills++;
			if (Math.abs(diff) <= 1) K.highLeverageKills++;

			if (j === 0) { K.openingKills++; V.openingDeaths++; if (R.winner === kt) K.openingWins++; }

			// 트레이드: 직전 2개 이벤트에서 내 아군을 죽인 상대를 내가 잡았나
			for (var b = Math.max(0, j - 2); b < j; b++)
				if (ev[b].k === e.v && R.team.get(ev[b].v) === kt) { K.tradeKills++; break; }
			// 되갚음: 내가 죽고 직후 2개 이벤트에서 아군이 내 킬러를 잡았나
			for (var f = j + 1; f <= Math.min(n - 1, j + 2); f++)
				if (ev[f].v === e.k && R.team.get(ev[f].k) === vt) { V.deathsTraded++; break; }

			var mk = touch(e.k), mv = touch(e.v);
			mk.k++; mk.kIdx.push({ i: j, t: e.t });
			if (mk.first < 0) mk.first = j;
			if (mv.first < 0) mv.first = j;
			if (mv.died < 0) mv.died = j;
		}
		// 라운드 단위 집계
		var self = R;
		mine.forEach(function (m, nick) {
			var p2 = get(nick), myTeam = R.team.get(nick);
			if (m.k > 0) { p2.killRounds++; if (m.k >= 2) p2.multiKillRounds++; }
			if (m.first >= 0) {
				p2.firstInvolvementRounds++;
				p2.firstInvolvementSum += n > 1 ? m.first / (n - 1) : 0;
				// '늦은 합류' = 내가 처음 관여하기 전에 이미 아군 3명이 쓰러져 있었나
				var fallen = 0;
				for (var z = 0; z < m.first; z++) if (R.team.get(ev[z].v) === myTeam) fallen++;
				if (fallen >= 3) p2.lateEntryRounds++;
			}
			// 킬 보상 연쇄: 킬로 화살·궁을 돌려받은 뒤 "죽기 전에" 또 킬했나
			for (var q = 0; q < m.kIdx.length; q++) {
				var at = m.kIdx[q].i;
				if (at >= n - 1) continue;                       // 라운드를 끝낸 킬은 기회가 아니다
				if (m.died >= 0 && m.died <= at) continue;       // 이미 죽은 뒤면 기회 없음
				p2.refillOpp++;
				var rch = charMap.get(hcAnKey(self.game, nick));
				if (rch) cget(rch).refillOpp++;
				var nxt = q + 1 < m.kIdx.length ? m.kIdx[q + 1].i : -1;
				if (nxt >= 0 && (m.died < 0 || nxt < m.died)) {
					p2.refillConv++;
					if (rch) cget(rch).refillConv++;
					if (m.kIdx[q].t === "a") p2.refillArrow++; else if (m.kIdx[q].t === "s") p2.refillSkill++; else p2.refillMelee++;
				}
			}
			// 첫 킬을 낸 뒤 그 라운드에서 죽었나
			if (m.kIdx.length && m.kIdx[0].i === 0 && m.died > 0) p2.openingReDeaths++;
		});
		// 참여 안 한 라운드도 '늦은 합류'로 센다
		for (j = 0; j < R.recs.length; j++) if (!mine.has(R.recs[j].nickname)) get(R.recs[j].nickname).lateEntryRounds++;
		// 클러치: 우리 팀에 한 명만 남은 상황. 그 시점의 생존자(로스터 - 사망자)에게 귀속.
		var al = { 0: R.size[0], 1: R.size[1] }, clutchSeen = {}, deadSet = {};
		for (j = 0; j < n; j++) {
			al[R.team.get(ev[j].v)]--;
			deadSet[ev[j].v] = 1;
			for (var t = 0; t < 2; t++) {
				if (al[t] !== 1 || al[1 - t] < 1 || clutchSeen[t]) continue;
				var alive1 = null;
				for (var q3 = 0; q3 < R.recs.length; q3++) {
					var rc = R.recs[q3];
					if (rc.win === t && !deadSet[rc.nickname]) { alive1 = rc.nickname; break; }
				}
				if (!alive1) continue;
				clutchSeen[t] = 1;
				var cp = get(alive1), mm = mine.get(alive1);
				cp.clutchOpp++;
				if (R.winner === t) cp.clutchWins++;
				if (mm) cp.clutchKills += mm.k;
			}
		}
	}
	_MXAN = { ns: stats.length, nk: kills.length, players: P, chars: C, rounds: rounds.length };
	return _MXAN;
}

/* ── 리포트 파생값 ────────────────────────────────────────────────
   분석기(hcAnalyze)가 낸 원시 카운터를 화면에 쓰는 비율·백분위·등급·문구로 바꾼다.
   합성 지표의 계수는 원본 HTML 산출물 55명분을 역산해 맞췄다:
     score        = 0.3*WPA백분위 + 0.5*연쇄백분위 + 0.2*화력백분위 를 다시 백분위화
     performance  = round(score*0.2 + 0.5)  (1~21 티어 포인트)
     skill        = round(0.8*performance + 0.2*실제티어)
     forecast     = 0.1414*score + 42.73,  구간 폭 = 14.25 - 0.103*confidence
     effective    = n/(n+81)*107,  confidence = 0.584*effective + 12          */

var _MXTIERNAME = ["브론즈 V", "브론즈 IV", "브론즈 III", "브론즈 II", "브론즈 I",
	"실버 III", "실버 II", "실버 I", "골드 III", "골드 II", "골드 I",
	"자수정 III", "자수정 II", "자수정 I", "다이아몬드 III", "다이아몬드 II", "다이아몬드 I",
	"네더라이트 III", "네더라이트 II", "네더라이트 I", "네더의 별"];

function hcRpClamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function hcRpTierName(pt) { return _MXTIERNAME[hcRpClamp(Math.round(pt), 1, 21) - 1]; }
function hcRpDiv(a, b) { return b > 0 ? a / b : 0; }

/* 캐릭터 사용 비중으로 가중한 "같은 캐릭터 평균" */
function hcRpExpected(p, chars, pick) {
	var tot = 0, acc = 0;
	p.charRounds.forEach(function (r, c) {
		var L = chars.get(c);
		if (!L || !(L.rounds > 0)) return;
		var v = pick(L);
		if (v === null) return;
		acc += v * r; tot += r;
	});
	return tot > 0 ? acc / tot : null;
}

function hcRpPercentile(sorted, v) {
	var lo = 0, hi = sorted.length;
	while (lo < hi) { var m = lo + hi >> 1; sorted[m] <= v ? lo = m + 1 : hi = m; }
	return sorted.length ? lo / sorted.length * 100 : 50;
}

var _MXRP = null;

/* 전 플레이어 파생값. 백분위가 필요하므로 한 번에 계산한다. */
function hcReportAll(stats, kills) {
	if (_MXRP && _MXRP.ns === stats.length && _MXRP.nk === kills.length) return _MXRP;
	var A = hcAnalyze(stats, kills), chars = A.chars, out = new Map(), pool = [];

	A.players.forEach(function (p, nick) {
		var R = p.logRounds, K = p.logKills, D = p.logDeaths,
			o = {
				nickname: nick,
				totalGames: p.totalGames, wins: p.wins,
				winRate: hcRpDiv(p.wins, p.totalGames) * 100,
				kd: p.deaths > 0 ? p.kills / p.deaths : p.kills,
				avgKills: hcRpDiv(p.kills, p.totalGames),
				tier: p.tier, actualPoint: hcTp(p.tier) || 1,
				logMatches: p.logMatches, logRounds: R, logKills: K, logDeaths: D,
				kpr: hcRpDiv(K, R),
				arrowKillShare: hcRpDiv(p.arrowKills, K),
				skillKillShare: hcRpDiv(p.skillKills, K),
				meleeKillShare: hcRpDiv(p.meleeKills, K),
				openingKills: p.openingKills, openingWins: p.openingWins,
				openingRate: hcRpDiv(p.openingKills, R),
				openingConversionRate: hcRpDiv(p.openingWins, p.openingKills),
				openingDeathRate: hcRpDiv(p.openingDeaths, R),
				openingReDeathRate: hcRpDiv(p.openingReDeaths, p.openingKills),
				tradeKillShare: hcRpDiv(p.tradeKills, K),
				deathTradedRate: hcRpDiv(p.deathsTraded, D),
				refillOpportunities: p.refillOpp, refillConversions: p.refillConv,
				refillConversionRate: hcRpDiv(p.refillConv, p.refillOpp),
				refillArrowShare: hcRpDiv(p.refillArrow, p.refillConv),
				refillSkillShare: hcRpDiv(p.refillSkill, p.refillConv),
				refillMeleeShare: hcRpDiv(p.refillMelee, p.refillConv),
				roundImpactRate: hcRpDiv(p.killRounds, R),
				chainConversionRate: hcRpDiv(p.multiKillRounds, p.killRounds),
				collapseKillShare: hcRpDiv(p.collapseKills, K),
				garbageKillShare: hcRpDiv(p.garbageKills, K),
				highLeverageKillShare: hcRpDiv(p.highLeverageKills, K),
				lateEntryRate: hcRpDiv(p.lateEntryRounds, R),
				avgFirstInvolvementPosition: hcRpDiv(p.firstInvolvementSum, p.firstInvolvementRounds),
				clutchOpportunities: p.clutchOpp, clutchWins: p.clutchWins,
				clutchRate: hcRpDiv(p.clutchWins, p.clutchOpp),
				preSwitchKpr: hcRpDiv(p.preKills, p.preRounds),
				postSwitchKpr: hcRpDiv(p.postKills, p.postRounds),
				wpaPerRound: hcRpDiv(p.killWpa + p.deathWpa, R),
				_raw: p
			};
		var eKpr = hcRpExpected(p, chars, function (L) { return hcRpDiv(L.kills, L.rounds); }),
			eWpa = hcRpExpected(p, chars, function (L) { return hcRpDiv(L.wpa, L.rounds); }),
			eRef = hcRpExpected(p, chars, function (L) { return hcRpDiv(L.refillConv, L.refillOpp); }),
			eOpn = hcRpExpected(p, chars, function (L) { return hcRpDiv(L.openingKills, L.rounds); });
		o.roleAdjusted = eKpr > 0 ? o.kpr / eKpr : 1;
		o.characterAdjustedWpa = o.wpaPerRound - (eWpa === null ? 0 : eWpa);
		o.characterAdjustedRefillConversion = o.refillConversionRate - (eRef === null ? 0 : eRef);
		o.characterAdjustedOpeningRate = o.openingRate - (eOpn === null ? 0 : eOpn);
		out.set(nick, o);
		if (p.logMatches >= 10) pool.push(o);
	});

	// 백분위 기준 풀 = 킬로그 10경기 이상
	var mk = function (key) { return pool.map(function (o) { return o[key]; }).sort(function (a, b) { return a - b; }); };
	var sWpa = mk("characterAdjustedWpa"), sRef = mk("characterAdjustedRefillConversion"), sApm = mk("roleAdjusted"),
		blend = [];
	out.forEach(function (o) {
		o.wpaPercentile = Math.round(hcRpPercentile(sWpa, o.characterAdjustedWpa));
		o.refillPercentile = Math.round(hcRpPercentile(sRef, o.characterAdjustedRefillConversion));
		o.apmPercentile = Math.round(hcRpPercentile(sApm, o.roleAdjusted));
		o._blend = .3 * o.wpaPercentile + .5 * o.refillPercentile + .2 * o.apmPercentile;
		if (o.logMatches >= 10) blend.push(o._blend);
	});
	blend.sort(function (a, b) { return a - b; });
	out.forEach(function (o) {
		o.score = Math.round(hcRpPercentile(blend, o._blend) * 10) / 10;
		o.effectiveGames = o.totalGames / (o.totalGames + 81) * 107;
		o.confidence = Math.round(hcRpClamp(.584 * o.effectiveGames + 12, 5, 99));
		o.performancePoint = hcRpClamp(Math.round(o.score * .2 + .5), 1, 21);
		o.performanceTier = hcRpTierName(o.performancePoint);
		o.skillPoint = hcRpClamp(Math.round(.8 * o.performancePoint + .2 * o.actualPoint), 1, 21);
		o.skillTier = hcRpTierName(o.skillPoint);
		o.gap = o.skillPoint - o.actualPoint;
		var band = hcRpClamp(Math.round((100 - o.confidence) / 22), 1, 5);
		o.skillLowTier = hcRpTierName(hcRpClamp(o.skillPoint - band, 1, 21));
		o.skillHighTier = hcRpTierName(hcRpClamp(o.skillPoint + band, 1, 21));
		o.forecastWinRate = hcRpClamp(.1414 * o.score + 42.73, 5, 95);
		var half = hcRpClamp(14.25 - .103 * o.confidence, 2, 20);
		o.forecastLow = hcRpClamp(o.forecastWinRate - half, 1, 99);
		o.forecastHigh = hcRpClamp(o.forecastWinRate + half, 1, 99);
		o.analysisGames = o.totalGames;
	});
	// 육각 차트 6지표의 백분위 기준 풀
	var pools = {};
	for (var di = 0; di < _MXDEFS.length; di++) {
		var key = _MXDEFS[di].k;
		pools[key] = pool.map(function (o) { return o[key]; }).sort(function (a, b) { return a - b; });
	}
	var ga = 0, gs = 0, gm = 0;
	chars.forEach(function (L) { ga += L.a; gs += L.s; gm += L.m; });
	var gt = ga + gs + gm || 1;
	_MXRP = { ns: stats.length, nk: kills.length, players: out, chars: chars, pools: pools, poolSize: pool.length,
		gmix: { a: ga / gt, s: gs / gt, m: gm / gt } };
	return _MXRP;
}

/* 주력 캐릭터 카드 */
function hcRpTopChars(o, meta, combat, chars, gmix) {
	// 이 구간은 통째로 킬로그 기반이라, 주력 캐릭터도 킬로그가 있는 경기 기준으로 뽑는다.
	// 전체 판수로 뽑으면 킬로그 이전(#334 미만)에만 쓴 캐릭이 화살/스킬 0% 로 올라온다.
	var p = o._raw, rows = [];
	p.charLogGames.forEach(function (g, c) { rows.push({ name: c, games: g, rounds: p.charRounds.get(c) || 0 }); });
	rows.sort(function (a, b) { return b.games - a.games || b.rounds - a.rounds; });
	return rows.slice(0, 3).map(function (r) {
		var ck = p.charKills.get(r.name) || { a: 0, s: 0, m: 0 }, t = ck.a + ck.s + ck.m,
			cb = combat && combat[r.name], md = meta && meta.get ? meta.get(r.name) : null;
		var a = t ? ck.a / t * 100 : 0, s = t ? ck.s / t * 100 : 0, m = t ? ck.m / t * 100 : 0;
		return {
			name: r.name, games: r.games,
			arrowShare: a, skillShare: s, meleeShare: m,
			maxRange: cb ? cb.range : 0,
			averageCooldown: cb ? cb.cool : 0,
			archetype: hcRpArchetype(chars ? chars.get(r.name) : null, gmix, md),
			summary: md && md.summary ? md.summary : ""
		};
	});
}

/* 캐릭터 유형 — 그 캐릭터의 전체 킬 구성을 서버 평균과 견줘 정한다.
   이 서버는 화살 킬이 원래 절반을 넘어서, 절대 비율로 끊으면 전부 "화살 순환형"이 된다. */
function hcRpArchetype(L, g, md) {
	var t = L ? L.a + L.s + L.m : 0;
	if (!t) return "혼합 순환형";
	var a = L.a / t, s = L.s / t, m = L.m / t,
		kw = md && md.keywords ? String(md.keywords) : "",
		aoe = kw.indexOf("광역") >= 0, util = kw.indexOf("유틸") >= 0 || kw.indexOf("군중") >= 0;
	if (m >= g.m * 1.8) return a >= g.a * .8 ? "근접 진입 연쇄형" : "근접 교전형";
	if (s >= g.s * 1.5) return aoe ? "광역 스킬 혼합형" : "스킬 연쇄형";
	if (a >= g.a * 1.25) return "화살 순환형";
	if (util) return "유틸 혼합형";
	if (s >= g.s * 1.15) return "스킬 혼합형";
	return "혼합 순환형";
}

/* 플레이스타일 태그 */
function hcRpTags(o, luck) {
	var t = [];
	if (o.score >= 90) t.push("하이퍼 캐리형"); else if (o.score >= 70) t.push("캐리형"); else if (o.score >= 40) t.push("균형형");
	if (o.characterAdjustedOpeningRate > .02) t.push("엔트리형"); else if (o.openingDeathRate > .12) t.push("척후 교전형");
	if (o.arrowKillShare >= .6) t.push("원거리 화력형");
	if (o.skillKillShare >= .45) t.push("광역 후방 캐리형");
	if (o.tradeKillShare >= .2) t.push("트레이드형");
	if (o.chainConversionRate >= .55) t.push("연속 처치형");
	if (o.openingConversionRate >= .6 && o.openingKills >= 20) t.push("우선교전 우위");
	if (o.openingReDeathRate <= .5 && o.openingKills >= 20) t.push("선취 굳히기 우수");
	if (o.characterAdjustedRefillConversion >= .03) t.push("자원 연쇄 우수");
	if (o.clutchRate >= .35 && o.clutchOpportunities >= 10) t.push("클러치력 높음");
	if (o.highLeverageKillShare >= .5) t.push("고영향 교전형");
	if (o.postSwitchKpr > o.preSwitchKpr * 1.25 && o.postSwitchKpr > 0) t.push("후반 스탯 편중");
	if (luck) { if (luck.pct >= 90) t.push("매칭주작 수혜자"); else if (luck.pct <= 10) t.push("매칭주작 피해자"); }
	return t;
}

/* 승률 개선 진단 — 원본 HTML 의 문구를 그대로 쓴다. */
function hcRpDiagnosis(o) {
	var pct = function (v) { return Math.round(v * 100); }, items = [];

	// 1) 역할
	var lead = o.characterAdjustedOpeningRate > .015;
	items.push({
		kind: "role", tone: "info",
		title: lead ? "잘 맞는 역할" : "자주 하는 역할",
		finding: lead ? "앞에서 먼저 들어가 적의 시선을 끄는 역할이 잘 맞습니다." : "여러 상황에 맞춰 싸우는 편입니다.",
		action: lead ? "혼자 너무 멀리 가지 말고, 바로 뒤에서 팀원이 화살을 쏠 수 있을 때 들어가세요."
			: "가장 많이 한 캐릭터의 좋은 거리와 싸움 순서를 먼저 익히세요.",
		evidence: "주력 캐릭터: " + o._topNames
	});

	// 2) 고칠 점 후보 — 나쁜 순으로 최대 2개
	var cands = [];
	if (o.logDeaths >= 30) cands.push({
		key: "trade", bad: .5 - o.deathTradedRate, tone: o.deathTradedRate < .18 ? "bad" : "warn",
		title: "혼자 죽는 싸움 줄이기",
		finding: "내가 죽은 뒤 팀원이 바로 되갚아 준 비율은 " + pct(o.deathTradedRate) + "%입니다.",
		action: "팀원 한 명과 같은 적을 보세요. 내가 죽어도 팀원이 바로 쏠 수 있는 거리에서 싸우세요.",
		evidence: "확인한 데스 " + o.logDeaths + "회", label: "혼자 죽는 싸움 많음"
	});
	if (o.logRounds >= 60) cands.push({
		key: "late", bad: o.lateEntryRate, tone: o.lateEntryRate > .5 ? "bad" : "warn",
		title: "팀 싸움에 빨리 들어가기",
		finding: "팀원 3명이 쓰러진 다음에야 싸우기 시작한 라운드가 " + pct(o.lateEntryRate) + "%입니다.",
		action: "팀원 두 명이 쓰러지기 전에 첫 화살을 쓰세요. 다 죽은 뒤의 킬보다 지금 돕는 킬이 더 중요합니다.",
		evidence: "확인한 교전 라운드 " + o.logRounds + "개", label: "팀 싸움 합류가 늦음"
	});
	if (o.refillOpportunities >= 30) cands.push({
		key: "refill", bad: -o.characterAdjustedRefillConversion, tone: o.characterAdjustedRefillConversion < -.05 ? "bad" : "warn",
		title: "킬한 다음 행동",
		finding: "킬로 화살과 궁극기를 다시 받은 뒤, 죽기 전에 또 킬한 비율은 " + pct(o.refillConversionRate) + "%입니다.",
		action: "첫 킬 뒤 같은 곳을 또 보지 말고, 옆으로 움직인 다음 새 화살이나 궁극기를 쓰세요.",
		evidence: "같은 캐릭터 평균보다 " + Math.abs(Math.round(o.characterAdjustedRefillConversion * 1000) / 10) + "%p "
			+ (o.characterAdjustedRefillConversion < 0 ? "낮음" : "높음"), label: "킬 다음 행동 필요"
	});
	if (o.logRounds >= 60) cands.push({
		key: "firstdeath", bad: o.openingDeathRate * 3, tone: o.openingDeathRate > .1 ? "bad" : "warn",
		title: "첫 번째로 죽지 않기",
		finding: "라운드에서 가장 먼저 죽은 비율은 " + (Math.round(o.openingDeathRate * 1000) / 10) + "%입니다.",
		action: "매번 같은 길로 먼저 가지 마세요. 팀원이 바로 도와줄 수 있을 때만 앞에 서세요.",
		evidence: "확인한 라운드 " + o.logRounds + "개", label: "첫 킬 뒤 무리함"
	});
	if (o.openingKills >= 10) cands.push({
		key: "opening", bad: .65 - o.openingConversionRate, tone: o.openingConversionRate < .5 ? "bad" : "warn",
		title: "첫 킬 지키기",
		finding: "첫 킬을 만든 뒤 라운드를 이긴 비율은 " + pct(o.openingConversionRate) + "%입니다.",
		action: "첫 킬을 했으면 바로 또 나가지 마세요. 팀원 옆에서 남은 적을 기다리세요.",
		evidence: "확인 가능한 라운드 " + o.openingKills + "개", label: "첫 킬 뒤 무리함"
	});
	if (o.logRounds >= 60) cands.push({
		key: "impact", bad: .55 - o.roundImpactRate, tone: o.roundImpactRate < .35 ? "bad" : "warn",
		title: "싸움에 더 자주 참여하기",
		finding: "킬을 하나라도 만든 라운드는 전체의 " + pct(o.roundImpactRate) + "%입니다.",
		action: "화살을 너무 오래 아끼지 마세요. 팀 싸움이 시작되면 한 발은 꼭 사용하세요.",
		evidence: "확인한 라운드 " + o.logRounds + "개", label: "싸움 영향이 부족함"
	});
	if (o.logKills >= 40) cands.push({
		key: "collapse", bad: o.collapseKillShare * 2, tone: o.collapseKillShare > .18 ? "bad" : "warn",
		title: "늦게 얻는 킬 줄이기",
		finding: "우리 팀이 크게 밀린 뒤에 얻은 킬이 전체 킬의 " + pct(o.collapseKillShare) + "%입니다.",
		action: "팀원이 싸우기 시작하면 같이 싸우세요. 혼자 마지막까지 남아서 킬을 모으는 것보다 팀을 먼저 돕는 게 좋습니다.",
		evidence: "확인한 킬 " + o.logKills + "회", label: "후반 스탯 편중"
	});
	cands.sort(function (a, b) { return b.bad - a.bad; });
	var picks = cands.filter(function (c) { return c.bad > 0; }).slice(0, 2);

	// 3) 잘하는 점 / 총평
	var strength = null;
	if (o.characterAdjustedWpa > 0 && o.wpaPercentile >= 60) strength = {
		kind: "strength", tone: "good", title: "승리에 도움이 되는 싸움",
		finding: "킬과 데스가 라운드 승리에 준 영향이 같은 캐릭터 평균보다 좋습니다.",
		action: "잘 이긴 싸움의 거리와 타이밍을 기억하고 같은 방식으로 반복하세요.",
		evidence: "라운드당 평균 대비 +" + (Math.round(o.characterAdjustedWpa * 1000) / 10) + "%p · 전체 상위 " + (100 - o.wpaPercentile) + "%"
	};
	else if (o.characterAdjustedRefillConversion > 0 && o.refillPercentile >= 60) strength = {
		kind: "strength", tone: "good", title: "킬을 다음 킬로 잇는 힘",
		finding: "킬로 돌려받은 화살과 궁극기를 다음 킬로 이어 가는 힘을 봅니다.",
		action: "첫 킬 뒤 자리를 바꾸고, 새 화살과 궁극기로 다음 적을 노리세요.",
		evidence: "연쇄율 " + pct(o.refillConversionRate) + "% · 같은 캐릭터 평균 대비 +" + (Math.round(o.characterAdjustedRefillConversion * 1000) / 10) + "%p"
	};
	else if (o.openingConversionRate >= .6 && o.openingKills >= 20) strength = {
		kind: "strength", tone: "good", title: "첫 킬을 승리로 바꾸는 힘",
		finding: "먼저 한 명을 잡은 뒤 그 라운드를 끝까지 이기는 힘을 봅니다.",
		action: "첫 킬 뒤에는 무리하지 말고 팀과 함께 남은 적을 막으세요.",
		evidence: "첫 킬 뒤 승리 " + pct(o.openingConversionRate) + "% · " + o.openingKills + "라운드"
	};
	if (!picks.length) strength = strength || {
		kind: "strength", tone: "good", title: "지금처럼 이어 가기",
		finding: "평균보다 크게 나쁜 핵심 지표가 보이지 않습니다.",
		action: "한 번에 새로운 것을 많이 바꾸지 말고, 잘 되는 캐릭터와 싸움 거리를 계속 사용하세요.",
		evidence: "개인 실력 지수 " + o.score.toFixed(1) + "점"
	};
	if (strength) items.push(strength);
	else items.push({
		kind: "summary", tone: "neutral", title: "지금 상태",
		finding: "잘하는 점보다 먼저 고칠 점이 더 뚜렷하게 보입니다.",
		action: "아래에 적힌 두 가지를 한꺼번에 하지 말고, 첫 번째부터 한 게임씩 연습하세요.",
		evidence: "개인 실력 지수 " + o.score.toFixed(1) + "점"
	});
	picks.forEach(function (c, i) {
		items.push({
			kind: "action", tone: c.tone,
			title: (i === 0 ? "먼저: " : "그다음: ") + c.title,
			finding: c.finding, action: c.action, evidence: c.evidence
		});
	});
	o.commentLabel = picks.length ? picks[0].label : (strength && strength.title === "지금처럼 이어 가기" ? "승리에 도움을 많이 줌" : "한 가지씩 고치기");
	o.commentTone = picks.length ? picks[0].tone : "good";
	if (picks.length && o.score >= 70) { o.commentLabel = "잘하지만 승리로 덜 이어짐"; o.commentTone = "warn"; }
	return items;
}

/* 한 명분 리포트 완성 */
function hcReportOf(nick, stats, kills, meta, combat, luck) {
	var all = hcReportAll(stats, kills), o = all.players.get(nick);
	// 표본이 너무 적으면 리포트를 만들지 않는다. 2~3판짜리 백분위·캐릭터 보정은
	// 숫자만 그럴듯하고 내용이 없다(원본은 30판으로 끊었다 — 킬로그 기준이라 더 낮게 잡는다).
	if (!o || o.logMatches < 5 || o.logRounds < 30) return null;
	o.topCharacters = hcRpTopChars(o, meta, combat, all.chars, all.gmix);
	o._topNames = o.topCharacters.map(function (c) { return c.name; }).join("·") || "-";
	o.diagnosisItems = hcRpDiagnosis(o);
	o.playstyleTags = hcRpTags(o, luck);
	o.actualTier = hcRpTierName(o.actualPoint);
	return o;
}

/* ── 팀운(TEAM LUCK) ─────────────────────────────────────────────
   팀운은 두 가지다. 둘 다 stats.json 만으로 매 방문 계산하므로 전적이 올라가면 자동 갱신된다.
   지표 스냅샷(metrics.json)의 teamLuckScore 는 쓰지 않는다 — 55명분 고정값이라
   같은 화면에 어긋나는 팀운이 두 개 생긴다.

   1) 전체(프로필 카드) — 매칭 운. 한 경기에서 "나를 뺀 우리 팀 평균 티어 − 상대 팀 평균 티어"를
      구해 전 경기 평균낸 값(gap)이 기준. 나를 빼는 게 핵심이다 — 내 티어까지 넣으면
      고티어일수록 팀운이 좋게 나온다. 표시는 원본 HTML 과 같은 영문 등급(F~SS+).
   2) 경기별(경기 기록 각 행) — 그 판에서 아군이 실제로 잘했나. 나를 뺀 같은 팀의 합산 K/D.
      표시는 매우 나쁨~매우 좋음 5단계. */
var _MXBASE={BRON:0,SILV:5,GOLD:8,AME:11,DIA:14,NETH:17};
var _MXRB={V:1,IV:2,III:3,II:4,I:5};
var _MXRG={III:1,II:2,I:3};
function hcTp(t){
if(!t)return null;
var x=String(t).trim();
if(x==="STAR")return 21;
var p=x.split(" ");
if(p.length!==2)return null;
var b=_MXBASE[p[0]];
if(void 0===b)return null;
var r="BRON"===p[0]?_MXRB[p[1]]:_MXRG[p[1]];
return r?b+r:null}
var _MXLUCK=null;
function hcLuckAll(a){
if(_MXLUCK&&_MXLUCK.n===a.length)return _MXLUCK.m;
var m=new Map();
for(var i=0;i<a.length;i++){
var rs=a[i][1],sum={},cnt={},j,v,w;
for(j=0;j<rs.length;j++){v=hcTp(rs[j].tier);if(null==v)continue;w=rs[j].win;sum[w]=(sum[w]||0)+v;cnt[w]=(cnt[w]||0)+1}
for(j=0;j<rs.length;j++){
var r=rs[j];v=hcTp(r.tier);if(null==v)continue;
w=r.win;var o=w?0:1;
if(!(cnt[w]>1)||!(cnt[o]>0))continue;
var tm=(sum[w]-v)/(cnt[w]-1),om=sum[o]/cnt[o],d=tm-om,
e=m.get(r.nickname)||{gap:0,n:0,own:0,opp:0,ud:0};
e.gap+=d;e.n++;e.own+=tm;e.opp+=om;if(d<0)e.ud++;
m.set(r.nickname,e)}}
m.forEach(function(e){e.gap/=e.n;e.own/=e.n;e.opp/=e.n;e.ud/=e.n});
_MXLUCK={n:a.length,m:m};
return m}
var _MXPOOL=null;
/* 절대 gap 을 그대로 보여주면 "0.3 이 좋은 건가?"를 알 수 없다.
   20판 이상 유저 전체 안에서의 백분위로 바꿔 5단계로 끊는다. */
function hcLuckOf(nick,a){
var m=hcLuckAll(a),e=m.get(nick);
if(!e||e.n<10)return null;
if(!_MXPOOL||_MXPOOL.n!==a.length){
var v=[];
m.forEach(function(x){if(x.n>=20)v.push(x.gap)});
v.sort(function(p,q){return p-q});
_MXPOOL={n:a.length,v:v}}
var pv=_MXPOOL.v,lo=0,hi=pv.length;
while(lo<hi){var mid=lo+hi>>1;pv[mid]<=e.gap?lo=mid+1:hi=mid}
var pc=pv.length?lo/pv.length*100:50,
lb=pc<10?["매우 나쁨","vbad"]:pc<30?["나쁨","bad"]:pc<70?["보통","mid"]:pc<90?["좋음","good"]:["매우 좋음","vgood"];
return{gap:e.gap,games:e.n,own:e.own,opp:e.opp,ud:e.ud,pct:pc,label:lb[0],tone:lb[1]}}
function hcLuckStrip(H,eg){
var L=hcLuckOf(H.nickname,eg);
if(!L)return null;
return(0,s.jsxs)("div",{className:"spike-strip mx-luck-strip",children:[
(0,s.jsx)("span",{children:"TEAM LUCK"}),
(0,s.jsxs)("b",{className:"mx-luck mx-"+L.tone,children:[(0,s.jsx)("i",{children:"팀운"}),hcMxGrade(L.pct)]}),
(0,s.jsxs)("b",{children:[(0,s.jsx)("i",{children:"점수"}),L.pct.toFixed(1)]}),
(0,s.jsxs)("b",{children:[(0,s.jsx)("i",{children:"아군-상대 티어차"}),(L.gap>=0?"+":"")+L.gap.toFixed(2)]}),
(0,s.jsxs)("b",{children:[(0,s.jsx)("i",{children:"불리"}),Math.round(100*L.ud)+"%"]}),
(0,s.jsxs)("b",{className:"mx-luck-note",children:[(0,s.jsx)("i",{children:"표본"}),L.games+"판"]})]})}

/* ── 경기별 팀운 ─────────────────────────────────────────────────
   전체 팀운은 티어(매칭) 기준이지만, 한 경기의 팀운은 "그 판에서 아군이 실제로 잘했나"다.
   나를 뺀 같은 팀의 합산 K/D 를 전 경기·전 인원 분포 안에서의 백분위로 바꿔 5단계로 끊는다. */
var _MXMK=null;
function hcMatchLuckAll(a){
if(_MXMK&&_MXMK.n===a.length)return _MXMK;
var m=new Map(),pool=[];
for(var i=0;i<a.length;i++){
var rs=a[i][1],K={},D={},C={},j,r,w;
for(j=0;j<rs.length;j++){r=rs[j];w=r.win;K[w]=(K[w]||0)+(r.kill||0);D[w]=(D[w]||0)+(r.death||0);C[w]=(C[w]||0)+1}
for(j=0;j<rs.length;j++){
r=rs[j];w=r.win;
if(!(C[w]>2))continue;
var v=(K[w]-(r.kill||0))/Math.max(1,D[w]-(r.death||0));
m.set(a[i][0]+"|"+r.nickname,v);pool.push(v)}}
pool.sort(function(x,y){return x-y});
_MXMK={n:a.length,m:m,pool:pool};
return _MXMK}
function hcMatchLuck(gn,nick,a){
var st=hcMatchLuckAll(a),v=st.m.get(gn+"|"+nick);
if(void 0===v)return null;
var p=st.pool,lo=0,hi=p.length;
while(lo<hi){var mid=lo+hi>>1;p[mid]<=v?lo=mid+1:hi=mid}
var pc=lo/p.length*100;
return pc<10?{label:"매우 나쁨",tone:"vbad"}:pc<30?{label:"나쁨",tone:"bad"}:pc<70?{label:"보통",tone:"mid"}:pc<90?{label:"좋음",tone:"good"}:{label:"매우 좋음",tone:"vgood"}}
function hcMatchLuckChip(rec,eg){
var L=hcMatchLuck(rec.gamenumber,rec.nickname,eg);
if(!L)return null;
return(0,s.jsxs)("span",{className:"mx-mluck mx-"+L.tone,children:[(0,s.jsx)("i",{children:"팀운"}),L.label]})}

/* ── 지표 리포트 ─────────────────────────────────────────────────
   전적(stats.json) + 킬로그(killlog.json)로 매 방문 직접 계산한다.
   계산은 hcReportAll 이 전 플레이어를 한 번에 처리하고 캐시한다(전체 150ms 안팎). */
var _MXDEFS=[
{k:"characterAdjustedWpa",l:"보정 영향",raw:"캐릭터 보정 영향",high:1,f:"delta"},
{k:"roleAdjusted",l:"보정 화력",raw:"캐릭터 보정 화력",high:1,f:"ratio"},
{k:"characterAdjustedRefillConversion",l:"리필 연쇄",raw:"리필 연쇄 보정",high:1,f:"delta"},
{k:"openingConversionRate",l:"선취 전환",raw:"선취 승리 전환",high:1,f:"pct"},
{k:"deathTradedRate",l:"데스 교환",raw:"데스 교환",high:1,f:"pct"},
{k:"lateEntryRate",l:"합류 속도",raw:"교전 합류 속도",high:0,f:"pct"}];
function hcMxQ(all,o,d){
var pool=all.pools[d.k];
if(!pool||!pool.length)return 50;
var r=hcRpPercentile(pool,o[d.k])/100;
return 100*(d.high?r:1-r)}
function hcMxGrade(v){return v>=99?"SS+":v>=95?"SS":v>=90?"S+":v>=80?"S":v>=70?"A+":v>=60?"A":v>=50?"B+":v>=40?"B":v>=30?"C":v>=20?"D":v>=10?"E":"F"}
function hcMxFmt(v,f){return"ratio"===f?v.toFixed(2)+"×":"delta"===f?(v>=0?"+":"")+(100*v).toFixed(1)+"%p":(100*v).toFixed(1)+"%"}
function hcMxImg(p){return p>=21?"/tier/star.png":p>=18?"/tier/neth.png":p>=15?"/tier/dia.png":p>=12?"/tier/ameth.png":p>=9?"/tier/gold.png":p>=6?"/tier/silver.png":"/tier/bronze.png"}
function hcMxTier(pt,label,big){
return(0,s.jsxs)("span",{className:"mx-tier"+(big?" mx-tier-lg":""),children:[
(0,s.jsx)("img",{src:hcMxImg(pt),alt:""}),
(0,s.jsx)("b",{children:label})]})}
function hcMxPt(i,v){var a=-Math.PI/2+i*Math.PI/3,r=105*v/100;return[170+Math.cos(a)*r,170+Math.sin(a)*r]}
function hcMxRadar(vals){
return(0,s.jsxs)("svg",{viewBox:"0 0 340 332",role:"img","aria-label":"핵심 지표 육각 차트",children:[
[25,50,75,100].map(function(g){return(0,s.jsx)("polygon",{className:"mx-grid",points:_MXDEFS.map(function(x,i){return hcMxPt(i,g).join(",")}).join(" ")},"g"+g)}),
_MXDEFS.map(function(x,i){var q=hcMxPt(i,100);return(0,s.jsx)("line",{className:"mx-axis",x1:170,y1:170,x2:q[0],y2:q[1]},"a"+i)}),
(0,s.jsx)("polygon",{className:"mx-area",points:vals.map(function(v,i){return hcMxPt(i,v).join(",")}).join(" ")}),
vals.map(function(v,i){var q=hcMxPt(i,v);return(0,s.jsx)("circle",{className:"mx-dot",cx:q[0],cy:q[1],r:4},"d"+i)}),
_MXDEFS.map(function(d,i){
var a=-Math.PI/2+i*Math.PI/3,x=170+Math.cos(a)*134,y=170+Math.sin(a)*132,
an=Math.abs(x-170)<10?"middle":x<170?"end":"start";
return(0,s.jsxs)("g",{children:[
(0,s.jsx)("text",{className:"mx-lb",x:x,y:y,textAnchor:an,children:d.l}),
(0,s.jsx)("text",{className:"mx-vl",x:x,y:y+14,textAnchor:an,children:hcMxGrade(vals[i])+" · "+vals[i].toFixed(0)+"%"})]},"l"+i)})]})}
function hcMxKind(it){return"role"===it.kind?"내 역할":"summary"===it.kind?"전체 상태":"strength"===it.kind?"잘하는 점":0===it.title.indexOf("먼저:")?"먼저 고칠 점":"다음에 고칠 점"}
/* 제목의 "먼저:" / "그다음:" 은 위 배지가 이미 말하고 있다. 중복이라 떼고 쓴다. */
function hcMxTitle(it){return it.title.replace(/^(먼저|그다음)\s*:\s*/,"")}
/* eg([게임번호, 기록[]] 배열)를 평평한 stats 배열로. 렌더마다 새로 만들지 않게 캐시한다. */
var _MXFLAT=null;
function hcFlatGames(eg){
if(_MXFLAT&&_MXFLAT.n===eg.length)return _MXFLAT.a;
var a=[];
for(var i=0;i<eg.length;i++)for(var j=0;j<eg[i][1].length;j++)a.push(eg[i][1][j]);
_MXFLAT={n:eg.length,a:a};
return a}
function hcMxSection(H,eg,kills,meta,combat){
if(!eg||!eg.length||!kills||!kills.length)return null;
var stats=hcFlatGames(eg);
var luck=hcLuckOf(H.nickname,eg),
p=hcReportOf(H.nickname,stats,kills,meta,combat,luck);
if(!p)return null;
var all=hcReportAll(stats,kills),
vals=_MXDEFS.map(function(d){return hcMxQ(all,p,d)});
return(0,s.jsxs)(s.Fragment,{children:[
(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[
(0,s.jsxs)("div",{children:[
(0,s.jsx)("p",{children:"PLAYER METRICS"}),
(0,s.jsx)("h2",{children:"지표 리포트"})]}),
(0,s.jsxs)("span",{children:["킬로그 ",p.logMatches,"경기 분석 · 전체 유저 대비 백분위"]})]}),
(0,s.jsxs)("div",{className:"mx-wrap",children:[
(0,s.jsxs)("div",{className:"mx-summary",children:[
(0,s.jsxs)("div",{children:[
(0,s.jsx)("small",{children:"개인 실력 지수"}),
(0,s.jsx)("strong",{children:p.score.toFixed(1)}),
(0,s.jsxs)("span",{children:["전체 상위 ",(100-p.score).toFixed(1),"%"]})]}),
(0,s.jsxs)("div",{children:[
(0,s.jsx)("small",{children:"실제 / 추정 티어"}),
hcMxTier(p.actualPoint,p.actualTier,!0),
(0,s.jsxs)("span",{children:["추정 ",p.skillTier," · ",p.skillLowTier,"–",p.skillHighTier]})]}),
(0,s.jsxs)("div",{children:[
(0,s.jsx)("small",{children:"기대 승률"}),
(0,s.jsxs)("strong",{children:[p.forecastWinRate.toFixed(1),"%"]}),
(0,s.jsxs)("span",{children:[p.forecastLow.toFixed(1),"–",p.forecastHigh.toFixed(1),"% · 실제 ",p.winRate.toFixed(1),"%"]})]}),
(0,s.jsxs)("div",{children:[
(0,s.jsx)("small",{children:"킬 보상 연쇄"}),
(0,s.jsxs)("strong",{children:[(100*p.refillConversionRate).toFixed(1),"%"]}),
(0,s.jsxs)("span",{children:["캐릭터 대비 ",(p.characterAdjustedRefillConversion>=0?"+":"")+(100*p.characterAdjustedRefillConversion).toFixed(1),"%p"]})]})]}),
(0,s.jsxs)("div",{className:"mx-body",children:[
(0,s.jsxs)("div",{className:"mx-radarbox",children:[
(0,s.jsxs)("div",{className:"mx-radartitle",children:[
(0,s.jsx)("strong",{children:"핵심 지표 육각 차트"}),
(0,s.jsx)("span",{children:"바깥쪽일수록 우수"})]}),
hcMxRadar(vals)]}),
(0,s.jsx)("div",{className:"mx-metrics",children:_MXDEFS.map(function(d,i){
return(0,s.jsxs)("div",{className:"mx-metric",children:[
(0,s.jsxs)("small",{children:[d.raw,(0,s.jsx)("b",{className:"mx-grade",children:hcMxGrade(vals[i])})]}),
(0,s.jsx)("strong",{children:hcMxFmt(p[d.k],d.f)}),
(0,s.jsxs)("span",{children:[vals[i].toFixed(0),"백분위"]})]},d.k)})})]}),
(0,s.jsxs)("div",{className:"mx-tags",children:[
(0,s.jsx)("span",{className:"mx-tag mx-tag-"+p.commentTone,children:p.commentLabel}),
p.playstyleTags.map(function(t){
return(0,s.jsx)("span",{className:"mx-tag"+("매칭주작 피해자"===t?" mx-tag-bad":"매칭주작 수혜자"===t?" mx-tag-good":""),children:t},t)})]}),
p.topCharacters.length?(0,s.jsx)("div",{className:"mx-chars",children:p.topCharacters.map(function(c){
return(0,s.jsxs)("div",{className:"mx-char",children:[
hcIcon(c.name,"inline"),
(0,s.jsxs)("div",{children:[
(0,s.jsxs)("strong",{children:[c.name,(0,s.jsx)("em",{children:c.archetype})]}),
(0,s.jsxs)("small",{children:[c.games,"경기 · 최대 사거리 ",c.maxRange||"-","칸 · 평균 쿨 ",c.averageCooldown||"-","초"]}),
(0,s.jsxs)("small",{className:"mx-mix",children:[
(0,s.jsxs)("i",{children:["화살 ",c.arrowShare.toFixed(0),"%"]}),
(0,s.jsxs)("i",{children:["스킬 ",c.skillShare.toFixed(0),"%"]}),
(0,s.jsxs)("i",{children:["근접 ",c.meleeShare.toFixed(0),"%"]})]})]})]},c.name)})}):null,
(p.diagnosisItems||[]).length?(0,s.jsx)("div",{className:"mx-diag",children:(p.diagnosisItems||[]).map(function(it,i){
return(0,s.jsxs)("article",{className:"mx-diag-item mx-"+it.tone,children:[
(0,s.jsx)("span",{children:hcMxKind(it)}),
(0,s.jsx)("h4",{children:hcMxTitle(it)}),
(0,s.jsx)("p",{children:it.finding}),
(0,s.jsxs)("p",{className:"mx-action",children:[(0,s.jsx)("b",{children:"이렇게 해보세요"}),it.action]}),
(0,s.jsx)("small",{children:it.evidence})]},i)})}):null]})]})}
function hcCharRows(e){let a=new Map;for(let s of e.games){let n=s.character;if(!n)continue;let l=a.get(n)||{name:n,games:0,wins:0,kills:0,deaths:0};l.games++;l.wins+=s.win?1:0;l.kills+=s.kill||0;l.deaths+=s.death||0;a.set(n,l)}return[...a.values()].map(e=>({...e,winRate:e.games?e.wins/e.games*100:0,kd:w(e.kills,e.deaths)})).sort((e,a)=>a.games-e.games||a.winRate-e.winRate)}function hcVs(e,a){let s=new Map(a),n=new Map;for(let a of e.games){let l=s.get(a.gamenumber);if(l)for(let s of l){if(s.nickname===e.nickname)continue;let r=n.get(s.nickname)||{nickname:s.nickname,vs:0,win:0,loss:0,ally:0};if(s.win===a.win)r.ally++;else{r.vs++,a.win?r.win++:r.loss++}n.set(s.nickname,r)}}return[...n.values()].map(e=>({...e,rate:e.vs?e.win/e.vs*100:0}))}function hcTeam(e,a){let s=new Map(a),n=new Map;for(let a of e.games){let l=s.get(a.gamenumber);if(l)for(let s of l){if(s.nickname===e.nickname||s.win!==a.win)continue;let r=n.get(s.nickname)||{nickname:s.nickname,team:0,win:0,loss:0};r.team++,a.win?r.win++:r.loss++,n.set(s.nickname,r)}}return[...n.values()].map(e=>({...e,rate:e.team?e.win/e.team*100:0}))}function hcDuel(e,a){let s=new Map;if(!a)return s;for(let n of a)for(let a of n.kills||[]){if(a.k===e.nickname){let e=s.get(a.v)||{k:0,d:0};e.k++,s.set(a.v,e)}else if(a.v===e.nickname){let e=s.get(a.k)||{k:0,d:0};e.d++,s.set(a.k,e)}}return s}function hcCMap(e){if(_CMAP&&_CMAP.n===e.length)return _CMAP.m;let a=new Map;for(let s of e)a.set(s.gamenumber+"|"+s.nickname,s.character);return _CMAP={n:e.length,m:a},a}function hcCombat(e,a,s){let n=hcCMap(s),l={a:0,s:0,m:0},r={a:0,s:0,m:0},i=0,t=0,c=new Map;if(a)for(let s of a)for(let a of s.kills||[]){let d=n.get(s.gamenumber+"|"+a.k),o=n.get(s.gamenumber+"|"+a.v);r[a.t]=(r[a.t]||0)+1;if(d===e){l[a.t]=(l[a.t]||0)+1,i++;if(o&&o!==e){let e=c.get(o)||{name:o,k:0,d:0};e.k++,c.set(o,e)}}if(o===e){t++;if(d&&d!==e){let e=c.get(d)||{name:d,k:0,d:0};e.d++,c.set(d,e)}}}let d=[...c.values()].filter(e=>e.k+e.d>=5);return{mine:l,all:r,kills:i,deaths:t,beat:[...d].sort((e,a)=>a.k-a.d-(e.k-e.d)||a.k-e.k).slice(0,5),lost:[...d].sort((e,a)=>e.k-e.d-(a.k-a.d)||a.d-e.d).slice(0,5)}}function hcPct(e,a){return a?Math.round(e/a*100):0}function hcPatchBlocks(e){let a=[],n={name:null,lines:[]};return e.split("\n").forEach(e=>{let l=e.trim();if(!l||/^[-\u2013\u2014]{3,}$/.test(l))return;let r=l.replace(/^[^\uac00-\ud7a3A-Za-z0-9]+/,"").trim();_CHARID.has(r)?((n.name||n.lines.length)&&a.push(n),n={name:r,lines:[]}):n.lines.push(l)}),(n.name||n.lines.length)&&a.push(n),a}function hcPatchLine(e,a){if(/\([^)]{1,12}\)\s*$/.test(e)&&e.length<34)return(0,s.jsx)("h4",{children:e},a);let n=e.split(/\s*(?:\u2192|->|>)\s*/).filter(e=>""!==e);if(n.length<2)return(0,s.jsx)("p",{children:e},a);let l=[];return n.forEach((e,a)=>{a&&l.push((0,s.jsx)("i",{children:"\u2192"},"a"+a));l.push((0,s.jsx)("span",{children:e},"t"+a))}),(0,s.jsx)("p",{className:"patch-change",children:l},a)}function hcSlot(e){let a=_CHARID.get(e);return a?a-1:_GRID*_GRID-1}function hcRgb(e){return e?parseInt(e.slice(1,3),16)+", "+parseInt(e.slice(3,5),16)+", "+parseInt(e.slice(5,7),16):null}function hcReadable(e){if(!e||7!==e.length)return e||null;let a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16),r=(.2126*a+.7152*n+.0722*l)/255;if(r>=.42)return e;let i=Math.min(.85,1.7*(.42-r)+.12);return"#"+[a,n,l].map(e=>Math.round(e+(255-e)*i).toString(16).padStart(2,"0")).join("")}function hcSkillStyle(e){let a=e&&e.typeColor;return a?{"--skill-color":a,"--skill-rgb":hcRgb(a)}:void 0}function hcMapStyle(e){let a=_MAPIMG.get(e);return a?{"--map-img":'url("'+a+'")'}:void 0}function hcMapThumb(e){let a=_MAPIMG.get(e);return a?(0,s.jsx)("span",{className:"map-thumb",style:{"--map-img":'url("'+a+'")'},"aria-hidden":"true"}):null}function hcIcon(e,a){return e&&_CHARID.has(e)?(0,s.jsx)(L,{name:e,index:hcSlot(e),size:a}):null}function N(e){return x.add(e),g||(g=window.setInterval(()=>{let e=Math.floor(Date.now()/12e5);e!==u&&(u=e,x.forEach(e=>e()))},6e4)),()=>{x.delete(e),!x.size&&g&&(window.clearInterval(g),g=null)}}function k(e){return encodeURIComponent(e.normalize("NFC"))}function v(e){try{return decodeURIComponent(e).normalize("NFC")}catch{return null}}function b(e="BRON IV"){let[s="BRON",a=""]=e.trim().split(/\s+/);return{code:s,grade:a,label:`${l[s]||s}${a?` ${a}`:""}`}}function f(e){let{code:s,grade:a}=b(e);return(n[s]??99)*10+(({I:1,II:2,III:3,IV:4,V:5})[a]??0)}function w(e,s){return 0===s?e:e/s}function C({tier:e,compact:a=!1}){let{code:n,grade:l,label:i}=b(e),c=`${r[n]||n}${l?` ${l}`:""}`;return(0,s.jsxs)("span",{className:`tier tier-${n.toLowerCase()} ${a?"tier-compact":""}`,children:[(0,s.jsx)("img",{className:"tier-icon",src:t[n]||t.BRON,alt:"","aria-hidden":"true"}),a?c:i]})}function S({nickname:e,size:n="compact"}){let l=(0,a.useRef)(null),[r,i]=(0,a.useState)("profile"===n),[t,c]=(0,a.useState)(null),[d,m]=(0,a.useState)(!1),[h,x]=(0,a.useState)(0),j="profile"===n?96:64,p=(0,a.useSyncExternalStore)(N,()=>u,()=>0);(0,a.useEffect)(()=>{if(r)return;let e=l.current;if(!e||"u"<typeof IntersectionObserver)return void i(!0);let s=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),s.disconnect())},{rootMargin:"320px"});return s.observe(e),()=>s.disconnect()},[r]),(0,a.useEffect)(()=>{if(!r)return;let s=!0;return c(null),m(!1),x(0),(function(e){let s=e.toLowerCase(),a=o.get(s);if(a)return a;let n=fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(e)}`,{signal:AbortSignal.timeout(4500)}).then(e=>e.ok?e.json():null).then(e=>{let s=e?.data?.player,a=String(s?.raw_id||s?.id||"").replaceAll("-","");if(32!==a.length)throw Error("PlayerDB profile missing");return{uuid:a,avatar:s?.avatar}}).catch(()=>fetch(`https://mcproxy.dev/uuid/${encodeURIComponent(e)}`,{signal:AbortSignal.timeout(4500)}).then(e=>e.ok?e.json():null).then(e=>{let s=String(e?.data?.id||"").replaceAll("-","");if(32!==s.length)throw Error("Minecraft profile missing");return{uuid:s}})).catch(()=>null);return o.set(s,n),n})(e).then(e=>{s&&(c(e),m(!0))}),()=>{s=!1}},[e,r]);let g=(0,a.useMemo)(()=>{if(!d)return[];let s=encodeURIComponent(t?.uuid||e);return(t?.uuid?[`https://minotar.net/helm/${s}/${j}.png?v=${p}`,`https://api.mineatar.io/face/${s}?scale=${Math.max(1,Math.round(j/8))}`,`https://mc-heads.net/avatar/${s}/${j}.png?v=${p}`,t.avatar?`${t.avatar}${t.avatar.includes("?")?"&":"?"}v=${p}`:""]:[`https://minotar.net/helm/${s}/${j}.png?v=${p}`,`https://mc-heads.net/avatar/${s}/${j}.png?v=${p}`]).filter(Boolean)},[j,e,t,d,p]);(0,a.useEffect)(()=>x(0),[p,t?.uuid]);let k=g[h];return(0,s.jsxs)("span",{ref:l,className:`player-head player-head-${n} ${!k?"player-head-unresolved":""}`,title:t?.uuid?`${e} \xb7 UUID verified`:e,children:[(0,s.jsx)("span",{className:"player-head-fallback","aria-hidden":"true"}),k&&(0,s.jsx)("img",{src:k,alt:`${e}의 마인크래프트 스킨 머리`,loading:"profile"===n?"eager":"lazy",decoding:"async",onError:()=>x(e=>e+1)},k)]})}function y(e,s){let a=s.filter(s=>s.win===e.win),n=a.reduce((e,s)=>e+s.kill,0),l=Math.max(0,...a.map(e=>e.kill)),r=Math.max(0,...s.map(e=>e.kill)),i=w(e.kill,e.death),t=n?e.kill/n:0,c=[];return e.win&&e.kill>=4&&e.kill===l&&(t>=.3||i>=2)&&c.push({label:"CARRY",kind:"carry",detail:"승리 팀 최다 킬과 높은 전투 기여도"}),!e.win&&e.kill>=3&&e.kill===l&&i>=1.5&&c.push({label:"무죄",kind:"innocent",detail:"패배 팀 최다 킬과 1.5 이상의 K/D"}),0===e.death&&e.kill>=2&&c.push({label:"무결점",kind:"flawless",detail:"2킬 이상, 데스 없이 경기 종료"}),e.kill===r&&e.kill>0&&!c.some(e=>"carry"===e.kind)&&c.push({label:"킬 리더",kind:"frag",detail:"경기 전체 최다 킬"}),e.win&&e.kill>=3&&t>=.3&&!c.length&&c.push({label:"핵심 전력",kind:"impact",detail:"팀 킬의 30% 이상 기여"}),c.slice(0,2)}function R({tags:e}){return e.length?(0,s.jsx)("span",{className:"performance-tags",children:e.map(e=>(0,s.jsx)("em",{className:`performance-tag tag-${e.kind}`,title:e.detail,children:e.label},e.kind))}):null}function A({kills:e,games:n,onOpenPlayer:l,spikes:hcSpk}){let hcSpl=hcSpk||[],r=(0,a.useMemo)(()=>{let s=new Map;return e.forEach(e=>s.set(e.r,[...s.get(e.r)||[],e])),hcSpl.forEach(e=>s.set(e.r,[...s.get(e.r)||[],e])),[...s.entries()].sort((e,s)=>e[0]-s[0])},[e,hcSpk]),i=(0,a.useMemo)(()=>new Map(n.map(e=>[e.nickname,e])),[n]),t={m:{icon:"⚔",label:"근접"},a:{icon:"➶",label:"화살"},s:{icon:"✦",label:"스킬"}},hcSpT={p:{icon:"◈",label:"설치"},d:{icon:"✂",label:"해체"},x:{icon:"✹",label:"폭파"}};if(!e.length&&!hcSpl.length)return null;let c=({nickname:e})=>{let a=i.get(e);return(0,s.jsxs)("button",{type:"button",className:`kill-player ${a?a.win?"kill-side-win":"kill-side-loss":"kill-side-unknown"}`,onClick:()=>a&&l(e),disabled:!a,children:[(0,s.jsx)("strong",{children:e}),a&&(0,s.jsxs)("small",{children:[hcIcon(a.character,"mini"),a.character]})]})};return(0,s.jsxs)("section",{className:"killfeed","aria-label":"라운드별 킬로그",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"KILL FEED"}),(0,s.jsx)("h3",{children:"라운드 킬로그"})]}),(0,s.jsxs)("b",{children:[e.length," KILLS · ",...hcSpl.length?[hcSpl.length," SPIKE · "]:[],r.length," ROUNDS"]})]}),(0,s.jsx)("div",{className:"killfeed-rounds",children:r.map(([e,a])=>(0,s.jsxs)("section",{className:"killfeed-round",children:[(0,s.jsxs)("h4",{children:["ROUND ",e,(0,s.jsx)("small",{children:a.length})]}),(0,s.jsx)("ol",{children:a.map((a,n)=>{if(a.p){let l=hcSpT[a.t]||{icon:"◈",label:"스파이크"};return(0,s.jsxs)("li",{className:"killfeed-spike",children:[(0,s.jsx)(c,{nickname:a.p}),(0,s.jsx)("span",{className:`kill-icon spike-icon spike-icon-${a.t}`,title:l.label,"aria-label":l.label,children:l.icon}),(0,s.jsx)("em",{className:"spike-label",children:l.label})]},`${e}-s${n}`)}let l=t[a.t]||{icon:"•",label:"처치"};return(0,s.jsxs)("li",{children:[(0,s.jsx)(c,{nickname:a.k}),(0,s.jsx)("span",{className:`kill-icon kill-${a.t}`,title:l.label,"aria-label":l.label,children:l.icon}),(0,s.jsx)(c,{nickname:a.v})]},`${e}-${n}`)})})]},e))})]})}function E({games:e,onOpenPlayer:n}){let l=function(e){let[s,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{if(!e)return;let s=!0;return n(null),(j?Promise.resolve(j):p||=fetch("/data/killlog.json").then(e=>e.ok?e.json():[]).then(e=>j=Array.isArray(e)?e:[]).catch(()=>j=[])).then(a=>{s&&n(a.find(s=>s.gamenumber===e)||{})}),()=>{s=!1}},[e]),s}(e[0]?.gamenumber),r=[...e].sort((e,s)=>s.kill-e.kill||e.death-s.death)[0],i=e.reduce((e,s)=>e+s.kill,0),t=e.reduce((e,s)=>e+s.death,0),c=e.filter(s=>y(s,e).length).length;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"match-analysis",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"킬 리더"}),(0,s.jsx)("strong",{children:r?.nickname||"-"}),(0,s.jsxs)("small",{children:[r?.kill||0," KILLS"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"TOTAL COMBAT"}),(0,s.jsx)("strong",{children:i}),(0,s.jsx)("small",{children:"COMBINED KILLS"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"MATCH K/D"}),(0,s.jsx)("strong",{children:w(i,t).toFixed(2)}),(0,s.jsx)("small",{children:"ALL PLAYERS"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"AUTO TAGS"}),(0,s.jsx)("strong",{children:c}),(0,s.jsx)("small",{children:"최종 전적 기반"})]})]}),(0,s.jsx)("div",{className:"teams",children:[1,0].map(a=>{let l=e.filter(e=>e.win===a).sort((e,s)=>s.kill-e.kill||e.death-s.death);return(0,s.jsxs)("div",{className:`team team-${a?"win":"loss"}`,children:[(0,s.jsxs)("h3",{children:[(0,s.jsx)("span",{children:a?"승리 기록":"패배 기록"}),(0,s.jsxs)("b",{children:[l.length," RECORDS"]})]}),l.map(a=>{let l=y(a,e);return(0,s.jsxs)("button",{onClick:()=>n(a.nickname),children:[(0,s.jsx)(S,{nickname:a.nickname,size:"match"}),(0,s.jsxs)("strong",{className:"match-player-copy",children:[a.nickname,(0,s.jsxs)("small",{children:[hcIcon(a.character,"mini"),a.character]}),(0,s.jsx)(R,{tags:l})]}),(0,s.jsxs)("b",{children:[a.kill,(0,s.jsx)("small",{children:"KILL"})]}),(0,s.jsxs)("b",{children:[a.death,(0,s.jsx)("small",{children:"DEATH"})]})]},a.nickname)})]},a)})}),l&&(0,s.jsx)(A,{kills:l.kills||[],spikes:l.spikes||[],games:e,onOpenPlayer:n})]})}function T({games:e}){return(0,s.jsx)("span",{className:"form-dots","data-label":"최근 폼","aria-label":`최근 ${e.length}경기 결과`,children:[...e].reverse().map(e=>(0,s.jsx)("span",{className:e.win?"form-win":"form-loss",children:e.win?"W":"L"},`${e.gamenumber}-${e.nickname}`))})}function $(e){return null===e?"—":`${e.toFixed(1)}%`}function M({label:e,value:a,accent:n=!1,tone:l}){return(0,s.jsxs)("div",{className:`stat${l?` stat-${l}`:""}`,children:[(0,s.jsx)("span",{children:e}),(0,s.jsx)("strong",{className:n?"accent":"",children:a})]})}function L({name:e,index:a,size:n="card"}){let l=_GRID,r={"--character-icon-x":`${a%l/(l-1)*100}%`,"--character-icon-y":`${Math.floor(a/l)/(l-1)*100}%`,"--icon-atlas-size":`${100*l}% ${100*l}%`};return(0,s.jsx)("span",{className:`character-icon character-icon-${n}`,style:r,"aria-hidden":"true",title:e,children:(0,s.jsx)("span",{className:"character-icon-sprite"})})}function O({rating:e}){return e?.op||e?.dead?(0,s.jsxs)("span",{className:"character-marks","aria-label":e.op?"OP 캐릭터":"고인 캐릭터",children:[e.op&&(0,s.jsx)("b",{className:"character-mark mark-op",children:"OP"}),e.dead&&(0,s.jsx)("b",{className:"character-mark mark-dead",children:"고인"})]}):null}e.s(["default",0,function(){let[hcSort,hcSetSort]=(0,a.useState)("name"),[hcSpan,hcSetSpan]=(0,a.useState)(0),[hcDir,hcSetDir]=(0,a.useState)("asc"),[hcMeta,hcSetMeta]=(0,a.useState)(null),[hcKills,hcSetKills]=(0,a.useState)(null),[hcPatch,hcSetPatch]=(0,a.useState)(null),hcPatchLoad=(0,a.useEffect)(()=>{let e=!0;fetch("/data/patchnotes.json").then(e=>e.ok?e.json():null).then(a=>{e&&a&&Array.isArray(a.posts)&&hcSetPatch(a)}).catch(()=>{});return()=>{e=!1}},[]),hcKillsLoad=(0,a.useEffect)(()=>{let e=!0;hcKl().then(a=>{e&&hcSetKills(a)});return()=>{e=!1}},[]),hcMetaLoad=(0,a.useEffect)(()=>{fetch("/data/char/meta.json").then(e=>e.ok?e.json():null).then(e=>{e&&Array.isArray(e.characters)&&(_CHARID=new Map(e.characters.map(e=>[e.name,e.id])),e.iconGrid&&(_GRID=e.iconGrid),hcSetMeta(new Map(e.characters.map(e=>[e.name,e]))))}).catch(()=>{})},[]),[hcCmb,hcSetCmb]=(0,a.useState)(null),hcCmbLoad=(0,a.useEffect)(()=>{fetch("/data/char-combat.json").then(e=>e.ok?e.json():null).then(e=>{e&&hcSetCmb(e)}).catch(()=>{})},[]),[e,n]=(0,a.useState)([]),[l,r]=(0,a.useState)([]),[t,o]=(0,a.useState)({}),[x,j]=(0,a.useState)(!0),[p,u]=(0,a.useState)(""),[g,N]=(0,a.useState)("home"),[b,A]=(0,a.useState)(""),[I,P]=(0,a.useState)(""),[H,D]=(0,a.useState)(null),[F,K]=(0,a.useState)(null),[U,B]=(0,a.useState)(null),[W,V]=(0,a.useState)({}),[Y,G]=(0,a.useState)(!1),[z,q]=(0,a.useState)(""),[X,_]=(0,a.useState)(null),[J,Q]=(0,a.useState)(!1),[Z,ee]=(0,a.useState)(""),[es,ea]=(0,a.useState)(""),[en,el]=(0,a.useState)(1),[er,ei]=(0,a.useState)(!1),et=(0,a.useRef)(Math.random().toString(36).slice(2));(0,a.useEffect)(()=>{Promise.all([fetch("/data/stats.json"),fetch("/data/char/index.json"),fetch("/data/map-side-stats.json")]).then(async([e,s,a])=>{if(!e.ok)throw Error("전적 데이터를 불러오지 못했습니다.");if(!s.ok)throw Error("캐릭터 도감을 불러오지 못했습니다.");if(!a.ok)throw Error("맵 진영 통계를 불러오지 못했습니다.");let[l,i,t]=await Promise.all([e.json(),s.json(),a.json()]),c=new Set(i);n(l.filter(e=>c.has(e.character))),r(i),o(t)}).catch(e=>u(e instanceof Error?e.message:"데이터 오류")).finally(()=>j(!1))},[]);let ec=(0,a.useMemo)(()=>{let s;return s=new Map,e.forEach(e=>{let a=s.get(e.nickname)||[];a.push(e),s.set(e.nickname,a)}),[...s.entries()].map(([e,s])=>{let a=[...s].sort((e,s)=>e.gamenumber-s.gamenumber),n=s.filter(e=>1===e.win).length,l=s.reduce((e,s)=>e+s.kill,0),r=s.reduce((e,s)=>e+s.death,0),i=new Map;s.forEach(e=>i.set(e.character,(i.get(e.character)||0)+1));let t=[...i.entries()].sort((e,s)=>s[1]-e[1])[0]?.[0]||"-";return{nickname:e,games:a,wins:n,kills:l,deaths:r,winRate:n/s.length*100,kd:w(l,r),tier:a.at(-1)?.tier||"BRON IV",mostPlayed:t,plants:s.reduce((e,s)=>e+(s.plant||0),0),defuses:s.reduce((e,s)=>e+(s.defuse||0),0),booms:s.reduce((e,s)=>e+(s.boom||0),0)}})},[e]),hcFG=(0,a.useMemo)(()=>{if(!hcSpan)return e;let s=0;for(let a of e)a.gamenumber>s&&(s=a.gamenumber);let a=s-hcSpan;return e.filter(e=>e.gamenumber>a)},[e,hcSpan]),ed=(0,a.useMemo)(()=>{let s;return s=new Map(l.map(e=>[e,[]])),hcFG.forEach(e=>{let a=s.get(e.character);a&&a.push(e)}),[...s.entries()].map(([e,s])=>{let a=s.filter(e=>1===e.win).length,n=s.reduce((e,s)=>e+s.kill,0),l=s.reduce((e,s)=>e+s.death,0);return{name:e,games:s.length,wins:a,kills:n,deaths:l,winRate:s.length?a/s.length*100:0,kd:s.length?w(n,l):0}})},[hcFG,l]),em=(0,a.useMemo)(()=>[...ec].sort((e,s)=>f(e.tier)-f(s.tier)||s.winRate-e.winRate||s.games.length-e.games.length),[ec]),eh=(0,a.useMemo)(()=>[...ed].sort((e,s)=>s.games-e.games||s.winRate-e.winRate||e.name.localeCompare(s.name,"ko")),[ed]),eo=(0,a.useMemo)(()=>{let s=hcFG.length?hcFG.reduce((e,s)=>e+s.win,0)/hcFG.length*100:50;return ed.map(e=>{let a;return{character:e,level:(a=(e.wins+s/100*12)/(e.games+12)*100)>=55?1:a>=52?2:a>=48?3:a>=44?4:5,score:a,op:e.games>=10&&a>=60,dead:0===e.games||e.games>=10&&a<38}}).sort((e,s)=>e.level-s.level||s.score-e.score||s.character.games-e.character.games)},[ed,hcFG]),ex=(0,a.useMemo)(()=>new Map(eo.map(e=>[e.character.name,e])),[eo]),ej=(0,a.useMemo)(()=>m.map(e=>({level:e,entries:eo.filter(s=>s.level===e)})),[eo]),ep=(0,a.useMemo)(()=>F?ec.map(e=>({player:e,games:e.games.filter(e=>e.character===F.name)})).filter(e=>e.games.length).sort((e,s)=>s.games.length-e.games.length).slice(0,20):[],[ec,F]),eu=F?W[F.name]:void 0,eg=(0,a.useMemo)(()=>{let s=new Map;return e.forEach(e=>s.set(e.gamenumber,[...s.get(e.gamenumber)||[],e])),[...s.entries()].sort((e,s)=>s[0]-e[0])},[e]),eN=(0,a.useMemo)(()=>d.map(e=>{let s=eg.filter(([,s])=>s[0]?.map===e.name),a=t[String(e.id)]||{attackRounds:0,defenseRounds:0,ratedRounds:0,attackWinRate:null,defenseWinRate:null};return{...e,...a,matches:s,records:s.reduce((e,[,s])=>e+s.length,0),kills:s.reduce((e,[,s])=>e+s.reduce((e,s)=>e+s.kill,0),0)}}),[t,eg]),ek=(0,a.useMemo)(()=>{let e=es.trim().toLowerCase();return e?eg.filter(([s,a])=>String(s).includes(e)||a.some(s=>s.map?.toLowerCase().includes(e)||s.nickname.toLowerCase().includes(e))):eg},[es,eg]),ev=(0,a.useMemo)(()=>{let hcQ=Z.trim(),hcL=ed.map((e,s)=>({character:e,index:s})).filter(({character:e})=>e.name.includes(hcQ)),hcNm=(e,s)=>e.character.name.localeCompare(s.character.name,"ko"),hcP={name:hcNm,id:(e,s)=>(hcMeta?.get(e.character.name)?.id??_CHARID.get(e.character.name)??1e3)-(hcMeta?.get(s.character.name)?.id??_CHARID.get(s.character.name)??1e3),diff:(e,s)=>((hcMeta?.get(e.character.name)?.difficulty||"").length||9)-((hcMeta?.get(s.character.name)?.difficulty||"").length||9),pick:(e,s)=>e.character.games-s.character.games,win:(e,s)=>(e.character.games?e.character.winRate:-1)-(s.character.games?s.character.winRate:-1)}[hcSort],hcN="desc"===hcDir?-1:1;return hcP?hcL.sort((e,s)=>hcN*hcP(e,s)||hcNm(e,s)):hcL},[Z,ed,hcSort,hcDir,hcMeta]),eb=Math.max(1,Math.ceil(ek.length/30)),ef=(0,a.useMemo)(()=>ek.slice((en-1)*30,30*en),[ek,en]),ew=(0,a.useMemo)(()=>{if(!I)return[];let e=I.toLowerCase();return[...ec.filter(s=>s.nickname.toLowerCase().includes(e)).slice(0,5).map(e=>({type:"player",name:e.nickname,meta:`${e.games.length}경기`})),...ed.filter(s=>s.name.toLowerCase().includes(e)).slice(0,5).map(e=>({type:"character",name:e.name,meta:`${e.games}픽`})),...eN.filter(s=>s.name.toLowerCase().includes(e)).slice(0,5).map(e=>({type:"map",name:e.name,meta:`${e.matches.length}경기`}))]},[I,ec,ed,eN]),eC=(e,s)=>{let a=window.history.state||{};window.history.pushState({...a,hwalcass:{sessionId:et.current,...s?{backgroundPath:s}:{}}},"",e)},eS=async e=>{if(q(""),W[e.name])return void G(!1);G(!0);try{let s=await fetch(`/data/char/${encodeURIComponent(e.name)}.json`);if(!s.ok)throw Error("이 캐릭터의 도감 정보를 불러오지 못했습니다.");let a=await s.json();V(s=>({...s,[e.name]:a}))}catch(e){q(e instanceof Error?e.message:"도감 데이터 오류")}finally{G(!1)}},ey=(e,s=!0)=>{s&&eC(`/players/${k(e.nickname)}`),D(e),K(null),B(null),_(null),Q(!1),A(e.nickname),P(""),N("player"),document.title=`${e.nickname} 전적 \xb7 활카이브`,s&&window.scrollTo({top:0,behavior:"auto"})},eR=(e,s=!0)=>{s&&eC(`/characters/${k(e.name)}`),K(e),D(null),B(null),_(null),Q(!1),A(e.name),P(""),N("character"),document.title=`${e.name} 도감 \xb7 활카이브`,s&&window.scrollTo({top:0,behavior:"auto"}),eS(e)},eA=(e,s=!0)=>{s&&eC(`/maps/${k(e.name)}`),B(e),D(null),K(null),_(null),Q(!1),A(e.name),P(""),N("map"),document.title=`${e.name} 맵 도감 \xb7 활카이브`,s&&window.scrollTo({top:0,behavior:"auto"})},eE=e=>{let s=e[0]?.gamenumber;s&&(eC(`/matches/${s}`,window.location.pathname),_(e),Q(!0),document.title=`경기 #${s} \xb7 활카이브`)},eT=()=>{let e=window.history.state?.hwalcass;J&&e?.sessionId===et.current&&e?.backgroundPath?window.history.back():(_(null),Q(!1))},e$=(e,s=!0)=>{s&&eC({home:"/",ranking:"/rankings",matches:"/matches",characters:"/characters",tierlist:"/tierlist",maps:"/maps",patchnotes:"/patchnotes"}[e]||"/"),N(e),P(""),"player"!==e&&D(null),"character"!==e&&K(null),"map"!==e&&B(null),_(null),Q(!1),document.title="home"===e?"활카이브 — Hwalcass Archive":`${"ranking"===e?"플레이어 랭킹":"matches"===e?"전체 경기":"tierlist"===e?"캐릭터 티어리스트":"maps"===e?"맵 도감":"patchnotes"===e?"패치노트":"캐릭터 도감"} \xb7 활카이브`,s&&window.scrollTo({top:0,behavior:"auto"})};if((0,a.useEffect)(()=>{if(x)return;window.history.scrollRestoration="auto";let e=e=>{let s=(e.replace(/\/+$/,"")||"/").split("/").filter(Boolean);if(!s.length)return{view:"home",title:"활카이브 — Hwalcass Archive"};if(1===s.length&&"rankings"===s[0])return{view:"ranking",title:"티어 랭킹 · 활카이브"};if(1===s.length&&"matches"===s[0])return{view:"matches",title:"전체 경기 · 활카이브"};if(1===s.length&&"characters"===s[0])return{view:"characters",title:"캐릭터 도감 · 활카이브"};if(1===s.length&&"tierlist"===s[0])return{view:"tierlist",title:"캐릭터 티어리스트 · 활카이브"};if(1===s.length&&"maps"===s[0])return{view:"maps",title:"맵 도감 · 활카이브"};if(1===s.length&&"patchnotes"===s[0])return{view:"patchnotes",title:"패치노트 · 활카이브"};if(2===s.length&&"players"===s[0]){let e=v(s[1]),a=e?ec.find(s=>s.nickname.toLowerCase()===e.toLowerCase()):void 0;return a?{view:"player",player:a,canonicalPath:`/players/${k(a.nickname)}`,title:`${a.nickname} 전적 \xb7 활카이브`}:{view:"not-found",title:"플레이어를 찾을 수 없음 · 활카이브"}}if(2===s.length&&"characters"===s[0]){let e=v(s[1]),a=e?ed.find(s=>s.name.normalize("NFC")===e):void 0;return a?{view:"character",character:a,canonicalPath:`/characters/${k(a.name)}`,title:`${a.name} 도감 \xb7 활카이브`}:{view:"not-found",title:"캐릭터를 찾을 수 없음 · 활카이브"}}if(2===s.length&&"maps"===s[0]){let e=v(s[1]),a=e?eN.find(s=>s.name.normalize("NFC")===e):void 0;return a?{view:"map",map:a,canonicalPath:`/maps/${k(a.name)}`,title:`${a.name} 맵 도감 \xb7 활카이브`}:{view:"not-found",title:"맵을 찾을 수 없음 · 활카이브"}}if(2===s.length&&"matches"===s[0]){let e=/^\d+$/.test(s[1])?eg.find(([e])=>String(e)===s[1])?.[1]:void 0;return e?{view:"match",match:e,title:`경기 #${e[0].gamenumber} \xb7 활카이브`}:{view:"not-found",title:"경기를 찾을 수 없음 · 활카이브"}}return{view:"not-found",title:"페이지를 찾을 수 없음 · 활카이브"}},s=e=>{N(e.view),D(e.player||null),K(e.character||null),B(e.map||null),_(e.match||null),Q(!1),P(""),A(e.player?.nickname||e.character?.name||e.map?.name||""),document.title=e.title,e.character&&eS(e.character),e.canonicalPath&&e.canonicalPath!==window.location.pathname&&window.history.replaceState({...window.history.state||{}},"",e.canonicalPath)},a=()=>{let a=e(window.location.pathname),n=window.history.state?.hwalcass;if("match"===a.view&&a.match&&n?.sessionId===et.current&&"string"==typeof n.backgroundPath){let l=e(n.backgroundPath);if("not-found"!==l.view&&"match"!==l.view){s(l),_(a.match||null),Q(!0),document.title=a.title,ei(!0);return}}s(a),ei(!0)};return a(),window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[x,ec,ed,eN,eg]),(0,a.useEffect)(()=>{if(!J)return;let e=document.body.style.overflow,s=e=>{"Escape"===e.key&&eT()};return document.body.style.overflow="hidden",window.addEventListener("keydown",s),()=>{document.body.style.overflow=e,window.removeEventListener("keydown",s)}},[J]),x||!er)return(0,s.jsxs)("main",{className:"loading-screen",children:[(0,s.jsxs)("div",{className:"loading-mark",children:[(0,s.jsx)("span",{}),"H"]}),(0,s.jsx)("p",{children:"ARCHIVE SYNCING"}),(0,s.jsx)("div",{className:"loading-bar",children:(0,s.jsx)("span",{})})]});if(p)return(0,s.jsxs)("main",{className:"loading-screen",children:[(0,s.jsx)("div",{className:"error-code",children:"!"}),(0,s.jsx)("h1",{children:"기록을 불러오지 못했습니다"}),(0,s.jsx)("p",{children:p})]});let eM=eg.length,eL=eg[0]?.[0]??0,eO="home"===g?(0,s.jsxs)(s.Fragment,{children:["HWALCASS",(0,s.jsx)("br",{}),(0,s.jsx)("em",{children:"ARCHIVE"})]}):"ranking"===g?(0,s.jsxs)(s.Fragment,{children:["플레이어 ",(0,s.jsx)("em",{children:"랭킹"})]}):"matches"===g?(0,s.jsxs)(s.Fragment,{children:["전체 ",(0,s.jsx)("em",{children:"경기"})]}):"characters"===g?(0,s.jsxs)(s.Fragment,{children:["캐릭터 ",(0,s.jsx)("em",{children:"도감"})]}):"tierlist"===g?(0,s.jsxs)(s.Fragment,{children:["캐릭터 ",(0,s.jsx)("em",{children:"티어리스트"})]}):"maps"===g?(0,s.jsxs)(s.Fragment,{children:["맵 ",(0,s.jsx)("em",{children:"도감"})]}):"patchnotes"===g?(0,s.jsxs)(s.Fragment,{children:["패치 ",(0,s.jsx)("em",{children:"노트"})]}):"player"===g?(0,s.jsx)(s.Fragment,{children:H?.nickname}):"character"===g?(0,s.jsxs)(s.Fragment,{children:[F?.name," ",(0,s.jsx)("em",{children:"도감"})]}):"map"===g?(0,s.jsxs)(s.Fragment,{children:[U?.name," ",(0,s.jsx)("em",{children:"맵"})]}):"match"===g?(0,s.jsxs)(s.Fragment,{children:["MATCH ",(0,s.jsxs)("em",{children:["#",X?.[0]?.gamenumber]})]}):(0,s.jsxs)(s.Fragment,{children:["PAGE ",(0,s.jsx)("em",{children:"NOT FOUND"})]});return(0,s.jsxs)("div",{className:"site-shell",children:[(0,s.jsxs)("header",{className:"topbar",children:[(0,s.jsxs)("button",{className:"brand",onClick:()=>e$("home"),"aria-label":"활카스 아카이브 홈",children:[(0,s.jsx)("span",{className:"brand-mark",children:(0,s.jsx)("span",{})}),(0,s.jsxs)("span",{className:"brand-copy",children:[(0,s.jsx)("strong",{children:"HWALCASS"}),(0,s.jsx)("small",{children:"ARCHIVE"})]})]}),(0,s.jsxs)("nav",{"aria-label":"주요 메뉴",children:[(0,s.jsx)("button",{className:"home"===g?"active":"",onClick:()=>e$("home"),children:"대시보드"}),(0,s.jsx)("button",{className:"ranking"===g||"player"===g?"active":"",onClick:()=>e$("ranking"),children:"랭킹"}),(0,s.jsx)("button",{className:"matches"===g||"match"===g?"active":"",onClick:()=>e$("matches"),children:"경기"}),(0,s.jsx)("button",{className:"characters"===g||"character"===g?"active":"",onClick:()=>e$("characters"),children:"캐릭터"}),(0,s.jsx)("button",{className:"tierlist"===g?"active":"",onClick:()=>e$("tierlist"),children:"티어리스트"}),(0,s.jsx)("button",{className:"maps"===g||"map"===g?"active":"",onClick:()=>e$("maps"),children:"맵"}),(0,s.jsx)("button",{className:"patchnotes"===g?"active":"",onClick:()=>e$("patchnotes"),children:"패치노트"})]}),(0,s.jsxs)("div",{className:"season-pill",children:[(0,s.jsx)("span",{})," CURRENT DATASET ",(0,s.jsxs)("b",{children:["#",eL]})]})]}),(0,s.jsxs)("main",{className:`view-frame view-${g}`,children:[(0,s.jsxs)("section",{className:`hero ${"home"!==g?"hero-compact":""}`,children:[(0,s.jsx)("div",{className:"hero-grid","aria-hidden":"true"}),(0,s.jsxs)("div",{className:"hero-arrow","aria-hidden":"true",children:[(0,s.jsx)("span",{}),(0,s.jsx)("i",{})]}),(0,s.jsxs)("div",{className:"hero-content",children:[(0,s.jsxs)("p",{className:"eyebrow",children:[(0,s.jsx)("span",{children:"01"})," COMBAT RECORD DATABASE"]}),(0,s.jsx)("h1",{children:eO}),"home"===g&&(0,s.jsx)("p",{className:"hero-description",children:"전적 검색 · 경기 기록 · 캐릭터·맵 도감"}),(0,s.jsxs)("form",{className:"search",onSubmit:e=>{e.preventDefault();let s=b.trim();if(!s)return;let a=ec.find(e=>e.nickname.toLowerCase()===s.toLowerCase());if(a)return ey(a);let n=ed.find(e=>e.name.toLowerCase()===s.toLowerCase());if(n)return eR(n);let l=eN.find(e=>e.name.toLowerCase()===s.toLowerCase());if(l)return eA(l);P(s)},role:"search",children:[(0,s.jsx)("span",{className:"search-icon","aria-hidden":"true"}),(0,s.jsx)("input",{value:b,onChange:e=>{A(e.target.value),P("")},placeholder:"플레이어·캐릭터·맵 검색","aria-label":"플레이어, 캐릭터 또는 맵 검색"}),b&&(0,s.jsx)("button",{type:"button",className:"clear-search",onClick:()=>{A(""),P("")},"aria-label":"검색어 지우기",children:"×"}),(0,s.jsxs)("button",{className:"search-submit",type:"submit",children:["SEARCH ",(0,s.jsx)("span",{children:"↗"})]})]}),I&&(0,s.jsxs)("div",{className:"search-results",role:"status",children:[(0,s.jsxs)("div",{className:"search-results-head",children:[(0,s.jsxs)("span",{children:["“",I,"” 검색 결과"]}),(0,s.jsx)("b",{children:ew.length})]}),ew.length?ew.map(e=>(0,s.jsxs)("button",{onClick:()=>"player"===e.type?ey(ec.find(s=>s.nickname===e.name)):"character"===e.type?eR(ed.find(s=>s.name===e.name)):eA(eN.find(s=>s.name===e.name)),children:[(0,s.jsx)("span",{className:"search-thumb",children:"character"===e.type?hcIcon(e.name,"inline"):"map"===e.type?hcMapThumb(e.name):null}),(0,s.jsx)("strong",{children:e.name}),(0,s.jsx)("small",{children:e.meta}),(0,s.jsx)("b",{children:"→"})]},`${e.type}-${e.name}`)):(0,s.jsx)("p",{children:"일치하는 플레이어·캐릭터·맵이 없습니다."})]}),"home"===g&&(0,s.jsxs)("div",{className:"archive-stats",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:h.format(eM)}),(0,s.jsx)("span",{children:"TOTAL MATCHES"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:h.format(ec.length)}),(0,s.jsx)("span",{children:"PLAYERS"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:h.format(ed.length)}),(0,s.jsx)("span",{children:"CHARACTERS"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:h.format(e.length)}),(0,s.jsx)("span",{children:"RECORDS"})]})]})]})]}),"home"===g&&(0,s.jsxs)("section",{className:"content-wrap home-grid",children:[(0,s.jsxs)("div",{className:"panel recent-panel",children:[(0,s.jsxs)("div",{className:"section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"RECENT MATCHES"}),(0,s.jsx)("h2",{children:"최근 경기"})]}),(0,s.jsxs)("button",{onClick:()=>eg[0]?.[1]&&eE(eg[0][1]),children:["최신 경기 보기 ",(0,s.jsx)("span",{children:"→"})]})]}),(0,s.jsx)("div",{className:"match-list",children:eg.slice(0,5).map(([e,a],n)=>{let l=a[0],r=a.filter(e=>1===e.win),i=a.filter(e=>0===e.win),t=[...a].sort((e,s)=>s.kill-e.kill)[0];return(0,s.jsxs)("button",{className:"match-row","data-match-id":e,style:hcMapStyle(l.map),onClick:()=>eE(a),children:[(0,s.jsx)("span",{className:"match-index",children:String(n+1).padStart(2,"0")}),(0,s.jsxs)("span",{className:"map-block",children:[(0,s.jsxs)("small",{children:["MATCH #",e]}),(0,s.jsx)("strong",{children:l.map||"UNKNOWN"})]}),(0,s.jsxs)("span",{className:"score-block",children:[(0,s.jsxs)("small",{children:[r.length," PLAYERS"]}),(0,s.jsx)("strong",{children:l.finalscore||"- / -"})]}),(0,s.jsxs)("span",{className:"mvp-block",children:[(0,s.jsx)("small",{children:"킬 리더"}),(0,s.jsx)("strong",{children:t?.nickname||"-"}),(0,s.jsxs)("em",{children:[t?.kill||0," K"]})]}),(0,s.jsxs)("span",{className:"team-count",children:[(0,s.jsx)("i",{className:"win-line"})," ",r.length,(0,s.jsx)("i",{className:"loss-line"})," ",i.length]}),(0,s.jsx)("span",{className:"row-arrow",children:"↗"})]},e)})})]}),(0,s.jsxs)("aside",{className:"panel ranking-preview",children:[(0,s.jsxs)("div",{className:"section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"TOP PLAYERS"}),(0,s.jsx)("h2",{children:"티어 랭킹"})]}),(0,s.jsxs)("button",{onClick:()=>e$("ranking"),children:["전체 ",(0,s.jsx)("span",{children:"→"})]})]}),(0,s.jsx)("div",{className:"rank-list",children:em.slice(0,6).map((e,a)=>(0,s.jsxs)("button",{className:"rank-row",onClick:()=>ey(e),children:[(0,s.jsx)("span",{className:`rank-number rank-${a+1}`,children:String(a+1).padStart(2,"0")}),(0,s.jsx)(S,{nickname:e.nickname}),(0,s.jsxs)("span",{className:"rank-name",children:[(0,s.jsx)("strong",{children:e.nickname}),(0,s.jsx)(C,{tier:e.tier,compact:!0})]}),(0,s.jsxs)("span",{className:"rank-stat",children:[(0,s.jsxs)("strong",{children:[e.winRate.toFixed(1),"%"]}),(0,s.jsx)("small",{children:"WIN RATE"})]})]},e.nickname))})]}),(0,s.jsxs)("div",{className:"quick-card",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"quick-icon",children:"⌁"}),(0,s.jsx)("p",{children:"가장 많이 선택된 캐릭터"}),(0,s.jsxs)("button",{onClick:()=>eR(eh[0]),children:[hcIcon(eh[0]?.name,"mini"),eh[0]?.name,(0,s.jsx)("span",{children:"↗"})]})]}),(0,s.jsxs)("strong",{children:[h.format(eh[0]?.games||0),(0,s.jsx)("small",{children:"PICKS"})]})]}),(0,s.jsxs)("div",{className:"quick-card map-card",style:hcMapStyle(eg[0]?.[1]?.[0]?.map),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"quick-icon",children:"⌗"}),(0,s.jsx)("p",{children:"최근 전장이 열린 곳"}),(0,s.jsxs)("button",{onClick:()=>{let e=eN.find(e=>e.name===eg[0]?.[1]?.[0]?.map);e&&eA(e)},children:[eg[0]?.[1]?.[0]?.map||"-",(0,s.jsx)("span",{children:"↗"})]})]}),(0,s.jsxs)("strong",{children:[eN.length,(0,s.jsx)("small",{children:"MAPS"})]})]})]}),"ranking"===g&&(0,s.jsxs)("section",{className:"content-wrap directory-view",children:[(0,s.jsxs)("div",{className:"directory-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"PLAYER DIRECTORY"}),(0,s.jsx)("h2",{children:"전체 티어 랭킹"})]}),(0,s.jsxs)("span",{children:[em.length," PLAYERS"]})]}),(0,s.jsxs)("div",{className:"ranking-table",role:"table","aria-label":"플레이어 랭킹",children:[(0,s.jsxs)("div",{className:"table-head",role:"row",children:[(0,s.jsx)("span",{children:"#"}),(0,s.jsx)("span",{children:"플레이어"}),(0,s.jsx)("span",{children:"티어"}),(0,s.jsx)("span",{children:"최근 폼"}),(0,s.jsx)("span",{children:"승률"}),(0,s.jsx)("span",{children:"K/D"}),(0,s.jsx)("span",{children:"게임"})]}),em.map((e,a)=>(0,s.jsxs)("button",{className:"table-row",onClick:()=>ey(e),role:"row",children:[(0,s.jsx)("span",{className:"table-rank",children:String(a+1).padStart(2,"0")}),(0,s.jsxs)("span",{className:"table-player",children:[(0,s.jsx)(S,{nickname:e.nickname}),(0,s.jsx)("strong",{children:e.nickname}),(0,s.jsx)("small",{children:e.mostPlayed})]}),(0,s.jsx)("span",{className:"table-tier",children:(0,s.jsx)(C,{tier:e.tier})}),(0,s.jsx)(T,{games:e.games.slice(-5)}),(0,s.jsxs)("strong",{className:"table-winrate","data-label":"승률",children:[e.winRate.toFixed(1),"%"]}),(0,s.jsx)("strong",{className:"table-kd","data-label":"K/D",children:e.kd.toFixed(2)}),(0,s.jsx)("span",{className:"table-games","data-label":"게임",children:e.games.length})]},e.nickname))]})]}),"matches"===g&&(0,s.jsxs)("section",{className:"content-wrap directory-view",children:[(0,s.jsxs)("div",{className:"directory-head",children:[(0,s.jsxs)("div",{className:"catalog-intro",children:[(0,s.jsx)("p",{children:"MATCH DIRECTORY"}),(0,s.jsx)("h2",{children:"전체 경기"}),(0,s.jsx)("span",{children:"경기 번호·맵·참가 플레이어로 기록을 탐색하세요."})]}),(0,s.jsxs)("label",{className:"filter-box",children:[(0,s.jsx)("span",{children:"⌕"}),(0,s.jsx)("input",{value:es,onChange:e=>{ea(e.target.value),el(1)},placeholder:"경기·맵·플레이어"})]})]}),(0,s.jsx)("div",{className:"panel match-directory-panel",children:(0,s.jsxs)("div",{className:"match-list",children:[ef.map(([e,a],n)=>{let l=a[0],r=a.filter(e=>1===e.win),i=a.filter(e=>0===e.win),t=[...a].sort((e,s)=>s.kill-e.kill)[0];return(0,s.jsxs)("button",{className:"match-row","data-match-id":e,style:hcMapStyle(l.map),onClick:()=>eE(a),children:[(0,s.jsx)("span",{className:"match-index",children:String((en-1)*30+n+1).padStart(2,"0")}),(0,s.jsxs)("span",{className:"map-block",children:[(0,s.jsxs)("small",{children:["MATCH #",e]}),(0,s.jsx)("strong",{children:l.map||"UNKNOWN"})]}),(0,s.jsxs)("span",{className:"score-block",children:[(0,s.jsxs)("small",{children:[a.length," RECORDS"]}),(0,s.jsx)("strong",{children:l.finalscore||"- / -"})]}),(0,s.jsxs)("span",{className:"mvp-block",children:[(0,s.jsx)("small",{children:"킬 리더"}),(0,s.jsx)("strong",{children:t?.nickname||"-"}),(0,s.jsxs)("em",{children:[t?.kill||0," K"]})]}),(0,s.jsxs)("span",{className:"team-count",children:[(0,s.jsx)("i",{className:"win-line"})," ",r.length,(0,s.jsx)("i",{className:"loss-line"})," ",i.length]}),(0,s.jsx)("span",{className:"row-arrow",children:"↗"})]},e)}),!ek.length&&(0,s.jsxs)("div",{className:"directory-empty",children:[(0,s.jsx)("strong",{children:"일치하는 경기가 없습니다."}),(0,s.jsx)("span",{children:"다른 경기 번호나 플레이어를 검색해 보세요."})]})]})}),ek.length>30&&(0,s.jsxs)("nav",{className:"pagination","aria-label":"경기 목록 페이지",children:[(0,s.jsx)("button",{type:"button",onClick:()=>el(e=>Math.max(1,e-1)),disabled:1===en,children:"PREV"}),(0,s.jsxs)("span",{children:[(0,s.jsx)("strong",{children:String(en).padStart(2,"0")})," / ",String(eb).padStart(2,"0")]}),(0,s.jsx)("button",{type:"button",onClick:()=>el(e=>Math.min(eb,e+1)),disabled:en===eb,children:"NEXT"})]})]}),"characters"===g&&(0,s.jsxs)("section",{className:"content-wrap directory-view",children:[(0,s.jsxs)("div",{className:"directory-head",children:[(0,s.jsxs)("div",{className:"catalog-intro",children:[(0,s.jsx)("p",{children:"CHARACTER CODEX"}),(0,s.jsx)("h2",{children:"캐릭터 도감"}),(0,s.jsx)("span",{children:"스킬셋·가젯·전적 통계를 한곳에서 확인하세요."})]}),(0,s.jsxs)("div",{className:"codex-controls",children:[(0,s.jsx)("div",{className:"span-box",role:"group","aria-label":"집계 기간",children:_SPANS.map(([e,a])=>(0,s.jsx)("button",{type:"button",className:hcSpan===e?"is-active":"",onClick:()=>hcSetSpan(e),children:a},e))}),(0,s.jsx)("div",{className:"sort-box",role:"group","aria-label":"캐릭터 정렬",children:_SORTS.map(([e,a,n])=>(0,s.jsxs)("button",{type:"button",className:hcSort===e?"is-active":"","aria-label":`${a} ${hcSort===e&&"desc"===hcDir?"내림차순":"오름차순"}`,onClick:()=>{hcSort===e?hcSetDir(e=>"asc"===e?"desc":"asc"):(hcSetSort(e),hcSetDir(n))},children:[a,hcSort===e&&(0,s.jsx)("i",{children:"desc"===hcDir?"↓":"↑"})]},e))}),(0,s.jsxs)("label",{className:"filter-box",children:[(0,s.jsx)("span",{children:"⌕"}),(0,s.jsx)("input",{value:Z,onChange:e=>ee(e.target.value),placeholder:"캐릭터 필터"})]})]})]}),(0,s.jsx)("div",{className:"character-grid",children:ev.map(({character:e,index:a},n)=>{let l=ex.get(e.name);return(0,s.jsxs)("button",{className:`character-card${l?.op?" character-card-op":l?.dead?" character-card-dead":""}`,style:{"--card-delay":`${22*n}ms`},onClick:()=>eR(e),children:[(0,s.jsxs)("span",{className:"character-rank",children:["#",String(hcMeta?.get(e.name)?.id??_CHARID.get(e.name)??a+1).padStart(2,"0")]}),(0,s.jsx)(O,{rating:l}),(0,s.jsx)(L,{name:e.name,index:hcSlot(e.name)}),(0,s.jsx)("h3",{style:hcMeta?.get(e.name)?.color?{color:hcReadable(hcMeta.get(e.name).color)}:void 0,children:e.name}),hcMeta?.get(e.name)?(0,s.jsxs)("span",{className:"card-keywords",children:[hcMeta.get(e.name).difficulty&&(0,s.jsx)("b",{title:`난이도 ${hcMeta.get(e.name).difficulty}`,children:hcMeta.get(e.name).difficulty}),(hcMeta.get(e.name).keywords||[]).join(" · ")]}):null,(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{children:[(0,s.jsx)("small",{children:"픽"}),(0,s.jsx)("strong",{children:e.games||"—"})]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("small",{children:"승률"}),(0,s.jsx)("strong",{children:e.games?`${e.winRate.toFixed(1)}%`:"—"})]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("small",{children:"K/D"}),(0,s.jsx)("strong",{children:e.games?e.kd.toFixed(2):"—"})]})]}),(0,s.jsx)("em",{children:"도감 · 통계 ↗"})]},e.name)})})]}),"tierlist"===g&&(0,s.jsxs)("section",{className:"content-wrap directory-view tier-list-view",children:[(0,s.jsxs)("div",{className:"directory-head",children:[(0,s.jsxs)("div",{className:"catalog-intro",children:[(0,s.jsx)("p",{children:"CHARACTER TIER LIST"}),(0,s.jsx)("h2",{children:"캐릭터 티어리스트"}),(0,s.jsx)("span",{children:"승률에 픽 표본 보정을 적용한 현재 전적 기준입니다."})]}),(0,s.jsxs)("div",{className:"tier-list-meta",children:[(0,s.jsx)("div",{className:"span-box",role:"group","aria-label":"집계 기간",children:_SPANS.map(([e,a])=>(0,s.jsx)("button",{type:"button",className:hcSpan===e?"is-active":"",onClick:()=>hcSetSpan(e),children:a},e))}),(0,s.jsxs)("span",{children:[h.format(hcFG.length)," RECORDS"]}),(0,s.jsx)("b",{children:"1 — 5 TIER"})]})]}),(0,s.jsx)("div",{className:"character-tier-list",children:ej.map(({level:e,entries:a})=>(0,s.jsxs)("section",{className:`power-tier-row power-tier-${e}`,children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("span",{children:e}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("strong",{children:[e,"티어"]}),(0,s.jsxs)("small",{children:[a.length," CHARACTERS"]})]})]}),(0,s.jsx)("div",{className:"power-tier-characters",children:a.map(e=>(0,s.jsxs)("button",{className:`power-character-card${e.op?" power-character-op":e.dead?" power-character-dead":""}`,onClick:()=>eR(e.character),title:`보정 점수 ${e.score.toFixed(1)}`,children:[(0,s.jsx)(O,{rating:e}),(0,s.jsx)(L,{name:e.character.name,index:hcSlot(e.character.name)}),(0,s.jsxs)("span",{className:"power-character-copy",children:[(0,s.jsx)("strong",{children:e.character.name}),(0,s.jsx)("small",{children:e.character.games?`${e.character.winRate.toFixed(1)}% \xb7 ${e.character.games}판`:"0판"})]})]},e.character.name))})]},e))})]}),"maps"===g&&(0,s.jsxs)("section",{className:"content-wrap directory-view",children:[(0,s.jsxs)("div",{className:"directory-head",children:[(0,s.jsxs)("div",{className:"catalog-intro",children:[(0,s.jsx)("p",{children:"MAP CODEX"}),(0,s.jsx)("h2",{children:"맵 도감"}),(0,s.jsx)("span",{children:"게임에 등록된 전장과 해당 맵의 경기 기록입니다."})]}),(0,s.jsxs)("span",{children:[eN.length," MAPS"]})]}),(0,s.jsx)("div",{className:"map-grid",children:eN.map(e=>(0,s.jsxs)("button",{className:"map-codex-card",onClick:()=>eA(e),children:[(0,s.jsx)("img",{src:e.image,alt:`${e.name} 맵`,loading:"lazy",decoding:"async"}),(0,s.jsxs)("span",{className:"map-codex-copy",children:[(0,s.jsxs)("small",{children:["MAP ",String(e.id).padStart(2,"0")]}),(0,s.jsx)("strong",{children:e.name}),(0,s.jsxs)("span",{className:"map-side-rates",children:[(0,s.jsxs)("b",{className:"attack-rate",children:["공격 ",$(e.attackWinRate)]}),(0,s.jsxs)("b",{className:"defense-rate",children:["수비 ",$(e.defenseWinRate)]})]}),(0,s.jsxs)("span",{className:"map-card-meta",children:[(0,s.jsx)("b",{children:e.matches.length})," MATCHES ",(0,s.jsx)("i",{children:"↗"})]})]})]},e.id))})]}),"player"===g&&H&&(0,s.jsxs)("section",{className:"content-wrap profile-view",children:[(0,s.jsxs)("nav",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,s.jsx)("button",{onClick:()=>e$("home"),children:"HOME"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("button",{onClick:()=>e$("ranking"),children:"PLAYERS"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("strong",{children:H.nickname})]}),(0,s.jsxs)("div",{className:"profile-card",children:[(0,s.jsxs)("div",{className:"profile-main",children:[(0,s.jsx)(S,{nickname:H.nickname,size:"profile"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"PLAYER PROFILE"}),(0,s.jsx)("h2",{children:H.nickname}),(0,s.jsxs)("div",{className:"profile-links",children:[(0,s.jsx)(C,{tier:H.tier}),ed.find(e=>e.name===H.mostPlayed)&&(0,s.jsxs)("button",{onClick:()=>eR(ed.find(e=>e.name===H.mostPlayed)),children:[hcIcon(H.mostPlayed,"mini"),"MOST · ",H.mostPlayed," ↗"]})]})]})]}),(0,s.jsx)(T,{games:H.games.slice(-10)}),(0,s.jsxs)("div",{className:"profile-stats",children:[(0,s.jsx)(M,{label:"TOTAL GAMES",value:h.format(H.games.length)}),(0,s.jsx)(M,{label:"WIN RATE",value:`${H.winRate.toFixed(1)}%`,accent:!0}),(0,s.jsx)(M,{label:"K / D",value:H.kd.toFixed(2)}),(0,s.jsx)(M,{label:"MOST PICK",value:H.mostPlayed})]}),H.plants+H.defuses+H.booms>0&&(0,s.jsxs)("div",{className:"spike-strip",children:[(0,s.jsx)("span",{children:"SPIKE"}),(0,s.jsxs)("b",{children:[(0,s.jsx)("i",{children:"설치"}),H.plants]}),(0,s.jsxs)("b",{children:[(0,s.jsx)("i",{children:"해체"}),H.defuses]}),(0,s.jsxs)("b",{children:[(0,s.jsx)("i",{children:"폭파"}),H.booms]})]}),hcLuckStrip(H,eg)]}),hcMxSection(H,eg,hcKills,hcMeta,hcCmb),(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"CHARACTER BREAKDOWN"}),(0,s.jsx)("h2",{children:"캐릭터별 성적"})]}),(0,s.jsxs)("span",{children:[hcCharRows(H).length,"종 플레이"]})]}),(0,s.jsx)("div",{className:"char-table",children:hcCharRows(H).slice(0,10).map(e=>(0,s.jsxs)("button",{className:"char-row",onClick:()=>{let a=ed.find(a=>a.name===e.name);a&&eR(a)},children:[hcIcon(e.name,"inline"),(0,s.jsx)("strong",{children:e.name}),(0,s.jsxs)("span",{children:[(0,s.jsx)("small",{children:"판"}),e.games]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("small",{children:"승률"}),e.winRate.toFixed(1),"%"]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("small",{children:"K/D"}),e.kd.toFixed(2)]}),(0,s.jsx)("b",{children:"↗"})]},e.name))}),hcCharRows(H).length>10&&(0,s.jsxs)("p",{className:"char-more",children:["외 ",hcCharRows(H).length-10,"종"]}),(()=>{let e=hcVs(H,eg).filter(e=>e.vs>=8).sort((e,a)=>e.rate-a.rate||a.vs-e.vs),a=Math.min(3,Math.floor(e.length/2)),n=hcDuel(H,hcKills);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"HEAD TO HEAD"}),(0,s.jsx)("h2",{children:"맞대결"})]}),(0,s.jsx)("span",{children:"8경기 이상 맞붙은 상대"})]}),a?(0,s.jsxs)("div",{className:"h2h-grid",children:[(0,s.jsxs)("div",{className:"h2h-col h2h-bad",children:[(0,s.jsx)("span",{className:"h2h-label",children:"천적"}),e.slice(0,a).map(e=>((e,a)=>(0,s.jsxs)("button",{className:"h2h-row",onClick:()=>{let a=ec.find(a=>a.nickname===e.nickname);a&&ey(a)},children:[(0,s.jsx)(S,{nickname:e.nickname}),(0,s.jsxs)("span",{className:"h2h-name",children:[(0,s.jsx)("strong",{children:e.nickname}),a.get(e.nickname)&&(0,s.jsxs)("small",{children:["킬 교환 ",a.get(e.nickname).k,"-",a.get(e.nickname).d]})]}),(0,s.jsxs)("span",{className:"h2h-score",children:[(0,s.jsxs)("strong",{children:[e.win,"승 ",e.loss,"패"]}),(0,s.jsxs)("small",{children:[e.rate.toFixed(0),"%"]})]})]},e.nickname))(e,n))]}),(0,s.jsxs)("div",{className:"h2h-col h2h-good",children:[(0,s.jsx)("span",{className:"h2h-label",children:"밥"}),e.slice(-a).reverse().map(e=>((e,a)=>(0,s.jsxs)("button",{className:"h2h-row",onClick:()=>{let a=ec.find(a=>a.nickname===e.nickname);a&&ey(a)},children:[(0,s.jsx)(S,{nickname:e.nickname}),(0,s.jsxs)("span",{className:"h2h-name",children:[(0,s.jsx)("strong",{children:e.nickname}),a.get(e.nickname)&&(0,s.jsxs)("small",{children:["킬 교환 ",a.get(e.nickname).k,"-",a.get(e.nickname).d]})]}),(0,s.jsxs)("span",{className:"h2h-score",children:[(0,s.jsxs)("strong",{children:[e.win,"승 ",e.loss,"패"]}),(0,s.jsxs)("small",{children:[e.rate.toFixed(0),"%"]})]})]},e.nickname))(e,n))]})]}):(0,s.jsx)("p",{className:"char-more",children:"아직 8경기 이상 맞붙은 상대가 없습니다."})]})})(),(()=>{let hcTL=hcTeam(H,eg).filter(e=>e.team>=8).sort((e,a)=>e.rate-a.rate||a.team-e.team),hcTN=Math.min(3,Math.floor(hcTL.length/2)),hcTRow=e=>(0,s.jsxs)("button",{className:"h2h-row",onClick:()=>{let a=ec.find(a=>a.nickname===e.nickname);a&&ey(a)},children:[(0,s.jsx)(S,{nickname:e.nickname}),(0,s.jsxs)("span",{className:"h2h-name",children:[(0,s.jsx)("strong",{children:e.nickname}),(0,s.jsxs)("small",{children:["함께 ",e.team,"판"]})]}),(0,s.jsxs)("span",{className:"h2h-score",children:[(0,s.jsxs)("strong",{children:[e.win,"승 ",e.loss,"패"]}),(0,s.jsxs)("small",{children:[e.rate.toFixed(0),"%"]})]})]},e.nickname);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"TEAMWORK"}),(0,s.jsx)("h2",{children:"팀워크"})]}),(0,s.jsx)("span",{children:"8경기 이상 같은 팀이던 아군"})]}),hcTN?(0,s.jsxs)("div",{className:"h2h-grid",children:[(0,s.jsxs)("div",{className:"h2h-col h2h-bad",children:[(0,s.jsx)("span",{className:"h2h-label",children:"최악"}),hcTL.slice(0,hcTN).map(e=>hcTRow(e))]}),(0,s.jsxs)("div",{className:"h2h-col h2h-good",children:[(0,s.jsx)("span",{className:"h2h-label",children:"최상"}),hcTL.slice(-hcTN).reverse().map(e=>hcTRow(e))]})]}):(0,s.jsx)("p",{className:"char-more",children:"아직 8경기 이상 같은 팀이던 아군이 없습니다."})]})})(),(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"MATCH HISTORY"}),(0,s.jsx)("h2",{children:"경기 기록"})]}),(0,s.jsxs)("span",{children:[H.wins,"승 ",H.games.length-H.wins,"패"]})]}),(0,s.jsx)("div",{className:"history-list",children:[...H.games].reverse().map(e=>{let a=eg.find(([s])=>s===e.gamenumber)?.[1]||[e],n=y(e,a),l=n[0]?`history-highlight-${n[0].kind}`:"";return(0,s.jsxs)("button",{"data-match-id":e.gamenumber,className:`history-row ${e.win?"history-win":"history-loss"} ${l}`,style:hcMapStyle(e.map),onClick:()=>eE(a),children:[(0,s.jsx)("span",{className:"row-map-bg","aria-hidden":"true"}),(0,s.jsxs)("span",{className:"history-result",children:[(0,s.jsxs)("span",{className:"result-label",children:[(0,s.jsx)("i",{}),e.win?"VICTORY":"DEFEAT"]}),(0,s.jsx)(R,{tags:n}),hcMatchLuckChip(e,eg)]}),(0,s.jsxs)("span",{className:"history-map",children:[(0,s.jsxs)("small",{children:["MATCH #",e.gamenumber]}),(0,s.jsx)("strong",{children:e.map||"UNKNOWN"})]}),(0,s.jsxs)("span",{className:"history-char",children:[hcIcon(e.character,"inline"),(0,s.jsx)("strong",{children:e.character})]}),(0,s.jsxs)("span",{className:"kda",children:[(0,s.jsx)("small",{children:"K / D"}),(0,s.jsxs)("strong",{children:[e.kill," ",(0,s.jsx)("i",{children:"/"})," ",e.death]})]}),(0,s.jsxs)("span",{className:"history-score",children:[(0,s.jsx)("small",{children:"SCORE"}),(0,s.jsx)("strong",{children:e.finalscore||"-"})]}),(0,s.jsx)(C,{tier:e.tier,compact:!0}),(0,s.jsx)("span",{className:"row-arrow",children:"↗"})]},`${e.gamenumber}-${e.nickname}`)})})]}),"character"===g&&F&&(0,s.jsxs)("section",{className:"content-wrap profile-view",children:[(0,s.jsxs)("nav",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,s.jsx)("button",{onClick:()=>e$("home"),children:"HOME"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("button",{onClick:()=>e$("characters"),children:"CHARACTERS"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("strong",{children:F.name})]}),(0,s.jsxs)("div",{className:"character-hero-card",children:[(0,s.jsxs)("div",{className:"character-identity",children:[(0,s.jsx)(L,{name:F.name,index:hcSlot(F.name),size:"hero"}),(0,s.jsxs)("div",{className:"character-identity-copy",children:[(0,s.jsx)("p",{children:"CHARACTER CODEX"}),(0,s.jsx)("h2",{style:hcMeta?.get(F.name)?.color?{color:hcReadable(hcMeta.get(F.name).color)}:void 0,children:F.name}),hcMeta?.get(F.name)?.summary&&(0,s.jsx)("span",{className:"char-summary",children:hcMeta.get(F.name).summary}),(0,s.jsxs)("div",{className:"character-tags",children:[(0,s.jsx)("span",{className:"pick-badge",children:F.games?`#${eh.findIndex(e=>e.name===F.name)+1} PICK RATE`:"전적 없음"}),eu?.difficulty&&(0,s.jsxs)("span",{className:"difficulty-badge",children:[(0,s.jsx)("small",{children:"난이도"}),eu.difficulty]}),...(hcMeta?.get(F.name)?.keywords||[]).map(e=>(0,s.jsx)("span",{className:"kw-chip",children:e},e))]})]})]}),(0,s.jsxs)("div",{className:"profile-stats",children:[(0,s.jsx)(M,{label:"TOTAL PICKS",value:h.format(F.games)}),(0,s.jsx)(M,{label:"WIN RATE",value:F.games?`${F.winRate.toFixed(1)}%`:"—",accent:!0}),(0,s.jsx)(M,{label:"K / D",value:F.games?F.kd.toFixed(2):"—"}),(0,s.jsx)(M,{label:"TOTAL KILLS",value:h.format(F.kills)})]})]}),(0,s.jsxs)("div",{className:"codex-layout",children:[(0,s.jsxs)("section",{className:"codex-panel",children:[(0,s.jsxs)("div",{className:"codex-heading",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"SKILL SET"}),(0,s.jsx)("h2",{children:"스킬셋"})]}),(0,s.jsxs)("span",{children:[eu?.skills.length||0," SKILLS"]})]}),Y?(0,s.jsxs)("div",{className:"codex-loading",children:[(0,s.jsx)("span",{}),(0,s.jsx)("p",{children:"도감 정보 동기화 중"})]}):z?(0,s.jsxs)("div",{className:"codex-empty",children:[(0,s.jsx)("strong",{children:"도감을 열지 못했습니다."}),(0,s.jsx)("p",{children:z})]}):eu?(0,s.jsx)("div",{className:"skill-list",children:eu.skills.map((e,a)=>(0,s.jsxs)("article",{className:`skill-card ${c[e.type]||"skill-default"}`,style:hcSkillStyle(e),children:[(0,s.jsx)("span",{className:"skill-index",children:String(a+1).padStart(2,"0")}),(0,s.jsxs)("div",{className:"skill-copy",children:[(0,s.jsxs)("div",{className:"skill-title",children:[(0,s.jsx)("span",{children:e.type}),(0,s.jsx)("h3",{style:e.nameColor&&"#FFFFFF"!==e.nameColor?{color:hcReadable(e.nameColor)}:void 0,children:e.name})]}),(0,s.jsx)("p",{children:e.desc}),e.detail&&(0,s.jsxs)("div",{className:"skill-detail",children:[(0,s.jsx)("small",{children:"DETAIL"}),(0,s.jsx)("p",{children:e.detail})]})]})]},`${e.type}-${e.name}`))}):(0,s.jsx)("div",{className:"codex-empty",children:(0,s.jsx)("strong",{children:"등록된 스킬 정보가 없습니다."})})]}),(0,s.jsxs)("aside",{className:"gadget-panel",children:[(0,s.jsx)("span",{className:"gadget-code",children:"GADGET / 01"}),(0,s.jsx)("div",{className:"gadget-icon","aria-hidden":"true",children:(0,s.jsx)("span",{})}),(0,s.jsx)("p",{children:"CHARACTER GADGET"}),(0,s.jsx)("h2",{children:"가젯"}),Y?(0,s.jsx)("span",{className:"gadget-placeholder",children:"불러오는 중..."}):(0,s.jsx)("strong",{children:eu?.gadget||"등록된 가젯 정보가 없습니다."})]})]}),(()=>{let q=hcCombat(F.name,hcKills,e);if(!q.kills&&!q.deaths)return null;let a=[["a","화살"],["s","스킬"],["m","근접"]];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"COMBAT LOG"}),(0,s.jsx)("h2",{children:"전투 성향"})]}),(0,s.jsxs)("span",{children:["킬로그 기준 · ",q.kills,"킬 ",q.deaths,"데스"]})]}),(0,s.jsxs)("div",{className:"combat-grid",children:[(0,s.jsx)("div",{className:"style-panel",children:a.map(([a,n])=>{let l=hcPct(q.mine[a],q.kills),r=hcPct(q.all[a],q.all.a+q.all.s+q.all.m);return(0,s.jsxs)("div",{className:`style-row style-${a}`,children:[(0,s.jsx)("span",{className:"style-name",children:n}),(0,s.jsx)("span",{className:"style-bar",children:(0,s.jsx)("i",{style:{width:l+"%"}})}),(0,s.jsxs)("b",{children:[l,"%"]}),(0,s.jsxs)("small",{children:["평균 ",r,"%"]})]},a)})}),(0,s.jsxs)("div",{className:"mu-panel",children:[(0,s.jsx)("span",{className:"h2h-label mu-good",children:"잘 잡는 상대"}),q.beat.length?q.beat.map(e=>(0,s.jsxs)("button",{className:"mu-row",onClick:()=>{let a=ed.find(a=>a.name===e.name);a&&eR(a)},children:[hcIcon(e.name,"inline"),(0,s.jsx)("strong",{children:e.name}),(0,s.jsxs)("span",{children:[e.k,(0,s.jsx)("i",{children:"-"}),e.d]})]},e.name)):(0,s.jsx)("p",{className:"char-more",children:"표본 부족"})]}),(0,s.jsxs)("div",{className:"mu-panel",children:[(0,s.jsx)("span",{className:"h2h-label mu-bad",children:"자주 당하는 상대"}),q.lost.length?q.lost.map(e=>(0,s.jsxs)("button",{className:"mu-row",onClick:()=>{let a=ed.find(a=>a.name===e.name);a&&eR(a)},children:[hcIcon(e.name,"inline"),(0,s.jsx)("strong",{children:e.name}),(0,s.jsxs)("span",{children:[e.k,(0,s.jsx)("i",{children:"-"}),e.d]})]},e.name)):(0,s.jsx)("p",{className:"char-more",children:"표본 부족"})]})]})]})})(),(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"TOP OPERATORS"}),(0,s.jsxs)("h2",{children:[F.name," 장인 랭킹"]})]}),(0,s.jsxs)("span",{children:[F.games," TOTAL PICKS"]})]}),ep.length?(0,s.jsx)("div",{className:"ranking-table compact-table",children:ep.map(({player:e,games:a},n)=>{let l=a.filter(e=>e.win).length,r=a.reduce((e,s)=>e+s.kill,0),i=a.reduce((e,s)=>e+s.death,0);return(0,s.jsxs)("button",{className:"table-row",onClick:()=>ey(e),children:[(0,s.jsx)("span",{className:"table-rank",children:String(n+1).padStart(2,"0")}),(0,s.jsxs)("span",{className:"table-player",children:[(0,s.jsx)(S,{nickname:e.nickname}),(0,s.jsx)("strong",{children:e.nickname})]}),(0,s.jsx)("span",{className:"table-tier",children:(0,s.jsx)(C,{tier:e.tier,compact:!0})}),(0,s.jsx)(T,{games:a.slice(-5)}),(0,s.jsxs)("strong",{className:"table-winrate","data-label":"승률",children:[(l/a.length*100).toFixed(1),"%"]}),(0,s.jsx)("strong",{className:"table-kd","data-label":"K/D",children:w(r,i).toFixed(2)}),(0,s.jsxs)("span",{className:"table-games","data-label":"판수",children:[a.length," PICKS"]})]},e.nickname)})}):(0,s.jsxs)("div",{className:"empty-operators",children:[(0,s.jsx)("span",{children:"NO MATCH DATA"}),(0,s.jsx)("strong",{children:"아직 이 캐릭터의 전적이 없습니다."}),(0,s.jsx)("p",{children:"도감의 스킬셋과 가젯 정보는 정상적으로 확인할 수 있습니다."})]})]}),"map"===g&&U&&(0,s.jsxs)("section",{className:"content-wrap profile-view",children:[(0,s.jsxs)("nav",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,s.jsx)("button",{onClick:()=>e$("home"),children:"HOME"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("button",{onClick:()=>e$("maps"),children:"MAPS"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("strong",{children:U.name})]}),(0,s.jsxs)("div",{className:"map-hero-card",children:[(0,s.jsx)("img",{src:U.image,alt:`${U.name} 맵`,decoding:"async"}),(0,s.jsxs)("div",{className:"map-hero-copy",children:[(0,s.jsxs)("p",{children:["MAP ",String(U.id).padStart(2,"0")]}),(0,s.jsx)("h2",{children:U.name})]}),(0,s.jsxs)("div",{className:"map-stats",children:[(0,s.jsx)(M,{label:"TOTAL MATCHES",value:h.format(U.matches.length),accent:!0}),(0,s.jsx)(M,{label:"공격팀 승률",value:$(U.attackWinRate),tone:"attack"}),(0,s.jsx)(M,{label:"수비팀 승률",value:$(U.defenseWinRate),tone:"defense"}),(0,s.jsx)(M,{label:"RECORDS",value:h.format(U.records)}),(0,s.jsx)(M,{label:"TOTAL KILLS",value:h.format(U.kills)}),(0,s.jsx)(M,{label:"AVG KILLS",value:U.records?(U.kills/U.records).toFixed(1):"—"})]})]}),(0,s.jsxs)("div",{className:"section-head profile-section-head",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"MATCH HISTORY"}),(0,s.jsx)("h2",{children:"최근 경기"})]}),(0,s.jsxs)("span",{children:[U.matches.length," MATCHES"]})]}),(0,s.jsx)("div",{className:"panel match-directory-panel map-match-list",children:(0,s.jsxs)("div",{className:"match-list",children:[U.matches.slice(0,20).map(([e,a],n)=>{let l=a[0],r=a.filter(e=>1===e.win),i=a.filter(e=>0===e.win),t=[...a].sort((e,s)=>s.kill-e.kill)[0];return(0,s.jsxs)("button",{className:"match-row","data-match-id":e,style:hcMapStyle(l.map),onClick:()=>eE(a),children:[(0,s.jsx)("span",{className:"match-index",children:String(n+1).padStart(2,"0")}),(0,s.jsxs)("span",{className:"map-block",children:[(0,s.jsxs)("small",{children:["MATCH #",e]}),(0,s.jsx)("strong",{children:l.map||"UNKNOWN"})]}),(0,s.jsxs)("span",{className:"score-block",children:[(0,s.jsxs)("small",{children:[a.length," RECORDS"]}),(0,s.jsx)("strong",{children:l.finalscore||"- / -"})]}),(0,s.jsxs)("span",{className:"mvp-block",children:[(0,s.jsx)("small",{children:"킬 리더"}),(0,s.jsx)("strong",{children:t?.nickname||"-"}),(0,s.jsxs)("em",{children:[t?.kill||0," K"]})]}),(0,s.jsxs)("span",{className:"team-count",children:[(0,s.jsx)("i",{className:"win-line"})," ",r.length,(0,s.jsx)("i",{className:"loss-line"})," ",i.length]}),(0,s.jsx)("span",{className:"row-arrow",children:"↗"})]},e)}),!U.matches.length&&(0,s.jsx)("div",{className:"directory-empty",children:(0,s.jsx)("strong",{children:"아직 기록된 경기가 없습니다."})})]})})]}),"match"===g&&X&&(0,s.jsxs)("section",{className:"content-wrap profile-view match-page-view",children:[(0,s.jsxs)("nav",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,s.jsx)("button",{onClick:()=>e$("home"),children:"HOME"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)("button",{onClick:()=>e$("matches"),children:"MATCHES"}),(0,s.jsx)("span",{children:"/"}),(0,s.jsxs)("strong",{children:["#",X[0]?.gamenumber]})]}),(0,s.jsxs)("section",{className:"match-modal match-page-card","aria-label":`경기 ${X[0]?.gamenumber} 상세`,children:[(0,s.jsxs)("div",{className:"modal-head",style:hcMapStyle(X[0]?.map),children:[(0,s.jsx)("p",{children:"MATCH REPORT"}),(0,s.jsxs)("h2",{children:["#",X[0]?.gamenumber," · ",X[0]?.map]}),(0,s.jsx)("strong",{children:X[0]?.finalscore})]}),(0,s.jsx)(E,{games:X,onOpenPlayer:e=>{let s=ec.find(s=>s.nickname===e);s&&ey(s)}})]})]}),"patchnotes"===g&&(0,s.jsxs)("section",{className:"content-wrap directory-view",children:[(0,s.jsxs)("div",{className:"directory-head",children:[(0,s.jsxs)("div",{className:"catalog-intro",children:[(0,s.jsx)("p",{children:"PATCH NOTES"}),(0,s.jsx)("h2",{children:"패치노트"}),(0,s.jsx)("span",{children:"갤러리에 올라온 활카스 공지에서 변경점만 모았습니다."})]}),hcPatch&&(0,s.jsxs)("span",{className:"patch-meta",children:[hcPatch.count,"건 \xb7 ",(0,s.jsx)("a",{href:hcPatch.source,target:"_blank",rel:"noreferrer noopener",children:"갤러리 ↗"})]})]}),hcPatch?hcPatch.posts.map(e=>(0,s.jsxs)("article",{className:"patch-post",children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("time",{dateTime:e.date,children:e.date.slice(0,10)}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:"원문 ↗"})]}),(0,s.jsx)("div",{className:"patch-body",children:hcPatchBlocks(e.body).map((e,a)=>e.name?(0,s.jsxs)("div",{className:"patch-block",children:[(0,s.jsxs)("button",{className:"patch-char",onClick:()=>{let a=ed.find(a=>a.name===e.name);a&&eR(a)},children:[hcIcon(e.name,"inline"),(0,s.jsx)("strong",{children:e.name})]}),(0,s.jsx)("div",{className:"patch-lines",children:e.lines.map(hcPatchLine)})]},a):(0,s.jsx)("div",{className:"patch-block patch-plain",children:(0,s.jsx)("div",{className:"patch-lines",children:e.lines.map(hcPatchLine)})},a))})]},e.no)):(0,s.jsxs)("div",{className:"codex-loading",children:[(0,s.jsx)("span",{}),(0,s.jsx)("p",{children:"패치노트 불러오는 중"})]})]}),"not-found"===g&&(0,s.jsxs)("section",{className:"content-wrap not-found-view",children:[(0,s.jsx)("span",{children:"404 / ARCHIVE MISS"}),(0,s.jsx)("h2",{children:"요청한 기록을 찾을 수 없습니다."}),(0,s.jsx)("p",{children:"주소가 바뀌었거나 존재하지 않는 플레이어·캐릭터·맵·경기입니다."}),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:()=>e$("home"),children:"대시보드로"}),(0,s.jsx)("button",{onClick:()=>e$("characters"),children:"캐릭터 도감"})]})]})]}),(0,s.jsxs)("footer",{children:[(0,s.jsx)("span",{children:"HWALCASS ARCHIVE"}),(0,s.jsx)("p",{children:"현재 제공된 데이터 기준 · 시즌 및 경기 시각 정보 없음 · SCORE는 원본 데이터 값"}),(0,s.jsxs)("b",{children:["LAST MATCH #",eL]})]}),X&&J&&(0,s.jsx)("div",{className:"modal-backdrop",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&eT()},children:(0,s.jsxs)("section",{className:"match-modal",role:"dialog","aria-modal":"true","aria-label":`경기 ${X[0]?.gamenumber} 상세`,children:[(0,s.jsx)("button",{className:"modal-close",onClick:eT,"aria-label":"경기 상세 닫기",children:"×"}),(0,s.jsxs)("div",{className:"modal-head",style:hcMapStyle(X[0]?.map),children:[(0,s.jsx)("p",{children:"MATCH REPORT"}),(0,s.jsxs)("h2",{children:["#",X[0]?.gamenumber," · ",X[0]?.map]}),(0,s.jsx)("strong",{children:X[0]?.finalscore})]}),(0,s.jsx)(E,{games:X,onOpenPlayer:e=>{let s=ec.find(s=>s.nickname===e);s&&ey(s)}})]})}),(0,s.jsx)(hcGame,{})]})}])}]);