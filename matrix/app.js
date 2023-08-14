import { Column } from "./column.js";
const canvas = document.getElementById("field");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const Font_Size = 16; //Задаём выосту букв
const colums = []; //Создаём массив в который помещаем наши буквы
const columsCount = canvas.width / Font_Size; // Делим всю ширину на ширину одной буквы, чтобы получились столбцы
for (let i = 0; i < columsCount; i++) { //Проходимся по каждлму столбцу и создаём в нем дочерний класс от глобально Column 
  colums.push(new Column(i * Font_Size, Font_Size, canvas.height, context));
}
context.font = `bold ${Font_Size}px monospace`; // Стиль букв

const column = new Column(100, Font_Size, canvas.height, context); // Создаёт дочерний класс, от глобального Colums

function animate() {
  //Создаём функцию анимации, в которой с помощью метода forEach проходимся по каждому столбцу и применяем к нему эту функцию
  context.fillStyle = "rgba(0, 0, 0, 0.05)"; // Делает анимацию, пердыдущая буква скрывается не полностью
  context.fillRect(0, 0, canvas.width, canvas.height); // Создаём прямоуголник, который при каждом вызове функции будет закрывать предыдущую букву. Т.е появилась, скрылась.
  context.fillStyle = "green"; // Цвет букв 
  colums.forEach((column) => column.drawSymbol()); //Проходим с помощью метода forEach по каждому столбцу
  setTimeout(() => requestAnimationFrame(animate), 50); //Создаёт анимацию падающей буквы
}
animate();
