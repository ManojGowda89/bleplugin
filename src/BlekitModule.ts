import { NativeModule, requireNativeModule } from 'expo';

import { BlekitModuleEvents } from './Blekit.types';

declare class BlekitModule extends NativeModule<BlekitModuleEvents> {
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

export default requireNativeModule<BlekitModule>('Blekit');
