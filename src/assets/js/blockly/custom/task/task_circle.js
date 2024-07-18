import Blockly from 'blockly'
import EventType from './type'
const data = {
  name: 'task_circle'
}
const block = {
  title: data.name,
  type: EventType.name,
  colour: EventType.colour,
  getBlockJson({ resource }) {
    const json = {
      type: 'block_type',
      message0: '任务循环 %1 %2',
      args0: [
        {
          type: 'field_number',
          name: 'Times',
          value: '0',
          precision: 1,
          min: 0,
          max: 100
        },
        {
          type: 'input_value',
          name: 'TaskArray',
          check: 'Array'
        }
      ],
      inputsInline: true,
      output: 'Task',
      colour: EventType.colour,
      tooltip: '',
      helpUrl: ''
    }
    return json
  },
  getBlock: function (parameters) {
    const data = {
      init: function () {
        const json = block.getBlockJson(parameters)
        this.jsonInit(json)
      }
    }
    return data
  },
  getLua() {
    const lua = function (block) {
      // var type = block.getFieldValue('ArrayType')
      var number_times = block.getFieldValue('Times')
      var array = Blockly.Lua.valueToCode(
        block,
        'TaskArray',
        Blockly.Lua.ORDER_ATOMIC
      )

      var code = '_G.task.circle(' + number_times + ',' + array + ')\n'

      return [code, Blockly.Lua.ORDER_NONE]
    }
    return lua
  },
  toolbox: {
    kind: 'block',
    type: data.name
  }
}
export default block
