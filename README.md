# PH12A5

A website design to list the different emergency service numbers in Bangladesh.

**Note:**  
The website has been made responsive for the **iPhone 14 Pro Max**.

---

## Answers to the Challenge Questions

### 1. Selecting Elements
- **`getElementById("id")`** → grabs **one element** by its ID.  
- **`getElementsByClassName("class")`** → grabs **all elements** with a class (live HTMLCollection).  
- **`querySelector("selector")`** → grabs the **first element** matching a CSS selector.  
- **`querySelectorAll("selector")`** → grabs **all elements** matching a CSS selector (static NodeList).  

### 2. Creating & Inserting Elements
```js
const newEl = document.createElement("p"); // create
newEl.textContent = "Hello World!";       // set text
document.body.appendChild(newEl);         // insert at the end of body
```
