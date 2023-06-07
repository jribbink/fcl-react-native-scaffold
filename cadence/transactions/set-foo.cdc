import HelloWorld from "../contracts/HelloWorld.cdc"

transaction(foo: String) {
  execute {
    HelloWorld.setFoo(foo: foo)
  }
}