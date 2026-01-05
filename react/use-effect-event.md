# useEffectEvent

useEffectEvent is a React Hook that allows you to extract non-reactive logic from Effects. It solves the common problem where you need to read the latest value of props or state inside an Effect without causing that Effect to re-run when those values change.

**useEffectEvent creates a stable function reference that always reads the latest values, but doesn't trigger Effect re-execution when those values change.**

```ts
const onMessage = useEffectEvent((msg) => {
  showToast(msg, { variant: userPreference });
});

useEffect(() => {
  const unsubscribe = messageService.subscribe(onMessage);
  return unsubscribe;
}, []); // Subscribe once, callback uses latest userPreference
```
