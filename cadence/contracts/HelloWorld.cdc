pub contract HelloWorld {
  pub var foo: String

  init() {
    self.foo = "Hello, World!"
  }

  pub fun setFoo(foo: String) {
    self.foo = foo
  }
}