var data = [
    { name: "Книга 1", author: "Автор 1" },
    { name: "Книга 2", author: "Автор 2" },
    { name: "Книга 3", author: "Автор 1" },
    { name: "Книга 4", author: "Автор 3" },
    { name: "Книга 5", author: "Автор 2" }
  ];
  
  function search() {
    var input = document.getElementById("searchInput");
    var query = input.value.toLowerCase();
  
    var results = data.filter(function(item) {
      return item.name.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query);
    });
  
    var resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";
  
    results.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item.name + " - " + item.author;
      resultsList.appendChild(li);
      document.innerHTML(resultsList)
    });
  
    if (results.length === 0) {
      var li = document.createElement("li");
      li.textContent = "Результаты не найдены";
      resultsList.appendChild(li);
      document.innerHTML(resultsList)
    }
    
  }
  
  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", search);