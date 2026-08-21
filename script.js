/* ==========================================================================
   MASTER BUSINESS CONFIGURATION
   Edit business details, logo, links, images and editable content here.
   ========================================================================== */
const BUSINESS_CONFIG = {
  name: "[BUSINESS NAME] Fabrication Works", // TODO: Replace with real business name
  tagline: "Strong Fabrication. Smart Designs. Built to Last.",
  phone: "+91 98765 43210", // TODO
  phoneRaw: "919876543210", // TODO: digits only, country code included
  whatsapp: "+91 98765 43210", // TODO
  whatsappRaw: "919876543210", // TODO: digits only, country code included
  email: "info@example.com", // TODO
  address: "TODO: Add workshop address only if the owner wants it public.",
  mapUrl: "https://maps.google.com/?q=Delhi+NCR", // TODO
  mapEmbedUrl: "", // TODO: optional Google Maps embed URL
  googleBusinessUrl: "#", // TODO
  workingHours: "Monday - Saturday: 9:00 AM - 8:00 PM (Sunday Closed)", // TODO
  logo: "assets/images/logo.svg", // TODO: replace with real logo
  heroImage: "assets/images/hero-fabrication.svg", // TODO: replace with real hero image
  aboutImage: "assets/images/workshop.svg", // TODO
  serviceAreas: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurugram", "Faridabad", "Bahadurgarh", "Sonipat", "Nearby NCR areas"],
  socialLinks: { facebook: "#", instagram: "#", youtube: "#", linkedin: "#" },
  seo: {
    title: "[BUSINESS NAME] Fabrication Works | Gates, Railings, Sheds & Vehicle Bodies in Delhi NCR",
    description: "Custom iron gates, sliding gates, grills, railings, staircases, SS work, sheds, powder coating, welding repair and commercial vehicle body fabrication in Delhi NCR.",
    canonical: "https://example.com/"
  },
  counters: [
    { num: "10+", label: "Years Experience", placeholder: true },
    { num: "500+", label: "Projects Completed", placeholder: true },
    { num: "7", label: "Service Categories", placeholder: true },
    { num: "—", label: "Customer Satisfaction", placeholder: true }
  ]
};

const ABOUT_FEATURES = [
  ["✓", "Strong and Durable Construction", "Built around practical structural requirements."],
  ["₹", "Transparent Quotation", "Final scope and pricing are discussed before work starts."],
  ["✦", "Custom Design Options", "Reference photos, drawings and practical ideas are welcome."],
  ["◇", "Professional Finishing", "Primer, paint, powder coating and SS finishing options."],
  ["⚠", "Safety-Focused Work", "Material and fabrication choices depend on actual use."],
  ["↻", "After-Service Support", "Installation, alignment, repair and maintenance support."]
];

const BENEFITS = [
  ["✦", "Custom designs as per space and budget", "Discuss the design, dimensions and intended use before fabrication."],
  ["⌖", "Accurate measurement", "Site measurements help reduce avoidable fitting issues."],
  ["⚙", "Strong material and proper welding", "Material selection and welding method depend on the job."],
  ["▣", "Clean finishing and powder coating options", "Choose a finish suitable for appearance and environment."],
  ["🏭", "Residential, commercial and industrial capability", "From gates and railings to sheds, platforms and vehicle bodies."],
  ["✓", "Installation and after-service support", "Delivery, fitting, alignment and repair can be discussed."]
];

const PROCESS = [
  ["01", "Send Enquiry", "Call, WhatsApp or share a reference image."],
  ["02", "Discuss Requirement", "Clarify use, dimensions, material and finish."],
  ["03", "Site Visit & Measurement", "Where required, measure the actual installation site."],
  ["04", "Design & Quotation", "Confirm design scope and quotation."],
  ["05", "Fabrication & Handover", "Fabricate, install and hand over the completed work."]
];

const MATERIALS = ["Mild Steel / MS","Stainless Steel / SS 202","Stainless Steel / SS 304","Stainless Steel / SS 316 where applicable","Aluminium","Glass with SS fittings","Polycarbonate sheets","Tin sheets","Colour-coated sheets","Tensile fabric","Structural steel","Powder coating","Enamel paint","Anti-rust primer","Brushed finish","Mirror finish","Hairline finish"];
const ESTIMATE_FACTORS = ["Size","Material","Design complexity","Finish","Installation required","Urgency"];

