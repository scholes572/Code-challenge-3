# 🏗️ The Upcoming of a Building

This is a beginner-friendly blog web application that showcases the progress of a building project. Users can view, add, and (soon) edit or delete posts related to each construction milestone. The frontend is built with vanilla HTML, CSS, and JavaScript. The backend runs on `json-server` to simulate a RESTful API.

---

## 🚀 Features

- 📄 View blog posts with images, titles, and descriptions
- ➕ Add new posts through a form
- 🔧 Edit and delete functionality (in progress)
- 🎨 Basic styling with CSS
- 🔌 Fetches data from a local `json-server`

---

## 📁 Project Structure


---

## 🧪 Sample Data (`db.json`)

Here are the initial 5 blog posts stored in `db.json`:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Groundbreaking Ceremony",
      "content": "We officially broke ground on the site today. Exciting times ahead!",
      "author": "Agostino Scholes & Team",
      "image": "data:image/jpeg;base64,..."
    },
    {
      "id": 2,
      "title": "Foundation Work Begins",
      "content": "Excavation and laying of the building’s foundation is now underway.",
      "author": "Agostino Scholes & Team",
      "image": "https://cdn.shopify.com/...jpg"
    },
    {
      "id": 3,
      "title": "Structural Framing",
      "content": "Steel framing is going up quickly. The skeleton of the building is taking shape.",
      "author": "Agostino Scholes & Team",
      "image": "https://www.shutterstock.com/...jpg"
    },
    {
      "id": 4,
      "title": "Electrical and Plumbing Installations",
      "content": "Our crews have started roughing in the electrical wiring and plumbing systems.",
      "author": "Agostino Scholes & Team",
      "image": "https://www.shutterstock.com/...jpg"
    },
    {
      "id": 5,
      "title": "Roofing Completed",
      "content": "The roof is now complete! We are safe from the elements and moving to interior finishes.",
      "author": "Agostino Scholes & Team",
      "image": "https://encrypted-tbn0.gstatic.com/...jpg"
    }
  ]
}
json-server --watch db.json


