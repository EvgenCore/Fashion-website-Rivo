



function toggleMenu(){
    const burger = document.querySelector('#burger')
    const menu = document.querySelector('#mobile-menu')
    const body = document.querySelector('body')

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active')
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
    })
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 767.99){
            menu.classList.add('hidden')
            menu.classList.remove('flex')
            burger.classList.remove('active')
            body.classList.remove('overflow-hidden')
        }
    })
}

toggleMenu()



function toggleTabs(tabTriggerClass, tabContentClass){
    const tabTriggers = document.querySelectorAll(tabTriggerClass)
    const tabContents = document.querySelectorAll(tabContentClass)

    tabTriggers.forEach((trigger,index)=>{
        trigger.addEventListener('click', ()=>{
            tabTriggers.forEach((t)=>t.classList.remove('active'))

            trigger.classList.add('active')

            tabContents.forEach((content)=>{
                content.classList.add('hidden')
            })
            tabContents[index].classList.remove('hidden')
        })
    })
}

toggleTabs('.tabTrigger', '.tabContent')



function toggleFeedback(){
    const firstCards = document.querySelector('#feedbackCards1');
    const secondCards = document.querySelector('#feedbackCards2');
    const btn = document.querySelector('#feedbackButton');
    const btn2 = document.querySelector('#feedbackButton2');
    let count1 = 0
    let count2 = 0

    btn.addEventListener('click',()=>{
        
        if(count1 === 0){
            secondCards.classList.toggle('hidden')
            secondCards.classList.toggle('flex')
            firstCards.classList.toggle('hidden')
            firstCards.classList.toggle('flex')
            count1++
            count2 = 0
            
        }
      

    });

    btn2.addEventListener('click',()=>{
        if(count2 === 0){
            secondCards.classList.toggle('hidden')
            secondCards.classList.toggle('flex')
            firstCards.classList.toggle('hidden')
            firstCards.classList.toggle('flex')
            count2++
            count1 = 0
        }
    });    
}
toggleFeedback()



function countdownTimer(){
    let countdownDate = new Date("Aug 12, 2024 15:30:20").getTime()

    let x = setInterval(function(){
        let now = new Date().getTime()

        let difference = countdownDate - now

        let days = Math.floor(difference / (1000 * 60 * 60 * 24))
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        let seconds  = Math.floor((difference % (1000 * 60)) / 1000)


        document.querySelector('#daysCountdown').innerHTML = days
        document.querySelector('#hoursCountdown').innerHTML = hours
        document.querySelector('#minCountdown').innerHTML = minutes
        document.querySelector('#secCountdown').innerHTML = seconds

  
    }, 1000)

}

countdownTimer()


function bestSellingButtonStyling(){
    const but = document.querySelector('#bestSellingButton')
    const butP = document.querySelector('#bestSellingButtonP')
    const butImg = document.querySelector('#bestSellingButtonImg')
    
    but.addEventListener('mouseenter', function(){
        butP.classList.add('text-white')
        butImg.classList.add('text-white')
    })
    
    but.addEventListener('mouseleave', function() {
        butP.classList.remove('text-white');
        butImg.classList.remove('text-white');
    }); 
}

bestSellingButtonStyling()




AOS.init({
    once: true,
    
})

