(() => {
  let now = new Date().valueOf()
  let flag = true
  while (flag) flag = new Date().valueOf() - now < 2000
  console.log('example2')
})()
