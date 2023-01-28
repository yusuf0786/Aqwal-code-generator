// targetting the elements
let form = document.getElementById("form")
let kalam = document.querySelectorAll(".input_parent input")
let waqiyat_section_code = document.querySelector(".waqiyat_section_code")

// running the function while inputing in the input
kalam[0].addEventListener('input', myfunction)

/* in the function below, targetting the values of the targetted elements and putting the code text in the value of textarea */
function myfunction() {

    kalam = document.querySelectorAll(".input_parent input")
    for(let i = 0; i <= kalam.length-1; i++){
        kalam[i].addEventListener('input', myfunction)
    }

    // generated code inside elements
    // for paragraph
    let waqiya_paragraph = document.querySelectorAll(".kalam_pg_quates_ul li q")
    for(let i = 0; i <= waqiya_paragraph.length-1; i++){
        waqiya_paragraph[i].innerHTML = kalam[i].value
    }

    let mycode = document.querySelector("#mycode")
    let generate_code = waqiyat_section_code.innerHTML

    mycode.value = generate_code
}
myfunction()

// adding neccesory elements
let kalam_pg = document.querySelector(".kalam_pg_quates_ul")
let input_parent = document.querySelector(".input_parent")

let add_btn = document.querySelector(".add_input")
let remove_btn = document.querySelector(".remove")

add_btn.addEventListener('click', function(e){
    e.preventDefault()
    add_input_and_p()
    myfunction()
})
remove_btn.addEventListener('click', function(e){
    e.preventDefault()
    remove_input_and_p()
    myfunction()
})

function add_input_and_p() {
    let input = document.createElement("input")
    let li = document.createElement("li")
    
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'kalam')
    li.innerHTML = "<q></q>"

    input_parent.appendChild(input)
    kalam_pg.append("    ")
    kalam_pg.appendChild(li)
    kalam_pg.append("\n")
}
function remove_input_and_p() {
    let input = document.querySelector(".input_parent input:last-child")
    let li = document.querySelector(".kalam_pg_quates_ul li:last-child")
    input.remove()
    li.remove()
}


/* copieng the value inside the textarea using the copy_btn */
form.addEventListener('submit', function(e){
    e.preventDefault()
    copy_the_code()
})
  
/* below is the function which can, when run copy the value of targetted element */
function copy_the_code() {
    /* Get the text field */
    var copyText = document.getElementById("mycode");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}