# bindless-cx

bind を使わずに classnames で CSS Modules できるか。

```tsx
import classNames from "classnames/bind";
import styles from "./bind-less.module.css";
import cx from "classnames";

export const Bindless = ({ hoge, fuga }: { hoge: boolean; fuga: boolean }) => {
  let className = cx({
    [styles.base]: true,
    [styles.inProgress]: hoge,
    [styles.error]: fuga,
  });
  return <button className={className}>Bindless</button>;
};
```

すればよい。

http://ojisan-toybox.github.io/bindless-cx/
