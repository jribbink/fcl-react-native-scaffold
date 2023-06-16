import "HelloWorld"

pub fun main(addr: Address): String {
  return getAccount(addr)
      .getCapability<&HelloWorld.Foo{HelloWorld.FooPublic}>(HelloWorld.fooPathPublic)
      .borrow()
      ?.getFoo() ?? "Foo has not been set yet"
}