const SERVICE_CATEGORIES = {
  "Gates, Grills & Railings": [
    "Main Iron Gates","Mild Steel Gates","Sliding Security Gates","Swing Gates","Automatic Gate Preparation","Stainless Steel Gates","Aluminium Gates","Window Grills","Balcony Railings","Designer Metal Fences","Safety Railings","Industrial Security Barriers","Compound Gates","Pedestrian Gates","Pergolas","Decorative Jali Panels","CNC Jali Design Work","Laser-Cut Metal Panels"
  ],
  "Staircases & Structural Work": [
    "Straight Staircases","Spiral Staircases","MS Staircases","SS Staircases","Industrial Staircases","Fire Escape Staircases","Staircase Handrails","Mezzanine Floors","Platforms","Walkways","Structural Frames","Support Brackets","Machine Platforms","Maintenance Platforms","Ramps","Ladders","Safety Cages"
  ],
  "Stainless Steel & Aluminium Work": [
    "Glass Railings with SS Fittings","SS Handrails","SS Balcony Railings","SS Kitchen Frames","SS Counter Frames","Pharma-Grade Equipment Frames","Food-Grade Equipment Frames","SS Tables","SS Trolleys","SS Cabinets","SS Cladding","Decorative SS Work","Aluminium Partitions","Aluminium Doors and Windows","Aluminium Frames","Stainless Steel Fabrication for Commercial Kitchens"
  ],
  "Sheds & Roofing": [
    "Industrial PEB Sheds","Warehouse Structures","Factory Sheds","Workshop Sheds","Godown Sheds","Car Parking Sheds","Polycarbonate Sheds","Tin Sheet Roofing","Tensile Roofing","MS Roofing Structures","Terrace Sheds","Canopy Work","Loading Area Covers","Walkway Covers","Solar Panel Support Structures","Rainwater and Drainage Support Work"
  ],
  "Commercial & Industrial Fabrication": [
    "Safety Barriers","Bollards","Crash Barriers","Industrial Racks","Storage Racks","Display Racks","Trolleys","Metal Furniture","Tables","Chairs","Workbenches","Lockers","Cabinets","Shutters","Rolling Shutters","Glass-Steel Partitions","Office Partitions","Factory Partitions","Security Cages","Machine Guards","Conveyor Support Frames","Custom Brackets","Heavy-Duty Frames","Pipe Supports","Industrial Maintenance Fabrication"
  ],
  "Vehicle Body Fabrication": [
    "Chhota Hathi Load Body","Pickup Load Body","Eicher Load Body","Commercial Truck Body","Open Dala Body","High Side Body","Closed Container Body","Delivery Vehicle Container","Courier Vehicle Body","Aluminium Container Body","Steel Container Body","Insulated Container Preparation","Food Truck Modification","Mobile Food Van","Tea Stall Vehicle","Mobile Shop Vehicle","Tipper Body Work","Dumper Body Fabrication","Hydraulic Dala Body","Heavy-Duty Truck Body","Cabin Fabrication","Vehicle Body Repair","Vehicle Floor Repair","Body Reinforcement","Commercial Vehicle Safety Frame","Custom Vehicle Storage Body"
  ],
  "Repair, Welding & Finishing": [
    "Emergency Welding Repair","On-Site Welding","Gate Repair","Grill Repair","Railing Repair","Shed Repair","Truck Body Repair","Structural Repair","Arc Welding","MIG Welding","TIG Welding","Gas Welding","Cutting and Grinding","Drilling","Bending","Fabrication Assembly","Powder Coating","Enamel Painting","Anti-Rust Treatment","Primer and Finishing","Polishing","SS Finishing","Installation and Dismantling"
  ]
};

const SERVICE_INFO = {
  "Gates, Grills & Railings": ["gates", "fa-gate", "Custom gates, grills, railings and designer metal panels for homes, shops and commercial entrances.", "Residential entrances, balconies and security areas."],
  "Staircases & Structural Work": ["staircases", "fa-stairs", "Metal staircases, platforms, walkways, ladders and structural support fabrication.", "Factories, commercial buildings and roof access."],
  "Stainless Steel & Aluminium Work": ["ss-work", "fa-shield-halved", "SS, aluminium, glass-railing and commercial kitchen fabrication with finish options.", "Balconies, kitchens, pharma/food units and offices."],
  "Sheds & Roofing": ["sheds", "fa-warehouse", "PEB, warehouse, parking, polycarbonate, tensile and structural roofing solutions.", "Factories, warehouses, parking and loading areas."],
  "Commercial & Industrial Fabrication": ["industrial", "fa-boxes-stacked", "Racks, barriers, guards, partitions, shutters, furniture and industrial frames.", "Factories, malls, offices and logistics facilities."],
  "Vehicle Body Fabrication": ["vehicles", "fa-truck", "Custom load bodies, containers, food vans and commercial vehicle fabrication.", "Commercial logistics, cargo and mobile business vehicles."],
  "Repair, Welding & Finishing": ["repairs", "fa-fire-flame-curved", "On-site welding, repair, cutting, grinding, painting, polishing and installation support.", "Urgent repairs, maintenance and finishing work."]
};

