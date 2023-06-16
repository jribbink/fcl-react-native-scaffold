pub contract HelloWorld {
  pub let fooPathPrivate: StoragePath
  pub let fooPathPublic: PublicPath

  pub resource interface FooPublic {
    pub fun getFoo(): String
  }
  
  pub resource Foo: FooPublic {
    access(self) var foo: String

    pub fun getFoo(): String {
      return self.foo
    }
    
    pub fun setFoo(_ foo: String) {
      self.foo = foo
    }

    init(_ foo: String) {
      self.foo = foo
    }
  }

  pub fun createFoo(_ foo: String): @Foo {
    return <- create Foo(foo)
  }

  pub fun check(_ addr: Address): Bool {
    return getAccount(addr)
      .getCapability(HelloWorld.fooPathPublic)
      .check<&HelloWorld.Foo{FooPublic}>()
  }

  init() {
    self.fooPathPrivate = /storage/Foo
    self.fooPathPublic = /public/Foo
  }
}