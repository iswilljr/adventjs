export function learn(time: number, courses: number[]) {
  let coursesSum = 0
  let takenCourses: number[] = []
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const sum = courses[i] + courses[j]
      if (sum <= time && coursesSum < sum) {
        coursesSum = sum
        takenCourses = [i, j]
      }
    }
  }
  return takenCourses.length ? takenCourses : null
}
