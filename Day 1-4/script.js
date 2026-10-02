function OnBtnclick(buttonElement) {
    buttonElement.innerText ='Task added';
};

const tasks =[
    {
     id : 1,
     title:"Implement Login",
     status:"In Progress",
     priority:"High"
    },
    {
     id : 2,
     title:"Fix Calculations",
     status:"Completed",
     priority:"High"
    },
    {
     id : 3,
     title:"Create Report",
     status:"Pending",
     priority:"High"
    },
    {
     id : 4,
     title:"Update UI",
     status:"In Progress",
     priority:"High"
    },
    {
     id : 5,
     title:"Bug Fixes",
     status:"Pending",
     priority:"Low"
    }
];

tasks.map(task =>{
 console.log(task.status);
});

const completedtasks= tasks.filter(task=>task.status === 'Completed');
console.log(completedtasks);