const GALLERY_DATA = [
  ["Modern Sliding Security Gate","Main Gates","assets/images/gates/gate-01.svg","Black mild steel sliding security gate for residential entrance","Custom sliding gate design with strong frame and practical finish."],
  ["Designer Swing Gate","Main Gates","assets/images/gates/gate-02.svg","Modern mild steel swing gate at a residential entrance","Reference design for custom gate fabrication."],
  ["Sliding Security Gate","Sliding Gates","assets/images/gates/gate-03.svg","Heavy sliding security gate with metal frame","Reference design for sliding gate discussion."],
  ["Safety Window Grill","Window Grills","assets/images/grills/grill-01.svg","Square-rod MS window safety grill","Burglar-resistant style window grill reference."],
  ["Decorative Window Grill","Window Grills","assets/images/grills/grill-02.svg","Decorative metal window grill pattern","Custom grill pattern can be discussed."],
  ["SS Glass Railing","Balcony Railings","assets/images/railings/railing-01.svg","Stainless steel railing with glass panels","Reference for balcony or staircase glass railing."],
  ["MS Handrail","Balcony Railings","assets/images/railings/railing-02.svg","Straight MS staircase handrail","Clean-line handrail reference."],
  ["Spiral Staircase","Staircases","assets/images/staircases/stair-01.svg","Space-saving metal spiral staircase","Industrial and roof-access staircase reference."],
  ["Straight Staircase","Staircases","assets/images/staircases/stair-02.svg","Straight steel staircase with handrail","Practical staircase reference."],
  ["CNC Laser-Cut Jali","CNC Jali","assets/images/cnc-jali/jali-01.svg","Geometric CNC laser-cut metal jali panel","Decorative panel for gate or elevation."],
  ["Floral Jali Panel","CNC Jali","assets/images/cnc-jali/jali-02.svg","Decorative floral laser-cut metal panel","Custom laser-cut pattern reference."],
  ["SS Commercial Counter","SS Work","assets/images/ss-work/ss-01.svg","Stainless steel commercial kitchen counter","Food-grade working counter reference."],
  ["SS Glass Partition","SS Work","assets/images/ss-work/ss-02.svg","Steel and glass partition frame","Commercial partition reference."],
  ["Aluminium Partition","Aluminium Work","assets/images/ss-work/aluminium-01.svg","Black aluminium and glass office partition","Office partition reference."],
  ["PEB Warehouse Shed","Sheds","assets/images/sheds/shed-01.svg","Structural steel PEB warehouse shed","Warehouse roofing reference."],
  ["Car Parking Shed","Car Parking Sheds","assets/images/sheds/parking-01.svg","Steel-frame car parking canopy","Parking canopy reference."],
  ["Polycarbonate Canopy","Sheds","assets/images/sheds/shed-02.svg","Polycarbonate sheet canopy on steel frame","UV-resistant canopy reference."],
  ["Industrial Safety Barrier","Industrial Work","assets/images/industrial/guard-01.svg","Metal safety barrier and bollard","Factory safety barrier reference."],
  ["Storage Rack","Industrial Work","assets/images/industrial/rack-01.svg","Heavy-duty steel storage rack","Industrial storage rack reference."],
  ["Metal Workbench","Metal Furniture","assets/images/furniture/table-01.svg","Powder-coated metal workbench","Workshop furniture reference."],
  ["Rolling Shutter","Shutters","assets/images/industrial/shutter-01.svg","Heavy-gauge rolling shutter","Shop and warehouse security shutter reference."],
  ["Truck Load Body","Vehicle Bodies","assets/images/vehicles/dala-01.svg","Steel commercial truck load body","Commercial vehicle dala reference."],
  ["Closed Container Body","Container Bodies","assets/images/vehicles/container-01.svg","Closed weatherproof delivery container body","Courier and logistics container reference."],
  ["Mobile Food Van","Food Trucks","assets/images/vehicles/foodtruck-01.svg","Mobile food van with service counter","Food truck modification reference."]
];

