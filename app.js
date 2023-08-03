turkishFoods = document.querySelector(".turkish-foods");
const TURKISH_FOODS = [
    {
        id: 0,
        src: "Images/karniyarik.jpg",
        desc: "Karnıyarık"
    },
    {
        id: 1,
        src: "Images/baklava.jpg",
        desc: "Baklava"
    },
    {
        id: 2,
        src: "Images/iclikofte.jpg",
        desc: "İçli Köfte"
    },
    {
        id: 3,
        src: "Images/siskebab.jpg",
        desc: "Şiş Kebap"
    },
    {
        id: 4,
        src: "Images/yapraksarmasi.jpg",
        desc: "Yaprak Sarması"
    }
];
TURKISH_FOODS.forEach(ShowFoods);

function ShowFoods(food) {
    CreateDOM();
    function CreateDOM() {
        let foodItem = document.createElement("div");

        foodItem.classList.add("card");
        foodItem.style.backgroundImage = `url(${food.src})`;
        console.log(foodItem);
        turkishFoods.append(foodItem);

        foodItem.addEventListener("click", ExpandFoods);
        function ExpandFoods() {
            turkishFoods.querySelectorAll(".card-desc").forEach((desc) => {
                desc.remove();
              });
            let foodID = food.id;
            console.log(foodID);
            switch (foodID) {
                case 0:
                    foodItem.classList.add("show-card");
                    FoodDesc();
                    break;
                case 1:
                    foodItem.classList.add("show-card");
                    FoodDesc();
                    break;
                case 2:
                    foodItem.classList.add("show-card");
                    FoodDesc();
                    break;
                case 3:
                    foodItem.classList.add("show-card");
                    FoodDesc();
                    break;
                case 4:
                    foodItem.classList.add("show-card");
                    FoodDesc();
                    break;
            }
            TURKISH_FOODS.forEach(Remove);
            function Remove(item) {
                foodID = item.id;
                let itemFoodItem = turkishFoods.children[foodID];
                if (itemFoodItem !== foodItem) {
                    itemFoodItem.classList.remove("show-card");
                }

            };
            function FoodDesc() {
                let foodDesc = document.createElement("h1");
                foodDesc.classList = "card-desc";
                foodDesc.innerText = `${food.desc}`
                foodItem.append(foodDesc);
            }
        }
    }
}
