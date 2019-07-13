
const G3_NEED_FULL_SCREEN : 1 = 1
const G3_NEED_SQAURE_VIEW : 2 = 2

declare namespace g3
{
    interface WorkerEvents
    {
        [G3_NEED_FULL_SCREEN]: FullScreenMessage
        [G3_NEED_SQAURE_VIEW]: SquareViewMessage
    }

    interface FullScreenMessage extends Message
    {
        [GS_EVENT_TYPE]: typeof G3_NEED_FULL_SCREEN
    }
    interface SquareViewMessage extends Message
    {
        [GS_EVENT_TYPE]: typeof G3_NEED_SQAURE_VIEW
    }
}