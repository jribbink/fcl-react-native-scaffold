pub contract HelloWorld {
  pub var foo: String

  pub fun setFoo(_ foo: String) {
    self.foo = foo
  }

  pub fun getFoo(): String {
    return self.foo
  }

  init() {
    self.foo = "Foo has not been set yet"
  }
}