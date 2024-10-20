// Text animation starts

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('reveal');
    } else {
    entry.target.classList.remove('reveal');
    }
     });

    });
    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((el) => observer.observe(el));
    
// Text animation ends
