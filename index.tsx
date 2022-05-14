import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
interface props {
  iniValue?: number;
  inputType?: "s" | "ms";
  formatTime?: "hh:mm:ss" | "ss";
  autoStart?: boolean;
  render: (timer: string) => JSX.Element;
}
export function formatSeconds(seconds: number) {
  var date = new Date(1970, 0, 1);
  date.setSeconds(seconds);
  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}
const TimerScreen = forwardRef(
  (
    {
      inputType = "s",
      iniValue,
      render,
      formatTime = "hh:mm:ss",
      autoStart = false,
    }: props,
    ref
  ) => {
    const [runTimer, setRunTimer] = useState(autoStart);
    const [value, setValue] = useState(
      (iniValue ?? 0) * (inputType === "s" ? 1 : 0.001)
    );
    const [timer, setTimer] = useState(formatSeconds(value));

    let val = value;
    useEffect(() => {
      if (!runTimer) {
        return;
      }
      const intervalId = setInterval(() => {
        val += 1;
        const time = formatSeconds(val);
        setValue(val);
        setTimer(formatTime === "ss" ? String(val) : time);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, [runTimer]);

    useImperativeHandle(ref, () => ({
      start() {
        setRunTimer(true);
      },
      stop() {
        setRunTimer(false);
      },
      reset() {
        setRunTimer(false);
        setValue(0);
        setTimer(formatTime === "ss" ? "0" : "00:00:00");
      },
    }));

    return render(timer) ?? <></>;
  }
);
export default TimerScreen;
