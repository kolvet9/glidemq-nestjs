import { SetMetadata } from '@nestjs/common';
import { QUEUE_EVENT_METADATA } from '../glidemq.constants';

export type QueueEventType =
  | 'added'
  | 'completed'
  | 'failed'
  | 'active'
  | 'progress'
  | 'stalled'
  | 'retrying'
  | 'removed'
  | 'drained'
  | 'promoted';

export const OnQueueEvent = (event: QueueEventType): MethodDecorator =>
  SetMetadata(QUEUE_EVENT_METADATA, event);
