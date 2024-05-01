namespace Subjects {
    export const cpp = new Cpp();
    export const react = new React();
    export const java = new Java();

    export const cTeacher: Teacher = {
        firstName: 'John',
        lastName: 'Doele',
        experienceTeachingC: 10,
    };

    console.log("C++");
    Subjects.cpp.setTeacher(cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());

    console.log("Java");
    Subjects.java.setTeacher(cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());

    console.log("React");
    Subjects.react.setTeacher(cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
}