

// first args are main lists // others are in order for dropdown
const CreateNavBar = function (...args) {
    const mainlists = args[0]
    if (mainlists.length !== args.length -1) return console.log('Sublists or lists length do not match')
    CreateBar(args)
    


    function CreateBar(args) {
        const navbar = document.createElement('nav');
        const ul = document.createElement('ul');
        navbar.className = 'navbar'
        ul.className = 'navbarul'
        for (let a = 0; a < mainlists.length; a++) {
            const listname = document.createElement('li');
            const insideul = document.createElement('ul')
            listname.textContent = mainlists[a];
            listname.className = 'navbarlist';
            insideul.className = 'navbarinsideul'
            ul.appendChild(listname)
            listname.appendChild(insideul)
            // dropdown list create
            for (let dropdown = 0; dropdown < args[a + 1].length; dropdown++) {
                const insidelist = document.createElement('li')
                insidelist.textContent = args[a + 1][dropdown]
                insidelist.className = 'navbarinsidelist'
                insideul.appendChild(insidelist)

            }
        }
        document.querySelector('body').appendChild(navbar)
        navbar.appendChild(ul)

    
    }

}

CreateNavBar(['adana', 'bursa', 'bursa', 'bursa', 'bursa'], ['kurdistan', 'annen', 'baban'], ['vasiliyo', 'baban', 'baban', 'baban', 'baban', 'baban'], ['kurdistan'], ['kurdistan', 'annen', 'baban'], ['kurdistan', 'annen', 'baban'])

