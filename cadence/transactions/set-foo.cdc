import "HelloWorld"

transaction(foo: String) {
  prepare(acct: AuthAccount) {
    if !HelloWorld.check(acct.address) {
      let foo <- HelloWorld.createFoo(foo)
      acct.save(<-foo, to: HelloWorld.fooPathPrivate)
      acct.link<&HelloWorld.Foo{HelloWorld.FooPublic}>(HelloWorld.fooPathPublic, target: HelloWorld.fooPathPrivate)
    } else {
      acct
        .borrow<&HelloWorld.Foo>(from: HelloWorld.fooPathPrivate)!
        .setFoo(foo)
    }
  }
}