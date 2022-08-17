let questionTag = document.getElementById('questionTag')
let nextButton = document.getElementById('nextBtn')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let selectedImage = document.getElementById('selectedImage')
let answerButton = document.getElementById('answer')
let randomIndex 


randomize()


function randomize() {

  randomIndex = Math.floor(Math.random() * 35)

  if (randomIndex === 0) {
    selectedImage.src = 'images/cat.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Cat'
    option2.innerText = 'B: Rat'
    option3.innerText = 'C: Hyena'
  } else if (randomIndex === 1) {
    selectedImage.src = 'images/cow.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Rhino'
    option2.innerText = 'B: Cow'
    option3.innerText = 'C: Buffalo'
  } else if (randomIndex === 2) {
    selectedImage.src = 'images/horse.jpeg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Donkey'
    option2.innerText = 'B: Bear'
    option3.innerText = 'C: Horse'
  } else if (randomIndex === 3) {
    selectedImage.src = 'images/dog.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Cheetah'
    option2.innerText = 'B: Leopard'
    option3.innerText = 'C: Dog'
  } else if (randomIndex === 4) {
    selectedImage.src = 'images/zebra.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Hen'
    option2.innerText = 'B: Zebra'
    option3.innerText = 'C: Gazelle'
  } else if (randomIndex === 5) {
    selectedImage.src = 'images/lion.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Lion'
    option2.innerText = 'B: Bear'
    option3.innerText = 'C: Zebra'
  } else if (randomIndex === 6) {
    selectedImage.src = 'images/elephant.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Elephant'
    option2.innerText = 'B: Rhino'
    option3.innerText = 'C: Horse'
  } else if (randomIndex === 7) {
    selectedImage.src = 'images/rat.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Cat'
    option2.innerText = 'B: Rat'
    option3.innerText = 'C: Wasp'
  } else if (randomIndex === 8) {
    selectedImage.src = 'images/bee.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Wasp'
    option2.innerText = 'B: Bee'
    option3.innerText = 'C: Spider'
  } else if (randomIndex === 9) {
    selectedImage.src = 'images/hen.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Duck'
    option2.innerText = 'B: Hen'
    option3.innerText = 'C: Fish'
  } else if (randomIndex === 10) {
    selectedImage.src = 'images/leopard.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Cheetah'
    option2.innerText = 'B: Rhino'
    option3.innerText = 'C: Leopard'
  } else if (randomIndex === 11) {
    selectedImage.src = 'images/cheetah.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Cheetah'
    option2.innerText = 'B: Leopard'
    option3.innerText = 'C: Bear'
  } else if (randomIndex === 12) {
    selectedImage.src = 'images/donkey.jpeg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Horse'
    option2.innerText = 'B: Donkey'
    option3.innerText = 'C: Elephant'
  } else if (randomIndex === 13) {
    selectedImage.src = 'images/wasp.png'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Wasp'
    option2.innerText = 'B: Bee'
    option3.innerText = 'C: Duck'
  } else if (randomIndex === 14) {
    selectedImage.src = 'images/bear.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Bear'
    option2.innerText = 'B: Lion'
    option3.innerText = 'C: Zebra'
  } else if (randomIndex === 15) {
    selectedImage.src = 'images/rhino.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Elephant'
    option2.innerText = 'B: Rhino'
    option3.innerText = 'C: Buffalo'
  } else if (randomIndex === 16) {
    selectedImage.src = 'images/duck.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Hen'
    option2.innerText = 'B: Fish'
    option3.innerText = 'C: Duck'
  } else if (randomIndex === 17) {
    selectedImage.src = 'images/spider.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Bee'
    option2.innerText = 'B: Rat'
    option3.innerText = 'C: Spider'
  } else if (randomIndex === 18) {
    selectedImage.src = 'images/snake.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Wasp'
    option2.innerText = 'B: Spider'
    option3.innerText = 'C: Snake'
  } else if (randomIndex === 19) {
    selectedImage.src = 'images/hyena.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Hen'
    option2.innerText = 'B: Hyena'
    option3.innerText = 'C: Monkey'
  } else if (randomIndex === 20) {
    selectedImage.src = 'images/fish.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Duck'
    option2.innerText = 'B: Fish'
    option3.innerText = 'C: Hen'
  } else if (randomIndex === 21) {
    selectedImage.src = 'images/buffalo.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Cow'
    option2.innerText = 'B: Buffalo'
    option3.innerText = 'C: Elephant'
  } else if (randomIndex === 22) {
    selectedImage.src = 'images/monkey.jpg'
    questionTag.innerText = 'Which animal is this?'
    option1.innerText = 'A: Hyena'
    option2.innerText = 'B: Donkey'
    option3.innerText = 'C: Monkey'
  } else if (randomIndex === 23) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'red'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Red'
    option2.innerText = 'B: Orange'
    option3.innerText = 'C: Maroon'
  } else if (randomIndex === 24) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'blue'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Green'
    option2.innerText = 'B: Blue'
    option3.innerText = 'C: Purple'
  } else if (randomIndex === 25) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'green'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Gray'
    option2.innerText = 'B: Yellow'
    option3.innerText = 'C: Green'
  } else if (randomIndex === 26) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'yellow'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Yellow'
    option2.innerText = 'B: Pink'
    option3.innerText = 'C: Orange'
  } else if (randomIndex === 27) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'black'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Blue'
    option2.innerText = 'B: Gray'
    option3.innerText = 'C: Black'
  } else if (randomIndex === 28) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'pink'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Maroon'
    option2.innerText = 'B: Pink'
    option3.innerText = 'C: Purple'
  } else if (randomIndex === 29) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'purple'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Pink'
    option2.innerText = 'B: Orange'
    option3.innerText = 'C: Purple'
  } else if (randomIndex === 30) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'orange'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Yellow'
    option2.innerText = 'B: Orange'
    option3.innerText = 'C: Purple'
  } else if (randomIndex === 31) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'brown'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Brown'
    option2.innerText = 'B: Orange'
    option3.innerText = 'C: Yellow'
  } else if (randomIndex === 32) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'white'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Gray'
    option2.innerText = 'B: White'
    option3.innerText = 'C: Orange'
  } else if (randomIndex === 33) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'maroon'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: Brown'
    option2.innerText = 'B: Orange'
    option3.innerText = 'C: Maroon'
  } else if (randomIndex === 34) {
    selectedImage.src = ''
    selectedImage.style.backgroundColor = 'gray'
    questionTag.innerText = 'Which color is this?'
    option1.innerText = 'A: White'
    option2.innerText = 'B: Black'
    option3.innerText = 'C: Gray'
  }

  option1.style.backgroundColor = 'black'
  option2.style.backgroundColor = 'black'
  option3.style.backgroundColor = 'black'
}


function changeBg() {
  if (randomIndex === 0) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 1) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 2) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 3) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 4) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 5) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 6) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 7) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 8) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 9) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 10) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 11) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 12) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 13) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 14) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 15) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 16) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 17) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 18) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 19) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 20) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 21) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 22) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 23) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 24) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 25) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 26) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 27) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 28) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 29) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 30) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 31) {
    option1.style.backgroundColor = 'green'
  } else if (randomIndex === 32) {
    option2.style.backgroundColor = 'green'
  } else if (randomIndex === 33) {
    option3.style.backgroundColor = 'green'
  } else if (randomIndex === 34) {
    option3.style.backgroundColor = 'green'
  }

}


answerButton.addEventListener('click', changeBg)

nextButton.addEventListener('click', randomize)


