//slide in and out effect

const items = document.querySelectorAll('.item:not(:first-child)');
const options = {
  threshold: 0.5
}
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
    else {
        entry.target.classList.remove('slide-in')
      }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)
items.forEach(item => {
  observer.observe(item);
})



function addSlideDown(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-down');
      }
      else {
        entry.target.classList.remove('slide-down')
      }
    });
  }
  
  const observer1 = new IntersectionObserver(addSlideDown, options)
  items.forEach(item => {
    observer1.observe(item);
  })