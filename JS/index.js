var subjects = [];

    function calculateGPA1() {
      var totalCredits = 0;
      var totalPoints = 0;

      for (var i = 0; i < subjects.length; i++) {
        var credit = parseFloat(subjects[i].credit);
        var grade = subjects[i].grade;

        var point;

        switch (grade) {
          case 'A':
            point = 4.0;
            break;
          case 'B+':
            point = 3.5;
            break;
          case 'B':
            point = 3.0;
            break;
          case 'C+':
            point = 2.5;
            break;
          case 'C':
            point = 2.0;
            break;
          case 'D+':
            point = 1.5;
            break;
          case 'D':
            point = 1.0;
            break;
          case 'F':
            point = 0.0;
            break;
          default:
            point = 0.0;
            break;
        }

        totalCredits += credit;
        totalPoints += credit * point;
      }

      var semesterGPA = totalPoints / totalCredits;

      document.getElementById('semesterGPA').textContent = 'Semester GPA: ' + semesterGPA.toFixed(2);
    }
function calculateGPA2() {
      var totalCredits = 0;
      var totalPoints = 0;

      for (var i = 0; i < subjects.length; i++) {
        var credit = parseFloat(subjects[i].credit);
        var grade = subjects[i].grade;

        var point;

        switch (grade) {
          case 'A':
            point = 4.0;
            break;
          case 'B+':
            point = 3.5;
            break;
          case 'B':
            point = 3.0;
            break;
          case 'C+':
            point = 2.5;
            break;
          case 'C':
            point = 2.0;
            break;
          case 'D+':
            point = 1.5;
            break;
          case 'D':
            point = 1.0;
            break;
          case 'F':
            point = 0.0;
            break;
          default:
            point = 0.0;
            break;
        }

        totalCredits += credit;
        totalPoints += credit * point;
      }

      var semesterGPA = totalPoints / totalCredits;
      return semesterGPA;
    }
    function tongtinchi() {
      var totalCredits = 0;
      var totalPoints = 0;

      for (var i = 0; i < subjects.length; i++) {
        var credit = parseFloat(subjects[i].credit);
        var grade = subjects[i].grade;

        var point;

        switch (grade) {
          case 'A':
            point = 4.0;
            break;
          case 'B+':
            point = 3.5;
            break;
          case 'B':
            point = 3.0;
            break;
          case 'C+':
            point = 2.5;
            break;
          case 'C':
            point = 2.0;
            break;
          case 'D+':
            point = 1.5;
            break;
          case 'D':
            point = 1.0;
            break;
          case 'F':
            point = 0.0;
            break;
          default:
            point = 0.0;
            break;
        }

        totalCredits += credit;
        totalPoints += credit * point;
      }

      return totalCredits;
    }
    function addSubject() {
      var creditInput = document.getElementById('credit');
      var gradeInput = document.getElementById('grade');

      var credit = parseFloat(creditInput.value);
      var grade = gradeInput.value;

      if (credit && grade) {
        var subject = {
          credit: credit,
          grade: grade
        };

        subjects.push(subject);

        creditInput.value = '';
        gradeInput.value = '';
        displaySubjects();
      }
    }
    

    function displaySubjects() {
      var subjectsContainer = document.getElementById('subjectsContainer');
      subjectsContainer.innerHTML = '';

      for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];

        var subjectDiv = document.createElement('div');
        subjectDiv.classList.add('main_subject');
        var creditSpan = document.createElement('li');
        creditSpan.classList.add('subject_span');
        creditSpan.textContent = 'Số chỉ: ' + subject.credit;
        subjectDiv.appendChild(creditSpan);

        var gradeSpan = document.createElement('li');
        gradeSpan.classList.add('subject_span');
        gradeSpan.textContent = 'Điểm: ' + subject.grade;
        subjectDiv.appendChild(gradeSpan);

        subjectsContainer.appendChild(subjectDiv);
        
      }
    }
function generateInputs() {
    var numOfSubjects = parseInt(document.getElementById('numOfSubjects').value);
    var inputsContainer = document.getElementById('inputsContainer');
    inputsContainer.innerHTML = '';

    for (var i = 1; i <= numOfSubjects; i++) {
      var creditInput = document.createElement('input');
      creditInput.type = 'number';
      creditInput.id = 'credit_' + i;
      creditInput.placeholder = 'Số chỉ môn ' + i;
      inputsContainer.appendChild(creditInput);

      var gradeInput = document.createElement('select');
      gradeInput.id = 'grade_' + i;
      gradeInput.placeholder = 'Điểm môn ' + i;
      var gradeOptions = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];
      for (var j = 0; j < gradeOptions.length; j++) {
        var option = document.createElement('option');
        option.value = gradeOptions[j];
        option.text = gradeOptions[j];
        gradeInput.appendChild(option);
      }
      inputsContainer.appendChild(gradeInput);

      inputsContainer.appendChild(document.createElement('br'));
    }
}

function chican(){
  var x;
  var tinchican;
        for(let i=1;i<=ptongchi;i++){
            x=diemcantinh/i;
            if(x<4.0){
                tinchican=i;
                return i;
            }
        }
}
function diemcan(){
  var x;
        var tinchican;
        for(let i=1;i<=ptongchi;i++){
            x=diemcantinh/i;
            if(x<4.0){
                tinchican=i;
                return x;
            }
        }
}
// function addSubject() {
//     var subjectsContainer = document.getElementById('subjectsContainer');

