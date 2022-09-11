(() => {


    const bios = document.querySelectorAll('.teamPhoto'),
        teamInfo = document.querySelector('.textBio');

    let currentHouse = '';

    const teamText = [
        `My Name is Hiral Shah, Responsible for giving overall leadership and Supervision to the short solution by supporting and managing there professional growth and expertise. Additionally I am responsible for leading reasearch and implementation efforts associated with product management and Idea Creation and best Practise at Short Solution.`,

        `My name is Amr, and Student at Fanshawe college. I started an interactive media design program in 2022.
      I have more than six years of experience in graphic design. Specifically. Advertising and branding.
      My artwork was published at the Caan film festival and Berlin film festival when I was working as a senior graphic designer in Dubai. I created the whole campaign independently
      I Developed concepts to meet company needs: collaborated with clients regarding corporate branding and ensured consistency throughout campaigns and marketing tools.
      I Developed and designed branding for companies including business logo design, stationary requirements, social media, and Marketing presentations.`,

        `Professional in marketing and advertising with an emphasis on graphic design, branding and team leadership with more than 20 years of experience; I have worked in the cosmetics and personal care industry from my field of design and communication.
      "Drawing by hand first makes everything look better in the end"; I am a lover of practical and direct design above the bombastic; saturating does not communicate more because less is more.`,

        `I've been helping companies plan, design and develop their digital products since 2011. I've worked mostly with early-stage startups, but I’ve also designed products for enterprise and publicly traded companies.I realized around this time that my love for design and art really boiled down to enjoying "building" things. Whether that be drawing, models, LEGO, or whatever. This enjoyment is what ultimately became my love for software and products.`,
    ]



    function animateBanners() {
        let offset = this.dataset.offset;
        getHouseText(this.classList, this.dataset.offset);

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

    function popLightbox() {
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