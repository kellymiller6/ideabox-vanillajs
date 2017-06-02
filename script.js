const titleInput = document.querySelector('.title-input')
const bodyInput = document.querySelector('.body-input')
const deleteButton = document.querySelector('#delete-btn')
const submitBtn = document.querySelector('.button-input')
const parent = document.querySelector('#div1')

submitBtn.addEventListener('click', () => {
  var kid = document.createElement("div");
  var title = titleInput.value
  var body = bodyInput.value
  var result = cardContent(title, body)
  console.log('clicked');
  addCard(result, kid)
  bodyInput.value = ''
  titleInput.value = ''
})

const deleteCard = (id) => {
  const cardToDelete = document.getElementById(`${id}`)
  cardToDelete.remove()
}

const addCard = (result, kid) => {
  parent.insertBefore(kid, parent.firstChild)
  parent.firstChild.innerHTML = result
}

const cardContent = (title, body) => {
  const id = Date.now()
  const card = `<div class='card' id=${id}>
  <p>Title: <span contentEditable='true'> ${title}</span></p>
  <p>Body: <span contentEditable='true'>${body}</span></p>
  <button class='delete-btn' onclick='deleteCard(${id})'>delete</button>
  </div>`
  return card
}
