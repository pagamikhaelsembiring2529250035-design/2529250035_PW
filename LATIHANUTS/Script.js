const container = document.getElementById('categories');

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(Response => Response.json())
  .then(data => {
    container.innerHTML = '';               // clear spinner
    data.categories.forEach(Response => { // ada array
      const col = document.createElement('div');
      col.className = 'col-md-4 d-flex';

      col.innerHTML = `
        <div class="card mb-4 flex-fill">
          <img src="${Response.strCategoryThumb}" class="card-img-top" alt="${Response.strCategory}">
          <div class="card-body">
            <h5 class="card-title text-success">${Response.strCategory}</h5>
            <p class="card-text">${Response.strCategoryDescription}</p>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  })
  