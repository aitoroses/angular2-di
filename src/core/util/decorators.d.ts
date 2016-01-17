import { ConcreteType, Type } from 'angular2/src/facade/lang';
export interface ClassDefinition {
    extends?: Type;
    constructor: Function | any[];
    [x: string]: Type | Function | any[];
}
export interface TypeDecorator {
    <T extends Type>(type: T): T;
    (target: Object, propertyKey?: string | symbol, parameterIndex?: number): void;
    annotations: any[];
    Class(obj: ClassDefinition): ConcreteType;
}
export declare function Class(clsDef: ClassDefinition): ConcreteType;
export declare function makeDecorator(annotationCls: any, chainFn?: (fn: Function) => void): (...args: any[]) => (cls: any) => any;
export declare function makeParamDecorator(annotationCls: any): any;
export declare function makePropDecorator(decoratorCls: any): any;