const TESTIMONIALS = [
  ["Sample Customer 1","Sliding Security Gate","“Replace this sample with a genuine customer review before publishing.”","Sample location"],
  ["Sample Customer 2","Commercial Vehicle Body","“Replace this sample with a genuine customer review before publishing.”","Sample location"],
  ["Sample Customer 3","Warehouse / Structural Work","“Replace this sample with a genuine customer review before publishing.”","Sample location"]
];

const FAQS = [
  ["What type of fabrication work do you do?","We handle residential, commercial and industrial metal fabrication including gates, grills, staircases, SS railings, sheds, partitions and commercial vehicle body fabrication."],
  ["Do you provide custom gate designs?","Yes. Customers can share drawings or reference images and discuss a suitable custom design."],
  ["Do you take site measurements?","Site measurement can be arranged where required before finalising the scope and quotation."],
  ["Do you provide installation?","Yes, delivery, fitting and alignment can be discussed as part of the project scope."],
  ["Which materials do you use?","Common options include Mild Steel, Stainless Steel, Aluminium, glass with SS fittings, polycarbonate, tin/colour-coated sheets and structural steel."],
  ["Do you provide powder coating?","Powder coating and other finishing options can be discussed based on the material and intended use."],
  ["Can you fabricate vehicle load bodies?","Yes. Load bodies, containers and other commercial vehicle fabrication can be discussed subject to applicable requirements."],
  ["Do you make food trucks and mobile shops?","Yes. Food vans, mobile shops and similar vehicle modifications can be discussed."],
  ["How long does a project take?","Time depends on dimensions, design, material availability, fabrication complexity, finishing, transport and installation."],
  ["How is the quotation calculated?","Quotation depends on material grade, gauge/thickness, weight or dimensions, design complexity, finish, transport, installation and site conditions."],
  ["Do you provide emergency repair services?","On-site welding and repair requirements can be discussed for gates, railings, sheds, truck bodies and structural issues."],
  ["Can I share a reference design?","Yes. You can send a reference image on WhatsApp and discuss the required design."],
  ["Do you work in Delhi NCR?","Service areas can be edited in the configuration. Availability depends on project size, site location and work requirements."],
  ["Can you make industrial sheds and mezzanine floors?","Yes. Structural sheds, mezzanine floors, platforms and support frames can be discussed based on the site and engineering requirements."],
  ["What approvals may be needed for vehicle modification?","Approval requirements depend on the type and extent of alteration, vehicle category, manufacturer specifications and applicable authority rules. We can discuss the technical scope, but the customer must confirm the required approval with the relevant RTO or authorised authority."]
];

const iconForCategory = c => ({Gates:"⚿","Sliding Gates":"↔","Window Grills":"▦","Balcony Railings":"╱","Staircases":"⌁","CNC Jali":"✦","SS Work":"◇","Aluminium Work":"▤","Sheds":"⌂","Car Parking Sheds":"▱","Industrial Work":"⚙","Metal Furniture":"▰","Shutters":"▥","Vehicle Bodies":"▰","Food Trucks":"▣","Container Bodies":"▤"}[c] || "◆");

let currentGallery = [...GALLERY_DATA];
let activeGalleryIndex = 0;
let testimonialIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  initConfig(); renderAbout(); renderCounters(); renderServices(); renderGallery(); renderBenefits(); renderProcess(); renderMaterials(); renderTestimonials(); renderFAQs(); renderAreas(); renderContact(); bindNavigation(); bindGlobal(); initReveal(); initSchema();
});

