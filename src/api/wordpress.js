import request from '@/utils/wp'

export function Categories() {
  return request({
    url: '/categories?per_page=100',
    method: 'get'
  })
}

export function getCategory(id) {
  return request({
    url: '/categories/' + id,
    method: 'get'
  })
}
export function Article(id) {
  return request({
    url: '/posts/' + id + '?_embed',
    method: 'get'
  })
}
export function Post(id) {
  return request({
    url: '/posts/' + id + '?_fields=id,title',
    method: 'get'
  })
}
export function Posts(category, size, page) {
  return request({
    url:
      '/posts?categories=' +
      category +
      '&per_page=' +
      size +
      '&page=' +
      page +
      '&_fields=id,title,sort,excerpt,jetpack_featured_media_url,date',
    method: 'get'
  })
}
function TreeChildren(parent, categories) {
  const children = []
  categories.forEach(item => {
    if (item.parent === parent) {
      const data = {
        id: item.id,
        name: item.name,
        description: item.description,
        slug: item.slug,
        items: [],
        count: item.count,
        children: TreeChildren(item.id, categories)
      }
      children.push(data)
    }
  })
  return children
}
export function Tree(slug, categories) {
  console.log(categories)
  const item = categories.find(c => slug === c.slug)
  if (typeof item !== 'undefined' && item !== null) {
    const tree = {
      id: item.id,
      name: item.name,
      description: item.description,
      slug: item.slug,
      count: item.count,
      items: [],
      children: TreeChildren(item.id, categories)
    }
    return tree
  }

  return
}
