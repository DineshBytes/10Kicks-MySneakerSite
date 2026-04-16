$file = 'c:\Users\Dinesh\OneDrive\Desktop\SIGMA\CSS\FS PROJECTS\10kicks-master\index.html'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# ── 1. REPLACE THE OLD VIDEO-HERO CSS ──────────────────────────────────────
$cssMark = '/* ═══════════════════════════════════════════════════
   HERO — CINEMATIC VIDEO HOMEPAGE
   Full-screen video bg + delayed headline reveal
═══════════════════════════════════════════════════ */'

$cssOldStart = $content.IndexOf($cssMark)
if ($cssOldStart -lt 0) { Write-Host "CSS mark NOT found — already patched or different"; }
else {
    # Find end of the mobile media query block that closes the old hero CSS
    # It ends just before "/* ── SECTION HEADERS"
    $cssEndMark = '/* ── SECTION HEADERS'
    $cssOldEnd = $content.IndexOf($cssEndMark, $cssOldStart)
    if ($cssOldEnd -lt 0) { Write-Host "CSS end mark not found"; exit 1 }

    $newCss = @'

/* ═══════════════════════════════════════════════════
   HERO — PREMIUM SPLIT-SCREEN SHOWCASE
   Left 40%: static brand + CTA
   Right 60%: animated color-synced shoe carousel
═══════════════════════════════════════════════════ */
.hero{
  position:relative;
  width:100%;height:100vh;
  min-height:600px;
  overflow:hidden;
  display:flex;
  flex-direction:row;
  background:#050307;
}

/* ── LEFT PANEL — 40% Static brand + CTA ── */
.hero-left{
  position:relative;
  width:40%;
  flex-shrink:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:60px 6% 60px 7%;
  z-index:10;
  background:rgba(3,2,5,0.70);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  border-right:1px solid rgba(255,255,255,0.05);
}
.hero-left::after{
  content:'';
  position:absolute;
  top:10%;right:-1px;
  width:1px;height:80%;
  background:linear-gradient(to bottom, transparent, rgba(225,6,0,0.45), transparent);
  pointer-events:none;
}

/* ── 10KICKS Brand Logo — ALWAYS STATIC, NO ANIMATION ── */
.hero-brand-logo{
  font-family:'Outfit','Poppins',sans-serif;
  font-size:clamp(20px,2.4vw,30px);
  font-weight:900;
  letter-spacing:-0.5px;
  color:#fff;
  margin-bottom:54px;
  animation:none !important;
  transform:none !important;
  transition:none !important;
  user-select:none;
  pointer-events:none;
}
.hero-brand-logo span{color:#E10600;}

/* ── Headline ── */
.hero-headline{
  font-family:'Outfit','Poppins',sans-serif;
  font-size:clamp(36px,4.6vw,66px);
  font-weight:900;
  line-height:1.0;
  letter-spacing:-1.5px;
  color:#fff;
  margin-bottom:24px;
  text-shadow:0 2px 20px rgba(0,0,0,0.35);
}
.hero-headline .hero-red{
  color:#E10600;
  display:block;
  text-shadow:0 0 28px rgba(225,6,0,0.30);
}

/* ── Sub text ── */
.hero-sub{
  font-size:clamp(13px,1.4vw,16px);
  color:rgba(255,255,255,0.50);
  line-height:1.75;
  font-weight:300;
  margin-bottom:40px;
  letter-spacing:0.2px;
}

/* ── CTA button ── */
.hero-cta{
  display:inline-flex;
  align-items:center;
  gap:8px;
  height:50px;padding:0 32px;
  background:#E10600;
  color:#fff;
  border:none;
  border-radius:10px;
  font-family:'Outfit','Poppins',sans-serif;
  font-size:14px;font-weight:700;
  cursor:pointer;
  letter-spacing:0.5px;
  width:fit-content;
  transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
  box-shadow:0 6px 24px rgba(225,6,0,0.40);
}
.hero-cta:hover{
  background:#c50000;
  box-shadow:0 10px 32px rgba(225,6,0,0.55);
  transform:translateY(-2px);
}
.hero-cta:active{transform:translateY(0);}

/* ── Active brand tag ── */
.shoe-brand-tag{
  margin-top:30px;
  font-size:11px;font-weight:700;
  letter-spacing:3px;
  text-transform:uppercase;
  color:rgba(255,255,255,0.30);
  transition:color 1.2s ease;
  min-height:16px;
}
.shoe-brand-tag strong{color:#E10600;margin-right:5px;}

/* ── RIGHT PANEL — 60% Animated Showcase ── */
.hero-right{
  position:relative;
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  z-index:5;
}

/* Color-synced gradient background */
.shoe-bg-layer{
  position:absolute;
  inset:0;
  z-index:0;
  transition:background 1.3s cubic-bezier(0.4,0,0.2,1),box-shadow 1.3s ease;
  background:radial-gradient(ellipse 90% 80% at 65% 50%, #1a0008 0%, #0a0004 55%, #03010a 100%);
}
.shoe-bg-layer::after{
  content:'';
  position:absolute;inset:0;
  background:
    linear-gradient(to left, transparent 35%, rgba(3,2,5,0.65) 100%),
    radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(0,0,0,0.45) 100%);
  pointer-events:none;
}

/* Nike speed streaks */
.speed-streaks{
  position:absolute;inset:0;z-index:1;
  opacity:0;
  pointer-events:none;
  transition:opacity 0.9s ease;
  background:repeating-linear-gradient(
    7deg,
    transparent,transparent 90px,
    rgba(225,6,0,0.025) 90px,rgba(225,6,0,0.025) 91px
  );
  animation:streakScroll 3s linear infinite;
}
@keyframes streakScroll{
  from{background-position:0 0}
  to{background-position:0 -180px}
}

/* Shoe stage */
.shoe-stage{
  position:relative;z-index:5;
  width:clamp(240px,54%,490px);
  height:clamp(200px,48%,420px);
  display:flex;align-items:center;justify-content:center;
}
.shoe-item{
  position:absolute;width:100%;
  opacity:0;pointer-events:none;
  will-change:transform,opacity;
}
.shoe-item img{
  width:100%;height:auto;
  filter:drop-shadow(0 28px 64px rgba(0,0,0,0.82)) drop-shadow(0 6px 18px rgba(0,0,0,0.55));
  display:block;
}

/* NIKE: power forward + streaks */
.shoe-item[data-brand="nike"].s-enter{animation:nikeEnter 0.8s cubic-bezier(0.19,1,0.22,1) forwards}
.shoe-item[data-brand="nike"].s-hold{opacity:1;animation:nikeFloat 3.5s ease-in-out infinite}
.shoe-item[data-brand="nike"].s-exit{animation:nikeExit 0.5s ease-in forwards}
@keyframes nikeEnter{from{opacity:0;transform:translateX(75px) scale(0.9)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes nikeFloat{
  0%,100%{transform:translateX(0) translateY(0) rotate(-3deg)}
  40%{transform:translateX(10px) translateY(-18px) rotate(0deg)}
  70%{transform:translateX(4px) translateY(-24px) rotate(1.5deg)}
}
@keyframes nikeExit{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-70px) scale(0.9)}}

/* ADIDAS: precision rotation + float */
.shoe-item[data-brand="adidas"].s-enter{animation:adidasEnter 0.9s cubic-bezier(0.19,1,0.22,1) forwards}
.shoe-item[data-brand="adidas"].s-hold{opacity:1;animation:adidasFloat 4s ease-in-out infinite}
.shoe-item[data-brand="adidas"].s-exit{animation:adidasExit 0.5s ease-in forwards}
@keyframes adidasEnter{from{opacity:0;transform:scale(0.8) rotate(-12deg)}to{opacity:1;transform:scale(1) rotate(-4deg)}}
@keyframes adidasFloat{
  0%,100%{transform:scale(1) rotate(-4deg) translateY(0)}
  50%{transform:scale(1.04) rotate(2.5deg) translateY(-16px)}
}
@keyframes adidasExit{from{opacity:1;transform:scale(1) rotate(-4deg)}to{opacity:0;transform:scale(0.82) rotate(12deg)}}

/* CONVERSE: street drop + bounce */
.shoe-item[data-brand="converse"].s-enter{animation:cvEnter 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards}
.shoe-item[data-brand="converse"].s-hold{opacity:1;animation:cvBounce 2.8s ease-in-out infinite}
.shoe-item[data-brand="converse"].s-exit{animation:cvExit 0.5s ease-in forwards}
@keyframes cvEnter{from{opacity:0;transform:translateY(-68px) rotate(8deg) scale(0.84)}to{opacity:1;transform:translateY(0) rotate(4deg) scale(1)}}
@keyframes cvBounce{
  0%,100%{transform:translateY(0) rotate(4deg)}
  30%{transform:translateY(-24px) rotate(2deg)}
  55%{transform:translateY(-8px) rotate(6deg)}
  80%{transform:translateY(-18px) rotate(3deg)}
}
@keyframes cvExit{from{opacity:1;transform:translateY(0) rotate(4deg)}to{opacity:0;transform:translateY(64px) rotate(-4deg) scale(0.88)}}

/* Dot navigation */
.shoe-dots{
  position:absolute;bottom:28px;left:50%;transform:translateX(-50%);
  z-index:10;display:flex;gap:10px;align-items:center;
}
.shoe-dot{
  width:8px;height:8px;border-radius:50%;
  border:none;cursor:pointer;
  opacity:0.38;padding:0;
  transition:opacity 0.3s,width 0.3s,border-radius 0.3s;
}
.shoe-dot.active{width:26px;border-radius:4px;opacity:1;}

/* Mobile: stack layout */
@media(max-width:768px){
  .hero{flex-direction:column;height:auto;min-height:100vh}
  .hero-left{
    width:100%;padding:36px 6% 28px;
    backdrop-filter:none;
    background:rgba(3,2,5,0.92);
    border-right:none;border-bottom:1px solid rgba(255,255,255,0.06);
  }
  .hero-left::after{display:none}
  .hero-brand-logo{margin-bottom:24px}
  .hero-headline{font-size:clamp(32px,9vw,50px)}
  .hero-right{flex:none;width:100%;height:56vw;min-height:250px}
  .shoe-stage{width:clamp(180px,70%,320px);height:100%}
}

'@
    $content = $content.Substring(0, $cssOldStart) + $newCss + $content.Substring($cssOldEnd)
    Write-Host "CSS block replaced successfully"
}

# ── 2. REPLACE OLD IIFE CLOSING WITH NEW JS ──────────────────────────────────
$jsEndOld = "})();`n</script>"
$jsNew = @'
  /* ── 9. HERO SNEAKER SHOWCASE ── */
  const HERO_SHOES = [
    {brand:'nike',   label:'NIKE',    name:'Air Jordan 1',
     img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=90',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #4a0010 0%, #200005 55%, #07000a 100%)',
     glow:'rgba(220,20,20,0.30)', dot:'#E10600', streaks:true},
    {brand:'adidas', label:'ADIDAS',  name:'SL 72 RS',
     img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=90',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #001d48 0%, #000b22 55%, #000208 100%)',
     glow:'rgba(20,70,220,0.25)', dot:'#3b82f6', streaks:false},
    {brand:'converse',label:'CONVERSE',name:'Chuck Taylor',
     img:'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&q=90',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #1a1015 0%, #0d0a0e 55%, #040305 100%)',
     glow:'rgba(180,160,130,0.12)', dot:'#e8dcc8', streaks:false}
  ];
  let hIdx=0, hTimer=null;

  function initHeroShowcase(){
    const stage=document.getElementById('shoe-stage');
    const dots=document.getElementById('shoe-dots');
    if(!stage || stage.children.length>0) return;
    HERO_SHOES.forEach((s,i)=>{
      const el=document.createElement('div');
      el.className='shoe-item'; el.dataset.brand=s.brand;
      el.innerHTML=`<img src="${s.img}" alt="${s.label}" loading="${i===0?'eager':'lazy'}" onerror="this.parentElement.style.display='none'"/>`;
      stage.appendChild(el);
      const d=document.createElement('button');
      d.className='shoe-dot'+(i===0?' active':'');
      d.style.background=s.dot; d.title=s.label;
      d.onclick=()=>{clearTimeout(hTimer);showHeroShoe(i);};
      dots.appendChild(d);
    });
    showHeroShoe(0);
  }

  function showHeroShoe(idx){
    const shoes=document.querySelectorAll('.shoe-item');
    const dotEls=document.querySelectorAll('.shoe-dot');
    const bg=document.getElementById('shoe-bg-layer');
    const tag=document.getElementById('shoe-brand-tag');
    const str=document.getElementById('speed-streaks');
    const s=HERO_SHOES[idx];
    if(!s) return;
    if(bg){bg.style.background=s.bg; bg.style.boxShadow=`inset 0 0 220px ${s.glow}`;}
    if(str) str.style.opacity=s.streaks?'1':'0';
    if(tag) tag.innerHTML=`<strong>${s.label}</strong> &mdash; ${s.name}`;
    dotEls.forEach((d,i)=>{d.classList.toggle('active',i===idx); d.style.background=HERO_SHOES[i].dot;});
    shoes.forEach((el,i)=>{
      if(i===hIdx && i!==idx){
        const br=HERO_SHOES[i].brand;
        el.className=`shoe-item s-exit`; el.dataset.brand=br;
        setTimeout(()=>{el.className='shoe-item'; el.dataset.brand=br; el.style.opacity='0';},520);
      }
    });
    const delay=hIdx===idx?0:230;
    setTimeout(()=>{
      const ne=shoes[idx]; if(!ne) return;
      ne.style.opacity=''; ne.className='shoe-item s-enter'; ne.dataset.brand=s.brand;
      setTimeout(()=>{ne.className='shoe-item s-hold'; ne.dataset.brand=s.brand;},900);
    },delay);
    hIdx=idx;
    clearTimeout(hTimer);
    hTimer=setTimeout(()=>showHeroShoe((idx+1)%HERO_SHOES.length),4300);
  }

  if(document.getElementById('shoe-stage')) initHeroShowcase();

})();
</script>
'@

$jsIdx = $content.LastIndexOf($jsEndOld)
if ($jsIdx -lt 0) { Write-Host "JS end mark not found" }
else {
    $content = $content.Substring(0, $jsIdx) + $jsNew + $content.Substring($jsIdx + $jsEndOld.Length)
    Write-Host "JS block injected successfully"
}

# ── Save ─────────────────────────────────────────────────────────────────────
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "File saved. Total length: $($content.Length) chars"