function initConfig(){
  document.title = BUSINESS_CONFIG.seo.title;
  const desc = document.querySelector('meta[name="description"]'); if(desc) desc.content=BUSINESS_CONFIG.seo.description;
  const canonical = document.querySelector('link[rel="canonical"]'); if(canonical) canonical.href=BUSINESS_CONFIG.seo.canonical;
  document.querySelectorAll("#brand-name,#footer-brand-name,#footer-copy-brand").forEach(e=>e.textContent=BUSINESS_CONFIG.name);
  document.getElementById("brand-logo").src=BUSINESS_CONFIG.logo; document.getElementById("footer-logo").src=BUSINESS_CONFIG.logo;
  document.getElementById("hero-image").src=BUSINESS_CONFIG.heroImage;
  document.getElementById("copyright-year").textContent=new Date().getFullYear();
  document.getElementById("google-reviews").href=BUSINESS_CONFIG.googleBusinessUrl;
}
function renderAbout(){
  document.getElementById("about-features").innerHTML=ABOUT_FEATURES.map(x=>`<div class="feature"><strong>${x[0]} ${x[1]}</strong><span>${x[2]}</span></div>`).join("");
}
function renderCounters(){document.getElementById("counters").innerHTML=BUSINESS_CONFIG.counters.map(x=>`<div class="counter"><strong>${x.num}</strong><span>${x.label}${x.placeholder?' · Placeholder':''}</span></div>`).join("");document.getElementById("years-counter").textContent=BUSINESS_CONFIG.counters[0].num;}
function renderServices(){
  const tabs=document.getElementById("service-tabs"), grid=document.getElementById("services-grid");
  const cats=Object.keys(SERVICE_CATEGORIES); tabs.innerHTML=cats.map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" type="button" data-service-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("");
  const render=(cat)=>{const items=SERVICE_CATEGORIES[cat];const info=SERVICE_INFO[cat];grid.innerHTML=items.map((s,i)=>`<article class="service-card reveal visible"><img loading="lazy" src="${serviceImage(info[0],i)}" alt="${escapeHtml(s)} fabrication example" onerror="this.src='assets/images/fallback.svg'"><div class="service-content"><h3>${escapeHtml(s)}</h3><p>${escapeHtml(info[2])}</p><div class="use-case">Ideal for: ${escapeHtml(info[3])}</div><div class="service-actions"><button class="btn btn-accent btn-sm open-quote" type="button" data-service="${escapeHtml(s)}">Get Estimate</button><a class="btn btn-outline btn-sm" href="#gallery">View Designs</a></div></div></article>`).join("");};
  render(cats[0]); tabs.addEventListener("click",e=>{const b=e.target.closest("[data-service-cat]");if(!b)return;tabs.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.serviceCat);});
  document.getElementById("footer-services").innerHTML=cats.slice(0,6).map(c=>`<a href="#services">${escapeHtml(c)}</a>`).join("");
}
function serviceImage(folder,i){const map={gates:["gate-01.svg","gate-02.svg","gate-03.svg"],staircases:["stair-01.svg","stair-02.svg"],"ss-work":["ss-01.svg","ss-02.svg","aluminium-01.svg"],sheds:["shed-01.svg","parking-01.svg","shed-02.svg"],industrial:["guard-01.svg","rack-01.svg","shutter-01.svg"],vehicles:["dala-01.svg","container-01.svg","foodtruck-01.svg"],repairs:["repair-01.svg","repair-02.svg"]};return `assets/images/${folder}/${(map[folder]||["fallback.svg"])[i%(map[folder]||["fallback.svg"]).length]}`;}
function renderGallery(){
  const cats=["All Work",...new Set(GALLERY_DATA.map(x=>x[1]))], tabs=document.getElementById("gallery-tabs");
  tabs.innerHTML=cats.map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" type="button" data-gallery-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("");
  const apply=()=>{const active=tabs.querySelector(".active")?.dataset.galleryCat||"All Work",q=document.getElementById("gallery-search").value.trim().toLowerCase();currentGallery=GALLERY_DATA.filter(x=>(active==="All Work"||x[1]===active)&&(x[0]+" "+x[3]+" "+x[4]).toLowerCase().includes(q));const grid=document.getElementById("gallery-grid");grid.innerHTML=currentGallery.length?currentGallery.map((x,i)=>`<article class="gallery-card" tabindex="0" role="button" data-gallery-index="${i}"><img loading="lazy" src="${x[2]}" alt="${escapeHtml(x[3])}" onerror="this.src='assets/images/fallback.svg'"><div class="gallery-overlay"><h3>${escapeHtml(x[0])}</h3><span>${escapeHtml(x[1])}</span></div></article>`).join(""):`<div class="notice" style="grid-column:1/-1">No designs match your search.</div>`;};
  tabs.addEventListener("click",e=>{const b=e.target.closest("[data-gallery-cat]");if(!b)return;tabs.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");apply();});document.getElementById("gallery-search").addEventListener("input",apply);apply();
}
function openLightbox(i){activeGalleryIndex=i;const x=currentGallery[i];if(!x)return;const m=document.getElementById("lightbox-modal");document.getElementById("lb-image").src=x[2];document.getElementById("lb-image").alt=x[3];document.getElementById("lightbox-title").textContent=x[0];document.getElementById("lb-category").textContent=x[1];document.getElementById("lb-description").textContent=x[4];const msg=encodeURIComponent(`Hi, I am interested in this design: ${x[0]} (${x[1]}). Please share pricing.`);document.getElementById("lb-whatsapp").href=`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${msg}`;showModal(m);}
function renderBenefits(){document.getElementById("benefits").innerHTML=BENEFITS.map(x=>`<article class="benefit"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");}
function renderProcess(){document.getElementById("process-steps").innerHTML=PROCESS.map(x=>`<article class="process-step"><div class="num">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");}
function renderMaterials(){document.getElementById("materials-list").innerHTML=MATERIALS.map(x=>`<span class="material-tag">${x}</span>`).join("");document.getElementById("estimate-factors").innerHTML=ESTIMATE_FACTORS.map(x=>`<button type="button" class="factor" data-factor="${x}">${x}</button>`).join("");document.querySelectorAll(".factor").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("selected");const n=document.querySelectorAll(".factor.selected").length;document.getElementById("estimate-result").textContent=n?`${n} project factor${n>1?"s":""} selected. Your requirement has been noted. Contact us for an accurate quotation.`:"Select project factors to note your requirement.";}));}
function renderTestimonials(){const track=document.getElementById("testimonial-track");track.innerHTML=TESTIMONIALS.map(x=>`<article class="testimonial"><div class="stars">★★★★★</div><p>${x[2]}</p><strong>${x[0]}</strong><small>${x[1]} · ${x[3]}</small></article>`).join("");document.getElementById("testimonial-prev").onclick=()=>moveTest(-1);document.getElementById("testimonial-next").onclick=()=>moveTest(1);}
function moveTest(d){testimonialIndex=(testimonialIndex+d+TESTIMONIALS.length)%TESTIMONIALS.length;document.getElementById("testimonial-track").style.transform=`translateX(-${testimonialIndex*100}%)`;}
function renderFAQs(){const list=document.getElementById("faq-list");list.innerHTML=FAQS.map((x,i)=>`<div class="faq-item ${i===0?'active':''}"><button class="faq-q" type="button" aria-expanded="${i===0}"><span>${x[0]}</span><span>+</span></button><div class="faq-a"><p>${x[1]}</p></div></div>`).join("");list.addEventListener("click",e=>{const q=e.target.closest(".faq-q");if(!q)return;list.querySelectorAll(".faq-item").forEach(i=>{i.classList.remove("active");i.querySelector(".faq-q").setAttribute("aria-expanded","false");i.querySelector(".faq-q span:last-child").textContent="+"});const item=q.parentElement;if(!item.classList.contains("active")){item.classList.add("active");q.setAttribute("aria-expanded","true");q.querySelector("span:last-child").textContent="−";}});}
function renderAreas(){document.getElementById("service-areas-grid").innerHTML=BUSINESS_CONFIG.serviceAreas.map(x=>`<span class="area-pill">📍 ${escapeHtml(x)}</span>`).join("");document.getElementById("map-link").href=BUSINESS_CONFIG.mapUrl;const mp=document.getElementById("map-placeholder");if(BUSINESS_CONFIG.mapEmbedUrl)mp.innerHTML=`<iframe title="Google Map" src="${escapeAttr(BUSINESS_CONFIG.mapEmbedUrl)}" style="width:100%;height:290px;border:0;border-radius:12px" loading="lazy"></iframe>`;}
function renderContact(){const phone=document.getElementById("contact-phone"),wa=document.getElementById("contact-whatsapp"),email=document.getElementById("contact-email");phone.href=`tel:${BUSINESS_CONFIG.phoneRaw}`;phone.querySelector("strong").textContent=BUSINESS_CONFIG.phone;wa.href=waUrl("Hello, I would like to discuss a fabrication requirement.");wa.querySelector("strong").textContent=BUSINESS_CONFIG.whatsapp;email.href=`mailto:${BUSINESS_CONFIG.email}`;email.querySelector("strong").textContent=BUSINESS_CONFIG.email;document.getElementById("contact-address").textContent=BUSINESS_CONFIG.address;document.getElementById("contact-hours").textContent=BUSINESS_CONFIG.workingHours;document.getElementById("footer-phone").href=`tel:${BUSINESS_CONFIG.phoneRaw}`;document.getElementById("footer-phone").textContent=BUSINESS_CONFIG.phone;document.getElementById("footer-wa").href=wa.href;document.getElementById("footer-email").href=email.href;document.getElementById("footer-email").textContent=BUSINESS_CONFIG.email;document.getElementById("floating-wa").href=wa.href;document.getElementById("mobile-call").href=phone.href;document.getElementById("mobile-wa").href=wa.href;document.getElementById("social-links").innerHTML=Object.entries(BUSINESS_CONFIG.socialLinks).map(([k,v])=>`<a href="${escapeAttr(v)}" aria-label="${k}" target="_blank" rel="noopener">${k[0].toUpperCase()}</a>`).join("");renderForm(document.getElementById("main-quote-form"));}
function renderForm(form){form.innerHTML=formMarkup();}
function formMarkup(){return `<div class="quote-form"><div class="field"><label for="f-name">Full name *</label><input id="f-name" name="name" required autocomplete="name"><span class="error-msg">Please enter your name.</span></div><div class="field"><label for="f-phone">Phone number *</label><input id="f-phone" name="phone" inputmode="numeric" required autocomplete="tel"><span class="error-msg">Enter a valid 10-digit Indian mobile number.</span></div><div class="field"><label for="f-wa">WhatsApp number</label><input id="f-wa" name="whatsapp" inputmode="numeric" autocomplete="tel"><span class="error-msg">Enter a valid number or leave blank.</span></div><div class="field"><label for="f-email">Email (optional)</label><input id="f-email" name="email" type="email" autocomplete="email"><span class="error-msg">Enter a valid email.</span></div><div class="field"><label for="f-location">Location *</label><input id="f-location" name="location" required><span class="error-msg">Please enter location.</span></div><div class="field"><label for="f-service">Select service *</label><select id="f-service" name="service" required><option value="">Choose a service</option>${Object.values(SERVICE_CATEGORIES).flat().map(x=>`<option>${escapeHtml(x)}</option>`).join("")}</select><span class="error-msg">Select a service.</span></div><div class="field"><label for="f-type">Project type</label><select id="f-type" name="projectType"><option>Home</option><option>Shop</option><option>Office</option><option>Factory</option><option>Warehouse</option><option>Vehicle</option><option>Other</option></select></div><div class="field"><label for="f-dim">Approximate dimensions</label><input id="f-dim" name="dimensions" placeholder="e.g. 12 ft × 7 ft"></div><div class="field"><label for="f-material">Preferred material</label><input id="f-material" name="material" placeholder="MS / SS / Aluminium / etc."></div><div class="field"><label for="f-finish">Preferred finish</label><input id="f-finish" name="finish" placeholder="Powder coat / paint / brushed"></div><div class="field"><label for="f-date">Preferred visit date</label><input id="f-date" name="date" type="date"></div><div class="field"><label for="f-budget">Budget range (optional)</label><input id="f-budget" name="budget" placeholder="Optional"></div><div class="field full"><label for="f-desc">Requirement description *</label><textarea id="f-desc" name="description" required placeholder="Tell us what you want fabricated..."></textarea><span class="error-msg">Please describe your requirement.</span></div><div class="field full"><label for="f-image">Reference image (optional)</label><input id="f-image" name="image" type="file" accept="image/jpeg,image/png,image/webp"></div><div class="honeypot"><label>Website<input name="website"></label></div><label class="consent"><input type="checkbox" name="consent" required> I agree that my enquiry details may be used to discuss this quotation. Uploaded images are for quotation discussion only if a backend is connected.</label><div class="form-actions"><button class="btn btn-accent" type="submit">Send Enquiry on WhatsApp</button><button class="btn btn-outline call-instead" type="button">Call Instead</button></div></div>`;}
function bindNavigation(){const nav=document.getElementById("main-nav"),toggle=document.getElementById("mobile-menu-btn");toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});nav.addEventListener("click",e=>{if(e.target.closest(".nav-link"))nav.classList.remove("open")});const links=[...document.querySelectorAll(".nav-link")],sections=links.map(l=>document.querySelector(l.getAttribute("href"))).filter(Boolean);const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")===`#${e.target.id}`));}}),{rootMargin:"-30% 0px -60%"});sections.forEach(s=>obs.observe(s));}
function bindGlobal(){
  document.addEventListener("click",e=>{const q=e.target.closest(".open-quote");if(q){showModal(document.getElementById("quote-modal"));const service=q.dataset.service;const purpose=q.dataset.purpose;const select=document.getElementById("modal-form")?.querySelector("#f-service");if(select&&service)select.value=service;const desc=document.getElementById("modal-form")?.querySelector("#f-desc");if(desc&&purpose)desc.value=`I would like to book a ${purpose}.`;}});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModals();});document.querySelectorAll("[data-close-modal],.modal-close").forEach(x=>x.addEventListener("click",closeModals));document.getElementById("gallery-grid").addEventListener("click",e=>{const card=e.target.closest("[data-gallery-index]");if(card)openLightbox(Number(card.dataset.galleryIndex));});document.getElementById("gallery-grid").addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.closest("[data-gallery-index]"))openLightbox(Number(e.target.closest("[data-gallery-index]").dataset.galleryIndex));});document.getElementById("lb-prev").onclick=()=>openLightbox((activeGalleryIndex-1+currentGallery.length)%currentGallery.length);document.getElementById("lb-next").onclick=()=>openLightbox((activeGalleryIndex+1)%currentGallery.length);document.getElementById("back-top").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});window.addEventListener("scroll",()=>document.getElementById("back-top").classList.toggle("show",scrollY>500));renderForm(document.getElementById("modal-form"));bindForm(document.getElementById("main-quote-form"));bindForm(document.getElementById("modal-form"));}
