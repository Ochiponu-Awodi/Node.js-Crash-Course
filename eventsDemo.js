import { error } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler (name) {
    console.log(`Hello ` + name);
}

function byeHandler (name) {
    console.log(`Bye ` + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('bye', byeHandler)

// Emit events
myEmitter.emit('greet', 'me');
myEmitter.emit('bye', 'me');

// Error Handling
myEmitter.on('error', (err) => {
    console.error('An Error Occured:', err);
})

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));