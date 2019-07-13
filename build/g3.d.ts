declare const GS_EVENT_TYPE = "G3_EVENT_TYPE";
declare namespace g3 {
    interface Message {
        [GS_EVENT_TYPE]: number;
    }
}
declare const G3_INIT_EVENT: 1;
declare const G3_RESIZE_EVENT: 2;
declare const G3_POINTER_EVENT: 3;
declare const G3_POINTER_MOVE_EVENT: 4;
declare const G3_BUTTON_DOWN_EVENT: 5;
declare const G3_BUTTON_UP_EVENT: 6;
declare const G3_WHEEL_EVENT: 7;
declare const G3_KEYBOARD_EVENT: 8;
declare const G3_KEY_DOWN_EVENT: 9;
declare const G3_KEY_UP_EVENT: 10;
declare namespace g3 {
    interface ClientMessages {
        [G3_INIT_EVENT]: InitMessage;
        [G3_RESIZE_EVENT]: ResizeMessage;
        [G3_POINTER_MOVE_EVENT]: PointerMoveMessage;
        [G3_BUTTON_DOWN_EVENT]: ButtonDownMessage;
        [G3_BUTTON_UP_EVENT]: ButtonUpMessage;
        [G3_WHEEL_EVENT]: WheelMessage;
        [G3_KEY_DOWN_EVENT]: KeyDownMessage;
        [G3_KEY_UP_EVENT]: KeyUpMessage;
    }
    interface InitMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_INIT_EVENT;
        canvas: OffscreenCanvas;
        sketch: string;
        baseUri: string;
        libDirectory: string;
    }
    interface ResizeMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_RESIZE_EVENT;
        Width: number;
        Height: number;
    }
    interface PointerMessage extends Message {
        PointerLocation: [number, number];
        PointerMovement: [number, number];
        Force: number;
    }
    interface PointerMoveMessage extends PointerMessage {
        [GS_EVENT_TYPE]: typeof G3_POINTER_MOVE_EVENT;
    }
    interface ButtonMessage extends Message {
        Button: number;
    }
    interface ButtonDownMessage extends ButtonMessage {
        [GS_EVENT_TYPE]: typeof G3_BUTTON_DOWN_EVENT;
    }
    interface ButtonUpMessage extends ButtonMessage {
        [GS_EVENT_TYPE]: typeof G3_BUTTON_UP_EVENT;
    }
    interface WheelMessage {
        WheelDelta: number;
        WheelMode: number;
    }
    interface DragMessage {
        Location2D: [number, number];
        Movement2D: [number, number];
        Displacement2D: [number, number];
    }
    interface KeyboardMessage {
        Key: string;
        KeyCode: number;
    }
    interface KeyDownMessage extends KeyboardMessage {
        [GS_EVENT_TYPE]: typeof G3_KEY_DOWN_EVENT;
    }
    interface KeyUpMessage extends KeyboardMessage {
        [GS_EVENT_TYPE]: typeof G3_KEY_UP_EVENT;
    }
}
declare const G3_NEED_FULL_SCREEN: 1;
declare const G3_NEED_SQAURE_VIEW: 2;
declare namespace g3 {
    interface WorkerEvents {
        [G3_NEED_FULL_SCREEN]: FullScreenMessage;
        [G3_NEED_SQAURE_VIEW]: SquareViewMessage;
    }
    interface FullScreenMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_NEED_FULL_SCREEN;
    }
    interface SquareViewMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_NEED_SQAURE_VIEW;
    }
}
declare namespace g3 {
    class View extends HTMLCanvasElement {
    }
}
