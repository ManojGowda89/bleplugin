import ExpoModulesCore

public class BlekitModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Blekit")

    Events("onChange")

    Function("hello") {
      return "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { (value: String) in
      self.sendEvent("onChange", [
        "value": value
      ])
    }
  }
}
