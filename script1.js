
'use strict';

/* ── PRODUCT DATA ──────────────────────────────────────── */
const DB = {
  nike:[
    {id:'nk1',name:'AIR JORDAN 1 LOW',price:8295,back:'pg-nike',
     img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
     imgs:[
       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
       'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
       'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80'
     ],
     desc:'Lightweight, versatile, and built for all-day comfort. The Air Jordan 1 Low brings iconic Jordan style in a sleek low-cut silhouette perfect for everyday wear.'},
    {id:'nk2',name:'AIR JORDAN 1 RETRO HIGH OG',price:16995,back:'pg-nike',
     img:'https://crepdogcrew.com/cdn/shop/products/taxihigh1.png?v=1755097107&width=800',
     imgs:['https://crepdogcrew.com/cdn/shop/products/taxihigh1.png?v=1755097107&width=800'],
     desc:'Premium leather upper, Air-Sole cushioning, and the iconic Wings logo — a true grail for collectors and sneaker culture.'},
    {id:'nk3',name:'AIR JORDAN 1 MID',price:11495,back:'pg-nike',
     img:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
     imgs:[
       'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
       'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
     ],
     desc:'The Jordan 1 Mid sits perfectly between the High and Low — ideal ankle support meets flexible street style in one iconic silhouette.'},
    {id:'nk4',name:'AIR JORDAN 1 LOW SE',price:8695,back:'pg-nike',
     img:'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&q=80',
     imgs:[
       'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&q=80',
       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
     ],
     desc:'Special Edition Air Jordan 1 Low with premium detailing, unique colourway, and elevated materials. Every inch crafted for the discerning collector.'},
    {id:'nk5',name:'AIR JORDAN 1 RETRO LOW',price:16995,back:'pg-nike',
     img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
     imgs:[
       'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
       'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
     ],
     desc:'The classic Air Jordan 1 Retro Low in a timeless colourway. Court-ready style with Air-Sole cushioning for all-day wear.'}
  ],
  adidas:[
    {id:'ad1',name:'Breaknet 2.0',price:4199,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8754c5912ff1482ba6cb5f8aa7b61643_9366/Breaknet_2.0_Shoes_White_IE5251_01_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8754c5912ff1482ba6cb5f8aa7b61643_9366/Breaknet_2.0_Shoes_White_IE5251_01_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0271f1c6aeb14ec5bad80cca75275fb5_9366/Breaknet_2.0_Shoes_White_IE5251_02_standard_hover.jpg'],
     desc:'A classic court-inspired sneaker.'},
    {id:'ad2',name:'SL 72 RS',price:7999,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7d955c4f1fa4f179a4e8308ea7ca8fc_9366/SL_72_RS_Shoes_Blue_IG2132_01_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7d955c4f1fa4f179a4e8308ea7ca8fc_9366/SL_72_RS_Shoes_Blue_IG2132_01_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6946b97b63ad440cba1a23f8350c5de5_9366/SL_72_RS_Shoes_Blue_IG2132_09_standard.jpg'],
     desc:'A reimagined classic — lightweight and breathable.'},
    {id:'ad3',name:'Yard Cricket Shoes',price:4299,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad9647ac68648c193681dac9a9f3475_9366/SL_72_RS_Shoes_Blue_IG2132_02_standard_hover.jpg',
     imgs:['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad9647ac68648c193681dac9a9f3475_9366/SL_72_RS_Shoes_Blue_IG2132_02_standard_hover.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5bd43a14c5b94883998709755148f692_9366/SL_72_RS_Shoes_Blue_IG2132_03_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ca87e3d28954c10b31f027da3d26d24_9366/SL_72_RS_Shoes_Blue_IG2132_04_standard.jpg'],
     desc:'Engineered for the crease. Lightweight, stable cricket shoes with specialized outsole traction designed for all pitch conditions.'},
    {id:'ad4',name:'Adidas RUN 70s',price:3500,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0271f1c6aeb14ec5bad80cca75275fb5_9366/Breaknet_2.0_Shoes_White_IE5251_02_standard_hover.jpg',
     imgs:['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0271f1c6aeb14ec5bad80cca75275fb5_9366/Breaknet_2.0_Shoes_White_IE5251_02_standard_hover.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82e3d1ad80dc4b04b4cb5b7ae9f4fd1f_9366/Breaknet_2.0_Shoes_White_IE5251_04_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d1eb4aaf69f4d09aeec4b296552e668_9366/Breaknet_2.0_Shoes_White_IE5251_03_standard.jpg'],
     desc:'70s-inspired running silhouette. Breathable mesh upper with retro styling and EVA midsole cushioning for comfortable everyday wear.'},
    {id:'ad5',name:'Adidas Samba OG',price:10999,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/964d9e86789742109d9e9f499221e56e_9366/Breaknet_2.0_Shoes_White_IE5251_05_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/964d9e86789742109d9e9f499221e56e_9366/Breaknet_2.0_Shoes_White_IE5251_05_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8754c5912ff1482ba6cb5f8aa7b61643_9366/Breaknet_2.0_Shoes_White_IE5251_01_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6946b97b63ad440cba1a23f8350c5de5_9366/SL_72_RS_Shoes_Blue_IG2132_09_standard.jpg'],
     desc:'The Samba is a football-turned-fashion icon. Supple leather upper, gum outsole, and terrace-ready aesthetics that never go out of style.'}
  ],
  puma:[
    {id:'pm1',name:'Adidas OG Sambas',price:10999,back:'pg-puma',
     img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPCbLu9U3GCM-ubF8uXYWXJne733AiBT8wZLwehWjOF65wkHXW129klBGywSJ9yOudLW03dRPcfNgzrdo09uP2QGOWpZ4G',
     imgs:['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPCbLu9U3GCM-ubF8uXYWXJne733AiBT8wZLwehWjOF65wkHXW129klBGywSJ9yOudLW03dRPcfNgzrdo09uP2QGOWpZ4G'],
     desc:'The timeless Samba OG. Classic street style.'},
    {id:'pm2',name:'Handball Spezial Shoes',price:8999,back:'pg-puma',
     img:'https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ae5c35320ae54e68be1c40c8f68189c1_d98c/Handball_Spezial_Shoes_Blue_BD7632_video.mp4',
     imgs:['https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ae5c35320ae54e68be1c40c8f68189c1_d98c/Handball_Spezial_Shoes_Blue_BD7632_video.mp4'],
     desc:'Handball Spezial — Authentic style and comfort.'},
    {id:'pm3',name:'Nizza RF Shoes',price:6999,back:'pg-puma',
     img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e4407cf7da4c84a47eaa3a011d6756_9366/Nizza_RF_Shoes_Black_EE5599_04_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e4407cf7da4c84a47eaa3a011d6756_9366/Nizza_RF_Shoes_Black_EE5599_04_standard.jpg'],
     desc:'Classic canvas styling in a modern low-cut silhouette.'},
    {id:'pm4',name:'SUPERSTAR II SHOES',price:7599,back:'pg-puma',
     img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c7df764c4a475bae1df8f707a624c5_9366/SUPERSTAR_II_SHOES_Beige_IH4145_01_00_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c7df764c4a475bae1df8f707a624c5_9366/SUPERSTAR_II_SHOES_Beige_IH4145_01_00_standard.jpg'],
     desc:'The iconic shell-toe sneaker in a premium beige colourway.'},
    {id:'pm5',name:'VL Court 3.0 Shoes',price:4599,back:'pg-puma',
     img:'https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/290986e1c20147dda2a8242c91533560_d98c/VL_Court_3.0_Shoes_Black_ID6286_video.mp4',
     imgs:['https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/290986e1c20147dda2a8242c91533560_d98c/VL_Court_3.0_Shoes_Black_ID6286_video.mp4'],
     desc:'Everyday essential skate-inspired shoe.'}
  ],
     desc:'A classic terrace shoe from the PUMA archives. Vintage silhouette, premium materials, timeless style straight from the Palermo streets.'},
    {id:'pm2',name:'Puma Speedcat OG',price:10999,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/02/sv01/fnd/IND/fmt/png/Speedcat-OG-Sneakers',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/02/sv01/fnd/IND/fmt/png/Speedcat-OG-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/02/sv02/fnd/IND/fmt/png/Speedcat-OG-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/02/sv04/fnd/IND/fmt/png/Speedcat-OG-Sneakers'],
     desc:'Inspired by motorsport heritage — sleek, low-profile, built for style and comfort. The Speedcat OG brings racing DNA to your daily rotation.'},
    {id:'pm3',name:'Puma Softride Frequence',price:7999,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311767/01/sv01/fnd/IND/fmt/png/Galaxis-Pro-Men%27s-Performance-Boost-Running-Shoes',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311767/01/sv01/fnd/IND/fmt/png/Galaxis-Pro-Men%27s-Performance-Boost-Running-Shoes','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311767/01/fnd/IND/fmt/png/Galaxis-Pro-Men%27s-Performance-Boost-Running-Shoes'],
     desc:'Next-gen SOFTRIDE cushioning meets modern knit upper. Responsive, lightweight, and engineered for long-distance comfort.'},
    {id:'pm4',name:'Puma Deviate NITRO 3 Max',price:15990,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/309867/01/fnd/IND/fmt/png/Deviate-NITRO-3-Max-Men%27s-Running-Shoes',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/309867/01/fnd/IND/fmt/png/Deviate-NITRO-3-Max-Men%27s-Running-Shoes','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/309867/01/sv01/fnd/IND/fmt/png/Deviate-NITRO-3-Max-Men%27s-Running-Shoes'],
     desc:'NITRO foam technology in its purest form. Engineered for runners demanding maximum energy return and performance over every mile.'},
    {id:'pm5',name:'Puma Galaxis Pro',price:7999,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377048/01/sv01/fnd/IND/fmt/png/SOFTRIDE-Vital-Men%27s-Sneakers',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377048/01/sv01/fnd/IND/fmt/png/SOFTRIDE-Vital-Men%27s-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377048/01/fnd/IND/fmt/png/SOFTRIDE-Vital-Men%27s-Sneakers'],
     desc:'Performance-meets-lifestyle silhouette from Puma. Lightweight construction, cushioned midsole, and a bold colourway built for the streets.'}
  ],
  converse:[
    {id:'cv1',name:'Chuck Taylor Pro',price:5999,back:'pg-converse',
     img:'https://converse.static.n7.io/media/catalog/product/a/1/a12919c_a_107x1-web.jpg',
     imgs:['https://converse.static.n7.io/media/catalog/product/a/1/a12919c_a_107x1-web.jpg','https://converse.static.n7.io/media/catalog/product/a/1/a12919c_e_107x1-webjpg42.jpg'],
     desc:'A high-top Chuck Taylor in light blue suede.'},
    {id:'cv2',name:'Chuck 70 High-Top',price:6399,back:'pg-converse',
     img:'https://converse.static.n7.io/media/catalog/product/a/1/a13331c_a_107x1-web.jpg',
     imgs:['https://converse.static.n7.io/media/catalog/product/a/1/a13331c_a_107x1-web.jpg','https://converse.static.n7.io/media/catalog/product/a/1/a13331c_e_107x1-webjpg252.jpg','https://converse.static.n7.io/media/catalog/product/a/1/a13331c_c_107x1-webjpg250.jpg','https://converse.static.n7.io/media/catalog/product/a/1/a13331c_d_107x1-webjpg251.jpg','https://converse.static.n7.io/media/catalog/product/a/1/a13331c_b_107x1-webjpg249.jpg'],
     desc:'The Chuck 70 elevates the classic with premium canvas.'},
    {id:'cv3',name:'Run Star Hike',price:6299,back:'pg-converse',
     img:'https://converse.static.n7.io/media/catalog/product/a/1/a12598c_a_107x1_1_1.jpg',
     imgs:[
       'https://converse.static.n7.io/media/catalog/product/a/1/a12598c_a_107x1_1_1.jpg'
     ],
     desc:'Bold platform silhouette with jagged midsole. Where hiking boot meets Chuck Taylor — a fashion-forward statement shoe.'},
    {id:'cv4',name:'Star Player 76 Suede',price:7499,back:'pg-converse',
     img:'https://converse.static.n7.io/media/catalog/product/a/1/a12712c_a_107x1_1.jpg',
     imgs:[
       'https://converse.static.n7.io/media/catalog/product/a/1/a12712c_a_107x1_1.jpg'
     ],
     desc:'Archive basketball silhouette reborn in premium suede. Clean court-ready lines, heritage detailing, and refined materials.'},
    {id:'cv5',name:'Converse Weapon',price:8999,back:'pg-converse',
     img:'https://converse.static.n7.io/media/catalog/product/a/1/a10597c_a_107x1_1.jpg',
     imgs:[
       'https://converse.static.n7.io/media/catalog/product/a/1/a10597c_a_107x1_1.jpg'
     ],
     desc:'The legendary Weapon returns. Originally designed for NBA superstars — an iconic high-top silhouette with premium court-ready finish.'},
  ]
};

