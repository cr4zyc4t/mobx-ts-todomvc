import { observable, action } from "mobx";
import uuid from "uuid/v4";
import { EventEmitter } from "events";

export default class Todo extends EventEmitter {
	static EVENT_DESTROY = "DESTROY"

	@observable id: string;
	@observable title: string;
	@observable isCompleted: boolean;

	constructor(title: string) {
		super();

		this.id = uuid();
		this.title = title;
		this.isCompleted = false;
	}

	@action
	toggle(isCompleted?: boolean) {
		if (isCompleted !== undefined) {
			this.isCompleted = isCompleted
		} else {
			this.isCompleted = !this.isCompleted
		}
	}

	@action
	destroy() {
		this.emit(Todo.EVENT_DESTROY)
	}
}