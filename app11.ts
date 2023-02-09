//TODO 元组类型 Tuple 固定数量的不同类型的元素组合
 let arr:[string,number] = ['123',4]
arr[0].length
// arr[1].length //FIXME 报错，数值无length

// arr.push(true) //FIXME 越界数组，被推断为联合类型 string | number
arr.push(3)
console.log(arr)


let excel:[string,string,number][] = [['title','name',1]]
console.log(excel)
