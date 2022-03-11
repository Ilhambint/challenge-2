function changetext() {
    document.getElementById("kata1").innerHTML=("Aku mencintai karna kamu baik");

}

function back() {
    document.getElementById("kata1").innerHTML=("Aku membemcimu karna kamu baik");
    
}

function changetext2() {
    document.getElementById("kata2").innerHTML=("Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu");

}

function back2() {
    document.getElementById("kata2").innerHTML=("Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu");
    
}

function changetext3() {
    document.getElementById("kata2").innerHTML=("Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu");
    document.getElementById("kata1").innerHTML=("Aku mencintai karna kamu baik");
}

function back3() {
    document.getElementById("kata2").innerHTML=("Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu");
    document.getElementById("kata1").innerHTML=("Aku membemcimu karna kamu baik");
}


/*Soal 2*/

function ganjilgenap () {
    
    var n = document.getElementById("inputan").value;

    if(n % 2 == 0 )
    document.getElementById("hasilgg").innerHTML = " Genap" 
    else
    document.getElementById("hasilgg").innerHTML = " Ganjil"

}

/*Soal 3*/

function cekmail(){
    var email = document.getElementById("inputemail").value;

    if(email.indexOf("@")!=-1 && email.indexOf(".")!=-1){
        alert("ini adalah email");
        return false;
    }
    
    if (email.indexOf("")!=-1 && email.indexOf("")!=-1) {
        alert("ini bukan email");
        return false;
    }


}

/*Soal 4.*/
function cekpw() {  
    var pw = document.getElementById("password").value;  
      
    if(pw == "") {  
       document.getElementById("Peringatan").innerHTML = "Masukan Password";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("Peringatan").innerHTML = "Masukan Minimal 8 Karakter";  
       return false;  
    }   
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("Peringatan").innerHTML = "Masukan Maximal 15 Karakter";  
       return false;  
    } else {  
       alert("Password Benar");  
    }  

  }  

