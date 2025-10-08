# forwardRef

`useImperativeHandle` customizes the ref value exposed to a parent component when using `forwardRef`. This allows you to limit what actions the parent can perform on a child component.

```js
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} />;
});

function Parent() {
    const ref = useRef();

    return (
        <div>
            <CustomInput ref={ref} />
            <button onClick={() => ref.current.focus()}>Focus Input</button>
        </div>
    );
}
```

[CodeSandbox](https://codesandbox.io/p/sandbox/useimperativehandle-cgdymy)
