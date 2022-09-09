(() => {


  const bios = document.querySelectorAll('.teamPhoto'),
  teamInfo = document.querySelector('.textBio');

  let currentHouse = '';

    const teamText = [
      `Nam tincidunt, arcu ac accumsan bibendum, quam tortor tincidunt lectus, vel lobortis leo mauris at ligula. Aliquam et ligula cursus, lobortis purus eget, iaculis nunc. In quis ante eget mauris molestie mattis non vel lectus. Praesent ullamcorper eleifend tellus in auctor. Aenean pretium elementum fringilla. Suspendisse eget pretium lorem, nec maximus risus. Morbi convallis blandit sem a imperdiet. Nam et leo dolor. Nunc mattis, nibh id interdum porta, nunc turpis rhoncus arcu, non convallis nisi arcu vitae velit. Aenean aliquet, lorem condimentum lacinia rhoncus, nisi metus auctor risus, in luctus urna dolor id nunc. Nam eu tristique eros. Nullam tristique mollis tempor. Duis a commodo leo, sit amet elementum ipsum. Sed consectetur eu purus gravida bibendum.`,

      `My name is Amr, and Student at Fanshawe college. I started an interactive media design program in 2022.
      I have more than six years of experience in graphic design. Specifically. Advertising and branding.
      My artwork was published at the Caan film festival and Berlin film festival when I was working as a senior graphic designer in Dubai. I created the whole campaign independently
      I Developed concepts to meet company needs: collaborated with clients regarding corporate branding and ensured consistency throughout campaigns and marketing tools.
      I Developed and designed branding for companies including business logo design, stationary requirements, social media, and Marketing presentations.`,

      `Professional in marketing and advertising with an emphasis on graphic design, branding and team leadership with more than 20 years of experience; I have worked in the cosmetics and personal care industry from my field of design and communication.
      "Drawing by hand first makes everything look better in the end"; I am a lover of practical and direct design above the bombastic; saturating does not communicate more because less is more.`,

      `Quisque ut sagittis enim. Suspendisse potenti. Nulla consectetur augue a augue imperdiet viverra. Nam et arcu lectus. Cras venenatis, tellus in convallis vulputate, ipsum diam pellentesque ex, sit amet lobortis augue lacus a sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas consectetur vitae justo nec lacinia.`,
    ]

  function animateBanners(){
    let offset = this.dataset.offset; getHouseText(this.classList, this.dataset.offset);

    currentHouse = this.classList[1];
  }

  function getHouseText(house, index) {
    console.log(house[1], index);

    teamInfo.textContent = teamText[index];
  }

  bios.forEach(bio => bio.addEventListener('click', animateBanners));

  animateBanners.call(bios[0]);



  

    const shields = document.querySelectorAll('.sigilContainer'),
    lightBox = document.querySelector('.lightbox'),
    lbClose = lightBox.querySelector('.close'),
    houseVideo = lightBox.querySelector('video');

    function popLightbox () {
      lightBox.classList.add('show-lightbox');
      houseVideo.play();
    }

    function closeLightbox() {
      lightBox.classList.remove('show-lightbox');

      houseVideo.pause();
      houseVideo.currentTime = 0;
    }

    shields.forEach(shield => shield.addEventListener('click', popLightbox))

    lbClose.addEventListener('click', closeLightbox);


})();
