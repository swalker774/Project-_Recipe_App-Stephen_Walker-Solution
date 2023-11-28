import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({ ...initialFormState })
 
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({  ...formData, [name]: value })
  }
  
  const handleSubmit = (event) => {
   event.preventDefault()
    addRecipe(formData)
    setFormData({  ...initialFormState })
  }
  
  return (
    <form data-testid= "recipe-form" onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
            <input 
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              />
            </td>
            <td>
              <input 
                name="cuisine"
                type="text"
                value={formData.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
                required
                />
            </td>
            <td>
              <input
                name="photo"
                type="text"
                value={formData.photo}
                onChange={handleChange}
                placeholder="URL"
                required
                />
            </td>
            <td className="content_td">
              <textarea
                name="ingredients"
                type="text"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
                required
                />
            </td>
            <td className="content_td">
              <textarea
                name="preparation"
                type="text"
                value={formData.preparation}
                onChange={handleChange}
                placeholder="preparation"
                required
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
