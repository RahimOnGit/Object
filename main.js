let medieinstitutet = {
    name: "UST",
    address: "Hissotrnsgatan 10",
    zipcode: "21647",
    city: "Malmo",
    students: [],
    teachers: [],
    relgateStudent,
    fireTeacher 
  };


//functions 
  function addTeacherToSchool(teacher) //add teacher to school
  {
    medieinstitutet.teachers.push(teacher)

  }

  function addStudentToSchool(student) //add teacher to school
  {
    medieinstitutet.students.push(student)

  }

  function fireTeacher(teacher)
  {
      let teacherIndex = medieinstitutet.teachers.indexOf(teacher);
medieinstitutet.teachers.splice(teacherIndex,1)
  }


  function addSubjectToTeacher(sub,teacher)
  {
    teacher.subjects.push(sub);
    sub.teachers = teacher;
    return teacher;

  }

  

  function removeTeacherSubject(subject)
  {
  this.subjects.splice(subject,1)

  }
  function removeStudentSubject(subject)
  {
  let subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex,1)

  let studentIndex = subject.students.indexOf(this);
  subject.students.splice(studentIndex,1)

  }
  
  function relgateStudent(student)
  {

  let studentIndex = this.students.indexOf(student)
  this.students.splice(studentIndex,1);
  student.subjects = null;

  }
  


  

  //subjects
  
  let math = {
    name : "Math" ,
    students:[],
    teachers:[],

    addTeacher: function(teacher)
    {
this.teachers.push(teacher);
teacher.subjects.push(this);

    },

    addStudent : function(student)
    {
        this.students.push(student);
        student.subjects.push(this);
    
    },
    removeTeacher : function(teacher)
    {
      let index = this.teachers.indexOf(teacher);
      this.teachers.splice(index,1)
      
      index = teacher.subjects.indexOf(this);
      teacher.subjects.splice(index,1);

      
    }

  };
  let svenska = {
    name :"Swedish",
    students :[],
    teachers:[],
    
    addTeacher: function(teacher)
    {
this.teachers.push(teacher);
teacher.subjects.push(this);
    },

    addStudent : function(student)
    {
        this.students.push(student);
        student.subjects.push(this);
    
    },
    removeTeacher : function(teacher)
    {
      let index = this.teachers.indexOf(teacher);
      this.teachers.splice(index,1);

      index = teacher.subjects.indexOf(this);
      teacher.subjects.splice(index,1);


    }
  }

  let english = {
    name :"English",
    students :[],
    teachers:[],
   
    addTeacher: function(teacher)
    {
this.teachers.push(teacher);
teacher.subjects.push(this);
    },

    addStudent : function(student)
    {
        this.students.push(student);
        student.subjects.push(this);
    
    },
    removeTeacher : function(teacher)
    {
      let index = this.teachers.indexOf(teacher);
      this.teachers.splice(index,1);

      index = teacher.subjects.indexOf(this);
      teacher.subject.splice(index,1)

    }

    

    

  }
 // fem studenter

  let alrasheed = {
    name : "Alrasheed",
    age : 25,
    gender : "male" ,
    subjects : [],
    enlistToSubject : function(subject)
    {
     
this.subjects.push(subject) 
subject.students.push(this)

    },
    quitSubject: removeStudentSubject

  }

  let rahim = {
    name : "Semo",
    age : 25,
    gender : "male" ,
    subjects : [],
    enlistToSubject : function(subject)
    {
     
this.subjects.push(subject) 
subject.students.push(this)

  },
  quitSubject: removeStudentSubject
};
  let babikir = {
    name : "Kory",
    age : 25,
    gender : "male" ,
    subjects : [],
    enlistToSubject : function(subject)
    {
     
this.subjects.push(subject) 
subject.students.push(this)

  },
  quitSubject: removeStudentSubject
}
  let mazin = {
    name : "Mazin",
    age : 25,
    gender : "male" ,
    subjects : []
    ,
    enlistToSubject : function(subject)
    {
     
this.subjects.push(subject) 
subject.students.push(this)

  },
  quitSubject: removeStudentSubject

  }
  let mohammed = {
    name : "Mohammed",
    age : 25,
    gender : "male" ,
    subjects : [],
    enlistToSubject : function(subject)
    {
      
this.subjects.push(subject) 
subject.students.push(this)

  },
  quitSubject: removeStudentSubject

  }


//teachers
  let maria = {
    name: "Maria",
    subjects: [],

    addSubject : function(subject)
    {
      this.subjects.push(subject);
      subject.teachers.push(this);
    },
    quitSubject : removeTeacherSubject
  };
  
  let erik = {
    name: "Erik",
    subjects: [],
    addSubject: function(subject)
    {
     
      this.subjects.push(subject);
      subject.teachers.push(this);
    },
    quitSubject : removeTeacherSubject
  };


  let niklas = {
    name: "Niklas",
    subjects: [],
    addSubject: function(subject)
    {
     
      //subject.teachers= []; //
      this.subjects.push(subject);
      subject.teachers.push(this);
      
    },
    quitSubject : removeTeacherSubject
    };

//
 
  console.log(maria)
  console.log(maria.name," teaches",maria.subjects.join())
  

  math.students.push(alrasheed);

  //console.log("Subject math has :", math.students)


  
  

  // let updateTeacher = addSubjectToTeacher(math,erik);
  // console.log(updateTeacher);
  // console.log(math.teachers);


  



// maria.addSubject(math)

// niklas.addSubject(math)
// erik.addSubject(math)
// math.addTeacher(maria)
//niklas.addSubject(math)

//erik.addSubject(math)


// math.addTeacher(erik)
// math.addTeacher(maria)
// math.addTeacher(niklas)

erik.addSubject(math)
erik.addSubject(svenska)


maria.addSubject(math)
maria.addSubject(svenska)


math.addTeacher(niklas)
niklas.addSubject(english)



console.log("math teachers : ",math.teachers)
console.log("Swedish teachers : ",svenska.teachers)
console.log("English teachers : ",english.teachers)

math.removeTeacher(erik);
niklas.quitSubject(math);
console.log("updated math teachers",math.teachers)





rahim.enlistToSubject(svenska);
babikir.enlistToSubject(svenska);

babikir.enlistToSubject(math)
rahim.enlistToSubject(math)


console.log("math student ", math.students)

rahim.quitSubject(math);
// babikir.quitSubject(math);
console.log("updated math student ", math.students)

console.log("svenska student ", svenska.students)

addStudentToSchool(rahim)
addStudentToSchool(alrasheed)

addTeacherToSchool(erik);
addTeacherToSchool(niklas);
addTeacherToSchool(maria)

fireTeacher(niklas);



