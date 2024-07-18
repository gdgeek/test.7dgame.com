// jest单元测试
// 引入
const daxiaofei = require('./daxiaofei.js')
// 解构
const { xiaofei1, xiaofei2 } = daxiaofei

test('消费1 30元', () => {
  expect(xiaofei1(30)).toBe('奶茶')
})

test('消费2  3000元', () => {
  expect(xiaofei2(3000)).toBe('apple')
})
