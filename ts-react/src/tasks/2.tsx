// Your task is to add types for the following code elements:

// RequestStep: This is a string literal.

// State: This type is an object with two properties isRequestInProgress and RequestStep

// Action: This is a type that represents the possible actions that can be sent to the reducer.

import React, { useReducer } from "react";

enum RequestStep {
  Start = "start",
  Pending = "pending",
  Idle = "idle",
  Finished = "finished"
}

type Action =
  | { type: "START_REQUEST" }
  | { type: "PENDING_REQUEST" }
  | { type: "FINISH_REQUEST" }
  | { type: "RESET_REQUEST" }

type State = {
  isRequestInProgress: boolean;
  requestStep: RequestStep;
}
const initialState: State = {
  isRequestInProgress: false,
  requestStep: RequestStep.Idle,
};

function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_REQUEST':
      return { ...state, isRequestInProgress: true, requestStep: RequestStep.Start };
    case 'PENDING_REQUEST':
      return { ...state, isRequestInProgress: true, requestStep: RequestStep.Pending };
    case 'FINISH_REQUEST':
      return { ...state, isRequestInProgress: false, requestStep: RequestStep.Finished };
    case 'RESET_REQUEST':
      return { ...state, isRequestInProgress: false, requestStep: RequestStep.Idle };
    default:
      return state;
  }
}

export function RequestComponent() {
  const [requestState, requestDispatch] = useReducer(requestReducer, initialState);

  const startRequest = () => {
    requestDispatch({ type: 'START_REQUEST' });

    setTimeout(() => {
      requestDispatch({ type: 'PENDING_REQUEST' });
  
      setTimeout(() => {
        requestDispatch({ type: 'FINISH_REQUEST' });
      }, 2000);
    }, 2000);
  };

  const resetRequest = () => {
    requestDispatch({ type: 'RESET_REQUEST' });
  };

  return (
    <div>
      <button onClick={startRequest}>Start request</button>
      <button onClick={resetRequest}>Reset request</button>
      <p>State of the request: {requestState.requestStep}</p>
    </div>
  );
}

export default RequestComponent;
