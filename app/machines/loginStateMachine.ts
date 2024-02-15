import { createMachine } from 'xstate';


const loginStateMachine = createMachine({
  initial: 'init',
  states: {
    init: {
      on: {
        ACTIVE: {
          target: 'active'
        }
      }
    },
    active: {
      on: {
        SUBMIT: {
          target: 'success'
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
