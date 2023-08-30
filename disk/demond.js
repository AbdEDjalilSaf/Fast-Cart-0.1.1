let contryMenu = document.querySelector(".contry");
let move = document.querySelector(".display");
contryMenu.addEventListener("click",(e)=>{
document.querySelector(".display").classList.toggle("none");
});
/* ----------------------- global language hidden ------------------------*/
let coldu = document.querySelector(".coldu");

let allLangue = document.querySelectorAll(".state");
allLangue.forEach((key)=>{
key.addEventListener("click",(ele)=>{
    console.log(coldu.innerHTML)
    console.log(key.innerHTML)
    coldu.innerHTML = key.innerHTML;
    console.log("def");
});
});
/*--------------------------------- Dollar -------------------------------------*/
let doller = document.querySelector(".doller");
let responsif = document.querySelector(".responsif");
doller.addEventListener("click",(e)=>{
document.querySelector(".responsif").classList.toggle("none");
});
/* ----------------------- global language hidden ------------------------*/
let uppercase = document.querySelector(".uppercase");

let algdoller = document.querySelectorAll(".algdoller");
algdoller.forEach((key)=>{
key.addEventListener("click",(ele)=>{
    console.log(coldu.innerHTML)
    console.log(key.innerHTML)
    uppercase.innerHTML = key.innerHTML;
    console.log("def");
});
});
/*-----------  block hidden search -----------*/
document.querySelector(".miave").addEventListener("click",()=>{
    document.querySelector(".height").classList.remove("none");
});

/*-----------  none hidden search -----------*/
document.querySelector(".remove").addEventListener("click",()=>{
    document.querySelector(".height").classList.add("none");
});

/*-------------------- shopping menu  -----------------------*/
document.querySelector(".kiap").addEventListener("click",()=>{
document.querySelector(".fast").classList.toggle("paddtop");
document.querySelector(".fast").classList.toggle("opacity");
});
// document.querySelector(".kiap").addEventListener("mouseleave",()=>{
//     document.querySelector(".fast").classList.toggle("none");
//     document.querySelector(".fast").classList.toggle("paddtop");
// });
document.addEventListener("click",(ek)=>{
    if(ek.target.id != "kiap" && ek.target.id != "fast"){
        document.querySelector(".fast").classList.remove("paddtop");
        document.querySelector(".fast").classList.add("opacity");
    }
});
/*-------------------- user menu  -----------------------*/
document.querySelector(".seal").addEventListener("click",()=>{
    document.querySelector(".box").classList.toggle("paddtop");
    document.querySelector(".box").classList.toggle("opacity");
});
// document.querySelector(".seal").addEventListener("mouseleave",()=>{
//     document.querySelector(".box").classList.toggle("none");
//     document.querySelector(".box").classList.toggle("paddtop");
// });
document.addEventListener("click",(e)=>{
    if(e.target.id != "seal" && e.target.id != "box"){
        document.querySelector(".box").classList.remove("paddtop");
        document.querySelector(".box").classList.add("opacity");}
});
/*-------------------- hidden location menu  -----------------------*/
document.querySelector(".appel").addEventListener("click",()=>{
    document.querySelector(".location").classList.toggle("paddttom");
    document.querySelector(".location").classList.toggle("opacity");
    document.querySelector(".element").classList.toggle("opacity");
});

document.addEventListener("click",(el)=>{
if(el.target.id != "appel" && el.target.id != "location"){
    document.querySelector(".location").classList.add("opacity");
    document.querySelector(".location").classList.remove("paddttom");
    document.querySelector(".element").classList.add("opacity");
}
});
document.querySelector(".removelocate").addEventListener("click",()=>{
    document.querySelector(".location").classList.add("opacity");
    document.querySelector(".location").classList.remove("paddttom");
    document.querySelector(".element").classList.add("opacity");
});
/*-------------------- hidden categories menu  -----------------------*/
document.querySelector(".green").addEventListener("click",()=>{
    document.querySelector(".categories").classList.toggle("none");
    document.querySelector(".categories").classList.toggle("souse");
});

/*-------------------- hidden vegetables & fruit menu  -----------------------*/
document.querySelector(".vegetab").addEventListener("click",()=>{
document.querySelector(".cordWidth").classList.toggle("corleft");  
document.querySelector(".cordWidth").classList.toggle("opacity");  
});

document.addEventListener("click",(ek)=>{
    if(ek.target.id != "vegetab" && ek.target.id != "cordWidth"){
        document.querySelector(".cordWidth").classList.remove("corleft");
        document.querySelector(".cordWidth").classList.add("opacity");    
}
});

/*-------------------- hidden beverages menu  -----------------------------*/
document.querySelector(".beverages").addEventListener("click",()=>{
document.querySelector(".corHeight").classList.toggle("corleft");
document.querySelector(".corHeight").classList.toggle("opacity");  

});

document.addEventListener("click",(ek)=>{
    if(ek.target.id != "beverages" && ek.target.id != "corHeight"){
        document.querySelector(".corHeight").classList.remove("corleft"); 
        document.querySelector(".corHeight").classList.add("opacity");   
}
});

