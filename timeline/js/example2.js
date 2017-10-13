window.addEventListener('load', function () {
  document.querySelector('#btn').addEventListener('click', function () {
    let count = 1000

    // document.querySelector('#wrap').innerHTML = ''

    let str = ''
    while (count--) {
      // document.querySelector('#wrap').innerHTML += `<p>${count}</p>`
      str += `<p>${count}</p>`
    }

    document.querySelector('#wrap').innerHTML = str
  })
})
