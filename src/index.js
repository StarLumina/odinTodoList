import { constructFrom } from "date-fns"
import { add } from "date-fns";
import { format } from "date-fns";
import "./styles.css"

class Task{
    constructor(taskTitle,taskDescription,availableTime,priority){
        // {taskTitle, taskDescription, dueDate, priority}
        const currentDate = new Date()
        let completeStatus=false
        this.taskTitle=taskTitle
        this.taskDescription=taskDescription
        this.dueDate= add(currentDate,{days: availableTime})
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
    getTaskList = () => this.taskList
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
    const addProject = (title)=> listOfProjects.push(new Project(title))
    const getListNames = () => listOfProjects.map((project)=>project.projectTitle)
    const getProject = (index) => listOfProjects[index]
    const assignTask = (projectName) => projectName.addTask()
    return{addProject, getProject, getListNames, assignTask}
})()

let displayController = (function(){
    const projectDisplay= document.getElementById('project')
    const projectTitleList= document.getElementById('projectTitleList')
    const deleteTitleList = () => {while(projectTitleList.firstChild){
        projectTitleList.removeChild(projectTitleList.lastChild)
    }}
    const populateTitleList = (titleList)=> {for(const title of titleList){
        const newTitle = document.createElement('h6')
        newTitle.textContent = title
        projectTitleList.appendChild(newTitle)
    }}
    const displayProject = (project) => {for(const task of project.getTaskList()){
        const taskDiv = document.createElement('div')
        const taskTitle = document.createElement('h6')
        taskTitle.textContent = task.taskTitle
        const dueDate = document.createElement('p')
        dueDate.textContent = `Due: ${format(task.dueDate, 'dd/MM/yyyy')}`
        const taskDescription = document.createElement('p')
        taskDescription.textContent =  `Description: ${task.taskDescription}`
        taskDiv.append(taskTitle, dueDate, taskDescription)
        projectDisplay.appendChild(taskDiv)
    }}
    return {populateTitleList, displayProject}
})()

projectList.addProject('Gaming')
projectList.getProject(0).addTask('Lies of P', 'finish it', 2, true)
projectList.getProject(0).addTask('Persona 4','Replay it already', 7, true)
displayController.populateTitleList(projectList.getListNames())
displayController.displayProject(projectList.getProject(0))
projectList.getProject(0).projectDisplay()
projectList.getProject(0).taskList[1].toggleCompleteStatus()
projectList.getProject(0).taskList[0].togglePriority()
projectList.getProject(0).projectDisplay()



