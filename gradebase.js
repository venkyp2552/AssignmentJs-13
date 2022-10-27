let students = [
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95},
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 }
    ];

    //a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F

//b) Map the grades of each student

let stuGradesA=students.filter((item) => item.marks>=90)
let A=stuGradesA.map(({name,marks}) =>({name,"Grade":"A"}))
console.log(A)

let stuGradesB=students.filter((item) => item.marks>=80&&item.marks<90)
let B=stuGradesB.map(({name,marks}) =>({name,"Grade":"B"}))
console.log(B)

let stuGradesC=students.filter((item) => item.marks>=70&&item.marks<80)
let C=stuGradesC.map(({name,marks}) =>({name,"Grade":"C"}))
console.log(C)

let stuGradesD=students.filter((item) => item.marks>=60&&item.marks<70)
let D=stuGradesD.map(({name,marks}) =>({name,"Grade":"D"}))
console.log(D)


let stuGradesE=students.filter((item) => item.marks>=50&&item.marks<60)
let E=stuGradesE.map(({name,marks}) =>({name,"Grade":"E"}))
console.log(E)

let stuGradesF=students.filter((item) => item.marks<50)
let F=stuGradesF.map(({name,marks}) =>({name,"Grade":"F"}))
console.log(F)