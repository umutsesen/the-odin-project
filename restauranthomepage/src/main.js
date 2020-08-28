
export { Main };


function Main() {
    createbody()
    
    
    
    


}

function createbody() {
    const body = document.querySelector("body")
    const buttondiv = document.createElement("div")
    const insidediv = document.createElement("div")
    const insidespan = document.createElement("span")
    buttondiv.className = "box-3"
    insidediv.className = "btn btn-three"
    insidediv.id = "show"
    insidespan.textContent = "WELCOME"
    body.appendChild(buttondiv)
    buttondiv.appendChild(insidediv)
    insidediv.appendChild(insidespan)
    buttondiv.onclick = function () {
        
        buttondiv.style.display = "none"
        document.getElementById("tabreal").style.display = "block"
        const p = document.getElementById("sec1")
        fadein()
        document.getElementById("sec1")
    }



function fadein() {
    const p = document.getElementById("sec1")
    p.classList.add('hide');
    setTimeout(function() { 
        p.innerHTML = `<h1 style='color: #4f4a4b; font-size: 1.75rem; font-weight: 500;'>Everyone’s Meeting Point</h1>
        <p>
          Midpoint, which has been established in 2002 with "Everyone's Meeting Point” motto and opened its first branch on Bağdat Avenue in the heart of the Anatolian side. The restaurant offers tastes selected from the world cuisines with professional service, warm atmosphere, reasonable prices and modern architecture.
        </p>
        <p>
          Midpoint restaurants are in 7 different cities; Istanbul, Ankara, Izmir, Izmit, Bursa, Antalya and Mersin with a total of 34 meeting points and offer its guests a pleasant time with good food.
        </p>
        <p>By presenting the special tastes coming from the master's hands with its own interpretation, Midpoint also attracts attention with its rich wine options, different cocktails and the best local and international drinks. Midpoint has become a regular place for those who want to spend time in a peaceful and pleasant atmosphere.</p>
        <p>We hope that you will enjoy our light meals, various breakfast alternatives, delicious foods and a wide variety of children's menu that will make our little guests happy. We are waiting you to experience the most beautiful gatherings in our meeting points.</p>`
        idx = (idx + 1) % p.length;
    }, 500);
    setTimeout(function() { 
        p.classList.remove('hide')
    }, 500);
}    






    
}