export interface CounterState {
  items: { id: number; name: string; value: number }[];
  effectCalls: number;
  effectTimes: number[]; // 各Effect完了時間
}

export const initialState: CounterState = {
  items: [],
  effectCalls: 0,
  effectTimes: []
};
