import { createMachine } from 'xstate';


const loginStateMachine = createMachine({
  initial: 'init',
  states: {
    init: {
      on: {
        "ACTIVE": {
          target: 'active'
        }
      }
    },
    active: {
      on: {
        "SUBMIT": {
          target: 'success'
        },
        "NO_INPUT": {
          target: 'init'
        }
      }
    },
    success: {
      type: 'final'
    },
     error: {
      type: 'final'
    }
  }
})

export default loginStateMachine;
