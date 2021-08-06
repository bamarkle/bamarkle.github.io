import os
import sys
from datetime import date
counter = 0

#Select a class, _x is temp
from classInfoMaster import classes, classLocation
from students import studentList
_x = int(input("Which class do you want? "))
chosenStudentList = studentList[_x] #THIS IS A QUICK FIX. NEED TO MAKE A MORE PERMANENT ADJUSTMENT!!
chosenClass = classes[_x]
chosenClassLocation = classLocation[_x]
#Adding the appropriate grade sheet to the program so we can update it later
sys.path.append(chosenClassLocation)
from grades import studentGrades

#Select an assignment, _x is temp
from classInfoMaster import assignments, assignmentComments, assignmentIntros
from commentsMaster import oldComments

_x = int(input("Which assignment do you want? ")) 
chosenAssignment = assignments[_x]
comments = assignmentComments[chosenAssignment]
chosenIntro = assignmentIntros[chosenAssignment]
chosenAssignmentLocation = chosenClassLocation + '/' + chosenAssignment + '/'

def run():
    global counter
    counter += 1
    #Select a student, _x is temp
    _x = input("Enter student name: ")
    chosenStudent = chosenStudentList[_x]
    
    #Getting the comments and adding them to a list which will then be written to a file
    #Builds the list template and adds the generic intro to the assignment text
    commentsList = []
    commentsList.append(chosenIntro)

    #Parses through the criteria established in classInfoMaster and adds to the file    
    for eachCriteria in comments:
        _x = int(input("How would you rate the student's " + eachCriteria + "? (1, 2, 3) "))   
        commentsList.append(comments[eachCriteria][_x])
        
   #If you want to use the old comments, you can do so here. 
    _x = input('Do you want to add an older (previous version) comment? ')
    if _x.lower() == 'y':
        commentsList.append("There's a few other things to think about here, too: ")
        _x = input('Which comments would you like to add? ').split()
        _y = list(map(int, _x))
        for each in _y:
            commentsList.append(oldComments[each])
          
   #Adding a custom comment
    _x = input('Do you wish to add custom a comment? (y, n) ')
    if _x.lower() == 'y':
        commentsList.append((input('Enter your custom comment: ')))
    
    #Get a final grade
    finalGrade = input('Enter a final grade: ')
        
    #Writing the comments to the document along with some form stuff
    with open(chosenAssignmentLocation + chosenStudent + ".txt", "w") as openFile:
        studentLetter = openFile
        studentLetter.write("Hello, " + chosenStudent + "!" +
            "\n\nSo I've read your " + str(chosenAssignment) + " paper and here's what I think: \n\n")
    
        for each in range(len(commentsList)):
            studentLetter.write(commentsList[each] + "\n\n")
        studentLetter.write('Overall grade: ' + finalGrade)
        studentLetter.write('\n\nHopefully that helps some! Let me know if you have any questions or if there is anything else I can do!\n\n' + 
            'Cheers! \n -b' )
    
    #Updating the grades and writing them to file
    today = date.today()
    from grades import studentGrades
    studentGrades[chosenStudent].append(finalGrade + ' ' + today.strftime("%B %d"))
    
    with open(chosenClassLocation + 'grades.py', "w") as openFile:
        openFile.write('studentGrades = ' + str(studentGrades))
    
     
    #Display counter and ask for another student
    print('You have graded {counter} so far.'.format(counter=counter))
    _x = input('Do you want to grade another? (y, n) ')
    if _x == 'y':
        run()
    else:
        return
run()



