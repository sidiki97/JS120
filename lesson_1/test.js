/*

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

*/

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} student.`)
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses);
    },
    findCourse(code) {
      let courseIndex = this.courses.findIndex(course => 
        course.code === code
      )

      let course = this.courses[courseIndex];

      return course;
    },
    // addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
    addNote(code, note) {
      // iterate course objects and find value equal to code for code property in object
      let course = this.findCourse(code);

      if (course['note']) {
        course['note'].push(note);
      } else {
        course['note'] = [note];
      }
    
    },

    viewNotes(){
      for (let course in this.courses) {
        if (this.courses[course].note){
          console.log(`${this.courses[course].name}: ${this.courses[course].note.join('; ')}`);
        }
        
      }
    }, 

    updateNote(code, note){
      let course = this.findCourse(code);

      course['note'] = [note];
      
    }

  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
console.log();

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();

foo.updateNote(101, 'Fun course');
foo.viewNotes();