export const CLEAR_CONTEXT = 'clear_context';
export const NON_BOT = ['user', 'admin', CLEAR_CONTEXT];
export const SERIAL_MODE = 'serial';
export const PARALLEL_MODE = 'parallel';
export const SERIAL_SESSION = 'serial_session';
export const PARALLEL_MODEL_MAX = 3;
export const DEFAULT_BOT = 'gpt-3.5-turbo';
export const BASE_IMG_URL = 'https://oss.openmmlab.com/alles-bot/';
export const STREAM_BOT = ['openai', 'minimax', 'claude', 'gpt-4', 'internlm'];
export interface ModelState {
    name: string;
    model: string;
    avatar: string;
    background: string;
}
