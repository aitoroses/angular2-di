declare module "angular2-di" {
  export declare var InjectMetadata
  export declare var OptionalMetadata
  export declare var InjectableMetadata
  export declare var SelfMetadata
  export declare var HostMetadata
  export declare var SkipSelfMetadata
  export declare var DependencyMetadata
  export declare var Inject
  export declare var Optional
  export declare var Injectable
  export declare var Self
  export declare var Host
  export declare var SkipSelf

  export interface ForwardRefFn {
      (): any;
  }
  export declare function forwardRef(forwardRefFn: ForwardRefFn): Function;
  export declare function resolveForwardRef(type: any): any;
  export declare var Injector
  export declare var Binding
  export declare var ProviderBuilder
  export declare var ResolvedBinding
  export declare var ResolvedFactory
  export declare var Dependency
  export declare var bind
  export declare var Provider
  export declare var ResolvedProvider
  export declare var provide
  export declare var Key
  export declare var TypeLiteral
  export declare var NoProviderError
  export declare var AbstractProviderError
  export declare var CyclicDependencyError
  export declare var InstantiationError
  export declare var InvalidProviderError
  export declare var NoAnnotationError
  export declare var OutOfBoundsError
  export declare var OpaqueToken
}