const SIZES = [6,7,7.5,8,8.5,9,9.5,10,11,12];

/* ── STATE ────────────────────────────────────────────── */
let cart     = [];   // {key,id,name,price,img,size,qty}
let wishlist = [];   // {id,name,price,img}
let users    = {};   // email -> {name,pass}
let currentUser = null;
let curProd  = null;
let detQty   = 1;
let activePayEl = null;
let toastTmr = null;

/* ── HELPER: find product ─────────────────────────────── */
function findP(id){
  for(const arr of Object.values(DB)){const p=arr.find(x=>x.id===id);if(p)return p;}
  return null;
}

/* ── SECTION NAVIGATION ───────────────────────────────── */
function showSection(id){
  // hide all
  document.querySelectorAll('.pg, .pg-flex').forEach(el=>{
    el.classList.remove('active');
    el.style.display='none';
  });
  const el=document.getElementById(id);
  if(!el)return;
  const flexIds=['pg-login','pg-success'];
  el.style.display = flexIds.includes(id)?'flex':'block';
  el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});

  const noChrome=['pg-landing','pg-login','pg-success'];
  const hdr=document.getElementById('main-header');
  const ftr=document.getElementById('site-footer');
  hdr.style.display = noChrome.includes(id)?'none':'flex';
  ftr.style.display = noChrome.includes(id)?'none':'block';
}

