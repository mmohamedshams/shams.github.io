/* اسليد الصور المتحركه  */
var currentImageIndex = 0;
var imageSources = ["https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/1.jpeg?v=1708087592179", "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/4.jpeg?v=1708087957607", "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/3.jpeg?v=1708087949566" , "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/2.png?v=1708087637430" , "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/5.jpeg?v=1708087965529" , "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/6.jpeg?v=1708087682808"];

function changeImage(index) {
    document.getElementById("sliderImage").src = imageSources[index];
    updateImagePoints(index);
}

function updateImagePoints(index) {
    var pointsContainer = document.getElementById("imagePoints");
    pointsContainer.innerHTML = "";

    for (var i = 0; i < imageSources.length; i++) {
        var point = document.createElement("div");
        point.className = "point" + (i === index ? " active" : "");
        point.onclick = (function (i) {
            return function () {
                currentImageIndex = i;
                changeImage(i);
            };
        })(i);
        pointsContainer.appendChild(point);
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    changeImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    changeImage(currentImageIndex);
}

setInterval(nextImage, 5000);
changeImage(currentImageIndex);

/* تغير الثيم للدارك */

const themeToggle = document.getElementById('themeToggle');
const themeLink = document.getElementById('theme');
const savedTheme = localStorage.getItem('selectedTheme');


if (savedTheme) {
  themeLink.href = savedTheme;
  
 
  themeToggle.checked = savedTheme === 'night.css';
} else {
  
  themeToggle.checked = false;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    themeLink.href = 'night.css';
    localStorage.setItem('selectedTheme', 'night.css');
  } else {
    themeLink.href = 'styles.css';
    localStorage.setItem('selectedTheme', 'styles.css');
  }
});

  /* تغير اللغه */
