# app.py
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

recipes = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_recipe', methods=['POST'])
def add_recipe():
    data = request.get_json()
    name = data.get('name')
    ingredients = data.get('ingredients')
    
    if not name or not ingredients:
        return jsonify({'success': False}), 400
    
    recipes.append({'name': name, 'ingredients': ingredients})
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
