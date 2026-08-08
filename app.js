const images=[
['assets/images/product-display-wide.jpg','products','Toàn cảnh sản phẩm second-hand và mini decor.'],
['assets/images/product-display-detail.jpg','products','Những món đồ nhỏ được sắp xếp cẩn thận.'],
['assets/images/booth-overview.jpg','products','Góc trưng bày trước giờ đón khách.'],
['assets/images/customer-consultation-01.jpg','people','Thành viên giới thiệu sản phẩm cho khách hàng.'],
['assets/images/booth-teamwork-01.jpg','booth','Cả nhóm phối hợp trong ngày hoạt động.'],
['assets/images/customer-writing-message.jpg','people','Người tham gia để lại lời nhắn cho Vệt Sáng.'],
['assets/images/message-writing-closeup.jpg','people','Một lời nhắn nhỏ dành cho Little Hands.'],
['assets/images/busy-booth.jpg','booth','Không khí nhộn nhịp trong ngày Booth Day.'],
['assets/images/booth-day-group.jpg','booth','Khoảnh khắc tổng kết trong ngày bán hàng.'],
['assets/images/hero-booth.jpg','booth','Gian hàng Little Hands tại FPT University.']
];
const grid=document.querySelector('#grid');let shown=images;let current=0;
function render(filter='all'){shown=filter==='all'?images:images.filter(x=>x[1]===filter);grid.innerHTML=shown.map((x,i)=>`<article class="tile" data-i="${i}"><img loading="lazy" src="${x[0]}" alt="${x[2]}"><span>${x[2]}</span></article>`).join('');document.querySelectorAll('.tile').forEach(t=>t.onclick=()=>openLb(+t.dataset.i));}
render();document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});
const lb=document.querySelector('#lightbox'),lbImg=lb.querySelector('img'),cap=lb.querySelector('figcaption');function openLb(i){current=i;lb.classList.add('open');lb.setAttribute('aria-hidden','false');show()}function show(){lbImg.src=shown[current][0];lbImg.alt=shown[current][2];cap.textContent=shown[current][2]}function closeLb(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true')}lb.querySelector('.close').onclick=closeLb;lb.querySelector('.prev').onclick=()=>{current=(current-1+shown.length)%shown.length;show()};lb.querySelector('.next').onclick=()=>{current=(current+1)%shown.length;show()};document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')lb.querySelector('.prev').click();if(e.key==='ArrowRight')lb.querySelector('.next').click()});
const team=[['NK','Nguyễn Cao Kỳ','Project Leader'],['PN','Phạm Võ Hoàng Nhân','Finance & Presentation'],['NQ','Ngô Từ Nhã Quyên','Operations & Vệt Sáng'],['DK','Nguyễn Duy Khoa','Media'],['TT','Trần Minh Tấn Tài','Product Sourcing'],['BK','Phạm Bảo Khanh','Merchandise & Inventory'],['VD','Võ Đức Duy','Design & Display'],['ND','Nguyễn Thái Duy','Customer Relations'],['PK','Vương Nguyễn Phúc Khang','Evidence & Presentation']];document.querySelector('#teamGrid').innerHTML=team.map(x=>`<article class="member"><div class="avatar">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('');
document.querySelector('.menu').onclick=()=>document.querySelector('.nav nav').classList.toggle('open');document.querySelectorAll('.nav nav a').forEach(a=>a.onclick=()=>document.querySelector('.nav nav').classList.remove('open'));const topBtn=document.querySelector('#topBtn');window.addEventListener('scroll',()=>topBtn.style.display=scrollY>600?'block':'none');topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
