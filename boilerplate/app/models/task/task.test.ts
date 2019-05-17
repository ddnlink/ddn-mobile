import { TaskModel, Task } from "./task"

test("can be created", () => {
  const instance: Task = TaskModel.create({title: "hello", content: "world"})

  expect(instance).toBeTruthy()
})