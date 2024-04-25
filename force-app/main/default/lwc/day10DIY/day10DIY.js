import { LightningElement, track } from 'lwc';

export default class Day10DIY extends LightningElement {
    @track tasksList = []

    task = '';
    taskCount = -1;

    setTask(event){
        this.task = '';
        this.task = event.target.value;
    }

    addTask(){
        this.taskCount += 1;

        var taskInfo = {
            Id: this.taskCount ,
            taskName: this.task
        }

        this.tasksList.push(taskInfo);
    }

    deleteTask(event){
        const taskId = event.target.dataset.taskid;

        var indexOfObj = this.tasksList.findIndex(o =>{
            o.Id === taskId;
        });
        
        this.tasksList.splice(indexOfObj, 1);
    }
}