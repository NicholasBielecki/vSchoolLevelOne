var result = document.querySelectorAll("#span1");
console.log(result)

for (var i = 0; i< result.length; i++) {
    result[i].textContent = "** REDACTED **"
}