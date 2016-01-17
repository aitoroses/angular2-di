declare module "angular2-di" {
  export var InjectMetadata
  export var OptionalMetadata
  export var InjectableMetadata
  export var SelfMetadata
  export var HostMetadata
  export var SkipSelfMetadata
  export var DependencyMetadata
  export var Inject
  export var Optional
  export var Injectable
  export var Self
  export var Host
  export var SkipSelf

  export interface ForwardRefFn {
      (): any;
  }
  export function forwardRef(forwardRefFn: ForwardRefFn): Function;
  export function resolveForwardRef(type: any): any;
  export var Injector
  export var Binding
  export var ProviderBuilder
  export var ResolvedBinding
  export var ResolvedFactory
  export var Dependency
  export var bind
  export var Provider
  export var ResolvedProvider
  export var provide
  export var Key
  export var TypeLiteral
  export var NoProviderError
  export var AbstractProviderError
  export var CyclicDependencyError
  export var InstantiationError
  export var InvalidProviderError
  export var NoAnnotationError
  export var OutOfBoundsError
  export var OpaqueToken
}
