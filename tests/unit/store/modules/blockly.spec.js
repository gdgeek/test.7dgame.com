// mutations.spec.js

import blockly from '@/store/modules/blockly'

describe('blockly/mutations', () => {
  test('测试下一个内嵌action', () => {
    const state = {
      data: {
        actions: [],
        polygens: [],
        pictures: [],
        videos: [],
        entities: []
      }
    }
    const meta = {
      id: 0,
      data: '{"type":"MetaRoot","parameters":{"uuid":"838335d3-53aa-4740-b6da-8535a8551333","name":{"name":"单元1","id":168},"transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true},"children":{"entities":[],"addons":[{"type":"Toolbar","parameters":{"uuid":"b5f5ef1f-943e-4893-8f49-6f84935b7f20","destroy":false},"children":{"buttons":[{"type":"Button","parameters":{"uuid":"5e062ee7-2f47-4c36-af8c-7fb3c45e1d42","title":"itself","icon":"book","action":"settlers"},"children":{"action":[]}}]}}]}}'
    }
    blockly.mutations.addMeta(state, meta)
    expect(state.data.actions.length).toBe(1)
    expect(state.data.actions[0].uuid).toMatch(
      '5e062ee7-2f47-4c36-af8c-7fb3c45e1d42'
    )
    expect(state.data.actions[0].name).toMatch('settlers')
  })

  test('测试下一个外置action和参数', () => {
    const state = {
      data: {
        actions: [],
        polygens: [],
        pictures: [],
        videos: [],
        entities: []
      }
    }
    const meta = {
      id: 0,
      data: '{"type":"MetaRoot","parameters":{"uuid":"838335d3-53aa-4740-b6da-8535a8551333","name":{"name":"单元1","id":168},"transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true},"children":{"entities":[],"addons":[{"type":"Toolbar","parameters":{"uuid":"b5f5ef1f-943e-4893-8f49-6f84935b7f20","destroy":false},"children":{"buttons":[{"type":"Button","parameters":{"uuid":"5e062ee7-2f47-4c36-af8c-7fb3c45e1d42","title":"itself","icon":"book"},"children":{"action":[{"type":"Action","parameters":{"uuid":"95842d23-e491-48a0-a215-d55bd754c567","action":"mysterious","parameter":"test"}}]}}]}}]}}'
    }
    blockly.mutations.addMeta(state, meta)
    expect(state.data.actions.length).toBe(1)
    expect(state.data.actions[0].uuid).toMatch(
      '95842d23-e491-48a0-a215-d55bd754c567'
    )
    expect(state.data.actions[0].name).toMatch('mysterious')
    expect(state.data.actions[0].parameter).toMatch('test')
  })

  test('测试下一个一个实体两个polygen和一个video', () => {
    const state = {
      data: {
        actions: [],
        polygens: [],
        pictures: [],
        videos: [],
        entities: []
      }
    }
    const meta = {
      id: 0,
      data: '{"type":"MetaRoot","parameters":{"uuid":"838335d3-53aa-4740-b6da-8535a8551333","name":{"name":"单元1","id":168},"transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true},"children":{"entities":[{"type":"Entity","parameters":{"uuid":"bfc1604c-236a-4a2d-97c1-c9ab91dfb07d","name":"curve","transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true},"children":{"entities":[{"type":"Polygen","parameters":{"uuid":"706097c0-e78e-4db6-8a32-c4c1a10c00f1","name":"native","transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true,"polygen":38},"children":{"entities":[],"components":[]}}],"components":[]}},{"type":"Polygen","parameters":{"uuid":"d8a6ecf2-fc5f-4c91-a4fd-addff8ec4488","name":"queen","transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true,"polygen":38},"children":{"entities":[{"type":"Video","parameters":{"uuid":"e08e41d3-8f2b-4bd1-980e-f77c55804823","name":"particularly","transform":{"position":{"x":0,"y":0,"z":0},"rotate":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1}},"active":true,"video":"","width":0.5,"loop":false,"play":true,"console":true},"children":{"entities":[],"components":[]}}],"components":[]}}],"addons":[]}}'
    }
    blockly.mutations.addMeta(state, meta)
    expect(state.data.polygens.length).toBe(2)
    expect(state.data.pictures.length).toBe(0)
    expect(state.data.videos.length).toBe(1)
    expect(state.data.entities.length).toBe(1)
  })
})
