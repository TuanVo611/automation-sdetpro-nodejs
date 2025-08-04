//Data

const teo = {
    name: "Teo",
    grades: [9, 8, 6]

}

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [7, 9, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [6, 7, 8];

//Usage
const bestStudentInfo = findBestStudent([teo, ti, tun]);
const { bestStudentName, avgScore } = bestStudentInfo;
console.log(`Best student is: ${bestStudentName} with average score: ${avgScore})`)

//Controller
function findBestStudent(studentList) {
    let bestStudent = studentList[0];
    let currentHighestScore = calculateAvgScore(bestStudent);
    for (const student of studentList) {
        const avgScore = calculateAvgScore(student);
        if (avgScore > currentHighestScore) {
            bestStudent = student;
            currentHighestScore = avgScore;
        }
    }
    return {
        bestStudentName: bestStudent.name,
        avgScore: currentHighestScore,
        metaData: {

        }
    }
}

//Support Function - DRY
function calculateAvgScore({grades }){
    let totalScore = 0;
    for(const grade of grades){
        totalScore += grade
    }
    return Math.ceil(totalScore/grades.length)
}