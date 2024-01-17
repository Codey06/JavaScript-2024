document.getElementById("b").addEventListener("click", dhacwac)
var tables = document.getElementById("tab")
function dhacwac() {
  let data = ""
  for (i = 0; i < tables.rows.length; i++) {
    data += `ID:  ${tables.rows[i].cells[0].innerHTML} Name:  ${tables.rows[i].cells[1].innerHTML} Marks:  ${tables.rows[i].cells[2].innerHTML}<br>`
  }
  console.log(data)
  document.getElementById("arag").innerHTML = data

  //   var tabContent = document.getElementById("tab").textContent
  //   alert(tabContent.length)
  //   alert(document.getElementById("tab").rows.length)
}
