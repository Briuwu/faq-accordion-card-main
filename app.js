const faqs = document.querySelectorAll('.faq__container')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faqs.forEach(item => {
      if (item !== faq){
        item.classList.remove('active')
      }
    })
    faq.classList.toggle('active')
  })
})
