import Type from './type'
import Blockly from 'blockly'
import TweenToData from './tween_to_data'
import TweenToObject from './tween_to_object'
import TaskArray from './task_array'
import TaskCricle from './task_circle'
import TaskPlaySound from './play_sound_task'
import RunTask from './run_task'
import SleepTask from './sleep_task'
const TaskCategory = {
  kind: 'category',
  name: '任务',
  colour: Type.colour,
  contents: [
    TweenToData.toolbox,
    TweenToObject.toolbox,
    TaskArray.toolbox,
    TaskCricle.toolbox,
    RunTask.toolbox,
    SleepTask.toolbox,
    TaskPlaySound.toolbox
  ]
}

function RegisterData(data, parameters) {
  Blockly.Blocks[data.title] = data.getBlock(parameters)
  Blockly.Lua[data.title] = data.getLua(parameters)
}
function TaskRegister(parameters) {
  RegisterData(TweenToData, parameters)
  RegisterData(TweenToObject, parameters)
  RegisterData(TaskArray, parameters)
  RegisterData(TaskCricle, parameters)
  RegisterData(RunTask, parameters)
  RegisterData(SleepTask, parameters)
  RegisterData(TaskPlaySound, parameters)

}
export {
  TaskCategory,
  TaskRegister
}
