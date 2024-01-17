let xyz
xyz = document.getElementsByClassName("dad")
console.log(xyz.length)
var najiito = document.getElementById("res")

for (var i = 0; i < xyz.length; i++) {
  ;((index) => {
    xyz[index].addEventListener("click", () => {
      najiito.innerHTML = xyz[index].innerHTML
    })
  })(i)
}
