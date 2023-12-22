const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion)=>{
    const accordionItem = accordion.querySelector('.accordion-item');
    accordionItem.addEventListener('click',()=>{
         accordion.classList.toggle('active');
         accordions.forEach((otherAccordion)=>{
            if(otherAccordion!==accordion && otherAccordion.classList.contains('active')){
                otherAccordion.classList.remove('active');
            }
         })
    })
})