function goTo(id){showSection(id);closeMob();}

/* ── BUILD PRODUCT GRIDS ──────────────────────────────── */
function buildGrid(brand){
  const el=document.getElementById('grid-'+brand);
  if(!el)return;
  el.innerHTML=DB[brand].map(p=>{
    const inW=wishlist.some(w=>w.id===p.id);
    return `<div class="prod-card" onclick="openDetail('${p.id}')">
      <button class="heart-btn${inW?' on':''}" id="hb-${p.id}"
        onclick="event.stopPropagation();toggleWish('${p.id}')"
        title="Wishlist">${inW?'❤️':'🤍'}</button>
      ${p.img.endsWith('.mp4') ? `<video class="prod-thumb" src="${p.img}" autoplay loop muted playsinline style="object-fit:cover; background:#fff;"></video>` : `<img class="prod-thumb" src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/180x170/1c1c1c/555?text=No+Image'"/>`}
      <div class="prod-cbody">
        <h3>${p.name}</h3>
        <div class="prod-prc">₹${p.price.toLocaleString('en-IN')}</div>
      </div>
      <div class="quick-add" onclick="event.stopPropagation();quickAdd('${p.id}')">+ Quick Add to Cart</div>
    </div>`;
  }).join('');
}
Object.keys(DB).forEach(buildGrid);

/* ── DETAIL PAGE ──────────────────────────────────────── */
function openDetail(id){
  const p=findP(id);
  if(!p)return;
  curProd=p; detQty=1;
  document.getElementById('det-title').textContent=p.name;
  document.getElementById('det-name').textContent=p.name;
  document.getElementById('det-price').textContent='₹'+p.price.toLocaleString('en-IN');
  document.getElementById('det-desc').textContent=p.desc;
  document.getElementById('det-qty').textContent='1';
  // carousel
  document.getElementById('det-car-inner').innerHTML=
    `<div class="carousel-item active">${p.img.endsWith('.mp4') ? `<video src="${p.img}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>` : `<img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/600x390/f5f5f5/999?text=Image'"/>` }</div>`;
  // restart carousel
  try{$('#det-car').carousel('dispose');}catch(e){}
  const inds = document.querySelector('.carousel-indicators');
  if(inds) inds.style.display = 'none';
  const ctrls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');
  ctrls.forEach(c => c.style.display = 'none');
  // sizes
  document.getElementById('det-sizes').innerHTML=
    SIZES.map(s=>`<button class="sz" onclick="selSz(this)" data-sz="${s}">${s}</button>`).join('');
  // wish btn
  const inW=wishlist.some(w=>w.id===p.id);
  document.getElementById('det-wish-btn').innerHTML=inW?'❤️ Wishlisted':'🤍 Wishlist';
  // back
  document.getElementById('det-back').onclick=()=>showSection(p.back);
  showSection('pg-detail');
}

function selSz(btn){
  document.querySelectorAll('#det-sizes .sz').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
}

function changeQty(d){
  detQty=Math.min(10,Math.max(1,detQty+d));
  document.getElementById('det-qty').textContent=detQty;
}

function addDetToCart(){
  if(!curProd)return;
  const szEl=document.querySelector('#det-sizes .sz.sel');
  const sz=szEl?szEl.dataset.sz:'One Size';
  addToCart(curProd.id,sz,detQty);
  // feedback on button
  const btn=document.getElementById('det-cart-btn');
  btn.textContent='✅ Added!';
  btn.style.background='#16a34a';
  setTimeout(()=>{btn.textContent='Add to Cart 🛒';btn.style.background='';},1600);
}

function quickAdd(id){addToCart(id,'One Size',1);}

function toggleDetWish(){
  if(!curProd)return;
  toggleWish(curProd.id);
  const inW=wishlist.some(w=>w.id===curProd.id);
  document.getElementById('det-wish-btn').innerHTML=inW?'❤️ Wishlisted':'🤍 Wishlist';
}

/* ── CART ─────────────────────────────────────────────── */
function addToCart(id,size,qty){
  const p=findP(id);if(!p)return;
  const key=id+'_'+size;
  const ex=cart.find(c=>c.key===key);
  if(ex){ex.qty=Math.min(10,ex.qty+qty);}
  else{cart.push({key,id,name:p.name,price:p.price,img:p.img,size,qty});}
  updateCartBadge();
  renderCart();
  showToast('🛒 '+p.name.split(' ').slice(0,3).join(' ')+' added!');
  // bounce cart icon
  const cnt=document.getElementById('cart-cnt');
  cnt.style.transform='scale(1.6)';
  setTimeout(()=>cnt.style.transform='',300);
}

function removeFromCart(key){
  cart=cart.filter(c=>c.key!==key);
  updateCartBadge();renderCart();
}

function changeCartQty(key,d){
  const it=cart.find(c=>c.key===key);
  if(!it)return;
  it.qty=Math.min(10,Math.max(1,it.qty+d));
  updateCartBadge();renderCart();
}

function updateCartBadge(){
  const n=cart.reduce((s,c)=>s+c.qty,0);
  const el=document.getElementById('cart-cnt');
  el.textContent=n;
  el.classList.toggle('show',n>0);
  document.getElementById('chk-btn').disabled=cart.length===0;
}

function renderCart(){
  const body=document.getElementById('cart-body');
  if(cart.length===0){
    body.innerHTML='<div class="empty-msg">Your cart is empty.<br>Add some kicks! 👟</div>';
    document.getElementById('cart-total').textContent='₹0';
    return;
  }
  body.innerHTML=cart.map(c=>`
    <div class="cart-item">
      <img src="${c.img}" alt="${c.name}" onerror="this.src='https://placehold.co/60x60/f5f5f5/999?text=Img'"/>
      <div class="ci-info">
        <div class="ci-name">${c.name}</div>
        <div class="ci-sub">Size: UK ${c.size}</div>
        <div class="ci-price">₹${(c.price*c.qty).toLocaleString('en-IN')}</div>
        <div class="cart-qty">
          <button class="cqb" onclick="changeCartQty('${c.key}',-1)">−</button>
          <span class="cqn">${c.qty}</span>
          <button class="cqb" onclick="changeCartQty('${c.key}',1)">+</button>
        </div>
      </div>
      <button class="rm-btn" onclick="removeFromCart('${c.key}')" title="Remove">×</button>
    </div>`).join('');
  const tot=cart.reduce((s,c)=>s+c.price*c.qty,0);
  document.getElementById('cart-total').textContent='₹'+tot.toLocaleString('en-IN');
}

function openCartPanel(){document.getElementById('cart-overlay').classList.add('show');renderCart();}
function closeCartPanel(){document.getElementById('cart-overlay').classList.remove('show');}
function closePanelBg(e,id){if(e.target===document.getElementById(id))document.getElementById(id).classList.remove('show');}

/* ── WISHLIST ─────────────────────────────────────────── */
function toggleWish(id){
  const p=findP(id);if(!p)return;
  const idx=wishlist.findIndex(w=>w.id===id);
  if(idx>-1){wishlist.splice(idx,1);showToast('Removed from wishlist');}
  else{wishlist.push({id,name:p.name,price:p.price,img:p.img});showToast('❤️ Saved to wishlist!');}
  // update heart btns in all grids
  const hb=document.getElementById('hb-'+id);
  if(hb){const on=wishlist.some(w=>w.id===id);hb.textContent=on?'❤️':'🤍';hb.classList.toggle('on',on);}
  updateWishBadge();
  renderWishlist();
}

function updateWishBadge(){
  const el=document.getElementById('wish-cnt');
  el.textContent=wishlist.length;
  el.classList.toggle('show',wishlist.length>0);
}

function renderWishlist(){
  const body=document.getElementById('wish-body');
  if(wishlist.length===0){body.innerHTML='<div class="empty-msg">Your wishlist is empty.<br>Heart a shoe to save it! 🤍</div>';return;}
  body.innerHTML=wishlist.map(w=>`
    <div class="wish-item">
      <img src="${w.img}" alt="${w.name}" onerror="this.src='https://placehold.co/54x54/f5f5f5/999?text=Img'"/>
      <div class="wi-info">
        <div class="wi-name">${w.name}</div>
        <div class="wi-price">₹${w.price.toLocaleString('en-IN')}</div>
        <button class="wi-cart-btn" onclick="moveWish('${w.id}')">Move to Cart</button>
      </div>
      <button class="rm-btn" onclick="toggleWish('${w.id}')" title="Remove">×</button>
    </div>`).join('');
}

function moveWish(id){addToCart(id,'One Size',1);toggleWish(id);renderWishlist();closeWishPanel();openCartPanel();}
function moveAllWish(){[...wishlist].forEach(w=>{addToCart(w.id,'One Size',1);toggleWish(w.id);});renderWishlist();closeWishPanel();openCartPanel();}
function openWishPanel(){document.getElementById('wish-overlay').classList.add('show');renderWishlist();}
function closeWishPanel(){document.getElementById('wish-overlay').classList.remove('show');}

/* ── AUTH ─────────────────────────────────────────────── */
function switchTab(t){
  document.getElementById('tab-in').classList.toggle('active',t==='in');
  document.getElementById('tab-up').classList.toggle('active',t==='up');
  document.getElementById('form-in').style.display=t==='in'?'block':'none';
  document.getElementById('form-up').style.display=t==='up'?'block':'none';
  document.getElementById('auth-err').classList.remove('show');
}
function showErr(msg){const e=document.getElementById('auth-err');e.textContent=msg;e.classList.add('show');}
function doLogin(){
  const em=document.getElementById('in-email').value.trim();
  const pw=document.getElementById('in-pass').value;
  if(!em||!pw){showErr('Please fill in all fields.');return;}
  if(!users[em]){showErr('No account found. Please sign up.');return;}
  if(users[em].pass!==pw){showErr('Incorrect password. Try again.');return;}
  loginOK(users[em].name,em);
}
function doSignup(){
  const nm=document.getElementById('up-name').value.trim();
  const em=document.getElementById('up-email').value.trim();
  const pw=document.getElementById('up-pass').value;
  if(!nm||!em||!pw){showErr('Please fill in all fields.');return;}
  if(!/\S+@\S+\.\S+/.test(em)){showErr('Enter a valid email address.');return;}
  if(pw.length<6){showErr('Password must be at least 6 characters.');return;}
  if(users[em]){showErr('Account already exists. Sign in instead.');return;}
  users[em]={name:nm,pass:pw};
  loginOK(nm,em);
}
function guestLogin(){loginOK('Guest',null);}
function loginOK(name,email){
  currentUser={name,email};
  document.getElementById('btn-login').style.display='none';
  document.getElementById('btn-user').style.display='inline-block';
  document.getElementById('btn-user').textContent='👤 '+name.split(' ')[0];
  showToast('Welcome, '+name.split(' ')[0]+'! 👋');
  showSection('pg-brands');
}
function handleUserBtn(){
  if(confirm('Sign out of 10KICKS?')){
    currentUser=null;
    document.getElementById('btn-login').style.display='inline-block';
    document.getElementById('btn-user').style.display='none';
    showToast('Signed out. See you soon!');
  }
}

/* ── ABOUT ────────────────────────────────────────────── */
function openAbout(){document.getElementById('about-overlay').classList.add('show');}
function closeAbout(){document.getElementById('about-overlay').classList.remove('show');}
function closeAboutOnBg(e){if(e.target===document.getElementById('about-overlay'))closeAbout();}

/* ── PAYMENT ──────────────────────────────────────────── */
let isCOD=false;
function goCheckout(){
  if(cart.length===0){showToast('Your cart is empty!');return;}
  closeCartPanel();
  if(currentUser&&currentUser.email)document.getElementById('py-em').value=currentUser.email;
  renderPaySummary();
  showSection('pg-payment');
}

function renderPaySummary(){
  const items=document.getElementById('pay-items');
  items.innerHTML=cart.map(c=>`
    <div class="si"><span>${c.name.split(' ').slice(0,4).join(' ')} ×${c.qty}</span>
    <span>₹${(c.price*c.qty).toLocaleString('en-IN')}</span></div>`).join('');
  const sub=cart.reduce((s,c)=>s+c.price*c.qty,0);
  const gst=Math.round(sub*0.18);
  const cod=isCOD?49:0;
  const grand=sub+gst+cod;
  document.getElementById('pay-sub').textContent='₹'+sub.toLocaleString('en-IN');
  document.getElementById('pay-gst').textContent='₹'+gst.toLocaleString('en-IN');
  document.getElementById('pay-grand').textContent='₹'+grand.toLocaleString('en-IN');
  document.getElementById('cod-fee-row').style.display=isCOD?'flex':'none';
}

function switchPayTab(el,formId){
  document.querySelectorAll('.pay-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  ['pf-card','pf-upi','pf-net','pf-cod'].forEach(id=>{
    document.getElementById(id).style.display=id===formId?'block':'none';
  });
  isCOD=formId==='pf-cod';
  renderPaySummary();
}

function selUpi(el){document.querySelectorAll('.upi-app').forEach(a=>a.classList.remove('sel'));el.classList.add('sel');}
function selBank(el){document.querySelectorAll('.net-bank').forEach(b=>b.classList.remove('sel'));el.classList.add('sel');}
function fmtCard(inp){let v=inp.value.replace(/\D/g,'').slice(0,16);inp.value=v.match(/.{1,4}/g)?.join(' ')||v;}
function fmtExp(inp){let v=inp.value.replace(/\D/g,'').slice(0,4);if(v.length>=3)v=v.slice(0,2)+'/'+v.slice(2);inp.value=v;}

function placeOrder(){
  const fn=document.getElementById('py-fn').value.trim();
  const ad=document.getElementById('py-ad').value.trim();
  const ph=document.getElementById('py-ph').value.trim();
  if(!fn||!ad||!ph){showToast('⚠️ Fill in all delivery details.');return;}
  // Card validation
  const cardForm=document.getElementById('pf-card');
  if(cardForm.style.display!=='none'){
    const cn=document.getElementById('py-cn').value.replace(/\s/g,'');
    const cv=document.getElementById('py-cv').value;
    if(cn.length<16){showToast('⚠️ Enter a valid 16-digit card number.');return;}
    if(cv.length<3){showToast('⚠️ Enter a valid CVV.');return;}
  }
  const upiForm=document.getElementById('pf-upi');
  if(upiForm.style.display!=='none'){
    const uv=document.getElementById('py-upi').value.trim();
    if(!uv.includes('@')){showToast('⚠️ Enter a valid UPI ID.');return;}
  }
  // Process
  const btn=document.getElementById('pay-now-btn');
  btn.textContent='⏳ Processing…';
  btn.disabled=true;
  setTimeout(()=>{
    btn.textContent='Pay Now →';
    btn.disabled=false;
    const oid='10K'+Date.now().toString().slice(-8).toUpperCase();
    document.getElementById('ord-id').textContent='Order ID: '+oid;
    cart=[];
    renderCart();
    updateCartBadge();
    showSection('pg-success');
  },2000);
}

function clearAndShop(){cart=[];renderCart();updateCartBadge();showSection('pg-brands');}

/* ── SEARCH ───────────────────────────────────────────── */
function filterBrands(q){
  const v=q.toLowerCase();
  document.querySelectorAll('#brand-grid .brand-card').forEach(c=>{
    c.classList.toggle('hide',!c.dataset.brand.includes(v));
  });
}
function runSearch(){
  const q=document.getElementById('hdr-search').value.trim().toLowerCase();
  if(!q)return;
  showSection('pg-brands');
  setTimeout(()=>{
    const fi=document.querySelector('.filter-in');
    if(fi){fi.value=q;filterBrands(q);}
  },200);
}

/* ── HAMBURGER ────────────────────────────────────────── */
function toggleHam(){document.getElementById('ham-btn').classList.toggle('open');document.getElementById('mob-menu').classList.toggle('show');}
function closeMob(){document.getElementById('ham-btn').classList.remove('open');document.getElementById('mob-menu').classList.remove('show');}

/* ── TOAST ────────────────────────────────────────────── */
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTmr);
  toastTmr=setTimeout(()=>t.classList.remove('show'),2500);
}

/* ── SCROLL TOP ───────────────────────────────────────── */
window.addEventListener('scroll',()=>{
  document.getElementById('scrollTop').classList.toggle('visible',window.scrollY>280);
});

/* ── INIT ─────────────────────────────────────────────── */
updateCartBadge();
showSection('pg-landing');
