pub contract HelloWorld {
  pub var foo: String

  init() {
    self.foo = "Please send a transaction to set the value of foo"
  }

  pub fun setFoo(foo: String) {
    self.foo = foo
  }
}