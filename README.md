# React / React Native - Runtimer

Package made with ts you can render (React or React native)jsx through render props.

> ## Installation

Use the package manager npm or yarn to install.

```bash
npm i @trillionthoughts/react-react_native-runtimer
```

or

```bash
yarn add @trillionthoughts/react-react_native-runtimer
```

> ## Usage

### In React

```python
...
import Timer from "@trillionthoughts/react-react_native-runtimer"

{...
 <Timer render={(timer) => <p>{timer}<p> }/>;
...};
```

### In React Native

```python
...
import Timer from "@trillionthoughts/react-react_native-runtimer"

{...
 <Timer render={(timer) => <Text>{timer}<Text> }/>;
...};
```

> ## Props

| Props      | usage                        | default    |
| ---------- | ---------------------------- | ---------- |
| iniValue   | in sec or ms                 | 0          |
| inputType  | "s" or "ms"                  | "s"        |
| formatTime | "hh:mm:ss" or "ss"           | "hh:mm:ss" |
| render     | (timer:string)=> jsx.element | <></>      |
| autoStart  | boolean                      | false      |
| start      | ref.current.start()          | -          |
| stop       | ref.current.stop()           | -          |
| toggle     | ref.current.toggle()         | -          |
| reset      | ref.current.reset()          | -          |

> ## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.[Github](https://github.com/lsanthosh2021/react-react_native-runtimer/issues)

> ## Licence

[MIT](https://github.com/lsanthosh2021/react-react_native-runtimer/blob/master/LICENCE)
