<h2>Introduction</h2>
The purpose is to build basic ts based ui components such as button and alike

<h2>Motivation</h2>
in case UI library take to much time to load or in online course on simply to practice

<h2>Usage</h2>

```tsx

      {/* nesting is possible because children are used */}
      <Button onClick={clickHandler}><span style={{color:'orange'}}>Click</span></Button>
      <p>select car</p>
      <Select onChange={clickHandler} style={{width:'100px'}}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>


```

<h2>Design</h2>
<ul>
<li>use existing DOM interface for props e.g. HTMLButtonElement for Button

```tsx
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={styles.container} {...props}>
      {props.children}
    </button>
  );
};
```

</li>
<li>use children to allow any nesting elements</li>
<li>the UI style is not amazing but using the DOM interface using typescript generic as part of the component make the usage very simple and atractive<li>
</ul>
