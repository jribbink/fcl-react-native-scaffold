import "HelloWorld"

transaction(foo: String) {
  prepare(acct: AuthAccount) {
    HelloWorld.setFoo(foo)
  }
}