//     var subjectDiv = document.createElement('div');
//     subjectDiv.classList.add('subject');

//     var creditInput = document.createElement('input');
//     creditInput.type = 'number';
//     creditInput.classList.add('credit');
//     creditInput.placeholder = 'Số chỉ';
//     subjectDiv.appendChild(creditInput);

//     var gradeInput = document.createElement('select');
//     gradeInput.classList.add('grade');
//     gradeInput.placeholder = 'Điểm';
//     var gradeOptions = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];
//     for (var i = 0; i < gradeOptions.length; i++) {
//       var option = document.createElement('option');
//       option.value = gradeOptions[i];
//       option.text = gradeOptions[i];
//       gradeInput.appendChild(option);
//     }
//     subjectDiv.appendChild(gradeInput);

//     subjectsContainer.appendChild(subjectDiv);
//   }

// function addSubjects() {
//     var numOfSubjectsInput = document.getElementById('numOfSubjects');
//     var numOfSubjects = parseInt(numOfSubjectsInput.value);

//     if (numOfSubjects > 0) {
//         var subjectsContainer = document.getElementById('subjectsContainer');
//         subjectsContainer.innerHTML = '';

//         for (var i = 0; i < numOfSubjects; i++) {
//         addSubject();
//         }
//         numOfSubjectsInput.value = '';
//     }
// }
// function printDistribution(distribution, grades) {
//   for (let i = 0; i < distribution.length; i++) {
//       console.log(grades[i] + ": " + distribution[i]);
//   }
// }

// function calculateGPA(distribution, credits) {
//   let gpa = 0.0;
//   let totalCredits = 0;

//   for (let i = 0; i < distribution.length; i++) {
//       gpa += distribution[i] * credits[i];
//       totalCredits += distribution[i];
//   }

//   if (totalCredits > 0) {
//       gpa /= totalCredits;
//   }

//   return gpa;
// }

// function crossover(parent1, parent2) {
//   const n = parent1.length;
//   const child1 = new Array(n);
//   const child2 = new Array(n);

//   // Crossover point
//   const crossoverPoint = Math.floor(Math.random() * n);

//   for (let i = 0; i < n; i++) {
//       if (i < crossoverPoint) {
//           child1[i] = parent1[i];
//           child2[i] = parent2[i];
//       } else {
//           child1[i] = parent2[i];
//           child2[i] = parent1[i];
//       }
//   }

//   return [child1, child2];
// }

// function mutate(child) {
//   const n = child.length;

//   // Mutation point
//   const mutationPoint = Math.floor(Math.random() * n);
//   child[mutationPoint]++;
// }

// function generatePopulation(n, targetCredits, totalCredits) {
//   const population = [];

//   for (let i = 0; i < POPULATION_SIZE; i++) {
//       const individual = new Array(n);
//       totalCredits = 0;

//       for (let j = 0; j < n - 1; j++) {
//           individual[j] = Math.floor(Math.random() * (targetCredits - totalCredits + 1));
//           totalCredits += individual[j];
//       }

//       individual[n - 1] = targetCredits - totalCredits;
//       population.push(individual);
//   }

//   return population;
// }

// function startGeneticAlgorithm() {
//   const targetCreditsElement = document.getElementById("target-credits");
//   const targetGpaElement = document.getElementById("target-gpa");

//   const TARGET_CREDITS = parseInt(targetCreditsElement.value);
//   const TARGET_GPA = parseFloat(targetGpaElement.value);

//   const n = 7; // Number of grade types
//   const grades = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D'];
//   const credits = [4, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0];

//   let output = "";

//   for (let attempt = 0; attempt < 15; attempt++) {
//       let population = generatePopulation(n, TARGET_CREDITS, 0);

//       for (let generation = 0; generation < MAX_GENERATIONS; generation++) {
//           const fitness = [];
//           let bestIndividual = null;

//           for (let i = 0; i < POPULATION_SIZE; i++) {
//               const individual = population[i];
//               const individualGPA = calculateGPA(individual, credits);
//               fitness[i] = individualGPA;

//               if (individualGPA >= TARGET_GPA && individualGPA <= TARGET_GPA + 0.02) {
//                   bestIndividual = individual;
//                   break;
//               }
//           }

//           if (bestIndividual) {
//               output += "Generation " + attempt + " - GPA: " + calculateGPA(bestIndividual, credits).toFixed(2) + "\n";
//               printDistribution(bestIndividual, grades);
//               output += "\n";
//               break;
//           }

//           const newPopulation = [];

//           while (newPopulation.length < POPULATION_SIZE) {
//               const parent1 = population[Math.floor(Math.random() * POPULATION_SIZE)];
//               const parent2 = population[Math.floor(Math.random() * POPULATION_SIZE)];
//               const [child1, child2] = crossover(parent1, parent2);

//               if (Math.random() < MUTATION_RATE) {
//                   mutate(child1);
//               }
//               if (Math.random() < MUTATION_RATE) {
//                   mutate(child2);
//               }

//               newPopulation.push(child1);
//               newPopulation.push(child2);
//           }

//           population = newPopulation;
//       }
//   }

//   const outputElement = document.getElementById("output");
//   outputElement.textContent = output;
// }