/// Chris Catechis
/// 21 October 2022
/// This basic JS program outputs student objects by major

/// @param inputArray is the array we are searching through
/// @param value is the major we are searching for
function findStudents(inputArray, value) {
    const newArray = inputArray.filter(current => current.major === value);
    for (let i = 0; i < newArray.length; ++i) {
        console.log(i + 1, '.', newArray[i].name);
    };
};

const students = [
    {
        name: 'Chris', major: 'Computer Science'
    },
    {
        name: 'Ian', major: 'History'
    },
    {
        name: 'Edgar', major: 'Computer Science'
    },
    {
        name: 'Shelby', major: 'Education'
    },
    {
        name: 'Dom', major: 'Environmental Science'
    },
    {
        name: 'Ty', major: 'Computer Science'
    },
    {
        name: 'Kyle', major: 'Computer Science'
    },
    {
        name: 'Morgan', major: 'Education'
    },
    {
        name: 'Ryan', major: 'Education'
    },
    {
        name: 'Dawn', major: 'History'
    },
]

findStudents(students, 'Computer Science');
findStudents(students, 'Education');
findStudents(students, 'History');