import {AVPlaybackStatus} from './AV';
import ExponentAV from './ExponentAV';
import {exitFullscreen, requestFullscreen} from './FullscreenUtils.web';

export default {
    get name(): string {
        return 'ExpoVideoManager';
    },
    get ScaleNone(): string {
        return 'none';
    },
    get ScaleToFill(): string {
        return 'fill';
    },
    get ScaleAspectFit(): string {
        return 'contain';
    },
    get ScaleAspectFill(): string {
        return 'cover';
    },

    async setFullscreen(
        element: HTMLMediaElement,
        isFullScreenEnabled: boolean
    ): Promise<AVPlaybackStatus> {
        if (isFullScreenEnabled) {
            await requestFullscreen(element);
        } else {
            await exitFullscreen(element);
        }
        return ExponentAV.getStatusForVideo(element);
    },
};
