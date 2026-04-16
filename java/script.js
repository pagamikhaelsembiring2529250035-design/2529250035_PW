//output console
console.log("pesan ini tampil di console browser")

// output alret
alert("Selamat datang")

// output innerHTM
document.getElementById("nama").innerHTML = "Paga Mikhael Sembiring"

//variabel
let pesan = "Belajar JavaScript Seru"
document.getElementById("pesan").innerHTML = pesan

//array
let kompetensi = ["Fullstack", "Project Manager","UI/UX"]
document.getElementById("kompetensi").innerHTML = kompetensi[2]

//perulangan
//fore
kompetensi.forEach(element => {

    //cara pertama
    document.getElementById("kompetensi").innerHTML += `<li>${element} </li>`

// cara ke dua4

// document.getElementById("kompetensi").innerHTML += "<li>"+ element +"</li>"
    


});