# Compound components

Compound components are a set of components that work together to form a complete UI element. They share implicit state without prop drilling, and they compose naturally.

```tsx
<Select value={value} onChange={onChange}>
  <Select.Trigger>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Content>
    {options.map(option => (
      <Select.Item key={option.id} value={option.id}>
        <Select.ItemText>{option.label}</Select.ItemText>
        <Select.ItemIndicator />
      </Select.Item>
    ))}
  </Select.Content>
</Select>
```
