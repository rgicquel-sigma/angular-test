export interface ObsEvent {
  date: Date;
  type: 'START' | 'NEXT' | 'ERROR' | 'COMPLETE' | 'CANCELLED' | 'UNSUB';
  obsName: string;
  obsArgs: Array<string> | null;
}
