let myInterval

const startChrono = () => {
  let start = new Date().getTime()
  let now, elapsed, d, h, m, s, ms, format

  myInterval = setInterval(function() {
    now = new Date().getTime()
    elapsed = now - start
    s = Math.floor(elapsed % 6000 / 1000)
    ms =Math.floor(elapsed % 1000)
    format = ("0" + s).slice(-2) + "." + ("00" + ms).slice(-3)
    document.getElementById("chrono").innerHTML = format
    
  }, 1)
}

const stopChrono = () => {
  clearInterval(myInterval)
}