
import _ from 'lodash';

import { Main } from "./main.js"
import { Foods } from "./foods.js"
import { Contact } from "./contact.js"
import { order } from "./order.js"
export { content, showspan, body }


document.addEventListener(`DOMContentLoaded`, function() {
    Main()
    Foods()
    Contact()
    order()

  

   
    
    
    
    
    
})
const content = document.getElementById('content')
const showspan = document.getElementById("show")
const body = document.getElementById("body")
