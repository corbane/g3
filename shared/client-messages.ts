
const G3_INIT_EVENT         : 1  = 1
const G3_RESIZE_EVENT       : 2  = 2
const G3_POINTER_EVENT      : 3  = 3
const G3_POINTER_MOVE_EVENT : 4  = 4
const G3_BUTTON_DOWN_EVENT  : 5  = 5
const G3_BUTTON_UP_EVENT    : 6  = 6
const G3_WHEEL_EVENT        : 7  = 7
const G3_KEYBOARD_EVENT     : 8  = 8
const G3_KEY_DOWN_EVENT     : 9  = 9
const G3_KEY_UP_EVENT       : 10 = 10

declare namespace g3
{
    interface ClientMessages
    {
        [G3_INIT_EVENT]        : InitMessage
        [G3_RESIZE_EVENT]      : ResizeMessage
        [G3_POINTER_MOVE_EVENT]: PointerMoveMessage
        [G3_BUTTON_DOWN_EVENT] : ButtonDownMessage
        [G3_BUTTON_UP_EVENT]   : ButtonUpMessage
        [G3_WHEEL_EVENT]       : WheelMessage
        [G3_KEY_DOWN_EVENT]    : KeyDownMessage
        [G3_KEY_UP_EVENT]      : KeyUpMessage
    }

    interface InitMessage extends Message
    {
        [GS_EVENT_TYPE]: typeof G3_INIT_EVENT
        canvas: OffscreenCanvas
        sketch: string
        baseUri: string
        libDirectory: string
    }

    // Window Events

    interface ResizeMessage extends Message
    {
        [GS_EVENT_TYPE]: typeof G3_RESIZE_EVENT

        Width: number
        Height: number
    }

    // Pointer Event

    interface PointerMessage extends Message
    {
        PointerLocation: [number, number]
        PointerMovement: [number, number]
        Force     : number
    }

    interface PointerMoveMessage extends PointerMessage
    {
        [GS_EVENT_TYPE]: typeof G3_POINTER_MOVE_EVENT
    }

    // Button Event

    interface ButtonMessage extends Message
    {
        Button: number
    }
    
    interface ButtonDownMessage extends ButtonMessage
    {
        [GS_EVENT_TYPE]: typeof G3_BUTTON_DOWN_EVENT
    }

    interface ButtonUpMessage extends ButtonMessage
    {
        [GS_EVENT_TYPE]: typeof G3_BUTTON_UP_EVENT
    }

    interface WheelMessage
    {
        WheelDelta: number
        WheelMode : number // 0x00 | 0x01 | 0x02  // DOM_DELTA_PIXEL | DOM_DELTA_LINE | DOM_DELTA_PAGE
    }
        
    interface DragMessage
    {
        Location2D    : [number, number]
        Movement2D    : [number, number]
        Displacement2D: [number, number]
    }

    // Keyboard Events

    interface KeyboardMessage
    {
        Key: string
        KeyCode: number
    }

    interface KeyDownMessage extends KeyboardMessage
    {
        [GS_EVENT_TYPE]: typeof G3_KEY_DOWN_EVENT
    }

    interface KeyUpMessage extends KeyboardMessage
    {
        [GS_EVENT_TYPE]: typeof G3_KEY_UP_EVENT
    }

}
