export default {
  var: `
var message1 = "Hello"
message2, message3 := "World", "!!!"

echo(message1, message2, message3)
`,

  number: `
anInt := 123
aFloat := 1.23

echo(anInt, "+", aFloat, "=", anInt + aFloat)
echo(anInt, "-", aFloat, "=", anInt - aFloat)
echo(anInt, "*", aFloat, "=", anInt * aFloat)
echo(anInt, "/", aFloat, "=", anInt / aFloat)
echo(anInt, "%", 10, "=", anInt % 10)
`,
  string: `
s1 := "Hello"
s2 := 'World'
s3 := \`!!!\`

echo(s1, s2, s3)

// access character using square brackets
echo("s1[0]:", s1[0])
`,
  null: `
x := null

echo(x)
`,
  undefined: `
var x

echo(x)
`,
  object: `
myLanguage := {
  name: 'CovidScript',
  isUseful: #f,
  ["wasting" + "my" + "time"]: #t // object key can be computed
}

echo(myLanguage)

// access property value using the dot notation
echo("Is my language useful?", myLanguage.isUseful)

// or with square brackets for computed keys
echo("Is it wasting my time?", myLanguage["wasting" + "my" + "time"])
`,
  array: `
languageAttributes := ["interpreted", "dynamically typed", "useless"]

// access array element using square brackets
echo("My language is a", languageAttributes[2], "language")
`,
  function: `
func sayHello(to) {
  echo("Hello", to, "!!!")
}
sayHello("World")
`,
  function2: `
sayHello := func(to) {
  echo("Hello", to, "!!!")
}
sayHello("World")
`,
  function3: `
sum := func(a, b) {
  return a + b
}

echo(sum(1, 2))
`,
  closure: `
func saySomething(message) {
  return func(to) {
    echo(message, to)
  }
}
saySomethingTo := saySomething("Hello")
saySomethingTo("World")`,
  if: `
var number = 1
if number > 0 {
  echo("number > 0")
}
`,
  if2: `
var number = 1
if number > 2 {
  echo("number > 2")
} elif number > 1 {
  echo("number > 1 && number <= 2")
} else {
  echo("number <= 1")
}
  `,
  if3: `
if number := 1; number > 2 {
  echo("number > 2")
} elif number > 1 {
  echo("number > 1 && number <= 2")
} else {
  echo("number <= 1")
}

// number can't be accessed here
  `,
  if4: `
var message
if message {
  echo(message)
} else {
  echo("message is:", message)
}
  `,
  if5: `
s1, s2 := "hello", "hello"
if s1 == s2 {
  echo("s1 and s2 are equal")
}
  `,
  if6: `
obj1, obj2 := {}, {}
if obj1 == obj2 {
  echo("obj1 and obj2 are equal")
}

if obj3 := obj1; obj1 == obj3 {
  echo("obj1 and obj3 are equal")
}
  `,
  for: `
sum := 0
for i := 0; i < 10; i = i + 1 {
  sum = sum + i
}

echo("sum:", sum)
`,
  for2: `
sum := 1
for sum < 10 {
  sum = sum + sum
}

echo("sum:", sum)
`,
  for3: `
sum := 1
for {
  if sum >= 10 {
    break
  }
  sum = sum + sum
}

echo("sum:", sum)
`,
  echo: 'echo("Hello", "World", "!!!")',
  len: `
arr := [1, 2, 3, 4, 5]

echo(len(arr))
`,
  filter: `
newArr := filter([1, 2, 3, 4], func(elem) {
  return elem % 2 == 0
})

echo("newArr:", newArr)

newObj := filter({foo: 1, bar: 2, baz: 3}, func(value) {
  return value % 2 == 1
})

echo("newObj:", newObj)
`,
  map: `
newArr := map([1, 2, 3, 4], func(elem) {
  return elem * 2
})

echo("newArr:", newArr)

newObj := map({foo: 1, bar: 2, baz: 3}, func(value) {
  return value * 2
})

echo("newObj:", newObj)
`,
  reducer: `
sum1 := reduce([1, 2, 3, 4], func(sum, elem) {
  return sum + elem
}, 0)

echo("sum1:", sum1)

sum2 := reduce({foo: 1, bar: 2, baz: 3}, func(sum, value) {
  return sum + value
}, 0)

echo("sum2:", sum2)
`,
  join: `
s := join(["One", "Two", "Three"], "-")

echo(s)
`,
  indexOf: `
index := indexOf([1, 2, 3, 4], 2)

echo(index)
`,
  append: `
newArr := append([1, 2, 3, 4], 5, 6, 7)

echo(newArr)
`,
  sort: `
sortedArr := sort([3, 2, 4, 1, 5], func(elem1, elem2) {
  return elem1 >= elem2
})

echo(sortedArr)
`,
  keys: `
keyArr := keys({foo: 1, bar: 2, baz: 3})

echo(keyArr)
`,
  values: `
valueArr := values({foo: 1, bar: 2, baz: 3})

echo(valueArr)
`,
  type: `
echo(type("hello"))

echo(type([1, 2, 3, 4]))
`,
  delete: `
newArr := delete([1, 2, 3, 4], 1)

echo("newArr:", newArr)

newObj := delete({foo: 1, bar: 2, baz: 3}, "bar")

echo("newObj:", newObj)
`,
  neg: `
echo(1 + neg(1))
`,
};
