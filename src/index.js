import "./styles.css"

class Task{
    constructor(taskTitle,taskDescription,dueDate,priority){
        // {taskTitle, taskDescription, dueDate, priority}
        let completeStatus=false
        this.taskTitle=taskTitle
        this.taskDescription=taskDescription
        this.dueDate=dueDate
        this.priority=priority
    }
    toggleCompleteStatus = () => this.completeStatus? this.completeStatus=false : this.completeStatus = true
    getStatus = () => this.completeStatus
    togglePriority = () => this.priority? this.priority=false : this.priority = true
    getPriority = () => this.priority
}

class Project{
    constructor(title){
        let taskList = []
        this.projectTitle=title
    }
    addTask = (taskTitle,taskDescription,dueDate,priority) => this.taskList.push(new Task(taskTitle,taskDescription,dueDate,priority))
    deleteTask = (Task) => taskList.splice(taskList.indexOf(Task),1)
    projectDisplay= console.log()
}


const newProject = new Project(Gaming)
const newTask= new Task('Lies of P', 'finish it', 'today', 'high')
console.log(newTask)
newTask.shoutout()

