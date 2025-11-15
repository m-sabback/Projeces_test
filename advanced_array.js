// const tasks = [
//     { id: 1, title: 'Study Js', completed: true},
//     { id: 2, title: 'Buy Book', completed: false},
//     { id: 3, title: 'Cooking', completed: true},
//     { id: 4, title: 'Read Book', completed: false}
// ]

// function addTask(arr, newTask){
//     return [...arr, newTask]
// }

// function deleteTask(arr, id){
//     return arr.filter(task => task.id !== id)
// }

// function toggleTask(arr, id){
//     return arr.map(task => task.id === id ? {...task, completed: !task.completed} : task)
// }

// function getCompletedTask(arr){
//     return arr.filter(task => task.completed)
// }
// console.log(addTask(tasks, {id:5, title: 'Play', completed: false}))
// console.log(deleteTask(tasks, 1))
// console.log(toggleTask(tasks, 2))
// console.log(getCompletedTask(tasks))


const tasks = [
    {id:1, title: 'Study Js', completed: false},
    {id:2, title: 'Buy new laptop', completed: false},
    {id:3, title: 'Read book', completed: false},
    {id:4, title: 'do Coding', completed: false},
    {id:5, title: 'finsh your home-work', completed: false},
]

function deleteTask(arr, id){
    return arr.filter((task) => task.id !== id)
}

function toggleTask(arr, id){
    return arr.map((task) => task.id === id ? {...task, completed: !task.completed}:task)
}

function getCompletedTask(arr){
    return arr.filter((task) => !task.completed )
}
// console.log(toggleTask(tasks, 1))
// console.log(getCompletedTask(tasks))
console.log(deleteTask(tasks, 5))