$(document).ready(function() {
    let isEnglish = true;

   
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
        isEnglish = storedLanguage === 'en';
    }

    
    function updateInterface() {
        if (isEnglish) {
            $("#homeButton").text("HOME");
            $("#aboutButton").text("ABOUT US");
            $("#contactButton").text("CONTACT");
            $("#home").text("HOME");
            $("#about").text("ABOUT US");
            $("#contact").text("CONTACT");
            $("#languageButton").text("AR");
            $("#Address").text("123 Main Street, City");
            $("#Time").text("Mon - Fri : 9 AM - 5 PM");
            $("#Follow").text("Follow us :");
            $("#IT").text("IT");
            $("#Web").text("Web Site");
            $("#Mobile_app").text("Mobile App");
            $("#AI").text("Artificial intelligence");
            $("#IT_footer").text("IT");
            $("#Web_footer").text("Web Site");
            $("#Mobile_app_footer").text("Mobile App");
            $("#AI_footer").text("Artificial intelligence");
            $("#title").text("Navigating Digital Transformation Across Mobile Apps, Websites, and Information Management");
            $("#Welcome").text("Welcome to Shams Store");
            $("#feedback").text("We welcome your feedback and suggestions and look forward to improving the quality of our services with your assistance. We welcome all inquiries and are available to meet your requirements at any time and from any location. You can reach us by phone or email, and we will respond to all inquiries as soon as possible.");
            $("#Copyright").text("Copyright © 2024 Shams Store.");
            $("body").removeClass("arabic");
            $("html").attr("lang", "en");
            $(".header").css("background", "linear-gradient(to right, rgba(200, 221, 255, 0.9), rgba(0, 60, 163, 0.9)), url('https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/stars1.webp?v=1705739968298')");
            $("#learn_it_1").text(" 1. IT encompasses more than just computers and software; it includes networks, cloud computing, systems, security, analytics, web applications, and more.");
            $("#learn_it_2").text(" 2. Anyone can learn and effectively use IT, whether in personal life or professionally, with many educational resources available for everyone.");
            $("#learn_it_3").text(" 3. While IT provides effective solutions for many challenges, it's not a one-size-fits-all solution and may sometimes introduce new challenges or issues.");
            $("#learn_it_4").text(" 4. While IT faces security challenges, there are many technologies and practices available to enhance security and protect data.");
            $("#learn_it_5").text(" 5. IT can enhance social interaction through social media and modern applications that connect people.");
            $("#learn_it_6").text(" 6. While IT can automate some tasks, human management, strategy, and creativity remain essential.");
            $("#learn_it_7").text(" 7. While there are costs associated with developing and maintaining IT, there are many cost-effective options available for both businesses and individuals.");
            $("#learn_it_8").text(" 8. IT can have environmental impacts due to energy consumption and electronic waste, but measures can be taken to minimize this impact.");
        } else {
            $("#homeButton").text("الصفحة الرئيسية");
            $("#aboutButton").text("معلومات عنا ");
            $("#contactButton").text("اتصل بنا"); 
            $("#home").text("الصفحة الرئيسية");
            $("#about").text("معلومات عنا ");
            $("#contact").text("اتصل بنا"); 
            $("#languageButton").text("ENGLISH");
            $("#Address").text("123 الشارع الرئيسي، المدينة");
            $("#Time").text("من الأثنين الى السبت : 8 صباحاً - 6 مساءً ");
            $("#Follow").text("اتبعنا  :");
            $("#IT").text("تكنولوجيا المعلومات");
            $("#Web").text("ويب سايت");
            $("#Mobile_app").text("تطبيقات الموبيل");
            $("#AI").text("الذكاء الصناعى");
            $("#IT_footer").text("تكنولوجيا المعلومات");
            $("#Web_footer").text("ويب سايت");
            $("#Mobile_app_footer").text("تطبيقات الموبيل");
            $("#AI_footer").text("الذكاء الصناعى");
            $("#title").text(" رحلة التحول الرقمي من التطبيقات المحمولة إلى مواقع الويب وإدارة المعلومات");
            $("#Welcome").text("مرحبا بكم في  Shams Store");
            $("#feedback").text("نحن نرحب بملاحظاتك واقتراحاتك ونتطلع إلى تحسين جودة خدماتنا بمساعدتك. نرحب بجميع الاستفسارات ومتواجدون لتلبية متطلباتكم في أي وقت ومن أي مكان. يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني، وسنقوم بالرد على جميع الاستفسارات في أسرع وقت ممكن.");
            $("#Copyright").text("جميع حقوق النشر محفوظة - © 2024  شركه Shams Store  .");
            $("body").addClass("arabic"); 
            $("html").attr("lang", "ar");
            $(".header").css("background", "linear-gradient(to left, rgba(200, 221, 255, 0.9), rgba(0, 60, 163, 0.9)), url('https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/stars1.webp?v=1705739968298')");
            $("#learn_it_1").text(" ١. تشمل تكنولوجيا المعلومات أكثر من مجرد الكمبيوترات والبرمجيات؛ بل تشمل أيضًا الشبكات والحوسبة السحابية والأنظمة والأمان والتحليلات وتطبيقات الويب وغيرها الكثير.");
            $("#learn_it_2").text(" ٢. يمكن لأي شخص أن يتعلم ويستخدم تكنولوجيا المعلومات بفعالية، سواء في الحياة الشخصية أو المهنية، مع وجود العديد من الموارد التعليمية المتاحة للجميع.");
            $("#learn_it_3").text(" ٣. بينما توفر تكنولوجيا المعلومات حلولًا فعالة للعديد من التحديات، إلا أنها ليست حلا عامًا لجميع المشاكل وقد تسبب أحيانًا تحديات أو مشاكل جديدة.");
            $("#learn_it_4").text(" ٤. على الرغم من التحديات الأمنية التي تواجه تكنولوجيا المعلومات، هناك العديد من التقنيات والممارسات المتاحة لتعزيز الأمان وحماية البيانات.");
            $("#learn_it_5").text(" ٥. يمكن لتكنولوجيا المعلومات تعزيز التفاعل الاجتماعي من خلال وسائل التواصل الاجتماعي والتطبيقات الحديثة التي تربط الناس.");
            $("#learn_it_6").text(" ٦. بينما يمكن لتكنولوجيا المعلومات أتمتة بعض المهام، فإن إدارة البشر والاستراتيجية والإبداع لا غنى عنها.");
            $("#learn_it_7").text(" ٧. على الرغم من وجود تكاليف مرتبطة بتطوير وصيانة تكنولوجيا المعلومات، إلا أن هناك العديد من الخيارات الفعالة من حيث التكلفة متاحة للشركات والأفراد على حد سواء.");
            $("#learn_it_8").text(" ٨. يمكن أن تكون لتكنولوجيا المعلومات تأثيرات بيئية بسبب استهلاك الطاقة والنفايات الإلكترونية، ولكن يمكن اتخاذ تدابير لتقليل هذا التأثير.");            
        }
    }

    updateInterface();

    function toggleLanguage() {
        isEnglish = !isEnglish;

     
        localStorage.setItem('language', isEnglish ? 'en' : 'ar');

      
        updateInterface();
    }

    $("#languageButton").click(function() {
        toggleLanguage();
        updateInterface();
        location.reload();
    });
});

  /* تحديد الخريطه  */
  function initMap() {
    
    var coordinates = [24.447315, 54.402121];

    var map = L.map('map').setView(coordinates, 15); 

   
    L.marker(coordinates).addTo(map)
        
        .openPopup();
   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
window.onload = initMap;
/* اسليدر اللوجو المتحرك */
$(document).ready(function(){
  setInterval(function(){
    $('.image-gallery').animate({marginLeft:'-10000px'}, 20000, function(){
      $(this).find('i:last').after($(this).find('i:first'));
      $(this).css({marginLeft:-100});
    });
  }, 20);
});
/*   الصور و الكلام المتحرك جنبها */
const images = ["https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/IT_1.jpeg?v=1708088049512", "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/Web%20site_1.jpeg?v=1708088150589", "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/Mobile%20App_1.jpeg?v=1708088077823", "https://cdn.glitch.global/b04da27f-160e-4bbe-b63e-5f180b14c324/AI_1.jpeg?v=1708088040615"];
const titles = [
  "IT",
  "Web Site",
  "Mobile App" ,
  "Artificial intelligence"
];
const texts = [
  "Application, Networks, Security, Software, Hardware, Data, Analysis, Evolution.",
  "Interface, Content, Navigation, Design, Functionality, Interactivity, Accessibility, Responsiveness.",
  "User Interface, Features, Performance, Compatibility, Security, Updates, User Experience, Innovation." ,
  "Machine Learning, Automation, Cognitive Computing, Natural Language Processing, Neural Networks, Robotics, Decision Making, Innovation."
];

let currentIndex = 0;
let textElement = document.getElementById("text");


let titleArabic = [
  "تقنية المعلومات",
  "موقع الويب",
  "تطبيق الجوال" ,
  "الذكاء الاصطناعي"
];
let textArabic = [
  "تقنية المعلومات: تطبيق، شبكات، أمن، برمجيات، هاردوير، بيانات، تحليل، تطور.",
  "واجهة، محتوى، تصفح، تصميم، وظائف، تفاعلية، إمكانية الوصول، الاستجابة.",
  "واجهة المستخدم، المميزات، الأداء، التوافق، الأمان، التحديثات، تجربة المستخدم، الابتكار." ,
  "التعلم الآلي، التحكم الذاتي، الحوسبة الإدراكية، معالجة اللغة الطبيعية، الشبكات العصبية، الروبوتات، اتخاذ القرارات، الابتكار."
];

function updateContent() {
  const imageElement = document.getElementById("image");
  imageElement.src = images[currentIndex];

  const titleElement = document.getElementById("title");

  // تحديث العنوان بناءً على اتجاه اللغة
  titleElement.textContent = isArabicLang() ? titleArabic[currentIndex] : titles[currentIndex];

  textElement.innerHTML = ""; 
  typeWriter(isArabicLang() ? textArabic[currentIndex] : texts[currentIndex], 0);

  currentIndex = (currentIndex + 1) % images.length;
}

// باقي الكود كما هو


function typeWriter(text, index) {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 70); 
  }
}

function isArabicLang() {
  return document.documentElement.lang === "ar";
}

function translateToArabic(text) {
  const titleArabic = [
     "متجر آبل",
  "متجر سامسونج",
  "متجر أوبو" ,
  "متجر شياومي"
  ];

  const textArabic = [
    "أبل تعتبر أول شركة تصنيع للهواتف الذكية.",
    "سامسونج تعتبر واحدة من أفضل الشركات من حيث الشهرة وتكرار الاستخدام.",
    "أوبو تعتبر الشركة الأم للصين وتعتبر واحدة من أفضل الشركات من حيث المظهر." ,
    "شاومي تعتبر واحدة من أكبر الشركات في الصين وواحدة من الشركات الرائدة في تصنيع الهواتف الذكية."
  ];

 
  return textArabic[currentIndex];
}


function updateTexts() {
  if (isArabicLang()) {
    texts.forEach((text, index) => {
      texts[index] = translateToArabic(text);
    });
  }
}


updateTexts();


setInterval(() => {
  updateTexts();
  updateContent();
}, 10000);