function bindForm(form){form.addEventListener("submit",e=>{e.preventDefault();if(form.dataset.busy==="1")return;const data=new FormData(form);if(data.get("website"))return;let valid=true;["name","phone","location","service","description"].forEach(n=>{const el=form.querySelector(`[name="${n}"]`);const ok=n==="phone"?/^[6-9]\d{9}$/.test(String(data.get(n)).replace(/\D/g,"")):String(data.get(n)||"").trim().length>0;el?.closest(".field")?.classList.toggle("invalid",!ok);if(!ok)valid=false;});const consent=form.querySelector('[name="consent"]');if(consent&&!consent.checked){toast("Please accept the enquiry consent.");valid=false;}const file=form.querySelector('[name="image"]')?.files?.[0];if(file&&(file.size>5*1024*1024||!["image/jpeg","image/png","image/webp"].includes(file.type))){toast("Reference image must be JPG, PNG or WebP up to 5 MB.");valid=false;}if(!valid){toast("Please fix the highlighted fields.");return;}form.dataset.busy="1";const msg=`New Fabrication Enquiry
Name: ${data.get("name")}
Phone: ${data.get("phone")}
WhatsApp: ${data.get("whatsapp")||"Not provided"}
Email: ${data.get("email")||"Not provided"}
Location: ${data.get("location")}
Service: ${data.get("service")}
Project Type: ${data.get("projectType")}
Requirement: ${data.get("description")}
Dimensions: ${data.get("dimensions")||"Not provided"}
Material: ${data.get("material")||"Not provided"}
Finish: ${data.get("finish")||"Not provided"}
Budget: ${data.get("budget")||"Not provided"}
Preferred Visit Date: ${data.get("date")||"Not provided"}`;toast("Opening WhatsApp with your enquiry...");setTimeout(()=>{window.open(waUrl(msg),"_blank","noopener");form.reset();form.dataset.busy="0";closeModals();},450);});form.addEventListener("click",e=>{if(e.target.closest(".call-instead"))window.location.href=`tel:${BUSINESS_CONFIG.phoneRaw}`;});}
function waUrl(text){return `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;}
function showModal(m){m.hidden=false;document.body.classList.add("modal-open");setTimeout(()=>m.querySelector("input,select,button")?.focus(),20);}
function closeModals(){document.querySelectorAll(".modal").forEach(m=>m.hidden=true);document.body.classList.remove("modal-open");}
function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;document.getElementById("toast-container").appendChild(t);setTimeout(()=>t.remove(),3500);}
function initReveal(){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));}
function initSchema(){const s={"@context":"https://schema.org","@type":"LocalBusiness","name":BUSINESS_CONFIG.name,"telephone":BUSINESS_CONFIG.phone,"email":BUSINESS_CONFIG.email,"address":{"@type":"PostalAddress","streetAddress":BUSINESS_CONFIG.address},"areaServed":BUSINESS_CONFIG.serviceAreas,"openingHours":BUSINESS_CONFIG.workingHours,"url":BUSINESS_CONFIG.seo.canonical,"sameAs":Object.values(BUSINESS_CONFIG.socialLinks).filter(x=>x&&x!=="#")};const el=document.createElement("script");el.type="application/ld+json";el.textContent=JSON.stringify(s);document.head.appendChild(el);}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function escapeAttr(v){return escapeHtml(v);}
