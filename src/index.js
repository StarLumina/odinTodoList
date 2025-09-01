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
    getInfo = () => 
        `task:${this.taskTitle} 
         Details:${this.taskDescription} Due:${this.dueDate} Is priority?:${this.priority}`
}

class Project{
    constructor(title){
        this.taskList = []
        this.projectTitle=title
    }
    addTask = (taskTitle,taskDescription,dueDate,priority) => this.taskList.push(new Task(taskTitle,taskDescription,dueDate,priority))
    deleteTask = (Task) => this.taskList.splice(this.taskList.indexOf(Task),1)
    projectDisplay= ()=> { 
        console.log(`Project:${this.projectTitle}`)
        for (const task of this.taskList){
            if (!task.completeStatus){
                console.log(task.getInfo())
            }
        }
    }
}

let projectList = (function(){
    let listOfProjects=[]
    const addProject=(title)=> listOfProjects.push(new Project(title))
    const getProject = (index) => listOfProjects[index]
    return{addProject, getProject}
})()

projectList.addProject('Gaming')
projectList.getProject(0).addTask('Lies of P', 'finish it', 'today', true)
projectList.getProject(0).addTask('Persona 4','Replay it already', 'yesterday', true)
projectList.getProject(0).projectDisplay()
projectList.getProject(0).taskList[1].toggleCompleteStatus()
projectList.getProject(0).taskList[0].togglePriority()
projectList.getProject(0).projectDisplay()


