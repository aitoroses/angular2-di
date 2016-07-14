import 'reflect-metadata'
import * as assert from 'power-assert'
import { Injectable, ReflectiveInjector } from '../src/index'

@Injectable()
class Engine {
	public isStarted = false
	start() {
		this.isStarted = true
	}
}

@Injectable()
class Car {
	constructor (public engine: Engine) {}
	run() {
		this.engine.start()
	}
}

describe('DI module', () => {

	it('should do DI correctly', () => {

		const injector = ReflectiveInjector.resolveAndCreate([Car, Engine])
		const car = injector.get(Car) as Car
		car.run()

		assert.ok(car instanceof Car, "Car is not an instance of Car")
		assert.ok(car.engine.isStarted, "Car is not an instance of Car")
	})
	
})