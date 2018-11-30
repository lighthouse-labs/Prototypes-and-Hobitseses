# Prototypes

* They are objects.


```js
var obj = {
  thing: "🤗"
};
```

```js
class Thing {

}
```

```js
function Thing() {

}
```

## How does property lookup work in JavaScript?

* every object in javascript has a [[Prototype]] which is another object, that we can access using `.__proto__`

[[Prototype]]
* It's just objects linked to other objects

`Object.create` > `__proto__`

* every `function` in JavaScript has a property called `.prototype` that is an empty object.