/*-------------------- hidden meat seafood  menu  -----------------------------*/
document.querySelector(".meat").addEventListener("click",()=>{
document.querySelector(".cordThird").classList.toggle("corleft");  
document.querySelector(".cordThird").classList.toggle("opacity");  
    
});
    
document.addEventListener("click",(ek)=>{
if(ek.target.id != "meat" && ek.target.id != "cordThird"){
        document.querySelector(".cordThird").classList.remove("corleft"); 
        document.querySelector(".cordThird").classList.add("opacity");   
}
});

/*-------------------- hidden brackfast  menu  -----------------------------*/
document.querySelector(".brackfast").addEventListener("click",()=>{
document.querySelector(".cordFourth").classList.toggle("corleft");
document.querySelector(".cordFourth").classList.toggle("opacity");  
        
});
        
document.addEventListener("click",(ek)=>{
if(ek.target.id != "brackfast" && ek.target.id != "cordFourth"){
        document.querySelector(".cordFourth").classList.remove("corleft"); 
        document.querySelector(".cordFourth").classList.add("opacity");   
}
});

/*-------------------- hidden frozen menu  -----------------------------*/
document.querySelector(".frozen").addEventListener("click",()=>{
document.querySelector(".cordFifth").classList.toggle("corleft");  
document.querySelector(".cordFifth").classList.toggle("opacity");  
    
});
    
document.addEventListener("click",(ek)=>{
if(ek.target.id != "frozen" && ek.target.id != "cordFifth"){
        document.querySelector(".cordFifth").classList.remove("corleft");  
        document.querySelector(".cordFifth").classList.add("opacity");  
}
});
    
/*-------------------- hidden frozen menu  -----------------------------*/
document.querySelector(".biscuiits").addEventListener("click",()=>{
document.querySelector(".cordSixth").classList.toggle("corleft"); 
document.querySelector(".cordSixth").classList.toggle("opacity");  
        
});
        
document.addEventListener("click",(ek)=>{
if(ek.target.id != "biscuiits" && ek.target.id != "cordSixth"){
        document.querySelector(".cordSixth").classList.remove("corleft"); 
        document.querySelector(".cordSixth").classList.add("opacity");   
}
});

/*-------------------- hidden staples menu  -----------------------------*/
document.querySelector(".staples").addEventListener("click",()=>{
document.querySelector(".cordSeventh").classList.toggle("corleft");  
document.querySelector(".cordSeventh").classList.toggle("opacity");  
            
});
            
document.addEventListener("click",(ek)=>{
if(ek.target.id != "staples" && ek.target.id != "cordSeventh"){
        document.querySelector(".cordSeventh").classList.remove("corleft");  
        document.querySelector(".cordSeventh").classList.add("opacity");  
}
});

/*-------------------- hidden home short menu  -----------------------------*/
document.querySelector(".homeLink").addEventListener("click",()=>{
document.querySelector(".home").classList.toggle("homeBlock");  
document.querySelector(".home").classList.toggle("opacity");  
});
                
document.addEventListener("click",(ek)=>{
if(ek.target.id != "homeLink" && ek.target.id != "home"){
        document.querySelector(".home").classList.remove("homeBlock");  
        document.querySelector(".home").classList.add("opacity");  
}
});

/*-------------------- hidden shop short menu  -----------------------------*/
document.querySelector(".shopLink").addEventListener("click",()=>{
document.querySelector(".shop").classList.toggle("homeBlock");  
document.querySelector(".shop").classList.toggle("opacity");  
});
                  
document.addEventListener("click",(ek)=>{
if(ek.target.id != "shopLink" && ek.target.id != "shop"){
        document.querySelector(".shop").classList.remove("homeBlock");  
        document.querySelector(".shop").classList.add("opacity");  
}
});

/*-------------------- hidden product short menu  -----------------------------*/
document.querySelector(".productLink").addEventListener("click",()=>{
document.querySelector(".product").classList.toggle("homeBlock");  
document.querySelector(".product").classList.toggle("opacity");  
});
                        
document.addEventListener("click",(ek)=>{
if(ek.target.id != "productLink" && ek.target.id != "product" && ek.target.id != "productMenu"){
        document.querySelector(".product").classList.remove("homeBlock");  
        document.querySelector(".product").classList.add("opacity");  
}
});

/*-------------------- hidden small product short menu  -----------------------------*/
document.querySelector(".productMenu").addEventListener("click",()=>{
document.querySelector(".productshort").classList.toggle("productShortBlock");  
document.querySelector(".productshort").classList.toggle("opacity"); 
document.querySelector(".productSvg").classList.toggle("honer");
});
                            
document.addEventListener("click",(ek)=>{
if(ek.target.id != "productMenu" && ek.target.id != "productshort"){
        document.querySelector(".productshort").classList.remove("productShortBlock"); 
        document.querySelector(".productSvg").classList.remove("honer"); 
        document.querySelector(".productshort").classList.add("opacity");  
}
});













