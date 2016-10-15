function template() {
    let name = 'Chuanshi'
    let hobby = 'skate board'
    let dataArr = ['squash', 'basketball', 'football']
    let parentNode = document.querySelector('.template')
    parentNode.innerHTML = `
<ul>
    <li>${name}</li>
    <li>${hobby}</li>
</ul>
`.trim()
}
template()
