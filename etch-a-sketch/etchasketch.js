document.addEventListener('DOMContentLoaded', function () {
    colsrows(16, 16);
    document.querySelector('#new').onclick = function () {
        const answer = prompt('cols enter')
        const rows = prompt('rows enter')
        const main = document.querySelector('#main');
        while (main.firstChild) {
            main.removeChild(main.lastChild)

        }
        colsrows(rows, answer);
    }


  })


function colsrows(rows, cols){
    const main = document.querySelector('#main');
    main.style.setProperty('--grid-rows', rows);
    main.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover', function (e) {
          if (!e.target.style.backgroundColor) {
            e.target.style.backgroundColor = getRandomColor();
          } else {
            e.target.style.backgroundColor = "black";

                } 
          
            })
      main.appendChild(cell).className = "grid-item";
    };
} 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }