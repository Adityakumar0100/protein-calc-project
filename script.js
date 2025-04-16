// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Food items with their protein values and serving types
const foodData = {
    Roti: { protein: 3, unit: "piece" },
    Rice: { protein: 2.7, unit: "100g" },
    Egg: { protein: 6, unit: "piece" },
    Chicken: { protein: 27, unit: "100g" },
    Fish: { protein: 22, unit: "100g" },
    Milk: { protein: 8, unit: "250ml" },
    Dal: { protein: 9, unit: "100g" },
    Drumstick: { protein: 2.5, unit: "100g" },
    Broccoli: { protein: 2.8, unit: "100g" },
    Mushrooms: { protein: 3.1, unit: "100g" },
    Chickpeas: { protein: 19, unit: "100g" },
    Rajma: { protein: 8.7, unit: "100g" },
    Greenbeans: { protein: 1.8, unit: "100g" },
    Prawns: { protein: 20, unit: "100g" },
    Paneer: { protein: 18, unit: "100g" },
    Soyabean: { protein: 36, unit: "100g" },
    Peanuts: { protein: 26, unit: "100g" },
    Almonds: { protein: 21, unit: "100g" },
    Walnuts: { protein: 15, unit: "100g" },
    Cashew: { protein: 18, unit: "100g" },
    Yogurt: { protein: 10, unit: "cup" },
    Banana: { protein: 1.3, unit: "piece" },
    Berries: { protein: 1.4, unit: "100g" },
    Porridge: { protein: 2.5, unit: "100g" },
    Sooji: { protein: 12, unit: "100g" },
    Oats: { protein: 13, unit: "100g" },
    Papaya: { protein: 0.5, unit: "100g" },
    "Chia seeds": { protein: 4, unit: "25g" },
    "Green vegetables": { protein: 2, unit: "100g" },
    "Sesame seeds": { protein: 18, unit: "100g" },
  };
  
  let selectedFoods = [];
  const cards = document.querySelectorAll(".card");
  const selectedList = document.createElement("div");
  selectedList.className = "selected-list";
  document.body.appendChild(selectedList);
  const totalProteinDisplay = document.createElement("h2");
  totalProteinDisplay.innerHTML =
    "Total Protein: <span id='totalProtein'>0</span> g";
  document.body.appendChild(totalProteinDisplay);
  
  // Function to add food to selected list and highlight the card
  function addFood(foodName, cardElement) {
    const existingItem = selectedFoods.find((item) => item.name === foodName);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      selectedFoods.push({
        name: foodName,
        protein: foodData[foodName].protein,
        quantity: 1,
        unit: foodData[foodName].unit,
      });
  
      // Add highlight class to selected card
      cardElement.classList.add("selected");
    }
  
    updateSelectedList();
  }
  
  // Function to update the selected list display
  function updateSelectedList() {
    selectedList.innerHTML = "<h2>Selected Foods:</h2>";
    selectedFoods.forEach((food, index) => {
      const div = document.createElement("div");
      div.innerHTML = `${food.name} - <input type="number" value="${food.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"> ${food.unit}`;
      selectedList.appendChild(div);
    });
    calculateProtein();
  }
  
  // Function to update quantity of selected items
  function updateQuantity(index, quantity) {
    selectedFoods[index].quantity = parseInt(quantity);
    calculateProtein();
  }
  
  // Function to calculate total protein intake
  function calculateProtein() {
    let totalProtein = selectedFoods.reduce(
      (sum, food) => sum + food.protein * food.quantity,
      0
    );
    document.getElementById("totalProtein").textContent = totalProtein;
  }
  
  // Add click event to all cards
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const foodName = this.querySelector(".card-title").innerText;
      addFood(foodName, this);
    });
  });
//code for select or unselect item
  function addFood(foodName, cardElement) {
    const index = selectedFoods.findIndex(item => item.name === foodName);
    if (index !== -1) {
        selectedFoods.splice(index, 1);
        cardElement.classList.remove("selected"); 
    } else {
        selectedFoods.push({
            name: foodName,
            protein: foodData[foodName].protein,
            quantity: 1,
            unit: foodData[foodName].unit,
        });
        cardElement.classList.add("selected");
    }
    updateSelectedList();
}