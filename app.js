let nav= document.querySelectorAll('.nav-link').forEach(nav => { 

    nav.addEventListener('click', () => { 

    nav.style.color = nav.style.color === "red" ? "black" : "red" 

    }); 

}); 

let test= document.querySelectorAll('.test').forEach(test => { 

    test.addEventListener('click', () => { 

    test.style.color = test.style.color === "red" ? "white" : "red" 

    }); 

}); 