// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-recipe-form');
    const recipeList = document.getElementById('recipes');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const ingredients = document.getElementById('ingredients').value;
        
        fetch('/add_recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, ingredients }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const li = document.createElement('li');
                li.textContent = `${name}: ${ingredients}`;
                recipeList.appendChild(li);
                form.reset();
            } else {
                alert('Error adding recipe');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
