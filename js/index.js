const images = document.querySelectorAll('img');

const isVisible = elem => {
  const bounding = elem.getBoundingClientRect();
  const docElement = document.documentElement;

  return (
    bounding.top >= 0
    && bounding.left >= 0
    && bounding.bottom <= (window.innerHeight || docElement.clientHeight)
    && bounding.right <= (window.innerWidth || docElement.clientWidth )
  )
};

const handleScroll = (ev) => {
  images.forEach(image => {
    if(isVisible(image)) {
      const imageSrc = image.dataset.src;
      image.setAttribute('src', imageSrc);
      image.classList.remove('hidden-image');
      image.classList.add('visible-image');
    }
  });
};
window.addEventListener('scroll', handleScroll);