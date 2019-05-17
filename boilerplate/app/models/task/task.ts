import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TaskModel = types
  .model("Task")
  .props({
    title: types.string, // 任务标题 -> 任务所属项目
    content: types.string, // 任务内容
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type TaskType = Instance<typeof TaskModel>
export interface Task extends TaskType {}
type TaskSnapshotType = SnapshotOut<typeof TaskModel>
export interface TaskSnapshot extends TaskSnapshotType {}
