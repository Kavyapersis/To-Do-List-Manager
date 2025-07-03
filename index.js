@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');


* {
    box-sizing: border-box;
}

.bg-container {
    font-family: "Roboto";
    background-color: #f5f6fa;
    margin: 0;
    padding: 20px;
}

.todo-container {
    max-width: 600px;
    margin: auto;
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 2px 10px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 12px;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
}

select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
}

button {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    background-color: #3b82f6;
    color: white;
    cursor: pointer;
}


.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 10px 0;
    border-radius: 8px;
    background: #f1f5f9;
    border-left: 5px solid;
}

.task.overdue {
    border-color: red;
    background: #fee2e2;
}

.task.completed {
    text-decoration: line-through;
    opacity: 0.6;
}

.badge {
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 6px;
    margin-left: 6px;
}

.priority-High {
    background: red;
    color: white;
}

.priority-Medium {
    background: orange;
    color: white;
}

.priority-Low {
    background: green;
    color: white;
}

.task-buttons button {
    margin-left: 6px;
    background: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.filters {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    gap: 10px;
}

.filters select {
    flex: 1;
}

.deadline-note {
    font-size: 12px;
    margin-top: 2px;
    color: #555555;
}