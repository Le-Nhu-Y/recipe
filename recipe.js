let recipe={
  "title" : "Sườn xào chua ngọt",
  "serving": 2,
    'ingredients':['400g sườn thăn','4 tbsp nước mắm','5 tbsp đường','5 tbsp nước cốt chanh','1/3 bát nước sôi','Hành khô,tỏi, ớt, hành lá','2 quả cà chua','Hành tây(ớt chuông)']
};
console.log('Tên món ăn: '+ recipe.title);
console.log('Khẩu phần: '+recipe.serving);
console.log('Thành phần gồm: ');
for(i=0;i<recipe.ingredients.length;i++){
  console.log(recipe.ingredients[i] + " ");
}
