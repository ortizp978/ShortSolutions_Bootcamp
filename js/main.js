(() => {


  const bios = document.querySelectorAll('.teamPhoto'),
  teamInfo = document.querySelector('.textBio');

  let currentHouse = '';

    const teamText = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum venenatis purus, sit amet vestibulum nisl ultrices dapibus. Aliquam dictum elementum blandit. Curabitur auctor nisl ut lorem luctus, elementum feugiat augue ullamcorper. Nam et pharetra libero. Sed vel tortor mi. Donec sit amet condimentum arcu, eleifend interdum purus. Cras feugiat mauris a magna porta, vel viverra mauris aliquam. Donec semper dolor libero, sed bibendum lacus euismod convallis. Donec sed pretium purus. Mauris vel nunc nec diam porttitor mattis.`,

      `Nam tincidunt, arcu ac accumsan bibendum, quam tortor tincidunt lectus, vel lobortis leo mauris at ligula. Aliquam et ligula cursus, lobortis purus eget, iaculis nunc. In quis ante eget mauris molestie mattis non vel lectus. Praesent ullamcorper eleifend tellus in auctor. Aenean pretium elementum fringilla. Suspendisse eget pretium lorem, nec maximus risus. Morbi convallis blandit sem a imperdiet. Nam et leo dolor. Nunc mattis, nibh id interdum porta, nunc turpis rhoncus arcu, non convallis nisi arcu vitae velit. Aenean aliquet, lorem condimentum lacinia rhoncus, nisi metus auctor risus, in luctus urna dolor id nunc. Nam eu tristique eros. Nullam tristique mollis tempor. Duis a commodo leo, sit amet elementum ipsum. Sed consectetur eu purus gravida bibendum.`,

      `Ut imperdiet nibh eu quam euismod, sit amet cursus urna tempus. Aenean posuere arcu viverra, aliquet neque a, ultricies magna. Nunc dignissim vestibulum lectus vel iaculis. Vestibulum nisi erat, rhoncus sit amet nibh a, fringilla congue lorem. Nam in tortor nibh. Sed in elit finibus, hendrerit mi at, imperdiet velit. Donec molestie tincidunt congue. Integer iaculis, diam nec maximus malesuada, lorem orci dignissim nisl, nec semper nulla mauris quis neque. Mauris justo metus, consequat sit amet risus vitae, gravida luctus nunc.`,

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
