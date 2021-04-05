
let submissions = [

  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  
  {
    name: "Joe",  
    score: 77, 
    date: "2018-05-14",
    passed: true,
  },
  
  {
  name: "Jack",
  score: 59,
  date: "2019-07-05",
  passed: false,
  },
  
  {
  name: "Jill",
  score: 88,
  date: "2020-04-22",
  passed: true, 
  }
  
]
  

  // ADD SUBMISSION
  function addSubmission (array, newName, newScore, newDate) {
  
  let student ={
      name: newName,
      score: newScore,
      date: newDate,  
      passed: true,
  }
  
      if (newScore>= 60)
      { student.passed= true} else{
        student.passed= false
          }
          array.push(student)
  }

addSubmission(submissions, 'Luke', 2, '2020-04-22')
console.log(submissions)


// EDIT SUBMISSION
function editSubmission (array, index, score) {
  array[index].score = score

  if (score>= 60) {
    array[index].passed= true
  } else{
    array[index].passed= false
  }
}

editSubmission(submissions, 0, 10)
console.log(submissions)


// FIND SUBMISSION BY NAME
// function findSubmissionByName (array, name) {
//   array.find(object => name == object.name)
// }

// console.log(findSubmissionByName(submissions, 'Brandon'))


// FIND LOWEST SCORE
function findLowestScore(array) {
  let lowestNumber = 999; 

  array.forEach(object => {
    if(object.score < lowestNumber) {
      lowestNumber = object.score
    }
  })

  console.log(lowestNumber)
}
findLowestScore(submissions)


  // FIND AVERAGE SCORE
  function findAverageScore(array) {
    let total = 0;

    for(object of array) {
      total = total + object.score
    }

    let average = total / array.length
    console.log(average)
  }

findAverageScore(submissions)


  // DELETE SUBMISSION BY INDEX
  function deleteSubmissionByIndex (array, index) {
      array.splice(index, 1) 
  }

deleteSubmissionByIndex(submissions, 4)
console.log(submissions)


// DELETE SUBMISSION BY NAME
function deleteSubmissionByName (array, name) {

  
  function findPerson(name) {
    array.forEach(object => {
      if( object.name === name) {
        console.log(name)
      }
    })
  }

  findPerson(name)
  let index = array.findIndex(findPerson)  
    array.splice(index, 1) //confirm teacher
}

  deleteSubmissionByName(submissions, 'Joe')
  console.log(submissions)

  // function findSubmissionByName (array,name)
  // function findPerson(name){
  //   return name.Joe === Joe;
  // }
  
  /*let index = array.findIndex(findPerson) 
    array.splice(index,1) //confirm teacher*/
  
  // function findLowestScore (array)
  // submissions.forEach(function() {
  // }
  
  /*let student ={
    name: newName,
    score: newScore,
    date: newDate,
    passed: true,
    }
  
    if (newScore>= 60)
    { student.passed= true} else{
      student.passed= false
        }
        array.push(student)*/
  
   
  // function findAverageScore (array)
  // for (let language of languages) {
  //   console.log(language);
  // }
  
  // function filterPassing (array)
  // function filter90AndAbove(array)
  

