const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
});

/*code for smooth effect for section*/
const aboutUs = document.querySelector('a[href^="#about-us"]');
const hostelFacility = document.querySelector('a[href^="#hostel-facility"]');
const testimonial = document.querySelector('a[href^="#client-say"]');
const gallery = document.querySelector('a[href^="#gallery"]');
const contactUs = document.querySelector('a[href^="#contact-us"]');
const aboutUsFooter=document.getElementById('about-us-footer');
const hostelFacilityFooter=document.getElementById('hostel-facility-footer');
const testimonialFooter=document.getElementById('client-say-footer');
const galleryFooter=document.getElementById('gallery-footer');
const contactUsFooter=document.getElementById('contact-us-footer');
const aboutUsFootermob=document.getElementById('about-us-footer-mob');
const hostelFacilityFootermob=document.getElementById('hostel-faility-footer-mob');
const testimonialFootermob=document.getElementById('client-say-footer-mob');
const galleryFootermob=document.getElementById('gallery-footer-mob');
const contactUsFootermob=document.getElementById('contact-us-footer-mob');



aboutUs.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(aboutUs.getAttribute('href'));
  console.log('target',target)
  target.scrollIntoView({
    behavior: 'smooth'
  });
});

hostelFacility.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(hostelFacility.getAttribute('href'));
  console.log('target',target)
  target.scrollIntoView({
    behavior: 'smooth'
  });
});

testimonial.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(testimonial.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

gallery.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(gallery.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

contactUs.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(contactUs.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

aboutUsFooter.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(aboutUsFooter.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

hostelFacilityFooter.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(hostelFacilityFooter.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

testimonialFooter.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(testimonialFooter.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

galleryFooter.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(galleryFooter.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

contactUsFooter.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(contactUsFooter.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

aboutUsFootermob.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(aboutUsFootermob.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

hostelFacilityFootermob.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(hostelFacilityFootermob.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

testimonialFootermob.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(testimonialFootermob.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

galleryFootermob.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(galleryFootermob.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});

contactUsFootermob.addEventListener('click', e => {
  e.preventDefault();

  const target = document.querySelector(contactUsFootermob.getAttribute('href'));

  target.scrollIntoView({
    behavior: 'smooth'
  });
});





  const images = [
    "first-client.png",
    "second-client.png",
    "third-client.png",
  ];
  
  const descriptions = [
    "“We hired the services of Nitin Khamamkar to shoot our Guinness world record attempt and we are glad to say we had a great experience and got wonderful images from him!”",
    "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione modi eum quo? Unde praesentium illum ullam ratione distinctio quam, sequi repellat facere optio asperiores fugit doloribus obcaecati fuga laboriosam ab.”",
    "“We hired the services of Nitin Khamamkar to shoot our Guinness world record attempt and we are glad to say we had a great experience and got wonderful images from him!”",
  ];
  
  const names = [
    "Sunil Shetti",
    "Sunil Shetti1",
    "Sunil Shetti2",
  ];
  
  let currentImageIndex = 0;
  
  const prevArrow = document.getElementById('prev-arrow');
  const nextArrow = document.getElementById('next-arrow');
  const cliImg = document.querySelector('.cli-img');
  const cliDescription = document.querySelector('.cli-description');
  const cliName = document.querySelector('.clnt-nm');
  
  function showContent(index) {
    cliImg.src = images[index];
    cliDescription.textContent = descriptions[index];
    cliName.textContent = names[index];
  }
  
  prevArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showContent(currentImageIndex);
  });
  
  nextArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showContent(currentImageIndex);
  });
  
  showContent(currentImageIndex);
  
